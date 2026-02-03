import { useEffect, useRef } from 'react';
import './ParticleStars.css';

const ParticleStars = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            // Recreate particles on resize
            particles = [];
            const particleCount = Math.min(1000, Math.floor((canvas.width * canvas.height) / 2000));
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        window.addEventListener('resize', resizeCanvas);

        // Particle class
        class Particle {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                // Faster drift
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                // Mostly tiny particles
                this.size = Math.random() < 0.85 ? (Math.random() * 0.5 + 0.5) : (Math.random() * 1 + 1);
                // Base opacity
                this.baseOpacity = Math.random() * 0.4 + 0.2;
                this.opacity = this.baseOpacity;
                // Twinkling
                this.twinkleSpeed = Math.random() * 0.005 + 0.001;
                this.twinklePhase = Math.random() * Math.PI * 2;

                // Vibrant colors - blues, purples, cyans, pinks
                const colorPalette = [
                    [59, 130, 246],    // Blue
                    [96, 165, 250],    // Light blue
                    [147, 51, 234],    // Purple
                    [168, 85, 247],    // Violet
                    [6, 182, 212],     // Cyan
                    [34, 211, 238],    // Light cyan
                    [139, 92, 246],    // Purple
                    [236, 72, 153],    // Pink
                    [200, 200, 220],   // Light grey
                ];

                this.color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
            }

            update(time) {
                // Slow drift
                this.x += this.vx;
                this.y += this.vy;

                // Smooth twinkling using sine wave
                this.opacity = this.baseOpacity + Math.sin(time * this.twinkleSpeed + this.twinklePhase) * (this.baseOpacity * 0.5);

                // Wrap around
                if (this.x < -20) this.x = canvas.width + 20;
                if (this.x > canvas.width + 20) this.x = -20;
                if (this.y < -20) this.y = canvas.height + 20;
                if (this.y > canvas.height + 20) this.y = -20;
            }

            draw() {
                // Draw particle with glow effect
                const [r, g, b] = this.color;

                // Outer glow
                ctx.beginPath();
                const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 3);
                gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${this.opacity * 0.8})`);
                gradient.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${this.opacity * 0.3})`);
                gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
                ctx.fillStyle = gradient;
                ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
                ctx.fill();

                // Core particle
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${this.opacity})`;
                ctx.fill();
            }
        }

        // Initialize
        resizeCanvas();

        // Animation loop
        const animate = () => {
            const time = Date.now() * 0.001;

            // Clear with white
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Update and draw particles
            particles.forEach(particle => {
                particle.update(time);
                particle.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        // Cleanup
        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="particle-stars-background">
            <canvas ref={canvasRef} className="particle-canvas" />
        </div>
    );
};

export default ParticleStars;
