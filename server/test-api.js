const fetch = require('node-fetch');

const API_URL = 'http://localhost:5000/api';
let token = '';

// Test data
const testData = {
  register: {
    username: 'admin',
    password: 'admin123'
  },
  request: {
    patientName: 'John Doe',
    bloodType: 'A+',
    units: 2,
    hospital: 'City Hospital',
    contactNumber: '1234567890',
    urgency: 'urgent',
    additionalNotes: 'Patient needs blood for surgery'
  },
  inventory: {
    bloodType: 'A+',
    units: 5
  }
};

// Helper function to make API calls
async function makeRequest(endpoint, method = 'GET', data = null, needsAuth = false) {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json'
    }
  };

  if (needsAuth && token) {
    options.headers['Authorization'] = `Bearer ${token}`;
  }

  if (data) {
    options.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(`${API_URL}${endpoint}`, options);
    const result = await response.json();
    console.log(`\n${method} ${endpoint}:`);
    console.log('Status:', response.status);
    console.log('Response:', result);
    return result;
  } catch (error) {
    console.error(`Error in ${method} ${endpoint}:`, error);
  }
}

// Run tests
async function runTests() {
  console.log('Starting API tests...\n');

  // 1. Register admin
  console.log('1. Testing Register Admin...');
  await makeRequest('/register', 'POST', testData.register);

  // 2. Login
  console.log('\n2. Testing Login...');
  const loginResult = await makeRequest('/login', 'POST', testData.register);
  if (loginResult && loginResult.token) {
    token = loginResult.token;
    console.log('Login successful, token received');
  }

  // 3. Create blood request
  console.log('\n3. Testing Create Blood Request...');
  await makeRequest('/requests', 'POST', testData.request);

  // 4. Get blood requests
  console.log('\n4. Testing Get Blood Requests...');
  await makeRequest('/requests', 'GET', null, true);

  // 5. Get blood inventory
  console.log('\n5. Testing Get Blood Inventory...');
  await makeRequest('/inventory', 'GET', null, true);

  // 6. Update blood inventory
  console.log('\n6. Testing Update Blood Inventory...');
  await makeRequest('/inventory', 'POST', testData.inventory, true);

  console.log('\nAll tests completed!');
}

// Run the tests
runTests(); 