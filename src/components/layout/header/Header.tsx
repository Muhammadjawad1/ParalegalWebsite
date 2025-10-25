import React from 'react';
import { Link } from 'react-router-dom';
import { useMobileMenu } from '../../../hooks';
import type { HeaderProps } from '../../../types';
import './Header.css';

const Header: React.FC<HeaderProps> = ({ currentPage = 'home' }) => {
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useMobileMenu();

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/" className="logo-link" onClick={closeMobileMenu}>
            <span className="logo-text">Notary</span>
          </Link>
        </div>
        <nav className={`navigation ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li><Link to="/" className={currentPage === 'home' ? 'active' : ''} onClick={closeMobileMenu}>Home</Link></li>
            <li className="dropdown">
              <a href="#practice-areas" onClick={closeMobileMenu}>
                Practice Areas
                <span className="dropdown-arrow">▼</span>
              </a>
            </li>
            <li><a href="#testimonials" onClick={closeMobileMenu}>Testimonials</a></li>
            <li><Link to="/about" className={currentPage === 'about' ? 'active' : ''} onClick={closeMobileMenu}>About</Link></li>
            <li><Link to="/contact" className={currentPage === 'contact' ? 'active' : ''} onClick={closeMobileMenu}>Contact</Link></li>
          </ul>
        </nav>
        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;