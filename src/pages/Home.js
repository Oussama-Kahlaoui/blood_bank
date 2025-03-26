import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <h1>Welcome to Blood Bank</h1>
        <p>Your donation can save lives</p>
        <div className="cta-buttons">
          <Link to="/donate" className="btn btn-primary">Donate Blood</Link>
          <Link to="/request" className="btn btn-secondary">Request Blood</Link>
        </div>
      </div>
      
      <div className="info-section">
        <h2>Why Donate Blood?</h2>
        <div className="info-cards">
          <div className="info-card">
            <h3>Save Lives</h3>
            <p>Your blood donation can help save up to three lives.</p>
          </div>
          <div className="info-card">
            <h3>Health Benefits</h3>
            <p>Regular blood donation can help maintain healthy iron levels.</p>
          </div>
          <div className="info-card">
            <h3>Community Impact</h3>
            <p>Help maintain an adequate blood supply for your community.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 