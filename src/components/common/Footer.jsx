import { Link } from 'react-router-dom';
import { FOOTER_LINKS, COMPANY_INFO } from '../../constants/data';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="footer-content container">
        <div className="footer-brand">
          <div className="logo">{COMPANY_INFO.name}</div>
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
          <a href="#" aria-label="LinkedIn">
            LinkedIn
          </a>
          <a href="#" aria-label="Twitter">
            Twitter
          </a>
          <a href="#" aria-label="YouTube">
            YouTube
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


