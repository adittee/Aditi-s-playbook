import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Terminal, ChevronDown, ExternalLink } from 'lucide-react';

interface AboutPageProps {
  onContinue: () => void;
}

const storyText = [
  "Hi. I'm Aditi Saxena.",
  "",
  "I'm 20. From a small town in Rajasthan called Alwar. Regular schooling. Normal upbringing. Nothing fancy. Nothing elite.",
  "",
  "Just a girl who accidentally fell in love with a microphone when she was four years old.",
  "",
  "And somehow turned that accident into 16 years of stages, speeches, debates, events, communities, and a whole lot of figuring things out.",
  "",
  "So you're here looking for advice on MUN, public speaking, organizing events, building communities, or just... trying to figure out how to stand in front of people without your brain completely shutting down.",
  "",
  "Cool. Before you dive into the folders, let me tell you why this thing exists — and why you should care.",
  "",
  "When I was four, my teachers pushed me on stage.",
  "",
  "Literally. I was this tiny, cute, extrovert kid. They thought I'd add some 'cuteness quotient' to the seniors anchoring the event. (Yes, that was actually their reasoning. I'm not making this up.)",
  "",
  "I had no idea what I was doing. Just a microphone in my hand and a bunch of people staring at me.",
  "",
  "But here's the weird part: I liked it.",
  "",
  "The nerves. The adrenaline. The rush of people actually listening when you speak. The feeling of holding a room's attention.",
  "",
  "That stage became my home. And I never left.",
  "",
  "Poems turned into anchoring. Anchoring turned into debates. Debates turned into MUN. MUN turned into organizing events, building communities, leading teams, speaking at conferences.",
  "",
  "One thing led to another. And suddenly it's been 16 years.",
  "",
  "16 years of failing. Learning. Cringing at past versions of myself. Growing. Messing up again. Getting better.",
  "",
  "And here's the thing nobody tells you:",
  "",
  "You don't need some elite school. You don't need special training. You don't need perfect English or a fancy background or connections.",
  "",
  "You just need to start.",
  "",
  "I started in a small town. Regular school. No 'special opportunities.' Just a kid who loved the mic and kept showing up.",
  "",
  "But let me be real with you — I made SO many mistakes.",
  "",
  "The cringe introductions I still think about at 3 AM. The over-planned events that fell apart. The under-prepared speeches that somehow worked. The opportunities I missed because I didn't think I was 'ready enough.'",
  "",
  "All the stuff nobody warns you about until you're already knee-deep in it, wondering why no one told you this part was coming.",
  "",
  "That's why this exists.",
  "",
  "When I started, nobody handed me a playbook. Nobody sat me down and said 'hey, here's what's actually going to happen. Here's what you'll mess up. Here's how to handle it.'",
  "",
  "So I figured it out the hard way. Trial and error. Lots of error. Some crying. Some laughing. A LOT of learning.",
  "",
  "And over time, those mistakes turned into lessons. Those lessons turned into systems. Those systems turned into notes. Those notes turned into templates, frameworks, scripts, and strategies that actually work.",
  "",
  "I consolidated 16 years of my journey into this.",
  "",
  "Every mistake I made. Every lesson I wish someone had told me. Every strategy I figured out through failing and rising and trying again.",
  "",
  "I gave this a piece of me.",
  "",
  "So if you're wondering 'why should I listen to you?' — it's simple:",
  "",
  "Because I've already made most of the mistakes you're about to make.",
  "",
  "And maybe, just maybe, I can help you skip a few of them. Or at least learn from them faster.",
  "",
  "You don't have to figure this out alone. I did, and honestly? It was exhausting.",
  "",
  "So let's make your journey a little easier.",
];

export function AboutPage({ onContinue }: AboutPageProps) {
  const [showStory, setShowStory] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [currentLine, setCurrentLine] = useState(0);
  const [showTimeline, setShowTimeline] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowStory(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showStory && currentLine < storyText.length) {
      const timer = setTimeout(() => {
        setCurrentLine(currentLine + 1);
      }, 80);
      return () => clearTimeout(timer);
    } else if (currentLine >= storyText.length) {
      const buttonsTimer = setTimeout(() => setShowButtons(true), 500);
      return () => clearTimeout(buttonsTimer);
    }
  }, [showStory, currentLine]);

  return (
    <div className="size-full bg-background overflow-y-auto p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-4 border-primary bg-card p-6"
          style={{ imageRendering: 'pixelated' }}
        >
          <div className="flex items-center gap-3">
            <Terminal className="text-primary" size={24} strokeWidth={3} />
            <h1 className="text-primary uppercase text-sm">ABOUT_THE_ARCHIVIST.txt</h1>
          </div>
        </motion.div>

        {/* Story */}
        {showStory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="border-4 border-accent bg-card/50 p-8 space-y-4"
            style={{ imageRendering: 'pixelated' }}
          >
            {storyText.slice(0, currentLine).map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`${line === '' ? 'h-2' : 'text-foreground leading-relaxed text-lg'}`}
              >
                {line}
              </motion.p>
            ))}
            {currentLine < storyText.length && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="text-accent"
              >
                ▮
              </motion.span>
            )}
          </motion.div>
        )}

        {/* Credibility Tab */}
        {showButtons && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.button
              onClick={() => setShowTimeline(!showTimeline)}
              whileHover={{ scale: 1.02 }}
              className="w-full border-4 border-primary bg-card p-6 text-left group hover:bg-primary/5 transition-all"
              style={{ imageRendering: 'pixelated' }}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-sm text-primary uppercase">
                  okay but why should i trust you?
                </h3>
                <motion.div
                  animate={{ rotate: showTimeline ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={20} className="text-primary" strokeWidth={3} />
                </motion.div>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                (fair question. click to see the 16-year journey from tiny kid with a mic to... this)
              </p>
            </motion.button>

            <AnimatePresence>
              {showTimeline && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="border-x-4 border-b-4 border-primary bg-card/50 p-8">
                    <div className="relative">
                      {/* Timeline line */}
                      <div className="absolute left-4 top-0 bottom-0 w-1 bg-primary/30" />

                      <div className="space-y-6">
                        {[
                          { label: 'Age 4 — Alwar, Rajasthan', desc: 'Tiny kid pushed on stage with a mic. No clue what to do. Somehow loved it anyway.' },
                          { label: 'Primary School', desc: 'Poems, recitations, morning assemblies. That stage became home.' },
                          { label: 'Middle School', desc: 'Anchoring school events, annual functions. Started understanding the craft.' },
                          { label: 'High School — Debate Captain', desc: 'Leading teams, city-level competitions, learning to think on my feet.' },
                          { label: 'MUN Era', desc: 'Conferences, committees, diplomatic chaos, and a whole new world of communication.' },
                          { label: 'First Big Win', desc: 'That moment when you realize — wait, I might actually be good at this?' },
                          { label: 'College — BTech in CS, Jaipur', desc: 'Balancing tech with speaking. Building communities. Organizing events from scratch.' },
                          { label: '16 Years Later — Right Now', desc: 'Consolidating everything into this playbook so you don\'t have to figure it out alone.' },
                        ].map((milestone, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="relative flex gap-6 items-start"
                          >
                            <div className="relative z-10">
                              <motion.div
                                animate={{
                                  scale: [1, 1.2, 1],
                                  boxShadow: [
                                    '0 0 0px rgba(167,139,250,0)',
                                    '0 0 15px rgba(167,139,250,0.5)',
                                    '0 0 0px rgba(167,139,250,0)',
                                  ],
                                }}
                                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                                className="w-3 h-3 bg-primary"
                                style={{ imageRendering: 'pixelated' }}
                              />
                            </div>
                            <div className="flex-1">
                              <h4 className="text-primary text-sm mb-1">{milestone.label}</h4>
                              <p className="text-foreground/80 text-sm">{milestone.desc}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Terminal Prompt */}
        {showButtons && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="border-4 border-accent bg-card/50 p-6"
            style={{ imageRendering: 'pixelated' }}
          >
            <p className="text-accent mb-2 text-sm">{'>'} So what exactly is this?</p>
            <p className="text-foreground ml-4 text-base">
              "16 years of mistakes, lessons, and everything I figured out the hard way — so you don't have to."
            </p>
          </motion.div>
        )}

        {/* Portfolio Link - Featured */}
        {showButtons && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="pb-6"
          >
            <motion.a
              href="https://aditi-saxena-red.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.03,
                boxShadow: '0 0 30px rgba(34,211,238,0.5)',
              }}
              whileTap={{ scale: 0.98 }}
              className="group block border-4 border-accent bg-accent/10 p-8 hover:bg-accent/20 transition-all"
              style={{ imageRendering: 'pixelated' }}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-accent uppercase text-sm mb-2 tracking-widest">
                    Want to see more of what I do?
                  </h3>
                  <p className="text-foreground/80 text-base mb-2">
                    My complete portfolio — projects, work, speaking gigs, communities I've built, and everything else that didn't fit in this playbook.
                  </p>
                  <p className="text-xs text-muted-foreground italic">
                    (Quick advice: Complete the playbook first, then check this out. You'll appreciate it more with context.)
                  </p>
                </div>
                <motion.div
                  animate={{
                    x: [0, 5, 0],
                    y: [0, -5, 0],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ExternalLink size={32} className="text-accent" strokeWidth={3} />
                </motion.div>
              </div>
            </motion.a>
          </motion.div>
        )}

        {/* Enter Playbook CTA */}
        {showButtons && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col items-center justify-center pb-12 space-y-3"
          >
            <motion.button
              onClick={onContinue}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-primary text-primary-foreground border-4 border-primary hover:bg-transparent hover:text-primary transition-all uppercase text-sm tracking-widest"
              style={{ imageRendering: 'pixelated' }}
            >
              [ enter aditi\'s playbook → ]
            </motion.button>
            <p className="text-xs text-muted-foreground italic">
              (psst — this looks best on a laptop)
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
