import './KeyBenefits.css';

const BENEFITS = [
    {
        icon: '💰',
        title: 'Cost reduction through automation',
        description: 'Eliminate manual, repetitive tasks like document creation, report generation, and content production – often reducing operational costs by 30-70% in these areas.'
    },
    {
        icon: '⚡',
        title: 'Speed & efficiency gains',
        description: 'Accelerate processes that previously took days or weeks down to minutes or hours – from technical documentation to compliance reporting to market analysis.'
    },
    {
        icon: '📈',
        title: 'Scalability without proportional headcount',
        description: 'Handle exponentially more work (documents, communications, analyses) without hiring proportionally more staff – breaking the traditional labor-output relationship.'
    },
    {
        icon: '✓',
        title: 'Consistency & quality control',
        description: 'Eliminate human error and ensure standardized output quality across all generated content, documentation, and communications.'
    }
];

const KeyBenefits = () => {
    return (
        <div className="key-benefits">
            <div className="kb-header">
                <h2>Gen AI in Business. What you can gain</h2>
                <p>Transform your operations with measurable results.</p>
            </div>

            <div className="kb-grid">
                {BENEFITS.map((benefit, idx) => (
                    <div key={idx} className="kb-card">
                        <span className="kb-icon">{benefit.icon}</span>
                        <h3>{benefit.title}</h3>
                        <p>{benefit.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default KeyBenefits;
