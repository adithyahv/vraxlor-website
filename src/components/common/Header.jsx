import { useState } from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../../constants/data';
import logoImage from '../../assets/images/logo.png';
import './Header.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src={logoImage} alt="Vraxlor" className="logo-image" />
      </Link>

      {/* Desktop Navigation */}
      <div className="nav-pill">
        <div className="nav-links">
          {NAV_LINKS.map((link) => (
            <Link key={link.label} to={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Hamburger Button */}
      <button
        className={`hamburger-btn ${mobileMenuOpen ? 'active' : ''}`}
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Desktop CTA */}
      <Link to="/contact" className="desktop-cta">
        <button className="primary-btn">Let&apos;s Talk</button>
      </Link>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <div className="mobile-nav-links">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={closeMobileMenu}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link to="/contact" onClick={closeMobileMenu}>
            <button className="primary-btn mobile-cta-btn">Let&apos;s Talk</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
