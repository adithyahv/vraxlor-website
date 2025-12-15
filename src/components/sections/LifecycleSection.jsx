import { SERVICE_LIFECYCLE } from '../../constants/data';
import { Link } from 'react-router-dom';
import './Sections.css';

const LifecycleSection = () => {
  return (
    <section className="lifecycle-overview-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">The Vroxlar AI Lifecycle</h2>
          <p className="section-subtitle">
            A proven, stage-gated framework that delivers predictable enterprise outcomes—from 
            strategic discovery to continuous operations.
          </p>
        </div>

        <div className="lifecycle-timeline">
          {SERVICE_LIFECYCLE.map((phase, index) => (
            <div key={phase.phase} className="lifecycle-step">
              <div className="step-number">{phase.phase}</div>
              <div className="step-content">
                <h3>{phase.name}</h3>
                <p className="step-subtitle">{phase.subtitle}</p>
                <p className="step-description">{phase.description}</p>
              </div>
              {index < SERVICE_LIFECYCLE.length - 1 && (
                <div className="step-connector" aria-hidden="true">→</div>
              )}
            </div>
          ))}
        </div>

        <div className="lifecycle-cta">
          <Link to="/services" className="secondary-btn">
            Explore Our Full Service Catalog
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LifecycleSection;

