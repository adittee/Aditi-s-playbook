import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Mic, Sparkles, Plus, X } from 'lucide-react';
import { GlitchText } from '../GlitchText';

interface DetailSection {
  title: string;
  content: string;
}

interface Stage {
  id: string;
  stage: string;
  title: string;
  visual: string;
  intro: string;
  quickTips: string[];
  quote: string;
  details?: DetailSection[];
}

const stages: Stage[] = [
  {
    id: 'intro',
    stage: 'Opening',
    title: 'You + Mic + People Listening',
    visual: 'closed-curtain',
    intro: "If you've browsed through Community and Events, you already know my deal. But here? We're talking about public speaking in general — debates, anchoring, MUNs, presentations, whatever.",
    quickTips: [
      "Basically: you're on stage, mic in hand, people are listening",
      "Doesn't matter if it's a debate or a presentation — the core is the same",
      "First time? You'll be nervous, feel unprepared, think your language isn't good enough",
      "Good. That's what's going to make you work hard.",
    ],
    quote: "Events change. Basics remain constant. You just need to know what those basics actually are.",
    details: [
      {
        title: "What We're Actually Talking About",
        content: `Look, public speaking isn't just one thing.

It's debates. It's anchoring events. It's MUNs. It's presentations. It's literally any time you're standing there with a microphone and people are listening to you.

The specific event might change, but the fundamentals? Those stay exactly the same.

**Whether you're:**
- Debating a motion
- Anchoring a college fest
- Representing a country in MUN
- Giving a presentation on your project
- Speaking at a conference

**The pattern is identical:**

You prepare. You show up. You speak. You let it go. You get better.

That's it. That's the whole thing.

**And if it's your first time?**

You're going to be nervous. You're going to feel like you don't know what to do. You're going to think you don't have perfect command over the language. You're going to second-guess everything.

Good.

That anxiety? That's what's going to push you to actually prepare. That's what's going to make you work hard. That's what's going to make you care enough to get better.

So don't fight the nerves. Use them.`,
      },
      {
        title: "The Universal Pattern",
        content: `No matter what type of speaking event you're doing, the pattern stays the same:

**Step 1: Know your theme/topic**

Whatever the event is, you need to understand what you're talking about.

**Step 2: Research thoroughly**

Not surface-level. Not just enough to get by. THOROUGHLY.

**Step 3: Think from the other perspective**

Put yourself in your opponent's shoes. Or the audience's shoes. Or the other side's position.

**Step 4: Prepare that too**

Don't just prepare your own points. Prepare the counter-arguments. Prepare the questions they might ask. Prepare the challenges you might face.

**That's it.**

Events change. Basics remain constant.

Whether you're debating climate policy or anchoring a tech event or representing Russia in a UN simulation or presenting your startup idea:

Theme → Research → Other perspective → Prepare it all.

Same pattern. Different context.

Master this pattern once, and you can apply it to literally any speaking situation you'll ever face.`,
      },
    ],
  },
  {
    id: 'preparation',
    stage: 'Preparation',
    title: 'Before You Even Touch the Mic',
    visual: 'backstage',
    intro: "Depending on the event, here's what preparation actually looks like:",
    quickTips: [
      "Research your topic. Thoroughly. VERY thoroughly.",
      "Don't just memorize data — understand it to the depth",
      "Think from opponent's perspective / audience's shoes / other side's view",
      "The pattern stays the same, the event changes",
    ],
    quote: "More than memorizing data and facts and lines, understand it to the depth.",
    details: [
      {
        title: "Research Thoroughly",
        content: `I cannot stress this enough: RESEARCH YOUR TOPIC THOROUGHLY.

Very. Very. Thoroughly.

Not "read a few articles and call it done" thoroughly.

Not "skim Wikipedia and some blog posts" thoroughly.

ACTUALLY thoroughly.

**What does thorough research actually mean?**

It means you understand your topic deeply enough that you could explain it to someone who knows nothing about it.

It means you know the nuances, the edge cases, the controversies, the different perspectives.

It means you've read multiple sources, not just one or two.

It means you understand the WHY behind the facts, not just the facts themselves.

**Here's the key:**

Don't just memorize data, facts, and lines.

UNDERSTAND it to the depth.

Because when you're on stage and someone asks you a question you didn't prepare for, or when you forget your talking points, or when the conversation goes in an unexpected direction:

Memorized facts won't save you.

But deep understanding will.

If you actually understand the topic, you can think on your feet. You can adapt. You can answer questions you've never heard before.

That's the difference between someone who sounds like they're reading from a script and someone who sounds like they actually know what they're talking about.

Be the second person.`,
      },
      {
        title: "Think From the Other Side",
        content: `This is the part most people skip. And it's the part that makes all the difference.

Whatever your event is, you need to think from the other perspective.

**If it's a debate:**

Research your topic well. But ALSO think of the arguments that could be made AGAINST your points.

Put yourself in your opponent's position. What would THEY say? How would THEY attack your argument?

Prepare for that.

Think from your opponent's perspective and prepare those counter-arguments too.

**If it's a MUN:**

Research your country's position well. But ALSO research the countries that oppose your portfolio.

What are THEIR interests? What arguments will THEY make? How will THEY try to block your proposals?

Prepare for that.

**If you're anchoring an event:**

Know the theme well. Research it thoroughly. But ALSO put yourself in the guest's shoes.

If YOU were one of the guests, what would you expect? What would make the event engaging for you? What would bore you?

Prepare for that.

**If you're speaking at an event:**

Know your topic inside out. But ALSO think: if I was listening to this as an audience member, what questions would I have?

What would confuse me? What would I want clarified? What would make me zone out?

Prepare for that.

**The pattern:**

Your perspective → Their perspective → Prepare both.

This is what separates okay speakers from great ones.

Okay speakers just know their own material.

Great speakers know their material AND anticipate what's coming from the other side.

Be great.`,
      },
    ],
  },
  {
    id: 'showtime',
    stage: 'The Day',
    title: 'When You Have the Spotlight',
    visual: 'wings',
    intro: "The day is here. You'll feel nervous. You'll want to call in sick. You'll want to not show up.",
    quickTips: [
      "Show up anyway. Show up EARLY.",
      "NEVER HAVE A SCRIPT (yes, I'm serious)",
      "Have an idea written down, but speak YOUR words",
      "Think on your feet. Be real.",
    ],
    quote: "You will mess up. You will fumble. Sometimes it will be bad. But this is how you learn.",
    details: [
      {
        title: "Show Up Early",
        content: `The day came. The spotlight is on you.

You're going to feel nervous. You're going to feel like calling in sick. You're going to feel like not showing up at all.

**Show up anyway.**

Seriously. Just show up.

And here's the important part: **show up EARLY.**

Not "on time." Not "5 minutes before." EARLY.

Why?

Because you need time to get familiar with the environment.

Walk around the venue. Sit in different spots. Stand where you'll be speaking. Test the mic if you can. Feel the space.

This does two things:

1. It makes the space feel less scary because it's not completely foreign anymore
2. It gives you time to handle any last-minute issues before you're supposed to be on

That 30 minutes of just being there, getting comfortable, breathing in the space?

That can be the difference between walking on stage terrified and walking on stage ready.

So show up early. Always.`,
      },
      {
        title: "NEVER Have a Script",
        content: `I'm going to say this in all caps because it's that important:

**NEVER HAVE A SCRIPT.**

YESSSS. NEVER.

I said it. Never read it out. Never have things mugged up. It looks fake.

I know it feels safer to have everything written down word-for-word. I know it feels like if you just memorize the exact lines, you'll be fine.

But you won't be fine.

You'll be robotic. You'll sound like you're reciting. You'll lose the audience because you're not talking TO them, you're just performing AT them.

**So what do you do instead?**

Have an idea written up.

Know what the flow is going to be like. Know what you're covering. Know your main points.

But don't script the exact words.

**When you're up there:**

Think on your feet.

Speak YOUR language. YOUR words. YOUR tone. YOUR heart.

Because that's what people actually connect with.

They don't connect with perfectly memorized speeches. They connect with real humans being real.

**"But what if I forget what to say?"**

You will. And that's okay.

You'll pause. You'll think for a second. You'll find the words. And you'll keep going.

And the audience? They won't even notice. Because to them, you're just... talking. Like a normal human.

That's infinitely better than sounding like a robot reading a script.

So skip the script. Bring your authentic self instead.`,
      },
      {
        title: "You WILL Mess Up",
        content: `Let me just say this upfront so you're not surprised:

You will mess up.

You will fumble.

You will forget what you were saying mid-sentence.

You will say something awkward.

You will mispronounce a word.

Sometimes, it will be bad.

**And that's completely fine.**

This is how you learn. This is how you get better at this.

Every person you admire who's great at public speaking? They all went through this.

They all had that moment where they completely blanked on stage. They all said something stupid. They all fumbled through talks.

The difference is: they kept going.

They didn't let one bad moment stop them from trying again.

**So when you mess up (and you will):**

Don't freeze.

Don't apologize profusely.

Don't make it a bigger deal than it is.

Just... keep going.

Pause for a second if you need to. Take a breath. Find your thought. And continue.

Most of the time, the audience won't even realize you messed up. They don't have your script. They don't know what you planned to say.

They just know what you actually said. And if you keep going smoothly, they'll keep listening.

**The goal isn't perfection.**

The goal is authenticity, connection, and having the guts to try.

You're doing that just by showing up and speaking.

So mess up. Learn. Get better. Repeat.

That's the whole process.`,
      },
    ],
  },
  {
    id: 'onstage',
    stage: 'Center Stage',
    title: 'Under the Lights',
    visual: 'spotlight',
    intro: "You're on. The lights are bright. Everyone's watching. Here's what actually matters:",
    quickTips: [
      "Slow down — you're talking faster than you think",
      "Make eye contact with real people",
      "Pause after important points",
      "Tell stories, not just data",
    ],
    quote: "You at least had the guts to speak. Most people in that room didn't even do that.",
    details: [
      {
        title: "What Actually Matters On Stage",
        content: `You're standing there. Lights are on you. People are watching.

Your heart is probably racing. Your hands might be shaking a little. You're very aware that everyone is looking at you.

Here's what you need to focus on:

**Slow down.**

You're talking faster than you think you are. Everyone does this when they're nervous.

Your brain is going a mile a minute and your mouth is trying to keep up.

Consciously. Slow. Down.

Pause between thoughts. Take breaths. Let your words land before you rush to the next ones.

It will feel weirdly slow to you. But to the audience, it's the perfect pace.

**Make eye contact.**

Not with the back wall. Not with your notes. Not with some vague spot in the distance.

With actual real people.

Pick someone. Look at them for a second or two. Then pick someone else.

It makes your talk feel like a conversation, not a performance.

And it helps you gauge how people are responding. Are they nodding? Confused? Engaged? Bored?

Adjust accordingly.

**Pause after important points.**

This is a power move that almost no one uses.

When you say something important, don't immediately rush to the next thing.

Stop. Let it sit. Let people absorb it.

The silence feels awkward to you. But to the audience, it gives weight to what you just said.

Use pauses. They're more powerful than you think.

**Tell stories, not just data.**

People don't remember statistics. They remember stories.

If you're trying to make a point, illustrate it with a real example. A specific situation. A story from your own experience.

"Public speaking is scary" is generic.

"The first time I spoke at a major event, I literally forgot my opening line and just stood there in silence for what felt like an eternity" is memorable.

Stories stick. Data doesn't.

Use that.`,
      },
      {
        title: "When Things Go Wrong",
        content: `Things WILL go wrong. Let me tell you what to do when they do:

**If you forget what you were saying:**

Pause. Take a breath. Think for a second.

If it comes back to you, great. Continue.

If it doesn't, just skip to the next thing you remember.

The audience doesn't know what you planned to say. They only know what you actually say.

So just keep going. They won't even notice.

**If you say something wrong:**

If it's a minor mistake (wrong word, small error), just keep going. Don't draw attention to it.

If it's a major factual error that matters, quickly correct it: "Actually, I misspoke — it's X, not Y" and move on.

Don't dwell on it. Don't apologize ten times. Just correct and continue.

**If the mic cuts out / tech fails:**

Stay calm. Project your voice if you can. Make a lighthearted comment about it if appropriate.

Wait for someone to fix it. Don't panic.

Technical issues are not your fault and everyone knows that.

**If you completely blank:**

This is the worst fear, right? Total mind blank. You have no idea what you were talking about or where you were going.

Here's what you do:

Pause. Look at your notes if you have them. Find your place.

If you can't recover the exact point, just move to your next main point.

"So, moving on to..." or "Another important thing to consider is..."

Bridge to something you DO remember and keep going from there.

The audience wants you to succeed. They're not sitting there hoping you fail.

Give yourself grace. Recover. Continue.

**You at least had the guts to try.**

Most people in that room didn't even do that.

That alone makes you braver than them.

So own your mistakes, recover smoothly, and keep going.

That's all you can do. And it's enough.`,
      },
    ],
  },
  {
    id: 'aftermath',
    stage: 'After',
    title: 'The Art of Letting Go',
    visual: 'aftermath',
    intro: "Final and the most tough part: LET IT GO. (And yes, the art of letting go. Not your ex. Though humor helps.)",
    quickTips: [
      "The moment you step off stage, it's gone",
      "Don't replay it like cricket hot shots",
      "Don't overthink the part you messed up",
      "Be kind to yourself",
    ],
    quote: "My mind STILL replays embarrassing stuff and I want to slap myself. But that's exactly what you DON'T do.",
    details: [
      {
        title: "Let It Go",
        content: `This is the final part. And honestly? The hardest part.

**LET IT GO.**

The moment you step off that stage, it's done. It's over. It's in the past.

**Don't replay it like cricket hot shots.**

Don't sit there and rewatch every moment in your head, analyzing every mistake, cringing at every awkward pause.

**Don't stick to it like a dramatic tragedy.**

Don't carry it with you for days, weeks, months, replaying the worst moments on loop.

**Just... let it go.**

I know it's not easy.

Trust me. I've been there.

My mind STILL replays some embarrassing stuff from years ago and I genuinely want to go back in time and slap myself in the face.

But that's exactly what you DON'T have to do.

**Here's the thing:**

You're going to overthink it. You're going to fixate on the part you messed up. You're going to remember every stumble, every awkward moment, every time you forgot a word.

And you're going to ignore all the parts that went well.

Because that's what our brains do. They focus on the negative and dismiss the positive.

**But here's what you need to remember:**

You at least had the guts to speak.

Most people in that room didn't even do that.

Most people are too scared to even try.

You tried. You showed up. You spoke.

That alone is worth celebrating.

**So please. Be kind to yourself.**

Don't beat yourself up over mistakes that probably nobody even noticed.

Don't replay your failures on loop while ignoring your successes.

Don't let one bad moment overshadow the fact that you did something brave.

Let it go.

Learn from it if there's something to learn. But then release it.

It's over. You did it. Now move forward.

That's the art of letting go.

And it's the only way you'll be able to get back on stage and do it again.

Because you will do it again.

And each time, you'll be better.

But only if you let go of the last one.`,
      },
    ],
  },
  {
    id: 'advice',
    stage: 'Final Words',
    title: 'Advice from Aditi',
    visual: 'curtain-call',
    intro: "Being in the limelight, commanding attention, being center stage — it looks cool. It IS cool. But it's something even more than that.",
    quickTips: [
      "It's demanding and draining in ways people don't see",
      "It demands intellect, energy, humor, keeping everyone engaged",
      "Only do this if you LOVE it, if you genuinely want to",
      "If yes? Congratulations and condolences. But it will be worth it.",
    ],
    quote: "There's no rocket science here. Research. Show up. Speak from your heart. Let it go. Be a student, always.",
    details: [
      {
        title: "The Reality of Being Center Stage",
        content: `Let me be real with you about what this actually looks like:

Being in the limelight. Commanding attention and vibe. Being the center of attraction.

It looks cool, right?

It IS cool.

But it's something even more than that.

**It's demanding. And it's draining.**

It demands SO MUCH from you:

**Intellect** — you need to be sharp, knowledgeable, quick-thinking

**Energy** — you need to maintain high energy from start to finish

**Stress management** — you need to handle pressure without breaking

**Humor** — you need to keep things light and engaging

**Engagement** — you need to make sure everyone is engaged, no one is bored

And that's just the start.

**Here's something most people don't know:**

I haven't had any cold drink or ice cream in YEARS.

Maybe once in a very, very blue moon.

Why? Because it affects the texture of my voice.

That's the level of sacrifice we're talking about.

**It's draining.**

Smiling until your cheeks hurt.

Being at the same energy level from start to end and even AFTER that.

Maintaining the performance even when you're exhausted.

It drains you out. Not just energy. YOU.

Your mental capacity. Your emotional reserves. Your physical stamina.

All of it gets depleted when you're in the spotlight for hours.

**And here's the reality of what this actually looks like:**

I can do an 8-hour event.

With 10 hours backstage BEFORE that for preparation and setup.

And 6 hours of prep work before THAT.

The stage part — the actual performance everyone sees — might only be 2 hours.

But the total commitment is 24+ hours.

And then I'll be up again the next day to repeat the same thing.

**So here's what I need you to understand:**

Only do this if you LOVE it.

Only do this if you genuinely WANT to do it.

Not because it looks cool. Not because people will admire you. Not because it's prestigious.

Do it because you can't imagine NOT doing it.

Because even when it's exhausting, draining, demanding — you still want to be there.

**If your answer is yes?**

If you're genuinely willing to make those sacrifices? If you're ready for that level of commitment?

Then congratulations and condolences at the same time.

Because it's going to be hard. It's going to drain you. It's going to demand everything from you.

But trust me: it will be worth it.

Every second of it.`,
      },
      {
        title: "Final Thoughts",
        content: `So that's it. That's how you become a public speaker.

There's no rocket science in it.

**The formula:**

Research your topic thoroughly → Understand it deeply → Think from other perspectives → Prepare all of it → Show up early → Don't use a script → Speak from your heart → Let it go afterward → Learn and improve → Repeat.

That's the whole thing.

**You'll mess up.**

You'll fumble. You'll forget things. You'll have moments you want to forget.

But you'll also have moments where you absolutely crush it. Where you connect with the audience. Where you say exactly the right thing at the right time.

Both are part of the journey.

**The key is consistency.**

Keep showing up. Keep trying. Keep learning.

Every talk makes you better. Every experience teaches you something.

You won't be great immediately. Nobody is.

But if you keep at it? You'll get there.

**Resources:**

You can find more tools and resources in the journey tab, but here are a few to get you started:

**The Art of Public Speaking** — a must watch
https://www.youtube.com/watch?v=eIho2S0ZahI

**The Cutting Edge School** — not exactly public speaking, but you'll learn a LOT about communication from watching them
https://www.youtube.com/@CuttingEdgeSchool

**And remember:**

Be a student. Always.

No matter how good you get, there's always more to learn.

No matter how experienced you become, stay humble and keep improving.

That's what separates good speakers from great ones.

Great speakers never stop learning.

So keep learning. Keep growing. Keep showing up.

You've got this.

And I'm rooting for you.

Now go out there and speak. ✨`,
      },
    ],
  },
];

// Helper function to render text with clickable URLs
const renderTextWithLinks = (text: string, className: string = '') => {
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

export function SpeakingContent() {
  const [currentStage, setCurrentStage] = useState(0);
  const [visitedStages, setVisitedStages] = useState<Set<number>>(new Set([0]));
  const [expandedDetail, setExpandedDetail] = useState<string | null>(null);

  const handleNext = () => {
    if (currentStage < stages.length - 1) {
      const nextStage = currentStage + 1;
      setCurrentStage(nextStage);
      setVisitedStages(prev => new Set([...prev, nextStage]));
      setExpandedDetail(null);
    }
  };

  const handlePrevious = () => {
    if (currentStage > 0) {
      setCurrentStage(currentStage - 1);
      setExpandedDetail(null);
    }
  };

  const handleDetailClick = (title: string) => {
    setExpandedDetail(expandedDetail === title ? null : title);
  };

  const stage = stages[currentStage];
  const progress = ((visitedStages.size) / stages.length) * 100;

  const getCurtainState = () => {
    if (stage.visual === 'closed-curtain') return 'closed';
    if (stage.visual === 'backstage') return 'peek';
    if (stage.visual === 'wings') return 'opening';
    if (stage.visual === 'spotlight') return 'open';
    if (stage.visual === 'aftermath') return 'closing';
    if (stage.visual === 'curtain-call') return 'bow';
    return 'open';
  };

  const curtainState = getCurtainState();

  return (
    <div className="h-full flex flex-col relative overflow-hidden">
      {/* Decorative curtains */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          animate={{
            x: curtainState === 'closed' ? '0%' : curtainState === 'peek' ? '-35%' : curtainState === 'opening' ? '-40%' : curtainState === 'open' ? '-45%' : curtainState === 'closing' ? '-40%' : '-42%',
          }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="absolute left-0 top-0 bottom-0 w-1/2 bg-gradient-to-r from-accent/20 to-transparent"
          style={{ imageRendering: 'pixelated' }}
        />
        <motion.div
          animate={{
            x: curtainState === 'closed' ? '0%' : curtainState === 'peek' ? '35%' : curtainState === 'opening' ? '40%' : curtainState === 'open' ? '45%' : curtainState === 'closing' ? '40%' : '42%',
          }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-accent/20 to-transparent"
          style={{ imageRendering: 'pixelated' }}
        />
      </div>

      {/* Spotlight effect */}
      {stage.visual === 'spotlight' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 pointer-events-none z-0"
        >
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(167,139,250,0.15) 0%, transparent 70%)',
              filter: 'blur(40px)',
            }}
          />
        </motion.div>
      )}

      {/* Progress indicator */}
      <div className="mb-6 z-10 relative">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs text-muted-foreground uppercase flex items-center gap-2">
            <Mic size={12} strokeWidth={3} />
            Speaker's Journey
          </p>
          <p className="text-xs text-accent">{Math.round(progress)}% Complete</p>
        </div>
        <div className="h-2 bg-card border-2 border-primary" style={{ imageRendering: 'pixelated' }}>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
            className="h-full bg-primary"
            style={{ imageRendering: 'pixelated' }}
          />
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 z-10 relative flex flex-col overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStage}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="flex-1 flex flex-col overflow-hidden"
          >
            {/* Stage header */}
            <div className="border-4 border-primary bg-card/80 p-4 mb-4 flex-shrink-0" style={{ imageRendering: 'pixelated' }}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase mb-1">{stage.stage}</p>
                  <h2 className="text-primary text-xl">
                    <GlitchText>{stage.title}</GlitchText>
                  </h2>
                </div>
                <Sparkles className="text-accent" size={24} strokeWidth={3} />
              </div>
            </div>

            {/* Content area - scrollable */}
            <div className="flex-1 overflow-y-auto pr-2 space-y-4">
              <p className="text-lg text-foreground/90 leading-relaxed">
                {stage.intro}
              </p>

              <div className="space-y-2">
                {stage.quickTips.map((tip, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-accent text-base mt-1">→</span>
                    <p className="text-foreground/80 text-base leading-relaxed flex-1">{tip}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="border-l-4 border-accent pl-4 py-2 bg-accent/5"
                style={{ imageRendering: 'pixelated' }}
              >
                <p className="text-accent text-sm italic leading-relaxed">
                  "{stage.quote}"
                </p>
              </motion.div>

              {/* Expandable detail sections */}
              {stage.details && stage.details.length > 0 && (
                <div className="space-y-3 mt-6">
                  <p className="text-xs text-muted-foreground uppercase">Dive Deeper:</p>
                  {stage.details.map((detail, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                    >
                      <button
                        onClick={() => handleDetailClick(detail.title)}
                        className="w-full border-4 border-primary bg-card/50 p-4 text-left hover:bg-primary/10 transition-all group"
                        style={{ imageRendering: 'pixelated' }}
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="text-primary text-sm uppercase">{detail.title}</h4>
                          <motion.div
                            animate={{ rotate: expandedDetail === detail.title ? 45 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Plus size={16} className="text-primary" strokeWidth={3} />
                          </motion.div>
                        </div>
                      </button>

                      <AnimatePresence>
                        {expandedDetail === detail.title && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="border-x-4 border-b-4 border-primary bg-card/30 p-6 space-y-4">
                              {detail.content.split('\n\n').map((paragraph, j) => {
                                const parts = paragraph.split('**');
                                const hasMarkdown = parts.length > 1;

                                if (hasMarkdown) {
                                  return (
                                    <p key={j} className="text-base leading-relaxed">
                                      {parts.map((part, k) =>
                                        k % 2 === 1 ? (
                                          <span key={k} className="text-accent font-medium">
                                            {renderTextWithLinks(part)}
                                          </span>
                                        ) : (
                                          <span key={k} className="text-foreground/90">
                                            {renderTextWithLinks(part)}
                                          </span>
                                        )
                                      )}
                                    </p>
                                  );
                                }

                                // Handle list items
                                if (paragraph.startsWith('- ')) {
                                  return (
                                    <div key={j} className="flex items-start gap-3 ml-4">
                                      <span className="text-accent text-sm">→</span>
                                      <p className="text-foreground/90 text-sm leading-relaxed flex-1">
                                        {renderTextWithLinks(paragraph.replace('- ', ''))}
                                      </p>
                                    </div>
                                  );
                                }

                                return (
                                  <p key={j} className="text-foreground/90 text-base leading-relaxed">
                                    {renderTextWithLinks(paragraph)}
                                  </p>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Full-screen detail popup */}
      <AnimatePresence>
        {expandedDetail && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-8"
            onClick={() => setExpandedDetail(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl max-h-full overflow-y-auto border-4 border-accent bg-card p-8"
              style={{ imageRendering: 'pixelated' }}
            >
              <div className="flex items-start justify-between mb-6">
                <h3 className="text-accent text-xl uppercase flex-1">
                  <GlitchText>{stage.details?.find(d => d.title === expandedDetail)?.title}</GlitchText>
                </h3>
                <button
                  onClick={() => setExpandedDetail(null)}
                  className="p-2 border-4 border-accent text-accent hover:bg-accent hover:text-space-black transition-all"
                  style={{ imageRendering: 'pixelated' }}
                >
                  <X size={16} strokeWidth={3} />
                </button>
              </div>

              <div className="space-y-4">
                {stage.details?.find(d => d.title === expandedDetail)?.content.split('\n\n').map((paragraph, i) => {
                  const parts = paragraph.split('**');
                  const hasMarkdown = parts.length > 1;

                  if (hasMarkdown) {
                    return (
                      <p key={i} className="text-lg leading-relaxed">
                        {parts.map((part, j) =>
                          j % 2 === 1 ? (
                            <span key={j} className="text-accent font-medium">
                              {renderTextWithLinks(part)}
                            </span>
                          ) : (
                            <span key={j} className="text-foreground/90">
                              {renderTextWithLinks(part)}
                            </span>
                          )
                        )}
                      </p>
                    );
                  }

                  if (paragraph.startsWith('- ')) {
                    return (
                      <div key={i} className="flex items-start gap-3 ml-4">
                        <span className="text-accent text-base">→</span>
                        <p className="text-foreground/90 text-base leading-relaxed flex-1">
                          {renderTextWithLinks(paragraph.replace('- ', ''))}
                        </p>
                      </div>
                    );
                  }

                  return (
                    <p key={i} className="text-foreground/90 text-lg leading-relaxed">
                      {renderTextWithLinks(paragraph)}
                    </p>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-6 border-t-4 border-border z-10 relative flex-shrink-0">
        <motion.button
          onClick={handlePrevious}
          disabled={currentStage === 0}
          whileHover={currentStage > 0 ? { scale: 1.05, x: -5 } : {}}
          whileTap={currentStage > 0 ? { scale: 0.95 } : {}}
          className={`flex items-center gap-2 px-6 py-3 border-4 transition-all ${
            currentStage === 0
              ? 'border-border bg-muted text-muted-foreground cursor-not-allowed'
              : 'border-primary bg-primary text-primary-foreground hover:bg-transparent hover:text-primary'
          }`}
          style={{ imageRendering: 'pixelated' }}
        >
          <ChevronLeft size={16} strokeWidth={3} />
          <span className="text-xs uppercase">Previous</span>
        </motion.button>

        <div className="text-center">
          <p className="text-xs text-muted-foreground">
            Stage {currentStage + 1} of {stages.length}
          </p>
        </div>

        <motion.button
          onClick={handleNext}
          disabled={currentStage === stages.length - 1}
          whileHover={currentStage < stages.length - 1 ? { scale: 1.05, x: 5 } : {}}
          whileTap={currentStage < stages.length - 1 ? { scale: 0.95 } : {}}
          className={`flex items-center gap-2 px-6 py-3 border-4 transition-all ${
            currentStage === stages.length - 1
              ? 'border-border bg-muted text-muted-foreground cursor-not-allowed'
              : 'border-accent bg-accent text-accent-foreground hover:bg-transparent hover:text-accent'
          }`}
          style={{ imageRendering: 'pixelated' }}
        >
          <span className="text-xs uppercase">Next</span>
          <ChevronRight size={16} strokeWidth={3} />
        </motion.button>
      </div>
    </div>
  );
}
