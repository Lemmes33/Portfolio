import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <p>Logo</p>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#" className="nav-link">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="nav-link">
            Projects
          </a>
        </li>
        <li>
          <a href="#" className="nav-link">
            About
          </a>
        </li>
        <li>
          <a href="#" className="nav-link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;