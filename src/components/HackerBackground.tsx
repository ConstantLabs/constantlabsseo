import { useEffect, useRef } from 'react';

export const HackerBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Dot grid setup
    const spacing = 40;
    const dots: Array<{
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      offsetX: number;
      offsetY: number;
      opacity: number;
      pulseSpeed: number;
      driftSpeedX: number;
      driftSpeedY: number;
      glitchTimer: number;
      glitchDuration: number;
    }> = [];

    // Create dot grid
    for (let x = spacing; x < canvas.width; x += spacing) {
      for (let y = spacing; y < canvas.height; y += spacing) {
        dots.push({
          x,
          y,
          baseX: x,
          baseY: y,
          offsetX: 0,
          offsetY: 0,
          opacity: 0.15 + Math.random() * 0.15,
          pulseSpeed: 0.01 + Math.random() * 0.02,
          driftSpeedX: (Math.random() - 0.5) * 0.1,
          driftSpeedY: (Math.random() - 0.5) * 0.1,
          glitchTimer: Math.random() * 300,
          glitchDuration: 0,
        });
      }
    }

    let frame = 0;
    
    const animate = () => {
      // Clear canvas with slight trail effect
      ctx.fillStyle = 'rgba(18, 18, 18, 0.4)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      frame++;

      dots.forEach((dot) => {
        // Slow continuous drift
        dot.offsetX += dot.driftSpeedX;
        dot.offsetY += dot.driftSpeedY;

        // Keep drift bounded
        if (Math.abs(dot.offsetX) > 15) dot.driftSpeedX *= -1;
        if (Math.abs(dot.offsetY) > 15) dot.driftSpeedY *= -1;

        // Sporadic glitch effect
        dot.glitchTimer--;
        if (dot.glitchTimer <= 0) {
          dot.glitchDuration = 3 + Math.random() * 5;
          dot.glitchTimer = 100 + Math.random() * 300;
        }

        if (dot.glitchDuration > 0) {
          dot.offsetX += (Math.random() - 0.5) * 10;
          dot.offsetY += (Math.random() - 0.5) * 10;
          dot.glitchDuration--;
        }

        // Subtle pulsing
        dot.opacity += dot.pulseSpeed;
        if (dot.opacity > 0.35 || dot.opacity < 0.1) {
          dot.pulseSpeed *= -1;
        }

        // Draw dot
        dot.x = dot.baseX + dot.offsetX;
        dot.y = dot.baseY + dot.offsetY;

        ctx.fillStyle = `rgba(255, 255, 255, ${dot.opacity})`;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.25 }}
    />
  );
};