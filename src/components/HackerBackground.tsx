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

    // Network nodes at the bottom
    const networkNodes: Array<{ x: number; y: number; radius: number; connections: number[] }> = [];
    const nodeCount = 20;
    
    for (let i = 0; i < nodeCount; i++) {
      networkNodes.push({
        x: (canvas.width / nodeCount) * i + Math.random() * 40,
        y: canvas.height - 100 - Math.random() * 100,
        radius: 3 + Math.random() * 5,
        connections: [],
      });
    }
    
    // Create connections between nearby nodes
    for (let i = 0; i < networkNodes.length; i++) {
      for (let j = i + 1; j < networkNodes.length && j < i + 3; j++) {
        if (Math.random() > 0.3) {
          networkNodes[i].connections.push(j);
        }
      }
    }

    // Random glitch pixels - reduced count
    const glitchPixels: Array<{ x: number; y: number; alpha: number; vx: number; vy: number }> = [];
    for (let i = 0; i < 50; i++) { // Reduced from 150 to 50
      glitchPixels.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        alpha: Math.random(),
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
      });
    }

    // Grid lines - reduced count
    const gridLines: Array<{ x1: number; y1: number; x2: number; y2: number; alpha: number }> = [];
    for (let i = 0; i < 15; i++) { // Reduced from 30 to 15
      gridLines.push({
        x1: Math.random() * canvas.width,
        y1: Math.random() * canvas.height,
        x2: Math.random() * canvas.width,
        y2: Math.random() * canvas.height,
        alpha: Math.random() * 0.2,
      });
    }

    // Scan lines
    let scanLineY = 0;
    let frameCount = 0;
    
    const animate = () => {
      // Clear with higher opacity for less trail (better performance)
      ctx.fillStyle = 'rgba(18, 18, 18, 0.2)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw network connections
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1;
      networkNodes.forEach((node, i) => {
        node.connections.forEach(targetIdx => {
          const target = networkNodes[targetIdx];
          if (Math.random() > 0.95) {
            ctx.strokeStyle = `rgba(255, 255, 255, ${Math.random() * 0.15})`;
          } else {
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
          }
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(target.x, target.y);
          ctx.stroke();
        });
      });
      
      // Draw network nodes
      networkNodes.forEach(node => {
        // Node glow
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius * 3);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.1)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 3, 0, Math.PI * 2);
        ctx.fill();
        
        // Node core
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.3 + 0.2})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
        
        // Pulse effect on random nodes
        if (Math.random() > 0.98) {
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius * 2, 0, Math.PI * 2);
          ctx.stroke();
        }
      });

      // Draw grid lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
      ctx.lineWidth = 1;
      gridLines.forEach(line => {
        if (Math.random() > 0.98) {
          line.alpha = Math.random() * 0.3;
        }
        ctx.globalAlpha = line.alpha;
        ctx.beginPath();
        ctx.moveTo(line.x1, line.y1);
        ctx.lineTo(line.x2, line.y2);
        ctx.stroke();
      });
      ctx.globalAlpha = 1;

      // Draw glitch pixels with movement
      glitchPixels.forEach(pixel => {
        pixel.alpha += (Math.random() - 0.5) * 0.15;
        pixel.alpha = Math.max(0, Math.min(1, pixel.alpha));
        
        pixel.x += pixel.vx;
        pixel.y += pixel.vy;
        
        if (pixel.x < 0 || pixel.x > canvas.width || pixel.y < 0 || pixel.y > canvas.height || Math.random() > 0.99) {
          pixel.x = Math.random() * canvas.width;
          pixel.y = Math.random() * canvas.height;
          pixel.vx = (Math.random() - 0.5) * 2;
          pixel.vy = (Math.random() - 0.5) * 2;
        }

        const size = pixel.alpha > 0.5 ? 3 : 2;
        ctx.fillStyle = `rgba(255, 255, 255, ${pixel.alpha * 0.3})`;
        ctx.fillRect(pixel.x, pixel.y, size, size);
      });

      // Scan line effect - less frequent
      scanLineY += 5;
      if (scanLineY > canvas.height) scanLineY = 0;
      
      if (frameCount % 2 === 0) {
        const gradient = ctx.createLinearGradient(0, scanLineY - 60, 0, scanLineY + 60);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
        gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.04)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, scanLineY - 60, canvas.width, 120);
      }

      // Occasional horizontal glitch bars - less frequent
      if (Math.random() > 0.99) {
        const barY = Math.random() * canvas.height;
        const barHeight = Math.random() * 4 + 2;
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.15})`;
        ctx.fillRect(0, barY, canvas.width, barHeight);
      }

      frameCount++;

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
