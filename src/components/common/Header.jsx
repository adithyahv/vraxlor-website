import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS, SERVICE_LIFECYCLE, SERVICES } from '../../constants/data';
import logoImage from '../../assets/images/logo.png';
import './Header.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [resourcesMenuOpen, setResourcesMenuOpen] = useState(false);

  const resourcesLinks = [
    { label: 'Blogs', href: '/resources/blogs' },
    { label: 'Guides & Ebooks', href: '/resources/guides' },
    { label: 'Careers', href: '/resources/careers' },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const toggleServicesMenu = () => {
    setServicesMenuOpen(!servicesMenuOpen);
    setResourcesMenuOpen(false);
  };

  const closeServicesMenu = () => {
    setServicesMenuOpen(false);
  };

  const toggleResourcesMenu = () => {
    setResourcesMenuOpen(!resourcesMenuOpen);
    setServicesMenuOpen(false);
  };

  const closeResourcesMenu = () => {
    setResourcesMenuOpen(false);
  };

  // Allow other components (e.g., Services cards) to open the services overlay
  useEffect(() => {
    const handler = () => setServicesMenuOpen(true);
    window.addEventListener('openServicesOverlay', handler);
    return () => window.removeEventListener('openServicesOverlay', handler);
  }, []);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo">
          <img src={logoImage} alt="Vraxlor" className="logo-image" />
          <span className="logo-text">Vraxlor</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="nav-pill">
          <div className="nav-links">
            {NAV_LINKS.map((link) => {
              if (link.label === 'Services') {
                return (
                  <button
                    key={link.label}
                    className="nav-link-item services-toggle"
                    onClick={toggleServicesMenu}
                    aria-expanded={servicesMenuOpen}
                  >
                    {link.label}
                    <span className={`chevron ${servicesMenuOpen ? 'open' : ''}`}>▾</span>
                  </button>
                );
              }
              if (link.label === 'Resources') {
                return (
                  <div key={link.label} className="nav-item-dropdown">
                    <button
                      className="nav-link-item resources-toggle"
                      onClick={toggleResourcesMenu}
                      aria-expanded={resourcesMenuOpen}
                    >
                      {link.label}
                      <span className={`chevron ${resourcesMenuOpen ? 'open' : ''}`}>▾</span>
                    </button>
                    {resourcesMenuOpen && (
                      <div className="resources-menu">
                        {resourcesLinks.map((item) => (
                          <Link
                            key={item.label}
                            to={item.href}
                            className="resources-menu-link"
                            onClick={closeResourcesMenu}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link key={link.label} to={link.href} className="nav-link-item">
                  {link.label}
                </Link>
              );
            })}
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
              {NAV_LINKS.map((link) => {
                if (link.label === 'Services') {
                  return (
                    <button
                      key={link.label}
                      className="mobile-services-toggle"
                      onClick={() => {
                        closeMobileMenu();
                        toggleServicesMenu();
                      }}
                    >
                      {link.label}
                    </button>
                  );
                }
                if (link.label === 'Resources') {
                  return (
                    <div key={link.label} className="mobile-resources-group">
                      <span className="mobile-resources-label">{link.label}</span>
                      <div className="mobile-resources-links">
                        {resourcesLinks.map((item) => (
                          <Link
                            key={item.label}
                            to={item.href}
                            onClick={() => {
                              closeMobileMenu();
                              closeResourcesMenu();
                            }}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }
                return (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={closeMobileMenu}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
            <Link to="/contact" onClick={closeMobileMenu}>
              <button className="primary-btn mobile-cta-btn">Let&apos;s Talk</button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Full-Page Services Overlay */}
      <div className={`services-overlay ${servicesMenuOpen ? 'open' : ''}`}>
        <div className="services-overlay-header">
          <div className="services-header-brand">
            <img src={logoImage} alt="Vraxlor" className="services-logo" />
            <span className="services-overlay-title">Our Services</span>
          </div>
          <button className="services-close-btn" onClick={closeServicesMenu} aria-label="Close menu">
            ✕
          </button>
        </div>
        <div className="services-overlay-content">
          {SERVICE_LIFECYCLE.map((phase) => (
            <div key={phase.phase} className="services-column">
              <div className="services-phase-header">
                <span className="services-phase-number">{phase.phase}</span>
                <span className="services-phase-name">{phase.name}</span>
              </div>
              <ul className="services-list">
                {SERVICES.filter(s => s.phase === phase.name.toLowerCase().split(' ')[0])
                  .map(service => (
                    <li key={service.id}>
                      <Link
                        to={`/services/${service.id}`}
                        className="services-item-link"
                        onClick={closeServicesMenu}
                      >
                        {service.title}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Backdrop */}
      {servicesMenuOpen && (
        <div className="services-backdrop" onClick={closeServicesMenu}></div>
      )}
    </>
  );
};

export default Header;
