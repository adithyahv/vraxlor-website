import './TestimonialsSection.css';

const TESTIMONIALS = [
    {
        quote: "They have an individual approach from the very beginning. They are open to change and ready to face difficulties.",
        author: "Bobby Newman",
        company: "J2 Global",
        role: "Director of Technology"
    },
    {
        quote: "They didn't just 'do requirements', they investigated our needs and advised on the best processes to achieve our objectives. They were mindful of costs and gave suggestions that would be great long term solutions. But most of all, they felt like a part of our team!",
        author: "CEO",
        company: "SimpleCater",
        role: "Chief Executive Officer"
    },
    {
        quote: "I am impressed with their openness to new solutions and dedication to making the tool effective and easy to maintain.",
        author: "Narayana Pappu",
        company: "Zendata",
        role: "Founder & CEO"
    }
];

const CLIENT_LOGOS = [
    { name: 'SimpleCater', url: 'https://via.placeholder.com/120x40?text=SimpleCater' },
    { name: 'InPost', url: 'https://via.placeholder.com/120x40?text=InPost' },
    { name: 'Recyclever', url: 'https://via.placeholder.com/120x40?text=Recyclever' },
    { name: 'Pernod Ricard', url: 'https://via.placeholder.com/120x40?text=Pernod+Ricard' },
    { name: 'J2 Global', url: 'https://via.placeholder.com/120x40?text=J2+Global' },
    { name: 'Zendata', url: 'https://via.placeholder.com/120x40?text=Zendata' },
];

const TestimonialsSection = () => {
    return (
        <div className="testimonials-section">
            <div className="ts-header">
                <h2>What our clients say</h2>
            </div>

            {/* Testimonials Grid */}
            <div className="ts-grid">
                {TESTIMONIALS.map((testimonial, idx) => (
                    <div key={idx} className="ts-card">
                        <div className="ts-quote-icon">"</div>
                        <p className="ts-quote">{testimonial.quote}</p>
                        <div className="ts-author">
                            <div className="ts-author-avatar">
                                {testimonial.author.charAt(0)}
                            </div>
                            <div className="ts-author-info">
                                <span className="ts-author-name">{testimonial.author}</span>
                                <span className="ts-author-role">{testimonial.role}, {testimonial.company}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Client Logos */}
            <div className="ts-clients">
                <p className="ts-clients-label">Trusted by innovative companies</p>
                <div className="ts-logos-grid">
                    {CLIENT_LOGOS.map((logo, idx) => (
                        <div key={idx} className="ts-logo-item">
                            <span>{logo.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TestimonialsSection;
