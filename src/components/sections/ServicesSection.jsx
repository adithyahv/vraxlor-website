import { useState } from 'react';
import './ServicesSection.css';
import aiStrategyImg from '../../assets/services/service_ai_strategy_office.jpg';
import customAiImg from '../../assets/services/service_custom_ai_office.jpg';
import aiAgentsImg from '../../assets/services/service_ai_agents_office.jpg';
import mlopsImg from '../../assets/services/service_mlops_office.jpg';
import dataMigrationImg from '../../assets/services/service_data_migration_office.jpg';
import webDevImg from '../../assets/services/service_web_dev_office.jpg';
import mobileDevImg from '../../assets/services/service_mobile_dev_office.jpg';
import cognitiveSystemsImg from '../../assets/services/service_cognitive_systems_office.jpg';
import googleAdsImg from '../../assets/services/service_google_ads_office.jpg';


const SERVICES = [
  {
    id: 'ai-strategy',
    title: 'AI Strategy & Consulting',
    image: aiStrategyImg,
    oneLiner: 'Strategic guidance to identify AI opportunities and build an intelligence-first roadmap.',
    includes: [
      'AI maturity assessment',
      'Business use-case discovery',
      'Transformation roadmap',
      'Governance, compliance & risk'
    ]
  },
  {
    id: 'custom-ai',
    title: 'Custom AI & GenAI Development',
    image: customAiImg,
    oneLiner: 'Bespoke AI systems — from prototypes to enterprise-grade generative and cognitive solutions.',
    includes: [
      'Generative AI apps',
      'Cognitive architectures',
      'Predictive & classification models',
      'Knowledge automation engines'
    ]
  },
  {
    id: 'ai-agents',
    title: 'AI Agents & Intelligent Automation',
    image: aiAgentsImg,
    oneLiner: 'Autonomous agents and workflow intelligence that execute tasks, decisions, and operations at scale.',
    includes: [
      'Multi-agent systems',
      'Conversational agents',
      'Process & workflow automation',
      'RPA + AI fusion'
    ]
  },
  {
    id: 'mlops',
    title: 'MLOps, Model Engineering & AI Infrastructure',
    image: mlopsImg,
    oneLiner: 'Deploy, optimise, and maintain your AI models with enterprise-grade reliability and performance.',
    includes: [
      'Model fine-tuning',
      'RAG & retrieval systems',
      'Monitoring, versioning & A/B testing',
      'GPU/infra optimisation and scaling'
    ]
  },
  {
    id: 'data-migration',
    title: 'Data Migration, Analytics & Modernisation',
    image: dataMigrationImg,
    oneLiner: 'Modernise legacy systems, migrate securely, and unlock insights with future-ready data architectures.',
    includes: [
      'Cloud data migration',
      'Data engineering',
      'BI, analytics & dashboards',
      'Data warehouse modernisation'
    ]
  },
  {
    id: 'web-dev',
    title: 'Web Application Development',
    image: webDevImg,
    oneLiner: 'High-performance web applications built with clean engineering and intelligent integrations.',
    includes: [
      'Frontend & full-stack development',
      'API architecture',
      'Admin panels & dashboards',
      'Intelligent UI/UX workflows'
    ]
  },
  {
    id: 'mobile-dev',
    title: 'Mobile App Development',
    image: mobileDevImg,
    oneLiner: 'End-to-end mobile app development for iOS and Android — powered by smart, scalable architecture.',
    includes: [
      'Native & cross-platform apps',
      'AI-powered mobile features',
      'Prototyping & UX design',
      'App performance & scaling'
    ]
  },
  {
    id: 'cognitive-systems',
    title: 'Cognitive Vision, NLP & Speech Systems',
    image: cognitiveSystemsImg,
    oneLiner: 'AI that understands images, language, documents, and environments — powering intelligent decisions.',
    includes: [
      'NLP & chat systems',
      'Computer vision',
      'Speech-to-text & TTS',
      'Document intelligence'
    ]
  },
  {
    id: 'google-ads-marketing',
    title: 'Google Ads & Digital Marketing',
    image: googleAdsImg,
    oneLiner: 'Strategic paid advertising and SEO that drives qualified traffic, conversions, and measurable ROI across all channels.',
    includes: [
      'Google Ads campaign setup & optimization',
      'SEO strategy & implementation',
      'Meta/Facebook & Instagram Ads',
      'Social media advertising & automation',
      'PPC analytics & conversion tracking'
    ]
  }
];

const ServicesSection = () => {
  const [openServiceId, setOpenServiceId] = useState(null);

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <div className="section-header">
          <span className="section-label">Our Services</span>
          <h2 className="section-title">
            AI-First. Full-Stack. <span className="text-gradient">Built for Enterprise.</span>
          </h2>
          <p className="section-intro">
            Vraxlor specialises in AI engineering — but we deliver full digital product development so you don&apos;t need multiple vendors.<br />
            From strategy and cognitive systems to web, mobile, and data infrastructure, we build the intelligent systems that scale your business.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((service) => {
            const isOpen = openServiceId === service.id;

            return (
              <div key={service.id} className="service-card">
                <div className="service-bg" style={{ backgroundImage: `url(${service.image})` }}></div>
                <div className="service-content-wrapper">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-oneliner">{service.oneLiner}</p>
                  <div
                    className={`service-includes ${isOpen ? 'is-open' : ''}`}
                    id={`service-dropdown-${service.id}`}
                    aria-hidden={!isOpen}
                  >
                    <p className="includes-label">Includes:</p>
                    <ul className="includes-list">
                      {service.includes.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <button
                    type="button"
                    className="service-card-cta"
                    aria-expanded={isOpen}
                    aria-controls={`service-dropdown-${service.id}`}
                    onClick={() => setOpenServiceId(isOpen ? null : service.id)}
                  >
                    Learn More →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
