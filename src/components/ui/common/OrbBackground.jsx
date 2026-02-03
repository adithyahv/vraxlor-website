import { useEffect, useRef } from 'react';
import './OrbBackground.css';

const OrbBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let time = 0;

        // Mouse interaction state
        const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        const targetMouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

        const handleMouseMove = (e) => {
            targetMouse.x = e.clientX;
            targetMouse.y = e.clientY;
        };
        window.addEventListener('mousemove', handleMouseMove);

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Orb properties
        const orb = {
            x: canvas.width / 2,
            y: canvas.height / 2,
            radius: Math.min(canvas.width, canvas.height) * 0.35,
            hue: 220
        };

        // Animation loop
        const animate = () => {
            time += 0.01;

            // Smooth mouse movement
            mouse.x += (targetMouse.x - mouse.x) * 0.05;
            mouse.y += (targetMouse.y - mouse.y) * 0.05;

            // Clear canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update orb position (subtle floating + mouse influence)
            const floatX = Math.sin(time * 0.5) * 30;
            const floatY = Math.cos(time * 0.3) * 30;

            // Calculate target position (center + float + slight mouse pull)
            const targetX = (canvas.width / 2) + floatX + (mouse.x - canvas.width / 2) * 0.1;
            const targetY = (canvas.height / 2) + floatY + (mouse.y - canvas.height / 2) * 0.1;

            orb.x += (targetX - orb.x) * 0.05;
            orb.y += (targetY - orb.y) * 0.05;

            // Dynamic radius pulse
            const currentRadius = orb.radius + Math.sin(time * 0.8) * 20;

            // Draw Orb
            const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, currentRadius);

            // Core color (Bright Cyan/Blue) - Increased Opacity
            gradient.addColorStop(0, `hsla(${orb.hue + Math.sin(time) * 20}, 90%, 60%, 1)`);
            // Mid glow (Purple/Blue) - Increased Opacity
            gradient.addColorStop(0.4, `hsla(${orb.hue + 40}, 80%, 50%, 0.6)`);
            // Outer glow (Fade to transparent) - Increased Opacity
            gradient.addColorStop(0.8, `hsla(${orb.hue + 60}, 70%, 40%, 0.2)`);
            gradient.addColorStop(1, 'transparent');

            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(orb.x, orb.y, currentRadius, 0, Math.PI * 2);
            ctx.fill();

            // Add a second, smaller orbiting orb for depth
            const orb2X = orb.x + Math.cos(time * 0.5) * (currentRadius * 0.8);
            const orb2Y = orb.y + Math.sin(time * 0.5) * (currentRadius * 0.8);
            const orb2Radius = currentRadius * 0.4;

            const gradient2 = ctx.createRadialGradient(orb2X, orb2Y, 0, orb2X, orb2Y, orb2Radius);
            gradient2.addColorStop(0, `hsla(${orb.hue + 180}, 80%, 60%, 0.8)`); // Complementary color - Increased Opacity
            gradient2.addColorStop(1, 'transparent');

            ctx.fillStyle = gradient2;
            ctx.beginPath();
            ctx.arc(orb2X, orb2Y, orb2Radius, 0, Math.PI * 2);
            ctx.fill();

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="orb-background">
            <canvas ref={canvasRef} className="orb-canvas" />
            <div className="orb-noise"></div>
        </div>
    );
};

export default OrbBackground;
