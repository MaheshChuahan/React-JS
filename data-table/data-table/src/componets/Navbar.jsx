import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg px-4 py-3 shadow-lg" style={{
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderBottom: '1px solid rgba(255,255,255,0.1)'
  }}>
    <div className="container-fluid">
      <span className="navbar-brand fw-bold fs-3 text-white d-flex align-items-center">
        <i className="fas fa-database me-2"></i>
        Data Manager Pro
      </span>
      <div className="d-flex gap-4">
        <Link 
          className="nav-link text-white fw-semibold position-relative" 
          to="/"
          style={{
            transition: 'all 0.3s ease',
            padding: '8px 16px',
            borderRadius: '8px'
          }}
          onMouseOver={(e) => {
            e.target.style.background = 'rgba(255,255,255,0.1)';
            e.target.style.transform = 'translateY(-2px)';
          }}
          onMouseOut={(e) => {
            e.target.style.background = 'transparent';
            e.target.style.transform = 'translateY(0)';
          }}
        >
          <i className="fas fa-home me-1"></i>
          Dashboard
        </Link>
        <Link 
          className="nav-link text-white fw-semibold position-relative" 
          to="/add"
          style={{
            transition: 'all 0.3s ease',
            padding: '8px 16px',
            borderRadius: '8px'
          }}
          onMouseOver={(e) => {
            e.target.style.background = 'rgba(255,255,255,0.1)';
            e.target.style.transform = 'translateY(-2px)';
          }}
          onMouseOut={(e) => {
            e.target.style.background = 'transparent';
            e.target.style.transform = 'translateY(0)';
          }}
        >
          <i className="fas fa-plus me-1"></i>
          Add User
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;