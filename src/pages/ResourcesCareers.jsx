import './ResourcesPages.css';

const ResourcesCareers = () => {
  return (
    <div className="resources-page">
      <section className="resources-hero">
        <div className="resources-container">
          <h1>Careers</h1>
          <p>Join a team building practical, high-impact AI systems for real businesses.</p>
        </div>
      </section>

      <section className="resources-grid">
        <div className="resources-container">
          <div className="career-list">
            <div className="career-card">
              <h3>Senior Machine Learning Engineer</h3>
              <span>Remote · Full-time</span>
              <p>Build and deploy models, optimize performance, and lead delivery across client engagements.</p>
            </div>
            <div className="career-card">
              <h3>Data Engineer</h3>
              <span>Hybrid · Full-time</span>
              <p>Design scalable pipelines, data platforms, and governance frameworks for enterprise clients.</p>
            </div>
            <div className="career-card">
              <h3>Product Designer (AI)</h3>
              <span>Remote · Full-time</span>
              <p>Create user experiences that turn complex AI workflows into elegant, trusted products.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesCareers;
