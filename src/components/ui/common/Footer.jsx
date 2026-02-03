import { Link } from 'react-router-dom';
import { FOOTER_LINKS, COMPANY_INFO } from '../../../constants/data';
import logoImage from '../../../assets/images/logo.png';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="footer-content container">
        <div className="footer-brand">
          <div className="logo">
            <img src={logoImage} alt="Vraxlor" className="footer-logo-image" />
            <span>{COMPANY_INFO.name}</span>
          </div>
          <p>{COMPANY_INFO.tagline}</p>
          <a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a>
          <a href={`tel:${COMPANY_INFO.phone}`}>{COMPANY_INFO.phone}</a>
        </div>
        <div className="footer-links">
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h4>{heading}</h4>
              {links.map((link) => (
                <Link key={link} to="/">
                  {link}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="footer-bottom container">
        <span>
          © {currentYear} {COMPANY_INFO.name}. All rights reserved.
        </span>
        <div className="socials">
          <a href="https://www.linkedin.com/company/vraxlorai/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            LinkedIn
          </a>
          <a href="https://x.com/vraxlor" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            X (Twitter)
          </a>
          <a href="https://www.instagram.com/vraxlor?igsh=MW54a2Rjc3lnd2tjYQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

