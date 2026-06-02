import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, ChevronRight, ArrowRight, X } from 'lucide-react';
import { GlitchText } from '../GlitchText';

interface Command {
  id: string;
  cmd: string;
  title: string;
  number: number;
  content: string;
}

const commands: Command[] = [
  {
    id: 'basics',
    cmd: 'basics.config',
    title: 'The Basics',
    number: 1,
    content: `Here's the thing about event management that nobody really tells you upfront:

It doesn't matter if you're the leader running the whole show, or just part of the organizing team, or this is your first event ever, or honestly you're just doing this to put it on your resume and peace out.

The fundamentals don't change.

The basics are ALWAYS the same. No matter what kind of event. No matter the size. No matter if it's 20 people in a classroom or 500 people in an auditorium.

Three things. That's it.

**Communication. Teamwork. Planning.**

That's the foundation. Everything else builds on top of this.

Quick note: organizing events is also a huge part of community building, which I've covered in the COMMUNITY tab. But here? We're going to focus mainly on the behind-the-scenes core management part — the actual nuts and bolts of making an event happen without losing your mind.

Let me break it down:

**Communication** is how information flows. Who knows what. Who's doing what. What's the status. What changed. What broke. What needs to happen next. If your communication sucks, people will be confused, tasks will get dropped, and things will fall apart.

**Teamwork** is how work actually gets done. No one person can run an entire event alone. You need people. You need them to show up. You need them to work together. You need them to have each other's backs when things get messy.

**Planning** is how you prepare for the chaos. You can't prevent everything from going wrong, but you CAN have a game plan for when it does. You can have backups. You can have contingencies. You can have someone who knows what to do when the original plan explodes.

Without these three?

Your event is not happening. Or if it does happen, it's going to be such a disaster that you'll wish it hadn't.

I'm serious. You cannot skip the basics.

You can't just "wing it" and hope vibes carry you through. You can't assume everyone just magically knows what to do. You can't think "eh, we'll figure it out on the day."

That is how you end up standing in an empty room wondering where everyone is because nobody sent the venue address and half your team thought the event was tomorrow.

So before you start getting creative with themes and thinking about what snacks to serve and designing cool posters:

Get your communication right. Build your team. Make a plan.

Everything else comes after.`,
  },
  {
    id: 'planning',
    cmd: 'planning_protocol.sh',
    title: 'Planning (Again)',
    number: 2,
    content: `I'm going to say this one more time, louder for the people in the back who keep ignoring it:

**PLAN. EVERYTHING. WRITE IT DOWN.**

I know planning sounds boring. I know it feels like overkill. I know you're thinking "we're smart people, we can just figure it out as we go."

No. You can't.

You know what happens when you don't plan? Chaos. Not the fun kind. The kind where you're running around 30 minutes before the event starts trying to find ANYONE who knows where the extension cords are, and nobody does, because nobody planned for equipment setup.

So let me be very clear about what planning actually means:

Planning doesn't mean nothing will go wrong. Things WILL go wrong. The speaker will show up late. The projector won't work. The catering will forget the vegetarian option. Someone will spill coffee on the sign-in sheet. It's going to be a mess.

But here's what planning DOES mean:

When everything goes sideways (and it will), you'll at least have thought through the scenarios beforehand. You'll remember "okay, we talked about what to do if the speaker is late — we have backup content." You'll know who to call. You'll have a backup plan. You'll be able to handle it without having a complete meltdown.

Planning is insurance against your own panic.

So what do you actually need to plan?

**Venue:**
- Where is it
- When did you book it
- Who's the point of contact
- What time can you access it for setup
- Where do people park
- Is it accessible
- What's the WiFi password
- Where are the bathrooms
- What's the backup if this falls through

**Who's doing what:**
And I mean SPECIFIC assignments. Not "someone will handle registration." WHO is handling registration. What's their backup if they can't make it. Who do they report to if there's a problem.

Make a list:
- Who's managing registration/check-ins
- Who's handling tech (laptop, projector, mics, speakers)
- Who's managing the stage/speakers
- Who's running social media before/during/after
- Who's taking photos
- Who's handling attendee questions
- Who's managing the timeline and keeping things on schedule
- Who's the point person for emergencies

**Amenities:**
What does your event actually need?
- Tables, chairs, extension cords, adapters
- Microphones, speakers, projector, screen
- Name tags, sign-in sheets, pens
- Water, snacks, meals (and dietary restrictions!)
- Banners, posters, decorations
- Swag or handouts
- First aid kit (seriously)

**Tech setup:**
This deserves its own section because tech ALWAYS breaks.
- What equipment do you need
- Who's bringing it
- Who knows how to set it up
- Do you have ALL the cables and adapters
- Is there a backup laptop
- Is there a backup way to present if the projector dies
- Who's testing everything before the event starts
- What's the WiFi situation (have a mobile hotspot ready)

**Production:**
- Sound check: when, who's doing it
- Microphone setup: who's holding it, is it wireless, is it charged
- Projector/screen: who's managing slides, who has the clicker
- Stage setup: where do people stand, how do they get on/off
- Audience management: where do people sit, how do you handle overflow

**Communication:**
- How are you announcing the event
- When do announcements go out
- Who's writing them
- What platforms (email, social media, WhatsApp, etc)
- When do reminders go out
- Who's managing RSVPs
- How do you handle last-minute changes

**The One Person:**
This is critical. Who is the person who takes over when ANYTHING goes wrong, regardless of whether it's "their job" or not.

This is your jugaad person. Your troubleshooter. The person who just makes things work.

Make sure everyone on the team knows who this is. Make sure this person knows they're this person.

**Backups for EVERYTHING:**
- Backup speakers (in case someone cancels)
- Backup equipment (in case something breaks)
- Backup venue contact (in case the main person is unreachable)
- Backup plans (in case WiFi dies, projector breaks, schedule runs over)
- Backup for yourself (someone who can run things if you're sick or stuck)

And here's the thing people always forget:

**DOCUMENT ALL OF THIS.**

Write it down. Somewhere everyone can access it.

I don't care if it's Notion, Google Docs, Excel, Trello, a shared WhatsApp message, a physical notebook you scan and send to everyone, sticky notes on a wall that you photograph.

Just. Write. It. Down.

I use Notion because it's easy to share with the team, everyone can edit it in real-time, people can check off tasks as they finish them, and it's all in one place.

But honestly? Use whatever works for your team.

The point is: your plan needs to exist outside of your brain.

Because here's what happens if it doesn't:

You'll forget something critical. Or you'll be the only person who knows something important, and when you're busy handling a crisis, nobody else can step in because they don't know what you know.

The goal is this: if you got hit by a bus tomorrow, could someone else pick up your planning doc and run the event?

If the answer is no, your documentation isn't good enough.

Plan like your life depends on it. Because your event definitely does.`,
  },
  {
    id: 'communication',
    cmd: 'communication_bridge.exe',
    title: 'Communication',
    number: 3,
    content: `Okay I need you to really hear this:

Communication matters SO MUCH MORE than you think it does.

Like, I cannot stress this enough. If your team communication is bad, your event is not happening. Period.

I've seen more events fall apart because of poor communication than because of actual technical failures.

Here's what happens when communication breaks down:

Someone assumes Person A is handling venue booking. Person A thinks Person B is handling it. Guess what? Nobody books the venue. You find out three days before the event. Congratulations, you now have no location.

Someone sends an announcement with the wrong date. 50 people show up a day early. Or a day late. Either way, disaster.

The tech team doesn't know the event starts at 2pm, they think it's 3pm. They show up to set up at 2:30. Your event is starting in 30 minutes and nothing is ready.

One person has the WiFi password. They're stuck in traffic. Nobody can get online. Your entire check-in system is digital. Cool cool cool.

This is all communication failures. And they're all completely preventable.

So here's what good communication actually looks like:

**Everyone on the team knows EVERYTHING.**

Not just their part. Everything.

Why? Because if they don't know about something, they'll make assumptions. They'll think someone else is handling it. They'll fill in gaps with guesses. And those guesses will be wrong.

So over-communicate. Tell people things even if you think they already know. Repeat important information. Confirm and re-confirm.

You think you're being annoying? Good. Be annoying.

Better to send one too many reminder messages than to watch your event fall apart because someone missed one critical piece of information.

**Make it impossible to miss important updates.**

Send messages in the group chat. Pin them. Follow up with individual DMs to key people. Create a shared doc with all critical info. Send email summaries. Use every channel you have.

Because people are busy. They're juggling a million things. Messages get buried. Notifications get missed.

Your job is to make it so obvious and so repetitive that there's no way someone can miss something important.

**It's not just your team.**

You also need to communicate with attendees. Before, during, and after.

Before: Announcements, reminders, logistics (where, when, what to bring, parking info, etc)

Don't just send one announcement and call it done. Send a reminder a week before. Another reminder the day before. A final one the morning of.

Include EVERYTHING they need to know:
- Date and time (be specific about timezone if relevant)
- Exact location (not just building name, but room number, floor, how to find it)
- Parking or transit info
- What to bring
- What to expect
- Who to contact if they have questions

During: Keep people updated if anything changes. Delays, room changes, schedule adjustments — communicate it immediately.

After: Thank people for coming. Share photos or recordings if you have them. Ask for feedback. Keep the momentum going.

And here's something people forget: sometimes you need to communicate with people individually, not just in group announcements.

Check in with specific people. Ask if they have questions. Make them feel like they matter. Build relationships.

**The group chat is your lifeline.**

Make a group chat for your organizing team. WhatsApp, Telegram, Slack, Discord, whatever everyone actually uses.

Keep everyone updated about literally everything that's happening. Every decision. Every change. Every update.

"Just booked the venue, confirmed for 2pm setup"
"Sent the announcement, here's the link"
"Tech team can't make it for setup, found a replacement"
"20 new RSVPs this morning, total count now at 87"

Everything. All of it. In the group chat.

Why? Because then everyone has the same information at the same time. No one is out of the loop. No one is making decisions based on outdated info.

And if you need to make a quick decision, you can ping the group and get input fast.

**Here's the test:**

If you got hit by a bus right now, could your team pick up exactly where you left off?

Do they know:
- What needs to happen next
- Who's responsible for what
- What's already done
- What's still pending
- Who to contact for various things
- Where all the important info is stored

If anyone would be confused or stuck, your communication needs work.

The goal is that at any moment, anyone on the team could step into any role and know what to do.

That only happens with really, really good communication.

**KEEP. EVERYONE. UPDATED.**

I'm going to say it again because it's that important:

Keep everyone updated. All the time. About everything.

Over-communicate until it feels excessive. Then communicate a little more.

That's what good event communication looks like.

(Pro tip: Tools like Notion are great for this. You can have a shared workspace where everyone can see the task list, check off what's done, add notes, upload files, track decisions. Everyone stays synced without having to read through 500 group chat messages to figure out what's happening. I'll share some Notion tutorial links at the end if you want to learn how to set this up for your team.)`,
  },
  {
    id: 'coordination',
    cmd: 'team_coordination.json',
    title: 'Teamwork & Coordination',
    number: 4,
    content: `**WITHOUT COORDINATION, YOUR EVENT WILL BE A COMPLETE DISASTER.**

Sorry for yelling. But I need you to really understand this.

Coordination is what separates a smooth event from absolute chaos.

You can have the best plan in the world. You can have amazing communication. But if your team isn't coordinated — if people aren't working together, if everyone's doing their own thing, if nobody's in sync — it's all going to fall apart.

Coordination means everyone is moving together. Like a machine where all the parts work in sync.

It's telepathy, kind of. Not literally, but kind of.

It's when you look at someone across the room and you both just KNOW that you need to handle something. Or when someone starts a sentence and you finish it because you're both thinking the same thing. Or when a problem pops up and three people jump on it without even discussing it because you all just understand the system.

That's coordination.

And it comes from planning, communication, and practice working together. But it also comes from being an actual team player.

**Being a team player means:**

Showing up when you said you would.

Doing what you committed to do.

Helping others when they're overwhelmed even if it's "not your job."

Communicating proactively instead of waiting for someone to ask.

Speaking up when you see a problem instead of assuming someone else will handle it.

Taking ownership of your part while also caring about the whole event, not just your slice of it.

**Now let's be real:**

There will be days when you disagree with people on your team. Days when you're frustrated with someone. Days when you straight-up don't like someone you're working with.

That's normal. That's human.

Teams are made of humans, and humans are messy.

But here's the thing:

You're part of something bigger than your personal feelings.

The event isn't about you. It's not about your ego. It's not about proving you're right or making someone else look bad.

It's about the attendees. It's about the community. It's about the thing you're trying to create together.

And your value — your actual value — doesn't come from what people think of you.

It comes from what you bring to the table. The work you do. The problems you solve. The way you show up.

And trust me: you bring a lot.

So if you're ever tempted to ditch the event just to spite someone, or to make someone else look bad, or because you're mad about something:

Don't.

That doesn't make them look bad. It makes YOU look like someone who can't put their ego aside for something bigger.

And honestly? Ditching something you actually care about, something you actually love doing, just to hurt someone else?

That's just... sad. You're punishing yourself more than them.

**Most of the time, talking things out works.**

If you have a problem with someone, or a disagreement about how something should be done, or you're frustrated about something:

Talk. About. It.

Don't let it fester. Don't complain to everyone else but the actual person. Don't passive-aggressively sabotage things.

Just talk.

"Hey, I'm confused about who's handling X, can we clarify?"
"I think we're approaching this differently, can we align on the goal?"
"I'm feeling overwhelmed with my tasks, can someone help?"
"I noticed X isn't getting done, what's the blocker?"

Most conflicts come from miscommunication or mismatched expectations. And most of those can be resolved by just... talking like adults.

**But sometimes, people won't listen.**

Sometimes you'll try to communicate and it just doesn't work.

Sometimes people are difficult. Or stubborn. Or they just don't care.

And that's okay.

You can't control other people. You can only control yourself.

So here's what you do:

Set your boundaries. Know what you're willing to do and what you're not. Communicate those boundaries clearly. Respect them.

But still show up. Still do your part. Still be the team player.

Not for them. For the event. For the attendees. For yourself and your own integrity.

Because at the end of the day, you want to be able to look back and know you gave it your best. That you were professional. That you were reliable. That you showed up.

That matters more than whatever petty drama was happening behind the scenes.

**Give more than what's expected.**

Here's something I've learned:

The people who stand out aren't the ones who just do their assigned tasks and clock out.

They're the ones who see a problem and fix it without being asked.

The ones who help someone who's struggling even though it's "not their job."

The ones who stay late to make sure everything's ready.

The ones who bring solutions instead of just complaints.

Be that person.

Not because you want recognition (though you'll probably get it).

But because that's what makes events actually work.

Coordination isn't just about everyone doing their part. It's about everyone caring about the whole thing enough to step up when needed.

That's when magic happens.`,
  },
  {
    id: 'networking',
    cmd: 'networking_module.py',
    title: 'Networking',
    number: 5,
    content: `Networking will help you. Always. Especially in the long run.

Let me reframe this: networking is just knowing people. And knowing people makes everything easier.

Need a venue on short notice? You know someone. Need a speaker? You know someone. Need advice? You know someone who's been there.

That's networking. And it's incredibly valuable.

**How to actually build a network:**

Just. Talk. To. People.

Seriously, that's it. No complicated strategy. No business cards. Just conversations.

**The secret: Talk about THEM.**

People love talking about themselves. Ask about their work, projects, challenges. Then actually LISTEN to their answers.

Most people just wait for their turn to talk. If you actually listen, you'll stand out immediately.

**Cheat code: Ask for advice.**

People LOVE giving advice. It makes them feel helpful and valued.

"Can I ask your advice about something?"
"You've done this before — what would you recommend?"

Works every time. And it builds real connections.

**Network with everyone, not just "up."**

Don't only talk to seniors or experts.

Network with peers. Juniors. People just starting out.

Everyone has something valuable. Everyone knows something you don't. That first-year person might become super successful later — or know someone who is.

The best networks are diverse.

**After-event networking is GOLD.**

After your event, talk to everyone who approaches you. Thank them. Ask what they thought. Ask what they're working on.

Those 5-minute conversations matter so much.

Follow up with people later. Check in. Not because you need something, but because you care.

People remember that.

**Networking is long-term.**

You won't see immediate results. That's okay.

You're planting seeds. Some grow immediately, some take years.

But every conversation, every connection builds up. Eventually you'll know people everywhere, and things that used to be hard are now just a message away.

It's not manipulation. It's not being fake.

It's genuinely connecting with people. Building real relationships. Helping each other. Being part of a community.

Do that, and your network will take care of itself.`,
  },
  {
    id: 'leadership',
    cmd: 'true_leadership.exe',
    title: 'True Leadership',
    number: 6,
    content: `Okay. Leadership.

This isn't exactly beginner-level stuff. It's more advanced. But it's important enough that I'm including it anyway, because too many people get leadership completely wrong.

If you're the leader — or the face of the event, or representing a community, or in any position of power — you need to hear this.

And I'm going to hold your hand while I say this because it might hurt:

**You cannot do everything alone and take all the credit.**

I know you want to. I know you think you're the only one who can do it right. I know your ego is screaming that if you're in charge, you should be the one doing the work.

But that's not leadership. That's just ego with a title.

If you're a good leader, you'll get recognition anyway. You don't need to hoard it. You don't need to micromanage everything. You don't need to be the hero of every story.

Actually, let me be even more direct:

**The people working with you should not be scared of you.**

If your team is scared of you, or walking on eggshells around you, or avoiding bringing up problems because they don't want to face your reaction:

You're not a leader. You're just someone with power who's making everyone miserable.

And honestly? They're probably not even that scared. You don't have as much power as you think you do.

They're just... putting up with you. Tolerating you. Waiting for this event to be over so they don't have to deal with you anymore.

And that's sad. For everyone involved.

**Real leadership is about trust.**

As a leader, people need to trust you. Actually, genuinely trust you.

They need to know that no matter what happens — even if they mess up, even if things go wrong — you have their back.

They need to feel safe around you. Comfortable. Like they can speak up without being shut down or humiliated or ignored.

They need to know they can come to you with problems, ideas, concerns, and you'll actually listen instead of just telling them to deal with it.

That's what creates a good team. Trust. Safety. Respect.

Not fear. Not control. Not hierarchy.

**You can be strict without being cruel.**

Let me be clear: I'm not saying you need to be everyone's best friend. I'm not saying you can't have standards or expectations.

You can be disciplined. You can hold people accountable. You can be direct when something isn't working.

But you can NEVER be rude. Never arrogant. Never disrespectful.

There's a difference between:

"This didn't work, let's figure out what went wrong and fix it"

and

"What were you thinking? This is terrible. Can't you do anything right?"

Same message. Completely different delivery. Completely different impact.

**Protect people's dignity.**

This is non-negotiable.

You protect your team's dignity. In public AND in private.

If someone messes up, you don't humiliate them in front of everyone. You don't make them feel small. You don't belittle them.

You pull them aside. You talk about what happened. You figure out how to fix it together. You make it a learning moment, not a punishment.

And in public? You protect them. Even if they made a mistake. Even if you're frustrated.

You can address it later privately. But publicly, you have their back.

**Back people up when they make decisions.**

Here's a test of good leadership:

Someone on your team makes a decision when you're not around. It's within their area of responsibility, but you weren't consulted.

What do you do?

A bad leader gets upset. "How dare they make that call without me? Don't they know I'm in charge?"

A good leader thinks: "Good. They trusted their judgment. They took ownership. They didn't wait for me to hold their hand."

And then — this is key — you BACK THEM UP.

Win or lose. Right or wrong.

If the decision works out great, you celebrate them.

If it doesn't work out, you take responsibility. "That was my call" or "We made a judgment call as a team and it didn't pan out."

You don't throw them under the bus. You don't say "well I wasn't even consulted on this."

You protect them. Because that's what leaders do.

And you know what happens when you do this?

Your team trusts you. They feel empowered. They take ownership. They make good decisions because they know you trust them.

And next time, they'll make an even better call. Because they're learning, and they feel safe to try.

**If you do all of this, you're a real leader.**

Not just someone with a title. Not just someone coordinating tasks.

A leader people actually respect.

The kind of leader people WANT to work with. The kind they'll remember years later. The kind they'll say "I'd work with them again in a heartbeat."

And honestly? More than any medal, award, recognition, or achievement:

That respect. That trust. Those relationships.

That's the real reward of leadership.

**Being a leader is hard.**

It's not going to be easy. It never is.

You're taking responsibility for things that aren't even your fault. You're managing personalities and egos and conflicts. You're making decisions when there's no clear right answer. You're staying calm when everything's on fire. You're supporting people even when you're stressed out yourself.

It's exhausting. It's thankless sometimes. It's a lot.

But it's worth it.

When you see your team come together. When you watch something you all built succeed. When people thank you not for the event, but for the experience of working with you.

That's when you know it was worth it.

**Remember this:**

As a leader, you walk in front. You're the first one to take hits. When things go wrong, it falls on you.

When there's criticism, when there's blame, when there's pressure — you shield your team from it. You take the heat.

But when you celebrate? When you win? When you succeed?

You step back. You push your team forward. THEY get the spotlight. THEY get the applause. THEY get the credit.

You're in the back, watching them shine. Watching them get recognized. Watching them celebrate.

And you know what?

If you're the kind of leader I just described?

If you protect your people, trust them, respect them, support them?

They won't let you stay in the back.

They'll pull you forward. They'll make sure you're recognized. They'll insist that you're part of the celebration.

Not because you demanded it. But because you earned it.

And that — that right there — is what true leadership looks like.`,
  },
  {
    id: 'advice',
    cmd: 'advice_from_aditi.txt',
    title: 'Advice from Aditi',
    number: 7,
    content: `Show up.

That's it. That's the advice.

No matter how unprepared you feel. No matter how nervous you are. No matter how new you are to this or how badly you think things are going.

Just. Show. Up.

**You're not going to feel ready.**

Ever.

I've been doing this for years and I still get nervous before events. I still worry things will go wrong. I still question my decisions.

That feeling doesn't go away. You just get better at doing it anyway.

You know what separates people who succeed from people who don't?

It's not talent. It's not connections. It's not some special skill.

It's showing up. Consistently. Even when it's hard.

Especially when it's hard.

**No one is born knowing this.**

The people you admire? The ones who seem so confident and capable?

They were exactly where you are right now.

Scared. Unsure. Winging it. Making mistakes. Feeling like an imposter.

The only difference between them and everyone else is that they kept showing up.

They organized that first terrible event. And then another. And another.

They made mistakes. They learned. They got better.

But they never stopped showing up.

**You will make mistakes.**

A lot of them.

You'll book the wrong venue. You'll forget to send announcements. You'll underestimate how long setup takes. You'll overcommit and burn out. You'll say yes to too many things. You'll trust the wrong people. You'll plan poorly. You'll communicate badly.

You'll have events where almost nobody shows up. Events where everything that could go wrong does go wrong. Events where you want to just quit and never try again.

That's all normal.

That's part of the process.

Every single person who's good at this went through that. All of us.

**The mess is temporary. The growth is permanent.**

Every mistake you make? You learn from it.

Every hard situation? You get stronger.

Every event that goes wrong? You get better at handling chaos.

It all builds. It all compounds.

And one day you'll look back and realize:

You know how to run an event. You know how to manage a team. You know how to handle crisis situations. You know how to make things work even when everything's broken.

Not because you read about it. Because you DID it.

**You will become everything you ever dreamed of.**

And more.

I genuinely believe this.

If you keep showing up. If you keep trying. If you keep learning.

You'll get there.

You'll organize events that actually matter. You'll build communities. You'll help people. You'll create something real.

You'll be the person other people look up to. The person they ask for advice. The person who makes things happen.

Not because you're special. But because you didn't give up.

**So just start.**

Start messy. Start scared. Start with your first event that's probably going to be a disaster.

Start with five people in a room and no idea what you're doing.

Start with mistakes and chaos and figuring it out as you go.

Just start.

And then keep going.

That's the secret. There is no secret.

Show up. Try. Learn. Improve. Repeat.

That's how you get good at this.

That's how you become the person you want to be.

---

Okay that got really emotional.

Let me balance it out with something practical.

Here are those Notion tutorials I promised:

**Notion Basics:**
This covers everything you need to get started with Notion for event planning. English and Hindi options available.

**More Notion Help:**
If you want another explanation or need more detail.

**Official Notion Channel:**
They have tutorials for literally everything. Event planning templates, team workspaces, task management, all of it.

Use these. Build a system. Make your life easier.

And if you want more tools, templates, resources — check out the journey folder.

Now go organize something. ✨`,
  },
];

export function EventsContent() {
  const [showTerminal, setShowTerminal] = useState(false);
  const [selectedCommand, setSelectedCommand] = useState<string | null>(null);
  const [executedCommands, setExecutedCommands] = useState<Set<string>>(new Set());

  const handleDiveDeeper = () => {
    setShowTerminal(true);
  };

  const handleCommandClick = (cmdId: string) => {
    setSelectedCommand(cmdId);
    setExecutedCommands(prev => new Set([...prev, cmdId]));
  };

  const handleCloseCommand = () => {
    setSelectedCommand(null);
  };

  const selectedCommandData = commands.find(c => c.id === selectedCommand);

  return (
    <div className="h-full flex flex-col relative">
      <AnimatePresence mode="wait">
        {!showTerminal ? (
          <motion.div
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full flex flex-col overflow-hidden"
          >
            <div className="border-l-4 border-primary pl-4 mb-6">
              <h3 className="text-primary mb-2 text-sm">
                <GlitchText>event_management.start</GlitchText>
              </h3>
              <p className="text-[10px] text-muted-foreground">
                Behind-the-scenes chaos management system
              </p>
            </div>

            <div className="flex-1 overflow-y-auto pr-4 space-y-6">
              <div className="space-y-4">
                <p className="text-lg text-foreground/90 leading-relaxed">
                  So you took the responsibility. Congrats, I guess?
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  If it's your first time organizing an event, here's what you need to know: it's going to be like this <span className="text-accent">every single time</span>. The chaos doesn't magically disappear. The stress doesn't get easier. You just get better at not completely losing it when things go wrong.
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  And things WILL go wrong.
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  The venue will double-book. The speaker will cancel two hours before. The WiFi will die. Half the people who confirmed will ghost. The projector won't connect. Someone will forget to order food. The microphone will screech at the worst possible moment.
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  This is event management. This is normal.
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  Before we even talk about planning, research, creativity, coordination, timelines, budgets, and all that professional-sounding stuff that makes it sound like you know what you're doing...
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  Let me tell you the ACTUAL most important skill you need:
                </p>
                <p className="text-2xl text-accent leading-relaxed">
                  Jugaad.
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  You know what jugaad is, right? It's that very specific skill of making things work when they absolutely should not work. When the plan falls apart. When the backup plan also falls apart. When you're standing there with duct tape, a phone charger, and sheer determination, somehow making an entire event happen.
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  Tech people call it "troubleshooting" or "problem-solving" but honestly, jugaad is more accurate. It's figuring things out on the spot when literally everything is on fire and you have exactly 45 seconds to fix it before people notice.
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  You will become VERY good at this.
                </p>
              </div>

              <motion.button
                onClick={handleDiveDeeper}
                whileHover={{ scale: 1.03, x: 5 }}
                whileTap={{ scale: 0.97 }}
                className="w-full mt-8 p-6 border-4 border-accent bg-accent/10 hover:bg-accent/20 transition-all group"
                style={{ imageRendering: 'pixelated' }}
              >
                <div className="flex items-center justify-between">
                  <div className="text-left">
                    <p className="text-accent text-base mb-1">Ready to dive deeper?</p>
                    <p className="text-sm text-muted-foreground">Access the full event management terminal</p>
                  </div>
                  <ArrowRight size={24} className="text-accent group-hover:translate-x-2 transition-transform" strokeWidth={3} />
                </div>
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="terminal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-1 flex flex-col"
          >
            <div className="border-4 border-primary bg-card p-4 mb-4" style={{ imageRendering: 'pixelated' }}>
              <div className="flex items-center gap-3">
                <Terminal className="text-primary" size={20} strokeWidth={3} />
                <h3 className="text-primary text-sm">
                  <GlitchText>event_management.terminal</GlitchText>
                </h3>
              </div>
              <p className="text-[10px] text-muted-foreground mt-2 font-mono">
                $ Select a command to execute
              </p>
            </div>

            <div className="flex-1 grid grid-cols-2 gap-4 min-h-0">
              {commands.map((cmd, index) => (
                <motion.button
                  key={cmd.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => handleCommandClick(cmd.id)}
                  whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(167,139,250,0.3)' }}
                  className={`p-4 border-4 transition-all text-left ${
                    executedCommands.has(cmd.id)
                      ? 'border-primary/50 bg-card hover:border-primary'
                      : 'border-border bg-card hover:border-accent'
                  }`}
                  style={{ imageRendering: 'pixelated' }}
                >
                  <p className="text-[10px] text-muted-foreground mb-2 font-mono">
                    $ run {cmd.cmd}
                  </p>
                  <p className={`text-sm ${
                    executedCommands.has(cmd.id) ? 'text-primary' : 'text-foreground'
                  }`}>
                    {cmd.number}. {cmd.title}
                  </p>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full-screen command output overlay */}
      <AnimatePresence>
        {selectedCommandData && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 z-50 flex flex-col border-4 border-accent bg-background"
            style={{ imageRendering: 'pixelated' }}
          >
            {/* Header */}
            <div className="flex-shrink-0 border-b-4 border-accent p-4 flex items-center justify-between">
              <div className="flex items-center gap-3 flex-1">
                <Terminal className="text-accent" size={20} strokeWidth={3} />
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground font-mono mb-1">
                    $ run {selectedCommandData.cmd}
                  </p>
                  <h4 className="text-accent text-base">
                    <GlitchText>{selectedCommandData.number}. {selectedCommandData.title}</GlitchText>
                  </h4>
                </div>
              </div>
              <button
                onClick={handleCloseCommand}
                className="p-2 border-4 border-accent text-accent hover:bg-accent hover:text-space-black transition-all"
                style={{ imageRendering: 'pixelated' }}
              >
                <X size={16} strokeWidth={3} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-8">
              <div className="max-w-5xl mx-auto space-y-5">
                {selectedCommandData.content.split('\n\n').map((section, i) => {
                  // Handle bold text
                  const parts = section.split('**');
                  const hasMarkdown = parts.length > 1;

                  if (hasMarkdown) {
                    return (
                      <motion.p
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.02 }}
                        className="text-lg leading-relaxed"
                      >
                        {parts.map((part, j) =>
                          j % 2 === 1 ? (
                            <span key={j} className="text-accent font-medium">
                              {part}
                            </span>
                          ) : (
                            <span key={j} className="text-foreground/90">
                              {part}
                            </span>
                          )
                        )}
                      </motion.p>
                    );
                  }

                  // Handle list items starting with dashes
                  if (section.startsWith('- ')) {
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.02 }}
                        className="flex items-start gap-3 ml-4"
                      >
                        <span className="text-accent text-base">→</span>
                        <p className="text-foreground/90 text-base leading-relaxed flex-1">
                          {section.replace('- ', '')}
                        </p>
                      </motion.div>
                    );
                  }

                  // Handle separators
                  if (section === '---') {
                    return <div key={i} className="h-px bg-accent/30 my-6" />;
                  }

                  // Regular paragraph
                  return (
                    <motion.p
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.02 }}
                      className="text-foreground/90 text-lg leading-relaxed"
                    >
                      {section}
                    </motion.p>
                  );
                })}

                {/* Add links for advice section */}
                {selectedCommandData.id === 'advice' && (
                  <div className="mt-8 space-y-3 p-6 border-4 border-accent/30 bg-accent/5" style={{ imageRendering: 'pixelated' }}>
                    <p className="text-base text-accent font-medium">Notion Resources:</p>
                    <a
                      href="https://www.youtube.com/watch?v=GzMFRoMr4EA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-accent hover:text-primary underline text-base"
                    >
                      → The basics (English & Hindi)
                    </a>
                    <a
                      href="https://youtube.com/watch?v=92LK3J0ZykA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-accent hover:text-primary underline text-base"
                    >
                      → One more tutorial if you need it
                    </a>
                    <a
                      href="https://www.youtube.com/@Notion"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-accent hover:text-primary underline text-base"
                    >
                      → Official Notion YouTube channel
                    </a>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
