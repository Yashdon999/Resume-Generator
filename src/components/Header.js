import React, { useState } from 'react';
import './Css/header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  const navLinks = [
    { text: 'Home', url: '#' },
    { text: 'About', url: '#' },
    { text: 'Contact', url: '#' },
  ];

  return (
    <header className="header">
      <div className="header-logo">My Website</div>
      <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
        <button className="header-nav-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className="header-nav-list">
          {navLinks.map((link, index) => (
            <li key={index} className="header-nav-item">
              <a className="header-nav-link" href={link.url}>{link.text}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
