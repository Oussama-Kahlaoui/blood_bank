import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const [requests, setRequests] = useState([]);
  const [inventory, setInventory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    fetchData();
  }, [navigate]);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('token');
      const [requestsRes, inventoryRes] = await Promise.all([
        fetch('http://localhost:5000/api/requests', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }),
        fetch('http://localhost:5000/api/inventory', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
      ]);

      if (!requestsRes.ok || !inventoryRes.ok) {
        throw new Error('Failed to fetch data');
      }

      const [requestsData, inventoryData] = await Promise.all([
        requestsRes.json(),
        inventoryRes.json()
      ]);

      setRequests(requestsData);
      setInventory(inventoryData);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1><i className="fas fa-tachometer-alt"></i> Dashboard</h1>
        <button onClick={handleLogout} className="btn btn-danger">
          <i className="fas fa-sign-out-alt"></i> Logout
        </button>
      </div>

      <div className="dashboard-content">
        <div className="inventory-section">
          <h2>Blood Inventory</h2>
          <div className="inventory-grid">
            {inventory.map(item => (
              <div key={item.blood_type} className="inventory-card">
                <h3>{item.blood_type}</h3>
                <p className="units">{item.units} units</p>
              </div>
            ))}
          </div>
        </div>

        <div className="requests-section">
          <h2>Recent Blood Requests</h2>
          <div className="requests-table">
            <table>
              <thead>
                <tr>
                  <th>Patient Name</th>
                  <th>Blood Type</th>
                  <th>Units</th>
                  <th>Hospital</th>
                  <th>Urgency</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {requests.map(request => (
                  <tr key={request.id}>
                    <td>{request.patient_name}</td>
                    <td>{request.blood_type}</td>
                    <td>{request.units}</td>
                    <td>{request.hospital}</td>
                    <td>
                      <span className={`urgency-badge ${request.urgency}`}>
                        {request.urgency}
                      </span>
                    </td>
                    <td>
                      <span className={`status-badge ${request.status}`}>
                        {request.status}
                      </span>
                    </td>
                    <td>{new Date(request.created_at).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 