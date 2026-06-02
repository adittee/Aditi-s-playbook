import { motion } from 'motion/react';

interface GlitchTextProps {
  children: string;
  className?: string;
}

export function GlitchText({ children, className = '' }: GlitchTextProps) {
  return (
    <div className={`relative inline-block ${className}`}>
      <motion.span
        className="relative z-10"
        animate={{
          textShadow: [
            '0 0 0px transparent',
            '2px 0 3px rgba(139,92,246,0.8), -2px 0 3px rgba(236,72,153,0.8)',
            '0 0 0px transparent',
          ],
        }}
        transition={{
          duration: 0.2,
          repeat: Infinity,
          repeatDelay: 3,
        }}
      >
        {children}
      </motion.span>

      <motion.span
        className="absolute top-0 left-0 z-0"
        style={{ mixBlendMode: 'screen', color: '#8b5cf6' }}
        animate={{
          x: [0, -2, 2, 0],
          opacity: [0, 0.5, 0],
        }}
        transition={{
          duration: 0.3,
          repeat: Infinity,
          repeatDelay: 4,
        }}
      >
        {children}
      </motion.span>

      <motion.span
        className="absolute top-0 left-0 z-0"
        style={{ mixBlendMode: 'screen', color: '#ec4899' }}
        animate={{
          x: [0, 2, -2, 0],
          opacity: [0, 0.5, 0],
        }}
        transition={{
          duration: 0.3,
          repeat: Infinity,
          repeatDelay: 4,
          delay: 0.1,
        }}
      >
        {children}
      </motion.span>
    </div>
  );
}
