import { useEffect, useRef } from 'react';

export const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const fontSize = 16; // Increased font size
    const columns = Math.floor(canvas.width / fontSize / 2); // Half the columns
    const drops: number[] = Array(columns).fill(1);

    // Mix of characters: binary, hex, symbols, and hacker text
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンABCDEF0123456789@#$%^&*(){}[]<>/\\|';
    const hackerWords = ['BREACH', 'ACCESS', 'DENIED', 'ROOT', 'ADMIN', 'HACK', 'EXPLOIT', 'SYSTEM', 'ERROR', 'WARNING'];

    const animate = () => {
      // Fade effect
      ctx.fillStyle = 'rgba(18, 18, 18, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px "Share Tech Mono", monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Simplified character selection
        let text;
        if (Math.random() > 0.99) {
          text = hackerWords[Math.floor(Math.random() * hackerWords.length)];
          ctx.fillStyle = '#ffffff';
        } else {
          text = chars[Math.floor(Math.random() * chars.length)];
          const opacity = Math.random() * 0.4 + 0.2;
          ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        }

        const x = i * fontSize * 2; // Adjusted spacing
        const y = drops[i] * fontSize;

        ctx.fillText(text, x, y);

        // Reset drop randomly
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const interval = setInterval(animate, 50); // Slower update rate

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[1] pointer-events-none"
      style={{ opacity: 0.15 }}
    />
  );
};
