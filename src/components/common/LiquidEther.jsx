import { useEffect, useRef } from 'react';
import './LiquidEther.css';

const LiquidEther = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let time = 0;

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Liquid Ether animation
        const animate = () => {
            time += 0.003; // Slower, more ethereal speed

            // Create ethereal gradient background (White/Light Gray base)
            const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
            // Darker/More saturated colors for visibility
            gradient.addColorStop(0, `hsl(${210 + Math.sin(time) * 10}, 60%, ${85 + Math.sin(time * 0.5) * 5}%)`);
            gradient.addColorStop(0.5, `hsl(${230 + Math.cos(time * 0.7) * 10}, 50%, ${80 + Math.cos(time * 0.3) * 5}%)`);
            gradient.addColorStop(1, `hsl(${200 + Math.sin(time * 0.3) * 10}, 60%, ${88 + Math.sin(time * 0.8) * 5}%)`);

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw flowing ether blobs (Stronger colors)
            const numBlobs = 4;
            for (let i = 0; i < numBlobs; i++) {
                const x = canvas.width * (0.5 + Math.sin(time * 0.5 + i * 1.5) * 0.4);
                const y = canvas.height * (0.5 + Math.cos(time * 0.4 + i * 1.2) * 0.4);
                const radius = Math.min(canvas.width, canvas.height) * (0.35 + Math.sin(time * 0.3 + i) * 0.15);

                const blobGradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
                // Increased opacity and saturation
                blobGradient.addColorStop(0, `hsla(${210 + i * 40}, 80%, 70%, 0.6)`);
                blobGradient.addColorStop(0.5, `hsla(${240 + i * 30}, 70%, 80%, 0.3)`);
                blobGradient.addColorStop(1, 'transparent');

                ctx.fillStyle = blobGradient;
                ctx.beginPath();
                ctx.arc(x, y, radius, 0, Math.PI * 2);
                ctx.fill();
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="liquid-ether-background">
            <canvas ref={canvasRef} className="liquid-ether-canvas" />
            <div className="ether-overlay"></div>
            <div className="ether-noise"></div>
        </div>
    );
};

export default LiquidEther;
