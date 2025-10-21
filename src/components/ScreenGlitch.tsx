import { useEffect, useState } from 'react';

export const ScreenGlitch = () => {
  const [glitches, setGlitches] = useState<Array<{
    id: number;
    type: 'tear' | 'corruption' | 'pixel';
    style: React.CSSProperties;
  }>>([]);

  useEffect(() => {
    const createGlitch = () => {
      // Reduced frequency
      if (Math.random() > 0.85) {
        const type = Math.random() > 0.6 ? 'tear' : 'corruption';
        const id = Date.now() + Math.random();
        
        let style: React.CSSProperties = {};
        
        if (type === 'tear') {
          // Horizontal screen tear
          style = {
            position: 'fixed',
            left: 0,
            top: `${Math.random() * 100}%`,
            width: '100%',
            height: `${Math.random() * 8 + 2}px`,
            background: 'rgba(255, 255, 255, 0.08)',
            transform: `translateX(${Math.random() * 60 - 30}px)`,
            zIndex: 50,
          };
        } else {
          // Data corruption block
          style = {
            position: 'fixed',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 150 + 40}px`,
            height: `${Math.random() * 80 + 20}px`,
            background: `rgba(255, 255, 255, ${Math.random() * 0.08})`,
            mixBlendMode: 'difference',
            zIndex: 50,
          };
        }

        setGlitches(prev => [...prev, { id, type, style }]);

        // Remove after short time
        setTimeout(() => {
          setGlitches(prev => prev.filter(g => g.id !== id));
        }, Math.random() * 150 + 50);
      }
    };

    const interval = setInterval(createGlitch, 200); // Slower rate
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {glitches.map(glitch => (
        <div key={glitch.id} style={glitch.style} className="pointer-events-none" />
      ))}
    </>
  );
};
