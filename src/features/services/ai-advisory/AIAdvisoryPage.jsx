import { useState, useEffect, useRef } from 'react';
import AdvisoryBenefits from './components/AdvisoryBenefits';
import ProcessStepper from './components/ProcessStepper';
import AdvisoryIndustries from './components/AdvisoryIndustries';
import ProblemSolution from './components/ProblemSolution';
import './AIAdvisoryPage.css';

const SIDEBAR_ITEMS = [
    { id: 'benefits', label: 'Business benefits' },
    { id: 'process', label: 'Development process' },
    { id: 'industry', label: 'Industry expertise' },
    { id: 'technology', label: 'Technology stack' },
    { id: 'key-benefits', label: 'Key benefits' },
];

const AIAdvisoryPage = () => {
    const [activeSection, setActiveSection] = useState('benefits');
    const sectionRefs = useRef({});

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200;

            for (const item of SIDEBAR_ITEMS) {
                const element = sectionRefs.current[item.id];
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(item.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = sectionRefs.current[id];
        if (element) {
            const offset = 100;
            const top = element.offsetTop - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };

    return (
        <div className="advisory-page">
            {/* Hero Section */}
            <section className="advisory-hero">
                <div className="advisory-hero-content">
                    <span className="advisory-hero-badge">AI Advisory Services</span>
                    <h1>Transform Your Business with AI Advisory</h1>
                    <p className="advisory-hero-subtitle">
                        Strategic guidance to identify AI opportunities, assess readiness, and build
                        a roadmap for successful AI implementation in your organization.
                    </p>
                    <button className="advisory-cta-btn">Schedule a call</button>
                </div>
            </section>

            {/* Main Layout: Sidebar + Content */}
            <div className="advisory-main-layout">
                {/* Sticky Sidebar */}
                <aside className="advisory-sidebar">
                    <nav className="advisory-sidebar-nav">
                        {SIDEBAR_ITEMS.map((item) => (
                            <button
                                key={item.id}
                                className={`advisory-sidebar-item ${activeSection === item.id ? 'active' : ''}`}
                                onClick={() => scrollToSection(item.id)}
                            >
                                {item.label}
                            </button>
                        ))}
                    </nav>
                    <button className="advisory-sidebar-cta">Schedule a call</button>
                </aside>

                {/* Content Area */}
                <main className="advisory-content">
                    {/* Business Benefits Section */}
                    <section
                        id="benefits"
                        ref={(el) => (sectionRefs.current['benefits'] = el)}
                        className="advisory-section"
                    >
                        <AdvisoryBenefits />
                    </section>

                    {/* Development Process Section */}
                    <section
                        id="process"
                        ref={(el) => (sectionRefs.current['process'] = el)}
                        className="advisory-section advisory-section-light"
                    >
                        <ProcessStepper />
                    </section>

                    {/* Industry Expertise Section */}
                    <section
                        id="industry"
                        ref={(el) => (sectionRefs.current['industry'] = el)}
                        className="advisory-section"
                    >
                        <AdvisoryIndustries />
                    </section>

                    {/* Technology Stack Section */}
                    <section
                        id="technology"
                        ref={(el) => (sectionRefs.current['technology'] = el)}
                        className="advisory-section advisory-section-dark"
                    >
                        <div className="advisory-section-header">
                            <h2>Technology Stack</h2>
                            <p>We leverage industry-leading AI and ML frameworks to deliver robust solutions.</p>
                        </div>
                        <div className="advisory-tech-grid">
                            {[
                                { name: 'TensorFlow', category: 'ML Framework' },
                                { name: 'PyTorch', category: 'ML Framework' },
                                { name: 'Scikit-learn', category: 'ML Library' },
                                { name: 'OpenAI', category: 'LLM Provider' },
                                { name: 'LangChain', category: 'LLM Framework' },
                                { name: 'Hugging Face', category: 'Model Hub' },
                                { name: 'AWS SageMaker', category: 'Cloud ML' },
                                { name: 'Azure ML', category: 'Cloud ML' },
                                { name: 'Google Vertex AI', category: 'Cloud ML' },
                                { name: 'MLflow', category: 'MLOps' },
                            ].map((tech) => (
                                <div key={tech.name} className="advisory-tech-card">
                                    <span className="advisory-tech-category">{tech.category}</span>
                                    <span className="advisory-tech-name">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Key Benefits Section */}
                    <section
                        id="key-benefits"
                        ref={(el) => (sectionRefs.current['key-benefits'] = el)}
                        className="advisory-section"
                    >
                        <ProblemSolution />
                    </section>

                    {/* Final CTA */}
                    <section className="advisory-final-cta">
                        <h2>Ready to Start Your AI Journey?</h2>
                        <p>Let our experts guide you through AI strategy, implementation, and optimization.</p>
                        <button className="advisory-cta-btn">Schedule a call</button>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default AIAdvisoryPage;
