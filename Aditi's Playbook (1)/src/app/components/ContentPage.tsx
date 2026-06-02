import { motion } from 'motion/react';
import { ArrowLeft, X } from 'lucide-react';
import { useEffect } from 'react';
import { CommunityContent } from './content/CommunityContent';
import { EventsContent } from './content/EventsContent';
import { SpeakingContent } from './content/SpeakingContent';
import { PracticalContent } from './content/PracticalContent';
import { ToolsContent } from './content/ToolsContent';
import { RandomContent } from './content/RandomContent';
import { JourneyContent } from './content/JourneyContent';

interface ContentPageProps {
  folderId: string;
  onBack: () => void;
}

const contentMap: Record<string, React.ComponentType> = {
  community: CommunityContent,
  events: EventsContent,
  speaking: SpeakingContent,
  practical: PracticalContent,
  tools: ToolsContent,
  random: RandomContent,
  journey: JourneyContent,
};

const folderNames: Record<string, string> = {
  community: 'COMMUNITY',
  events: 'EVENTS',
  speaking: 'PUBLIC_SPEAKING',
  practical: 'WORKSHOP.exe',
  tools: 'TOOLS',
  random: 'random.exe',
  journey: 'journey.exe',
};

export function ContentPage({ folderId, onBack }: ContentPageProps) {
  const Content = contentMap[folderId];
  const folderName = folderNames[folderId];

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onBack();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onBack]);

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'tween', duration: 0.3 }}
      className="size-full bg-background flex flex-col"
    >
      {/* Header bar */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-card border-b-4 border-primary px-6 py-4 flex items-center justify-between shadow-[0_4px_20px_rgba(139,92,246,0.3)]"
        style={{ imageRendering: 'pixelated' }}
      >
        <div className="flex items-center gap-4">
          <motion.button
            onClick={onBack}
            whileHover={{ scale: 1.1, x: -4 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 px-4 py-2 border-4 border-accent bg-accent text-accent-foreground hover:bg-transparent hover:text-accent transition-all"
            style={{ imageRendering: 'pixelated' }}
          >
            <ArrowLeft size={16} strokeWidth={3} />
            <span className="text-[10px] uppercase">BACK</span>
          </motion.button>

          <div className="h-8 w-1 bg-border" />

          <h1 className="text-primary text-sm uppercase tracking-wider">
            {folderName}
          </h1>
        </div>

        <motion.button
          onClick={onBack}
          whileHover={{ scale: 1.2, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 border-4 border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground transition-all"
          style={{ imageRendering: 'pixelated' }}
        >
          <X size={16} strokeWidth={3} />
        </motion.button>
      </motion.div>

      {/* Content area */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex-1 overflow-y-auto p-8"
      >
        <div className="max-w-5xl mx-auto">
          {Content ? <Content /> : (
            <div className="text-muted-foreground text-center py-20">
              <p className="mb-4 text-sm">Content loading...</p>
              <p className="text-xs">This section is under construction.</p>
            </div>
          )}
        </div>
      </motion.div>

      {/* Footer bar */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="bg-card border-t-4 border-border px-6 py-3 flex items-center justify-between text-xs"
        style={{ imageRendering: 'pixelated' }}
      >
        <div className="flex items-center gap-3">
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-3 h-3 bg-primary"
            style={{ imageRendering: 'pixelated' }}
          />
          <span className="text-muted-foreground uppercase">Press ESC or click BACK to return</span>
        </div>
        <span className="text-muted-foreground">{folderName}</span>
      </motion.div>
    </motion.div>
  );
}
