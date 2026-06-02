import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, ArrowLeft } from 'lucide-react';
import { GlitchText } from '../GlitchText';

const destinations = [
  {
    id: 1,
    station: 'Moving Parts',
    brief: 'Juggling roles, recruiting volunteers, designing at 2 AM — community building is 47 skills in a trench coat.',
    content: `When you're building something for a community, you're basically juggling. A lot. Like, a LOT.

You're the person making the plan. You're the person recruiting volunteers. You're the person designing graphics at 2 AM. You're the person sending reminder emails. You're the person who forgot to book the venue until yesterday.

Community building isn't one skill — it's like 47 skills stacked in a trench coat pretending to be one job.

You need organizers (the people who actually make things happen), creators (the people who make things look good), communicators (the people who explain things without making everyone's eyes glaze over), and connectors (the people who somehow know everyone and can get things done with one text).

And guess what? You can't do all of it. You will try. You will fail. That's fine.

The trick is knowing which part you're good at, and finding people who fill in the gaps. Because if you try to be all four at once, you'll burn out before your first event even happens.`,
  },
  {
    id: 2,
    station: 'Start Why',
    brief: 'Communities form around problems, not interests. Find the pain point.',
    content: `Here's the thing nobody tells you: communities don't form around interests. They form around problems.

"I like tech" is not a reason to build a community. "I'm tired of feeling like the only person in this city who codes" — that's a reason.

"I enjoy public speaking" is not a reason. "I want a space where I can practice without being judged" — that's a reason.

If you can't explain the problem you're solving in one sentence, you don't have a community. You have a group chat that'll die in three weeks.

Ask yourself: What specific pain point am I addressing? What problem keeps people awake at night? What are they struggling with that no one else is helping them solve?

And no, "networking" is not a problem. It's a vague umbrella term people use when they don't know what they actually want.

Your why needs to be specific. It needs to be urgent. It needs to be something that makes people go, "Oh my god, FINALLY someone gets it."

If you start with why, everything else — the events, the structure, the messaging — falls into place. If you skip this step, you'll just be throwing spaghetti at the wall and wondering why nothing sticks.`,
  },
  {
    id: 3,
    station: 'Planning',
    brief: 'Winging it = chaos. Over-communicate the plan. Have backups for your backups.',
    content: `I used to think planning was boring. I used to think, "We'll just figure it out as we go!"

Spoiler: That's how you end up with three people showing up to an event you promised would have 50.

Planning isn't about being rigid. It's about having a map so when things go wrong (and they will), you know how to course-correct instead of spiraling into chaos.

A good plan includes:
- Clear timelines (what needs to happen by when)
- Backup plans (for when the speaker cancels 2 hours before)
- Task ownership (who is responsible for what, no "we'll all handle it" nonsense)
- Communication checkpoints (so no one disappears for a week and comes back like "oops sorry")

And here's the secret: over-communicate the plan. Send it in the group chat. Pin it. Make a doc. Make people acknowledge they read it. Because the number one reason things fall apart is that everyone thought someone else was handling it.

You don't need a 50-page document. You need clarity. You need everyone on the same page. You need to know that if you get hit by a bus tomorrow, someone else can pick up where you left off.

Plan like your life depends on it. Because your community's life definitely does.`,
  },
  {
    id: 4,
    station: 'Teamwork',
    brief: 'The hero complex will destroy you. Delegate. Trust people. Let go of perfection.',
    content: `Let me save you some time: the hero complex will destroy you.

You know that feeling where you think, "If I want it done right, I have to do it myself"? Yeah. That's ego talking. And ego is a terrible project manager.

Building a community is a team sport. If you try to solo carry, you will burn out. Fast. And when you burn out, the whole thing collapses because it was built on one person's unsustainable effort.

Delegation isn't weakness. It's survival.

Find people who care about the mission. Give them ownership. Let them make decisions. Let them mess up (because they will, and so will you). Let them surprise you by doing things better than you would've.

And here's the hard part: you have to let go of perfection. You have to accept that someone else's 80% is better than your 100% that never happens because you're too overwhelmed.

Trust your team. Celebrate their wins. Give them credit publicly. Build a culture where people feel valued, not like they're just there to execute your vision.

Because the best communities aren't built by one person. They're built by a group of people who all believe in the same thing and are willing to show up for it.`,
  },
  {
    id: 5,
    station: 'Stage Rush',
    brief: 'That terrifying moment before it starts. Then it works. That high is addictive.',
    content: `Okay, real talk: there's a moment right before an event starts where you're absolutely terrified.

You're standing there. People are walking in. You're thinking, "What if no one shows up? What if this flops? What if I look like an idiot?"

And then... it starts. And it works. And people are laughing, or learning, or connecting, or whatever you designed the event to do.

And you feel this rush. This high. This "oh my god, we actually pulled this off" energy.

That's the stage moment. That's the thing that makes all the late nights and stressful planning sessions worth it.

It's not about being perfect. It's not about everything going according to plan (because it won't). It's about creating something that didn't exist before. It's about bringing people together and watching them light up.

You'll remember that feeling. And it'll fuel you through the next event, and the one after that, and the one after that.

The stage moment is addictive. And honestly? It's the reason most of us keep doing this even when it's hard.

So yeah. It's scary. But it's also the best part. Lean into it.`,
  },
  {
    id: 6,
    station: 'Communication',
    brief: 'Poor communication kills momentum. Over-communicate. Acknowledge contributions.',
    content: `The fastest way to kill momentum? Poor communication.

Here's what happens: someone volunteers to help. They're excited. They want to contribute. And then... radio silence. No updates. No check-ins. They don't know what's going on. They feel lost. They ghost.

You just lost a volunteer because no one told them what to do.

Communication is the glue that holds a team together. Without it, people drift. They assume someone else is handling things. They stop showing up.

So here's the fix: over-communicate. Seriously. You think you're being annoying? You're not. You're being clear.

Send updates. Even if there's no news, send an update that says "no news yet, still working on it." People just want to know they're not forgotten.

Use shared docs. Use group chats. Use task management tools. Use whatever works for your team, but USE something. Don't rely on people's memories.

Set regular check-ins. Weekly syncs. Async updates. Whatever fits your rhythm.

And most importantly: acknowledge people's contributions. A quick "hey, thanks for handling that" goes a LONG way. People want to feel seen.

Communication isn't extra work. It's the work. Treat it like that.`,
  },
  {
    id: 7,
    station: 'Presenting',
    brief: 'Never read the slides. Talk to people, not at them. Authenticity beats polish.',
    content: `If you're presenting — whether it's pitching your community idea, leading a workshop, or speaking at your own event — here's the golden rule: never read the slides.

Your slides are visual aids. They're there to support you, not replace you.

If you're just reading bullet points off a screen, why are you even there? The audience could've gotten an email.

Talk TO people, not AT them. Make eye contact. Use your voice like a human being, not a robot running through a script.

Tell stories. Share examples. Make them laugh. Make them think. Make them feel something.

And here's the thing: it's okay to mess up. It's okay to forget a point. It's okay to stumble. People connect with authenticity, not perfection.

A messy, genuine presentation beats a polished, soulless one every single time.

Your slides should have big text, clear visuals, and minimal words. They should highlight the key idea, not explain it in 12-point font that no one can read from the back row.

You are the presentation. The slides are just there to back you up.

So practice. Know your material. And then trust yourself enough to speak like a human.`,
  },
  {
    id: 8,
    station: 'Empathy',
    brief: 'Design for them, not for you. Ask what they need. Listen more than you talk.',
    content: `Here's a trap a lot of community builders fall into: they design events for themselves.

They're like, "I think this topic is cool, so everyone else will too." And then they're shocked when no one shows up.

Building a community isn't about what YOU want. It's about what THEY need.

Who is your audience? What are they struggling with? What do they care about? What would make them say, "Yes, I need to be there"?

Don't assume. Ask. Talk to people. Run polls. Pay attention to what gets engagement and what doesn't.

And then design around that.

If your audience is beginners, don't throw advanced jargon at them. If your audience is busy professionals, don't schedule events at 2 PM on a Tuesday. If your audience values hands-on learning, don't just lecture at them for an hour.

Empathy is your superpower. Put yourself in their shoes. What would make this valuable for them? What would make this easy for them to attend? What would make them want to come back?

The best community builders are the ones who listen more than they talk. They pay attention. They adapt. They build for their people, not for their own ego.

Think like your audience. Always.`,
  },
  {
    id: 9,
    station: 'Human Contact',
    brief: 'Real conversations build communities. Meet people. Show up. Care about them as people.',
    content: `This one's simple, but people forget it all the time: talk to actual humans.

Not just online. Not just in group chats. Face-to-face. Voice-to-voice. Real conversations.

Yes, digital spaces are important. Yes, you need online communication. But if you want a community that lasts, you need human connection. Real, messy, imperfect human connection.

Meet people for coffee. Have one-on-one conversations. Ask them how they're doing, not just "are you coming to the next event?"

People don't stay in communities because of the events. They stay because of the relationships.

They stay because they feel seen. They feel valued. They feel like they matter.

And you can't build that through broadcast messages and templated emails. You build that through showing up. Through being present. Through caring about people as people, not just as attendees or volunteers.

So yeah. Put down the laptop sometimes. Have a real conversation. Build real relationships.

That's what community actually is.`,
  },
  {
    id: 10,
    station: 'Advice from Aditi',
    brief: 'A message for you.',
    content: `Your first event is probably gonna be a disaster. Like, genuinely chaotic.

Maybe five people show up instead of fifty. Maybe the projector doesn't work. Maybe you forget half your talking points and just... ramble.

And you know what? That's fine. That's how it starts.

Every community builder you admire? They all had that first messy event where nothing went according to plan. The difference is they showed up for event number two anyway.

You're not building a perfect machine. You're building relationships. And relationships are messy and human and imperfect by design.

So stop waiting for the perfect plan, the perfect team, the perfect venue, the perfect anything.

Start with what you have. Start with the people who said yes. Start with the problem you want to solve.

Because here's the secret: your community doesn't need you to be perfect. They need you to care enough to try.

They need someone who shows up consistently. Someone who listens. Someone who makes space for them.

That's you. You're already doing it by being here, learning, trying.

So go build something. Even if it's small. Even if it's scrappy. Even if you're scared.

The world needs more people who give a damn. Be one of them. ✨`,
  },
];

export function CommunityContent() {
  const [selectedDestination, setSelectedDestination] = useState<number | null>(null);
  const [visitedDestinations, setVisitedDestinations] = useState<Set<number>>(new Set());

  const handleStationClick = (id: number) => {
    setSelectedDestination(id);
    setVisitedDestinations(prev => new Set([...prev, id]));
  };

  const handleBack = () => {
    setSelectedDestination(null);
  };

  if (selectedDestination !== null) {
    const destination = destinations.find(d => d.id === selectedDestination)!;

    return (
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.3 }}
        className="h-full flex flex-col"
      >
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 px-3 py-2 border-4 border-accent text-accent hover:bg-accent hover:text-space-black transition-all"
          >
            <ArrowLeft size={18} strokeWidth={3} />
            <span className="text-xs">Map</span>
          </button>
          <div className="border-l-4 border-accent pl-4 flex-1">
            <h3 className="text-accent mb-1 text-sm">
              <GlitchText>{destination.station}</GlitchText>
            </h3>
            <p className="text-[10px] text-muted-foreground">
              Station {destination.id} of {destinations.length}
            </p>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto pr-4">
          <div className="space-y-6">
            {destination.content.split('\n\n').map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-xl text-foreground/90 leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      <div className="border-l-4 border-accent pl-4 mb-6">
        <h3 className="text-accent mb-2 text-sm">
          <GlitchText>community.journey</GlitchText>
        </h3>
        <p className="text-[10px] text-muted-foreground">
          A map of building things that bring people together.
        </p>
      </div>

      <div className="mb-8 p-4 border-4 border-accent/30 bg-accent/5">
        <p className="text-base text-foreground/90 leading-relaxed">
          Building a community isn't one big thing. It's a bunch of small things you learn along the way. Click any station below to explore that part of the journey.
        </p>
      </div>

      <div className="flex-1 overflow-y-auto pr-4">
        <div className="relative">
          {/* Journey path line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-accent/30" />

          <div className="space-y-6">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Station marker */}
                <div className="absolute left-8 top-5 w-4 h-4 -translate-x-1/2">
                  <motion.div
                    animate={{
                      scale: visitedDestinations.has(destination.id) ? [1, 1.2, 1] : 1,
                    }}
                    transition={{ duration: 0.5 }}
                    className={`w-full h-full border-4 ${
                      visitedDestinations.has(destination.id)
                        ? 'border-accent bg-accent'
                        : 'border-muted-foreground bg-card'
                    }`}
                    style={{ imageRendering: 'pixelated' }}
                  />
                </div>

                {/* Station card */}
                <motion.button
                  onClick={() => handleStationClick(destination.id)}
                  whileHover={{
                    scale: 1.02,
                    x: 5,
                    boxShadow: '0 0 20px rgba(34,211,238,0.3)',
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="ml-16 mr-2 text-left p-3 border-4 border-border hover:border-accent bg-card hover:bg-accent/5 transition-all group"
                  style={{ imageRendering: 'pixelated' }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0 space-y-2">
                      <div className="flex items-center gap-2">
                        <MapPin
                          size={14}
                          className={`flex-shrink-0 ${
                            visitedDestinations.has(destination.id)
                              ? 'text-accent'
                              : 'text-muted-foreground'
                          } drop-shadow-[0_0_4px_currentColor]`}
                          strokeWidth={3}
                        />
                        <h4 className="text-foreground group-hover:text-accent transition-colors text-sm truncate">
                          {destination.station}
                        </h4>
                      </div>
                      <p className="text-xs text-muted-foreground group-hover:text-foreground/80 transition-colors leading-snug">
                        {destination.brief}
                      </p>
                    </div>
                    <motion.div
                      animate={{
                        x: [0, 5, 0],
                      }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="text-accent opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                    >
                      →
                    </motion.div>
                  </div>
                </motion.button>
              </motion.div>
            ))}
          </div>

          {/* End marker */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: destinations.length * 0.1 + 0.3 }}
            className="relative mt-6"
          >
            <div className="absolute left-8 top-0 w-4 h-4 -translate-x-1/2">
              <motion.div
                animate={{
                  scale: visitedDestinations.size === destinations.length ? [1, 1.3, 1] : 1,
                  rotate: visitedDestinations.size === destinations.length ? [0, 360] : 0,
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className={`w-full h-full ${
                  visitedDestinations.size === destinations.length
                    ? 'bg-accent drop-shadow-[0_0_8px_currentColor]'
                    : 'bg-muted-foreground/30'
                }`}
                style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)', imageRendering: 'pixelated' }}
              />
            </div>
            <div className="ml-16 mr-2 p-3 border-4 border-accent/30 bg-accent/5" style={{ imageRendering: 'pixelated' }}>
              <p className="text-sm text-accent">
                {visitedDestinations.size === destinations.length
                  ? '✨ Journey complete! You explored all stations.'
                  : `${visitedDestinations.size} / ${destinations.length} stations visited`}
              </p>
              {visitedDestinations.size === destinations.length && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs text-foreground/80 mt-2 leading-snug"
                >
                  It's okay to be nervous. It's okay to make a mess. The mess lives in your brain. It's temporary. But the growth? That's permanent. ✨
                </motion.p>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
