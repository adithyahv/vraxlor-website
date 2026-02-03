import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import './ServiceDetail.css';

const DynamicIcon = ({ name }) => {
    const IconComponent = Icons[name];
    return IconComponent ? <IconComponent size={24} /> : <Icons.Check size={24} />;
};

const ServiceDetail = ({ service }) => {
    // Check for premium layout flag in data.js, or fallback to known IDs for backward compatibility
    const isEnhancedService = service?.layout === 'premium' || ['ai-consulting', 'ai-poc', 'big-data-consulting'].includes(service?.id);
    const isGenAiConsulting = service?.id === 'generative-ai-consulting';
    const isBusinessIntelligence = service?.id === 'business-intelligence';
    const isDataEngineering = service?.id === 'data-engineering';
    const isDataGovernance = service?.id === 'data-governance';
    const isDatabricks = service?.id === 'databricks-consulting';
    const isAIAgents = service?.id === 'ai-agents';
    const isMLConsulting = service?.id === 'machine-learning';
    const isAIAdvisory = service?.id === 'ai-advisory';
    const isMLOps = service?.id === 'mlops';
    const isAIIntegration = service?.id === 'ai-integration';
    const subNavLinks = service?.subNavLinks || [
        { id: 'ai-consulting-services', label: 'AI Consulting Services' },
        { id: 'ai-strategy', label: 'AI Strategy Consulting' },
        { id: 'ai-technologies', label: 'AI Technologies Consulting' },
        { id: 'ai-benefits', label: 'AI Benefits' },
        { id: 'our-team', label: 'Our team' },
    ];
    const sidebarNav = service?.sidebarNav || [
        { id: 'business-benefits', label: 'Business benefits' },
        { id: 'development-process', label: 'Development process' },
        { id: 'key-benefits', label: 'Key benefits' },
        { id: 'technology-stack', label: 'Technology stack' },
        { id: 'industry-expertise', label: 'Industry expertise' },
        { id: 'glossary', label: 'Glossary' },
    ];

    const [activeSection, setActiveSection] = useState(subNavLinks[0]?.id || 'ai-consulting-services');
    const [activeTechTab, setActiveTechTab] = useState(service?.techStackTabs?.categories?.[0] || 'ML Development Tools');
    const [activeIndustryTab, setActiveIndustryTab] = useState(service?.industryTabs?.[0]?.id || 'aviation');

    // Map industry IDs to local image paths (will need to move generated images to public folder)
    const industryImages = {
        'aviation': '/assets/images/industries/industry_aviation_real.png',
        'healthcare': '/assets/images/industries/industry_healthcare_real.png',
        'manufacturing': '/assets/images/industries/industry_manufacturing_real.png',
        'retail-ecommerce': '/assets/images/industries/industry_retail_real.png',
        'legal': '/assets/images/industries/industry_legal_real.png',
        'private-investments': '/assets/images/industries/industry_finance_real.png'
    };
    const industrySectionTitle = service?.industrySectionTitle || 'Industry expertise';
    const [activeSidebarSection, setActiveSidebarSection] = useState(sidebarNav?.[0]?.id || 'business-benefits');
    const [expandedGlossaryItem, setExpandedGlossaryItem] = useState(null);
    const [activeProcessStep, setActiveProcessStep] = useState(0);

    // Scroll spy - automatically highlight sidebar based on scroll position
    useEffect(() => {
        if (service?.id !== 'ai-consulting' && service?.id !== 'big-data-consulting') return;

        const sectionIds = sidebarNav.map(item => item.id);

        const handleScroll = () => {
            const scrollPosition = window.scrollY + 150; // Offset for header

            for (let i = sectionIds.length - 1; i >= 0; i--) {
                const section = document.getElementById(sectionIds[i]);
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSidebarSection(sectionIds[i]);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, [service?.id, isEnhancedService, sidebarNav]);

    if (!service) return <div className="loading">Loading...</div>;

    // State for V2 interactive components (Gen AI Consulting page)
    const [activeV2TabIndex, setActiveV2TabIndex] = useState(0);
    const [activeChecklistStep, setActiveChecklistStep] = useState(0);
    const [activeV2IndustryTab, setActiveV2IndustryTab] = useState(0);
    const [activeV2TechTab, setActiveV2TechTab] = useState(0);

    // Data for the "What you can get" tabs
    const whatYouGetTabs = [
        {
            label: 'Generative AI Technology in Business',
            title: 'Transform Your Business Operations',
            description: 'Generative AI is transforming business operations by automating complex tasks. It leverages large datasets to create novel content, ideas, and solutions tailored to the needs of specific organizations.',
        },
        {
            label: 'Domain-Specific Models',
            title: 'Precision Customization for Your Industry',
            description: 'Domain-specific Generative AI models are trained on data specific to a particular industry, ensuring the AI understands the nuances, jargon, and specific requirements of your field.',
        },
        {
            label: 'Enhanced Safety & Privacy',
            title: 'Enterprise-Grade Data Protection',
            description: 'We deploy models in secure, private environments (VPC) where enterprise data never leaves your control, ensuring full compliance with GDPR and HIPAA.',
        },
    ];

    // Data for the Checklist Stepper
    const checklistSteps = [
        { icon: 'Search', title: 'Setting Gen AI Goals', bullets: ['Define specific tasks and desired outputs', 'Align with business objectives', 'Establish measurable KPIs'] },
        { icon: 'FileText', title: 'Aligning with Organizational Goals', bullets: ['Conduct comprehensive assessment', 'Map AI capabilities to business needs', 'Identify stakeholders and sponsors'] },
        { icon: 'GitBranch', title: 'Develop a Roadmap', bullets: ['Create phased implementation plan', 'Define milestones and checkpoints', 'Allocate budget and resources'] },
        { icon: 'Shield', title: 'Assess Readiness', bullets: ['Evaluate data quality and availability', 'Assess security posture', 'Review infrastructure capabilities'] },
        { icon: 'Target', title: 'Identify Use Cases', bullets: ['Discover high-value opportunities', 'Prioritize by ROI potential', 'Validate with proof of concept'] },
    ];

    // Data for Industry Use Cases (Bottom Tabs)
    const industryTabs = [
        {
            name: 'Private Investment',
            image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=800&fit=crop',
            title: 'Generative AI Consulting in Private Investment',
            points: ['Deal Sourcing', 'Due Diligence Automation', 'Portfolio Management', 'Market Intelligence Reports'],
        },
        {
            name: 'Legal',
            image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=800&fit=crop',
            title: 'Generative AI Consulting in Legal Industry',
            points: ['Streamlined Legal Research', 'Efficient Document Drafting', 'Contract Analysis', 'Compliance Monitoring'],
        },
        {
            name: 'Aviation',
            image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=800&fit=crop',
            title: 'Generative AI Consulting in Aviation',
            points: ['Predictive Maintenance', 'Flight Optimization', 'Customer Service Automation', 'Safety Analysis'],
        },
        {
            name: 'Manufacturing',
            image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=800&fit=crop',
            title: 'Generative AI Consulting in Manufacturing',
            points: ['Quality Control Automation', 'Supply Chain Optimization', 'Generative Design', 'Process Documentation'],
        },
    ];

    // Data for Technology Stack
    const techStackTabs = [
        {
            name: 'Open Source LLM',
            items: [
                { name: 'LLAMA', desc: 'A family of large language models developed by Meta AI for research and commercial use.' },
                { name: 'BLOOM', desc: 'Large multilingual model trained by BigScience for accessible AI research.' },
                { name: 'Falcon', desc: 'High-performance Large Language Model by TII with state-of-the-art benchmarks.' },
                { name: 'Stable Diffusion', desc: 'Text-to-image diffusion model for high-quality image generation.' },
            ],
        },
        {
            name: 'Commercial LLM',
            items: [
                { name: 'GPT-4o', desc: 'OpenAI\'s multimodal flagship model with advanced reasoning capabilities.' },
                { name: 'Claude 3.5 Sonnet', desc: 'Anthropic\'s balanced model optimized for coding and complex tasks.' },
                { name: 'Gemini 1.5 Pro', desc: 'Google\'s long-context model supporting up to 1M tokens.' },
                { name: 'Amazon Titan', desc: 'AWS Bedrock model optimized for enterprise RAG applications.' },
            ],
        },
    ];

    // Sidebar navigation items for V2
    const v2SidebarNav = [
        { id: 'business-benefits', label: 'Business benefits' },
        { id: 'development-process', label: 'Development process' },
        { id: 'industry-expertise', label: 'Industry expertise' },
        { id: 'technology-stack', label: 'Technology stack' },
        { id: 'key-benefits', label: 'Key benefits' },
        { id: 'glossary', label: 'Glossary' },
    ];

    if (isGenAiConsulting) {
        return (
            <div className="genai-v2-page">
                {/* HERO SECTION */}
                <section className="genai-v2-hero">
                    <div className="container genai-v2-hero-inner">
                        <div className="genai-v2-breadcrumbs">
                            <Link to="/">Home</Link> <span>»</span> <span>Generative AI</span> <span>»</span> <span>Generative AI Consulting</span>
                        </div>
                        <h1 className="genai-v2-hero-title">Generative AI Consulting</h1>
                        <p className="genai-v2-hero-subtitle">Accelerate your digital transformation and increase productivity with domain-specific Generative AI solutions.</p>
                        <Link to="/contact" className="genai-v2-btn-primary">Let's talk</Link>
                    </div>
                </section>

                {/* MAIN CONTENT WITH STICKY SIDEBAR */}
                <div className="genai-v2-main-layout container">
                    {/* COMPONENT 1: Sticky Sidebar */}
                    <aside className="genai-v2-sidebar">
                        <nav className="genai-v2-sidebar-nav">
                            {v2SidebarNav.map((item) => (
                                <a key={item.id} href={`#${item.id}`} className="genai-v2-sidebar-link">{item.label}</a>
                            ))}
                        </nav>
                        <Link to="/contact" className="genai-v2-btn-primary genai-v2-sidebar-cta">Schedule a call</Link>
                    </aside>

                    {/* RIGHT COLUMN: Scrollable Content */}
                    <main className="genai-v2-content">

                        {/* COMPONENT 2: "What you can get" (Tabs/Content Switcher) */}
                        <section id="business-benefits" className="genai-v2-section">
                            <h2 className="genai-v2-section-title">What you can get</h2>
                            <div className="genai-v2-tabs-layout">
                                <div className="genai-v2-tabs-list">
                                    {whatYouGetTabs.map((tab, idx) => (
                                        <button
                                            key={idx}
                                            className={`genai-v2-tab-btn ${activeV2TabIndex === idx ? 'active' : ''}`}
                                            onClick={() => setActiveV2TabIndex(idx)}
                                        >
                                            {tab.label}
                                        </button>
                                    ))}
                                </div>
                                <div className="genai-v2-tab-content">
                                    <h3>{whatYouGetTabs[activeV2TabIndex].title}</h3>
                                    <p>{whatYouGetTabs[activeV2TabIndex].description}</p>
                                    <div className="genai-v2-tab-actions">
                                        <Link to="/contact" className="genai-v2-btn-primary">Let's talk</Link>
                                        <button className="genai-v2-btn-link">show more →</button>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* COMPONENT 3: Dark Mode Checklist (Stepper) */}
                        <section id="development-process" className="genai-v2-section genai-v2-checklist-section">
                            <h2 className="genai-v2-section-title-white">Checklist for Successful Gen AI Adoption</h2>
                            <div className="genai-v2-stepper">
                                <div className="genai-v2-stepper-icons">
                                    {checklistSteps.map((step, idx) => {
                                        const IconComponent = Icons[step.icon] || Icons.Circle;
                                        return (
                                            <button
                                                key={idx}
                                                className={`genai-v2-stepper-icon ${activeChecklistStep === idx ? 'active' : ''}`}
                                                onClick={() => setActiveChecklistStep(idx)}
                                            >
                                                <IconComponent size={24} />
                                            </button>
                                        );
                                    })}
                                </div>
                                <div className="genai-v2-stepper-content">
                                    <h3 className="genai-v2-stepper-title">{checklistSteps[activeChecklistStep].title}</h3>
                                    <ul className="genai-v2-stepper-bullets">
                                        {checklistSteps[activeChecklistStep].bullets.map((bullet, idx) => (
                                            <li key={idx}><Icons.Check size={16} className="genai-v2-check-icon" /> {bullet}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* COMPONENT 4: Industry Use Cases (Bottom Tabs) */}
                        <section id="industry-expertise" className="genai-v2-section">
                            <h2 className="genai-v2-section-title">Generative AI Technology in Various Industries</h2>
                            <div className="genai-v2-industry-block">
                                <div className="genai-v2-industry-image">
                                    <img src={industryTabs[activeV2IndustryTab].image} alt={industryTabs[activeV2IndustryTab].name} />
                                </div>
                                <div className="genai-v2-industry-content">
                                    <h3>{industryTabs[activeV2IndustryTab].title}</h3>
                                    <ul className="genai-v2-industry-points">
                                        {industryTabs[activeV2IndustryTab].points.map((point, idx) => (
                                            <li key={idx}><Icons.ArrowRight size={16} className="genai-v2-arrow-icon" /> {point}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="genai-v2-industry-tabs">
                                {industryTabs.map((tab, idx) => (
                                    <button
                                        key={idx}
                                        className={`genai-v2-industry-tab ${activeV2IndustryTab === idx ? 'active' : ''}`}
                                        onClick={() => setActiveV2IndustryTab(idx)}
                                    >
                                        {tab.name}
                                    </button>
                                ))}
                            </div>
                        </section>

                        {/* COMPONENT 6: Technology Stack (List View) */}
                        <section id="technology-stack" className="genai-v2-section">
                            <h2 className="genai-v2-section-title">Technology Stack</h2>
                            <div className="genai-v2-tech-tabs">
                                {techStackTabs.map((tab, idx) => (
                                    <button
                                        key={idx}
                                        className={`genai-v2-tech-tab ${activeV2TechTab === idx ? 'active' : ''}`}
                                        onClick={() => setActiveV2TechTab(idx)}
                                    >
                                        {tab.name}
                                    </button>
                                ))}
                            </div>
                            <div className="genai-v2-tech-list">
                                {techStackTabs[activeV2TechTab].items.map((item, idx) => (
                                    <div key={idx} className="genai-v2-tech-item">
                                        <div className="genai-v2-tech-logo"><Icons.Box size={32} /></div>
                                        <div className="genai-v2-tech-info">
                                            <h4>{item.name}</h4>
                                            <p>{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* COMPONENT 5: Why Work With Us (Stats) */}
                        <section id="key-benefits" className="genai-v2-section">
                            <h2 className="genai-v2-section-title">Why work with us</h2>
                            <div className="genai-v2-stats-grid">
                                {[
                                    { num: '40+', label: 'Engineers' },
                                    { num: '150+', label: 'AI Projects Delivered' },
                                    { num: '200+', label: 'Happy Clients' },
                                    { num: '10+', label: 'Years of Experience' },
                                ].map((stat, idx) => (
                                    <div key={idx} className="genai-v2-stat-card">
                                        <span className="genai-v2-stat-num">{stat.num}</span>
                                        <span className="genai-v2-stat-label">{stat.label}</span>
                                    </div>
                                ))}
                            </div>

                            <h3 className="genai-v2-subsection-title">Gen AI Benefits</h3>
                            <div className="genai-v2-benefits-grid">
                                {[
                                    { icon: 'Zap', title: 'Accelerated Gen AI Adoption', desc: 'Fast-track your AI initiatives with our proven methodologies.' },
                                    { icon: 'Map', title: 'Strategic Roadmap Development', desc: 'Customized implementation plans aligned with your goals.' },
                                    { icon: 'Settings', title: 'Customized Solutions', desc: 'Tailored AI models trained on your specific domain data.' },
                                    { icon: 'Shield', title: 'Ethical & Responsible AI', desc: 'Built-in governance, bias detection, and compliance frameworks.' },
                                ].map((benefit, idx) => {
                                    const IconComponent = Icons[benefit.icon] || Icons.Star;
                                    return (
                                        <div key={idx} className="genai-v2-benefit-card">
                                            <div className="genai-v2-benefit-icon"><IconComponent size={24} /></div>
                                            <h4>{benefit.title}</h4>
                                            <p>{benefit.desc}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>

                        {/* GLOSSARY / FAQ */}
                        <section id="glossary" className="genai-v2-section genai-v2-faq-section">
                            <h2 className="genai-v2-section-title">Generative AI Consulting - FAQ</h2>
                            <div className="genai-v2-accordion">
                                {[
                                    { q: 'What are the most important limitations of Generative AI?', a: 'Limitations include Lack of True Creativity, Limited Contextual Understanding, Data Privacy risks, and potential for "Hallucinations".' },
                                    { q: 'How can consulting companies overcome these limitations?', a: 'We overcome them by ensuring High Data Quality, implementing Human-in-the-Loop oversight, and using techniques like RAG.' },
                                    { q: 'What are best practices for managing risks?', a: 'Establish clear Governance frameworks, monitor outputs for bias, enforce Data Privacy, and start with low-risk internal use cases.' },
                                ].map((item, idx) => (
                                    <div key={idx} className={`genai-v2-accordion-item ${expandedGlossaryItem === idx ? 'open' : ''}`}>
                                        <button className="genai-v2-accordion-trigger" onClick={() => setExpandedGlossaryItem(expandedGlossaryItem === idx ? null : idx)}>
                                            <span>{item.q}</span>
                                            {expandedGlossaryItem === idx ? <Icons.Minus size={20} /> : <Icons.Plus size={20} />}
                                        </button>
                                        <div className="genai-v2-accordion-content"><p>{item.a}</p></div>
                                    </div>
                                ))}
                            </div>
                        </section>

                    </main>
                </div>

                {/* FOOTER CTA */}
                <section className="genai-v2-footer-cta">
                    <div className="container genai-v2-footer-inner">
                        <div>
                            <h2>Let's discuss a solution for you</h2>
                            <p>Our experts will help you estimate your project and choose the right Gen AI strategy.</p>
                        </div>
                        <Link to="/contact" className="genai-v2-btn-primary">Get Started</Link>
                    </div>
                </section>
            </div>
        );
    }

    // ==========================================
    // BUSINESS INTELLIGENCE SERVICES - ADDEPTO CLONE
    // ==========================================

    // BI State Variables
    const [activeBITab, setActiveBITab] = useState(0);
    const [activeBIProcessStep, setActiveBIProcessStep] = useState(0);
    const [activeBIIndustryTab, setActiveBIIndustryTab] = useState(0);

    // BI "Why do you need BI?" Tabs Data
    const biWhyTabs = [
        {
            label: 'Reliable data analysis and reporting',
            title: 'Transform Raw Data into Actionable Insights',
            description: 'Our BI services help you extract knowledge from your data through reliable analysis and automated reporting. Get real-time dashboards and scheduled reports that drive informed decision-making across your organization.',
        },
        {
            label: 'Modernize existing analytics',
            title: 'Upgrade Your Legacy Analytics Systems',
            description: 'Replace outdated spreadsheets and manual processes with modern, scalable BI solutions. We migrate your existing reports to cloud-native platforms with enhanced visualization and self-service capabilities.',
        },
        {
            label: 'Increase operational profitability',
            title: 'Optimize Operations with Data-Driven Decisions',
            description: 'Identify cost reduction opportunities, streamline supply chains, and improve resource allocation. Our BI solutions provide visibility into operational KPIs that directly impact your bottom line.',
        },
        {
            label: 'Data Warehouse & Data Lake',
            title: 'Build a Unified Data Foundation',
            description: 'Consolidate data from multiple sources into a single source of truth. We design and implement modern data warehouses and data lakes that scale with your business needs.',
        },
    ];

    // BI Implementation Process Steps
    const biProcessSteps = [
        { icon: 'ClipboardList', title: 'Gather Requirements', bullets: ['Understand business objectives', 'Identify key stakeholders', 'Define success metrics and KPIs'] },
        { icon: 'Database', title: 'Collect & Integrate', bullets: ['Connect to data sources', 'ETL pipeline development', 'Data quality assessment'] },
        { icon: 'Filter', title: 'Transform & Clean', bullets: ['Data cleansing and validation', 'Schema normalization', 'Business logic implementation'] },
        { icon: 'LineChart', title: 'Explore Data', bullets: ['Statistical analysis', 'Trend identification', 'Hypothesis testing'] },
        { icon: 'LayoutDashboard', title: 'Data Visualization', bullets: ['Interactive dashboards', 'Automated reports', 'Self-service analytics'] },
    ];

    // BI Tech Stack Categories
    const biTechStack = [
        { category: 'Data Warehousing', tools: ['SQL Server', 'Azure Synapse', 'Oracle', 'AWS Redshift', 'Snowflake'] },
        { category: 'Self-service BI', tools: ['Power BI', 'Tableau', 'Qlik', 'Looker'] },
        { category: 'Reporting Automation', tools: ['Power BI RS', 'MicroStrategy', 'Cognos BI'] },
        { category: 'OLAP & ETL', tools: ['MS SSAS', 'Apache Druid', 'Talend', 'Stitch'] },
    ];

    // BI Industry Use Cases
    const biIndustryTabs = [
        {
            name: 'Manufacturing',
            image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=800&fit=crop',
            title: 'Business Intelligence for Manufacturing',
            points: ['Enhance management efficiency with real-time production dashboards', 'Automated reporting systems for quality control', 'Supply chain visibility and inventory optimization', 'Predictive maintenance analytics'],
        },
        {
            name: 'Technology Companies',
            image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=800&fit=crop',
            title: 'Business Intelligence for Tech Companies',
            points: ['Attract new customers with embedded BI solutions', 'Product usage analytics and feature adoption', 'Customer churn prediction and retention', 'Revenue forecasting and financial planning'],
        },
    ];

    // BI Sidebar Navigation
    const biSidebarNav = [
        { id: 'bi-benefits', label: 'Business benefits' },
        { id: 'bi-process', label: 'Development process' },
        { id: 'bi-industry', label: 'Industry expertise' },
        { id: 'bi-tech-stack', label: 'Key benefits' },
    ];

    // BI Client Testimonials
    const biTestimonials = [
        { name: 'Robert Newman', company: 'J2 Global', quote: 'If you are looking for an experienced and reliable Machine Learning agency, I highly recommend Addepto.' },
        { name: 'Sara Krishnamachari', company: 'Purple Lotus', quote: 'The Addepto Team has managed the project very well. Communication was excellent throughout.' },
    ];

    if (isBusinessIntelligence) {
        return (
            <div className="bi-v2-page">
                {/* HERO SECTION */}
                <section className="bi-v2-hero">
                    <div className="container bi-v2-hero-inner">
                        <div className="bi-v2-breadcrumbs">
                            <Link to="/">Home</Link> <span>»</span> <span>Business Intelligence Services</span>
                        </div>
                        <h1 className="bi-v2-hero-title">Business Intelligence Services</h1>
                        <p className="bi-v2-hero-subtitle">Transform your data into strategic insights with our comprehensive BI consulting and implementation services.</p>
                        <Link to="/contact" className="bi-v2-btn-primary">Let's talk</Link>
                    </div>
                </section>

                {/* MAIN CONTENT WITH STICKY SIDEBAR */}
                <div className="bi-v2-main-layout container">
                    {/* COMPONENT 1: Sticky Sidebar */}
                    <aside className="bi-v2-sidebar">
                        <nav className="bi-v2-sidebar-nav">
                            {biSidebarNav.map((item) => (
                                <a key={item.id} href={`#${item.id}`} className="bi-v2-sidebar-link">{item.label}</a>
                            ))}
                        </nav>
                        <Link to="/contact" className="bi-v2-btn-primary bi-v2-sidebar-cta">Schedule a call</Link>
                    </aside>

                    {/* RIGHT COLUMN: Scrollable Content */}
                    <main className="bi-v2-content">

                        {/* COMPONENT 2: "Why do you need BI?" Content Switcher */}
                        <section id="bi-benefits" className="bi-v2-section">
                            <h2 className="bi-v2-section-title">Why do you need Business Intelligence services?</h2>
                            <div className="bi-v2-tabs-layout">
                                <div className="bi-v2-tabs-list">
                                    {biWhyTabs.map((tab, idx) => (
                                        <button
                                            key={idx}
                                            className={`bi-v2-tab-btn ${activeBITab === idx ? 'active' : ''}`}
                                            onClick={() => setActiveBITab(idx)}
                                        >
                                            {tab.label}
                                        </button>
                                    ))}
                                </div>
                                <div className="bi-v2-tab-content">
                                    <h3>{biWhyTabs[activeBITab].title}</h3>
                                    <p>{biWhyTabs[activeBITab].description}</p>
                                    <Link to="/contact" className="bi-v2-btn-link">Let's talk →</Link>
                                </div>
                            </div>
                        </section>

                        {/* COMPONENT 3: Implementation Process (Dark Mode Stepper) */}
                        <section id="bi-process" className="bi-v2-section bi-v2-process-section">
                            <h2 className="bi-v2-section-title-white">Business Intelligence solution – implementation process</h2>
                            <div className="bi-v2-stepper">
                                <div className="bi-v2-stepper-icons">
                                    {biProcessSteps.map((step, idx) => {
                                        const IconComponent = Icons[step.icon] || Icons.Circle;
                                        return (
                                            <button
                                                key={idx}
                                                className={`bi-v2-stepper-icon ${activeBIProcessStep === idx ? 'active' : ''}`}
                                                onClick={() => setActiveBIProcessStep(idx)}
                                            >
                                                <IconComponent size={24} />
                                            </button>
                                        );
                                    })}
                                </div>
                                <div className="bi-v2-stepper-content">
                                    <h3 className="bi-v2-stepper-title">{biProcessSteps[activeBIProcessStep].title}</h3>
                                    <ul className="bi-v2-stepper-bullets">
                                        {biProcessSteps[activeBIProcessStep].bullets.map((bullet, idx) => (
                                            <li key={idx}><Icons.Check size={16} className="bi-v2-check-icon" /> {bullet}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* COMPONENT 5: Industry Use Cases (Tabs) */}
                        <section id="bi-industry" className="bi-v2-section">
                            <h2 className="bi-v2-section-title">Business intelligence consulting services</h2>
                            <div className="bi-v2-industry-block">
                                <div className="bi-v2-industry-image">
                                    <img src={biIndustryTabs[activeBIIndustryTab].image} alt={biIndustryTabs[activeBIIndustryTab].name} />
                                </div>
                                <div className="bi-v2-industry-content">
                                    <h3>{biIndustryTabs[activeBIIndustryTab].title}</h3>
                                    <ul className="bi-v2-industry-points">
                                        {biIndustryTabs[activeBIIndustryTab].points.map((point, idx) => (
                                            <li key={idx}><Icons.ArrowRight size={16} className="bi-v2-arrow-icon" /> {point}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="bi-v2-industry-tabs">
                                {biIndustryTabs.map((tab, idx) => (
                                    <button
                                        key={idx}
                                        className={`bi-v2-industry-tab ${activeBIIndustryTab === idx ? 'active' : ''}`}
                                        onClick={() => setActiveBIIndustryTab(idx)}
                                    >
                                        {tab.name}
                                    </button>
                                ))}
                            </div>
                        </section>

                        {/* COMPONENT 4: BI Tech Stack (Categorized Grid) */}
                        <section id="bi-tech-stack" className="bi-v2-section bi-v2-techstack-section">
                            <h2 className="bi-v2-section-title">Our BI Services Tech Stack</h2>
                            <div className="bi-v2-tech-grid">
                                {biTechStack.map((category, idx) => (
                                    <div key={idx} className="bi-v2-tech-category">
                                        <h4 className="bi-v2-tech-category-title">{category.category}</h4>
                                        <div className="bi-v2-tech-tools">
                                            {category.tools.map((tool, toolIdx) => (
                                                <span key={toolIdx} className="bi-v2-tech-badge">{tool}</span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* COMPONENT 6: Clients & Reviews */}
                        <section className="bi-v2-section bi-v2-clients-section">
                            <h2 className="bi-v2-section-title">Hear it from our clients!</h2>
                            <div className="bi-v2-testimonials">
                                {biTestimonials.map((testimonial, idx) => (
                                    <div key={idx} className="bi-v2-testimonial-card">
                                        <p className="bi-v2-testimonial-quote">"{testimonial.quote}"</p>
                                        <div className="bi-v2-testimonial-author">
                                            <strong>{testimonial.name}</strong>
                                            <span>{testimonial.company}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                    </main>
                </div>

                {/* FOOTER CTA */}
                <section className="bi-v2-footer-cta">
                    <div className="container bi-v2-footer-inner">
                        <div>
                            <h2>Let's discuss your BI project</h2>
                            <p>Our experts will help you build a data-driven organization.</p>
                        </div>
                        <Link to="/contact" className="bi-v2-btn-primary">Get Started</Link>
                    </div>
                </section>
            </div>
        );
    }

    // ==========================================
    // DATA ENGINEERING SERVICES - ADDEPTO CLONE
    // ==========================================

    // DE State Variables
    const [activeDETab, setActiveDETab] = useState(0);
    const [activeDEProcessStep, setActiveDEProcessStep] = useState(0);
    const [activeDEIndustryTab, setActiveDEIndustryTab] = useState(0);

    // DE "Key Benefits" Tabs Data
    const deKeyBenefitsTabs = [
        {
            label: 'Modern Data Pipelines',
            title: 'Build Scalable Data Infrastructure',
            description: 'Design and implement modern data pipelines that handle batch and real-time data processing. Our solutions scale with your business and integrate seamlessly with existing systems.',
        },
        {
            label: 'Data Preparation and ETL/ELT',
            title: 'Transform Raw Data into Analytics-Ready Assets',
            description: 'We build robust ETL and ELT pipelines that cleanse, transform, and prepare your data for downstream analytics and machine learning applications.',
        },
        {
            label: 'Data Lake Implementation',
            title: 'Unified Storage for All Your Data',
            description: 'Data Lakes are the most powerful option for cost-effective storage. Addepto has used Data Lake solutions for Product Traceability, IoT analytics, and enterprise data consolidation.',
        },
        {
            label: 'Cloud Data Architecture',
            title: 'Modern Cloud-Native Data Solutions',
            description: 'Leverage AWS, Azure, and GCP to build cloud-first data architectures that are secure, scalable, and optimized for performance.',
        },
    ];

    // DE Development Process Steps (Vertical Stepper)
    const deProcessSteps = [
        { icon: 'Users', title: 'Understanding Business Needs', desc: 'Workshops and discovery calls to align data strategy with business objectives.' },
        { icon: 'Database', title: 'Analysis of Data Sources', desc: 'Identify structured and unstructured data sources across your organization.' },
        { icon: 'Server', title: 'Building Data Lake', desc: 'Implementation using Hadoop, S3, Azure Data Lake, or Snowflake.' },
        { icon: 'Activity', title: 'Designing Data Pipelines', desc: 'Critical activity turning raw data into actionable information.' },
        { icon: 'Settings', title: 'Automation and Deployment', desc: 'DevOps strategy for CI/CD and infrastructure as code.' },
        { icon: 'CheckCircle', title: 'Testing and Monitoring', desc: 'DevOps automation with comprehensive testing and observability.' },
    ];

    // DE Tech Stack
    const deTechStack = [
        'Hadoop', 'Apache Spark', 'Apache Kafka', 'Databricks',
        'Snowflake', 'dbt', 'Cloudera', 'Airbyte',
        'Apache Airflow', 'AWS Glue', 'Azure Data Factory', 'Google BigQuery'
    ];

    // DE Industry Use Cases
    const deIndustryTabs = [
        {
            name: 'Investment & Financial',
            image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=800&fit=crop',
            title: 'Data Engineering for Financial Services',
            points: ['Market Data Infrastructure', 'Trading Systems Integration', 'Risk Management Pipelines', 'Regulatory Reporting Automation'],
        },
        {
            name: 'Energy',
            image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=800&fit=crop',
            title: 'Data Engineering for Energy Sector',
            points: ['Data Classification Systems', 'Automated Data Type Detection', 'IoT Sensor Data Pipelines', 'Predictive Maintenance Analytics'],
        },
        {
            name: 'Manufacturing',
            image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&h=800&fit=crop',
            title: 'Data Engineering for Manufacturing',
            points: ['Production Data Pipelines', 'Supply Chain Analytics', 'Quality Control Systems', 'Equipment Monitoring'],
        },
    ];

    // DE Sidebar Navigation
    const deSidebarNav = [
        { id: 'de-benefits', label: 'Key benefits' },
        { id: 'de-process', label: 'Development process' },
        { id: 'de-tech-stack', label: 'Technology stack' },
        { id: 'de-industry', label: 'Industry expertise' },
    ];

    // DE Testimonials
    const deTestimonials = [
        { name: 'Price Ellington', company: 'Private Jet Services', quote: 'The team took time to understand what we needed and delivered a robust data infrastructure.' },
        { name: 'Steven Kinder', company: 'PaperPlanes', quote: 'Addepto Team got the job done. Our data pipelines now run flawlessly.' },
    ];

    if (isDataEngineering) {
        return (
            <div className="de-v2-page">
                {/* HERO SECTION */}
                <section className="de-v2-hero">
                    <div className="container de-v2-hero-inner">
                        <div className="de-v2-breadcrumbs">
                            <Link to="/">Home</Link> <span>»</span> <span>Data Engineering Services</span>
                        </div>
                        <h1 className="de-v2-hero-title">Data Engineering Services</h1>
                        <p className="de-v2-hero-subtitle">Build robust data pipelines and modern data infrastructure that powers your AI and analytics initiatives.</p>
                        <Link to="/contact" className="de-v2-btn-primary">Let's talk</Link>
                    </div>
                </section>

                {/* MAIN CONTENT WITH STICKY SIDEBAR */}
                <div className="de-v2-main-layout container">
                    {/* COMPONENT 1: Sticky Sidebar */}
                    <aside className="de-v2-sidebar">
                        <nav className="de-v2-sidebar-nav">
                            {deSidebarNav.map((item) => (
                                <a key={item.id} href={`#${item.id}`} className="de-v2-sidebar-link">{item.label}</a>
                            ))}
                        </nav>
                        <Link to="/contact" className="de-v2-btn-primary de-v2-sidebar-cta">Schedule a call</Link>
                    </aside>

                    {/* RIGHT COLUMN: Scrollable Content */}
                    <main className="de-v2-content">

                        {/* COMPONENT 2: "Key Benefits" Content Switcher */}
                        <section id="de-benefits" className="de-v2-section">
                            <h2 className="de-v2-section-title">Wherever you are, we can offer a complete solution</h2>
                            <div className="de-v2-tabs-layout">
                                <div className="de-v2-tabs-list">
                                    {deKeyBenefitsTabs.map((tab, idx) => (
                                        <button
                                            key={idx}
                                            className={`de-v2-tab-btn ${activeDETab === idx ? 'active' : ''}`}
                                            onClick={() => setActiveDETab(idx)}
                                        >
                                            {tab.label}
                                        </button>
                                    ))}
                                </div>
                                <div className="de-v2-tab-content">
                                    <h3>{deKeyBenefitsTabs[activeDETab].title}</h3>
                                    <p>{deKeyBenefitsTabs[activeDETab].description}</p>
                                    <Link to="/contact" className="de-v2-btn-link">Let's talk →</Link>
                                </div>
                            </div>
                        </section>

                        {/* COMPONENT 3: Development Process (Dark Vertical Stepper) */}
                        <section id="de-process" className="de-v2-section de-v2-process-section">
                            <h2 className="de-v2-section-title-white">Our Data Engineering development process</h2>
                            <div className="de-v2-vertical-stepper">
                                {deProcessSteps.map((step, idx) => {
                                    const IconComponent = Icons[step.icon] || Icons.Circle;
                                    return (
                                        <div
                                            key={idx}
                                            className={`de-v2-step-item ${activeDEProcessStep === idx ? 'active' : ''}`}
                                            onClick={() => setActiveDEProcessStep(idx)}
                                        >
                                            <div className="de-v2-step-indicator">
                                                <div className="de-v2-step-icon">
                                                    <IconComponent size={20} />
                                                </div>
                                                {idx < deProcessSteps.length - 1 && <div className="de-v2-step-line"></div>}
                                            </div>
                                            <div className="de-v2-step-content">
                                                <h4>{step.title}</h4>
                                                <p>{step.desc}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>

                        {/* COMPONENT 4: Tech Stack (Logo Grid) */}
                        <section id="de-tech-stack" className="de-v2-section de-v2-techstack-section">
                            <h2 className="de-v2-section-title">Our Data Engineering Tools and Technologies</h2>
                            <p className="de-v2-tech-intro">We collaborate with leading cloud solution providers including AWS, Azure, and GCP.</p>
                            <div className="de-v2-tech-grid">
                                {deTechStack.map((tech, idx) => (
                                    <div key={idx} className="de-v2-tech-badge">
                                        <Icons.Box size={20} />
                                        <span>{tech}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* COMPONENT 5: Industry Use Cases (Tabs) */}
                        <section id="de-industry" className="de-v2-section">
                            <h2 className="de-v2-section-title">Industry expertise</h2>
                            <div className="de-v2-industry-block">
                                <div className="de-v2-industry-image">
                                    <img src={deIndustryTabs[activeDEIndustryTab].image} alt={deIndustryTabs[activeDEIndustryTab].name} />
                                </div>
                                <div className="de-v2-industry-content">
                                    <h3>{deIndustryTabs[activeDEIndustryTab].title}</h3>
                                    <ul className="de-v2-industry-points">
                                        {deIndustryTabs[activeDEIndustryTab].points.map((point, idx) => (
                                            <li key={idx}><Icons.ArrowRight size={16} className="de-v2-arrow-icon" /> {point}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="de-v2-industry-tabs">
                                {deIndustryTabs.map((tab, idx) => (
                                    <button
                                        key={idx}
                                        className={`de-v2-industry-tab ${activeDEIndustryTab === idx ? 'active' : ''}`}
                                        onClick={() => setActiveDEIndustryTab(idx)}
                                    >
                                        {tab.name}
                                    </button>
                                ))}
                            </div>
                        </section>

                        {/* COMPONENT 6: Testimonials */}
                        <section className="de-v2-section de-v2-clients-section">
                            <h2 className="de-v2-section-title">Hear it from our clients!</h2>
                            <div className="de-v2-testimonials">
                                {deTestimonials.map((testimonial, idx) => (
                                    <div key={idx} className="de-v2-testimonial-card">
                                        <p className="de-v2-testimonial-quote">"{testimonial.quote}"</p>
                                        <div className="de-v2-testimonial-author">
                                            <strong>{testimonial.name}</strong>
                                            <span>{testimonial.company}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                    </main>
                </div>

                {/* FOOTER CTA */}
                <section className="de-v2-footer-cta">
                    <div className="container de-v2-footer-inner">
                        <div>
                            <h2>Let's discuss your data engineering project</h2>
                            <p>Our experts will help you build a modern data infrastructure.</p>
                        </div>
                        <Link to="/contact" className="de-v2-btn-primary">Get Started</Link>
                    </div>
                </section>
            </div>
        );
    }

    // ==========================================
    // DATA GOVERNANCE & OBSERVABILITY - ADDEPTO CLONE
    // ==========================================

    // DG State Variables
    const [activeDGProcessStep, setActiveDGProcessStep] = useState(0);
    const [activeDGIndustryTab, setActiveDGIndustryTab] = useState(0);
    const [expandedDGFaq, setExpandedDGFaq] = useState(null);

    // DG Implementation Process Steps (Numbered List)
    const dgProcessSteps = [
        { num: '1', title: 'Define Goals and Engage Stakeholders', desc: 'Clarify goals, involve stakeholders, and establish executive sponsorship for your governance initiative.' },
        { num: '2', title: 'Map Your Data Ecosystem', desc: 'Inventory critical data sources, understand data flows, and document existing data assets.' },
        { num: '3', title: 'Set Policies and Select Tools', desc: 'Develop clear data policies, standards, and select appropriate governance and observability tools.' },
        { num: '4', title: 'Instrument Pipelines and Deploy Monitoring', desc: 'Embed observability tools into your data pipelines for real-time monitoring and alerting.' },
        { num: '5', title: 'Iterate, Educate, and Scale', desc: 'Analyze results, resolve issues, train teams, and expand governance across the organization.' },
    ];

    // DG Tech Stack Categories
    const dgTechStack = [
        { category: 'Data Governance Platforms', tools: ['Collibra', 'Ataccama ONE', 'Alation'] },
        { category: 'Data Catalog', tools: ['Alation Data Catalog', 'Collibra Data Catalog', 'DataGalaxy'] },
        { category: 'Data Quality', tools: ['Soda Core', 'Great Expectations', 'dbt Tests'] },
        { category: 'Data Lineage', tools: ['Apache Atlas', 'OpenLineage', 'Collibra Lineage'] },
        { category: 'Observability', tools: ['Monte Carlo', 'Acceldata', 'Datadog'] },
    ];

    // DG Industry Use Cases
    const dgIndustryTabs = [
        {
            name: 'Manufacturing',
            image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=800&fit=crop',
            title: 'Data Governance for Manufacturing',
            points: ['Production continuity through data reliability', 'Quality assurance with real-time data monitoring', 'Regulatory & ESG compliance reporting', 'Supply chain data integrity'],
        },
        {
            name: 'Automotive',
            image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=800&fit=crop',
            title: 'Data Governance for Automotive',
            points: ['Supply chain resilience and traceability', 'Product traceability across lifecycle', 'Connected vehicle data management', 'Compliance with safety regulations'],
        },
        {
            name: 'Aviation',
            image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=800&fit=crop',
            title: 'Data Governance for Aviation',
            points: ['Asset & maintenance tracking', 'Real-time flight operations monitoring', 'Safety and compliance data management', 'Predictive maintenance analytics'],
        },
        {
            name: 'Healthcare',
            image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=800&fit=crop',
            title: 'Data Governance for Healthcare',
            points: ['Patient data privacy (HIPAA compliance)', 'Clinical data quality assurance', 'Research data lineage and provenance', 'Interoperability standards'],
        },
    ];

    // DG Sidebar Navigation
    const dgSidebarNav = [
        { id: 'dg-benefits', label: 'Business Benefits' },
        { id: 'dg-process', label: 'Process' },
        { id: 'dg-tech-stack', label: 'Technologies' },
        { id: 'dg-industry', label: 'Industries' },
        { id: 'dg-faq', label: 'FAQ' },
    ];

    // DG FAQ Items
    const dgFaqs = [
        { q: 'How long does it typically take to see ROI from data governance?', a: 'Most organizations see measurable ROI within 6-12 months, including reduced data errors, faster reporting, and improved regulatory compliance. The timeline depends on the complexity of your data environment and the scope of implementation.' },
        { q: 'Can governance solutions integrate with our existing data stack?', a: 'Yes, modern data governance platforms are designed to integrate with popular data warehouses, lakes, ETL tools, and BI platforms. We specialize in connecting tools like Snowflake, Databricks, and cloud-native services.' },
        { q: 'What if our data environment is complex or fragmented?', a: 'Complex environments are our specialty. We start with a thorough assessment, map your data ecosystem, and implement governance incrementally—starting with your most critical data domains and expanding from there.' },
    ];

    if (isDataGovernance) {
        return (
            <div className="dg-v2-page">
                {/* HERO SECTION */}
                <section className="dg-v2-hero">
                    <div className="container dg-v2-hero-inner">
                        <div className="dg-v2-breadcrumbs">
                            <Link to="/">Home</Link> <span>»</span> <span>Data Governance & Observability</span>
                        </div>
                        <h1 className="dg-v2-hero-title">Data Governance & Observability Services</h1>
                        <p className="dg-v2-hero-subtitle">Ensure data quality, compliance, and reliability across your entire data ecosystem with comprehensive governance and observability solutions.</p>
                        <Link to="/contact" className="dg-v2-btn-primary">Let's talk</Link>
                    </div>
                </section>

                {/* MAIN CONTENT WITH STICKY SIDEBAR */}
                <div className="dg-v2-main-layout container">
                    {/* COMPONENT 1: Sticky Sidebar */}
                    <aside className="dg-v2-sidebar">
                        <nav className="dg-v2-sidebar-nav">
                            {dgSidebarNav.map((item) => (
                                <a key={item.id} href={`#${item.id}`} className="dg-v2-sidebar-link">{item.label}</a>
                            ))}
                        </nav>
                        <Link to="/contact" className="dg-v2-btn-primary dg-v2-sidebar-cta">Schedule a call</Link>
                    </aside>

                    {/* RIGHT COLUMN: Scrollable Content */}
                    <main className="dg-v2-content">

                        {/* COMPONENT 2: Business Benefits (Text Blocks) */}
                        <section id="dg-benefits" className="dg-v2-section">
                            <h2 className="dg-v2-section-title">Business Benefits of Data Governance & Observability</h2>

                            <div className="dg-v2-comparison-block">
                                <h3 className="dg-v2-subsection-title">What is the difference between Data Governance and Data Observability?</h3>
                                <div className="dg-v2-comparison-grid">
                                    <div className="dg-v2-comparison-card">
                                        <h4><Icons.Shield size={20} /> Data Governance</h4>
                                        <p>Data Governance focuses on policies, standards, and processes that ensure data is managed properly throughout its lifecycle. It defines who can access data, how it should be used, and ensures regulatory compliance.</p>
                                    </div>
                                    <div className="dg-v2-comparison-card">
                                        <h4><Icons.Activity size={20} /> Data Observability</h4>
                                        <p>Data Observability provides real-time visibility into data health across your pipelines. It monitors data freshness, volume, schema changes, and anomalies to detect and resolve issues before they impact downstream systems.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="dg-v2-strategic-block">
                                <h3 className="dg-v2-subsection-title">Why are Data Governance & Observability critical for AI strategy?</h3>
                                <p>AI models are only as good as the data they're trained on. Poor data quality leads to biased models, incorrect predictions, and compliance risks. A robust governance and observability framework ensures your AI initiatives are built on a foundation of trusted, reliable data.</p>
                            </div>
                        </section>

                        {/* COMPONENT 3: Implementation Process (Numbered List) */}
                        <section id="dg-process" className="dg-v2-section dg-v2-process-section">
                            <h2 className="dg-v2-section-title-white">Data Governance & Observability: Implementation Process</h2>
                            <div className="dg-v2-numbered-steps">
                                {dgProcessSteps.map((step, idx) => (
                                    <div
                                        key={idx}
                                        className={`dg-v2-step-row ${activeDGProcessStep === idx ? 'active' : ''}`}
                                        onClick={() => setActiveDGProcessStep(idx)}
                                    >
                                        <div className="dg-v2-step-number">{step.num}</div>
                                        <div className="dg-v2-step-text">
                                            <h4>{step.title}</h4>
                                            <p>{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* COMPONENT 4: Tech Stack (Categorized Grid) */}
                        <section id="dg-tech-stack" className="dg-v2-section dg-v2-techstack-section">
                            <h2 className="dg-v2-section-title">Data Governance and Observability: Tools & Technologies</h2>
                            <div className="dg-v2-tech-grid">
                                {dgTechStack.map((category, idx) => (
                                    <div key={idx} className="dg-v2-tech-category">
                                        <h4 className="dg-v2-tech-category-title">{category.category}</h4>
                                        <div className="dg-v2-tech-tools">
                                            {category.tools.map((tool, toolIdx) => (
                                                <span key={toolIdx} className="dg-v2-tech-badge">{tool}</span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* COMPONENT 5: Industry Use Cases (Tabs) */}
                        <section id="dg-industry" className="dg-v2-section">
                            <h2 className="dg-v2-section-title">Data Governance and Observability: Use Cases Across Industries</h2>
                            <div className="dg-v2-industry-block">
                                <div className="dg-v2-industry-image">
                                    <img src={dgIndustryTabs[activeDGIndustryTab].image} alt={dgIndustryTabs[activeDGIndustryTab].name} />
                                </div>
                                <div className="dg-v2-industry-content">
                                    <h3>{dgIndustryTabs[activeDGIndustryTab].title}</h3>
                                    <ul className="dg-v2-industry-points">
                                        {dgIndustryTabs[activeDGIndustryTab].points.map((point, idx) => (
                                            <li key={idx}><Icons.CheckCircle size={16} className="dg-v2-check-icon" /> {point}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="dg-v2-industry-tabs">
                                {dgIndustryTabs.map((tab, idx) => (
                                    <button
                                        key={idx}
                                        className={`dg-v2-industry-tab ${activeDGIndustryTab === idx ? 'active' : ''}`}
                                        onClick={() => setActiveDGIndustryTab(idx)}
                                    >
                                        {tab.name}
                                    </button>
                                ))}
                            </div>
                        </section>

                        {/* COMPONENT 6: FAQ (Accordion) */}
                        <section id="dg-faq" className="dg-v2-section dg-v2-faq-section">
                            <h2 className="dg-v2-section-title">Questions About Data Governance & Observability</h2>
                            <div className="dg-v2-accordion">
                                {dgFaqs.map((faq, idx) => (
                                    <div key={idx} className={`dg-v2-accordion-item ${expandedDGFaq === idx ? 'open' : ''}`}>
                                        <button
                                            className="dg-v2-accordion-trigger"
                                            onClick={() => setExpandedDGFaq(expandedDGFaq === idx ? null : idx)}
                                        >
                                            <span>{faq.q}</span>
                                            <Icons.Plus size={20} />
                                        </button>
                                        <div className="dg-v2-accordion-content">
                                            <p>{faq.a}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                    </main>
                </div>

                {/* FOOTER CTA */}
                <section className="dg-v2-footer-cta">
                    <div className="container dg-v2-footer-inner">
                        <div>
                            <h2>Let's discuss your data governance project</h2>
                            <p>Our experts will help you build a trusted data foundation.</p>
                        </div>
                        <Link to="/contact" className="dg-v2-btn-primary">Get Started</Link>
                    </div>
                </section>
            </div>
        );
    }

    // ==========================================
    // DATABRICKS DEPLOYMENT SERVICES - ADDEPTO CLONE
    // ==========================================

    // DB State Variables
    const [expandedDBFaq, setExpandedDBFaq] = useState(null);
    const [activeDBProcessStep, setActiveDBProcessStep] = useState(0);
    const [activeDBIndustryTab, setActiveDBIndustryTab] = useState(0);

    // DB Q&A FAQ Items
    const dbFaqs = [
        { q: 'How will Databricks create measurable business value for our organization?', a: 'Databricks eliminates siloed tools and consolidates your data, analytics, and AI workloads on a single platform. Organizations typically reduce annual spend by $500K–$2M while accelerating time-to-insight by 40-60%.' },
        { q: 'Can we integrate Databricks with our existing data infrastructure?', a: 'Yes. Databricks connects to 100+ systems including Snowflake, SAP, AWS S3, Azure Blob, and on-premise databases. Our team specializes in building seamless integration layers.' },
        { q: 'Will adopting Databricks create vendor lock-in?', a: 'No. Your data remains in open Delta Lake format, which is Apache-licensed. You maintain full portability and can access your data with any tool that supports Parquet.' },
        { q: 'How long does a typical Databricks implementation take?', a: 'A foundational implementation takes 8-12 weeks. Complex migrations with legacy ETL modernization may take 4-6 months. We provide clear milestones and ROI benchmarks throughout.' },
    ];

    // DB Consulting Process Steps
    const dbProcessSteps = [
        { icon: 'Search', title: 'Strategic Assessment & Architecture Design', desc: 'We analyze your current infrastructure and design a tailored Databricks roadmap with governance frameworks.' },
        { icon: 'Shield', title: 'Foundation Setup & Governance Implementation', desc: 'Unity Catalog configuration, security policies, and workspace setup for enterprise-grade data management.' },
        { icon: 'Database', title: 'Platform Integration & Migration', desc: 'Legacy ETL modernization, data pipeline migration, and seamless integration with existing systems.' },
        { icon: 'LineChart', title: 'Business Intelligence Enablement', desc: 'Self-service analytics, dashboard creation, and SQL analytics workspace configuration.' },
        { icon: 'Users', title: 'Optimization & Knowledge Transfer', desc: 'Performance fine-tuning, cost optimization, and comprehensive training for your team.' },
    ];

    // DB Service Cards
    const dbServiceCards = [
        { title: 'Databricks Audit', icon: 'Search', desc: 'A full-scale, expert-led review of your Databricks environment to pinpoint bottlenecks, security gaps, and optimization opportunities.' },
        { title: 'Databricks Optimization', icon: 'Zap', desc: 'Targeted improvement program to boost performance, reduce costs, and maximize the value of your Databricks investment.' },
        { title: 'Databricks Migration', icon: 'ArrowRightCircle', desc: 'Smooth, disruption-free migration from legacy systems. Modernize pipelines and unlock the full power of the Lakehouse.' },
    ];

    // DB Industry Use Cases
    const dbIndustryTabs = [
        {
            name: 'Aviation',
            image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=800&fit=crop',
            title: 'Databricks for Aviation',
            points: ['Predictive maintenance for fleet management', 'Smart passenger flow optimization', 'Real-time flight operations analytics', 'Fuel consumption optimization'],
        },
        {
            name: 'Automotive & Manufacturing',
            image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&h=800&fit=crop',
            title: 'Databricks for Automotive',
            points: ['Fleet intelligence and telematics', 'Connected vehicle data processing', 'Supply chain optimization', 'Quality analytics and defect prediction'],
        },
        {
            name: 'Engineering',
            image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=800&fit=crop',
            title: 'Databricks for Engineering',
            points: ['IoT sensor data processing', 'Digital twin analytics', 'Simulation data management', 'Performance optimization'],
        },
    ];

    // DB Sidebar Navigation
    const dbSidebarNav = [
        { id: 'db-benefits', label: 'Databricks Benefits' },
        { id: 'db-process', label: 'Integration process' },
        { id: 'db-services', label: 'Our Services' },
        { id: 'db-industry', label: 'Use Cases' },
        { id: 'db-key-benefits', label: 'Key Benefits' },
    ];

    // DB Key Benefits
    const dbKeyBenefits = [
        { icon: 'Layers', title: 'Unified Lakehouse', desc: 'Break down data silos with a single platform for data engineering, analytics, and AI.' },
        { icon: 'Zap', title: 'Scalable Efficiency', desc: 'Cloud-native, auto-scaling platform that handles petabytes of data cost-effectively.' },
        { icon: 'Brain', title: 'AI Integration', desc: 'Accelerate innovation with built-in ML capabilities, MLflow, and generative AI features.' },
    ];

    if (isDatabricks) {
        return (
            <div className="db-v2-page">
                {/* HERO SECTION */}
                <section className="db-v2-hero">
                    <div className="container db-v2-hero-inner">
                        <div className="db-v2-breadcrumbs">
                            <Link to="/">Home</Link> <span>»</span> <span>Databricks Consulting Services</span>
                        </div>
                        <h1 className="db-v2-hero-title">Databricks Deployment Services</h1>
                        <p className="db-v2-hero-subtitle">Expert implementation and optimization of the Databricks Lakehouse platform. Unify your data, analytics, and AI on a single platform.</p>
                        <Link to="/contact" className="db-v2-btn-primary">Let's talk</Link>
                    </div>
                </section>

                {/* MAIN CONTENT WITH STICKY SIDEBAR */}
                <div className="db-v2-main-layout container">
                    {/* COMPONENT 1: Sticky Sidebar */}
                    <aside className="db-v2-sidebar">
                        <nav className="db-v2-sidebar-nav">
                            {dbSidebarNav.map((item) => (
                                <a key={item.id} href={`#${item.id}`} className="db-v2-sidebar-link">{item.label}</a>
                            ))}
                        </nav>
                        <Link to="/contact" className="db-v2-btn-primary db-v2-sidebar-cta">Schedule a call</Link>
                    </aside>

                    {/* RIGHT COLUMN: Scrollable Content */}
                    <main className="db-v2-content">

                        {/* COMPONENT 2: Business Benefits (Q&A Accordion) */}
                        <section id="db-benefits" className="db-v2-section">
                            <h2 className="db-v2-section-title">Databricks Implementation Benefits</h2>
                            <div className="db-v2-accordion">
                                {dbFaqs.map((faq, idx) => (
                                    <div key={idx} className={`db-v2-accordion-item ${expandedDBFaq === idx ? 'open' : ''}`}>
                                        <button
                                            className="db-v2-accordion-trigger"
                                            onClick={() => setExpandedDBFaq(expandedDBFaq === idx ? null : idx)}
                                        >
                                            <span>{faq.q}</span>
                                            <Icons.ChevronDown size={20} />
                                        </button>
                                        <div className="db-v2-accordion-content">
                                            <p>{faq.a}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* COMPONENT 3: Consulting Process (Dark Vertical Stepper) */}
                        <section id="db-process" className="db-v2-section db-v2-process-section">
                            <h2 className="db-v2-section-title-white">Addepto Databricks Consulting Process</h2>
                            <div className="db-v2-vertical-stepper">
                                {dbProcessSteps.map((step, idx) => {
                                    const IconComponent = Icons[step.icon] || Icons.Circle;
                                    return (
                                        <div
                                            key={idx}
                                            className={`db-v2-step-item ${activeDBProcessStep === idx ? 'active' : ''}`}
                                            onClick={() => setActiveDBProcessStep(idx)}
                                        >
                                            <div className="db-v2-step-indicator">
                                                <div className="db-v2-step-icon">
                                                    <IconComponent size={20} />
                                                </div>
                                                {idx < dbProcessSteps.length - 1 && <div className="db-v2-step-line"></div>}
                                            </div>
                                            <div className="db-v2-step-content">
                                                <h4>{step.title}</h4>
                                                <p>{step.desc}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>

                        {/* COMPONENT 4: Service Cards Grid */}
                        <section id="db-services" className="db-v2-section">
                            <h2 className="db-v2-section-title">End-to-End Databricks Expertise for Every Step</h2>
                            <div className="db-v2-service-cards">
                                {dbServiceCards.map((card, idx) => {
                                    const IconComponent = Icons[card.icon] || Icons.Box;
                                    return (
                                        <div key={idx} className="db-v2-service-card">
                                            <div className="db-v2-service-card-icon">
                                                <IconComponent size={24} />
                                            </div>
                                            <h3>{card.title}</h3>
                                            <p>{card.desc}</p>
                                            <Link to="/contact" className="db-v2-read-more">Read more →</Link>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>

                        {/* COMPONENT 5: Industry Use Cases (Tabs) */}
                        <section id="db-industry" className="db-v2-section">
                            <h2 className="db-v2-section-title">Databricks Use Cases</h2>
                            <div className="db-v2-industry-block">
                                <div className="db-v2-industry-image">
                                    <img src={dbIndustryTabs[activeDBIndustryTab].image} alt={dbIndustryTabs[activeDBIndustryTab].name} />
                                </div>
                                <div className="db-v2-industry-content">
                                    <h3>{dbIndustryTabs[activeDBIndustryTab].title}</h3>
                                    <ul className="db-v2-industry-points">
                                        {dbIndustryTabs[activeDBIndustryTab].points.map((point, idx) => (
                                            <li key={idx}><Icons.Check size={16} className="db-v2-check-icon" /> {point}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="db-v2-industry-tabs">
                                {dbIndustryTabs.map((tab, idx) => (
                                    <button
                                        key={idx}
                                        className={`db-v2-industry-tab ${activeDBIndustryTab === idx ? 'active' : ''}`}
                                        onClick={() => setActiveDBIndustryTab(idx)}
                                    >
                                        {tab.name}
                                    </button>
                                ))}
                            </div>
                        </section>

                        {/* COMPONENT 6: Key Benefits (Icon Grid) */}
                        <section id="db-key-benefits" className="db-v2-section db-v2-key-benefits-section">
                            <h2 className="db-v2-section-title">Key Benefits</h2>
                            <div className="db-v2-benefits-grid">
                                {dbKeyBenefits.map((benefit, idx) => {
                                    const IconComponent = Icons[benefit.icon] || Icons.Check;
                                    return (
                                        <div key={idx} className="db-v2-benefit-card">
                                            <div className="db-v2-benefit-icon">
                                                <IconComponent size={24} />
                                            </div>
                                            <h4>{benefit.title}</h4>
                                            <p>{benefit.desc}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>

                    </main>
                </div>

                {/* FOOTER CTA */}
                <section className="db-v2-footer-cta">
                    <div className="container db-v2-footer-inner">
                        <div>
                            <h2>Ready to unlock the power of Databricks?</h2>
                            <p>Our certified experts will guide your Databricks journey.</p>
                        </div>
                        <Link to="/contact" className="db-v2-btn-primary">Get Started</Link>
                    </div>
                </section>
            </div>
        );
    }

    // ==========================================
    // AI AGENTS DEVELOPMENT - ADDEPTO CLONE
    // ==========================================

    // AI Agents State Variables
    const [activeAgentTab, setActiveAgentTab] = useState(0);
    const [activeAgentProcessStep, setActiveAgentProcessStep] = useState(0);
    const [activeAgentIndustryTab, setActiveAgentIndustryTab] = useState(0);
    const [expandedAgentFaq, setExpandedAgentFaq] = useState(null);

    // AI Agents Content Switcher Tabs
    const agentContentTabs = [
        {
            label: 'What is an AI agent?',
            title: 'AI Agents Transform Business Operations',
            content: 'Traditional AI tools are reactive—they wait for your command. An AI agent is built for action. It observes, reasons, decides, and executes autonomously within defined guardrails.',
            points: ['Automate complex workflows end-to-end', 'Take initiative based on changing conditions', 'Integrate with your existing systems', 'Ensure security and compliance'],
        },
        {
            label: 'What types of AI agents are available?',
            title: 'Types of AI Agents',
            content: 'Understanding the spectrum of AI agents helps you choose the right approach for your specific use case.',
            types: [
                { name: 'Simple reflex agents', desc: 'Act based on current input using condition-action rules.' },
                { name: 'Model-based reflex agents', desc: 'Maintain internal representation of the world state.' },
                { name: 'Goal-based agents', desc: 'Plan sequences of actions to achieve specific goals.' },
                { name: 'Utility-based agents', desc: 'Evaluate possible outcomes to maximize expected utility.' },
                { name: 'Learning agents', desc: 'Improve continuously through experience and feedback.' },
                { name: 'Multi-agent systems', desc: 'Multiple agents working together on complex tasks.' },
            ],
        },
        {
            label: 'What do industry-specific agents do?',
            title: 'Industry-Specific AI Agents',
            content: 'AI agents can be tailored to specific industry needs, from financial trading to healthcare coordination.',
            points: ['Finance: Automated trading and fraud detection', 'Healthcare: Patient coordination and diagnostics assistance', 'Manufacturing: Predictive maintenance and quality control', 'Retail: Inventory optimization and personalized recommendations'],
        },
        {
            label: 'How do AI agents keep data safe?',
            title: 'AI Agent Security & Compliance',
            content: 'Enterprise AI agents are designed with security-first principles, ensuring your data remains protected.',
            points: ['Role-based access controls', 'Audit logging and transparency', 'Data encryption at rest and in transit', 'Compliance with GDPR, HIPAA, SOC 2'],
        },
    ];

    // AI Agents Development Process (8 Steps)
    const agentProcessSteps = [
        { icon: 'Search', title: 'Discovery Phase', desc: 'Use case definition, stakeholder alignment, and success criteria establishment.' },
        { icon: 'Layout', title: 'Design Phase', desc: 'System architecture design, agent interaction patterns, and integration mapping.' },
        { icon: 'Database', title: 'Data Preparation Phase', desc: 'Data cleaning, labeling, and preparation for agent training.' },
        { icon: 'Brain', title: 'Modeling Phase', desc: 'Model selection, fine-tuning, and prompt engineering.' },
        { icon: 'Code', title: 'Development Phase', desc: 'Building agent logic, tool integrations, and orchestration layer.' },
        { icon: 'Shield', title: 'Testing Phase', desc: 'Validation, edge case testing, and security assessment.' },
        { icon: 'Rocket', title: 'Deployment Phase', desc: 'Orchestration setup, monitoring, and production rollout.' },
        { icon: 'RefreshCw', title: 'Optimization Phase', desc: 'Feedback loops, performance tuning, and continuous improvement.' },
    ];

    // AI Agents Industry Use Cases
    const agentIndustryTabs = [
        {
            name: 'Financial Services',
            image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=800&fit=crop',
            title: 'AI Agents for Finance',
            points: ['Monitor trading markets in real-time', 'Detect and prevent fraud automatically', 'Automate compliance reporting', 'Personalize financial advice'],
        },
        {
            name: 'Healthcare',
            image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=800&fit=crop',
            title: 'AI Agents for Healthcare',
            points: ['Coordinate patient data across systems', 'Assist with diagnostics and triage', 'Automate appointment scheduling', 'Monitor patient health remotely'],
        },
        {
            name: 'Manufacturing',
            image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=800&fit=crop',
            title: 'AI Agents for Manufacturing',
            points: ['Predict equipment failures before they occur', 'Schedule preventive maintenance automatically', 'Optimize production line efficiency', 'Manage inventory in real-time'],
        },
        {
            name: 'Customer Experience',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=800&fit=crop',
            title: 'AI Agents for CX',
            points: ['Handle customer inquiries 24/7', 'Personalize product recommendations', 'Resolve issues without human intervention', 'Proactively reach out for feedback'],
        },
    ];

    // AI Agents Sidebar Navigation
    const agentSidebarNav = [
        { id: 'agent-benefits', label: 'Business benefits' },
        { id: 'agent-process', label: 'Development process' },
        { id: 'agent-industry', label: 'Real-world applications' },
        { id: 'agent-faq', label: 'FAQ' },
    ];

    // AI Agents FAQ Items
    const agentFaqs = [
        { q: 'How do we update or improve our AI agent?', a: 'AI agents can be continuously improved through feedback loops. We set up monitoring to track performance and retrain models as needed. Most updates can be deployed without downtime.' },
        { q: "What happens if the AI agent doesn't know what to do?", a: 'Agents are designed with fallback mechanisms. When uncertain, they can escalate to human operators, request clarification, or take conservative actions based on predefined rules.' },
        { q: 'How do AI agents handle integration with legacy systems?', a: 'We build integration layers using APIs, webhooks, and custom connectors. Most legacy systems can be integrated without modification through careful middleware design.' },
        { q: "What's the most common mistake companies make with AI agents?", a: 'Trying to automate too much too fast. We recommend starting with a focused use case, proving value, then expanding scope incrementally.' },
    ];

    if (isAIAgents) {
        return (
            <div className="aa-v2-page">
                {/* HERO SECTION */}
                <section className="aa-v2-hero">
                    <div className="container aa-v2-hero-inner">
                        <div className="aa-v2-breadcrumbs">
                            <Link to="/">Home</Link> <span>»</span> <span>AI Agents Development</span>
                        </div>
                        <h1 className="aa-v2-hero-title">AI Agents Development</h1>
                        <p className="aa-v2-hero-subtitle">Build autonomous AI agents that observe, reason, decide, and execute—transforming how your business operates.</p>
                        <Link to="/contact" className="aa-v2-btn-primary">Let's talk</Link>
                    </div>
                </section>

                {/* MAIN CONTENT WITH STICKY SIDEBAR */}
                <div className="aa-v2-main-layout container">
                    {/* COMPONENT 1: Sticky Sidebar */}
                    <aside className="aa-v2-sidebar">
                        <nav className="aa-v2-sidebar-nav">
                            {agentSidebarNav.map((item) => (
                                <a key={item.id} href={`#${item.id}`} className="aa-v2-sidebar-link">{item.label}</a>
                            ))}
                        </nav>
                        <Link to="/contact" className="aa-v2-btn-primary aa-v2-sidebar-cta">Schedule a call</Link>
                    </aside>

                    {/* RIGHT COLUMN: Scrollable Content */}
                    <main className="aa-v2-content">

                        {/* COMPONENT 2: Business Benefits (Content Switcher) */}
                        <section id="agent-benefits" className="aa-v2-section">
                            <h2 className="aa-v2-section-title">Business benefits of AI agents</h2>
                            <div className="aa-v2-tabs-layout">
                                <div className="aa-v2-tabs-list">
                                    {agentContentTabs.map((tab, idx) => (
                                        <button
                                            key={idx}
                                            className={`aa-v2-tab-btn ${activeAgentTab === idx ? 'active' : ''}`}
                                            onClick={() => setActiveAgentTab(idx)}
                                        >
                                            {tab.label}
                                        </button>
                                    ))}
                                </div>
                                <div className="aa-v2-tab-content">
                                    <h3>{agentContentTabs[activeAgentTab].title}</h3>
                                    <p>{agentContentTabs[activeAgentTab].content}</p>
                                    {agentContentTabs[activeAgentTab].points && (
                                        <ul className="aa-v2-tab-points">
                                            {agentContentTabs[activeAgentTab].points.map((point, idx) => (
                                                <li key={idx}><Icons.Check size={16} /> {point}</li>
                                            ))}
                                        </ul>
                                    )}
                                    {agentContentTabs[activeAgentTab].types && (
                                        <div className="aa-v2-types-grid">
                                            {agentContentTabs[activeAgentTab].types.map((type, idx) => (
                                                <div key={idx} className="aa-v2-type-item">
                                                    <h4>{type.name}</h4>
                                                    <p>{type.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                    <Link to="/contact" className="aa-v2-btn-link">Let's talk →</Link>
                                </div>
                            </div>
                        </section>

                        {/* COMPONENT 4: Development Process (8-Step Dark Stepper) */}
                        <section id="agent-process" className="aa-v2-section aa-v2-process-section">
                            <h2 className="aa-v2-section-title-white">Development phase: Building the agent</h2>
                            <div className="aa-v2-vertical-stepper">
                                {agentProcessSteps.map((step, idx) => {
                                    const IconComponent = Icons[step.icon] || Icons.Circle;
                                    return (
                                        <div
                                            key={idx}
                                            className={`aa-v2-step-item ${activeAgentProcessStep === idx ? 'active' : ''}`}
                                            onClick={() => setActiveAgentProcessStep(idx)}
                                        >
                                            <div className="aa-v2-step-indicator">
                                                <div className="aa-v2-step-icon">
                                                    <IconComponent size={20} />
                                                </div>
                                                {idx < agentProcessSteps.length - 1 && <div className="aa-v2-step-line"></div>}
                                            </div>
                                            <div className="aa-v2-step-content">
                                                <h4>{step.title}</h4>
                                                <p>{step.desc}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>

                        {/* COMPONENT 5: Industry Use Cases (Tabs) */}
                        <section id="agent-industry" className="aa-v2-section">
                            <h2 className="aa-v2-section-title">AI Agents tailored by industry</h2>
                            <div className="aa-v2-industry-block">
                                <div className="aa-v2-industry-image">
                                    <img src={agentIndustryTabs[activeAgentIndustryTab].image} alt={agentIndustryTabs[activeAgentIndustryTab].name} />
                                </div>
                                <div className="aa-v2-industry-content">
                                    <h3>{agentIndustryTabs[activeAgentIndustryTab].title}</h3>
                                    <ul className="aa-v2-industry-points">
                                        {agentIndustryTabs[activeAgentIndustryTab].points.map((point, idx) => (
                                            <li key={idx}><Icons.Check size={16} className="aa-v2-check-icon" /> {point}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="aa-v2-industry-tabs">
                                {agentIndustryTabs.map((tab, idx) => (
                                    <button
                                        key={idx}
                                        className={`aa-v2-industry-tab ${activeAgentIndustryTab === idx ? 'active' : ''}`}
                                        onClick={() => setActiveAgentIndustryTab(idx)}
                                    >
                                        {tab.name}
                                    </button>
                                ))}
                            </div>
                        </section>

                        {/* COMPONENT 6: FAQ (Accordion) */}
                        <section id="agent-faq" className="aa-v2-section aa-v2-faq-section">
                            <h2 className="aa-v2-section-title">Common Questions</h2>
                            <div className="aa-v2-accordion">
                                {agentFaqs.map((faq, idx) => (
                                    <div key={idx} className={`aa-v2-accordion-item ${expandedAgentFaq === idx ? 'open' : ''}`}>
                                        <button
                                            className="aa-v2-accordion-trigger"
                                            onClick={() => setExpandedAgentFaq(expandedAgentFaq === idx ? null : idx)}
                                        >
                                            <span>{faq.q}</span>
                                            <Icons.Plus size={20} />
                                        </button>
                                        <div className="aa-v2-accordion-content">
                                            <p>{faq.a}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                    </main>
                </div>

                {/* FOOTER CTA */}
                <section className="aa-v2-footer-cta">
                    <div className="container aa-v2-footer-inner">
                        <div>
                            <h2>Ready to build your AI agent?</h2>
                            <p>Our experts will help you design and deploy autonomous AI solutions.</p>
                        </div>
                        <Link to="/contact" className="aa-v2-btn-primary">Get Started</Link>
                    </div>
                </section>
            </div>
        );
    }

    // ==========================================
    // MACHINE LEARNING CONSULTING - ADDEPTO CLONE
    // ==========================================

    // ML State Variables
    const [activeMLTab, setActiveMLTab] = useState(0);
    const [activeMLProcessStep, setActiveMLProcessStep] = useState(0);
    const [activeMLIndustryTab, setActiveMLIndustryTab] = useState(0);
    const [expandedMLFaq, setExpandedMLFaq] = useState(null);

    // ML Content Switcher Tabs
    const mlContentTabs = [
        {
            label: 'ML Services',
            title: 'Machine Learning Consulting Services',
            content: 'Machine Learning consulting can be used by businesses of all sizes to transform data into actionable insights. Our ML services help you identify opportunities, build models, and deploy solutions that drive measurable business outcomes.',
            points: ['Custom ML model development', 'Data pipeline architecture', 'Model deployment and monitoring', 'MLOps implementation'],
        },
        {
            label: 'ML Consulting Experts',
            title: 'Our Machine Learning Experts',
            content: 'Our team includes data scientists, ML engineers, and domain experts who bring years of experience across industries.',
            points: ['PhD-level data scientists', 'Certified cloud ML architects', 'Industry domain specialists', 'MLOps and DevOps engineers'],
        },
        {
            label: 'Types of Machine Learning',
            title: 'Types of Machine Learning',
            content: 'Understanding the different types of machine learning helps you choose the right approach for your specific use case.',
            types: [
                { name: 'Supervised Learning', desc: 'Models trained on labeled data to predict outcomes. Used for classification and regression tasks like fraud detection and price prediction.' },
                { name: 'Unsupervised Learning', desc: 'Discovers hidden patterns in unlabeled data. Used for clustering, anomaly detection, and customer segmentation.' },
                { name: 'Reinforcement Learning', desc: 'Agents learn through trial and error to maximize rewards. Used for robotics, game AI, and dynamic pricing.' },
            ],
        },
        {
            label: 'ML Solutions',
            title: 'Machine Learning Solutions',
            content: 'We deliver end-to-end ML solutions tailored to your business needs.',
            points: ['Predictive analytics and forecasting', 'Fraud detection and anomaly detection', 'Recommendation systems', 'Natural language processing', 'Computer vision applications'],
        },
    ];

    // ML Consulting Process (7 Steps)
    const mlProcessSteps = [
        { icon: 'Search', title: 'Identifying Business Challenges', desc: 'Understanding your business goals and identifying where ML can create value.' },
        { icon: 'FileSearch', title: 'Running Feasibility Examination', desc: 'Assessing data availability, quality, and technical feasibility for ML solutions.' },
        { icon: 'Database', title: 'Evaluating Data Infrastructure', desc: "Reviewing your existing data infrastructure and recommending improvements." },
        { icon: 'Brain', title: 'Recommending ML Algorithms', desc: 'Selecting the optimal algorithms and techniques for your specific use case.' },
        { icon: 'Code', title: 'Developing ML Models', desc: 'Building, training, and fine-tuning machine learning models.' },
        { icon: 'TestTube', title: 'Testing and Evaluating', desc: 'Rigorous testing, validation, and performance evaluation.' },
        { icon: 'Rocket', title: 'Implementation', desc: 'Deploying models to production with monitoring and maintenance.' },
    ];

    // ML Industry Use Cases
    const mlIndustryTabs = [
        {
            name: 'Finance & Insurance',
            image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=800&fit=crop',
            title: 'ML in Finance & Insurance',
            points: ['Improved customer experience through personalization', 'Calculate risk with ML algorithms', 'Fraud detection and prevention', 'Algorithmic trading strategies'],
        },
        {
            name: 'Logistics',
            image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=800&fit=crop',
            title: 'ML in Logistics',
            points: ['Route optimization and planning', 'Predictive analytics for demand', 'Inventory management automation', 'Fleet maintenance prediction'],
        },
        {
            name: 'Technology Companies',
            image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=800&fit=crop',
            title: 'ML in Technology',
            points: ['Reducing manual labor through automation', 'Advanced data analysis and insights', 'Product recommendation systems', 'User behavior prediction'],
        },
    ];

    // ML Tech Stack
    const mlTechStack = [
        { category: 'ML Development Tools', tools: ['Python', 'R', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas'] },
        { category: 'Cloud & Infrastructure', tools: ['AWS SageMaker', 'Azure ML', 'Google Vertex AI', 'Databricks'] },
        { category: 'MLOps Tools', tools: ['MLflow', 'Kubeflow', 'DVC', 'Airflow'] },
    ];

    // ML Sidebar Navigation
    const mlSidebarNav = [
        { id: 'ml-benefits', label: 'Business benefits' },
        { id: 'ml-process', label: 'Development process' },
        { id: 'ml-industry', label: 'Industry expertise' },
        { id: 'ml-tech-stack', label: 'Technology stack' },
        { id: 'ml-faq', label: 'FAQ' },
    ];

    // ML FAQ Items
    const mlFaqs = [
        { q: 'How does Machine Learning differ from Deep Learning?', a: 'Machine Learning is a broader field that includes algorithms learning from data. Deep Learning is a subset of ML that uses neural networks with multiple layers, excelling at complex pattern recognition in images, text, and audio.' },
        { q: 'How does Machine Learning support Data Science?', a: 'ML provides the predictive and analytical tools that data scientists use to extract insights from data. It automates pattern discovery and enables data-driven decision making at scale.' },
        { q: 'What can you expect from ML consulting services?', a: 'Expect a thorough assessment of your data and business needs, custom model development, deployment support, and ongoing optimization to ensure your ML solutions deliver measurable ROI.' },
        { q: 'How to choose Machine Learning experts?', a: 'Look for proven experience with similar projects, strong technical skills in relevant tools, and the ability to translate business requirements into ML solutions. Ask for case studies and references.' },
    ];

    if (isMLConsulting) {
        return (
            <div className="ml-v2-page">
                {/* HERO SECTION */}
                <section className="ml-v2-hero">
                    <div className="container ml-v2-hero-inner">
                        <div className="ml-v2-breadcrumbs">
                            <Link to="/">Home</Link> <span>»</span> <span>Machine Learning Consulting</span>
                        </div>
                        <h1 className="ml-v2-hero-title">Machine Learning Consulting</h1>
                        <p className="ml-v2-hero-subtitle">Transform your data into actionable insights with custom machine learning solutions tailored to your business needs.</p>
                        <Link to="/contact" className="ml-v2-btn-primary">Let's talk</Link>
                    </div>
                </section>

                {/* MAIN CONTENT WITH STICKY SIDEBAR */}
                <div className="ml-v2-main-layout container">
                    {/* COMPONENT 1: Sticky Sidebar */}
                    <aside className="ml-v2-sidebar">
                        <nav className="ml-v2-sidebar-nav">
                            {mlSidebarNav.map((item) => (
                                <a key={item.id} href={`#${item.id}`} className="ml-v2-sidebar-link">{item.label}</a>
                            ))}
                        </nav>
                        <Link to="/contact" className="ml-v2-btn-primary ml-v2-sidebar-cta">Schedule a call</Link>
                    </aside>

                    {/* RIGHT COLUMN: Scrollable Content */}
                    <main className="ml-v2-content">

                        {/* COMPONENT 2: Business Benefits (Content Switcher) */}
                        <section id="ml-benefits" className="ml-v2-section">
                            <h2 className="ml-v2-section-title">Business benefits of Machine Learning</h2>
                            <div className="ml-v2-tabs-layout">
                                <div className="ml-v2-tabs-list">
                                    {mlContentTabs.map((tab, idx) => (
                                        <button
                                            key={idx}
                                            className={`ml-v2-tab-btn ${activeMLTab === idx ? 'active' : ''}`}
                                            onClick={() => setActiveMLTab(idx)}
                                        >
                                            {tab.label}
                                        </button>
                                    ))}
                                </div>
                                <div className="ml-v2-tab-content">
                                    <h3>{mlContentTabs[activeMLTab].title}</h3>
                                    <p>{mlContentTabs[activeMLTab].content}</p>
                                    {mlContentTabs[activeMLTab].points && (
                                        <ul className="ml-v2-tab-points">
                                            {mlContentTabs[activeMLTab].points.map((point, idx) => (
                                                <li key={idx}><Icons.Check size={16} /> {point}</li>
                                            ))}
                                        </ul>
                                    )}
                                    {mlContentTabs[activeMLTab].types && (
                                        <div className="ml-v2-types-grid">
                                            {mlContentTabs[activeMLTab].types.map((type, idx) => (
                                                <div key={idx} className="ml-v2-type-item">
                                                    <h4>{type.name}</h4>
                                                    <p>{type.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                    <Link to="/contact" className="ml-v2-btn-link">Let's talk →</Link>
                                </div>
                            </div>
                        </section>

                        {/* COMPONENT 3: Our Approach (7-Step Dark Stepper) */}
                        <section id="ml-process" className="ml-v2-section ml-v2-process-section">
                            <h2 className="ml-v2-section-title-white">Our Approach to Machine Learning Consulting</h2>
                            <div className="ml-v2-vertical-stepper">
                                {mlProcessSteps.map((step, idx) => {
                                    const IconComponent = Icons[step.icon] || Icons.Circle;
                                    return (
                                        <div
                                            key={idx}
                                            className={`ml-v2-step-item ${activeMLProcessStep === idx ? 'active' : ''}`}
                                            onClick={() => setActiveMLProcessStep(idx)}
                                        >
                                            <div className="ml-v2-step-indicator">
                                                <div className="ml-v2-step-icon">
                                                    <IconComponent size={20} />
                                                </div>
                                                {idx < mlProcessSteps.length - 1 && <div className="ml-v2-step-line"></div>}
                                            </div>
                                            <div className="ml-v2-step-content">
                                                <h4>{step.title}</h4>
                                                <p>{step.desc}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>

                        {/* COMPONENT 4: Industry Use Cases (Tabs) */}
                        <section id="ml-industry" className="ml-v2-section">
                            <h2 className="ml-v2-section-title">ML Technologies in Industry</h2>
                            <div className="ml-v2-industry-block">
                                <div className="ml-v2-industry-image">
                                    <img src={mlIndustryTabs[activeMLIndustryTab].image} alt={mlIndustryTabs[activeMLIndustryTab].name} />
                                </div>
                                <div className="ml-v2-industry-content">
                                    <h3>{mlIndustryTabs[activeMLIndustryTab].title}</h3>
                                    <ul className="ml-v2-industry-points">
                                        {mlIndustryTabs[activeMLIndustryTab].points.map((point, idx) => (
                                            <li key={idx}><Icons.Check size={16} className="ml-v2-check-icon" /> {point}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="ml-v2-industry-tabs">
                                {mlIndustryTabs.map((tab, idx) => (
                                    <button
                                        key={idx}
                                        className={`ml-v2-industry-tab ${activeMLIndustryTab === idx ? 'active' : ''}`}
                                        onClick={() => setActiveMLIndustryTab(idx)}
                                    >
                                        {tab.name}
                                    </button>
                                ))}
                            </div>
                        </section>

                        {/* COMPONENT 5: Tech Stack (Categorized Grid) */}
                        <section id="ml-tech-stack" className="ml-v2-section ml-v2-techstack-section">
                            <h2 className="ml-v2-section-title">Machine Learning Technologies</h2>
                            <div className="ml-v2-tech-grid">
                                {mlTechStack.map((category, idx) => (
                                    <div key={idx} className="ml-v2-tech-category">
                                        <h4 className="ml-v2-tech-category-title">{category.category}</h4>
                                        <div className="ml-v2-tech-tools">
                                            {category.tools.map((tool, toolIdx) => (
                                                <span key={toolIdx} className="ml-v2-tech-badge">{tool}</span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* COMPONENT 6: FAQ (Accordion) */}
                        <section id="ml-faq" className="ml-v2-section ml-v2-faq-section">
                            <h2 className="ml-v2-section-title">FAQ</h2>
                            <div className="ml-v2-accordion">
                                {mlFaqs.map((faq, idx) => (
                                    <div key={idx} className={`ml-v2-accordion-item ${expandedMLFaq === idx ? 'open' : ''}`}>
                                        <button
                                            className="ml-v2-accordion-trigger"
                                            onClick={() => setExpandedMLFaq(expandedMLFaq === idx ? null : idx)}
                                        >
                                            <span>{faq.q}</span>
                                            <Icons.Plus size={20} />
                                        </button>
                                        <div className="ml-v2-accordion-content">
                                            <p>{faq.a}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                    </main>
                </div>

                {/* FOOTER CTA */}
                <section className="ml-v2-footer-cta">
                    <div className="container ml-v2-footer-inner">
                        <div>
                            <h2>Ready to leverage Machine Learning?</h2>
                            <p>Our ML experts will help you build intelligent solutions.</p>
                        </div>
                        <Link to="/contact" className="ml-v2-btn-primary">Get Started</Link>
                    </div>
                </section>
            </div>
        );
    }

    // ==========================================
    // AI ADVISORY SERVICES - ADDEPTO CLONE
    // ==========================================

    // AI Advisory State Variables
    const [activeAdvisoryTab, setActiveAdvisoryTab] = useState(0);
    const [activeAdvisoryIndustryTab, setActiveAdvisoryIndustryTab] = useState(0);

    // AI Advisory Content Switcher Tabs (6 tabs)
    const advisoryContentTabs = [
        {
            label: 'Increased Efficiency and Productivity',
            title: 'Increased Efficiency and Productivity',
            content: 'Artificial Intelligence can automate repetitive tasks and streamline workflows, allowing human workers to focus on more complex, value-added activities. This leads to significant improvements in operational efficiency.',
            points: ['Automate routine processes', 'Reduce operational costs', 'Free up human resources for strategic work', 'Accelerate time-to-market'],
        },
        {
            label: 'Enhanced Data Analysis and Insights',
            title: 'Enhanced Data Analysis and Insights',
            content: 'AI algorithms can quickly process and analyze large volumes of data, uncovering patterns and insights that would be impossible for humans to detect manually.',
            points: ['Process petabytes of data in real-time', 'Discover hidden correlations', 'Generate actionable insights', 'Support data-driven decision making'],
        },
        {
            label: 'Improved Speed of Business',
            title: 'Improved Speed of Business',
            content: 'AI accelerates decision-making by providing instant analysis and recommendations, enabling faster response to market changes and customer needs.',
            points: ['Real-time analytics and reporting', 'Instant customer responses', 'Rapid prototyping and testing', 'Agile business operations'],
        },
        {
            label: 'Reduced Human Error',
            title: 'Reduced Human Error',
            content: 'AI systems perform tasks with consistent accuracy, eliminating the variability and mistakes that can occur with manual processes.',
            points: ['Consistent quality output', 'Reduced compliance risks', 'Improved accuracy in calculations', 'Fewer costly mistakes'],
        },
        {
            label: 'Automation of Repetitive Tasks',
            title: 'Automation of Repetitive Tasks',
            content: 'From data entry to report generation, AI can handle repetitive tasks 24/7 without fatigue or loss of quality.',
            points: ['Document processing automation', 'Automated data extraction', 'Scheduled report generation', 'Workflow orchestration'],
        },
        {
            label: 'Improved Customer Experience',
            title: 'Improved Customer Experience',
            content: 'AI enables personalized interactions, instant responses, and proactive service that enhance customer satisfaction and loyalty.',
            points: ['24/7 customer support via chatbots', 'Personalized recommendations', 'Predictive customer service', 'Sentiment analysis'],
        },
    ];

    // AI Advisory Process Steps (5 Stages with Outcomes)
    const advisoryProcessSteps = [
        { stage: 1, icon: 'Briefcase', title: 'Business Process Evaluation', desc: 'Meeting stakeholders to understand business goals and analyzing current workflows to identify AI opportunities.', outcome: 'Clear understanding of business needs and potential AI use cases.' },
        { stage: 2, icon: 'Database', title: 'Dataflow Evaluation', desc: 'Assessing data quantity, quality, and accessibility to determine readiness for AI implementation.', outcome: 'Data readiness assessment and gap analysis.' },
        { stage: 3, icon: 'FlaskConical', title: 'AI Proof of Concept (PoC)', desc: 'Testing theoretical assumptions with a focused pilot project to validate AI feasibility.', outcome: 'Working prototype demonstrating AI capabilities.' },
        { stage: 4, icon: 'BarChart', title: 'Evaluation with Business', desc: 'Presenting PoC results to stakeholders and gathering feedback for refinement.', outcome: 'Stakeholder approval and refined requirements.' },
        { stage: 5, icon: 'Rocket', title: 'Deployment & Solution Finalization', desc: 'Developing the full AI solution, integrating with existing systems, and deploying to production.', outcome: 'Production-ready AI solution with documentation.' },
    ];

    // AI Advisory Industry Use Cases
    const advisoryIndustryTabs = [
        {
            name: 'Manufacturing',
            image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=800&fit=crop',
            title: 'AI in Manufacturing',
            points: ['Predictive Maintenance', 'Quality Control', 'Supply Chain Optimization', 'Production Planning'],
        },
        {
            name: 'Retail',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=800&fit=crop',
            title: 'AI in Retail',
            points: ['Personalized Recommendations', 'Demand Forecasting', 'Automated Checkout', 'Inventory Management'],
        },
        {
            name: 'Logistics',
            image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=800&fit=crop',
            title: 'AI in Logistics',
            points: ['Route Optimization', 'Warehouse Automation', 'Predictive Maintenance', 'Last-mile Delivery'],
        },
        {
            name: 'Finance & Insurance',
            image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=800&fit=crop',
            title: 'AI in Finance',
            points: ['Fraud Detection', 'Risk Assessment', 'Algorithmic Trading', 'Customer Onboarding'],
        },
        {
            name: 'Technology',
            image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=800&fit=crop',
            title: 'AI in Technology',
            points: ['Code Assistance', 'Bug Detection', 'User Behavior Analysis', 'Product Optimization'],
        },
    ];

    // AI Advisory Sidebar Navigation
    const advisorySidebarNav = [
        { id: 'advisory-benefits', label: 'Business benefits' },
        { id: 'advisory-process', label: 'How we work' },
        { id: 'advisory-industry', label: 'Industry expertise' },
        { id: 'advisory-key-benefits', label: 'Key benefits' },
    ];

    // AI Advisory Key Benefits
    const advisoryKeyBenefits = [
        { title: 'Assessment of "data readiness"', desc: 'Comprehensive evaluation of your data infrastructure and quality.' },
        { title: 'Development of AI strategy', desc: 'Tailored roadmap aligned with your business objectives.' },
        { title: 'Implementation roadmap', desc: 'Clear milestones and timelines for AI adoption.' },
        { title: 'Delivering PoC', desc: 'Tangible proof of concept to validate AI value.' },
    ];

    if (isAIAdvisory) {
        return (
            <div className="adv-v2-page">
                {/* HERO SECTION */}
                <section className="adv-v2-hero">
                    <div className="container adv-v2-hero-inner">
                        <div className="adv-v2-breadcrumbs">
                            <Link to="/">Home</Link> <span>»</span> <span>AI Advisory Services</span>
                        </div>
                        <h1 className="adv-v2-hero-title">AI Advisory Services</h1>
                        <p className="adv-v2-hero-subtitle">Strategic guidance to help you identify, evaluate, and implement AI solutions that deliver measurable business value.</p>
                        <Link to="/contact" className="adv-v2-btn-primary">Let's talk</Link>
                    </div>
                </section>

                {/* MAIN CONTENT WITH STICKY SIDEBAR */}
                <div className="adv-v2-main-layout container">
                    {/* COMPONENT 1: Sticky Sidebar */}
                    <aside className="adv-v2-sidebar">
                        <nav className="adv-v2-sidebar-nav">
                            {advisorySidebarNav.map((item) => (
                                <a key={item.id} href={`#${item.id}`} className="adv-v2-sidebar-link">{item.label}</a>
                            ))}
                        </nav>
                        <Link to="/contact" className="adv-v2-btn-primary adv-v2-sidebar-cta">Schedule a call</Link>
                    </aside>

                    {/* RIGHT COLUMN: Scrollable Content */}
                    <main className="adv-v2-content">

                        {/* COMPONENT 2: Business Benefits (Content Switcher - 6 tabs) */}
                        <section id="advisory-benefits" className="adv-v2-section">
                            <h2 className="adv-v2-section-title">Business Benefits of AI Advisory</h2>
                            <div className="adv-v2-tabs-layout">
                                <div className="adv-v2-tabs-list">
                                    {advisoryContentTabs.map((tab, idx) => (
                                        <button
                                            key={idx}
                                            className={`adv-v2-tab-btn ${activeAdvisoryTab === idx ? 'active' : ''}`}
                                            onClick={() => setActiveAdvisoryTab(idx)}
                                        >
                                            {tab.label}
                                        </button>
                                    ))}
                                </div>
                                <div className="adv-v2-tab-content">
                                    <h3>{advisoryContentTabs[activeAdvisoryTab].title}</h3>
                                    <p>{advisoryContentTabs[activeAdvisoryTab].content}</p>
                                    <ul className="adv-v2-tab-points">
                                        {advisoryContentTabs[activeAdvisoryTab].points.map((point, idx) => (
                                            <li key={idx}><Icons.Check size={16} /> {point}</li>
                                        ))}
                                    </ul>
                                    <Link to="/contact" className="adv-v2-btn-link">Let's talk →</Link>
                                </div>
                            </div>
                        </section>

                        {/* COMPONENT 3: How We Work (5-Stage Process with Outcomes) */}
                        <section id="advisory-process" className="adv-v2-section adv-v2-process-section">
                            <h2 className="adv-v2-section-title">How we work</h2>
                            <div className="adv-v2-stages-list">
                                {advisoryProcessSteps.map((step, idx) => {
                                    const IconComponent = Icons[step.icon] || Icons.Circle;
                                    return (
                                        <div key={idx} className="adv-v2-stage-item">
                                            <div className="adv-v2-stage-header">
                                                <span className="adv-v2-stage-label">STAGE {step.stage}</span>
                                                <div className="adv-v2-stage-icon">
                                                    <IconComponent size={20} />
                                                </div>
                                            </div>
                                            <h4>{step.title}</h4>
                                            <p>{step.desc}</p>
                                            <div className="adv-v2-stage-outcome">
                                                <strong>Outcome:</strong> {step.outcome}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>

                        {/* COMPONENT 4: Industry Use Cases (Tabs) */}
                        <section id="advisory-industry" className="adv-v2-section">
                            <h2 className="adv-v2-section-title">AI in Specific Industries</h2>
                            <div className="adv-v2-industry-block">
                                <div className="adv-v2-industry-image">
                                    <img src={advisoryIndustryTabs[activeAdvisoryIndustryTab].image} alt={advisoryIndustryTabs[activeAdvisoryIndustryTab].name} />
                                </div>
                                <div className="adv-v2-industry-content">
                                    <h3>{advisoryIndustryTabs[activeAdvisoryIndustryTab].title}</h3>
                                    <ul className="adv-v2-industry-points">
                                        {advisoryIndustryTabs[activeAdvisoryIndustryTab].points.map((point, idx) => (
                                            <li key={idx}><Icons.Check size={16} className="adv-v2-check-icon" /> {point}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="adv-v2-industry-tabs">
                                {advisoryIndustryTabs.map((tab, idx) => (
                                    <button
                                        key={idx}
                                        className={`adv-v2-industry-tab ${activeAdvisoryIndustryTab === idx ? 'active' : ''}`}
                                        onClick={() => setActiveAdvisoryIndustryTab(idx)}
                                    >
                                        {tab.name}
                                    </button>
                                ))}
                            </div>
                        </section>

                        {/* COMPONENT 5: Key Benefits */}
                        <section id="advisory-key-benefits" className="adv-v2-section adv-v2-key-benefits-section">
                            <h2 className="adv-v2-section-title">What You Can Expect</h2>
                            <p className="adv-v2-section-intro">Legacy technologies and fragmented workflows often prevent organizations from leveraging AI. Our advisory services help you navigate these challenges.</p>
                            <div className="adv-v2-benefits-grid">
                                {advisoryKeyBenefits.map((benefit, idx) => (
                                    <div key={idx} className="adv-v2-benefit-card">
                                        <div className="adv-v2-benefit-icon">
                                            <Icons.Check size={20} />
                                        </div>
                                        <h4>{benefit.title}</h4>
                                        <p>{benefit.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                    </main>
                </div>

                {/* FOOTER CTA */}
                <section className="adv-v2-footer-cta">
                    <div className="container adv-v2-footer-inner">
                        <div>
                            <h2>Ready to start your AI journey?</h2>
                            <p>Our advisors will help you identify the right AI opportunities.</p>
                        </div>
                        <Link to="/contact" className="adv-v2-btn-primary">Get Started</Link>
                    </div>
                </section>
            </div>
        );
    }

    // ==========================================
    // MLOPS CONSULTING - ADDEPTO CLONE
    // ==========================================

    // MLOps State Variables
    const [activeMLOpsTab, setActiveMLOpsTab] = useState(0);
    const [activeMLOpsProcessStep, setActiveMLOpsProcessStep] = useState(0);
    const [expandedMLOpsFaq, setExpandedMLOpsFaq] = useState(null);

    // MLOps Content Switcher Tabs (8 tabs including case studies)
    const mlopsContentTabs = [
        {
            label: 'Business Benefits of MLOps',
            title: 'Business Benefits of MLOps Consultation',
            content: 'MLOps stands for Machine Learning Operations. It brings DevOps principles to ML, enabling faster model deployment and continuous improvement. MLOps helps businesses develop data science 80% faster.',
            points: ['Faster model deployment cycles', 'Reduced operational overhead', 'Improved model reliability', 'Scalable ML infrastructure'],
        },
        {
            label: 'Accelerating ML Value Delivery',
            title: 'Accelerating Machine Learning Value Delivery',
            content: 'Traditional ML development is slow and error-prone. MLOps automates the entire pipeline from data preparation to model deployment, dramatically reducing time-to-value.',
            points: ['Automated training pipelines', 'Continuous integration for ML', 'Rapid experimentation', 'Production-ready deployments'],
        },
        {
            label: 'Why Choose Us',
            title: 'Why Choose Our MLOps Consulting?',
            content: 'Our team has deep experience implementing MLOps at enterprise scale. We help you build robust, scalable ML infrastructure.',
            points: ['Enterprise-grade solutions', 'Cloud-agnostic approach', 'Custom tooling development', 'Knowledge transfer included'],
        },
        {
            label: 'Case Study: Revolut',
            title: 'MLOps at Revolut',
            isCaseStudy: true,
            subtitle: 'Sherlock System',
            content: 'Revolut built "Sherlock", an ML-powered fraud detection system that processes millions of transactions daily. Their MLOps pipeline enables real-time model updates and A/B testing.',
            highlights: ['Real-time fraud detection', 'Automated model retraining', 'Sub-millisecond latency', 'Continuous model monitoring'],
        },
        {
            label: 'Case Study: Uber',
            title: 'MLOps at Uber',
            isCaseStudy: true,
            subtitle: 'Michelangelo Platform',
            content: 'Uber\'s Michelangelo platform serves thousands of ML models across the company. It supports both online (real-time) and offline (batch) predictions at massive scale.',
            highlights: ['Unified ML platform', 'Online & Offline predictions', 'Feature store integration', 'Model versioning'],
        },
        {
            label: 'Case Study: DoorDash',
            title: 'MLOps at DoorDash',
            isCaseStudy: true,
            subtitle: 'Delivery Intelligence',
            content: 'DoorDash uses ML to optimize delivery routes, estimate delivery times, and personalize recommendations. Their MLOps infrastructure handles millions of predictions.',
            highlights: ['Route optimization', 'ETA prediction', 'Demand forecasting', 'Real-time personalization'],
        },
        {
            label: 'Business Impact',
            title: 'Business Impact of MLOps',
            content: 'Organizations with mature MLOps practices see significant improvements in model deployment velocity and business outcomes.',
            points: ['70% faster model deployment', '50% reduction in model failures', '3x more models in production', 'Improved regulatory compliance'],
        },
        {
            label: 'Risk Management',
            title: 'Risk Management with MLOps',
            content: 'MLOps provides governance, auditability, and compliance capabilities essential for regulated industries.',
            points: ['Model versioning and lineage', 'Automated documentation', 'Bias detection and mitigation', 'Audit trails for compliance'],
        },
    ];

    // MLOps Process Steps (5 Steps)
    const mlopsProcessSteps = [
        { icon: 'Users', title: 'Team Integration', desc: 'Building a professional team of data scientists, ML engineers, and DevOps specialists to work cohesively.' },
        { icon: 'Database', title: 'ETL Step', desc: 'Extract data from all sources, transform it for ML consumption, and load into feature stores.' },
        { icon: 'GitBranch', title: 'Version Control', desc: 'Implement version control for code, data, and models. Enable rollback to previous parameter sets.' },
        { icon: 'TestTube', title: 'Testing', desc: 'Comprehensive testing including bad rates, accuracy, ROC curves, and A/B testing in production.' },
        { icon: 'Activity', title: 'Monitoring', desc: 'Periodic performance monitoring with alerts for data drift, model decay, and anomalies.' },
    ];

    // MLOps Business Impact (Big Green Numbers)
    const mlopsBusinessImpact = [
        { number: '01', title: 'Continuous Model Improvement', desc: 'Automatically retrains models when performance degrades or new data becomes available.' },
        { number: '02', title: 'Model Deployment at Scale', desc: 'Infrastructure to manage hundreds of models simultaneously with zero downtime.' },
        { number: '03', title: 'ML-Specific Monitoring', desc: 'Tracks data drift, model decay, and prediction quality in real-time.' },
        { number: '04', title: 'Regulatory Compliance', desc: 'Generates documentation and audit trails automatically for regulatory requirements.' },
        { number: '05', title: 'Cost Optimization', desc: 'Optimizes compute resources and reduces infrastructure costs through intelligent scaling.' },
    ];

    // MLOps Tech Stack
    const mlopsTechStack = [
        { category: 'MLOps Tools', tools: ['MLflow', 'Kubeflow', 'Apache Airflow', 'DVC', 'Weights & Biases'] },
        { category: 'Cloud & Infrastructure', tools: ['AWS SageMaker', 'Google Cloud Composer', 'Azure ML', 'Kubernetes'] },
        { category: 'Frameworks', tools: ['TensorFlow', 'PyTorch', 'Keras', 'JAX', 'Scikit-learn'] },
    ];

    // MLOps Sidebar Navigation
    const mlopsSidebarNav = [
        { id: 'mlops-benefits', label: 'Why MLOps' },
        { id: 'mlops-process', label: 'Implementation Process' },
        { id: 'mlops-impact', label: 'Business Impact' },
        { id: 'mlops-tech', label: 'Technology Stack' },
        { id: 'mlops-faq', label: 'MLOps FAQ' },
    ];

    // MLOps FAQ Items
    const mlopsFaqs = [
        { q: 'What are the main principles of MLOps?', a: 'MLOps is built on automation, collaboration, reproducibility, and monitoring. It applies DevOps practices to machine learning to accelerate model delivery and ensure reliability.' },
        { q: 'What are the benefits of MLOps?', a: 'Key benefits include faster model deployment, improved collaboration between teams, better model governance, reduced operational overhead, and continuous model improvement.' },
        { q: 'What is the MLOps process?', a: 'The MLOps process includes data preparation, model training, validation, deployment, monitoring, and retraining. Each step is automated and version-controlled.' },
        { q: 'How is MLOps different from DevOps?', a: 'While DevOps focuses on code, MLOps handles the additional complexity of data, models, and experiments. MLOps includes data versioning, experiment tracking, and model monitoring.' },
    ];

    if (isMLOps) {
        return (
            <div className="mlops-v2-page">
                {/* HERO SECTION */}
                <section className="mlops-v2-hero">
                    <div className="container mlops-v2-hero-inner">
                        <div className="mlops-v2-breadcrumbs">
                            <Link to="/">Home</Link> <span>»</span> <span>MLOps Consulting</span>
                        </div>
                        <h1 className="mlops-v2-hero-title">MLOps Consulting</h1>
                        <p className="mlops-v2-hero-subtitle">Operationalize your machine learning with enterprise-grade MLOps infrastructure that scales.</p>
                        <Link to="/contact" className="mlops-v2-btn-primary">Let's talk</Link>
                    </div>
                </section>

                {/* MAIN CONTENT WITH STICKY SIDEBAR */}
                <div className="mlops-v2-main-layout container">
                    {/* COMPONENT 1: Sticky Sidebar */}
                    <aside className="mlops-v2-sidebar">
                        <nav className="mlops-v2-sidebar-nav">
                            {mlopsSidebarNav.map((item) => (
                                <a key={item.id} href={`#${item.id}`} className="mlops-v2-sidebar-link">{item.label}</a>
                            ))}
                        </nav>
                        <Link to="/contact" className="mlops-v2-btn-primary mlops-v2-sidebar-cta">Schedule a call</Link>
                    </aside>

                    {/* RIGHT COLUMN: Scrollable Content */}
                    <main className="mlops-v2-content">

                        {/* COMPONENT 2: Business Benefits (8-Tab Content Switcher with Case Studies) */}
                        <section id="mlops-benefits" className="mlops-v2-section">
                            <h2 className="mlops-v2-section-title">Why should you go for MLOps</h2>
                            <div className="mlops-v2-tabs-layout">
                                <div className="mlops-v2-tabs-list">
                                    {mlopsContentTabs.map((tab, idx) => (
                                        <button
                                            key={idx}
                                            className={`mlops-v2-tab-btn ${activeMLOpsTab === idx ? 'active' : ''} ${tab.isCaseStudy ? 'case-study' : ''}`}
                                            onClick={() => setActiveMLOpsTab(idx)}
                                        >
                                            {tab.label}
                                        </button>
                                    ))}
                                </div>
                                <div className="mlops-v2-tab-content">
                                    {mlopsContentTabs[activeMLOpsTab].isCaseStudy && (
                                        <span className="mlops-v2-case-badge">Case Study</span>
                                    )}
                                    <h3>{mlopsContentTabs[activeMLOpsTab].title}</h3>
                                    {mlopsContentTabs[activeMLOpsTab].subtitle && (
                                        <h4 className="mlops-v2-subtitle">{mlopsContentTabs[activeMLOpsTab].subtitle}</h4>
                                    )}
                                    <p>{mlopsContentTabs[activeMLOpsTab].content}</p>
                                    {mlopsContentTabs[activeMLOpsTab].points && (
                                        <ul className="mlops-v2-tab-points">
                                            {mlopsContentTabs[activeMLOpsTab].points.map((point, idx) => (
                                                <li key={idx}><Icons.Check size={16} /> {point}</li>
                                            ))}
                                        </ul>
                                    )}
                                    {mlopsContentTabs[activeMLOpsTab].highlights && (
                                        <ul className="mlops-v2-tab-points mlops-v2-highlights">
                                            {mlopsContentTabs[activeMLOpsTab].highlights.map((point, idx) => (
                                                <li key={idx}><Icons.Star size={16} /> {point}</li>
                                            ))}
                                        </ul>
                                    )}
                                    <Link to="/contact" className="mlops-v2-btn-link">Let's talk →</Link>
                                </div>
                            </div>
                        </section>

                        {/* COMPONENT 3: Implementation Process (5-Step Dark Stepper) */}
                        <section id="mlops-process" className="mlops-v2-section mlops-v2-process-section">
                            <h2 className="mlops-v2-section-title-white">MLOps Implementation Process</h2>
                            <div className="mlops-v2-vertical-stepper">
                                {mlopsProcessSteps.map((step, idx) => {
                                    const IconComponent = Icons[step.icon] || Icons.Circle;
                                    return (
                                        <div
                                            key={idx}
                                            className={`mlops-v2-step-item ${activeMLOpsProcessStep === idx ? 'active' : ''}`}
                                            onClick={() => setActiveMLOpsProcessStep(idx)}
                                        >
                                            <div className="mlops-v2-step-indicator">
                                                <div className="mlops-v2-step-icon">
                                                    <IconComponent size={20} />
                                                </div>
                                                {idx < mlopsProcessSteps.length - 1 && <div className="mlops-v2-step-line"></div>}
                                            </div>
                                            <div className="mlops-v2-step-content">
                                                <h4>{step.title}</h4>
                                                <p>{step.desc}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>

                        {/* COMPONENT 4: Business Impact (Big Green Numbers) */}
                        <section id="mlops-impact" className="mlops-v2-section">
                            <h2 className="mlops-v2-section-title">How MLOps Can Impact Your Business</h2>
                            <div className="mlops-v2-impact-list">
                                {mlopsBusinessImpact.map((item, idx) => (
                                    <div key={idx} className="mlops-v2-impact-item">
                                        <div className="mlops-v2-impact-number">{item.number}</div>
                                        <div className="mlops-v2-impact-content">
                                            <h4>{item.title}</h4>
                                            <p>{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* COMPONENT 5: Tech Stack (Categorized Grid) */}
                        <section id="mlops-tech" className="mlops-v2-section mlops-v2-techstack-section">
                            <h2 className="mlops-v2-section-title">Technologies That We Use</h2>
                            <div className="mlops-v2-tech-grid">
                                {mlopsTechStack.map((category, idx) => (
                                    <div key={idx} className="mlops-v2-tech-category">
                                        <h4 className="mlops-v2-tech-category-title">{category.category}</h4>
                                        <div className="mlops-v2-tech-tools">
                                            {category.tools.map((tool, toolIdx) => (
                                                <span key={toolIdx} className="mlops-v2-tech-badge">{tool}</span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* COMPONENT 6: FAQ (Accordion) */}
                        <section id="mlops-faq" className="mlops-v2-section mlops-v2-faq-section">
                            <h2 className="mlops-v2-section-title">All You Need to Know About MLOps</h2>
                            <div className="mlops-v2-accordion">
                                {mlopsFaqs.map((faq, idx) => (
                                    <div key={idx} className={`mlops-v2-accordion-item ${expandedMLOpsFaq === idx ? 'open' : ''}`}>
                                        <button
                                            className="mlops-v2-accordion-trigger"
                                            onClick={() => setExpandedMLOpsFaq(expandedMLOpsFaq === idx ? null : idx)}
                                        >
                                            <span>{faq.q}</span>
                                            <Icons.Plus size={20} />
                                        </button>
                                        <div className="mlops-v2-accordion-content">
                                            <p>{faq.a}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                    </main>
                </div>

                {/* FOOTER CTA */}
                <section className="mlops-v2-footer-cta">
                    <div className="container mlops-v2-footer-inner">
                        <div>
                            <h2>Ready to operationalize your ML?</h2>
                            <p>Our MLOps experts will help you build scalable ML infrastructure.</p>
                        </div>
                        <Link to="/contact" className="mlops-v2-btn-primary">Get Started</Link>
                    </div>
                </section>
            </div>
        );
    }

    // ==========================================
    // AI INTEGRATION SERVICES - ADDEPTO CLONE
    // ==========================================

    // AI Integration State Variables
    const [activeIntegrationTab, setActiveIntegrationTab] = useState(0);
    const [activeIntegrationIndustryTab, setActiveIntegrationIndustryTab] = useState(0);
    const [expandedIntegrationFaq, setExpandedIntegrationFaq] = useState(null);
    const [expandedWhyHire, setExpandedWhyHire] = useState(0);

    // AI Integration Content Switcher Tabs (5 tabs)
    const integrationContentTabs = [
        {
            label: 'Maximizing ROI on AI Investments',
            title: 'Maximizing Return on AI Investments',
            content: 'AI integration services transform organizations by embedding intelligent systems into existing workflows. Automation of routine tasks reduces human error by up to 70% while freeing your team for strategic work.',
            points: ['Reduce operational costs by 40-60%', 'Improve decision accuracy', 'Accelerate time-to-insight', 'Scale operations efficiently'],
        },
        {
            label: 'Specialized AI Knowledge',
            title: 'Specialized AI Knowledge',
            content: 'Our team brings deep expertise across machine learning, natural language processing, computer vision, and predictive analytics.',
            points: ['PhD-level data scientists', 'Industry-specific expertise', 'Proven deployment experience', 'Continuous innovation'],
        },
        {
            label: 'Cutting-edge Tools',
            title: 'Cutting-edge Tools & Frameworks',
            content: 'We leverage the latest AI/ML frameworks and cloud platforms to build robust, scalable solutions.',
            points: ['TensorFlow, PyTorch, JAX', 'Cloud-native architectures', 'MLOps best practices', 'Enterprise-grade security'],
        },
        {
            label: 'Seamless Infrastructure Connection',
            title: 'Seamless Connection with Infrastructure',
            content: 'We specialize in integrating AI with your existing systems, whether legacy or modern, on-premise or cloud.',
            points: ['API-first integration', 'Legacy system compatibility', 'Hybrid cloud deployment', 'Real-time data pipelines'],
        },
        {
            label: 'Business Outcomes Focus',
            title: 'Business Outcomes Over Technological Showcasing',
            content: 'We focus on solving real business problems, not just implementing technology for its own sake.',
            points: ['ROI-driven approach', 'Measurable KPIs', 'Pragmatic solutions', 'Continuous optimization'],
        },
    ];

    // Real-Life AI Solutions (12+ items)
    const realLifeSolutions = [
        { title: 'AI-Powered Quality Control', desc: 'Computer vision systems that detect defects with 99.9% accuracy.' },
        { title: 'Dynamic Pricing Optimization', desc: 'ML models that adjust prices in real-time based on demand and competition.' },
        { title: 'Intelligent Document Processing', desc: 'NLP systems that extract and classify data from unstructured documents.' },
        { title: 'Predictive Maintenance Systems', desc: 'IoT + ML solutions that predict equipment failures before they occur.' },
        { title: 'Employee Performance Analytics', desc: 'AI-driven insights into workforce productivity and engagement.' },
        { title: 'Fraud Detection Networks', desc: 'Real-time transaction monitoring with anomaly detection.' },
        { title: 'Customer Churn Prediction', desc: 'ML models that identify at-risk customers before they leave.' },
        { title: 'Demand Forecasting', desc: 'Time-series models for accurate inventory and resource planning.' },
        { title: 'Recommendation Engines', desc: 'Personalized product and content recommendations at scale.' },
        { title: 'Chatbots & Virtual Assistants', desc: 'NLP-powered conversational AI for customer support.' },
        { title: 'Route Optimization', desc: 'AI algorithms that minimize delivery time and fuel costs.' },
        { title: 'Sentiment Analysis', desc: 'Real-time analysis of customer feedback and social media.' },
    ];

    // Why Hire Us - Text Blocks
    const whyHireBlocks = [
        {
            title: 'How will our technology expertise enhance your business?',
            content: 'Our team combines data engineering mastery with cloud-native development expertise. We build scalable, maintainable AI systems that integrate seamlessly with your existing infrastructure.',
            highlights: ['Data engineering mastery', 'Cloud-native development', 'Scalable architectures'],
        },
        {
            title: 'How does our team integrate AI with legacy systems?',
            content: 'We conduct thorough audits of your existing systems and create adaptive layers that enable modern AI capabilities without costly rewrites.',
            highlights: ['Thorough system audit', 'Adaptive integration layers', 'Zero downtime migration'],
        },
        {
            title: 'How does our product-oriented approach benefit you?',
            content: 'We focus on solving specific business problems with pragmatic AI solutions, not building technology for its own sake.',
            highlights: ['Problem-focused approach', 'Pragmatic selection', 'Measurable outcomes'],
        },
    ];

    // AI Integration Industry Use Cases
    const integrationIndustryTabs = [
        {
            name: 'Manufacturing',
            image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=800&fit=crop',
            title: 'AI Integration in Manufacturing',
            points: ['Predictive Maintenance', 'Quality Control Vision Systems', 'Supply Chain Optimization', 'Production Planning AI'],
        },
        {
            name: 'Financial Services',
            image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=800&fit=crop',
            title: 'AI Integration in Finance',
            points: ['Fraud Detection', 'Automated Risk Assessment', 'Algorithmic Trading', 'Customer Onboarding'],
        },
        {
            name: 'Aviation',
            image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=800&fit=crop',
            title: 'AI Integration in Aviation',
            points: ['Predictive Aircraft Maintenance', 'Flight Operations Optimization', 'Passenger Flow Management', 'Safety Analytics'],
        },
        {
            name: 'Logistics',
            image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=800&fit=crop',
            title: 'AI Integration in Logistics',
            points: ['Route Optimization', 'Warehouse Automation', 'Demand Forecasting', 'Last-mile Delivery'],
        },
        {
            name: 'Retail',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=800&fit=crop',
            title: 'AI Integration in Retail',
            points: ['Personalized Recommendations', 'Inventory Optimization', 'Price Optimization', 'Customer Analytics'],
        },
    ];

    // AI Integration Tech Stack (4 categories)
    const integrationTechStack = [
        { category: 'AI & Machine Learning', tools: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'JAX'] },
        { category: 'MLOps Tools', tools: ['MLflow', 'Kubeflow', 'Apache Airflow', 'DVC'] },
        { category: 'Cloud & Infrastructure', tools: ['AWS SageMaker', 'Azure ML', 'Docker', 'Kubernetes'] },
        { category: 'Data Engineering', tools: ['Apache Spark', 'Databricks', 'Snowflake', 'Kafka'] },
    ];

    // AI Integration Sidebar Navigation
    const integrationSidebarNav = [
        { id: 'integration-benefits', label: 'Business benefits' },
        { id: 'integration-solutions', label: 'Real-life AI Solutions' },
        { id: 'integration-why', label: 'Why choose us' },
        { id: 'integration-industry', label: 'Industry expertise' },
        { id: 'integration-tech', label: 'Technology stack' },
        { id: 'integration-faq', label: 'FAQ' },
    ];

    // AI Integration FAQ Items
    const integrationFaqs = [
        { q: 'What is AI integration?', a: 'AI integration involves embedding artificial intelligence capabilities into existing business systems and workflows to enhance efficiency, decision-making, and automation.' },
        { q: 'How long does AI integration take?', a: 'Timeline varies based on complexity. Simple integrations can take 4-8 weeks, while enterprise-wide transformations may take 6-12 months.' },
        { q: 'What are the prerequisites for AI integration?', a: 'Key prerequisites include clean, accessible data, clear business objectives, executive sponsorship, and a willingness to adapt processes.' },
        { q: 'How do you ensure AI integration success?', a: 'We follow a phased approach with proof of concept, pilot programs, and gradual rollout to minimize risk and maximize adoption.' },
    ];

    if (isAIIntegration) {
        return (
            <div className="aintegration-v2-page">
                {/* HERO SECTION */}
                <section className="aintegration-v2-hero">
                    <div className="container aintegration-v2-hero-inner">
                        <div className="aintegration-v2-breadcrumbs">
                            <Link to="/">Home</Link> <span>»</span> <span>AI Integration Services</span>
                        </div>
                        <h1 className="aintegration-v2-hero-title">AI Integration Services</h1>
                        <p className="aintegration-v2-hero-subtitle">Seamlessly embed AI capabilities into your existing systems to drive efficiency, reduce costs, and unlock new value.</p>
                        <Link to="/contact" className="aintegration-v2-btn-primary">Let's talk</Link>
                    </div>
                </section>

                {/* MAIN CONTENT WITH STICKY SIDEBAR */}
                <div className="aintegration-v2-main-layout container">
                    {/* COMPONENT 1: Sticky Sidebar */}
                    <aside className="aintegration-v2-sidebar">
                        <nav className="aintegration-v2-sidebar-nav">
                            {integrationSidebarNav.map((item) => (
                                <a key={item.id} href={`#${item.id}`} className="aintegration-v2-sidebar-link">{item.label}</a>
                            ))}
                        </nav>
                        <Link to="/contact" className="aintegration-v2-btn-primary aintegration-v2-sidebar-cta">Schedule a call</Link>
                    </aside>

                    {/* RIGHT COLUMN: Scrollable Content */}
                    <main className="aintegration-v2-content">

                        {/* COMPONENT 2: Business Benefits (5-Tab Content Switcher) */}
                        <section id="integration-benefits" className="aintegration-v2-section">
                            <h2 className="aintegration-v2-section-title">Business Benefits of AI Integration</h2>
                            <div className="aintegration-v2-tabs-layout">
                                <div className="aintegration-v2-tabs-list">
                                    {integrationContentTabs.map((tab, idx) => (
                                        <button
                                            key={idx}
                                            className={`aintegration-v2-tab-btn ${activeIntegrationTab === idx ? 'active' : ''}`}
                                            onClick={() => setActiveIntegrationTab(idx)}
                                        >
                                            {tab.label}
                                        </button>
                                    ))}
                                </div>
                                <div className="aintegration-v2-tab-content">
                                    <h3>{integrationContentTabs[activeIntegrationTab].title}</h3>
                                    <p>{integrationContentTabs[activeIntegrationTab].content}</p>
                                    <ul className="aintegration-v2-tab-points">
                                        {integrationContentTabs[activeIntegrationTab].points.map((point, idx) => (
                                            <li key={idx}><Icons.Check size={16} /> {point}</li>
                                        ))}
                                    </ul>
                                    <Link to="/contact" className="aintegration-v2-btn-link">Let's talk →</Link>
                                </div>
                            </div>
                        </section>

                        {/* COMPONENT 3: Real-Life Solutions (2-Column Grid) */}
                        <section id="integration-solutions" className="aintegration-v2-section">
                            <h2 className="aintegration-v2-section-title">Real-Life AI Solutions</h2>
                            <p className="aintegration-v2-section-intro">Here's a brief look at how AI can be applied in real-life:</p>
                            <div className="aintegration-v2-solutions-grid">
                                {realLifeSolutions.map((solution, idx) => (
                                    <div key={idx} className="aintegration-v2-solution-item">
                                        <h4>{solution.title}</h4>
                                        <p>{solution.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* COMPONENT 4: Why Hire Us (Accordion-style Text Blocks) */}
                        <section id="integration-why" className="aintegration-v2-section aintegration-v2-why-section">
                            <h2 className="aintegration-v2-section-title">Why Choose Us for AI Integration?</h2>
                            <div className="aintegration-v2-why-blocks">
                                {whyHireBlocks.map((block, idx) => (
                                    <div
                                        key={idx}
                                        className={`aintegration-v2-why-block ${expandedWhyHire === idx ? 'expanded' : ''}`}
                                        onClick={() => setExpandedWhyHire(expandedWhyHire === idx ? null : idx)}
                                    >
                                        <div className="aintegration-v2-why-header">
                                            <h4>{block.title}</h4>
                                            <Icons.ChevronDown size={20} />
                                        </div>
                                        <div className="aintegration-v2-why-content">
                                            <p>{block.content}</p>
                                            <div className="aintegration-v2-why-highlights">
                                                {block.highlights.map((h, hIdx) => (
                                                    <span key={hIdx} className="aintegration-v2-highlight-tag">{h}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* COMPONENT 5: Industry Use Cases (Tabs) */}
                        <section id="integration-industry" className="aintegration-v2-section">
                            <h2 className="aintegration-v2-section-title">AI Integration in Various Industries</h2>
                            <div className="aintegration-v2-industry-block">
                                <div className="aintegration-v2-industry-image">
                                    <img src={integrationIndustryTabs[activeIntegrationIndustryTab].image} alt={integrationIndustryTabs[activeIntegrationIndustryTab].name} />
                                </div>
                                <div className="aintegration-v2-industry-content">
                                    <h3>{integrationIndustryTabs[activeIntegrationIndustryTab].title}</h3>
                                    <ul className="aintegration-v2-industry-points">
                                        {integrationIndustryTabs[activeIntegrationIndustryTab].points.map((point, idx) => (
                                            <li key={idx}><Icons.Check size={16} className="aintegration-v2-check-icon" /> {point}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="aintegration-v2-industry-tabs">
                                {integrationIndustryTabs.map((tab, idx) => (
                                    <button
                                        key={idx}
                                        className={`aintegration-v2-industry-tab ${activeIntegrationIndustryTab === idx ? 'active' : ''}`}
                                        onClick={() => setActiveIntegrationIndustryTab(idx)}
                                    >
                                        {tab.name}
                                    </button>
                                ))}
                            </div>
                        </section>

                        {/* COMPONENT 6: Tech Stack (Categorized Grid) */}
                        <section id="integration-tech" className="aintegration-v2-section aintegration-v2-techstack-section">
                            <h2 className="aintegration-v2-section-title">Tools and Frameworks for AI Integration</h2>
                            <div className="aintegration-v2-tech-grid">
                                {integrationTechStack.map((category, idx) => (
                                    <div key={idx} className="aintegration-v2-tech-category">
                                        <h4 className="aintegration-v2-tech-category-title">{category.category}</h4>
                                        <div className="aintegration-v2-tech-tools">
                                            {category.tools.map((tool, toolIdx) => (
                                                <span key={toolIdx} className="aintegration-v2-tech-badge">{tool}</span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* FAQ (Accordion) */}
                        <section id="integration-faq" className="aintegration-v2-section aintegration-v2-faq-section">
                            <h2 className="aintegration-v2-section-title">FAQ</h2>
                            <div className="aintegration-v2-accordion">
                                {integrationFaqs.map((faq, idx) => (
                                    <div key={idx} className={`aintegration-v2-accordion-item ${expandedIntegrationFaq === idx ? 'open' : ''}`}>
                                        <button
                                            className="aintegration-v2-accordion-trigger"
                                            onClick={() => setExpandedIntegrationFaq(expandedIntegrationFaq === idx ? null : idx)}
                                        >
                                            <span>{faq.q}</span>
                                            <Icons.Plus size={20} />
                                        </button>
                                        <div className="aintegration-v2-accordion-content">
                                            <p>{faq.a}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                    </main>
                </div>

                {/* FOOTER CTA */}
                <section className="aintegration-v2-footer-cta">
                    <div className="container aintegration-v2-footer-inner">
                        <div>
                            <h2>Ready to integrate AI into your business?</h2>
                            <p>Our experts will help you embed AI seamlessly.</p>
                        </div>
                        <Link to="/contact" className="aintegration-v2-btn-primary">Get Started</Link>
                    </div>
                </section>
            </div>
        );
    }

    return (
        <div className="service-detail-page">
            {/* Hero Section */}
            {isEnhancedService ? (
                <section className="sd-hero sd-hero-light-grey">
                    <div className="container sd-hero-container-simple">
                        <div className="sd-hero-content-simple">
                            <h4 className="sd-hero-eyebrow">{service.title}</h4>
                            <h1 className="sd-hero-title-simple">{service.heroTitle || service.title}</h1>
                            <p className="sd-hero-subtitle-simple">{service.heroSubtitle || service.description}</p>
                            <Link to="/contact" className="primary-btn sd-cta-btn-green">Estimate your project</Link>
                        </div>
                    </div>
                </section>
            ) : (
                <section className="sd-hero">
                    <div className="container sd-hero-container">
                        <div className="sd-hero-content">
                            <Link to="/services" className="back-link">← Back to Services</Link>
                            <h1 className="sd-hero-title">{service.heroTitle || service.title}</h1>
                            <p className="sd-hero-subtitle">{service.heroSubtitle || service.description}</p>
                            <Link to="/contact" className="primary-btn sd-cta-btn">Let's Talk</Link>
                        </div>
                        <div className="sd-hero-image-placeholder">
                            <span>Live place for image</span>
                        </div>
                    </div>
                </section>
            )}

            {/* Enhanced services: AI Consulting & AI PoC (full page with sticky sidebar) */}
            {isEnhancedService && (
                <div className="generic-service-layout">
                    {/* Sticky Left Sidebar - Visible throughout entire page */}
                    <aside className="generic-sidebar">
                        <ul className="generic-nav-links">
                            {sidebarNav.map(item => (
                                <li key={item.id}>
                                    <a
                                        href={`#${item.id}`}
                                        className={activeSidebarSection === item.id ? 'active' : ''}
                                        onClick={() => setActiveSidebarSection(item.id)}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <Link to="/contact" className="primary-btn generic-sidebar-cta">Schedule a call</Link>
                    </aside>

                    {/* Main Content Area - All sections scroll here */}
                    <main className="generic-main-content">
                        {/* Business Benefits Section */}
                        <section className="sd-content-section" id="business-benefits">
                            <div className="content-section-inner">
                                {/* Middle Column - Section Title + Sub-navigation */}
                                <div className="middle-section-nav">
                                    <h2 className="section-main-title">{service.contentIntroTitle || service.title}</h2>
                                    <ul className="sub-nav-links">
                                        {/* Dynamic Sub-nav based on service content sections */}
                                        {service.contentSections && Object.keys(service.contentSections).map((key) => (
                                            <li key={key}>
                                                <a
                                                    href={`#${key}`}
                                                    className={activeSection === key ? 'active' : ''}
                                                    onClick={(e) => { e.preventDefault(); setActiveSection(key); }}
                                                >
                                                    {service.contentSections[key].navLabel || service.contentSections[key].title}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Right Column - Dynamic Content based on activeSection */}
                                <div className="right-content-area">
                                    {service.contentSections && service.contentSections[activeSection] && (
                                        <>
                                            <h3 className="content-title">{service.contentSections[activeSection].title}</h3>
                                            <p className="content-intro" dangerouslySetInnerHTML={{ __html: service.contentSections[activeSection].intro }}></p>
                                            {service.contentSections[activeSection].description && (
                                                <p className="content-description">{service.contentSections[activeSection].description}</p>
                                            )}
                                            <div className="content-list">
                                                {service.contentSections[activeSection].points.map((point, index) => (
                                                    <div key={index} className="content-list-item">
                                                        <Icons.Check className="content-check-icon" size={20} />
                                                        <div className="content-item-text">
                                                            <strong>{point.title}</strong>
                                                            <p>{point.description}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            {service.contentSections[activeSection].additionalText && (
                                                <p className="content-additional">{service.contentSections[activeSection].additionalText}</p>
                                            )}
                                            <Link to="/contact" className="primary-btn content-cta-btn-green">Let's talk</Link>
                                        </>
                                    )}
                                </div>
                            </div>
                        </section>

                        {/* Development Process - Premium Split Layout (Addepto Style) */}
                        {isEnhancedService && service.developmentTimeline && (
                            <section className="sd-section sd-development-process-dark" id="development-process">
                                <div className="container">
                                    <h2 className="sd-section-title-light">{service.developmentTimeline.title}</h2>
                                    <p className="process-intro-light">{service.developmentTimeline.intro}</p>

                                    {/* Premium Split Layout */}
                                    <div className="process-split-layout">
                                        {/* Left: Compact Icon Navigation */}
                                        <div className="process-nav-column">
                                            {service.developmentTimeline.steps.map((step, index) => {
                                                const IconComponent = Icons[step.icon] || Icons.Circle;
                                                return (
                                                    <button
                                                        key={index}
                                                        className={`process-nav-item ${activeProcessStep === index ? 'active' : ''}`}
                                                        onClick={() => setActiveProcessStep(index)}
                                                    >
                                                        <div className="process-nav-icon">
                                                            <IconComponent size={20} />
                                                        </div>
                                                        <span className="process-nav-label">Step {index + 1}</span>
                                                        {index < service.developmentTimeline.steps.length - 1 && (
                                                            <div className="process-nav-line"></div>
                                                        )}
                                                    </button>
                                                );
                                            })}
                                        </div>

                                        {/* Right: Full Content Area */}
                                        <div className="process-detail-panel">
                                            <div className="process-step-number">0{activeProcessStep + 1}</div>
                                            <h3 className="process-detail-title">{service.developmentTimeline.steps[activeProcessStep].title}</h3>
                                            <p className="process-detail-description">{service.developmentTimeline.steps[activeProcessStep].description}</p>
                                            <div className="process-detail-footer">
                                                <span className="process-progress">Step {activeProcessStep + 1} of {service.developmentTimeline.steps.length}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        )}

                        {/* Methodology */}
                        {isEnhancedService && service.methodology && (
                            <section className="sd-section sd-methodology" id="methodology">
                                <div className="container methodology-shell">
                                    <div className="methodology-header">
                                        <h2 className="sd-section-title">{service.methodology.title}</h2>
                                        <p className="methodology-intro">{service.methodology.intro}</p>
                                    </div>
                                    <div className="methodology-panel">
                                        {service.methodology.steps.map((step, idx) => (
                                            <div key={idx} className="methodology-item">
                                                <div className="methodology-icon">
                                                    <span>{idx + 1}</span>
                                                </div>
                                                <div>
                                                    <h3>{step.title}</h3>
                                                    <p>{step.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        )}

                        {/* Why Work With Us Stats */}
                        {isEnhancedService && service.stats && (
                            <section className="sd-section sd-why-work-with-us" id="why-work-with-us">
                                <div className="container">
                                    <h2 className="sd-section-title">Why work with us</h2>
                                    <div className="stats-grid">
                                        {service.stats.map((stat, index) => (
                                            <div key={index} className="stat-card">
                                                <div className="stat-number">{stat.number}</div>
                                                <div className="stat-label">{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        )}

                        {/* Technology Stack Section (Tabbed) */}
                        {isEnhancedService && service.techStackTabs && (
                            <section className="sd-section sd-technology-stack" id="technology-stack">
                                <div className="container">
                                    <h2 className="sd-section-title">Tools and frameworks</h2>
                                    <p className="sd-section-subtitle">
                                        We choose our toolset to ensure the best possible outcome in terms of cost, speed, and accuracy
                                    </p>
                                    <div className="tech-tabs">
                                        {service.techStackTabs.categories.map((category) => (
                                            <button
                                                key={category}
                                                className={`tech-tab ${activeTechTab === category ? 'active' : ''}`}
                                                onClick={() => setActiveTechTab(category)}
                                            >
                                                {category}
                                            </button>
                                        ))}
                                    </div>
                                    <div className="tech-chips">
                                        {service.techStackTabs.items[activeTechTab]?.map((tech, index) => (
                                            <span key={index} className="tech-chip">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        )}

                        {/* Industry Expertise Section (Tabbed) */}
                        {isEnhancedService && service.industryTabs && (
                            <section className="sd-section sd-industry-expertise" id="industry-expertise">
                                <div className="container">
                                    <h2 className="sd-section-title">{industrySectionTitle}</h2>
                                    <p className="industry-reassurance">Your industry isn't here? That's not a problem! <Link to="/contact" className="industry-cta-link">Let's talk</Link></p>
                                    <div className="industry-tabs">
                                        {service.industryTabs.map((industry) => (
                                            <button
                                                key={industry.id}
                                                className={`industry-tab ${activeIndustryTab === industry.id ? 'active' : ''}`}
                                                onClick={() => setActiveIndustryTab(industry.id)}
                                            >
                                                {industry.name}
                                            </button>
                                        ))}
                                    </div>
                                    <div className="industry-content-panel">
                                        {service.industryTabs.filter(ind => ind.id === activeIndustryTab).map((industry) => (
                                            <div key={industry.id} className="industry-detail">
                                                <div className="industry-text-content">
                                                    <h3 className="industry-headline">{industry.headline}</h3>
                                                    <p className="industry-desc">{industry.description}</p>
                                                    <div className="industry-use-cases">
                                                        {industry.useCases.map((useCase, idx) => (
                                                            <div key={idx} className="use-case-item">
                                                                <h4 className="use-case-title">{useCase.title}</h4>
                                                                <p className="use-case-desc">{useCase.description}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="industry-image-wrapper">
                                                    <img
                                                        src={industry.image || industryImages[industry.id] || '/assets/images/placeholder_industry.png'}
                                                        alt={`${industry.name} Industry`}
                                                        onError={(e) => { e.target.style.display = 'none' }} // Hide if image fails
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        )}

                        {/* Real-world applications cards fallback */}
                        {isEnhancedService && !service.industryTabs && service.applications && (
                            <section className="sd-section sd-industry-expertise" id="industry-expertise">
                                <div className="container">
                                    <h2 className="sd-section-title">{industrySectionTitle}</h2>
                                    <div className="why-invest-grid">
                                        {service.applications.map((app, idx) => (
                                            <div key={idx} className="why-invest-card">
                                                <h3 className="wi-title">{app.title}</h3>
                                                <p className="wi-desc">{app.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        )}

                        {/* Success Stories */}
                        {isEnhancedService && service.successStories && (
                            <section className="sd-section sd-success-stories" id="success-stories">
                                <div className="container">
                                    <h2 className="sd-section-title">AI PoC success stories across industries</h2>
                                    <div className="success-grid">
                                        {service.successStories.map((story, idx) => (
                                            <div key={idx} className="success-card">
                                                <h3>{story.title}</h3>
                                                <p>{story.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        )}

                        {/* Key Benefits Cards */}
                        {service.keyBenefitsDetailed && (
                            <section className="sd-section sd-key-benefits" id="key-benefits">
                                <div className="container">
                                    <h2 className="sd-section-title">Key benefits</h2>
                                    <div className="key-benefits-grid">
                                        {service.keyBenefitsDetailed.map((item, idx) => (
                                            <div key={idx} className="key-benefit-card">
                                                <div className="key-benefit-icon">
                                                    <Icons.Check size={18} />
                                                </div>
                                                <div>
                                                    <h3>{item.title}</h3>
                                                    <p>{item.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        )}

                        {/* Glossary - Expandable Accordion */}
                        {isEnhancedService && service.glossary && (
                            <section className="sd-section sd-glossary" id="glossary">
                                <div className="container">
                                    <h2 className="sd-section-title">Glossary</h2>
                                    <div className="accordion-list">
                                        {service.glossary.map((item, index) => (
                                            <div
                                                key={index}
                                                className={`accordion-item ${expandedGlossaryItem === index ? 'expanded' : ''}`}
                                            >
                                                <button
                                                    className="accordion-trigger"
                                                    onClick={() => setExpandedGlossaryItem(expandedGlossaryItem === index ? null : index)}
                                                >
                                                    <span className="accordion-question">{item.question}</span>
                                                    <span className="accordion-icon">
                                                        {expandedGlossaryItem === index ? (
                                                            <Icons.Minus size={20} />
                                                        ) : (
                                                            <Icons.Plus size={20} />
                                                        )}
                                                    </span>
                                                </button>
                                                <div className="accordion-content">
                                                    {item.type === 'stages' && item.stages ? (
                                                        <>
                                                            <p>{item.answer}</p>
                                                            <div className="ai-stages">
                                                                {item.stages.map((stage) => (
                                                                    <div key={stage.stage} className="ai-stage">
                                                                        <span className="stage-number">Stage {stage.stage}:</span>
                                                                        <span className="stage-title">{stage.title}</span>
                                                                        <span className="stage-desc">— {stage.description}</span>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </>
                                                    ) : (
                                                        <p>{item.answer}</p>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        )}

                        {/* Related Articles */}
                        {isEnhancedService && service.relatedArticles && (
                            <section className="sd-section sd-related-articles" id="related-articles">
                                <div className="container">
                                    <h2 className="sd-section-title">Related articles</h2>
                                    <div className="articles-list">
                                        {service.relatedArticles.map((article, idx) => (
                                            <div key={idx} className="article-item">
                                                <h3>{article.title}</h3>
                                                {article.date && <p className="article-date">{article.date}</p>}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        )}
                    </main>
                </div>
            )}

            {/* Bottom CTA - Outside the wrapper so sidebar doesn't show here */}
            {isEnhancedService && (
                <section className="sd-bottom-cta">
                    <div className="container">
                        <h2>Ready to start your project?</h2>
                        <Link to="/contact" className="primary-btn">Contact Us</Link>
                    </div>
                </section>
            )}

            {/* Non AI/Big Data services content */}
            {!isEnhancedService && (
                <div className="generic-service-layout">
                    <aside className="generic-sidebar">
                        <ul className="generic-nav-links">
                            {[
                                service.deliverables && { id: 'deliverables', label: 'Deliverables' },
                                { id: 'benefits', label: 'Benefits' },
                                service.types && { id: 'types', label: 'Types' },
                                service.process && { id: 'process', label: 'Process' },
                                service.expertise && { id: 'expertise', label: 'Expertise' },
                            ].filter(Boolean).map(item => (
                                <li key={item.id}>
                                    <a href={`#${item.id}`}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                        <Link to="/contact" className="primary-btn generic-sidebar-cta">Schedule a call</Link>
                    </aside>

                    <main className="generic-main-content">
                        {service.deliverables && (
                            <section className="sd-section sd-deliverables" id="deliverables">
                                <div className="container">
                                    <h2 className="sd-section-title">What you get</h2>
                                    <div className="deliverables-grid">
                                        {service.deliverables.map((item, idx) => (
                                            <div key={idx} className="why-invest-card">
                                                <h3 className="wi-title">{item}</h3>
                                                <p className="wi-desc">Outcome tailored to your {service.title.toLowerCase()} engagement.</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        )}

                        {service.whyInvest && (
                            <section className="sd-section sd-why-invest" id="benefits">
                                <div className="container">
                                    <h2 className="sd-section-title">Why do you need {service.title}?</h2>
                                    <div className="why-invest-grid">
                                        {service.whyInvest.map((item, index) => (
                                            <div key={index} className="why-invest-card">
                                                <div className="wi-icon">
                                                    <DynamicIcon name={item.icon} />
                                                </div>
                                                <h3 className="wi-title">{item.title}</h3>
                                                <p className="wi-desc">{item.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        )}

                        {service.types && (
                            <section className="sd-section sd-types" id="types">
                                <div className="container">
                                    <h2 className="sd-section-title">Types of {service.title}</h2>
                                    <div className="types-grid">
                                        {service.types.map((type, index) => (
                                            <div key={index} className="type-card">
                                                <h3 className="type-title">{type.title}</h3>
                                                <p className="type-desc">{type.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        )}

                        {service.process && (
                            <section className={`sd-section sd-process ${service.processSectionClass || ''}`} id="process">
                                <div className="container">
                                    <h2 className="sd-section-title">Implementation Process</h2>
                                    <div className="process-timeline">
                                        {service.process.map((step, index) => (
                                            <div key={index} className="process-step">
                                                <div className="process-marker">{index + 1}</div>
                                                <div className="process-content">
                                                    <h3 className="process-step-title">{step.title}</h3>
                                                    <p className="process-step-desc">{step.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        )}

                        {service.expertise && (
                            <section className="sd-section sd-expertise" id="expertise">
                                <div className="container">
                                    <h2 className="sd-section-title">Our Capabilities</h2>
                                    <div className="expertise-grid">
                                        {service.expertise.map((item, index) => (
                                            <div key={index} className="expertise-card">
                                                <Icons.CheckCircle2 className="expertise-icon" size={20} />
                                                <span className="expertise-text">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        )}

                        <section className="sd-bottom-cta">
                            <div className="container">
                                <h2>Ready to start your project?</h2>
                                <Link to="/contact" className="primary-btn">Contact Us</Link>
                            </div>
                        </section>
                    </main>
                </div>
            )}
        </div>
    );
};

export default ServiceDetail;
