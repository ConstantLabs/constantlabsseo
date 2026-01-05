// Static CSS dot grid - replaces expensive canvas animation
export const HackerBackground = () => {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        opacity: 0.2,
        backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.45) 2px, transparent 1.5px)',
        backgroundSize: '80px 80px',
      }}
    />
  );
};