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

    // 2D Cityscape silhouette at the bottom
    const cityBuildings: Array<{ x: number; width: number; height: number }> = [];
    const buildingCount = Math.floor(canvas.width / 80) + 5;
    
    for (let i = 0; i < buildingCount; i++) {
      cityBuildings.push({
        x: i * 80 - 100,
        width: 60 + Math.random() * 40,
        height: 100 + Math.random() * 200,
      });
    }

    // Random glitch pixels
    const glitchPixels: Array<{ x: number; y: number; alpha: number }> = [];
    for (let i = 0; i < 50; i++) {
      glitchPixels.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        alpha: Math.random(),
      });
    }

    // Scan lines
    let scanLineY = 0;
    
    const animate = () => {
      // Clear with very low opacity for trail effect
      ctx.fillStyle = 'rgba(18, 18, 18, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw cityscape at bottom
      ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
      cityBuildings.forEach(building => {
        const y = canvas.height - building.height;
        ctx.fillRect(building.x, y, building.width, building.height);
        
        // Window lights (random flicker)
        if (Math.random() > 0.7) {
          const windowSize = 3;
          const windowSpacing = 8;
          for (let wy = y + 10; wy < canvas.height - 10; wy += windowSpacing) {
            for (let wx = building.x + 10; wx < building.x + building.width - 10; wx += windowSpacing) {
              if (Math.random() > 0.85) {
                ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.15})`;
                ctx.fillRect(wx, wy, windowSize, windowSize);
              }
            }
          }
        }
      });

      // Draw glitch pixels
      glitchPixels.forEach(pixel => {
        pixel.alpha += (Math.random() - 0.5) * 0.1;
        pixel.alpha = Math.max(0, Math.min(1, pixel.alpha));
        
        if (Math.random() > 0.99) {
          pixel.x = Math.random() * canvas.width;
          pixel.y = Math.random() * canvas.height;
        }

        ctx.fillStyle = `rgba(255, 255, 255, ${pixel.alpha * 0.2})`;
        ctx.fillRect(pixel.x, pixel.y, 2, 2);
      });

      // Scan line effect
      scanLineY += 3;
      if (scanLineY > canvas.height) scanLineY = 0;
      
      const gradient = ctx.createLinearGradient(0, scanLineY - 50, 0, scanLineY + 50);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
      gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.03)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, scanLineY - 50, canvas.width, 100);

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
      style={{ opacity: 0.6 }}
    />
  );
};
