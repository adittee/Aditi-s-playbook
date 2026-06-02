import { motion } from 'motion/react';
import { X, Minus, Square } from 'lucide-react';
import { useState, useEffect } from 'react';
import { MUNContent } from './content/MUNContent';
import { CommunityContent } from './content/CommunityContent';
import { EventsContent } from './content/EventsContent';
import { SpeakingContent } from './content/SpeakingContent';
import { MistakesContent } from './content/MistakesContent';
import { ToolsContent } from './content/ToolsContent';
import { RandomContent } from './content/RandomContent';
import { SkillsContent } from './content/SkillsContent';

interface FolderWindowProps {
  folderId: string;
  folderName: string;
  onClose: () => void;
}

const contentMap: Record<string, React.ComponentType> = {
  mun: MUNContent,
  community: CommunityContent,
  events: EventsContent,
  speaking: SpeakingContent,
  mistakes: MistakesContent,
  tools: ToolsContent,
  random: RandomContent,
  skills: SkillsContent,
};

export function FolderWindow({ folderId, folderName, onClose }: FolderWindowProps) {
  const [isMinimized, setIsMinimized] = useState(false);
  const Content = contentMap[folderId];

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  if (isMinimized) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-10 left-4 bg-card border border-border px-4 py-2 cursor-pointer"
        onClick={() => setIsMinimized(false)}
      >
        <span className="text-foreground text-sm">{folderName}</span>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, rotateX: 90 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      drag
      dragMomentum={false}
      className="fixed inset-0 flex items-center justify-center pointer-events-none p-4 z-50"
    >
      <motion.div
        className="w-full max-w-4xl max-h-[80vh] bg-card border-4 border-primary pointer-events-auto flex flex-col"
        style={{
          imageRendering: 'pixelated',
          boxShadow: '0 0 30px rgba(0,255,255,0.4), inset 0 0 20px rgba(0,255,255,0.1)',
        }}
        animate={{
          boxShadow: [
            '0 0 30px rgba(0,255,255,0.4), inset 0 0 20px rgba(0,255,255,0.1)',
            '0 0 40px rgba(0,255,255,0.6), inset 0 0 25px rgba(0,255,255,0.15)',
            '0 0 30px rgba(0,255,255,0.4), inset 0 0 20px rgba(0,255,255,0.1)',
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {/* Window header */}
        <motion.div
          className="bg-primary text-primary-foreground px-4 py-3 flex items-center justify-between cursor-move border-b-4 border-primary relative overflow-hidden"
          whileHover={{ backgroundColor: 'var(--retro-green)' }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={{
              x: ['-100%', '200%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
          <span className="uppercase tracking-wide text-xs relative z-10">{folderName}</span>
          <div className="flex items-center gap-2 relative z-10">
            <motion.button
              onClick={() => setIsMinimized(true)}
              whileHover={{ scale: 1.2, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              className="hover:bg-primary-foreground/20 p-1.5 border-2 border-primary-foreground transition-colors"
            >
              <Minus size={14} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="hover:bg-primary-foreground/20 p-1.5 border-2 border-primary-foreground transition-colors"
            >
              <Square size={12} />
            </motion.button>
            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.2, backgroundColor: 'var(--destructive)' }}
              whileTap={{ scale: 0.9 }}
              className="hover:bg-destructive p-1.5 border-2 border-primary-foreground transition-colors"
            >
              <X size={14} />
            </motion.button>
          </div>
        </motion.div>

        {/* Window content */}
        <div className="flex-1 overflow-y-auto p-6 bg-card/95 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {Content ? <Content /> : (
              <div className="text-muted-foreground">
                <p className="mb-4">Content loading...</p>
                <p className="text-sm">This section is under construction.</p>
              </div>
            )}
          </motion.div>
        </div>

        {/* Window footer */}
        <motion.div
          className="bg-muted px-4 py-2 border-t-4 border-border text-xs text-muted-foreground flex items-center justify-between"
          animate={{
            backgroundColor: ['var(--muted)', 'var(--muted-blue)', 'var(--muted)'],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <span>Press ESC to close</span>
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ▮
          </motion.span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
