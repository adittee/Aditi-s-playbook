import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Wrench, Search, Calendar, Sparkles } from 'lucide-react';
import { GlitchText } from '../GlitchText';

const tabs = [
  {
    id: 'research',
    label: 'Research',
    icon: Search,
    content: {
      intro: "Depending upon what exactly you're researching (and it makes a LOT of difference), here's what works:",
      tools: [
        {
          name: "Google Scholar",
          url: "https://scholar.google.com/",
          description: "Why not Google?",
          details: "You can use that too, but keep Scholar as your base. It's authentic and credible. No fake news here. This should be your foundation for getting the most credible information about almost anything.",
        },
        {
          name: "NotebookLM",
          url: "https://notebooklm.google/",
          description: "This is a game changer.",
          details: "If you know how to use this tool properly, you probably need nothing else. Here's a tutorial to get you started, but you'll need more practice:",
          tutorialUrl: "https://www.youtube.com/watch?v=kAE6PVft0C4",
        },
      ],
      outro: "Well, there are so much more, but I think for now this will do.",
    },
  },
  {
    id: 'planning',
    label: 'Planning',
    icon: Calendar,
    content: {
      intro: "Few things I use are as follows:",
      tools: [
        {
          name: "Notion",
          url: "https://www.notion.com/",
          description: "The all-in-one workspace.",
          details: "Here are some tutorials to get you started:",
          tutorials: [
            { name: "The basics (English & Hindi)", url: "https://www.youtube.com/watch?v=GzMFRoMr4EA" },
            { name: "One more if needed", url: "https://youtube.com/watch?v=92LK3J0ZykA" },
          ],
          extra: "Once you're clear with basics, here's the official YouTube channel — they have everything you'll need to know and even more:",
          extraUrl: "https://www.youtube.com/@Notion",
        },
        {
          name: "Gamma",
          url: "https://gamma.app/",
          description: "Will save you SO much time making presentations and more.",
          details: "Tutorial:",
          tutorialUrl: "https://www.youtube.com/watch?v=dUaJL8VDtdc&t=476s",
        },
      ],
    },
  },
  {
    id: 'others',
    label: 'Others',
    icon: Sparkles,
    content: {
      intro: "Not exactly public speaking specific, but these will help you:",
      tools: [
        {
          name: "LLMs (ChatGPT, Gemini, Claude, Perplexity)",
          description: "At some point, they'll be more important than your girlfriend/boyfriend.",
          details: "Learn to use them. Seriously. They're game-changers for research, brainstorming, drafting, practicing arguments, and so much more.",
        },
        {
          name: "Canva",
          url: "https://www.canva.com/",
          description: "It's much more useful than you think it is.",
          details: "This can get you started, but you'll need hell lots of practice:",
          tutorialUrl: "https://www.youtube.com/watch?v=J0jE0OsF1zo",
        },
        {
          name: "Impromptu Speaking Practice",
          url: "https://randomtopicgen.com/",
          description: "Okay, one for public speaking too.",
          details: "This website gives you a random topic, then you have to think about it for a minute or two, and then you speak about it. You can record yourself while doing it. It helps more than you think.",
        },
      ],
      outro: "Hope it helps. ✨",
    },
  },
];

// Helper function to render text with clickable URLs
const renderTextWithLinks = (text: string) => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = text.split(urlRegex);

  return (
    <>
      {parts.map((part, i) => {
        if (part.match(urlRegex)) {
          return (
            <a
              key={i}
              href={part}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-primary underline transition-colors"
            >
              {part}
            </a>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
};

export function ToolsContent() {
  const [activeTab, setActiveTab] = useState<string>('research');

  const currentTab = tabs.find(t => t.id === activeTab)!;

  return (
    <div className="h-full flex flex-col">
      {/* Intro message */}
      <div className="border-4 border-accent bg-accent/5 p-6 mb-6" style={{ imageRendering: 'pixelated' }}>
        <div className="flex items-start gap-4">
          <Wrench className="text-accent flex-shrink-0 mt-1" size={24} strokeWidth={3} />
          <div className="space-y-3 flex-1">
            <p className="text-lg text-foreground/90 leading-relaxed">
              First of all, take a sip of water. Congratulations. And thank youuu if you've made it till here.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              Half of the population will be lost even before that. You're genuinely curious, and I love curious minds.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              Well, here's the list of a few tools and resources I use. There are thousands better than this, and you should never stop exploring. But this is what works for me, and this might give you a head start.
            </p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-2 px-6 py-3 border-4 transition-all ${
              activeTab === tab.id
                ? 'border-primary bg-primary text-primary-foreground'
                : 'border-border bg-card text-foreground hover:border-primary/50'
            }`}
            style={{ imageRendering: 'pixelated' }}
          >
            <tab.icon size={16} strokeWidth={3} />
            <span className="text-xs uppercase">{tab.label}</span>
          </motion.button>
        ))}
      </div>

      {/* Tab content */}
      <div className="flex-1 overflow-y-auto pr-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {/* Tab intro */}
            <p className="text-lg text-foreground/90 leading-relaxed">
              {currentTab.content.intro}
            </p>

            {/* Tools list */}
            <div className="space-y-6">
              {currentTab.content.tools.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border-4 border-primary bg-card/50 p-6 space-y-3"
                  style={{ imageRendering: 'pixelated' }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-primary text-base">
                      <GlitchText>{tool.name}</GlitchText>
                    </h3>
                    {tool.url && (
                      <a
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-primary underline text-sm flex-shrink-0"
                      >
                        Visit →
                      </a>
                    )}
                  </div>

                  {tool.description && (
                    <p className="text-base text-accent font-medium">
                      {tool.description}
                    </p>
                  )}

                  {tool.details && (
                    <p className="text-base text-foreground/90 leading-relaxed">
                      {renderTextWithLinks(tool.details)}
                    </p>
                  )}

                  {tool.tutorialUrl && (
                    <a
                      href={tool.tutorialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-accent hover:text-primary underline text-base"
                    >
                      → Tutorial
                    </a>
                  )}

                  {tool.tutorials && (
                    <div className="space-y-2 ml-4">
                      {tool.tutorials.map((tutorial, i) => (
                        <a
                          key={i}
                          href={tutorial.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-accent hover:text-primary underline text-base"
                        >
                          → {tutorial.name}
                        </a>
                      ))}
                    </div>
                  )}

                  {tool.extra && (
                    <div className="space-y-2 pt-2 border-t-2 border-border">
                      <p className="text-sm text-foreground/80">
                        {tool.extra}
                      </p>
                      {tool.extraUrl && (
                        <a
                          href={tool.extraUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-accent hover:text-primary underline text-base"
                        >
                          → Official Notion Channel
                        </a>
                      )}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Tab outro */}
            {currentTab.content.outro && (
              <p className="text-base text-foreground/80 leading-relaxed italic">
                {currentTab.content.outro}
              </p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
