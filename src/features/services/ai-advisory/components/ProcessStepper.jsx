import './ProcessStepper.css';

const STAGES = [
    {
        stage: 1,
        title: 'Business Process Evaluation',
        description: 'We begin by meeting with key stakeholders to understand your business objectives, challenges, and current workflows. This comprehensive analysis helps identify the most impactful AI opportunities.',
        activities: [
            'Stakeholder interviews and workshops',
            'Current process mapping and analysis',
            'Pain point identification',
            'Opportunity assessment',
        ],
        outcome: 'Detailed understanding of your business processes and prioritized list of AI opportunities.'
    },
    {
        stage: 2,
        title: 'Dataflow Evaluation',
        description: 'We assess your data infrastructure, evaluating data quantity, quality, and accessibility. This stage determines whether your organization has the data foundation needed for successful AI implementation.',
        activities: [
            'Data inventory and mapping',
            'Data quality assessment',
            'Infrastructure review',
            'Integration capability analysis',
        ],
        outcome: 'Data readiness report with recommendations for data preparation and infrastructure improvements.'
    },
    {
        stage: 3,
        title: 'AI Proof of Concept (PoC)',
        description: 'We develop a focused proof of concept to test theoretical assumptions and demonstrate the potential value of AI for your specific use case. This minimizes risk before full-scale investment.',
        activities: [
            'PoC scope definition',
            'Model development and training',
            'Performance benchmarking',
            'Results documentation',
        ],
        outcome: 'Working prototype demonstrating AI capabilities with measurable performance metrics.'
    },
    {
        stage: 4,
        title: 'Evaluation with Business',
        description: 'We present the PoC results to business stakeholders, analyzing performance against success criteria. This collaborative evaluation ensures alignment between technical capabilities and business expectations.',
        activities: [
            'Results presentation',
            'ROI analysis',
            'Stakeholder feedback collection',
            'Go/no-go decision support',
        ],
        outcome: 'Business case validation with clear ROI projections and stakeholder buy-in.'
    },
    {
        stage: 5,
        title: 'Deployment & Solution Finalization',
        description: 'Following successful validation, we develop and deploy the production-ready AI solution, including integration with existing systems, user training, and ongoing support.',
        activities: [
            'Production development',
            'System integration',
            'User training and documentation',
            'Monitoring and optimization setup',
        ],
        outcome: 'Fully deployed AI solution with trained users and established support processes.'
    },
];

const ProcessStepper = () => {
    return (
        <div className="process-stepper">
            <div className="ps-header">
                <span className="ps-eyebrow">How we work</span>
                <h2>AI Advisory Services</h2>
                <p>Our proven 5-stage methodology ensures successful AI implementation with minimized risk.</p>
            </div>

            <div className="ps-steps">
                {STAGES.map((stage, idx) => (
                    <div key={stage.stage} className="ps-step">
                        <div className="ps-step-marker">
                            <div className="ps-step-number">
                                <span>STAGE {stage.stage}</span>
                            </div>
                            {idx < STAGES.length - 1 && <div className="ps-step-line"></div>}
                        </div>

                        <div className="ps-step-content">
                            <h3>{stage.title}</h3>
                            <p className="ps-step-desc">{stage.description}</p>

                            <div className="ps-step-activities">
                                <h4>Key Activities:</h4>
                                <ul>
                                    {stage.activities.map((activity, i) => (
                                        <li key={i}>{activity}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="ps-step-outcome">
                                <span className="ps-outcome-label">Outcome:</span>
                                <span className="ps-outcome-text">{stage.outcome}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProcessStepper;
