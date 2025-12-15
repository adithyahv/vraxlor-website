import { useEffect, useRef } from 'react';
import { APPROACH_STEPS } from '../../constants/data';
import './ApproachSection.css';

const ApproachSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate header
            const header = entry.target.querySelector('.approach-header');
            if (header) header.classList.add('visible');

            // Animate cards with dropping effect
            const cards = entry.target.querySelectorAll('.approach-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('dropping');
              }, index * 200); // 200ms delay between each block dropping
            });

            // Unobserve after animation trigger
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15, // Trigger slightly earlier
        rootMargin: '0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Helper to render icons based on string name
  const renderIcon = (iconName) => {
    const icons = {
      search: '🔍',
      database: '💾',
      code: '⚡',
      rocket: '🚀',
      activity: '📈',
    };
    return icons[iconName] || '✨';
  };

  return (
    <section className="approach-section" id="approach" ref={sectionRef}>
      <div className="approach-bg-glow"></div>

      <div className="approach-container">
        <div className="approach-header">
          <span className="approach-eyebrow">Our Process</span>
          <h2>How We Drive Innovation</h2>
          <p>A proven, end-to-end framework designed to transform complex challenges into measurable business outcomes.</p>
        </div>

        <div className="approach-grid">
          {APPROACH_STEPS.map((step) => (
            <div key={step.id} className="approach-card">
              <div className="card-phase">Phase {step.phase}</div>
              <div className="card-icon-wrapper">
                {renderIcon(step.icon)}
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
