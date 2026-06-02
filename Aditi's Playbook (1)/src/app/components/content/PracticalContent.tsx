import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Lightbulb, MessageSquare, Mic, Users, Presentation, Clipboard, ArrowRight, Search, Download, Brain, List, CheckCircle, RotateCcw } from 'lucide-react';
import { GlitchText } from '../GlitchText';

type Scenario = 'debate' | 'speaker' | 'mun' | 'presentation' | 'planning' | null;

export function PracticalContent() {
  const [selectedScenario, setSelectedScenario] = useState<Scenario>(null);
  const [currentStep, setCurrentStep] = useState(0);

  const resetWorkshop = () => {
    setSelectedScenario(null);
    setCurrentStep(0);
  };

  if (!selectedScenario) {
    return <ScenarioSelector onSelect={setSelectedScenario} />;
  }

  if (selectedScenario === 'debate') {
    return <DebateWorkshop currentStep={currentStep} setCurrentStep={setCurrentStep} onReset={resetWorkshop} />;
  }

  if (selectedScenario === 'planning') {
    return <PlanningWorkshop currentStep={currentStep} setCurrentStep={setCurrentStep} onReset={resetWorkshop} />;
  }

  // Other scenarios coming soon
  return (
    <div className="space-y-6">
      <div className="border-4 border-accent bg-card/50 p-6 text-center" style={{ imageRendering: 'pixelated' }}>
        <p className="text-lg text-foreground/90 leading-relaxed mb-4">
          This scenario is coming soon!
        </p>
        <motion.button
          onClick={resetWorkshop}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 border-4 border-primary bg-primary text-primary-foreground hover:bg-transparent hover:text-primary transition-all"
          style={{ imageRendering: 'pixelated' }}
        >
          ← Back to Scenarios
        </motion.button>
      </div>
    </div>
  );
}

function ScenarioSelector({ onSelect }: { onSelect: (scenario: Scenario) => void }) {
  const scenarios = [
    {
      id: 'debate' as Scenario,
      name: 'Debate Preparation',
      icon: MessageSquare,
      description: 'See exactly how I prepare for a debate from scratch — research, arguments, opponent analysis, the whole flow.',
      color: '#8b5cf6',
      available: true,
    },
    {
      id: 'speaker' as Scenario,
      name: 'Speaker at an Event',
      icon: Mic,
      description: 'From getting the brief to walking on stage — the complete prep process.',
      color: '#ec4899',
      available: false,
    },
    {
      id: 'mun' as Scenario,
      name: 'MUN Preparation',
      icon: Users,
      description: 'Country research, portfolio prep, strategy building — everything before the conference.',
      color: '#22d3ee',
      available: false,
    },
    {
      id: 'presentation' as Scenario,
      name: 'Killer Presentation',
      icon: Presentation,
      description: 'Structure, design, delivery — making presentations that actually land.',
      color: '#a78bfa',
      available: false,
    },
    {
      id: 'planning' as Scenario,
      name: 'Team Planning',
      icon: Clipboard,
      description: 'Leading a team project from idea to execution without losing your mind.',
      color: '#f472b6',
      available: true,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="border-l-4 border-accent pl-4 mb-6">
        <div className="flex items-center gap-3 mb-2">
          <Lightbulb className="text-accent" size={24} strokeWidth={3} />
          <h3 className="text-accent text-base">
            <GlitchText>WORKSHOP.exe</GlitchText>
          </h3>
        </div>
        <p className="text-[10px] text-muted-foreground">
          Theory is great. But let\'s see how this actually works.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="border-4 border-primary bg-card/50 p-6 space-y-4"
        style={{ imageRendering: 'pixelated' }}
      >
        <p className="text-lg text-foreground/90 leading-relaxed">
          Okay, so you\'ve read all the theory. You know the strategies. You understand the frameworks.
        </p>
        <p className="text-base text-accent font-medium">
          Now let\'s actually DO it.
        </p>
        <p className="text-base text-foreground/90 leading-relaxed">
          Choose a scenario below, and I\'ll walk you through EXACTLY how I prepare for it. Not just tips. Not just advice. The actual step-by-step process I use.
        </p>
        <p className="text-base text-foreground/90 leading-relaxed">
          Think of this as a game walkthrough. But for real life.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {scenarios.map((scenario, i) => (
          <motion.button
            key={scenario.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            onClick={() => scenario.available && onSelect(scenario.id)}
            disabled={!scenario.available}
            whileHover={scenario.available ? { scale: 1.03, boxShadow: `0 0 20px ${scenario.color}80` } : {}}
            whileTap={scenario.available ? { scale: 0.97 } : {}}
            className={`relative p-6 border-4 text-left transition-all ${
              scenario.available
                ? 'border-border hover:border-primary bg-card cursor-pointer'
                : 'border-border bg-card/30 cursor-not-allowed opacity-50'
            }`}
            style={{ imageRendering: 'pixelated' }}
          >
            <div className="flex items-start gap-4">
              <scenario.icon
                size={32}
                strokeWidth={3}
                style={{ color: scenario.color }}
              />
              <div className="flex-1">
                <h3 className="text-base font-medium mb-2" style={{ color: scenario.color }}>
                  <GlitchText>{scenario.name}</GlitchText>
                </h3>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {scenario.description}
                </p>
                {!scenario.available && (
                  <p className="text-xs text-muted-foreground mt-2 italic">
                    Coming soon...
                  </p>
                )}
              </div>
            </div>
            {scenario.available && (
              <motion.div
                className="absolute bottom-4 right-4"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight size={20} strokeWidth={3} style={{ color: scenario.color }} />
              </motion.div>
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

function DebateWorkshop({ currentStep, setCurrentStep, onReset }: { currentStep: number; setCurrentStep: (step: number) => void; onReset: () => void }) {
  const steps = [
    {
      title: 'The Topic',
      component: <TopicStep onNext={() => setCurrentStep(1)} />,
    },
    {
      title: 'Research Phase 1: Our Side',
      component: <ResearchStep1 onNext={() => setCurrentStep(2)} onBack={() => setCurrentStep(0)} />,
    },
    {
      title: 'Research Phase 2: Opponent\'s Side',
      component: <ResearchStep2 onNext={() => setCurrentStep(3)} onBack={() => setCurrentStep(1)} />,
    },
    {
      title: 'Building the Flow',
      component: <FlowStep onNext={() => setCurrentStep(4)} onBack={() => setCurrentStep(2)} />,
    },
    {
      title: 'You\'re Ready',
      component: <FinalStep onReset={onReset} />,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-l-4 border-accent pl-4">
        <div className="flex items-center gap-3 mb-2">
          <MessageSquare className="text-accent" size={24} strokeWidth={3} />
          <h3 className="text-accent text-base">
            <GlitchText>Debate Preparation Walkthrough</GlitchText>
          </h3>
        </div>
        <p className="text-[10px] text-muted-foreground">
          Step-by-step: How I actually prepare for a debate
        </p>
      </div>

      {/* Progress Bar */}
      <div className="border-4 border-primary bg-card p-4" style={{ imageRendering: 'pixelated' }}>
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs text-muted-foreground uppercase">Progress</p>
          <p className="text-xs text-primary">
            Step {currentStep + 1} / {steps.length}
          </p>
        </div>
        <div className="h-2 bg-muted" style={{ imageRendering: 'pixelated' }}>
          <motion.div
            className="h-full bg-primary"
            initial={{ width: 0 }}
            animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            transition={{ duration: 0.5 }}
            style={{ imageRendering: 'pixelated' }}
          />
        </div>
      </div>

      {/* Current Step */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {steps[currentStep].component}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function TopicStep({ onNext }: { onNext: () => void }) {
  return (
    <div className="space-y-6">
      <div className="border-4 border-primary bg-card/50 p-8 space-y-4" style={{ imageRendering: 'pixelated' }}>
        <p className="text-lg text-foreground/90 leading-relaxed">
          Alright, let\'s say you just got assigned a debate topic. Here\'s what we\'re working with:
        </p>
        <div className="border-4 border-accent bg-accent/10 p-6" style={{ imageRendering: 'pixelated' }}>
          <div className="text-xl text-accent font-medium mb-2">
            <GlitchText>Motion:</GlitchText>
          </div>
          <p className="text-lg text-foreground/90 leading-relaxed">
            "This House believes that social media does more harm than good."
          </p>
        </div>
        <div className="border-l-4 border-accent pl-4 py-2 bg-accent/5" style={{ imageRendering: 'pixelated' }}>
          <p className="text-base text-foreground/90 leading-relaxed">
            <strong className="text-accent">Your Side:</strong> You\'re arguing FOR the motion (social media = harmful).
          </p>
        </div>
        <p className="text-base text-foreground/90 leading-relaxed">
          Cool. Topic assigned. You have a few days to prepare. Most people would panic or just Google "social media bad arguments" and call it a day.
        </p>
        <p className="text-base text-accent font-medium">
          We\'re not doing that. We\'re doing this properly.
        </p>
      </div>

      <motion.button
        onClick={onNext}
        whileHover={{ scale: 1.03, boxShadow: '0 0 20px rgba(139,92,246,0.5)' }}
        whileTap={{ scale: 0.97 }}
        className="w-full p-6 border-4 border-primary bg-primary text-primary-foreground hover:bg-transparent hover:text-primary transition-all flex items-center justify-center gap-3"
        style={{ imageRendering: 'pixelated' }}
      >
        <span className="text-base uppercase tracking-wide">Let\'s Start Researching</span>
        <ArrowRight size={20} strokeWidth={3} />
      </motion.button>
    </div>
  );
}

function ResearchStep1({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  return (
    <div className="space-y-6">
      <div className="border-4 border-primary bg-card/50 p-8 space-y-6" style={{ imageRendering: 'pixelated' }}>
        <p className="text-lg text-accent font-medium">
          Step 1: Research OUR Side (Pro: Social Media is Harmful)
        </p>

        <p className="text-base text-foreground/90 leading-relaxed">
          Okay, so we need credible arguments. Not just opinions. Not just "I think social media is bad." We need DATA. STUDIES. FACTS.
        </p>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold" style={{ imageRendering: 'pixelated' }}>
              1
            </div>
            <div className="flex-1">
              <p className="text-base text-foreground/90 leading-relaxed mb-2">
                <strong>Go to Google Scholar</strong> (not regular Google — we want academic sources).
              </p>
              <div className="border-2 border-accent/30 bg-card/30 p-4" style={{ imageRendering: 'pixelated' }}>
                <div className="flex items-center gap-2 mb-2">
                  <Search size={16} className="text-accent" strokeWidth={3} />
                  <a
                    href="https://scholar.google.com/scholar_labs/search/session/4240973230444346072?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-accent hover:text-primary underline transition-colors"
                  >
                    → scholar.google.com
                  </a>
                </div>
                <p className="text-sm text-foreground/80">
                  Search terms: "social media mental health impact", "social media addiction studies", "misinformation social platforms"
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold" style={{ imageRendering: 'pixelated' }}>
              2
            </div>
            <div className="flex-1">
              <p className="text-base text-foreground/90 leading-relaxed mb-2">
                <strong>Download 3-5 relevant papers/articles.</strong> Don\'t read everything. Just skim titles and abstracts. Look for:
              </p>
              <ul className="space-y-1 ml-4">
                <li className="text-sm text-foreground/80">• Studies with data (numbers, percentages, statistics)</li>
                <li className="text-sm text-foreground/80">• Recent publications (last 3-5 years)</li>
                <li className="text-sm text-foreground/80">• Credible sources (universities, research journals)</li>
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold" style={{ imageRendering: 'pixelated' }}>
              3
            </div>
            <div className="flex-1">
              <p className="text-base text-foreground/90 leading-relaxed mb-2">
                <strong>Upload everything to NotebookLM.</strong> This is where the magic happens.
              </p>
              <div className="border-2 border-accent/30 bg-card/30 p-4" style={{ imageRendering: 'pixelated' }}>
                <div className="flex items-center gap-2 mb-2">
                  <Brain size={16} className="text-accent" strokeWidth={3} />
                  <a
                    href="https://notebooklm.google.com/notebook/0e468252-a059-4611-8798-70bee3e7f98b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-accent hover:text-primary underline transition-colors"
                  >
                    → notebooklm.google.com
                  </a>
                </div>
                <p className="text-sm text-foreground/80 mb-2">
                  Upload all your PDFs. Then ask it:
                </p>
                <ul className="space-y-1 ml-4">
                  <li className="text-xs text-foreground/70">• "Summarize the key findings about social media\'s impact on mental health"</li>
                  <li className="text-xs text-foreground/70">• "What are the main arguments against social media platforms?"</li>
                  <li className="text-xs text-foreground/70">• "Give me statistics about social media addiction"</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-l-4 border-accent pl-4 py-2 bg-accent/5" style={{ imageRendering: 'pixelated' }}>
          <p className="text-base text-accent font-medium">
            NotebookLM will digest everything and give you consolidated insights. No need to read 50 pages. AI does the heavy lifting.
          </p>
        </div>

        <p className="text-base text-foreground/90 leading-relaxed">
          Now you have: credible sources, key arguments, data to back them up. All organized in one place.
        </p>
      </div>

      <div className="flex gap-4">
        <motion.button
          onClick={onBack}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="px-6 py-3 border-4 border-border bg-card text-foreground hover:border-primary transition-all"
          style={{ imageRendering: 'pixelated' }}
        >
          ← Back
        </motion.button>
        <motion.button
          onClick={onNext}
          whileHover={{ scale: 1.03, boxShadow: '0 0 20px rgba(139,92,246,0.5)' }}
          whileTap={{ scale: 0.97 }}
          className="flex-1 p-4 border-4 border-primary bg-primary text-primary-foreground hover:bg-transparent hover:text-primary transition-all flex items-center justify-center gap-3"
          style={{ imageRendering: 'pixelated' }}
        >
          <span className="text-base uppercase tracking-wide">Now Let\'s Research the Opposition</span>
          <ArrowRight size={20} strokeWidth={3} />
        </motion.button>
      </div>
    </div>
  );
}

function ResearchStep2({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  return (
    <div className="space-y-6">
      <div className="border-4 border-primary bg-card/50 p-8 space-y-6" style={{ imageRendering: 'pixelated' }}>
        <p className="text-lg text-accent font-medium">
          Step 2: Research THEIR Side (Con: Social Media is Beneficial)
        </p>

        <p className="text-base text-foreground/90 leading-relaxed">
          Here\'s where most people mess up. They only research their own arguments and ignore what the other side will say.
        </p>

        <div className="border-l-4 border-destructive pl-4 py-2 bg-destructive/5" style={{ imageRendering: 'pixelated' }}>
          <p className="text-base text-destructive font-medium">
            BIG MISTAKE. If you don\'t know what they\'re going to argue, you can\'t counter it.
          </p>
        </div>

        <p className="text-base text-foreground/90 leading-relaxed">
          So we do THE EXACT SAME PROCESS, but for the opposite side:
        </p>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold" style={{ imageRendering: 'pixelated' }}>
              1
            </div>
            <div className="flex-1">
              <p className="text-base text-foreground/90 leading-relaxed mb-2">
                <strong>Back to Google Scholar.</strong>
              </p>
              <div className="border-2 border-accent/30 bg-card/30 p-4" style={{ imageRendering: 'pixelated' }}>
                <div className="flex items-center gap-2 mb-2">
                  <Search size={16} className="text-accent" strokeWidth={3} />
                  <a
                    href="https://scholar.google.com/scholar_labs/search/session/4240973230444346072?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-accent hover:text-primary underline transition-colors"
                  >
                    → scholar.google.com
                  </a>
                </div>
                <p className="text-sm text-foreground/80">
                  Search terms: "social media benefits community building", "positive effects social networking", "social media education advantages"
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold" style={{ imageRendering: 'pixelated' }}>
              2
            </div>
            <div className="flex-1">
              <p className="text-base text-foreground/90 leading-relaxed">
                <strong>Download 3-5 papers supporting the OPPOSITE side.</strong> Yes, really. You need to know their strongest arguments.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold" style={{ imageRendering: 'pixelated' }}>
              3
            </div>
            <div className="flex-1">
              <p className="text-base text-foreground/90 leading-relaxed mb-2">
                <strong>Upload to NotebookLM</strong> (same notebook or a separate one, your choice).
              </p>
              <div className="border-2 border-accent/30 bg-card/30 p-4" style={{ imageRendering: 'pixelated' }}>
                <div className="flex items-center gap-2 mb-2">
                  <Brain size={16} className="text-accent" strokeWidth={3} />
                  <a
                    href="https://notebooklm.google.com/notebook/0e468252-a059-4611-8798-70bee3e7f98b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-accent hover:text-primary underline transition-colors"
                  >
                    → notebooklm.google.com
                  </a>
                </div>
                <p className="text-sm text-foreground/80 mb-2">
                  Ask it:
                </p>
                <ul className="space-y-1 ml-4">
                  <li className="text-xs text-foreground/70">• "What are the main benefits of social media according to these sources?"</li>
                  <li className="text-xs text-foreground/70">• "How do these studies counter the harm narrative?"</li>
                  <li className="text-xs text-foreground/70">• "What evidence do they provide for positive impact?"</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-4 border-accent bg-accent/10 p-6" style={{ imageRendering: 'pixelated' }}>
          <p className="text-base text-foreground/90 leading-relaxed mb-3">
            <strong className="text-accent">Why this matters:</strong>
          </p>
          <p className="text-sm text-foreground/80 leading-relaxed">
            Now you know EXACTLY what they\'re going to say. And more importantly, you can prepare counter-arguments. When they say "social media helps people stay connected," you already have research showing the quality of those connections is shallow. When they mention community building, you can counter with echo chambers and polarization data.
          </p>
        </div>

        <p className="text-base text-foreground/90 leading-relaxed">
          You\'re not just defending your side. You\'re dismantling theirs. That\'s how you win debates.
        </p>
      </div>

      <div className="flex gap-4">
        <motion.button
          onClick={onBack}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="px-6 py-3 border-4 border-border bg-card text-foreground hover:border-primary transition-all"
          style={{ imageRendering: 'pixelated' }}
        >
          ← Back
        </motion.button>
        <motion.button
          onClick={onNext}
          whileHover={{ scale: 1.03, boxShadow: '0 0 20px rgba(139,92,246,0.5)' }}
          whileTap={{ scale: 0.97 }}
          className="flex-1 p-4 border-4 border-primary bg-primary text-primary-foreground hover:bg-transparent hover:text-primary transition-all flex items-center justify-center gap-3"
          style={{ imageRendering: 'pixelated' }}
        >
          <span className="text-base uppercase tracking-wide">Build the Flow</span>
          <ArrowRight size={20} strokeWidth={3} />
        </motion.button>
      </div>
    </div>
  );
}

function FlowStep({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  return (
    <div className="space-y-6">
      <div className="border-4 border-primary bg-card/50 p-8 space-y-6" style={{ imageRendering: 'pixelated' }}>
        <p className="text-lg text-accent font-medium">
          Step 3: Build Your Flow (NOT a script)
        </p>

        <p className="text-base text-foreground/90 leading-relaxed">
          Okay, so you have all this research. Both sides. Now what?
        </p>

        <div className="border-l-4 border-accent pl-4 py-2 bg-accent/5" style={{ imageRendering: 'pixelated' }}>
          <p className="text-base text-foreground/90 leading-relaxed">
            DO NOT write a word-for-word script. You\'ll sound robotic, and the moment you forget a line, you\'ll panic.
          </p>
          <p className="text-base text-accent font-medium mt-2">
            Instead, create a FLOW. A logical structure you can follow.
          </p>
        </div>

        <p className="text-base text-foreground/90 leading-relaxed">
          Here\'s what my flow looks like for this debate:
        </p>

        <div className="space-y-4">
          <div className="border-4 border-accent bg-card p-4" style={{ imageRendering: 'pixelated' }}>
            <div className="flex items-center gap-2 mb-3">
              <List size={20} className="text-accent" strokeWidth={3} />
              <p className="text-base text-accent font-medium">My Debate Flow</p>
            </div>

            <div className="space-y-3">
              <div>
                <p className="text-sm text-primary font-medium mb-1">1. Opening Statement (30 seconds)</p>
                <ul className="ml-4 space-y-1">
                  <li className="text-xs text-foreground/80">• Hook: shocking statistic about mental health decline since social media rise</li>
                  <li className="text-xs text-foreground/80">• Thesis: While connection is promised, harm is delivered</li>
                  <li className="text-xs text-foreground/80">• Preview 3 main points</li>
                </ul>
              </div>

              <div>
                <p className="text-sm text-primary font-medium mb-1">2. Argument 1: Mental Health Crisis</p>
                <ul className="ml-4 space-y-1">
                  <li className="text-xs text-foreground/80">• Data: teen depression rates correlation with social media usage</li>
                  <li className="text-xs text-foreground/80">• Study reference: [specific paper from research]</li>
                  <li className="text-xs text-foreground/80">• Counter their "connection" point: quality vs quantity of connections</li>
                </ul>
              </div>

              <div>
                <p className="text-sm text-primary font-medium mb-1">3. Argument 2: Misinformation & Polarization</p>
                <ul className="ml-4 space-y-1">
                  <li className="text-xs text-foreground/80">• Echo chambers example</li>
                  <li className="text-xs text-foreground/80">• Algorithm-driven division data</li>
                  <li className="text-xs text-foreground/80">• Pre-counter: acknowledge community building BUT show it creates silos</li>
                </ul>
              </div>

              <div>
                <p className="text-sm text-primary font-medium mb-1">4. Argument 3: Addiction by Design</p>
                <ul className="ml-4 space-y-1">
                  <li className="text-xs text-foreground/80">• Dopamine manipulation research</li>
                  <li className="text-xs text-foreground/80">• Screen time statistics</li>
                  <li className="text-xs text-foreground/80">• Comparison to gambling addiction mechanisms</li>
                </ul>
              </div>

              <div>
                <p className="text-sm text-primary font-medium mb-1">5. Closing (20 seconds)</p>
                <ul className="ml-4 space-y-1">
                  <li className="text-xs text-foreground/80">• Summarize harm &gt; benefit</li>
                  <li className="text-xs text-foreground/80">• Call to action or powerful final statement</li>
                  <li className="text-xs text-foreground/80">• Circle back to opening hook</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p className="text-base text-foreground/90 leading-relaxed">
          See? It\'s not a script. It\'s a roadmap. I know what points to hit, in what order, with what evidence. But the exact words? I figure those out in the moment based on how the debate is actually flowing.
        </p>

        <div className="border-4 border-accent bg-accent/10 p-6" style={{ imageRendering: 'pixelated' }}>
          <p className="text-base text-foreground/90 leading-relaxed">
            <strong className="text-accent">Pro tip:</strong> Write this flow on ONE page. Not 10 pages of notes. ONE. You should be able to glance at it and know exactly where you are and what\'s next.
          </p>
        </div>

        <div className="border-4 border-primary bg-card/50 p-6" style={{ imageRendering: 'pixelated' }}>
          <p className="text-base text-foreground/90 leading-relaxed mb-3">
            Want to see an actual example? Here\'s a rough draft of a debate flow I created for this exact topic:
          </p>
          <a
            href="https://docs.google.com/document/d/1AgoqYA2E4rDmiiuxFJtACWYsGEA2eneB5wJGNEA2Ero/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:text-primary underline text-base transition-colors"
          >
            → View Sample Debate Flow (Google Doc)
          </a>
          <p className="text-xs text-muted-foreground mt-3 italic">
            (This is just a rough idea — you\'ll get better with practice and develop your own style!)
          </p>
        </div>
      </div>

      <div className="flex gap-4">
        <motion.button
          onClick={onBack}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="px-6 py-3 border-4 border-border bg-card text-foreground hover:border-primary transition-all"
          style={{ imageRendering: 'pixelated' }}
        >
          ← Back
        </motion.button>
        <motion.button
          onClick={onNext}
          whileHover={{ scale: 1.03, boxShadow: '0 0 20px rgba(139,92,246,0.5)' }}
          whileTap={{ scale: 0.97 }}
          className="flex-1 p-4 border-4 border-primary bg-primary text-primary-foreground hover:bg-transparent hover:text-primary transition-all flex items-center justify-center gap-3"
          style={{ imageRendering: 'pixelated' }}
        >
          <span className="text-base uppercase tracking-wide">Finish Workshop</span>
          <CheckCircle size={20} strokeWidth={3} />
        </motion.button>
      </div>
    </div>
  );
}

function FinalStep({ onReset }: { onReset: () => void }) {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="border-4 border-accent bg-accent/10 p-8 space-y-6 text-center"
        style={{ imageRendering: 'pixelated' }}
      >
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center"
        >
          <CheckCircle size={64} className="text-accent" strokeWidth={3} />
        </motion.div>

        <h2 className="text-2xl text-accent font-medium">
          <GlitchText>You\'re Ready.</GlitchText>
        </h2>

        <p className="text-lg text-foreground/90 leading-relaxed">
          That\'s it. That\'s the process.
        </p>

        <div className="border-4 border-primary bg-card/50 p-6 text-left space-y-3" style={{ imageRendering: 'pixelated' }}>
          <p className="text-base text-foreground/90 leading-relaxed">
            <strong className="text-primary">What you just did:</strong>
          </p>
          <ul className="space-y-2 ml-4">
            <li className="text-sm text-foreground/80">✓ Researched YOUR side with credible sources</li>
            <li className="text-sm text-foreground/80">✓ Researched THEIR side to anticipate arguments</li>
            <li className="text-sm text-foreground/80">✓ Used Google Scholar + NotebookLM for efficient research</li>
            <li className="text-sm text-foreground/80">✓ Built a FLOW instead of a rigid script</li>
            <li className="text-sm text-foreground/80">✓ Prepared counter-arguments in advance</li>
          </ul>
        </div>

        <p className="text-base text-foreground/90 leading-relaxed">
          Most people don\'t do half of this. They wing it with surface-level Googling and hope for the best.
        </p>

        <p className="text-base text-accent font-medium">
          You\'re not most people anymore.
        </p>

        <div className="border-l-4 border-accent pl-4 py-2 bg-accent/5 text-left" style={{ imageRendering: 'pixelated' }}>
          <p className="text-sm text-foreground/80 leading-relaxed">
            Now go apply this to YOUR next debate. Same process. Different topic. Works every single time.
          </p>
        </div>
      </motion.div>

      <div className="flex gap-4">
        <motion.button
          onClick={onReset}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="flex-1 p-4 border-4 border-primary bg-card text-primary hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center gap-3"
          style={{ imageRendering: 'pixelated' }}
        >
          <RotateCcw size={20} strokeWidth={3} />
          <span className="text-base uppercase tracking-wide">Try Another Scenario</span>
        </motion.button>
      </div>
    </div>
  );
}

function PlanningWorkshop({ currentStep, setCurrentStep, onReset }: { currentStep: number; setCurrentStep: (step: number) => void; onReset: () => void }) {
  const steps = [
    {
      title: 'The Project',
      component: <ProjectStep onNext={() => setCurrentStep(1)} />,
    },
    {
      title: 'Setting Up Your Command Center',
      component: <NotionStep onNext={() => setCurrentStep(2)} onBack={() => setCurrentStep(0)} />,
    },
    {
      title: 'Creating the Pitch Deck',
      component: <GammaStep onNext={() => setCurrentStep(3)} onBack={() => setCurrentStep(1)} />,
    },
    {
      title: 'Designing Marketing Materials',
      component: <CanvaStep onNext={() => setCurrentStep(4)} onBack={() => setCurrentStep(2)} />,
    },
    {
      title: 'You\'re Ready to Lead',
      component: <FinalPlanningStep onReset={onReset} />,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-l-4 border-accent pl-4">
        <div className="flex items-center gap-3 mb-2">
          <Clipboard className="text-accent" size={24} strokeWidth={3} />
          <h3 className="text-accent text-base">
            <GlitchText>Team Planning Walkthrough</GlitchText>
          </h3>
        </div>
        <p className="text-[10px] text-muted-foreground">
          Step-by-step: How I actually plan and execute a team project
        </p>
      </div>

      {/* Progress Bar */}
      <div className="border-4 border-primary bg-card p-4" style={{ imageRendering: 'pixelated' }}>
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs text-muted-foreground uppercase">Progress</p>
          <p className="text-xs text-primary">
            Step {currentStep + 1} / {steps.length}
          </p>
        </div>
        <div className="h-2 bg-muted" style={{ imageRendering: 'pixelated' }}>
          <motion.div
            className="h-full bg-primary"
            initial={{ width: 0 }}
            animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            transition={{ duration: 0.5 }}
            style={{ imageRendering: 'pixelated' }}
          />
        </div>
      </div>

      {/* Current Step */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {steps[currentStep].component}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function ProjectStep({ onNext }: { onNext: () => void }) {
  return (
    <div className="space-y-6">
      <div className="border-4 border-primary bg-card/50 p-8 space-y-4" style={{ imageRendering: 'pixelated' }}>
        <p className="text-lg text-foreground/90 leading-relaxed">
          Alright, scenario time. You\'ve been assigned to lead a team project. Here\'s the brief:
        </p>
        <div className="border-4 border-accent bg-accent/10 p-6" style={{ imageRendering: 'pixelated' }}>
          <div className="text-xl text-accent font-medium mb-2">
            <GlitchText>Project:</GlitchText>
          </div>
          <p className="text-lg text-foreground/90 leading-relaxed mb-3">
            "Organize a tech conference for your college — speakers, sponsors, marketing, logistics, the whole thing."
          </p>
          <div className="border-l-4 border-accent pl-4 py-2 bg-accent/5" style={{ imageRendering: 'pixelated' }}>
            <p className="text-base text-foreground/90 leading-relaxed">
              <strong className="text-accent">Your Role:</strong> Team Lead. You have 4 team members, 2 months, and zero budget to start.
            </p>
          </div>
        </div>
        <p className="text-base text-foreground/90 leading-relaxed">
          Most people would immediately start a WhatsApp group, have chaotic calls, forget who\'s doing what, miss deadlines, and panic 2 days before the event.
        </p>
        <p className="text-base text-accent font-medium">
          We\'re not doing that. We\'re using the right tools to stay organized, professional, and sane.
        </p>
      </div>

      <motion.button
        onClick={onNext}
        whileHover={{ scale: 1.03, boxShadow: '0 0 20px rgba(244,114,182,0.5)' }}
        whileTap={{ scale: 0.97 }}
        className="w-full p-6 border-4 border-primary bg-primary text-primary-foreground hover:bg-transparent hover:text-primary transition-all flex items-center justify-center gap-3"
        style={{ imageRendering: 'pixelated' }}
      >
        <span className="text-base uppercase tracking-wide">Let\'s Set Up</span>
        <ArrowRight size={20} strokeWidth={3} />
      </motion.button>
    </div>
  );
}

function NotionStep({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  return (
    <div className="space-y-6">
      <div className="border-4 border-primary bg-card/50 p-8 space-y-6" style={{ imageRendering: 'pixelated' }}>
        <p className="text-lg text-accent font-medium">
          Step 1: Build Your Command Center (Notion)
        </p>

        <p className="text-base text-foreground/90 leading-relaxed">
          First things first — you need ONE place where everything lives. Tasks, timelines, notes, contacts, budgets, ideas. Everything.
        </p>

        <div className="border-l-4 border-accent pl-4 py-2 bg-accent/5" style={{ imageRendering: 'pixelated' }}>
          <p className="text-base text-accent font-medium">
            WhatsApp groups? Chaotic. Random Google Docs? Scattered. Email threads? Please no.
          </p>
          <p className="text-base text-foreground/90 mt-2">
            Notion is your single source of truth.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold" style={{ imageRendering: 'pixelated' }}>
              1
            </div>
            <div className="flex-1">
              <p className="text-base text-foreground/90 leading-relaxed mb-2">
                <strong>Create a Notion workspace.</strong> Free. Takes 2 minutes.
              </p>
              <div className="border-2 border-accent/30 bg-card/30 p-4" style={{ imageRendering: 'pixelated' }}>
                <a
                  href="https://www.notion.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-accent hover:text-primary underline transition-colors"
                >
                  → notion.com
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold" style={{ imageRendering: 'pixelated' }}>
              2
            </div>
            <div className="flex-1">
              <p className="text-base text-foreground/90 leading-relaxed mb-2">
                <strong>Set up your project structure.</strong> Here\'s what I create:
              </p>
              <ul className="space-y-1 ml-4">
                <li className="text-sm text-foreground/80">• <strong>Master Task List</strong> — every single to-do, assigned to someone, with deadlines</li>
                <li className="text-sm text-foreground/80">• <strong>Timeline View</strong> — Gantt-style so you see what\'s happening when</li>
                <li className="text-sm text-foreground/80">• <strong>Budget Tracker</strong> — income, expenses, sponsorships, all in one table</li>
                <li className="text-sm text-foreground/80">• <strong>Meeting Notes</strong> — every call documented with action items</li>
                <li className="text-sm text-foreground/80">• <strong>Speaker/Sponsor Database</strong> — contacts, status, follow-ups</li>
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold" style={{ imageRendering: 'pixelated' }}>
              3
            </div>
            <div className="flex-1">
              <p className="text-base text-foreground/90 leading-relaxed">
                <strong>Invite your team.</strong> Everyone has access. Everyone knows what to do. No more "Wait, who was supposed to do this?"
              </p>
            </div>
          </div>
        </div>

        <div className="border-4 border-accent bg-accent/10 p-6" style={{ imageRendering: 'pixelated' }}>
          <p className="text-base text-foreground/90 leading-relaxed">
            <strong className="text-accent">Why Notion?</strong> Because now when someone asks "What\'s the status?" you just send them ONE link. When you need to check if something\'s done, you look at ONE board. When a deadline is coming up, Notion reminds you. It\'s all there.
          </p>
        </div>

        <p className="text-base text-foreground/90 leading-relaxed">
          Command center: built. Now everyone knows what\'s happening, when, and who\'s responsible. No chaos. Just clarity.
        </p>
      </div>

      <div className="flex gap-4">
        <motion.button
          onClick={onBack}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="px-6 py-3 border-4 border-border bg-card text-foreground hover:border-primary transition-all"
          style={{ imageRendering: 'pixelated' }}
        >
          ← Back
        </motion.button>
        <motion.button
          onClick={onNext}
          whileHover={{ scale: 1.03, boxShadow: '0 0 20px rgba(244,114,182,0.5)' }}
          whileTap={{ scale: 0.97 }}
          className="flex-1 p-4 border-4 border-primary bg-primary text-primary-foreground hover:bg-transparent hover:text-primary transition-all flex items-center justify-center gap-3"
          style={{ imageRendering: 'pixelated' }}
        >
          <span className="text-base uppercase tracking-wide">Now Let\'s Create the Pitch Deck</span>
          <ArrowRight size={20} strokeWidth={3} />
        </motion.button>
      </div>
    </div>
  );
}

function GammaStep({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  return (
    <div className="space-y-6">
      <div className="border-4 border-primary bg-card/50 p-8 space-y-6" style={{ imageRendering: 'pixelated' }}>
        <p className="text-lg text-accent font-medium">
          Step 2: Build Your Pitch Deck in Minutes (Gamma)
        </p>

        <p className="text-base text-foreground/90 leading-relaxed">
          You need sponsors. And sponsors need a pitch deck. Something that shows them what the event is, why they should care, and what they get in return.
        </p>

        <div className="border-l-4 border-destructive pl-4 py-2 bg-destructive/5" style={{ imageRendering: 'pixelated' }}>
          <p className="text-base text-destructive font-medium">
            Making presentations in PowerPoint or Google Slides? Hours of formatting pain. Picking fonts. Aligning boxes. Ugh.
          </p>
        </div>

        <p className="text-base text-foreground/90 leading-relaxed">
          Enter Gamma. AI-powered. Beautiful designs. Done in literally 5 minutes.
        </p>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold" style={{ imageRendering: 'pixelated' }}>
              1
            </div>
            <div className="flex-1">
              <p className="text-base text-foreground/90 leading-relaxed mb-2">
                <strong>Go to Gamma.</strong>
              </p>
              <div className="border-2 border-accent/30 bg-card/30 p-4" style={{ imageRendering: 'pixelated' }}>
                <a
                  href="https://gamma.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-accent hover:text-primary underline transition-colors"
                >
                  → gamma.app
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold" style={{ imageRendering: 'pixelated' }}>
              2
            </div>
            <div className="flex-1">
              <p className="text-base text-foreground/90 leading-relaxed mb-2">
                <strong>Tell Gamma what you need.</strong> Example prompt:
              </p>
              <div className="border-2 border-accent/30 bg-card/30 p-4 italic text-sm text-foreground/80" style={{ imageRendering: 'pixelated' }}>
                "Create a sponsorship pitch deck for a college tech conference. Include event overview, audience demographics, sponsorship tiers, and benefits."
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold" style={{ imageRendering: 'pixelated' }}>
              3
            </div>
            <div className="flex-1">
              <p className="text-base text-foreground/90 leading-relaxed mb-2">
                <strong>Pick a design theme.</strong> Gamma gives you options. Choose one. Done.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold" style={{ imageRendering: 'pixelated' }}>
              4
            </div>
            <div className="flex-1">
              <p className="text-base text-foreground/90 leading-relaxed mb-2">
                <strong>Customize content.</strong> Add your actual numbers, logos, contact info. Gamma handles all the design.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold" style={{ imageRendering: 'pixelated' }}>
              5
            </div>
            <div className="flex-1">
              <p className="text-base text-foreground/90 leading-relaxed">
                <strong>Export or share link.</strong> PDF for email. Live link for presentations. Both work.
              </p>
            </div>
          </div>
        </div>

        <div className="border-4 border-accent bg-accent/10 p-6" style={{ imageRendering: 'pixelated' }}>
          <p className="text-base text-foreground/90 leading-relaxed">
            <strong className="text-accent">Time saved:</strong> Hours. Seriously. What used to take half a day in PowerPoint now takes 10 minutes. And it looks better. Way better.
          </p>
        </div>

        <p className="text-base text-foreground/90 leading-relaxed">
          Pitch deck: ready. Now you can actually send it to sponsors without feeling embarrassed about comic sans or misaligned text boxes.
        </p>
      </div>

      <div className="flex gap-4">
        <motion.button
          onClick={onBack}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="px-6 py-3 border-4 border-border bg-card text-foreground hover:border-primary transition-all"
          style={{ imageRendering: 'pixelated' }}
        >
          ← Back
        </motion.button>
        <motion.button
          onClick={onNext}
          whileHover={{ scale: 1.03, boxShadow: '0 0 20px rgba(244,114,182,0.5)' }}
          whileTap={{ scale: 0.97 }}
          className="flex-1 p-4 border-4 border-primary bg-primary text-primary-foreground hover:bg-transparent hover:text-primary transition-all flex items-center justify-center gap-3"
          style={{ imageRendering: 'pixelated' }}
        >
          <span className="text-base uppercase tracking-wide">Design Marketing Materials</span>
          <ArrowRight size={20} strokeWidth={3} />
        </motion.button>
      </div>
    </div>
  );
}

function CanvaStep({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  return (
    <div className="space-y-6">
      <div className="border-4 border-primary bg-card/50 p-8 space-y-6" style={{ imageRendering: 'pixelated' }}>
        <p className="text-lg text-accent font-medium">
          Step 3: Create All Your Marketing (Canva)
        </p>

        <p className="text-base text-foreground/90 leading-relaxed">
          You need posters. Instagram posts. LinkedIn banners. Maybe flyers. Email headers. All that visual stuff.
        </p>

        <div className="border-l-4 border-accent pl-4 py-2 bg-accent/5" style={{ imageRendering: 'pixelated' }}>
          <p className="text-base text-foreground/90 leading-relaxed">
            Most people would hire a designer (expensive and slow) or make terrible posters in Word (please don\'t).
          </p>
          <p className="text-base text-accent font-medium mt-2">
            Or... you use Canva and do it yourself in 20 minutes. Looking professional.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold" style={{ imageRendering: 'pixelated' }}>
              1
            </div>
            <div className="flex-1">
              <p className="text-base text-foreground/90 leading-relaxed mb-2">
                <strong>Open Canva.</strong> Free account works fine for most things.
              </p>
              <div className="border-2 border-accent/30 bg-card/30 p-4" style={{ imageRendering: 'pixelated' }}>
                <a
                  href="https://www.canva.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-accent hover:text-primary underline transition-colors"
                >
                  → canva.com
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold" style={{ imageRendering: 'pixelated' }}>
              2
            </div>
            <div className="flex-1">
              <p className="text-base text-foreground/90 leading-relaxed mb-2">
                <strong>Pick templates for what you need:</strong>
              </p>
              <ul className="space-y-1 ml-4">
                <li className="text-sm text-foreground/80">• Instagram post template (tech event theme)</li>
                <li className="text-sm text-foreground/80">• LinkedIn banner</li>
                <li className="text-sm text-foreground/80">• Event poster (A4 size for printing)</li>
                <li className="text-sm text-foreground/80">• Email header</li>
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold" style={{ imageRendering: 'pixelated' }}>
              3
            </div>
            <div className="flex-1">
              <p className="text-base text-foreground/90 leading-relaxed mb-2">
                <strong>Customize.</strong> Change colors to match your brand. Add event details. Drop in logos. Adjust text.
              </p>
              <p className="text-sm text-foreground/80">
                Pro tip: Keep the same color palette and fonts across ALL materials. Looks way more professional.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold" style={{ imageRendering: 'pixelated' }}>
              4
            </div>
            <div className="flex-1">
              <p className="text-base text-foreground/90 leading-relaxed mb-2">
                <strong>Export everything.</strong>
              </p>
              <ul className="space-y-1 ml-4">
                <li className="text-sm text-foreground/80">• PNG for social media (better quality)</li>
                <li className="text-sm text-foreground/80">• PDF for print posters</li>
                <li className="text-sm text-foreground/80">• Share links for team review</li>
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold" style={{ imageRendering: 'pixelated' }}>
              5
            </div>
            <div className="flex-1">
              <p className="text-base text-foreground/90 leading-relaxed">
                <strong>Save as a template set.</strong> When you need to create another post next week? Just duplicate and change the text. 2 minutes.
              </p>
            </div>
          </div>
        </div>

        <div className="border-4 border-accent bg-accent/10 p-6" style={{ imageRendering: 'pixelated' }}>
          <p className="text-base text-foreground/90 leading-relaxed">
            <strong className="text-accent">Real talk:</strong> I\'ve seen events with budgets spend thousands on design. And I\'ve seen student-run events with zero budget create better-looking materials in Canva. It\'s THAT good. And it\'s mostly free.
          </p>
        </div>

        <p className="text-base text-foreground/90 leading-relaxed">
          Marketing materials: done. Now you can flood Instagram, LinkedIn, email, and campus notice boards with stuff that actually looks good.
        </p>
      </div>

      <div className="flex gap-4">
        <motion.button
          onClick={onBack}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="px-6 py-3 border-4 border-border bg-card text-foreground hover:border-primary transition-all"
          style={{ imageRendering: 'pixelated' }}
        >
          ← Back
        </motion.button>
        <motion.button
          onClick={onNext}
          whileHover={{ scale: 1.03, boxShadow: '0 0 20px rgba(244,114,182,0.5)' }}
          whileTap={{ scale: 0.97 }}
          className="flex-1 p-4 border-4 border-primary bg-primary text-primary-foreground hover:bg-transparent hover:text-primary transition-all flex items-center justify-center gap-3"
          style={{ imageRendering: 'pixelated' }}
        >
          <span className="text-base uppercase tracking-wide">Finish Workshop</span>
          <CheckCircle size={20} strokeWidth={3} />
        </motion.button>
      </div>
    </div>
  );
}

function FinalPlanningStep({ onReset }: { onReset: () => void }) {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="border-4 border-accent bg-accent/10 p-8 space-y-6 text-center"
        style={{ imageRendering: 'pixelated' }}
      >
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center"
        >
          <CheckCircle size={64} className="text-accent" strokeWidth={3} />
        </motion.div>

        <h2 className="text-2xl text-accent font-medium">
          <GlitchText>You\'re Ready to Lead.</GlitchText>
        </h2>

        <p className="text-lg text-foreground/90 leading-relaxed">
          That\'s how you run a team project without losing your mind.
        </p>

        <div className="border-4 border-primary bg-card/50 p-6 text-left space-y-3" style={{ imageRendering: 'pixelated' }}>
          <p className="text-base text-foreground/90 leading-relaxed">
            <strong className="text-primary">What you just learned:</strong>
          </p>
          <ul className="space-y-2 ml-4">
            <li className="text-sm text-foreground/80">✓ Notion for project management and team coordination</li>
            <li className="text-sm text-foreground/80">✓ Gamma for professional pitch decks in minutes</li>
            <li className="text-sm text-foreground/80">✓ Canva for all your marketing and design needs</li>
            <li className="text-sm text-foreground/80">✓ How to keep a team organized without chaos</li>
            <li className="text-sm text-foreground/80">✓ Working smarter, not harder (AI + right tools)</li>
          </ul>
        </div>

        <p className="text-base text-foreground/90 leading-relaxed">
          Most team projects fail because of bad organization, not bad ideas. Missed deadlines. Lost files. Confused team members. Everyone working in silos.
        </p>

        <p className="text-base text-accent font-medium">
          With Notion + Gamma + Canva, you just eliminated 90% of those problems.
        </p>

        <div className="border-l-4 border-accent pl-4 py-2 bg-accent/5 text-left" style={{ imageRendering: 'pixelated' }}>
          <p className="text-sm text-foreground/80 leading-relaxed">
            Now apply this to YOUR next project. Same tools. Same workflow. College fest, startup idea, community event — doesn\'t matter. This system works.
          </p>
        </div>
      </motion.div>

      <div className="flex gap-4">
        <motion.button
          onClick={onReset}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="flex-1 p-4 border-4 border-primary bg-card text-primary hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center gap-3"
          style={{ imageRendering: 'pixelated' }}
        >
          <RotateCcw size={20} strokeWidth={3} />
          <span className="text-base uppercase tracking-wide">Try Another Scenario</span>
        </motion.button>
      </div>
    </div>
  );
}
