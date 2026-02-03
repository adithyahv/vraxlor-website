import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { USE_CASES } from '../../constants/use-cases-data';
import './UseCaseDetailPage.css';

// Image mapping for use cases
const USE_CASE_IMAGES = {
    'erp-data-migration-foundry': '/assets/images/use-cases/erp_data_migration.png',
    'data-science-platform-consulting': '/assets/images/use-cases/data_science_platform.png',
    'ai-sales-forecasting': '/assets/images/use-cases/ai_sales_forecasting.png',
    'logistic-base-optimization': '/assets/images/use-cases/logistic_optimization.png',
    'production-line-optimization': '/assets/images/use-cases/production_line_oee.png',
    'process-order-optimization': '/assets/images/use-cases/process_optimization.png',
    'digital-twin-production-simulation': '/assets/images/use-cases/digital_twin.png',
    'supply-chain-forecasting': '/assets/images/use-cases/supply_chain_ai.png',
    'retail-sales-forecasting-platform': '/assets/images/use-cases/retail_forecasting.png',
    'quality-assurance-genai': '/assets/images/use-cases/medtech_quality.png',
    'supply-chain-demand-planner': '/assets/images/use-cases/demand_planner.png',
    'automated-nda-review': '/assets/images/use-cases/nda_review_genai.png',
    'data-driven-strategy-workshop': '/assets/images/use-cases/life_sciences_strategy.png',
    'production-continuous-monitoring': '/assets/images/use-cases/pharma_monitoring.png',
    'pharma-production-optimization': '/assets/images/use-cases/pharma_optimization.png',
    'delivery-route-optimization': '/assets/images/use-cases/delivery_route.png',
    'data-platform-selection-advisory': '/assets/images/use-cases/automotive_platform.png',
    'residual-value-forecasting': '/assets/images/use-cases/residual_value.png',
    'dataiku-azure-implementation': '/assets/images/use-cases/dataiku_azure.png',
    'mlops-data-governance': '/assets/images/use-cases/mlops_governance.png',
    'da-platform-architecture': '/assets/images/use-cases/data_mesh.png',
    'immuta-evaluation': '/assets/images/use-cases/immuta_evaluation.jpg',
    'opensource-da-platform': '/assets/images/use-cases/opensource_platform.jpg',
    'forecasting-platform-automotive': '/assets/images/use-cases/automotive_forecasting.jpg',
    'automotive-data-lake': '/assets/images/use-cases/automotive_data_lake.jpg',
    'airlines-platform-onboarding': '/assets/images/use-cases/airlines_onboarding.jpg',
    'aircraft-predictive-maintenance': '/assets/images/use-cases/aircraft_maintenance.jpg',
    'azure-streaming-architecture': '/assets/images/use-cases/azure_streaming.jpg',
    'sales-forecasting-supply-chain': '/assets/images/use-cases/sales-forecasting-supply-chain.jpg',
    'ai-automated-forecasting': '/assets/images/use-cases/ai-automated-forecasting.jpg',
    'aws-evaluation': '/assets/images/use-cases/aws-evaluation.jpg',
    'data-mesh-workshop': '/assets/images/use-cases/data-mesh-workshop.jpg',
    'computer-vision-quality': '/assets/images/use-cases/computer-vision-quality.jpg',
    'genai-chatbot': '/assets/images/use-cases/genai-chatbot.jpg',
    'marketing-mix-modeling': '/assets/images/use-cases/marketing-mix-modeling.jpg',
    'predictive-maintenance': '/assets/images/use-cases/predictive-maintenance.jpg',
    'digital-twin-pharma': '/assets/images/use-cases/digital-twin-pharma.jpg',
    'fraud-detection-fintech': '/assets/images/use-cases/fraud-detection-fintech.jpg',
    'climate-risk-modeling': '/assets/images/use-cases/climate-risk-modeling.jpg',
    'patient-journey-analytics': '/assets/images/use-cases/patient-journey-analytics.jpg',
    'smart-grid-optimization': '/assets/images/use-cases/smart-grid-optimization.jpg',
    'customer-churn-prediction': '/assets/images/use-cases/customer-churn-prediction.jpg',
    'appro-algo-trading': '/assets/images/use-cases/appro-algo-trading.jpg',
    'inventory-optimization': '/assets/images/use-cases/inventory-optimization.jpg',
    'flight-ops-ai': '/assets/images/use-cases/flight-ops-ai.jpg',
    'enterprise-knowledge-retrieval': '/assets/images/use-cases/enterprise-knowledge-retrieval.jpg',
    'radiology-ai': '/assets/images/use-cases/radiology-ai.jpg',
    'autonomous-perception': '/assets/images/use-cases/autonomous-perception.jpg',
    'multimodal-customer-ai': '/assets/images/use-cases/multimodal-customer-ai.jpg',
    'apron-ai-vision': '/assets/images/use-cases/apron-ai-vision.jpg',
    'pharma-sales-effectiveness': '/assets/images/use-cases/pharma-sales-effectiveness.jpg',
    'yield-optimization-emissions': '/assets/images/use-cases/yield-optimization-emissions.jpg',
    'hyper-personalization-engine': '/assets/images/use-cases/hyper-personalization-engine.jpg',
    'automated-kyc-genai': '/assets/images/use-cases/automated-kyc-genai.jpg',
    'claims-vision-estimation': '/assets/images/use-cases/claims-vision-estimation.jpg',
    'dynamic-route-optimization': '/assets/images/use-cases/dynamic-route-optimization.jpg',
    'acoustic-anomaly-detection': '/assets/images/use-cases/acoustic-anomaly-detection.jpg',
    'social-sentiment-analysis': '/assets/images/use-cases/social-sentiment-analysis.jpg',
    'adaptive-traffic-control': '/assets/images/use-cases/adaptive-traffic-control.jpg',
};

// Fallback gradients
const INDUSTRY_GRADIENTS = {
    'Manufacturing': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'Chemicals': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'Luxury Goods': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'Retail': 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'MedTech': 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    'Pharma': 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    'Life Sciences': 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
    'Automotive': 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
    'Aerospace': 'linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)',
    'Media': 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
    'Emergency Services': 'linear-gradient(135deg, #ff0844 0%, #ffb199 100%)'
};

// Industry colors for accents
const INDUSTRY_COLORS = {
    'Manufacturing': { primary: '#667eea', secondary: '#764ba2' },
    'Chemicals': { primary: '#f093fb', secondary: '#f5576c' },
    'Luxury Goods': { primary: '#4facfe', secondary: '#00f2fe' },
    'Retail': { primary: '#43e97b', secondary: '#38f9d7' },
    'MedTech': { primary: '#fa709a', secondary: '#fee140' },
    'Pharma': { primary: '#a8edea', secondary: '#fed6e3' },
    'Life Sciences': { primary: '#d299c2', secondary: '#fef9d7' },
    'Automotive': { primary: '#667eea', secondary: '#764ba2' },
    'Aerospace': { primary: '#5ee7df', secondary: '#b490ca' },
    'Media': { primary: '#f6d365', secondary: '#fda085' },
    'Emergency Services': { primary: '#ff0844', secondary: '#ffb199' }
};

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2000, suffix = '' }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    let start = 0;
                    const increment = end / (duration / 16);
                    const timer = setInterval(() => {
                        start += increment;
                        if (start >= end) {
                            setCount(end);
                            clearInterval(timer);
                        } else {
                            setCount(Math.floor(start));
                        }
                    }, 16);
                }
            },
            { threshold: 0.5 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => observer.disconnect();
    }, [end, duration, hasAnimated]);

    return <span ref={countRef}>{count}{suffix}</span>;
};

const UseCaseDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        window.scrollTo(0, 0);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Find the use case by ID
    const useCase = USE_CASES.find(uc => uc.id === id);
    const currentIndex = USE_CASES.findIndex(uc => uc.id === id);

    // Get related use cases (same industry, different id)
    const relatedCases = USE_CASES.filter(
        uc => uc.industry === useCase?.industry && uc.id !== id
    ).slice(0, 3);

    // Handle case not found
    if (!useCase) {
        return (
            <div className="ucd-page">
                <div className="ucd-not-found">
                    <div className="ucd-not-found-icon">🔍</div>
                    <h1>Use Case Not Found</h1>
                    <p>The use case you&apos;re looking for doesn&apos;t exist.</p>
                    <Link to="/use-cases" className="ucd-btn-primary">
                        ← Back to Use Cases
                    </Link>
                </div>
            </div>
        );
    }

    const industryColor = INDUSTRY_COLORS[useCase.industry] || { primary: '#667eea', secondary: '#764ba2' };

    // Get image or gradient background
    const getHeroBackground = () => {
        const imagePath = USE_CASE_IMAGES[useCase.id];
        if (imagePath) {
            return {
                backgroundImage: `url(${imagePath})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transform: `translateY(${scrollY * 0.3}px)`
            };
        }
        return {
            background: INDUSTRY_GRADIENTS[useCase.industry] || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            transform: `translateY(${scrollY * 0.3}px)`
        };
    };

    // Parse challenge into bullet points
    const challengePoints = useCase.content.challenge.split('. ').filter(s => s.trim().length > 0);

    // Parse solution into bullet points  
    const solutionPoints = useCase.content.solution.split('. ').filter(s => s.trim().length > 0);

    return (
        <div className="ucd-page">
            {/* Floating Navigation */}
            <div className="ucd-floating-nav">
                <button onClick={() => navigate('/use-cases')} className="ucd-back-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                    <span>All Use Cases</span>
                </button>
                <div className="ucd-nav-pagination">
                    {currentIndex > 0 && (
                        <Link to={`/use-cases/${USE_CASES[currentIndex - 1].id}`} className="ucd-nav-arrow">
                            ← Previous
                        </Link>
                    )}
                    {currentIndex < USE_CASES.length - 1 && (
                        <Link to={`/use-cases/${USE_CASES[currentIndex + 1].id}`} className="ucd-nav-arrow">
                            Next →
                        </Link>
                    )}
                </div>
            </div>

            {/* Hero Section with Parallax */}
            <section className="ucd-hero">
                <div className="ucd-hero-bg" style={getHeroBackground()}></div>
                <div className="ucd-hero-overlay"></div>
                <div className="ucd-hero-content">
                    <div className="ucd-hero-badges">
                        <span className="ucd-badge-industry" style={{ background: industryColor.primary }}>
                            {useCase.industry}
                        </span>
                    </div>

                    <h1 className="ucd-hero-title">{useCase.title}</h1>

                    <p className="ucd-hero-subtitle">{useCase.excerpt}</p>

                    <div className="ucd-hero-tags">
                        {useCase.tags.map((tag, index) => (
                            <span key={index} className="ucd-tag">{tag}</span>
                        ))}
                    </div>

                    <div className="ucd-scroll-indicator">
                        <span>Scroll to explore</span>
                        <div className="ucd-scroll-arrow">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 5v14M19 12l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Stats Section */}
            <section className="ucd-stats-section">
                <div className="ucd-container">
                    <div className="ucd-stats-grid">
                        <div className="ucd-stat-card">
                            <div className="ucd-stat-icon" style={{ background: `linear-gradient(135deg, ${industryColor.primary}, ${industryColor.secondary})` }}>
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                </svg>
                            </div>
                            <div className="ucd-stat-content">
                                <span className="ucd-stat-number"><AnimatedCounter end={challengePoints.length} /></span>
                                <span className="ucd-stat-label">Challenges Addressed</span>
                            </div>
                        </div>

                        <div className="ucd-stat-card">
                            <div className="ucd-stat-icon" style={{ background: `linear-gradient(135deg, ${industryColor.primary}, ${industryColor.secondary})` }}>
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <div className="ucd-stat-content">
                                <span className="ucd-stat-number"><AnimatedCounter end={solutionPoints.length} /></span>
                                <span className="ucd-stat-label">Solutions Delivered</span>
                            </div>
                        </div>

                        <div className="ucd-stat-card">
                            <div className="ucd-stat-icon" style={{ background: `linear-gradient(135deg, ${industryColor.primary}, ${industryColor.secondary})` }}>
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <div className="ucd-stat-content">
                                <span className="ucd-stat-number"><AnimatedCounter end={useCase.content.impact.length} /></span>
                                <span className="ucd-stat-label">Key Business Impacts</span>
                            </div>
                        </div>

                        <div className="ucd-stat-card">
                            <div className="ucd-stat-icon" style={{ background: `linear-gradient(135deg, ${industryColor.primary}, ${industryColor.secondary})` }}>
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                                    <path d="M8 21h8M12 17v4" />
                                </svg>
                            </div>
                            <div className="ucd-stat-content">
                                <span className="ucd-stat-number"><AnimatedCounter end={useCase.content.technologies.length} /></span>
                                <span className="ucd-stat-label">Technologies Used</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Challenge Section */}
            <section className="ucd-section ucd-challenge-section">
                <div className="ucd-container">
                    <div className="ucd-section-header">
                        <div className="ucd-section-icon challenge" style={{ borderColor: industryColor.primary }}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={industryColor.primary} strokeWidth="2">
                                <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01" />
                            </svg>
                        </div>
                        <div>
                            <span className="ucd-section-label" style={{ color: industryColor.primary }}>Understanding the Problem</span>
                            <h2 className="ucd-section-title">The Challenge</h2>
                        </div>
                    </div>

                    <div className="ucd-cards-grid">
                        {challengePoints.map((point, index) => (
                            <div key={index} className="ucd-card challenge-card" style={{ '--accent-color': industryColor.primary }}>
                                <div className="ucd-card-number" style={{ background: industryColor.primary }}>{index + 1}</div>
                                <p className="ucd-card-text">{point.trim()}.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Solution Section */}
            <section className="ucd-section ucd-solution-section">
                <div className="ucd-container">
                    <div className="ucd-section-header">
                        <div className="ucd-section-icon solution" style={{ borderColor: '#10b981' }}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2">
                                <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                        </div>
                        <div>
                            <span className="ucd-section-label" style={{ color: '#10b981' }}>Our Approach</span>
                            <h2 className="ucd-section-title">The Solution</h2>
                        </div>
                    </div>

                    <div className="ucd-timeline">
                        {solutionPoints.map((point, index) => (
                            <div key={index} className="ucd-timeline-item">
                                <div className="ucd-timeline-marker">
                                    <div className="ucd-timeline-dot"></div>
                                    {index < solutionPoints.length - 1 && <div className="ucd-timeline-line"></div>}
                                </div>
                                <div className="ucd-timeline-content">
                                    <span className="ucd-timeline-step">Step {index + 1}</span>
                                    <p className="ucd-timeline-text">{point.trim()}.</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact Section */}
            <section className="ucd-section ucd-impact-section">
                <div className="ucd-container">
                    <div className="ucd-section-header center">
                        <div className="ucd-section-icon impact" style={{ borderColor: '#f59e0b' }}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2">
                                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <div>
                            <span className="ucd-section-label" style={{ color: '#f59e0b' }}>Measurable Results</span>
                            <h2 className="ucd-section-title">Business Impact</h2>
                        </div>
                    </div>

                    <div className="ucd-impact-grid">
                        {useCase.content.impact.map((item, index) => (
                            <div key={index} className="ucd-impact-card">
                                <div className="ucd-impact-check">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                                        <path d="M22 4L12 14.01l-3-3" />
                                    </svg>
                                </div>
                                <p className="ucd-impact-text">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies Section */}
            <section className="ucd-section ucd-tech-section">
                <div className="ucd-container">
                    <div className="ucd-section-header center">
                        <div className="ucd-section-icon tech" style={{ borderColor: '#8b5cf6' }}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2">
                                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                                <path d="M8 21h8M12 17v4" />
                            </svg>
                        </div>
                        <div>
                            <span className="ucd-section-label" style={{ color: '#8b5cf6' }}>Tech Stack</span>
                            <h2 className="ucd-section-title">Technologies & Tools</h2>
                        </div>
                    </div>

                    <div className="ucd-tech-grid">
                        {useCase.content.technologies.map((tech, index) => (
                            <div key={index} className="ucd-tech-badge" style={{ '--delay': `${index * 0.1}s` }}>
                                <span className="ucd-tech-icon">⚡</span>
                                <span className="ucd-tech-name">{tech}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Related Use Cases */}
            {relatedCases.length > 0 && (
                <section className="ucd-section ucd-related-section">
                    <div className="ucd-container">
                        <div className="ucd-section-header center">
                            <h2 className="ucd-section-title">Related Use Cases in {useCase.industry}</h2>
                        </div>

                        <div className="ucd-related-grid">
                            {relatedCases.map((related) => (
                                <Link key={related.id} to={`/use-cases/${related.id}`} className="ucd-related-card">
                                    <div
                                        className="ucd-related-image"
                                        style={USE_CASE_IMAGES[related.id]
                                            ? { backgroundImage: `url(${USE_CASE_IMAGES[related.id]})` }
                                            : { background: INDUSTRY_GRADIENTS[related.industry] }
                                        }
                                    ></div>
                                    <div className="ucd-related-content">
                                        <h3>{related.title}</h3>
                                        <span className="ucd-related-arrow">View Case →</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="ucd-cta-section">
                <div className="ucd-container">
                    <div className="ucd-cta-content">
                        <span className="ucd-cta-label">Ready to Transform?</span>
                        <h2>Have a Similar Challenge?</h2>
                        <p>Let&apos;s discuss how AI and data solutions can drive your success.</p>
                        <div className="ucd-cta-buttons">
                            <Link to="/contact" className="ucd-btn-primary">
                                Get in Touch
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                            <Link to="/use-cases" className="ucd-btn-secondary">
                                Explore More Use Cases
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default UseCaseDetailPage;
