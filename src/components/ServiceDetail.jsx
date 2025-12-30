import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import './ServiceDetail.css';

const DynamicIcon = ({ name }) => {
    const IconComponent = Icons[name];
    return IconComponent ? <IconComponent size={24} /> : <Icons.Check size={24} />;
};

const ServiceDetail = ({ service }) => {
    const [activeSection, setActiveSection] = useState('ai-consulting-services');
    const [activeTechTab, setActiveTechTab] = useState('ML Development Tools');
    const [activeIndustryTab, setActiveIndustryTab] = useState('aviation');

    // Map industry IDs to local image paths (will need to move generated images to public folder)
    const industryImages = {
        'aviation': '/assets/images/industries/industry_aviation_real.png',
        'healthcare': '/assets/images/industries/industry_healthcare_real.png',
        'manufacturing': '/assets/images/industries/industry_manufacturing_real.png',
        'retail-ecommerce': '/assets/images/industries/industry_retail_real.png',
        'legal': '/assets/images/industries/industry_legal_real.png',
        'private-investments': '/assets/images/industries/industry_finance_real.png'
    };
    const [activeSidebarSection, setActiveSidebarSection] = useState('business-benefits');
    const [expandedGlossaryItem, setExpandedGlossaryItem] = useState(null);
    const [activeProcessStep, setActiveProcessStep] = useState(0);

    // Scroll spy - automatically highlight sidebar based on scroll position
    useEffect(() => {
        if (service?.id !== 'ai-consulting') return;

        const sectionIds = [
            'business-benefits',
            'development-process',
            'key-benefits',
            'technology-stack',
            'industry-expertise',
            'glossary'
        ];

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
    }, [service?.id]);

    if (!service) return <div className="loading">Loading...</div>;

    return (
        <div className="service-detail-page">
            {/* Hero Section */}
            {service.id === 'ai-consulting' ? (
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

            {/* AI Consulting: Full Page Layout with Sticky Sidebar */}
            {service.id === 'ai-consulting' && (
                <div className="ai-consulting-page-wrapper">
                    {/* Sticky Left Sidebar - Visible throughout entire page */}
                    <aside className="global-sidebar-nav">
                        <ul className="sidebar-nav-links">
                            <li><a href="#business-benefits" className={activeSidebarSection === 'business-benefits' ? 'active' : ''}>Business benefits</a></li>
                            <li><a href="#development-process" className={activeSidebarSection === 'development-process' ? 'active' : ''}>Development process</a></li>
                            <li><a href="#key-benefits" className={activeSidebarSection === 'key-benefits' ? 'active' : ''}>Key benefits</a></li>
                            <li><a href="#technology-stack" className={activeSidebarSection === 'technology-stack' ? 'active' : ''}>Technology stack</a></li>
                            <li><a href="#industry-expertise" className={activeSidebarSection === 'industry-expertise' ? 'active' : ''}>Industry expertise</a></li>
                            <li><a href="#glossary" className={activeSidebarSection === 'glossary' ? 'active' : ''}>Glossary</a></li>
                        </ul>
                        <Link to="/contact" className="primary-btn sidebar-cta-btn">Schedule a call</Link>
                    </aside>

                    {/* Main Content Area - All sections scroll here */}
                    <main className="main-content-area">
                        {/* Business Benefits Section */}
                        <section className="sd-content-section" id="business-benefits">
                            <div className="content-section-inner">
                                {/* Middle Column - Section Title + Sub-navigation */}
                                <div className="middle-section-nav">
                                    <h2 className="section-main-title">Artificial Intelligence – consulting in the field of AI solutions</h2>
                                    <ul className="sub-nav-links">
                                        <li>
                                            <a
                                                href="#ai-consulting-services"
                                                className={activeSection === 'ai-consulting-services' ? 'active' : ''}
                                                onClick={(e) => { e.preventDefault(); setActiveSection('ai-consulting-services'); }}
                                            >
                                                AI Consulting Services
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#ai-strategy"
                                                className={activeSection === 'ai-strategy' ? 'active' : ''}
                                                onClick={(e) => { e.preventDefault(); setActiveSection('ai-strategy'); }}
                                            >
                                                AI Strategy Consulting
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#ai-technologies"
                                                className={activeSection === 'ai-technologies' ? 'active' : ''}
                                                onClick={(e) => { e.preventDefault(); setActiveSection('ai-technologies'); }}
                                            >
                                                AI Technologies Consulting
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#ai-benefits"
                                                className={activeSection === 'ai-benefits' ? 'active' : ''}
                                                onClick={(e) => { e.preventDefault(); setActiveSection('ai-benefits'); }}
                                            >
                                                AI Benefits
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#our-team"
                                                className={activeSection === 'our-team' ? 'active' : ''}
                                                onClick={(e) => { e.preventDefault(); setActiveSection('our-team'); }}
                                            >
                                                Our team
                                            </a>
                                        </li>
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
                        {service.id === 'ai-consulting' && service.developmentTimeline && (
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

                        {/* AI Consulting - Why Work With Us Stats */}
                        {service.id === 'ai-consulting' && service.stats && (
                            <section className="sd-section sd-why-work-with-us" id="key-benefits">
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

                        {/* AI Consulting - Technology Stack Section (Tabbed) */}
                        {service.id === 'ai-consulting' && service.techStackTabs && (
                            <section className="sd-section sd-technology-stack" id="technology-stack">
                                <div className="container">
                                    <h2 className="sd-section-title">Tools and frameworks for AI solutions</h2>
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

                        {/* AI Consulting - Industry Expertise Section (Tabbed) */}
                        {service.id === 'ai-consulting' && service.industryTabs && (
                            <section className="sd-section sd-industry-expertise" id="industry-expertise">
                                <div className="container">
                                    <h2 className="sd-section-title">Industry expertise</h2>
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
                                                        src={industryImages[industry.id] || '/assets/images/placeholder_industry.png'}
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

                        {/* Glossary - Expandable Accordion */}
                        {service.id === 'ai-consulting' && service.glossary && (
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

                        {/* Standard Benefits Grid (for other services) */}
                        {service.id !== 'ai-consulting' && service.whyInvest && (
                            <section className="sd-section sd-why-invest">
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

                        {/* Types/Capabilities Section (New) */}
                        {service.types && (
                            <section className="sd-section sd-types">
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

                        {/* Process Section */}
                        {service.process && (
                            <section className={`sd-section sd-process ${service.processSectionClass || ''}`}>
                                <div className="container">
                                    <h2 className="sd-section-title">{service.title === 'AI Consulting' ? 'AI as a Service' : 'Implementation Process'}</h2>
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

                        {/* Expertise/Capabilities Section */}
                        {service.expertise && (
                            <section className="sd-section sd-expertise">
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
                    </main>
                </div>
            )}

            {/* Bottom CTA - Outside the wrapper so sidebar doesn't show here */}
            {service.id === 'ai-consulting' && (
                <section className="sd-bottom-cta">
                    <div className="container">
                        <h2>Ready to start your project?</h2>
                        <Link to="/contact" className="primary-btn">Contact Us</Link>
                    </div>
                </section>
            )}

            {/* Non AI-Consulting services content */}
            {service.id !== 'ai-consulting' && (
                <>
                    {/* Standard Benefits Grid */}
                    {service.whyInvest && (
                        <section className="sd-section sd-why-invest">
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

                    {/* Types Section */}
                    {service.types && (
                        <section className="sd-section sd-types">
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

                    {/* Process Section */}
                    {service.process && (
                        <section className={`sd-section sd-process ${service.processSectionClass || ''}`}>
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

                    {/* Expertise Section */}
                    {service.expertise && (
                        <section className="sd-section sd-expertise">
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

                    {/* Bottom CTA */}
                    <section className="sd-bottom-cta">
                        <div className="container">
                            <h2>Ready to start your project?</h2>
                            <Link to="/contact" className="primary-btn">Contact Us</Link>
                        </div>
                    </section>
                </>
            )}
        </div>
    );
};

export default ServiceDetail;
