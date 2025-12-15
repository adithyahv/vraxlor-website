import { COMPANY_INFO } from '../constants/data';
import './Contact.css';

const Contact = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Let's Build Something Amazing</h1>
        <p>Ready to transform your business with AI? Get in touch with our team.</p>
      </div>

      <div className="contact-content container">
        <div className="contact-grid">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>
              Whether you're just exploring AI possibilities or ready to deploy, we're here to help.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <h3>Email</h3>
                <a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a>
              </div>

              <div className="contact-item">
                <h3>Phone</h3>
                <a href={`tel:${COMPANY_INFO.phone}`}>{COMPANY_INFO.phone}</a>
              </div>

              <div className="contact-item">
                <h3>Follow Us</h3>
                <div className="social-links">
                  <a href="#" aria-label="LinkedIn">LinkedIn</a>
                  <a href="#" aria-label="Twitter">Twitter</a>
                  <a href="#" aria-label="YouTube">YouTube</a>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="company">Company</label>
              <input type="text" id="company" name="company" />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea id="message" name="message" rows="6" required></textarea>
            </div>

            <button type="submit" className="primary-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;


