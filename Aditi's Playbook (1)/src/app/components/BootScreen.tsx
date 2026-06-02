import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface BootScreenProps {
  onComplete: () => void;
}

export function BootScreen({ onComplete }: BootScreenProps) {
  const [currentLine, setCurrentLine] = useState(0);
  const [showButton, setShowButton] = useState(false);

  const bootSequence = [
    'Loading...',
    'Archive ready.',
  ];

  useEffect(() => {
    if (currentLine < bootSequence.length) {
      const timer = setTimeout(() => {
        setCurrentLine(currentLine + 1);
      }, 400);
      return () => clearTimeout(timer);
    } else {
      const buttonTimer = setTimeout(() => {
        setShowButton(true);
      }, 300);
      return () => clearTimeout(buttonTimer);
    }
  }, [currentLine]);

  return (
    <div className="size-full flex flex-col items-center justify-center bg-background p-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary text-xl uppercase tracking-widest"
          >
            Field Notes
          </motion.h1>

          <div className="space-y-2 min-h-[60px]">
            {bootSequence.slice(0, currentLine).map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-foreground text-sm text-center"
              >
                {line}
              </motion.div>
            ))}

            {currentLine < bootSequence.length && (
              <motion.div
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="text-foreground text-sm text-center"
              >
                _
              </motion.div>
            )}
          </div>
        </div>

        {showButton && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center"
          >
            <motion.button
              onClick={onComplete}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-primary text-primary-foreground border-4 border-primary hover:bg-transparent hover:text-primary transition-all uppercase text-[10px] tracking-widest"
              style={{ imageRendering: 'pixelated' }}
            >
              Enter
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
