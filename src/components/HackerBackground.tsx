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

    // Single slow scan line
    let scanLineY = 0;
    
    const animate = () => {
      // Clear canvas completely for clean slate
      ctx.fillStyle = 'rgba(18, 18, 18, 0.5)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Single slow scan line effect
      scanLineY += 2;
      if (scanLineY > canvas.height) scanLineY = 0;
      
      const gradient = ctx.createLinearGradient(0, scanLineY - 40, 0, scanLineY + 40);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
      gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.02)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, scanLineY - 40, canvas.width, 80);

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