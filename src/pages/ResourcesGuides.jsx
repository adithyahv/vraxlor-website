import './ResourcesPages.css';

const ResourcesGuides = () => {
  return (
    <div className="resources-page">
      <section className="resources-hero">
        <div className="resources-container">
          <h1>Guides & Ebooks</h1>
          <p>Practical playbooks, frameworks, and deep dives to accelerate AI adoption.</p>
        </div>
      </section>

      <section className="resources-grid">
        <div className="resources-container">
          <div className="resources-cards">
            <article className="resource-card">
              <h3>AI Discovery Workshop Guide</h3>
              <p>Templates for prioritizing use cases, measuring impact, and building executive buy-in.</p>
              <a href="/contact">Download</a>
            </article>
            <article className="resource-card">
              <h3>GenAI Governance Checklist</h3>
              <p>Policies, risk controls, and review cycles to keep models safe and compliant.</p>
              <a href="/contact">Download</a>
            </article>
            <article className="resource-card">
              <h3>Data Platform Selection</h3>
              <p>Compare stacks and define the right architecture for scale, cost, and reliability.</p>
              <a href="/contact">Download</a>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesGuides;
