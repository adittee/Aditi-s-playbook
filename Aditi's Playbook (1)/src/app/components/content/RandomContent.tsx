import { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

const insights = [
  "Most people aren't afraid of public speaking. They're afraid of being remembered incorrectly.",
  "Confidence is preparation wearing a disguise.",
  "The difference between networking and friendship is intention. Drop the intention.",
  "Every expert was once confused by the basics. They just didn't quit.",
  "Opportunities don't wait for perfect timing. They reward action over readiness.",
  "Communities form around shared problems, not shared interests.",
  "The best feedback feels uncomfortable because it points at what you can't see.",
  "Motivation fades. Systems persist. Build systems.",
  "Asking obvious questions teaches you more than pretending to understand.",
  "Leadership isn't about having answers. It's about asking better questions.",
  "Failure becomes data when you write it down.",
  "People remember how you made them feel, not what you said.",
  "The gap between knowing and doing is where most dreams die.",
  "Uncomfortable conversations build stronger teams than comfortable silence.",
  "Your first version will be bad. Ship it anyway.",
];

export function RandomContent() {
  const [currentInsight, setCurrentInsight] = useState(0);
  const [fadeKey, setFadeKey] = useState(0);

  const getRandomInsight = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * insights.length);
    } while (newIndex === currentInsight);
    setCurrentInsight(newIndex);
    setFadeKey(prev => prev + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] space-y-8 py-12">
      <motion.div
        className="text-center space-y-2"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <h3 className="text-accent uppercase tracking-wider text-[10px]">Random Thought Generator</h3>
        <motion.p
          className="text-[8px] text-muted-foreground"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Click to reveal insights, lessons, and realizations
        </motion.p>
      </motion.div>

      <motion.div
        key={fadeKey}
        initial={{ opacity: 0, scale: 0.8, rotateX: -90 }}
        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
        transition={{ type: 'spring', stiffness: 200 }}
        className="max-w-xl text-center"
      >
        <motion.div
          className="p-8 border-4 border-accent bg-accent/5 relative"
          style={{ imageRendering: 'pixelated' }}
          animate={{
            boxShadow: [
              '0 0 20px rgba(167,139,250,0.3)',
              '0 0 30px rgba(167,139,250,0.5)',
              '0 0 20px rgba(167,139,250,0.3)',
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="absolute -top-1 -left-1 w-8 h-8 border-t-4 border-l-4 border-accent"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
          <motion.div
            className="absolute -top-1 -right-1 w-8 h-8 border-t-4 border-r-4 border-accent"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.25 }}
          />
          <motion.div
            className="absolute -bottom-1 -left-1 w-8 h-8 border-b-4 border-l-4 border-accent"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
          />
          <motion.div
            className="absolute -bottom-1 -right-1 w-8 h-8 border-b-4 border-r-4 border-accent"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.75 }}
          />

          <motion.p
            className="text-base text-foreground leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            "{insights[currentInsight]}"
          </motion.p>
        </motion.div>
      </motion.div>

      <motion.button
        onClick={getRandomInsight}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          boxShadow: [
            '0 0 10px rgba(167,139,250,0.3)',
            '0 0 20px rgba(167,139,250,0.5)',
            '0 0 10px rgba(167,139,250,0.3)',
          ],
        }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="group flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground border-4 border-accent hover:bg-transparent hover:text-accent transition-all duration-200 uppercase text-[10px] tracking-wider"
        style={{ imageRendering: 'pixelated' }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        >
          <Sparkles size={16} />
        </motion.div>
        Generate Random Thought
      </motion.button>

      <motion.div
        className="text-center text-[8px] text-muted-foreground"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <p>{insights.length} thoughts archived</p>
        <p className="mt-1">Viewing: {currentInsight + 1} / {insights.length}</p>
      </motion.div>
    </div>
  );
}
