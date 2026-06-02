import { motion } from 'motion/react';

export function CRTEffect() {
  return (
    <>
      {/* Scanlines */}
      <div
        className="pointer-events-none fixed inset-0 z-50"
        style={{
          background: 'repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0px, rgba(0, 0, 0, 0.2) 2px, transparent 2px, transparent 4px)',
          mixBlendMode: 'multiply',
        }}
      />

      {/* Cosmic glow */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-50"
        style={{
          boxShadow: 'inset 0 0 150px rgba(139, 92, 246, 0.15)',
        }}
        animate={{
          boxShadow: [
            'inset 0 0 150px rgba(139, 92, 246, 0.15)',
            'inset 0 0 200px rgba(167, 139, 250, 0.2)',
            'inset 0 0 150px rgba(139, 92, 246, 0.15)',
          ],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Vignette */}
      <div
        className="pointer-events-none fixed inset-0 z-50"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(10, 10, 21, 0.6) 100%)',
        }}
      />

      {/* Cosmic flicker */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-50 bg-primary"
        animate={{
          opacity: [0, 0.02, 0, 0.01, 0],
        }}
        transition={{
          duration: 0.1,
          repeat: Infinity,
          repeatDelay: 5,
        }}
      />

      {/* Purple shift effect */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-50"
        style={{
          background: 'linear-gradient(90deg, rgba(139,92,246,0.03) 0%, rgba(167,139,250,0.03) 50%, rgba(96,165,250,0.03) 100%)',
          mixBlendMode: 'screen',
        }}
        animate={{
          x: [0, 2, 0, -2, 0],
        }}
        transition={{
          duration: 0.3,
          repeat: Infinity,
          repeatDelay: 4,
        }}
      />
    </>
  );
}
