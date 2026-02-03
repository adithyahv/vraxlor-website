import { useState } from 'react';
import './AdvisoryBenefits.css';

const BENEFITS = [
    {
        id: 'efficiency',
        title: 'Increased Efficiency and Productivity',
        content: {
            intro: 'Artificial Intelligence can automate repetitive tasks and streamline business processes, allowing human workers to focus on more complex, value-added activities.',
            details: 'By implementing AI-driven automation, organizations typically see significant improvements in operational efficiency. Tasks that once took hours can be completed in minutes, and workflows that required multiple human touchpoints can be streamlined into seamless automated processes.',
            benefits: [
                'Automate routine data entry and processing tasks',
                'Reduce time spent on manual report generation',
                'Optimize resource allocation across departments',
                'Enable 24/7 operations without additional staffing',
            ]
        }
    },
    {
        id: 'analysis',
        title: 'Enhanced Data Analysis and Insights',
        content: {
            intro: 'AI algorithms can quickly process and analyze large volumes of data, uncovering patterns and insights that would be impossible for humans to detect manually.',
            details: 'Modern AI systems can analyze structured and unstructured data from multiple sources, providing actionable insights that drive better business decisions. From predictive analytics to real-time monitoring, AI transforms raw data into strategic intelligence.',
            benefits: [
                'Process millions of data points in seconds',
                'Identify hidden patterns and correlations',
                'Generate predictive models for forecasting',
                'Enable real-time decision support systems',
            ]
        }
    },
    {
        id: 'speed',
        title: 'Improved Speed of Business',
        content: {
            intro: 'AI accelerates decision-making processes by providing instant analysis and recommendations, enabling businesses to respond faster to market changes and opportunities.',
            details: 'In today\'s fast-paced business environment, speed is a competitive advantage. AI systems can process information, analyze scenarios, and provide recommendations in real-time, allowing organizations to make faster, more informed decisions.',
            benefits: [
                'Reduce decision-making time from days to hours',
                'Accelerate product development cycles',
                'Enable real-time response to market changes',
                'Speed up customer service resolution times',
            ]
        }
    },
    {
        id: 'error',
        title: 'Reduced Human Error',
        content: {
            intro: 'AI systems perform tasks with consistent accuracy, eliminating the variability and mistakes that can occur with manual processes.',
            details: 'Human errors in data entry, calculations, and decision-making can be costly for businesses. AI systems maintain consistent performance levels, reducing errors in critical processes and improving overall quality.',
            benefits: [
                'Eliminate data entry mistakes',
                'Ensure consistent quality in production',
                'Reduce compliance and regulatory errors',
                'Minimize costly operational mistakes',
            ]
        }
    },
    {
        id: 'automation',
        title: 'Automation of Repetitive Tasks',
        content: {
            intro: 'AI excels at handling repetitive, rule-based tasks, freeing up human resources for creative and strategic work that requires human judgment.',
            details: 'Many business processes involve repetitive tasks that consume valuable employee time. AI can take over these tasks, performing them faster and more consistently while allowing employees to focus on higher-value activities.',
            benefits: [
                'Automate invoice processing and approvals',
                'Handle routine customer inquiries',
                'Manage scheduling and resource allocation',
                'Process documents and extract information',
            ]
        }
    },
    {
        id: 'customer',
        title: 'Improved Customer Experience',
        content: {
            intro: 'AI enables personalized, responsive customer interactions through intelligent chatbots, recommendation engines, and predictive service capabilities.',
            details: 'Today\'s customers expect personalized experiences and instant responses. AI makes this possible at scale by analyzing customer behavior, predicting needs, and delivering tailored interactions across all touchpoints.',
            benefits: [
                'Provide 24/7 intelligent customer support',
                'Deliver personalized product recommendations',
                'Anticipate customer needs proactively',
                'Reduce wait times and improve satisfaction',
            ]
        }
    },
];

const AdvisoryBenefits = () => {
    const [activeTab, setActiveTab] = useState(BENEFITS[0].id);

    const activeContent = BENEFITS.find(b => b.id === activeTab);

    return (
        <div className="advisory-benefits">
            <div className="ab-header">
                <h2>Artificial Intelligence: Business Benefits of AI Advisory</h2>
            </div>

            <div className="ab-layout">
                {/* Tabs */}
                <div className="ab-tabs">
                    {BENEFITS.map((benefit) => (
                        <button
                            key={benefit.id}
                            className={`ab-tab ${activeTab === benefit.id ? 'active' : ''}`}
                            onClick={() => setActiveTab(benefit.id)}
                        >
                            <span className="ab-tab-indicator"></span>
                            {benefit.title}
                        </button>
                    ))}
                </div>

                {/* Content Panel */}
                <div className="ab-content">
                    <h3 className="ab-content-title">{activeContent.title}</h3>
                    <div className="ab-content-body">
                        <p className="ab-intro">{activeContent.content.intro}</p>
                        <p className="ab-details">{activeContent.content.details}</p>

                        <div className="ab-benefits-list">
                            <h4>Key Outcomes:</h4>
                            <ul>
                                {activeContent.content.benefits.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <button className="ab-cta">Learn more</button>
                </div>
            </div>
        </div>
    );
};

export default AdvisoryBenefits;
