// Navbar.js
import React, { useState } from 'react';
import '../Styles/Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logo/gsia-logo.png';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
        <Link to={'/'}><img src={logo} alt="GSIA" /></Link>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>
        <ul className={`nav-links ${showMenu ? 'show' : ''}`}>
          <Link to={'/'}><li>Home</li></Link>
          <Link to={'/academics'}><li>Academics</li></Link>
          <Link to={'/about'}><li>About Us</li></Link>
          <Link to={'/courses'}><li>Courses</li></Link>
          <Link to={'/gallery'}><li>Gallery</li></Link>
          <Link to={'/contact'}><li>Contact</li></Link>
          <Link to={'/admission'}><li>Admission</li></Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
