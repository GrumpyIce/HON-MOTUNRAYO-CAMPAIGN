import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/apc.jpg" alt="Logo" className="logo" />
      </div>
      <ul className="navbar-menu">
        <li><a href="#about">About Her</a></li>
        <li><a href="#achievements">Achievements</a></li>
        <li><a href="#howtovote">How to Vote</a></li>
        <li><a href="#support">Support</a></li>
        {/* <li><a href="#endorsement">Endorsement</a></li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
