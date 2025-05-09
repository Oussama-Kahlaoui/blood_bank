const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();

// CORS configuration
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

// Middleware
app.use(express.json());

// Database connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Connect to database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Authentication middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access denied' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }
    req.user = user;
    next();
  });
};

// Routes

// Register new admin
app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const query = 'INSERT INTO admins (username, password) VALUES (?, ?)';
  db.query(query, [username, hashedPassword], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error creating admin' });
    }
    res.status(201).json({ message: 'Admin created successfully' });
  });
});

// Login
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  const query = 'SELECT * FROM admins WHERE username = ?';
  db.query(query, [username], async (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error during login' });
    }

    if (results.length === 0) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const user = results[0];
    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET);
    res.json({ token });
  });
});

// Get blood requests
app.get('/api/requests', authenticateToken, (req, res) => {
  const query = 'SELECT * FROM blood_requests ORDER BY created_at DESC';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error fetching requests' });
    }
    res.json(results);
  });
});

// Create blood request
app.post('/api/requests', (req, res) => {
  const { patientName, bloodType, units, hospital, contactNumber, urgency, additionalNotes } = req.body;
  
  const query = 'INSERT INTO blood_requests (patient_name, blood_type, units, hospital, contact_number, urgency, additional_notes) VALUES (?, ?, ?, ?, ?, ?, ?)';
  db.query(query, [patientName, bloodType, units, hospital, contactNumber, urgency, additionalNotes], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error creating request' });
    }
    res.status(201).json({ message: 'Request created successfully', id: result.insertId });
  });
});

// Get blood inventory
app.get('/api/inventory', authenticateToken, (req, res) => {
  const query = 'SELECT * FROM blood_inventory';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error fetching inventory' });
    }
    res.json(results);
  });
});

// Update blood inventory
app.post('/api/inventory', authenticateToken, (req, res) => {
  const { bloodType, units } = req.body;
  
  const query = 'INSERT INTO blood_inventory (blood_type, units) VALUES (?, ?) ON DUPLICATE KEY UPDATE units = units + ?';
  db.query(query, [bloodType, units, units], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error updating inventory' });
    }
    res.json({ message: 'Inventory updated successfully' });
  });
});

// Add this after your other routes

app.post('/api/donate', (req, res) => {
  const { fullName, email, phone, bloodType, donationDate, additionalInfo } = req.body;

  const query = 'INSERT INTO blood_inventory (full_name, email, phone, blood_type, donation_date, additional_info) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(query, [fullName, email, phone, bloodType, donationDate, additionalInfo], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error saving donation' });
    }
    res.status(201).json({ message: 'Donation saved successfully' });
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 