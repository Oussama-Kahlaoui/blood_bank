import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/api'; // Replace with your actual API endpoint

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const bloodBankService = {
  // Fetch available blood inventory
  fetchAvailableBlood: async () => {
    try {
      const response = await api.get('/blood-inventory');
      return response.data;
    } catch (error) {
      console.error('Error fetching blood inventory:', error);
      throw error;
    }
  },

  // Submit a blood donation
  submitDonation: async (donationData) => {
    try {
      const response = await api.post('/donations', donationData);
      return response.data;
    } catch (error) {
      console.error('Error submitting donation:', error);
      throw error;
    }
  },

  // Request blood
  requestBlood: async (requestData) => {
    try {
      const response = await api.post('/requests', requestData);
      return response.data;
    } catch (error) {
      console.error('Error requesting blood:', error);
      throw error;
    }
  },

  // Get donation history
  getDonationHistory: async (userId) => {
    try {
      const response = await api.get(`/donations/history/${userId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching donation history:', error);
      throw error;
    }
  },
};

export default bloodBankService; 