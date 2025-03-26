import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Blood Bank</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/donate">Donate</Link>
        <Link to="/request">Request Blood</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </nav>
  );
};

export default Navbar; 