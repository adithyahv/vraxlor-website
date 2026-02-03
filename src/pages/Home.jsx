import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/common/Header';
import { COMPANY_INFO } from '../constants/data';
import FounderQuoteSection from '../components/sections/FounderQuoteSection';
import StatsSection from '../components/sections/StatsSection';
import ServicesSection from '../components/sections/ServicesSection';
import ApproachTimeline from '../components/sections/ApproachTimeline';
import PartnersSection from '../components/sections/PartnersSection';
import IndustriesSection from '../components/sections/IndustriesSection';
import WhyVroxlarSection from '../components/sections/WhyVroxlarSection';
import './Home.css';
import GridMotion from '../components/common/GridMotion';

const Home = () => {
  return (
    <div className="home-container">
      <Header />

      {/* Hero Section */}
      <section
        className="hero-section"
        id="top"
        style={{
          background: '#ffffff',
          position: 'relative',
          overflow: 'hidden',
          minHeight: '108vh'
        }}
      >
        <GridMotion />

        <div className="hero-content container" style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          maxWidth: '1400px',
          height: '100vh',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          pointerEvents: 'none',
          padding: '0 2rem'
        }}>
          <div className="hero-copy">
            <h1>Intelligent Technology. Real Business Impact.</h1>
            <p className="hero-subtext">
              We build cloud systems, migrate data, develop websites, run SEO & Google Ads, and engineer next-generation AI — including ML models, computer vision, and advanced LLM agents.
            </p>
            <div className="hero-cta">
              <Link to="/contact" className="primary-btn">Let&apos;s Talk</Link>
              <span>Partnering with visionary teams worldwide</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <main style={{ position: 'relative', zIndex: 1, backgroundColor: '#ffffff' }}>
        <FounderQuoteSection />
        <ServicesSection />
        <ApproachTimeline />
        <IndustriesSection />
        <PartnersSection />
        <StatsSection />
        <WhyVroxlarSection />
      </main>
    </div>
  );
};

export default Home;
