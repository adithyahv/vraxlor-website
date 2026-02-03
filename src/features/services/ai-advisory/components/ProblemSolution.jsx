import './ProblemSolution.css';

const KEY_BENEFITS = [
    {
        icon: '📊',
        title: 'Assessment of "data readiness"',
        description: 'Comprehensive evaluation of your data infrastructure, quality, and accessibility to determine AI implementation feasibility.'
    },
    {
        icon: '🎯',
        title: 'Development of AI strategy',
        description: 'Custom AI strategy aligned with your business objectives, including prioritized use cases and technology recommendations.'
    },
    {
        icon: '🗺️',
        title: 'Implementation roadmap',
        description: 'Detailed phased approach with timelines, resource requirements, and milestones for successful AI adoption.'
    },
    {
        icon: '🔬',
        title: 'Delivering PoC',
        description: 'Working proof of concept demonstrating AI capabilities with measurable results before full-scale investment.'
    },
];

const ProblemSolution = () => {
    return (
        <div className="problem-solution">
            {/* Problem Section */}
            <div className="ps-problem">
                <div className="ps-problem-header">
                    <h2>AI Advisory Services: What problem it solves</h2>
                </div>
                <div className="ps-problem-content">
                    <p>
                        Many organizations struggle with legacy technologies and fragmented workflows that prevent
                        them from leveraging the full potential of artificial intelligence. Without a clear strategy,
                        businesses often face:
                    </p>
                    <ul className="ps-problem-list">
                        <li>Disconnected data systems that limit analytical capabilities</li>
                        <li>Uncertainty about which AI use cases will deliver the highest ROI</li>
                        <li>Lack of internal expertise to evaluate and implement AI solutions</li>
                        <li>Fear of investing in technology that may not align with business goals</li>
                        <li>Difficulty justifying AI investments to stakeholders without clear metrics</li>
                    </ul>
                    <p>
                        Our AI Advisory Services bridge this gap by providing expert guidance to navigate the
                        complexities of AI adoption, ensuring that your investments are strategic, measurable,
                        and aligned with your business objectives.
                    </p>
                </div>
            </div>

            {/* Key Benefits Section */}
            <div className="ps-benefits">
                <div className="ps-benefits-header">
                    <h2>AI Advisory Services: What you can expect</h2>
                    <p>Our advisory engagement delivers tangible outcomes that set you up for AI success.</p>
                </div>

                <div className="ps-benefits-grid">
                    {KEY_BENEFITS.map((benefit, idx) => (
                        <div key={idx} className="ps-benefit-card">
                            <span className="ps-benefit-icon">{benefit.icon}</span>
                            <h3>{benefit.title}</h3>
                            <p>{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProblemSolution;
