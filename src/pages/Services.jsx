import { useEffect } from 'react';
import { SERVICES, SERVICE_LIFECYCLE } from '../constants/data';
import BackgroundBeams from '../components/common/BackgroundBeams';

import './Services.css';

// Custom SVG Icons for Services
const ServiceIcon = ({ id }) => {
  switch (id) {
    case 'ai-consulting':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      );
    case 'ai-discovery-workshops':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
        </svg>
      );
    case 'data-maturity-assessment':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      );
    case 'data-engineering':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      );
    case 'data-lake-warehouse':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      );
    case 'cloud-data-engineering':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
        </svg>
      );
    case 'business-intelligence':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      );
    case 'machine-learning':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      );
    case 'generative-ai':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      );
    case 'computer-vision':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case 'nlp-solutions':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      );
    case 'mlops-managed':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <line x1="8" y1="12" x2="16" y2="12" />
        </svg>
      );
    case 'ai-integration':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      );
    case 'ai-strategy':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      );
    case 'custom-ai':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3l2.5 5.5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-.5L12 3z" />
        </svg>
      );
    case 'data-migration':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      );
    case 'cognitive-systems':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case 'web-dev':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="14" rx="2" />
          <line x1="3" y1="8" x2="21" y2="8" />
          <line x1="8" y1="12" x2="16" y2="12" />
        </svg>
      );
    case 'mobile-dev':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="7" y="2" width="10" height="20" rx="2" />
          <line x1="10" y1="6" x2="14" y2="6" />
          <circle cx="12" cy="18" r="1" />
        </svg>
      );
    case 'google-ads-marketing':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="3 17 9 11 13 15 21 7" />
          <polyline points="14 7 21 7 21 14" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
  }
};

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Group services by phase
  const servicesByPhase = {
    discover: SERVICES.filter(s => s.phase === 'discover'),
    organize: SERVICES.filter(s => s.phase === 'organize'),
    develop: SERVICES.filter(s => s.phase === 'develop'),
    deploy: SERVICES.filter(s => s.phase === 'deploy'),
  };

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <BackgroundBeams />
        <div className="container hero-content">
          <span className="hero-eyebrow">End-to-End AI Engineering</span>
          <h1 className="hero-title">
            Engineering the <br />
            <span className="text-gradient">Future of Intelligence</span>
          </h1>
          <p className="hero-subtitle">
            From strategic discovery to autonomous agents and MLOps. We build the enterprise-grade AI systems that power your next decade of growth.
          </p>
        </div>
      </section>

      {/* Lifecycle Overview */}
      <section className="lifecycle-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">The Vroxlar AI Lifecycle</h2>
            <p className="section-desc">
              A proven, stage-gated framework for predictable AI outcomes.
            </p>
          </div>

          <div className="lifecycle-steps">
            {SERVICE_LIFECYCLE.map((phase, index) => (
              <div key={phase.phase} className="lifecycle-step-card">
                <div className="step-number">{phase.phase}</div>
                <div className="step-content">
                  <h3>{phase.name}</h3>
                  <span className="step-subtitle">{phase.subtitle}</span>
                  <p>{phase.description}</p>
                </div>
                {index < SERVICE_LIFECYCLE.length - 1 && <div className="step-connector"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Detailed Services Phases */}
      <div className="services-content">
        {/* Phase 1: Discover */}
        <section className="phase-section" id="discover">
          <div className="container">
            <div className="phase-intro">
              <span className="phase-badge">Phase 01</span>
              <h2>Discovery & Strategy</h2>
              <p>We align AI capabilities with your business goals, identifying high-value use cases and creating a roadmap for success.</p>
            </div>
            <div className="services-grid">
              {servicesByPhase.discover.map((service) => (
                <div key={service.id} className="service-card-modern">
                  <div className="card-icon">
                    <ServiceIcon id={service.id} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul className="deliverables-list">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Phase 2: Organize */}
        <section className="phase-section alt-bg" id="organize">
          <div className="container">
            <div className="phase-intro">
              <span className="phase-badge">Phase 02</span>
              <h2>Data Foundation</h2>
              <p>Building the robust, secure, and scalable data infrastructure required to train and run enterprise AI models.</p>
            </div>
            <div className="services-grid">
              {servicesByPhase.organize.map((service) => (
                <div key={service.id} className="service-card-modern">
                  <div className="card-icon">
                    <ServiceIcon id={service.id} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul className="deliverables-list">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Phase 3: Develop */}
        <section className="phase-section" id="develop">
          <div className="container">
            <div className="phase-intro">
              <span className="phase-badge">Phase 03</span>
              <h2>Core Development</h2>
              <p>Engineering advanced AI solutions, from custom LLMs and RAG systems to autonomous agents and computer vision.</p>
            </div>
            <div className="services-grid">
              {servicesByPhase.develop.map((service) => (
                <div key={service.id} className="service-card-modern">
                  <div className="card-icon">
                    <ServiceIcon id={service.id} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul className="deliverables-list">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Phase 4: Deploy */}
        <section className="phase-section alt-bg" id="deploy">
          <div className="container">
            <div className="phase-intro">
              <span className="phase-badge">Phase 04</span>
              <h2>Deployment & Ops</h2>
              <p>Ensuring long-term value with enterprise MLOps, governance frameworks, and continuous optimization.</p>
            </div>
            <div className="services-grid">
              {servicesByPhase.deploy.map((service) => (
                <div key={service.id} className="service-card-modern">
                  <div className="card-icon">
                    <ServiceIcon id={service.id} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul className="deliverables-list">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <section className="services-cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Business?</h2>
            <p>Let's discuss how Vroxlar's engineering-first approach can deliver measurable AI outcomes for your enterprise.</p>
            <button className="primary-btn-large">Schedule a Consultation</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
