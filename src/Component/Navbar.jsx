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
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/academics'}>Academics</Link></li>
          <li><Link to={'/about'}>About Us</Link></li>
          <li><Link to={'/courses'}>Courses</Link></li>
          <li><Link to={'/gallery'}>Gallery</Link></li>
          <li><Link to={'/contact'}>Contact</Link></li>
          <li><Link to={'/admission'}>Admission</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
