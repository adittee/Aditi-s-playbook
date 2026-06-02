import { motion } from 'motion/react';
import { Terminal, Wrench, Users, MessagesSquare, Brain, ArrowLeft, Lightbulb, Compass } from 'lucide-react';
import { FloatingParticles } from './FloatingParticles';

interface FolderItem {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  position: { x: number; y: number };
  color: string;
}

const folders: FolderItem[] = [
  { id: 'events', name: 'EVENTS', icon: Terminal, position: { x: 25, y: 15 }, color: '#8b5cf6' },
  { id: 'community', name: 'COMMUNITY', icon: Users, position: { x: 25, y: 40 }, color: '#a78bfa' },
  { id: 'speaking', name: 'PUBLIC_SPEAKING', icon: MessagesSquare, position: { x: 25, y: 65 }, color: '#ec4899' },
  { id: 'practical', name: 'WORKSHOP.exe', icon: Lightbulb, position: { x: 50, y: 40 }, color: '#22d3ee' },
  { id: 'tools', name: 'TOOLS', icon: Wrench, position: { x: 75, y: 15 }, color: '#60a5fa' },
  { id: 'random', name: 'random.exe', icon: Brain, position: { x: 75, y: 40 }, color: '#a78bfa' },
  { id: 'journey', name: 'journey.exe', icon: Compass, position: { x: 75, y: 65 }, color: '#f472b6' },
];

interface DesktopProps {
  onFolderClick: (id: string) => void;
  onBackToAbout: () => void;
}

export function Desktop({ onFolderClick, onBackToAbout }: DesktopProps) {
  return (
    <div className="size-full relative bg-background p-8">
      <FloatingParticles />

      {/* Back to Archive button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        onClick={onBackToAbout}
        whileHover={{ scale: 1.05, x: -5 }}
        whileTap={{ scale: 0.95 }}
        className="absolute top-8 left-8 z-10 flex items-center gap-2 px-4 py-3 border-4 border-accent text-accent hover:bg-accent hover:text-space-black transition-all group"
        style={{ imageRendering: 'pixelated' }}
      >
        <ArrowLeft size={16} strokeWidth={3} className="group-hover:-translate-x-1 transition-transform" />
        <span className="text-xs uppercase tracking-wide">Back to Archive</span>
      </motion.button>

      {/* Pixel grid background */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(var(--nebula-purple) 1px, transparent 1px), linear-gradient(90deg, var(--nebula-purple) 1px, transparent 1px)',
          backgroundSize: '16px 16px',
          imageRendering: 'pixelated',
        }}
      />

      {/* Desktop grid with folders */}
      <div className="relative size-full">
        {folders.map((folder, index) => (
          <motion.button
            key={folder.id}
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: index * 0.1, type: 'spring', stiffness: 200 }}
            whileHover={{
              scale: 1.1,
              rotate: [0, -2, 2, -2, 0],
              transition: { rotate: { duration: 0.3 } }
            }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onFolderClick(folder.id)}
            className="absolute flex flex-col items-center gap-2 p-4 hover:bg-muted/30 transition-colors group border-2 border-transparent hover:border-current"
            style={{
              left: `${folder.position.x}%`,
              top: `${folder.position.y}%`,
              color: folder.color,
              imageRendering: 'pixelated',
            }}
          >
            <motion.div
              animate={{
                y: [0, -4, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.2,
              }}
            >
              <folder.icon
                size={56}
                strokeWidth={3}
                className="group-hover:drop-shadow-[0_0_12px_currentColor] transition-all filter"
                style={{ filter: 'drop-shadow(0 2px 0 rgba(0,0,0,0.5))' }}
              />
            </motion.div>
            <motion.span
              className="text-[10px] uppercase tracking-wide max-w-[100px] text-center leading-tight"
              whileHover={{ y: -2 }}
            >
              {folder.name}
            </motion.span>
          </motion.button>
        ))}
      </div>

      {/* Status bar */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="absolute bottom-0 left-0 right-0 h-10 bg-card border-t-4 border-primary px-4 flex items-center justify-between text-xs shadow-[0_-4px_20px_rgba(139,92,246,0.3)]"
        style={{ imageRendering: 'pixelated' }}
      >
        <div className="flex items-center gap-4">
          <motion.span
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-accent"
          >
            SYSTEM STATUS: ONLINE
          </motion.span>
          <span className="text-muted-foreground">|</span>
          <span className="text-muted-foreground">ARCHIVES: {folders.length} AVAILABLE</span>
        </div>
        <div className="flex items-center gap-2">
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-3 h-3 bg-accent"
            style={{ imageRendering: 'pixelated' }}
          />
          <span className="text-muted-foreground">READY</span>
        </div>
      </motion.div>
    </div>
  );
}
