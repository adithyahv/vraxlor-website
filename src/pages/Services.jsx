import { useEffect } from 'react';
import { SERVICES, SERVICE_LIFECYCLE } from '../constants/data';
import BackgroundBeams from '../components/common/BackgroundBeams';

import './Services.css';

// Custom SVG Icons for Services
const ServiceIcon = ({ id }) => {
  switch (id) {
    case 'ai-strategy-consulting':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      );
    case 'ai-poc-mvp':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
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
    case 'modern-data-platforms':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
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
    case 'agentic-ai':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="10" rx="2" />
          <circle cx="12" cy="5" r="2" />
          <path d="M12 7v4" />
          <line x1="8" y1="16" x2="8" y2="16" />
          <line x1="16" y1="16" x2="16" y2="16" />
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
    case 'mlops':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      );
    case 'trustworthy-ai':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );
    case 'ai-ux-design':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2" />
          <line x1="9" y1="9" x2="9.01" y2="9" />
          <line x1="15" y1="9" x2="15.01" y2="9" />
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
