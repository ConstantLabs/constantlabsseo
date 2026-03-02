import { useEffect, useRef } from "react";

export const HackerBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let w = 0;
    let h = 0;

    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
      pulse: number;
    }[] = [];

    const colors = [
      "80, 160, 145",  // matte cyan
      "145, 95, 180",  // matte purple
      "170, 75, 130",  // matte magenta
      "185, 145, 70",  // matte amber
      "80, 155, 105",  // matte green
    ];

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    const init = () => {
      resize();
      particles.length = 0;
      // Scale particle count to screen — ~150 on 1080p, fewer on mobile
      const count = Math.floor((w * h) / 12000);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 1.5 + 0.5,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: Math.random() * 0.7 + 0.3,
          pulse: Math.random() * Math.PI * 2,
        });
      }
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, w, h);

      // Subtle gradient orbs that drift
      const t = time * 0.0001;
      const orbX1 = w * 0.3 + Math.sin(t * 0.7) * w * 0.15;
      const orbY1 = h * 0.4 + Math.cos(t * 0.5) * h * 0.15;
      const grad1 = ctx.createRadialGradient(orbX1, orbY1, 0, orbX1, orbY1, w * 0.35);
      grad1.addColorStop(0, "rgba(80, 160, 145, 0.08)");
      grad1.addColorStop(1, "transparent");
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, w, h);

      const orbX2 = w * 0.7 + Math.cos(t * 0.6) * w * 0.15;
      const orbY2 = h * 0.6 + Math.sin(t * 0.8) * h * 0.15;
      const grad2 = ctx.createRadialGradient(orbX2, orbY2, 0, orbX2, orbY2, w * 0.3);
      grad2.addColorStop(0, "rgba(145, 95, 180, 0.07)");
      grad2.addColorStop(1, "transparent");
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, w, h);

      // Draw and update particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += 0.01;

        // Wrap around
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        const flicker = p.alpha * (0.7 + 0.3 * Math.sin(p.pulse));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${flicker})`;
        ctx.fill();
      }

      // Draw faint connections between nearby particles
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = dx * dx + dy * dy;
          if (dist < 15000) {
            const alpha = (1 - dist / 15000) * 0.2;
            ctx.strokeStyle = `rgba(${particles[i].color}, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };

    init();
    animId = requestAnimationFrame(draw);
    window.addEventListener("resize", init);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", init);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.8 }}
    />
  );
};
