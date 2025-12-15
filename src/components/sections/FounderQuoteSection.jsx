import './FounderQuoteSection.css';

const FounderQuoteSection = () => {
  return (
    <section className="founder-quote-section">
      <div className="founder-quote-container">
        <div className="founder-quote-layout">
          {/* Left Side - Quote Text */}
          <div className="quote-content">
            <p className="quote-text">
              <span className="quote-mark">"</span>
              <span className="text-white">Technology ends where intelligence begins.</span>
            </p>
            <p className="quote-text">
              <span className="text-white">At Vraxlor, we design AI that </span>
              <span className="text-cyan">grows, adapts, and reinvents itself. </span>
              <span className="text-white">Precision-built cognitive engines with </span>
              <span className="text-cyan">autonomy and foresight </span>
              <span className="text-white">at their core.</span>
            </p>
            <p className="quote-text">
              <span className="text-white">From vision to </span>
              <span className="text-cyan">evolving AI ecosystems</span>
              <span className="text-white">—we engineer the intelligence that powers tomorrow's enterprises.</span>
              <span className="quote-mark">"</span>
            </p>
            <div className="founder-attribution">
              <p className="founder-name">— Adithya HV, Founder & CEO</p>
            </div>
          </div>

          {/* Right Side - Video */}
          <div className="video-container">
            <div className="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/KMGHKsnHsaE?autoplay=1&mute=1&loop=1&playlist=KMGHKsnHsaE&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0"
                title="Vraxlor Vision"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="youtube-video"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderQuoteSection;

