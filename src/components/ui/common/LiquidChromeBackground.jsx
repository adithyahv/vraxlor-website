import { useEffect, useRef } from 'react';
import './LiquidChromeBackground.css';

const LiquidChromeBackground = () => {
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

    // Liquid chrome animation
    const animate = () => {
      time += 0.005;

      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, `hsl(${200 + Math.sin(time) * 20}, 70%, ${15 + Math.sin(time * 0.5) * 5}%)`);
      gradient.addColorStop(0.5, `hsl(${220 + Math.cos(time * 0.7) * 20}, 60%, ${10 + Math.cos(time * 0.3) * 5}%)`);
      gradient.addColorStop(1, `hsl(${180 + Math.sin(time * 0.3) * 20}, 65%, ${12 + Math.sin(time * 0.8) * 5}%)`);
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw flowing chrome blobs
      const numBlobs = 3;
      for (let i = 0; i < numBlobs; i++) {
        const x = canvas.width * (0.3 + Math.sin(time + i * 2) * 0.3);
        const y = canvas.height * (0.3 + Math.cos(time * 0.8 + i * 2) * 0.3);
        const radius = Math.min(canvas.width, canvas.height) * (0.2 + Math.sin(time * 0.5 + i) * 0.1);

        const blobGradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        blobGradient.addColorStop(0, `hsla(${200 + i * 30}, 80%, 60%, 0.15)`);
        blobGradient.addColorStop(0.5, `hsla(${220 + i * 30}, 70%, 50%, 0.08)`);
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
    <div className="liquid-chrome-background">
      <canvas ref={canvasRef} className="liquid-chrome-canvas" />
      <div className="chrome-overlay"></div>
      <div className="chrome-gradient"></div>
    </div>
  );
};

export default LiquidChromeBackground;


