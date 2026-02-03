import './CaseStudies.css';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'E-commerce AI Assistant',
      client: 'Retail Giant',
      industry: 'Retail',
      description:
        'Implemented an AI-powered customer service assistant that reduced response time by 70% and increased customer satisfaction by 45%.',
      results: ['70% faster response time', '45% increase in satisfaction', '24/7 availability'],
    },
    {
      id: 2,
      title: 'Predictive Maintenance System',
      client: 'Manufacturing Leader',
      industry: 'Manufacturing',
      description:
        'Built a machine learning model to predict equipment failures, reducing downtime by 60% and maintenance costs by 40%.',
      results: ['60% less downtime', '40% cost reduction', '$2M annual savings'],
    },
    {
      id: 3,
      title: 'Fraud Detection Platform',
      client: 'Fintech Startup',
      industry: 'Fintech',
      description:
        'Developed an AI system that detects fraudulent transactions in real-time with 99.5% accuracy.',
      results: ['99.5% accuracy', '50ms response time', '$10M fraud prevented'],
    },
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Case Studies</h1>
        <p>Real results from real clients across industries.</p>
      </div>

      <div className="case-studies-grid container">
        {caseStudies.map((study) => (
          <article key={study.id} className="case-study-card">
            <div className="case-study-meta">
              <span className="industry-badge">{study.industry}</span>
            </div>
            <h2>{study.title}</h2>
            <p className="client">{study.client}</p>
            <p className="description">{study.description}</p>
            <div className="results">
              <h3>Results</h3>
              <ul>
                {study.results.map((result, idx) => (
                  <li key={idx}>{result}</li>
                ))}
              </ul>
            </div>
            <button className="link-btn">Read Full Story →</button>
          </article>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;


