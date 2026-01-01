import { useEffect, useState } from 'react';

/* ============================================
   StarField Component
   Creates an animated starry background effect
   representing the celestial/heavenly theme
============================================ */

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

const StarField = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    // Generate random stars on mount
    const generatedStars: Star[] = [];
    const starCount = 80;

    for (let i = 0; i < starCount; i++) {
      generatedStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 5,
        duration: Math.random() * 3 + 2,
      });
    }

    setStars(generatedStars);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      {/* Subtle radial glow from center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--primary)/0.08)_0%,_transparent_70%)]" />
      
      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-star animate-twinkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
            opacity: 0.3,
          }}
        />
      ))}
    </div>
  );
};

export default StarField;
