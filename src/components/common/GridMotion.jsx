import React, { useEffect, useRef } from 'react';

const GridMotion = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;

        // Grid Configuration
        const gridGap = 50; // Distance between points
        const pointSize = 2; // Size of grid points
        const mouseRadius = 150; // Interaction radius
        const springFactor = 0.1; // Elasticity
        const friction = 0.9; // Damping

        let points = [];
        let mouse = { x: -1000, y: -1000 };

        // Initialize Grid
        const init = () => {
            // Use parent dimensions instead of window
            const parent = canvas.parentElement;
            canvas.width = parent.offsetWidth;
            canvas.height = parent.offsetHeight;
            points = [];

            const cols = Math.ceil(canvas.width / gridGap);
            const rows = Math.ceil(canvas.height / gridGap);

            for (let i = 0; i <= cols; i++) {
                for (let j = 0; j <= rows; j++) {
                    const x = i * gridGap;
                    const y = j * gridGap;
                    points.push({
                        x, // Current position
                        y,
                        originX: x, // Original position
                        originY: y,
                        vx: 0, // Velocity
                        vy: 0
                    });
                }
            }
        };

        // Animation Loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Background Color (Transparent to let parent bg show, or White)
            // We'll keep it transparent so it layers over the section background
            // ctx.fillStyle = '#ffffff';
            // ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#9ca3af'; // Light Grey (Gray-400) for subtle premium look

            points.forEach(point => {
                // 1. Calculate distance to mouse
                // Adjust mouse coordinates relative to canvas
                const rect = canvas.getBoundingClientRect();
                const mouseX = mouse.x - rect.left;
                const mouseY = mouse.y - rect.top;

                const dx = mouseX - point.x;
                const dy = mouseY - point.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                // 2. Mouse Interaction (Repulsion)
                if (dist < mouseRadius) {
                    const angle = Math.atan2(dy, dx);
                    const force = (mouseRadius - dist) / mouseRadius;
                    const push = force * 2.0; // Strength

                    point.vx -= Math.cos(angle) * push;
                    point.vy -= Math.sin(angle) * push;
                }

                // 3. Spring back to origin
                const ox = point.originX - point.x;
                const oy = point.originY - point.y;

                point.vx += ox * springFactor;
                point.vy += oy * springFactor;

                // 4. Apply Velocity & Friction
                point.vx *= friction;
                point.vy *= friction;

                point.x += point.vx;
                point.y += point.vy;

                // 5. Draw Point
                ctx.beginPath();
                ctx.arc(point.x, point.y, pointSize, 0, Math.PI * 2);
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        // Event Listeners
        const handleResize = () => init();
        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };
        const handleMouseLeave = () => {
            mouse.x = -1000;
            mouse.y = -1000;
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);

        init();
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute', // Changed from fixed
                top: 0,
                left: 0,
                width: '100%', // Fill parent
                height: '100%',
                zIndex: 0, // Behind content but inside section
                pointerEvents: 'none' // Allow clicks to pass through
            }}
        />
    );
};

export default GridMotion;
