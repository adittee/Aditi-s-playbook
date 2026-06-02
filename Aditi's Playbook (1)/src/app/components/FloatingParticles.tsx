import { motion } from 'motion/react';

export function FloatingParticles() {
  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: 8 + Math.random() * 12,
    delay: Math.random() * 5,
    size: 2 + Math.random() * 4,
    color: ['#8b5cf6', '#a78bfa', '#60a5fa', '#ec4899'][Math.floor(Math.random() * 4)],
  }));

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden opacity-50 z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: particle.color,
            boxShadow: `0 0 12px ${particle.color}`,
            imageRendering: 'pixelated',
          }}
          animate={{
            y: [-20, -150],
            x: [0, Math.random() * 40 - 20],
            opacity: [0, 0.8, 0.8, 0],
            scale: [0.5, 1.2, 1.2, 0.5],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}

      {/* Twinkling stars */}
      {Array.from({ length: 20 }, (_, i) => ({
        id: `star-${i}`,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 3,
      })).map((star) => (
        <motion.div
          key={star.id}
          className="absolute w-1 h-1"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            background: '#a78bfa',
            boxShadow: '0 0 4px #a78bfa',
            imageRendering: 'pixelated',
          }}
          animate={{
            scale: [0, 1.5, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            delay: star.delay,
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  );
}
