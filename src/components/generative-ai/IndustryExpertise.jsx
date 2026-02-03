import { useState } from 'react';
import './IndustryExpertise.css';

const INDUSTRIES = [
    {
        id: 'aviation',
        name: 'Aviation',
        image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80',
        title: 'Generative AI for Aviation',
        description: 'Aviation companies face complex operational challenges requiring precise documentation, safety compliance, and real-time decision support.',
        solutions: [
            {
                title: 'Intelligent Documentation Generation',
                desc: 'Automatically generate aviation documentation, safety protocols, and operational procedures based on regulatory requirements and operational data.'
            },
            {
                title: 'LLM-Based Assistance Systems',
                desc: 'Deploy GPT-4 powered assistance bots that provide real-time operational support, safety guidance, and procedural assistance to aviation personnel.'
            },
            {
                title: 'Operational Insights & Reporting',
                desc: 'Generate comprehensive operational reports, safety analyses, and performance summaries that help aviation teams understand complex airport operations.'
            },
            {
                title: 'Compliance Documentation Automation',
                desc: 'Create regulatory compliance reports, safety documentation, and audit materials automatically, ensuring adherence to aviation standards.'
            }
        ]
    },
    {
        id: 'manufacturing',
        name: 'Manufacturing',
        image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&q=80',
        title: 'Generative AI for Manufacturing',
        description: 'Manufacturing operations require precise documentation, quality control, and efficient production processes.',
        solutions: [
            {
                title: 'Automated Quality Analysis Reports',
                desc: 'Generate detailed quality assessments, defect analysis summaries, and improvement recommendations based on visual inspection systems and production data.'
            },
            {
                title: 'Product Traceability Documentation',
                desc: 'Create comprehensive traceability reports and compliance documentation automatically from Data Lake systems, ensuring transparency across supply chains.'
            },
            {
                title: 'Predictive Maintenance Content',
                desc: 'Generate maintenance schedules, equipment performance reports, and failure prediction analyses that help optimize production lifecycles.'
            },
            {
                title: 'Operational Process Optimization',
                desc: 'Produce detailed efficiency analyses, cost optimization strategies, and process improvement recommendations based on manufacturing data.'
            }
        ]
    },
    {
        id: 'retail',
        name: 'Retail & E-commerce',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
        title: 'Generative AI for Retail & E-commerce',
        description: 'Modern retailers need intelligent systems that can generate insights, automate documentation, and optimize business processes at scale.',
        solutions: [
            {
                title: 'Intelligent Inventory & Pricing Reports',
                desc: 'Generate comprehensive sales forecasts, optimal pricing strategies, and inventory management recommendations based on advanced data analysis.'
            },
            {
                title: 'Automated Compliance Documentation',
                desc: 'Create store compliance reports, audit documentation, and operational assessments automatically, reducing audit time and operational costs.'
            },
            {
                title: 'Customer Experience Content',
                desc: 'Generate personalized product descriptions, marketing materials, and customer communications that adapt to individual preferences.'
            },
            {
                title: 'Visual Quality Assessment Reports',
                desc: 'Produce detailed image quality analyses, product categorization reports, and visual compliance assessments using computer vision.'
            }
        ]
    }
];

const IndustryExpertise = () => {
    const [activeIndustry, setActiveIndustry] = useState(INDUSTRIES[0].id);

    const current = INDUSTRIES.find(ind => ind.id === activeIndustry);

    return (
        <div className="industry-expertise">
            <div className="ie-header">
                <h2>Our Generative AI Development Expertise</h2>
                <p>AI solutions tailored for specific industry challenges and opportunities.</p>
            </div>

            <div className="ie-content">
                {/* Image */}
                <div className="ie-image-container">
                    <img src={current.image} alt={current.name} className="ie-image" />
                </div>

                {/* Details */}
                <div className="ie-details">
                    <h3>{current.title}</h3>
                    <p className="ie-description">{current.description}</p>

                    <div className="ie-solutions">
                        {current.solutions.map((solution, idx) => (
                            <div key={idx} className="ie-solution-item">
                                <h4>{solution.title}</h4>
                                <p>{solution.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Industry Tabs */}
            <div className="ie-tabs">
                {INDUSTRIES.map((industry) => (
                    <button
                        key={industry.id}
                        className={`ie-tab ${activeIndustry === industry.id ? 'active' : ''}`}
                        onClick={() => setActiveIndustry(industry.id)}
                    >
                        {industry.name}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default IndustryExpertise;
