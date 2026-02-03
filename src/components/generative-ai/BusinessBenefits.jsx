import { useState } from 'react';
import { Link } from 'react-router-dom';
import './BusinessBenefits.css';

const TABS = [
    {
        id: 'understanding',
        title: 'Understanding Generative AI for business transformation',
        content: {
            intro: `Generative AI is technology that goes far beyond creating emails, images, or code snippets – it understands, processes, and transforms knowledge into specific, actionable business outcomes. Rather than just handling isolated tasks like drafting correspondence or formatting presentations, generative AI powers entire workflows by automating information flow, generating insights from complex data, and supporting critical decision-making processes.`,
            details: `The real transformation happens when AI interprets multiple information types – documents, databases, spreadsheets, voice recordings, video content – and connects patterns across them. This enables your teams to extract meaningful insights, automate knowledge synthesis, and maintain strategic oversight while AI handles the heavy lifting of information processing and analysis.`,
            conclusion: `Think of content creation as merely the visible output; underneath, generative AI serves as an intelligent information processor that can revolutionize how your organization captures, analyzes, and acts on knowledge.`
        }
    },
    {
        id: 'comprehensive',
        title: 'Comprehensive Generative AI solutions across industries',
        content: {
            intro: `Generative AI offers practical solutions across every industry, with applications that bridge the gap between technical and non-technical teams:`,
            list: [
                { label: 'Content & Knowledge Management', desc: 'Automatically organizing, classifying, and extracting insights from contracts, research papers, regulatory documents, and internal communications' },
                { label: 'Code-to-Business Translation', desc: 'Converting technical specifications into business-friendly summaries, translating database queries into plain English reports' },
                { label: 'Customer Service', desc: 'Intelligent chatbots that handle multi-step support tickets, escalate complex issues appropriately, and maintain conversation context' },
                { label: 'Reporting & Analysis', desc: 'Automated generation of financial summaries, operational dashboards, compliance reports, and executive briefings' },
                { label: 'Personalization', desc: 'Dynamic product recommendations, customized marketing messages, and tailored user experiences based on behavioral patterns' },
                { label: 'Product Design & Ideation', desc: 'Market analysis-driven product suggestions, feature prioritization based on customer feedback' },
                { label: 'Workflow Automation', desc: 'Streamlining invoice processing, contract review, scheduling coordination, and document approval chains' },
            ],
            conclusion: `Modern implementations leverage knowledge graphs – intelligent frameworks that map relationships between business information across different systems.`
        }
    },
    {
        id: 'efficiency',
        title: 'Boosting business efficiency with AI-powered process automation',
        content: {
            intro: `Generative AI transforms existing operations by automating labor-intensive processes, eliminating manual errors, and redirecting human expertise toward high-value activities.`,
            subtitle: 'Specific process improvements include:',
            list: [
                { label: 'Financial operations', desc: 'Automating accounts payable processing, expense report generation, and budget variance analysis' },
                { label: 'Engineering & Manufacturing', desc: 'Streamlining quality control documentation, automating technical specification updates, and generating maintenance schedules' },
                { label: 'Legal & Compliance', desc: 'Accelerating contract review, automating regulatory filing preparation, and standardizing policy documentation' },
                { label: 'Human Resources', desc: 'Automating candidate screening, generating performance review summaries, and creating training material updates' },
                { label: 'Sales & Marketing', desc: 'Producing personalized proposal content, automating lead qualification, and generating campaign performance analysis' },
            ],
            conclusion: `This "efficiency multiplier" effect allows organizations to increase output capacity without proportional increases in labor costs.`
        }
    },
    {
        id: 'innovation',
        title: 'Driving innovation and new revenue streams',
        content: {
            intro: `Generative AI enables businesses to create entirely new offerings and business models that were previously impractical or impossible:`,
            sections: [
                {
                    title: 'Innovation Examples',
                    items: [
                        'Personalized Service Delivery: AI-powered virtual consultants that provide 24/7 expert-level guidance',
                        'Product Customization at Scale: Dynamic product configuration based on individual customer needs',
                        'Data-as-a-Service Models: Transforming internal analytics capabilities into market intelligence products',
                        'Automated Content Monetization: Converting existing knowledge bases into subscription-based content',
                    ]
                },
                {
                    title: 'Customer Experience Enhancements',
                    items: [
                        'Predictive Support: Anticipating customer needs before they arise',
                        'Intelligent Onboarding: Customized user journeys that adapt in real-time',
                        'Contextual Recommendations: Cross-platform insights that enhance customer relationships',
                    ]
                }
            ],
            conclusion: `These capabilities often create defensible competitive advantages while opening previously untapped revenue channels.`
        }
    },
    {
        id: 'readiness',
        title: "Assessing your organization's Generative AI readiness",
        content: {
            intro: `Evaluate your readiness using these specific criteria:`,
            sections: [
                {
                    title: 'Process assessment',
                    items: [
                        'High-Volume, Information-Heavy Tasks: Document processing, report generation, customer inquiry handling',
                        'Repetitive Decision-Making: Approval workflows, qualification assessments, content moderation',
                        'Knowledge Synthesis Requirements: Research compilation, competitive analysis, regulatory monitoring',
                    ]
                },
                {
                    title: 'Data infrastructure readiness',
                    items: [
                        'Accessible Information Systems: CRM databases, document management systems, email archives',
                        'Data Quality Standards: Reasonably organized information with consistent naming conventions',
                        'Integration Capabilities: Existing APIs or data export capabilities that enable AI connectivity',
                    ]
                },
                {
                    title: 'Organizational readiness',
                    items: [
                        'Change-Adaptive Culture: Teams willing to experiment with new workflows',
                        'Clear Success Metrics: Defined KPIs for measuring efficiency gains',
                        'Executive Sponsorship: Leadership commitment to supporting implementation',
                    ]
                }
            ],
            conclusion: `An experienced AI consultant can conduct a comprehensive assessment to identify your highest-value opportunities.`
        }
    },
    {
        id: 'timeline',
        title: 'Implementation costs, timeline, and phased approach',
        content: {
            intro: `Phased implementation approach:`,
            phases: [
                {
                    title: 'Proof of Concept (PoC) Phase',
                    timeline: 'In weeks',
                    details: [
                        'Scope: Single-use case validation with measurable outcomes',
                        'Deliverables: Working prototype, ROI analysis, and scalability assessment',
                    ]
                },
                {
                    title: 'Full-Scale Deployment',
                    timeline: 'In months',
                    details: [
                        'Scope: Multi-department integration with comprehensive training and support',
                        'Deliverables: Production-ready system, user training, and ongoing optimization plan',
                    ]
                }
            ],
            benefits: [
                'Risk mitigation: Proves value before major investment',
                'User adoption: Enables teams to gradually adapt to new workflows',
                'Technical optimization: Allows fine-tuning based on actual usage patterns',
                'Budget management: Spreads costs over time while demonstrating incremental value',
            ],
            conclusion: `Most successful implementations follow this progressive approach, with each phase building confidence and capability.`
        }
    },
    {
        id: 'why-us',
        title: 'Why choose Vraxlor?',
        content: {
            intro: `We combine deep expertise with a practical, results-first approach. Trusted by clients in manufacturing, finance, healthcare, and technology, we've built a track record of success backed by documented case studies.`,
            highlights: [
                'Proprietary frameworks that cut implementation time and accelerate time-to-value',
                'Seamless integration into your existing systems',
                'ROI-driven mindset: We help you spot the most valuable opportunities',
                'Scalable architectures designed for long-term growth',
                'Change management support to keep teams aligned and engaged',
            ],
            conclusion: `In short: proven expertise on products built to deliver measurable impact, without disrupting your business.`
        }
    },
];

const BusinessBenefits = () => {
    const [activeTab, setActiveTab] = useState(TABS[0].id);

    const activeContent = TABS.find(tab => tab.id === activeTab);

    const renderContent = (content) => {
        return (
            <div className="bb-content-body">
                {content.intro && <p className="bb-intro">{content.intro}</p>}

                {content.subtitle && <h4 className="bb-subtitle">{content.subtitle}</h4>}

                {content.details && <p className="bb-details">{content.details}</p>}

                {content.list && (
                    <ul className="bb-list">
                        {content.list.map((item, idx) => (
                            <li key={idx}>
                                <strong>{item.label}:</strong> {item.desc}
                            </li>
                        ))}
                    </ul>
                )}

                {content.sections && content.sections.map((section, idx) => (
                    <div key={idx} className="bb-criteria-section">
                        <h4>{section.title}</h4>
                        <ul>
                            {section.items.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}

                {content.phases && (
                    <div className="bb-phases">
                        {content.phases.map((phase, idx) => (
                            <div key={idx} className="bb-phase-card">
                                <div className="bb-phase-header">
                                    <h4>{phase.title}</h4>
                                    <span className="bb-phase-timeline">{phase.timeline}</span>
                                </div>
                                <ul>
                                    {phase.details.map((detail, i) => (
                                        <li key={i}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                )}

                {content.benefits && (
                    <div className="bb-benefits-list">
                        <h4>Why gradual implementation matters?</h4>
                        <ul>
                            {content.benefits.map((benefit, idx) => (
                                <li key={idx}>{benefit}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {content.highlights && (
                    <ul className="bb-highlights">
                        {content.highlights.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                )}

                {content.conclusion && <p className="bb-conclusion">{content.conclusion}</p>}
            </div>
        );
    };

    return (
        <div className="business-benefits">
            <div className="bb-header">
                <h2>Why Invest in Custom Gen AI Development Services</h2>
            </div>

            <div className="bb-layout">
                {/* Tabs */}
                <div className="bb-tabs">
                    {TABS.map((tab) => (
                        <button
                            key={tab.id}
                            className={`bb-tab ${activeTab === tab.id ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            <span className="bb-tab-indicator"></span>
                            {tab.title}
                        </button>
                    ))}
                </div>

                {/* Content Panel */}
                <div className="bb-content">
                    <h3 className="bb-content-title">{activeContent.title}</h3>
                    {renderContent(activeContent.content)}
                    <Link to="/contact" className="bb-cta">Let's talk</Link>
                </div>
            </div>
        </div>
    );
};

export default BusinessBenefits;
