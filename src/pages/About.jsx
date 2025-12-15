import { DIFFERENTIATORS, STATS, ENTERPRISE_APPROACH } from '../constants/data';
import './About.css';

const About = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>About Vroxlar</h1>
        <p>Building the future of AI-powered business solutions.</p>
      </div>

      <div className="about-content container">
        <section className="about-story">
          <h2>Our Story</h2>
          <p>
            Founded on the belief that AI should do more than just respond—it should take action.
            We build intelligent systems that don't just assist, they execute, decide, and optimize.
          </p>
          <p>
            From autonomous agents to complete AI infrastructures, we partner with forward-thinking
            companies to turn AI from a concept into a competitive advantage.
          </p>
        </section>

        <section className="about-approach">
          <h2>Our Approach</h2>
          <div className="approach-steps">
            {ENTERPRISE_APPROACH.map((step, index) => (
              <div key={step.id} className="approach-step">
                <div className="step-number">{step.phase}</div>
                <h3>{step.title}</h3>
                <p>{step.summary}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="about-differentiators">
          <h2>Why Vroxlar</h2>
          <div className="differentiators-grid">
            {DIFFERENTIATORS.map((item) => (
              <div key={item.title} className="differentiator-card">
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="about-stats">
          <div className="stats-grid">
            {STATS.map((stat) => (
              <div key={stat.label} className="stat-item">
                <span className="stat-value">{stat.value}</span>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;

