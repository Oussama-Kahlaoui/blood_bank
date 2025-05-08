import React, { useState } from 'react';
import '../styles/RequestBlood.css';

const RequestBlood = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    bloodType: '',
    units: '',
    hospital: '',
    contactNumber: '',
    urgency: 'normal',
    additionalNotes: ''
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
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="request-page">
      <div className="request-header">
        <h1><i className="fas fa-hand-holding-medical"></i> Request Blood</h1>
        <p>Fill out the form below to request blood for your patient</p>
      </div>

      <div className="request-content">
        <div className="request-info">
          <h2>Important Information</h2>
          <ul>
            <li><i className="fas fa-check-circle"></i> All requests are verified by our team</li>
            <li><i className="fas fa-check-circle"></i> Emergency requests are prioritized</li>
            <li><i className="fas fa-check-circle"></i> You will be contacted within 30 minutes</li>
            <li><i className="fas fa-check-circle"></i> Please provide accurate contact information</li>
            <li><i className="fas fa-check-circle"></i> Blood availability is subject to stock</li>
          </ul>
        </div>

        <div className="request-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="patientName">Patient Name</label>
              <input
                type="text"
                id="patientName"
                name="patientName"
                value={formData.patientName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="bloodType">Blood Type Required</label>
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
              <label htmlFor="units">Units Required</label>
              <input
                type="number"
                id="units"
                name="units"
                min="1"
                max="10"
                value={formData.units}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="hospital">Hospital Name</label>
              <input
                type="text"
                id="hospital"
                name="hospital"
                value={formData.hospital}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contactNumber">Contact Number</label>
              <input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="urgency">Urgency Level</label>
              <select
                id="urgency"
                name="urgency"
                value={formData.urgency}
                onChange={handleChange}
                required
              >
                <option value="normal">Normal</option>
                <option value="urgent">Urgent</option>
                <option value="emergency">Emergency</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="additionalNotes">Additional Notes</label>
              <textarea
                id="additionalNotes"
                name="additionalNotes"
                value={formData.additionalNotes}
                onChange={handleChange}
                placeholder="Please provide any additional information that might be helpful..."
              />
            </div>

            <button type="submit" className="btn btn-primary">
              <i className="fas fa-paper-plane"></i> Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RequestBlood; 