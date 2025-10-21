import { useEffect, useRef } from 'react';

export const BZReactionBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const gridSize = 8; // Increased from 4 to 8 for better performance
    const cols = Math.ceil(canvas.width / gridSize);
    const rows = Math.ceil(canvas.height / gridSize);

    let gridA = Array(cols).fill(0).map(() => Array(rows).fill(1.0));
    let gridB = Array(cols).fill(0).map(() => Array(rows).fill(0.0));

    // Initialize with fewer spiral seeds
    const seedPoints = [
      { x: Math.floor(cols * 0.4), y: Math.floor(rows * 0.4) },
      { x: Math.floor(cols * 0.6), y: Math.floor(rows * 0.6) },
    ];

    seedPoints.forEach(point => {
      for (let i = -3; i < 3; i++) {
        for (let j = -3; j < 3; j++) {
          const x = point.x + i;
          const y = point.y + j;
          if (x >= 0 && x < cols && y >= 0 && y < rows) {
            gridA[x][y] = Math.random();
            gridB[x][y] = Math.random();
          }
        }
      }
    });

    // Gray-Scott reaction-diffusion parameters tuned for spiral waves
    const dA = 1.0;
    const dB = 0.5;
    const feed = 0.055;
    const kill = 0.062;

    const chars = ['█', '▓', '▒', '░', '●', '○'];
    const dots = ['●', '○', '▪', '▫'];

    let frameCount = 0;

    const laplacian = (grid: number[][], x: number, y: number): number => {
      let sum = 0;
      sum += grid[x][y] * -1;
      sum += grid[(x - 1 + cols) % cols][y] * 0.2;
      sum += grid[(x + 1) % cols][y] * 0.2;
      sum += grid[x][(y - 1 + rows) % rows] * 0.2;
      sum += grid[x][(y + 1) % rows] * 0.2;
      sum += grid[(x - 1 + cols) % cols][(y - 1 + rows) % rows] * 0.05;
      sum += grid[(x + 1) % cols][(y - 1 + rows) % rows] * 0.05;
      sum += grid[(x - 1 + cols) % cols][(y + 1) % rows] * 0.05;
      sum += grid[(x + 1) % cols][(y + 1) % rows] * 0.05;
      return sum;
    };

    const animate = () => {
      const nextA = Array(cols).fill(0).map(() => Array(rows).fill(0));
      const nextB = Array(cols).fill(0).map(() => Array(rows).fill(0));

      // Reaction-diffusion computation
      for (let x = 0; x < cols; x++) {
        for (let y = 0; y < rows; y++) {
          const a = gridA[x][y];
          const b = gridB[x][y];
          const reaction = a * b * b;

          nextA[x][y] = a + (dA * laplacian(gridA, x, y) - reaction + feed * (1 - a));
          nextB[x][y] = b + (dB * laplacian(gridB, x, y) + reaction - (kill + feed) * b);

          nextA[x][y] = Math.max(0, Math.min(1, nextA[x][y]));
          nextB[x][y] = Math.max(0, Math.min(1, nextB[x][y]));
        }
      }

      gridA = nextA;
      gridB = nextB;

      // Render with ASCII characters (skip every other frame for performance)
      if (frameCount % 2 === 0) {
        ctx.fillStyle = '#121212';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.font = `${gridSize}px "Share Tech Mono", monospace`;
        ctx.textBaseline = 'top';

        for (let x = 0; x < cols; x += 2) { // Skip every other column
          for (let y = 0; y < rows; y += 2) { // Skip every other row
            const value = gridB[x][y];
            
            if (value > 0.15) { // Higher threshold
              const intensity = Math.floor(value * 255);
              ctx.fillStyle = `rgb(${intensity}, ${intensity}, ${intensity})`;
              
              // Simplified character selection
              let char;
              if (value > 0.7) {
                char = dots[Math.floor(value * dots.length)];
              } else {
                char = chars[Math.floor(value * chars.length)];
              }
              
              ctx.fillText(char, x * gridSize, y * gridSize);
            }
          }
        }
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
      style={{ opacity: 0.15 }}
    />
  );
};
