import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import {
  Mail, Phone, Brain, TestTube, Database, Factory, Gem, FlaskConical,
  ArrowRight, Quote, CheckCircle, AlertCircle, Briefcase, BarChart3, Layers
} from 'lucide-react';
import { COMPANY_INFO, SERVICES, USE_CASES } from '../constants/data';
import prashanhImage from '../assets/images/team/prashanh-vr.jpg';
import FloatingLines from '../components/common/FloatingLines';
import './Contact.css';

// Icon mapping for services
const serviceIcons = {
  'ai-consulting': Brain,
  'ai-poc': TestTube,
  'big-data-consulting': Database,
  'default': Layers
};

// Featured items for CTA sections
const featuredServices = SERVICES.slice(0, 3);
const featuredUseCases = USE_CASES.slice(0, 3);

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  // ---------------------------------------------------------
  // 1. SIGN UP at https://www.emailjs.com/
  // 2. CREATE a Service (e.g. Gmail) -> Get Service ID
  // 3. CREATE a Template -> Get Template ID
  // 4. GO TO Account > Public Key -> Get Public Key
  // ---------------------------------------------------------
  const YOUR_SERVICE_ID = 'service_7591yra';
  const YOUR_TEMPLATE_ID = 'template_equfqqy';
  const YOUR_PUBLIC_KEY = 'bUOc3eQuzo-MDF9vW';

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus({ type: '', message: '' });

    setIsLoading(true);

    emailjs
      .sendForm(
        YOUR_SERVICE_ID,
        YOUR_TEMPLATE_ID,
        form.current,
        {
          publicKey: YOUR_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setStatus({
            type: 'success',
            message: 'Message sent successfully! We will get back to you soon.',
          });
          form.current.reset();
        },
        (error) => {
          console.error('FAILED...', error.text);
          setStatus({
            type: 'error',
            message: 'Failed to send message. Please try again or email us directly.',
          });
        },
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="contact-page-wrapper">
      {/* Animated Floating Lines Background */}
      <div className="contact-floating-lines-bg">
        <FloatingLines
          enabledWaves={['middle', 'bottom']}
          lineCount={[8, 12]}
          lineDistance={[6, 4]}
          linesGradient={['#6366f1', '#8b5cf6', '#a855f7', '#d946ef']}
          animationSpeed={0.6}
          interactive={true}
          bendRadius={4.0}
          bendStrength={-0.3}
          parallax={true}
          parallaxStrength={0.15}
          mixBlendMode="normal"
        />
      </div>
      <div className="contact-background-orb"></div>

      <div className="contact-container container">
        <div className="contact-split-layout">

          {/* LEFT SIDE: Info & Inspiration */}
          <div className="contact-left-panel">
            <span className="contact-eyebrow">Get in Touch</span>
            <h1 className="contact-heading">Let's Engineer <br /> Your <span className="text-gradient">AI Future.</span></h1>
            <p className="contact-subtext">
              Ready to transform your business? Whether you need a strategic roadmap,
              custom agents, or a full-scale platform—our team is ready to build.
            </p>

            <div className="contact-info-cards">
              <a href={`mailto:${COMPANY_INFO.email}`} className="info-card">
                <div className="info-icon-container">
                  <Mail size={22} strokeWidth={1.5} />
                </div>
                <div className="info-text">
                  <span className="info-label">Email Us</span>
                  <span className="info-value">{COMPANY_INFO.email}</span>
                </div>
              </a>

              <a href={`tel:${COMPANY_INFO.phone}`} className="info-card">
                <div className="info-icon-container">
                  <Phone size={22} strokeWidth={1.5} />
                </div>
                <div className="info-text">
                  <span className="info-label">Call Us</span>
                  <span className="info-value">{COMPANY_INFO.phone}</span>
                </div>
              </a>
            </div>

            <div className="social-connect">
              <span className="social-label">Follow our updates</span>
              <div className="social-icons">
                <a href="https://www.linkedin.com/company/vraxlorai/" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="LinkedIn">IN</a>
                <a href="https://x.com/vraxlor" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="Twitter">X</a>
                <a href="https://www.instagram.com/vraxlor?igsh=MW54a2Rjc3lnd2tjYQ==" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="Instagram">IG</a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Glass Form */}
          <div className="contact-right-panel">
            <div className="glass-form-container">
              <div className="form-header">
                <h3>Send a Message</h3>
                <p>We usually respond within 24 hours.</p>
              </div>

              <form className="modern-form" ref={form} onSubmit={sendEmail}>
                <div className="form-row">
                  <div className="form-group floating-label">
                    <input type="text" id="user_name" name="user_name" required placeholder=" " />
                    <label htmlFor="user_name">Full Name</label>
                  </div>

                  <div className="form-group floating-label">
                    <input type="email" id="user_email" name="user_email" required placeholder=" " />
                    <label htmlFor="user_email">Email Address</label>
                  </div>
                </div>

                <div className="form-group floating-label">
                  <input type="text" id="company" name="company" placeholder=" " />
                  <label htmlFor="company">Company Name</label>
                </div>

                <div className="form-row">
                  <div className="form-group floating-label">
                    <input type="text" id="country" name="country" placeholder=" " />
                    <label htmlFor="country">Country</label>
                  </div>

                  <div className="form-group floating-label">
                    <input type="tel" id="phone" name="phone" placeholder=" " />
                    <label htmlFor="phone">Phone Number</label>
                  </div>
                </div>

                <div className="form-group floating-label">
                  <textarea id="message" name="message" rows="5" required placeholder=" "></textarea>
                  <label htmlFor="message">Tell us about your project...</label>
                </div>

                <button type="submit" className="submit-btn-premium" disabled={isLoading}>
                  {isLoading ? (
                    <span className="loading-spinner"></span>
                  ) : (
                    <>
                      Send Message
                      <span className="btn-arrow">→</span>
                    </>
                  )}
                </button>

                {status.message && (
                  <div className={`status-banner ${status.type}`}>
                    {status.type === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
                    <span>{status.message}</span>
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>

        {/* TEAM SPOTLIGHT SECTION */}
        <div className="team-spotlight-section">
          <div className="spotlight-card">
            <div className="spotlight-image-wrapper">
              <img src={prashanhImage} alt="Prashanh VR" className="spotlight-image" />
            </div>
            <div className="spotlight-content">
              <div className="quote-icon-container"><Quote size={40} strokeWidth={1} /></div>
              <blockquote className="spotlight-quote">
                "We don't just build technology; we build partnerships. My goal is to ensure that every interaction adds value to your business journey, turning complex AI concepts into clear, actionable growth strategies."
              </blockquote>
              <div className="spotlight-author">
                <h4>Prashanh VR</h4>
                <p>Head of Customer Engagement & Marketing</p>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Contact;

