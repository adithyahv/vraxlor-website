import { useState, useEffect, useRef } from 'react';
import BusinessBenefits from '../components/generative-ai/BusinessBenefits';
import IndustryExpertise from '../components/generative-ai/IndustryExpertise';
import TestimonialsSection from '../components/generative-ai/TestimonialsSection';
import FAQAccordion from '../components/generative-ai/FAQAccordion';
import KeyBenefits from '../components/generative-ai/KeyBenefits';
import './GenerativeAIPage.css';

const SIDEBAR_ITEMS = [
    { id: 'benefits', label: 'Generative AI Benefits' },
    { id: 'process', label: 'Development process' },
    { id: 'technology', label: 'Technology' },
    { id: 'industry', label: 'Industry expertise' },
    { id: 'key-benefits', label: 'Key benefits' },
    { id: 'faq', label: 'FAQ' },
];

const GenerativeAIPage = () => {
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
        <div className="genai-page">
            {/* Hero Section */}
            <section className="genai-hero">
                <div className="genai-hero-content">
                    <h1>Generative AI Development Company</h1>
                    <p className="genai-hero-subtitle">
                        Our team of experts specializes in cutting-edge generative AI development
                        services tailored to meet your unique business needs.
                    </p>
                    <button className="genai-cta-btn">Schedule a call</button>
                </div>
            </section>

            {/* Main Layout: Sidebar + Content */}
            <div className="genai-main-layout">
                {/* Sticky Sidebar */}
                <aside className="genai-sidebar">
                    <nav className="genai-sidebar-nav">
                        {SIDEBAR_ITEMS.map((item) => (
                            <button
                                key={item.id}
                                className={`genai-sidebar-item ${activeSection === item.id ? 'active' : ''}`}
                                onClick={() => scrollToSection(item.id)}
                            >
                                {item.label}
                            </button>
                        ))}
                    </nav>
                    <button className="genai-sidebar-cta">Schedule a call</button>
                </aside>

                {/* Content Area */}
                <main className="genai-content">
                    {/* Business Benefits Section */}
                    <section
                        id="benefits"
                        ref={(el) => (sectionRefs.current['benefits'] = el)}
                        className="genai-section"
                    >
                        <BusinessBenefits />
                    </section>

                    {/* Development Process Section */}
                    <section
                        id="process"
                        ref={(el) => (sectionRefs.current['process'] = el)}
                        className="genai-section genai-section-dark"
                    >
                        <div className="genai-section-header">
                            <h2>How We Develop Custom Generative AI Solutions</h2>
                            <p>We follow a proven, outcome-driven process to turn Gen AI into real business value.</p>
                        </div>
                        <div className="genai-process-steps">
                            {[
                                { step: '01', title: 'Discover business value', desc: 'Identify high-impact use cases aligned with your strategic goals.' },
                                { step: '02', title: 'Design your solution blueprint', desc: 'Create architecture and technical specifications tailored to your needs.' },
                                { step: '03', title: 'Prepare and organize your data', desc: 'Structure and clean data to ensure optimal AI model performance.' },
                                { step: '04', title: 'Customize and align models', desc: 'Fine-tune AI models to match your domain and business requirements.' },
                                { step: '05', title: 'Develop & integrate seamlessly', desc: 'Build production-ready solutions that integrate with your existing systems.' },
                                { step: '06', title: 'Test, validate & build trust', desc: 'Rigorous testing to ensure accuracy, reliability, and user confidence.' },
                                { step: '07', title: 'Deploy, monitor & improve', desc: 'Launch with continuous monitoring and iterative improvements.' },
                            ].map((item) => (
                                <div key={item.step} className="genai-process-step">
                                    <span className="genai-step-number">{item.step}</span>
                                    <div className="genai-step-content">
                                        <h3>{item.title}</h3>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Technology Section */}
                    <section
                        id="technology"
                        ref={(el) => (sectionRefs.current['technology'] = el)}
                        className="genai-section"
                    >
                        <div className="genai-section-header">
                            <h2>Generative AI Solutions: Frameworks & Tools</h2>
                            <p>We leverage industry-leading technologies to build robust AI solutions.</p>
                        </div>
                        <div className="genai-tech-grid">
                            {[
                                { name: 'OpenAI GPT-4', category: 'LLM' },
                                { name: 'Claude', category: 'LLM' },
                                { name: 'LangChain', category: 'Framework' },
                                { name: 'LlamaIndex', category: 'Framework' },
                                { name: 'Pinecone', category: 'Vector DB' },
                                { name: 'Weaviate', category: 'Vector DB' },
                                { name: 'Hugging Face', category: 'Models' },
                                { name: 'AWS Bedrock', category: 'Cloud' },
                                { name: 'Azure OpenAI', category: 'Cloud' },
                                { name: 'Google Vertex AI', category: 'Cloud' },
                            ].map((tech) => (
                                <div key={tech.name} className="genai-tech-card">
                                    <span className="genai-tech-category">{tech.category}</span>
                                    <span className="genai-tech-name">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Industry Expertise Section */}
                    <section
                        id="industry"
                        ref={(el) => (sectionRefs.current['industry'] = el)}
                        className="genai-section"
                    >
                        <IndustryExpertise />
                    </section>

                    {/* Key Benefits Section */}
                    <section
                        id="key-benefits"
                        ref={(el) => (sectionRefs.current['key-benefits'] = el)}
                        className="genai-section genai-section-light"
                    >
                        <KeyBenefits />
                    </section>

                    {/* Testimonials */}
                    <section className="genai-section">
                        <TestimonialsSection />
                    </section>

                    {/* FAQ Section */}
                    <section
                        id="faq"
                        ref={(el) => (sectionRefs.current['faq'] = el)}
                        className="genai-section"
                    >
                        <FAQAccordion />
                    </section>

                    {/* Final CTA */}
                    <section className="genai-final-cta">
                        <h2>Let's discuss a solution for you</h2>
                        <p>Ready to transform your business with Generative AI? Get in touch with our experts.</p>
                        <button className="genai-cta-btn">Schedule a call</button>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default GenerativeAIPage;
