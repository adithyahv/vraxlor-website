import './Sections.css';

const CTASection = () => {
  return (
    <section className="section cta-strip">
      <div className="cta-content container">
        <div>
          <p className="eyebrow">Let's Build</p>
          <h2>Ready to deploy intelligent agents for your business?</h2>
        </div>
        <button className="primary-btn">Let's Talk</button>
      </div>
    </section>
  );
};

export default CTASection;
