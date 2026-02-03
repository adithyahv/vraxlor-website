import { useState } from 'react';
import './AdvisoryIndustries.css';

const INDUSTRIES = [
    {
        id: 'manufacturing',
        name: 'Manufacturing',
        title: 'AI in Manufacturing',
        description: 'Transform production processes with intelligent automation, predictive insights, and quality optimization.',
        useCases: [
            {
                title: 'Predictive Maintenance',
                desc: 'Use AI to predict equipment failures before they occur, reducing downtime and maintenance costs by up to 50%.'
            },
            {
                title: 'Quality Control',
                desc: 'Implement computer vision and ML models to detect defects in real-time, ensuring consistent product quality.'
            },
            {
                title: 'Supply Chain Optimization',
                desc: 'Optimize inventory levels, demand forecasting, and logistics with AI-driven supply chain intelligence.'
            }
        ]
    },
    {
        id: 'retail',
        name: 'Retail',
        title: 'AI in Retail & E-commerce',
        description: 'Deliver personalized customer experiences and optimize operations with intelligent retail solutions.',
        useCases: [
            {
                title: 'Personalized Recommendations',
                desc: 'Drive sales with AI-powered product recommendations tailored to individual customer preferences and behavior.'
            },
            {
                title: 'Demand Forecasting',
                desc: 'Accurately predict demand patterns to optimize inventory and reduce stockouts and overstock situations.'
            },
            {
                title: 'Automated Checkout',
                desc: 'Implement frictionless checkout experiences using computer vision and AI to streamline the customer journey.'
            }
        ]
    },
    {
        id: 'logistics',
        name: 'Logistics',
        title: 'AI in Logistics & Supply Chain',
        description: 'Optimize logistics operations from warehouse to last-mile delivery with AI-powered solutions.',
        useCases: [
            {
                title: 'Route Optimization',
                desc: 'Reduce delivery times and fuel costs with AI algorithms that find the most efficient routes in real-time.'
            },
            {
                title: 'Warehouse Automation',
                desc: 'Automate inventory management, picking, and packing operations with intelligent robotics and AI systems.'
            },
            {
                title: 'Fleet Management',
                desc: 'Predictive maintenance and intelligent scheduling to maximize fleet utilization and minimize costs.'
            }
        ]
    },
    {
        id: 'finance',
        name: 'Finance & Insurance',
        title: 'AI in Financial Services',
        description: 'Enhance risk management, fraud detection, and customer service with AI-driven financial solutions.',
        useCases: [
            {
                title: 'Fraud Detection',
                desc: 'Real-time detection of fraudulent transactions using advanced ML models that learn from patterns.'
            },
            {
                title: 'Risk Assessment',
                desc: 'Automated credit scoring and risk evaluation using AI to make faster, more accurate decisions.'
            },
            {
                title: 'Claims Processing',
                desc: 'Streamline insurance claims with AI-powered document processing and automated validation.'
            }
        ]
    },
    {
        id: 'technology',
        name: 'Technology companies',
        title: 'AI for Technology Companies',
        description: 'Accelerate product development and enhance platform capabilities with embedded AI solutions.',
        useCases: [
            {
                title: 'Intelligent Product Features',
                desc: 'Embed AI capabilities into your products to deliver smarter, more personalized user experiences.'
            },
            {
                title: 'DevOps Optimization',
                desc: 'Use AI to predict system failures, optimize resource allocation, and automate deployment processes.'
            },
            {
                title: 'Customer Success',
                desc: 'Predict churn, identify upsell opportunities, and automate support with AI-powered customer success tools.'
            }
        ]
    },
];

const AdvisoryIndustries = () => {
    const [activeIndustry, setActiveIndustry] = useState(INDUSTRIES[0].id);

    const current = INDUSTRIES.find(ind => ind.id === activeIndustry);

    return (
        <div className="advisory-industries">
            <div className="ai-header">
                <h2>Artificial Intelligence in Specific Industry</h2>
                <p>Tailored AI solutions that address unique challenges across industries.</p>
            </div>

            <div className="ai-content">
                <div className="ai-details">
                    <h3>{current.title}</h3>
                    <p className="ai-description">{current.description}</p>

                    <div className="ai-use-cases">
                        {current.useCases.map((useCase, idx) => (
                            <div key={idx} className="ai-use-case">
                                <h4>{useCase.title}</h4>
                                <p>{useCase.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Industry Tabs */}
            <div className="ai-tabs">
                {INDUSTRIES.map((industry) => (
                    <button
                        key={industry.id}
                        className={`ai-tab ${activeIndustry === industry.id ? 'active' : ''}`}
                        onClick={() => setActiveIndustry(industry.id)}
                    >
                        {industry.name}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default AdvisoryIndustries;
