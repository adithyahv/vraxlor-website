import './ResourcesPages.css';

const ResourcesBlog = () => {
  return (
    <div className="resources-page">
      <section className="resources-hero">
        <div className="resources-container">
          <h1>Blog</h1>
          <p>Latest perspectives on AI strategy, data platforms, and responsible deployment.</p>
        </div>
      </section>

      <section className="resources-grid">
        <div className="resources-container">
          <div className="resources-cards">
            <article className="resource-card">
              <h3>Building a GenAI Roadmap</h3>
              <p>How to align business objectives with data readiness and model selection for measurable ROI.</p>
              <a href="/contact">Read article</a>
            </article>
            <article className="resource-card">
              <h3>MLOps That Actually Scales</h3>
              <p>Designing pipelines, monitoring, and governance that keep models reliable in production.</p>
              <a href="/contact">Read article</a>
            </article>
            <article className="resource-card">
              <h3>Responsible AI in Practice</h3>
              <p>Bias checks, privacy safeguards, and human oversight frameworks that work.</p>
              <a href="/contact">Read article</a>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesBlog;
