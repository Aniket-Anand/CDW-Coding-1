import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span>Team</span>
      </div>
      <div className="navbar-right">
        <input type="text" placeholder="Search" />
      </div>
    </nav>
  );
}

export default Navbar;
