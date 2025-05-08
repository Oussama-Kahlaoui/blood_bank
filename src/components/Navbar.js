import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <img src={logo} alt="Blood Bank Logo" className="navbar-logo" />
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
          <i className="fas fa-home"></i> Home
        </Link>
        <Link to="/donate" className={location.pathname === '/donate' ? 'active' : ''}>
          <i className="fas fa-hand-holding-heart"></i> Donate
        </Link>
        <Link to="/request" className={location.pathname === '/request' ? 'active' : ''}>
          <i className="fas fa-hand-holding-medical"></i> Request Blood
        </Link>
        <Link to="/dashboard" className={location.pathname === '/dashboard' ? 'active' : ''}>
          <i className="fas fa-chart-line"></i> Dashboard
        </Link>
      </div>
    </nav>
  );
};

export default Navbar; 