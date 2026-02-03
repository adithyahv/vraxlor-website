import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { USE_CASES, USE_CASE_CATEGORIES } from '../constants/use-cases-data';
import './UseCasesPage.css';

const ITEMS_PER_PAGE = 9;

// Image mapping for use cases (maps use case id to image filename)
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

// Fallback gradients for use cases without generated images
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

const UseCasesPage = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);

    // Filter use cases based on selected category
    const filteredUseCases = useMemo(() => {
        if (activeCategory === 'all') {
            return USE_CASES;
        }
        return USE_CASES.filter(
            (useCase) => useCase.industry.toLowerCase().replace(/\s+/g, '-') === activeCategory
        );
    }, [activeCategory]);

    // Pagination
    const totalPages = Math.ceil(filteredUseCases.length / ITEMS_PER_PAGE);
    const paginatedUseCases = useMemo(() => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        return filteredUseCases.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    }, [filteredUseCases, currentPage]);

    // Reset to page 1 when category changes
    const handleCategoryChange = (categoryId) => {
        setActiveCategory(categoryId);
        setCurrentPage(1);
    };

    // Get image or fallback gradient for the card
    const getCardBackground = (useCase) => {
        const imagePath = USE_CASE_IMAGES[useCase.id];
        if (imagePath) {
            return {
                backgroundImage: `url(${imagePath})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            };
        }
        return {
            background: INDUSTRY_GRADIENTS[useCase.industry] || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        };
    };

    // Check if use case has a real image
    const hasImage = (useCaseId) => Boolean(USE_CASE_IMAGES[useCaseId]);

    return (
        <div className="use-cases-page">
            {/* Hero Section */}
            <section className="use-cases-hero">
                <div className="use-cases-hero-content">
                    <span className="use-cases-label">Explore Our Work</span>
                    <h1>Use Cases</h1>
                    <p>
                        Discover how we help enterprises across industries transform their operations
                        with AI, machine learning, and data-driven solutions.
                    </p>
                </div>
            </section>

            {/* Filter Bar */}
            <section className="use-cases-filter-section">
                <div className="use-cases-container">
                    <div className="use-cases-filter-bar">
                        {USE_CASE_CATEGORIES.map((category) => (
                            <button
                                key={category.id}
                                className={`filter-pill ${activeCategory === category.id ? 'active' : ''}`}
                                onClick={() => handleCategoryChange(category.id)}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>
                    <p className="results-count">
                        Showing {paginatedUseCases.length} of {filteredUseCases.length} use cases
                    </p>
                </div>
            </section>

            {/* Cards Grid */}
            <section className="use-cases-grid-section">
                <div className="use-cases-container">
                    <div className="use-cases-grid">
                        {paginatedUseCases.map((useCase) => (
                            <article key={useCase.id} className="use-case-card">
                                {/* Image Container */}
                                <div
                                    className={`use-case-card-image ${hasImage(useCase.id) ? 'has-image' : ''}`}
                                    style={getCardBackground(useCase)}
                                >
                                    {!hasImage(useCase.id) && (
                                        <span className="use-case-card-icon">
                                            {useCase.industry === 'Manufacturing' ? '🏭' :
                                                useCase.industry === 'Chemicals' ? '⚗️' :
                                                    useCase.industry === 'Luxury Goods' ? '⌚' :
                                                        useCase.industry === 'Retail' ? '🛒' :
                                                            useCase.industry === 'MedTech' ? '🏥' :
                                                                useCase.industry === 'Pharma' ? '💊' :
                                                                    useCase.industry === 'Life Sciences' ? '🧬' :
                                                                        useCase.industry === 'Automotive' ? '🚗' :
                                                                            useCase.industry === 'Aerospace' ? '✈️' :
                                                                                useCase.industry === 'Media' ? '📰' :
                                                                                    useCase.industry === 'Emergency Services' ? '🚁' : '💡'}
                                        </span>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="use-case-card-content">
                                    <div className="use-case-card-meta">
                                        <span className="use-case-category">{useCase.industry}</span>
                                    </div>

                                    <h2 className="use-case-card-title">{useCase.title}</h2>

                                    <p className="use-case-card-excerpt">{useCase.excerpt}</p>

                                    <div className="use-case-card-tags">
                                        {useCase.tags.slice(0, 3).map((tag, index) => (
                                            <span key={index} className="use-case-tag">{tag}</span>
                                        ))}
                                    </div>

                                    <Link to={`/use-cases/${useCase.id}`} className="use-case-read-more">
                                        Learn More
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Empty State */}
                    {paginatedUseCases.length === 0 && (
                        <div className="use-cases-empty">
                            <p>No use cases found in this category.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Pagination */}
            {totalPages > 1 && (
                <section className="use-cases-pagination-section">
                    <div className="use-cases-container">
                        <nav className="use-cases-pagination" aria-label="Pagination">
                            <button
                                className="pagination-btn pagination-prev"
                                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                                disabled={currentPage === 1}
                                aria-label="Previous page"
                            >
                                ←
                            </button>

                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                <button
                                    key={page}
                                    className={`pagination-btn pagination-number ${currentPage === page ? 'active' : ''
                                        }`}
                                    onClick={() => setCurrentPage(page)}
                                    aria-label={`Page ${page}`}
                                    aria-current={currentPage === page ? 'page' : undefined}
                                >
                                    {page}
                                </button>
                            ))}

                            <button
                                className="pagination-btn pagination-next"
                                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                                disabled={currentPage === totalPages}
                                aria-label="Next page"
                            >
                                →
                            </button>
                        </nav>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="use-cases-cta-section">
                <div className="use-cases-container">
                    <div className="use-cases-cta">
                        <h2>Ready to Transform Your Business?</h2>
                        <p>Let&apos;s discuss how AI and data solutions can drive your success.</p>
                        <Link to="/contact" className="use-cases-cta-btn">
                            Let&apos;s Talk
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default UseCasesPage;
