import React, { useState } from 'react';
import '../styles/Donate.css';

const Donate = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    bloodType: '',
    lastDonation: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="donate-page">
      <div className="donate-header">
        <h1><i className="fas fa-hand-holding-heart"></i> Donate Blood</h1>
        <p>Your donation can save up to three lives</p>
      </div>

      <div className="donate-content">
        <div className="donate-info">
          <h2>Before You Donate</h2>
          <ul>
            <li><i className="fas fa-check-circle"></i> Be at least 18 years old</li>
            <li><i className="fas fa-check-circle"></i> Weigh at least 50 kg</li>
            <li><i className="fas fa-check-circle"></i> Be in good health</li>
            <li><i className="fas fa-check-circle"></i> Wait at least 56 days between donations</li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="donate-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="bloodType">Blood Type</label>
            <select
              id="bloodType"
              name="bloodType"
              value={formData.bloodType}
              onChange={handleChange}
              required
            >
              <option value="">Select Blood Type</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="lastDonation">Last Donation Date</label>
            <input
              type="date"
              id="lastDonation"
              name="lastDonation"
              value={formData.lastDonation}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Additional Information (Optional)</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            <i className="fas fa-paper-plane"></i> Submit Donation
          </button>
        </form>
      </div>
    </div>
  );
};

export default Donate; 