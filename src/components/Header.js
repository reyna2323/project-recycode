import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Adjust this path according to your project structure
import './Header.css'; // Ensure to link the correct CSS file

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev); // Toggle the menu open state
    };

    return (
        <header className="header">
            <div className="header-content">
                <div className="logo">
                    <img src={logo} alt="Project Recycode Logo" className="logo-img" />
                    <h1>PROJECT RECYCODE</h1>
                </div>
                <div className="menu-icon" onClick={toggleMenu}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>
            <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/mission">Our Mission</Link></li>
                    <li><Link to="/impact">Impact</Link></li>
                    <li><Link to="/textile-collection">Textile Collection</Link></li>
                    <li><Link to="/team">Team</Link></li>
                    <li><Link to="/donate">Donate</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
                <button className="close-menu" onClick={toggleMenu}>Close</button>
            </nav>
        </header>
    );
};

export default Header;
