import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Heart, Mail, Linkedin, Youtube, Instagram, Gift, Lock, Unlock, Users, BookOpen, Video, Wrench, Search } from 'lucide-react';
import { GlitchText } from '../GlitchText';

const contactLinks = [
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/aditisaxena11/', color: '#60a5fa' },
  { name: 'Email', icon: Mail, url: 'mailto:officialaditisaxena@gmail.com', color: '#a78bfa' },
  { name: 'YouTube', icon: Youtube, url: 'https://www.youtube.com/@iaditisaxena11', color: '#ec4899' },
  { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/kbhikbhiadittee/', color: '#f472b6' },
];

function ResourcesSection() {
  const [activeTab, setActiveTab] = useState<string>('people');

  const tabs = [
    { id: 'people', label: 'People', icon: Users },
    { id: 'books', label: 'Books', icon: BookOpen },
    { id: 'creators', label: 'Creators', icon: Video },
    { id: 'tools', label: 'Tools', icon: Wrench },
    { id: 'research', label: 'Research', icon: Search },
  ];

  return (
    <motion.div
      initial={{ y: 20 }}
      animate={{ y: 0 }}
      className="border-4 border-accent bg-accent/5 p-8 space-y-6"
      style={{ imageRendering: 'pixelated' }}
    >
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1 }}
        >
          <Unlock className="text-accent" size={32} strokeWidth={3} />
        </motion.div>
        <div>
          <h3 className="text-accent text-xl">
            <GlitchText>Hidden Gift Unlocked! 🎁</GlitchText>
          </h3>
          <p className="text-sm text-muted-foreground">Extra resources just for you</p>
        </div>
      </div>

      {/* Intro */}
      <div className="border-4 border-primary bg-card/50 p-6 space-y-3" style={{ imageRendering: 'pixelated' }}>
        <p className="text-lg text-foreground/90 leading-relaxed">
          Since you stuck around and actually read through everything...
        </p>
        <p className="text-base text-foreground/80 leading-relaxed">
          Here are some books I love, YouTube channels that might be helpful, and more tools and websites that have genuinely helped me along the way.
        </p>
        <div className="border-l-4 border-accent pl-4 py-2 bg-accent/5" style={{ imageRendering: 'pixelated' }}>
          <p className="text-sm text-accent font-medium">
            ⚠️ Warning: There\'s SO much content here. Don\'t try to consume it all at once. Browse through, find what works for YOU, and ignore the rest. This is just a head start.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-2 px-4 py-3 border-4 transition-all ${
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

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        {activeTab === 'people' && <PeopleTab key="people" />}
        {activeTab === 'books' && <BooksTab key="books" />}
        {activeTab === 'creators' && <CreatorsTab key="creators" />}
        {activeTab === 'tools' && <ToolsTab key="tools" />}
        {activeTab === 'research' && <ResearchTab key="research" />}
      </AnimatePresence>
    </motion.div>
  );
}

function PeopleTab() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div className="space-y-4">
        <p className="text-base text-foreground/90 leading-relaxed">
          Okay, let\'s get one thing straight — these aren\'t some magic manuals that\'ll transform you into the next great orator overnight. (Spoiler alert: no such manual exists, and anyone selling you one is lying.)
        </p>
        <p className="text-base text-foreground/90 leading-relaxed">
          But will they help with your overall personality development? Absolutely. Did they help me? Hell yes.
        </p>
        <p className="text-base text-foreground/90 leading-relaxed">
          Here\'s the thing: you become what you consume. You learn from what you surround yourself with. Your social circle matters. The content you watch matters. The people you look up to matter.
        </p>
        <p className="text-base text-foreground/90 leading-relaxed">
          Who I am today? I owe way more credit to my family, friends, mentors, and seniors than I\'ll ever be able to give to myself. They shaped me. They challenged me. They believed in me when I didn\'t believe in myself.
        </p>
        <div className="border-l-4 border-accent pl-4 py-2 bg-accent/5" style={{ imageRendering: 'pixelated' }}>
          <p className="text-base text-foreground/90 leading-relaxed">
            Also, everyone has a tone of speaking. I can be professional as hell when needed, but my prominent communication style is the wit I have. So find people — offline or online — who cater to YOUR communication style.
          </p>
          <p className="text-base text-accent font-medium mt-2">
            Even better: have a celebrity crush who speaks SO well. By watching their interviews, you\'ll pick up a LOT. Vocabulary. Emotions. Tone. Even sentences as they are. And because you have a crush on that person, you won\'t lose concentration.
          </p>
          <p className="text-base text-accent font-medium">
            You\'ll stay entertained.
          </p>
        </div>
        <p className="text-base text-foreground/90 leading-relaxed">
          So here are the people I align with. The ones whose communication style just *clicks* with me. The ones I watch when I want to learn, get inspired, or just feel motivated. Your list might be completely different, and that\'s perfect. Find YOUR people.
        </p>
      </div>

      {/* Personalities */}
      <div className="space-y-6">
        <PersonSection
          name="Aishwarya Rai "
          description="Do I even need to explain? Like, come on. The grace. The poise. The way she commands a room without even trying. She\'s mastered the art of communication in a way that makes it look effortless. Watch her interviews and you\'ll know what I mean."
          videos={[
            { title: 'Interview 1', url: 'https://www.youtube.com/watch?v=RWCed_TpPbU' },
            { title: 'Interview 2', url: 'https://www.youtube.com/watch?v=76tkBEla6Oo' },
          ]}
        />

        <PersonSection
          name="Sushmita Sen "
          description="The queen of confidence and authenticity. She speaks her truth unapologetically, handles tough questions with such elegance, and never loses her composure. If you want to learn how to own your narrative, watch her."
          videos={[
            { title: 'Interview 1', url: 'https://www.youtube.com/watch?v=Z57YzzOJlXE' },
            { title: 'Interview 2', url: 'https://www.youtube.com/watch?v=GJ7yJnJIvdY' },
          ]}
        />

        <PersonSection
          name="Priyanka Chopra "
          description="She speaks SO damm well. Like, scarily well. Watch how she navigates international interviews, how she switches between witty and serious, how she never lets anyone put her in a box. Absolute mastery of communication."
          videos={[
            { title: 'Speech', url: 'https://www.youtube.com/watch?v=aDG1T0kJnd4' },
            { title: 'Interview ', url: 'https://www.youtube.com/watch?v=btimBCpFq3I' },
          ]}
        />

        <PersonSection
          name="Dr. Shivin Chaudhary"
          description="He\'s an ex-IRS and a UPSC mentor. Focus on his communication style more than the content if you\'re not into UPSC. But lemme tell you — he is one of the most courageous, intelligent, and innovative people you\'ll ever see. He\'s the kind of personality you see and go like 'THIS is how I want to be' (or at least I do)."
          videos={[
            { title: 'Interview (specially at 59:57 — this man is something else)', url: 'https://www.youtube.com/watch?v=11RDiqqHCt4' },
            { title: 'Interview 2', url: 'https://www.youtube.com/watch?v=ob8u1WtAwTE' },
            { title: 'Interview 3', url: 'https://www.youtube.com/watch?v=6H7QssRrzig' },
          ]}
        />

        <PersonSection
          name="Karan Tacker"
          description="My personal favorite, not gonna lie. The wit. The humor. The timing. The charm. That\'s the EXACT kind of communication style I aspire to have in my life, and that man has absolutely aced it. Just watch and you\'ll see what I mean."
          videos={[
            { title: 'Interview 1', url: 'https://www.youtube.com/watch?v=Tyq8ujl8y8E' },
            { title: 'Interview 2', url: 'https://www.youtube.com/watch?v=FkO42jWTsT4' },
          ]}
        />

        <PersonSection
          name="Dr. Vikas Divyakirti"
          description="This man is my stress buster. Seriously. The way he builds a connection with his audience, the way he makes complex things feel so simple and relatable, the way he can literally hold your attention and make you FEEL things — it\'s brilliant. Honestly, if you can master even a fraction of this skill, aapka uddhar ho chuka hai as a speaker."
          videos={[
            { title: 'Talk 1', url: 'https://www.youtube.com/watch?v=NDk1QuffEYY' },
            { title: 'Talk 2', url: 'https://www.youtube.com/watch?v=mowt4oKgkGg' },
          ]}
        />

        <PersonSection
          name=" IAS Shashwat Sangwan  "
          description="If you want to witness what complete harmony between brain and tongue looks like — it\'s him. Every word is intentional. Every pause is calculated. Every sentence lands perfectly. He\'s the living definition of what professional, polished communication should be. And honestly? He\'s the kind of personality I genuinely aspire to be like."
          videos={[
            { title: 'Interview 1', url: 'https://www.youtube.com/watch?v=UdLNMj2-o7o' },
            { title: 'Interview 2', url: 'https://www.youtube.com/watch?v=XRoyZcqfgrA' },
          ]}
        />
      </div>

      <p className="text-sm text-muted-foreground italic mt-6">
        Look, I could name 2000 more people and this list would never end. But for now, this will do. These are MY people — the ones who\'ve impacted me the most, the ones I keep coming back to. Your list will be different, and that\'s beautiful. Find people YOU connect with. People whose style resonates with YOUR vibe. I just gave you a head start. ✨
      </p>
    </motion.div>
  );
}

function PersonSection({ name, description, videos }: { name: string; description: string; videos: { title: string; url: string }[] }) {
  return (
    <div className="border-4 border-primary bg-card/50 p-6 space-y-3" style={{ imageRendering: 'pixelated' }}>
      <h4 className="text-primary text-lg">
        <GlitchText>{name}</GlitchText>
      </h4>
      <p className="text-base text-foreground/90 leading-relaxed">{description}</p>
      <div className="space-y-2 ml-4">
        {videos.map((video, i) => (
          <a
            key={i}
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-accent hover:text-primary underline text-sm transition-colors"
          >
            → {video.title}
          </a>
        ))}
      </div>
    </div>
  );
}

function BooksTab() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div className="space-y-4">
        <p className="text-base text-foreground/90 leading-relaxed">
          Okay, let\'s talk about books. And I cannot stress this enough — READ. BOOKS.
        </p>
        <p className="text-base text-foreground/90 leading-relaxed">
          But here\'s the thing: when I say books, I don\'t mean those "10 steps to success" manuals or "this is how you get rich quick" nonsense. Nooo. I\'ve NEVER in my entire life managed to finish a self-help book. Not showing off or anything, but I genuinely can\'t. I\'ve tried. God knows I\'ve tried. Can\'t make it past 70 pages without wanting to throw the book across the room.
        </p>
        <p className="text-base text-foreground/90 leading-relaxed">
          Now, if you\'re someone who loves self-help books, if they genuinely work for you and help you grow — amazing! Go ahead! I\'m no one to judge. They just never clicked with me.
        </p>
        <div className="border-l-4 border-accent pl-4 py-2 bg-accent/5" style={{ imageRendering: 'pixelated' }}>
          <p className="text-base text-accent font-medium">
            What worked for me? What still works for me? FICTION.
          </p>
        </div>
        <p className="text-base text-foreground/90 leading-relaxed">
          Romance. Crime thrillers. Psychological thrillers. Fantasy fiction. Historical fiction. ALL OF IT. I am obsessively in love with fiction. Like, unhealthily obsessed.
        </p>
        <p className="text-base text-foreground/90 leading-relaxed">
          Half of my vocabulary? Came from books. The way I process emotions? Books taught me that. The way I understand human behavior? BOOKS.
        </p>
        <p className="text-base text-foreground/90 leading-relaxed">
          Because here\'s what people don\'t tell you: fiction doesn\'t just expand your vocabulary. It makes you emotionally intelligent. The range of emotions you experience while reading a good book — the heartbreak, the joy, the anger, the hope — self-help could NEVER give you that depth.
        </p>
        <p className="text-base text-foreground/90 leading-relaxed">
          And when you\'re in a field as human-centric as public speaking or leadership, emotional intelligence isn\'t optional. It\'s everything.
        </p>
        <p className="text-base text-foreground/90 leading-relaxed">
          So here are a few books that shaped me. Your taste might be completely different. That\'s okay. Just start somewhere.
        </p>
      </div>

      <div className="border-4 border-primary bg-card/50 p-6 space-y-4" style={{ imageRendering: 'pixelated' }}>
        <h4 className="text-primary text-lg">
          <GlitchText>My Recommendations</GlitchText>
        </h4>
        <ul className="space-y-2 ml-4">
          <li className="text-base text-foreground/90">• Harry Potter (like ofc, that was my first book too)</li>
          <li className="text-base text-foreground/90">• Then There Were None by Agatha Christie</li>
          <li className="text-base text-foreground/90">• Pride and Prejudice</li>
          <li className="text-base text-foreground/90">• Word Power Made Easy (if you need something non-fiction that\'ll help)</li>
        </ul>
      </div>

      <div className="border-4 border-primary bg-card/50 p-6 space-y-3" style={{ imageRendering: 'pixelated' }}>
        <h4 className="text-primary text-lg">
          <GlitchText>Where to Find Books</GlitchText>
        </h4>
        <p className="text-base text-foreground/90 leading-relaxed">
          I\'m a hard cover girlie through and through. There\'s something about holding a physical book, the smell of the pages, the weight of it in your hands. But hey, if you\'re fine with PDFs or eBooks, no judgment here. Do what works for you.
        </p>
        <p className="text-base text-foreground/90 leading-relaxed">
          Google and Amazon are your usual go-tos. But if you want free (and legal!) books:
        </p>
        <div className="space-y-2 ml-4">
          <div>
            <p className="text-accent font-medium">Project Gutenberg</p>
            <p className="text-sm text-foreground/80 mb-2">Thousands of classic books, completely free and legally available.</p>
            <a
              href="https://www.gutenberg.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-primary underline text-sm transition-colors"
            >
              → Visit Project Gutenberg
            </a>
          </div>
          <div className="mt-4">
            <p className="text-accent font-medium">Goodreads</p>
            <p className="text-sm text-foreground/80 mb-2">My TBR is already out of control and Goodreads keeps making it worse.</p>
            <a
              href="https://www.goodreads.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-primary underline text-sm transition-colors"
            >
              → Visit Goodreads
            </a>
          </div>
        </div>
      </div>

      <p className="text-sm text-muted-foreground italic">
        Books play a major role in personality development and emotional intelligence (and yess, I\'m talking about FICTION). You can read whatever you want, but fiction changed my life.
      </p>
    </motion.div>
  );
}

function CreatorsTab() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div className="space-y-4">
        <p className="text-base text-foreground/90 leading-relaxed">
          Okay, so everything I\'ve mentioned so far — the people, the books — they all helped with communication in some way. Because you ARE what you consume. The content you watch, the people you listen to, the ideas you expose yourself to — all of it shapes you.
        </p>
        <p className="text-base text-foreground/90 leading-relaxed">
          Now, the stuff I\'m about to share won\'t directly teach you public speaking. It\'s not gonna make you a better orator overnight. But it WILL change how you think. How you see the world. How you approach problems. How you build your overall persona.
        </p>
        <p className="text-base text-foreground/90 leading-relaxed">
          And trust me, your personality plays a HUGE role in how you communicate. You can\'t separate the two.
        </p>
        <p className="text-base text-foreground/90 leading-relaxed">
          So here are some creators and channels I consume regularly. Some teach specific skills. Some just make me think differently. All of them have helped me grow.
        </p>
      </div>

      {/* UX Design */}
      <div className="border-4 border-primary bg-card/50 p-6 space-y-3" style={{ imageRendering: 'pixelated' }}>
        <h4 className="text-primary text-lg">
          <GlitchText>UX Design</GlitchText>
        </h4>
        <p className="text-base text-foreground/90 leading-relaxed">
          Okay, this one\'s not obvious at all, but trust me on this: UX design (user experience design) changed my LIFE. Like, genuinely. It completely transforms the way you look at and perceive everything around you.
        </p>
        <p className="text-base text-foreground/90 leading-relaxed">
          Websites. Apps. Presentations. Even conversations. After you study UX, you start seeing patterns everywhere. You start understanding WHY things work or don\'t work. You become more empathetic to how people think and behave.
        </p>
        <p className="text-base text-foreground/90 leading-relaxed">
          I\'m telling you — once you go down the UX rabbit hole, you will never be the same person again.
        </p>
        <div className="space-y-2 ml-4">
          <div>
            <p className="text-accent font-medium">The Cutting Edge School</p>
            <p className="text-sm text-foreground/80 mb-2">There are thousands of channels for UX, but this is the one I vibe with the most. You\'ll find way more content here than just UX and UI — and all of it is gold. Worth every second of your time.</p>
            <a
              href="https://www.youtube.com/@CuttingEdgeSchool"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-primary underline text-sm transition-colors"
            >
              → Check out the channel
            </a>
          </div>
        </div>
      </div>

      {/* AI */}
      <div className="border-4 border-primary bg-card/50 p-6 space-y-3" style={{ imageRendering: 'pixelated' }}>
        <h4 className="text-primary text-lg">
          <GlitchText>AI & Tech</GlitchText>
        </h4>
        <p className="text-base text-foreground/90 leading-relaxed">
          We\'re living in the age of AI. Knowing how to use AI, understanding how it works, staying updated with what\'s happening — it\'s not optional anymore. It\'s essential.
        </p>
        <p className="text-base text-foreground/90 leading-relaxed">
          Here are the creators I follow to stay in the loop:
        </p>
        <div className="space-y-2 ml-4">
          <a href="https://www.youtube.com/@CuttingEdgeSchool" target="_blank" rel="noopener noreferrer" className="block text-accent hover:text-primary underline text-sm transition-colors">
            → The Cutting Edge School
          </a>
          <a href="https://www.youtube.com/@vaibhavsisinty" target="_blank" rel="noopener noreferrer" className="block text-accent hover:text-primary underline text-sm transition-colors">
            → Vaibhav Sisinty
          </a>
          <a href="https://www.youtube.com/@IshanSharma7390" target="_blank" rel="noopener noreferrer" className="block text-accent hover:text-primary underline text-sm transition-colors">
            → Ishan Sharma
          </a>
          <a href="https://www.youtube.com/@VarunMayya" target="_blank" rel="noopener noreferrer" className="block text-accent hover:text-primary underline text-sm transition-colors">
            → Varun Mayya
          </a>
        </div>
        <p className="text-sm text-foreground/80 mt-3">
          These are the ones I constantly keep up with. All Indian creators, which is a bonus if you\'re from India like me.
        </p>
      </div>

      {/* General Content */}
      <div className="border-4 border-primary bg-card/50 p-6 space-y-3" style={{ imageRendering: 'pixelated' }}>
        <h4 className="text-primary text-lg">
          <GlitchText>Daily Content I Consume</GlitchText>
        </h4>
        <p className="text-base text-foreground/90 leading-relaxed">
          And then there are these creators. The ones whose content I consume almost daily. Not because I\'m trying to learn something specific from them. Not because I\'m forcing myself to absorb some skill.
        </p>
        <p className="text-base text-foreground/90 leading-relaxed">
          I just... enjoy them. I vibe with their content. And somehow, consciously or subconsciously, they\'ve all helped me grow. Shaped how I think. How I see things.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ml-4">
          <a href="http://youtube.com/@theMITmonk" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-primary underline text-sm transition-colors">
            → The MIT Monk
          </a>
          <a href="https://www.youtube.com/@Zero1byZerodha" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-primary underline text-sm transition-colors">
            → Zero1 by Zerodha
          </a>
          <a href="https://www.youtube.com/@WesleyAnna" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-primary underline text-sm transition-colors">
            → Wesley Anna
          </a>
          <a href="https://www.youtube.com/@TED" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-primary underline text-sm transition-colors">
            → TED Talks
          </a>
          <a href="https://www.youtube.com/@ZakirKhan" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-primary underline text-sm transition-colors">
            → Zakir Khan
          </a>
          <a href="https://www.youtube.com/@NishantChahar11" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-primary underline text-sm transition-colors">
            → Nishant Chahar
          </a>
          <a href="https://www.youtube.com/@Shrey.hey3" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-primary underline text-sm transition-colors">
            → Shreya Heda
          </a>
          <a href="https://www.youtube.com/@FullDisclosure." target="_blank" rel="noopener noreferrer" className="text-accent hover:text-primary underline text-sm transition-colors">
            → Full Disclosure
          </a>
          <a href="https://www.youtube.com/@BeginningToNoww" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-primary underline text-sm transition-colors">
            → Beginning to Now
          </a>
          <a href="https://www.youtube.com/@XHumanBehaviour" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-primary underline text-sm transition-colors">
            → Human Behaviour
          </a>
        </div>
      </div>

      <p className="text-sm text-muted-foreground italic">
        Many more to name, but I have a word limit. 😭
      </p>
    </motion.div>
  );
}

function ToolsTab() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <p className="text-base text-foreground/90 leading-relaxed">
        Okay, so now let\'s talk about the actual tools I use. Like, on a daily basis. The apps and websites that help me stay productive, organized, and (somewhat) sane.
      </p>
      <p className="text-base text-foreground/90 leading-relaxed">
        Some of these are obvious. Some are not. All of them have made my life significantly easier.
      </p>

      {/* Figma */}
      <div className="border-4 border-primary bg-card/50 p-6 space-y-3" style={{ imageRendering: 'pixelated' }}>
        <h4 className="text-primary text-lg">
          <GlitchText>Figma</GlitchText>
        </h4>
        <p className="text-base text-foreground/90 leading-relaxed">
          Even if you\'re not a designer, Figma teaches you how to think about people. It changed the way I look at websites, apps, presentations, and honestly, almost everything around me.
        </p>
        <div className="space-y-2 ml-4">
          <a href="https://www.figma.com" target="_blank" rel="noopener noreferrer" className="block text-accent hover:text-primary underline text-sm transition-colors">
            → Visit Figma
          </a>
          <a href="https://www.youtube.com/@Figma" target="_blank" rel="noopener noreferrer" className="block text-accent hover:text-primary underline text-sm transition-colors">
            → Official Figma tutorials
          </a>
        </div>
      </div>

      {/* Notion */}
      <div className="border-4 border-primary bg-card/50 p-6 space-y-3" style={{ imageRendering: 'pixelated' }}>
        <h4 className="text-primary text-lg">
          <GlitchText>Notion</GlitchText>
        </h4>
        <div className="space-y-2 ml-4">
          <a href="https://www.notion.com/" target="_blank" rel="noopener noreferrer" className="block text-accent hover:text-primary underline text-sm transition-colors">
            → Visit Notion
          </a>
          <p className="text-sm text-foreground/80 mt-3">Tutorials:</p>
          <a href="https://www.youtube.com/watch?v=GzMFRoMr4EA" target="_blank" rel="noopener noreferrer" className="block text-accent hover:text-primary underline text-sm transition-colors">
            → The basics (English & Hindi)
          </a>
          <a href="http://youtube.com/watch?v=92LK3J0ZykA" target="_blank" rel="noopener noreferrer" className="block text-accent hover:text-primary underline text-sm transition-colors">
            → One more if needed
          </a>
          <p className="text-sm text-foreground/80 mt-3">Once you\'re clear with basics:</p>
          <a href="https://www.youtube.com/@Notion" target="_blank" rel="noopener noreferrer" className="block text-accent hover:text-primary underline text-sm transition-colors">
            → Official Notion channel (they have everything you need and even more)
          </a>
        </div>
      </div>

      {/* Grammarly */}
      <div className="border-4 border-primary bg-card/50 p-6 space-y-3" style={{ imageRendering: 'pixelated' }}>
        <h4 className="text-primary text-lg">
          <GlitchText>Grammarly</GlitchText>
        </h4>
        <div className="space-y-2 ml-4">
          <a href="https://www.grammarly.com/" target="_blank" rel="noopener noreferrer" className="block text-accent hover:text-primary underline text-sm transition-colors">
            → Visit Grammarly
          </a>
          <a href="https://www.youtube.com/channel/UCfmqLyr1PI3_zbwppHNEzuQ" target="_blank" rel="noopener noreferrer" className="block text-accent hover:text-primary underline text-sm transition-colors">
            → Grammarly YouTube channel
          </a>
        </div>
      </div>

      {/* Gamma */}
      <div className="border-4 border-primary bg-card/50 p-6 space-y-3" style={{ imageRendering: 'pixelated' }}>
        <h4 className="text-primary text-lg">
          <GlitchText>Gamma</GlitchText>
        </h4>
        <p className="text-base text-foreground/90 leading-relaxed">
          Will save you SO much time making presentations and more.
        </p>
        <div className="space-y-2 ml-4">
          <a href="https://gamma.app/" target="_blank" rel="noopener noreferrer" className="block text-accent hover:text-primary underline text-sm transition-colors">
            → Visit Gamma
          </a>
          <a href="https://www.youtube.com/watch?v=dUaJL8VDtdc&t=476s" target="_blank" rel="noopener noreferrer" className="block text-accent hover:text-primary underline text-sm transition-colors">
            → Tutorial
          </a>
        </div>
      </div>

      {/* Canva */}
      <div className="border-4 border-primary bg-card/50 p-6 space-y-3" style={{ imageRendering: 'pixelated' }}>
        <h4 className="text-primary text-lg">
          <GlitchText>Canva</GlitchText>
        </h4>
        <p className="text-base text-foreground/90 leading-relaxed">
          People underestimate Canva. Like, SEVERELY underestimate it. It\'s so much more useful than you think. Quick graphics, presentations, social media posts, even video editing — it does everything.
        </p>
        <div className="space-y-2 ml-4">
          <a href="https://www.canva.com/" target="_blank" rel="noopener noreferrer" className="block text-accent hover:text-primary underline text-sm transition-colors">
            → Visit Canva
          </a>
          <a href="https://www.youtube.com/watch?v=J0jE0OsF1zo" target="_blank" rel="noopener noreferrer" className="block text-accent hover:text-primary underline text-sm transition-colors">
            → Tutorial
          </a>
          <p className="text-sm text-foreground/80 mt-2">This tutorial will get you started, but you\'ll need LOTS of practice to actually get good at it.</p>
        </div>
      </div>

      {/* Pomodoro Timer */}
      <div className="border-4 border-primary bg-card/50 p-6 space-y-3" style={{ imageRendering: 'pixelated' }}>
        <h4 className="text-primary text-lg">
          <GlitchText>Pomodoro Timer</GlitchText>
        </h4>
        <p className="text-base text-foreground/90 leading-relaxed">
          If you\'re someone who gets distracted every five minutes (hi, that\'s me), this is a lifesaver. The Pomodoro technique breaks your work into focused 25-minute sessions with breaks in between.
        </p>
        <p className="text-base text-foreground/90 leading-relaxed">
          It gives your brain permission to rest without feeling guilty about "wasting time." Game changer for productivity.
        </p>
        <div className="space-y-2 ml-4">
          <a href="https://app.zenfocus.io/" target="_blank" rel="noopener noreferrer" className="block text-accent hover:text-primary underline text-sm transition-colors">
            → Zenfocus
          </a>
          <a href="https://flocus.com/features/pomodoro-timer" target="_blank" rel="noopener noreferrer" className="block text-accent hover:text-primary underline text-sm transition-colors">
            → Flocus Pomodoro Timer
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function ResearchTab() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <p className="text-base text-foreground/90 leading-relaxed">
        Research. The backbone of good public speaking, good arguments, good content creation — basically everything.
      </p>
      <p className="text-base text-foreground/90 leading-relaxed">
        What you\'re researching makes A LOT of difference in where you should look. But here are my go-to resources for getting credible, reliable information:
      </p>

      {/* Google Scholar */}
      <div className="border-4 border-primary bg-card/50 p-6 space-y-3" style={{ imageRendering: 'pixelated' }}>
        <h4 className="text-primary text-lg">
          <GlitchText>Google Scholar</GlitchText>
        </h4>
        <p className="text-base text-foreground/90 leading-relaxed">
          "Why not just use Google?" you ask. You CAN. But make Scholar your base. It\'s authentic, it\'s credible, it\'s peer-reviewed. No fake news, no clickbait, no conspiracy theories. Just solid, research-backed information.
        </p>
        <div className="space-y-2 ml-4">
          <a href="https://scholar.google.com/" target="_blank" rel="noopener noreferrer" className="block text-accent hover:text-primary underline text-sm transition-colors">
            → Visit Google Scholar
          </a>
        </div>
      </div>

      {/* NotebookLM */}
      <div className="border-4 border-primary bg-card/50 p-6 space-y-3" style={{ imageRendering: 'pixelated' }}>
        <h4 className="text-primary text-lg">
          <GlitchText>NotebookLM</GlitchText>
        </h4>
        <p className="text-base text-foreground/90 leading-relaxed">
          This is an absolute GAME CHANGER. I\'m not even exaggerating. If you learn how to use NotebookLM properly, you genuinely might not need anything else for research. It\'s that powerful.
        </p>
        <div className="space-y-2 ml-4">
          <a href="https://notebooklm.google/" target="_blank" rel="noopener noreferrer" className="block text-accent hover:text-primary underline text-sm transition-colors">
            → Visit NotebookLM
          </a>
          <a href="https://www.youtube.com/watch?v=kAE6PVft0C4" target="_blank" rel="noopener noreferrer" className="block text-accent hover:text-primary underline text-sm transition-colors">
            → Tutorial (you\'ll need WAY more practice after watching this though)
          </a>
        </div>
      </div>

      {/* Impromptu Speaking */}
      <div className="border-4 border-primary bg-card/50 p-6 space-y-3" style={{ imageRendering: 'pixelated' }}>
        <h4 className="text-primary text-lg">
          <GlitchText>Impromptu Speaking Practice</GlitchText>
        </h4>
        <p className="text-base text-foreground/90 leading-relaxed">
          Okay, this one\'s actually FOR public speaking. This website throws a random topic at you. You get a minute or two to think about it. Then you speak.
        </p>
        <p className="text-base text-foreground/90 leading-relaxed">
          Record yourself while doing it. Watch it back. Cringe at yourself. Learn from it. Repeat. It helps WAY more than you think it will.
        </p>
        <div className="space-y-2 ml-4">
          <a href="https://randomtopicgen.com/" target="_blank" rel="noopener noreferrer" className="block text-accent hover:text-primary underline text-sm transition-colors">
            → Try Impromptu Speaking Practice
          </a>
        </div>
      </div>

      <div className="border-l-4 border-accent pl-4 py-2 bg-accent/5" style={{ imageRendering: 'pixelated' }}>
        <p className="text-base text-foreground/90 leading-relaxed">
          Look, there\'s SO much more I could share. But honestly, this is everything I can recall right now, and it\'s more than enough to get you started.
        </p>
        <p className="text-base text-accent font-medium mt-2">
          And here\'s the thing: you don\'t have to force yourself to love all of this. Browse through it. Try things out. Find what clicks with YOU. Find the tools that actually help YOU. Find the people whose style resonates with YOUR vibe.
        </p>
        <p className="text-base text-accent font-medium mt-2">
          This is just a head start. You\'ll find your own path from here.
        </p>
      </div>

      <p className="text-sm text-muted-foreground italic text-center mt-6">
        Hope this helps. Genuinely. Thank youuu for sticking around till the end. 💜
      </p>
      <p className="text-sm text-muted-foreground text-center">
        This is Aditi Saxena, signing off. See you in the next chapter. ✨
      </p>
    </motion.div>
  );
}

export function JourneyContent() {
  const [showResources, setShowResources] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);
  const [floatingHearts, setFloatingHearts] = useState<{ id: number; x: number; y: number }[]>([]);

  const handleHeartClick = () => {
    // Create 8 floating hearts at random positions
    const newHearts = Array.from({ length: 8 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 100,
      y: Math.random() * 100,
    }));
    setFloatingHearts(newHearts);

    // Clear hearts after animation
    setTimeout(() => setFloatingHearts([]), 3000);
  };

  const handleUnlockResources = () => {
    setShowQuestion(false);
    setShowResources(true);
  };

  return (
    <div className="h-full flex flex-col overflow-hidden">
      <div className="border-l-4 border-accent pl-4 mb-6 flex-shrink-0">
        <div className="flex items-center gap-3 mb-2">
          <Compass className="text-accent" size={24} strokeWidth={3} />
          <h3 className="text-accent text-base">
            <GlitchText>journey.exe</GlitchText>
          </h3>
        </div>
        <p className="text-[10px] text-muted-foreground">
          Beyond the stage, beyond the spotlight
        </p>
      </div>

      <div className="flex-1 overflow-y-auto pr-2 space-y-6">
        {/* Congratulations intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-4 border-accent bg-accent/10 p-6"
          style={{ imageRendering: 'pixelated' }}
        >
          <p className="text-lg text-foreground/90 leading-relaxed mb-3">
            So finally — kudos to you! Like, seriously. Pat yourself on the back because you\'ve absorbed SO much content today that half the population would\'ve bailed on page one.
          </p>
          <p className="text-base text-foreground/90 leading-relaxed mb-3">
            You stuck around. You read through sections. You actually cared enough to make it all the way here.
          </p>
          <p className="text-base text-accent font-medium">
            Thank you. Genuinely. Thank you for making it till here. ✨
          </p>
        </motion.div>

        {/* Main about section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="border-4 border-primary bg-card/50 p-8 space-y-6"
          style={{ imageRendering: 'pixelated' }}
        >
          {/* Spotlight intro */}
          <div className="text-center p-6 border-4 border-accent bg-accent/5" style={{ imageRendering: 'pixelated' }}>
            <motion.h2
              animate={{
                textShadow: [
                  '0 0 8px rgba(167,139,250,0.5)',
                  '0 0 16px rgba(167,139,250,0.8)',
                  '0 0 8px rgba(167,139,250,0.5)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-2xl text-primary mb-3"
            >
              <GlitchText>Let me introduce myself again.</GlitchText>
            </motion.h2>
            <p className="text-base text-muted-foreground italic">Properly this time.</p>
          </div>

          {/* Bio content */}
          <div className="space-y-4">
            <p className="text-xl text-accent font-medium">
              Hey! I am Aditi Saxena.
            </p>

            <div className="space-y-3">
              <p className="text-base text-foreground/90 leading-relaxed">
                I\'m 20 years old. I was born and brought up in a small town named Alwar, in Rajasthan, India. Not a metro city. Not some fancy place you\'ve probably heard of. Just a regular small town with regular people living regular lives.
              </p>
              <p className="text-base text-foreground/90 leading-relaxed">
                I did my entire schooling from Alwar itself. No boarding schools, no international curriculum, no "special" anything. Just normal school. And then for my graduation, I went to Jaipur, Rajasthan, India — did BTech in Computer Science from there.
              </p>
            </div>

            <div className="border-l-4 border-accent pl-4 py-2 bg-accent/5" style={{ imageRendering: 'pixelated' }}>
              <p className="text-base text-foreground/90 leading-relaxed">
                So if you\'re sitting there thinking you need some elite kind of schooling, or extraordinary training, or fancy degrees, or connections, or a "perfect background" to get into public speaking or leadership or management — newsflash: you don\'t.
              </p>
              <p className="text-base text-accent font-medium mt-2">
                You just need to start. That\'s literally it.
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-base text-foreground/90 leading-relaxed">
                I did it by accident, actually. Like, complete accident. I was this cute little extrovert kid (yes, I\'m calling myself cute, deal with it 😭). My teachers pushed me on stage with my seniors when they were anchoring some event — to, let\'s say, increase some cuteness quotient because apparently that was a thing.
              </p>
              <p className="text-base text-foreground/90 leading-relaxed">
                But here\'s the plot twist: I ended up loving it. Like, LOVING it.
              </p>
              <p className="text-base text-foreground/90 leading-relaxed">
                You know how some accidents change your life? Mine happened to be a little too soon. I was pushed onto that stage, fell in love with the mic and the spotlight, and never left it ever again. That stage became my home. That mic became my voice. And here we are, 16 years later.
              </p>
            </div>
          </div>

          {/* The real me */}
          <div className="border-t-4 border-border pt-6 space-y-4">
            <p className="text-lg text-primary font-medium">
              But wait. This is me. The REAL me.
            </p>
            <p className="text-base text-foreground/90 leading-relaxed">
              Most people know me as the face and voice they saw on stage. The one leading events. The one speaking with confidence. The public persona. But here\'s the thing — that\'s not entirely me.
            </p>
            <p className="text-base text-foreground/90 leading-relaxed">
              There\'s so much more beneath the surface. And honestly? I think that\'s what keeps me authentic when I\'m up there being the center of attention. Because I know who I am when the lights go off. I know what grounds me. I know what recharges my soul when performing drains it.
            </p>
            <p className="text-base text-foreground/90 leading-relaxed">
              So, what else do I love other than my mic and my stage? Let me tell you:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {[
                {
                  title: 'BOOKS',
                  text: 'As much as I love speaking, being the one everyone notices, being the most human-centric person you know — I also love completely disappearing. Vanishing into my own world where it\'s just me, a good book, and my fictional characters who don\'t need me to perform or be "on" all the time. It\'s my escape. My safe space.',
                },
                {
                  title: 'MUSIC',
                  text: 'Music is not just background noise for me. It\'s therapy. It\'s how I recharge when performing has drained every ounce of energy from me. I put on my headphones, close my eyes, vibe to the rhythm, and suddenly the world makes sense again.',
                },
                {
                  title: 'GETTING READY & HANGING OUT',
                  text: 'Getting dolled up is literally therapy for me. The process of getting ready, doing my makeup, choosing my outfit — it makes me feel like myself. I feel more confident when I\'m well-groomed. And of course, my people. Who am I without them? My friends, my family — they\'re everything. Honestly, I do all of this — the speaking, the leading, the grinding — just to see that proud smile on their face.',
                },
                {
                  title: 'DRAWING / SKETCHING',
                  text: 'Between stage and books, I exist in two extremes — from having all the attention to completely disappearing. And right in the middle? COLOURS. Drawing and sketching keep me sane. They keep me balanced. They remind me that I can create beauty quietly, without an audience.',
                },
                {
                  title: 'LONG WALKS & NATURE',
                  text: 'Sometimes I just need to walk. No destination. No purpose. Just me, my thoughts, and nature. It clears my head. It helps me process. It reminds me I\'m human, not just a performer.',
                },
                {
                  title: 'MOUNTAINS',
                  text: 'I\'m not a beach person. Never was, probably never will be. But mountains? Mountains make me feel calm. Grounded. Small in the best way possible. They remind me that the world is so much bigger than my anxieties.',
                },
                {
                  title: 'SPIRITUALITY',
                  text: 'Everyone has their own definition of spirituality, and that\'s okay. For me, it\'s simple: it keeps me connected to myself. To my core. To who I am beneath all the noise. It\'s not about religion or rituals — it\'s about staying rooted. That\'s it.',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="p-4 border-2 border-accent/30 bg-card/30 space-y-2"
                  style={{ imageRendering: 'pixelated' }}
                >
                  <h4 className="text-accent text-sm font-medium">{item.title}</h4>
                  <p className="text-sm text-foreground/80 leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>

            <p className="text-sm text-muted-foreground italic mt-4">
              And honestly, the list goes on and on and ON, but the word limit doesn\'t... so I\'ll stop here before this turns into a novel.
            </p>
          </div>

          {/* Closing message */}
          <div className="border-t-4 border-border pt-6 space-y-4">
            <p className="text-base text-foreground/90 leading-relaxed">
              Okay, pivoting back to the main point now. In this handbook, I have literally poured everything I have. Every single thing I\'ve learned in 16 years of being on stages, leading teams, speaking to crowds, making mistakes, and growing from them — I consolidated all of it here.
            </p>
            <p className="text-base text-foreground/90 leading-relaxed">
              Every mistake I made and wished I could undo. Every lesson I wish someone had just TOLD me instead of me having to learn it the hard way. Every single thing I figured out through failing, getting back up, crying in frustration, and then smiling when it finally clicked — it\'s all in there.
            </p>
            <p className="text-base text-foreground/90 leading-relaxed">
              All the late nights I spent wondering if I was good enough. All the moments I doubted myself. All the times I wanted to quit but didn\'t. All the victories that made it worth it. Everything.
            </p>

            <motion.button
              onClick={handleHeartClick}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative w-full flex items-center gap-3 p-4 border-4 border-accent bg-accent/5 hover:bg-accent/10 transition-all cursor-pointer"
              style={{ imageRendering: 'pixelated' }}
            >
              <Heart className="text-accent flex-shrink-0" size={24} strokeWidth={3} fill="currentColor" />
              <p className="text-lg text-accent font-medium">
                I have given this a piece of me.
              </p>
            </motion.button>

            <p className="text-base text-foreground/90 leading-relaxed">
              So I really, genuinely hope this was helpful for you. Like, actually useful. Not just another thing you skimmed through and forgot. If it was, please let me know. Seriously. My contact info is right below in those colorful tabs. Just tap onto them and drop me a message. Tell me what resonated. Tell me what helped. Or just say hi. I\'d love to hear from you.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              Thank youuu. From the bottom of my heart. For reading. For caring. For being here. Wishing you all the love, light, success, and courage to chase whatever makes your soul come alive. ✨
            </p>
            <div className="border-l-4 border-accent pl-4 py-2">
              <p className="text-base text-accent italic">
                And remember: if it makes you happy, if it lights you up, if it makes you feel ALIVE — it doesn\'t have to make sense to anyone else. Just you. That\'s enough.
              </p>
            </div>
            <p className="text-base text-muted-foreground mt-6">
              This is Aditi Saxena, signing off. But not really. Because I\'ll see you again. 💜
            </p>
          </div>

          {/* Contact tabs */}
          <div className="border-t-4 border-border pt-6">
            <p className="text-sm text-muted-foreground uppercase mb-4">Contact Info:</p>
            <div className="grid grid-cols-2 gap-3">
              {contactLinks.map((link, i) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    whileHover={{ scale: 1.05, boxShadow: `0 0 20px ${link.color}80` }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3 p-4 border-4 border-border hover:border-accent bg-card transition-all"
                    style={{ imageRendering: 'pixelated', borderColor: link.color }}
                  >
                    <Icon size={20} strokeWidth={3} style={{ color: link.color }} />
                    <span className="text-sm text-foreground">{link.name}</span>
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Unlock question */}
          {!showQuestion && !showResources && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="border-t-4 border-border pt-6"
            >
              <motion.button
                onClick={() => setShowQuestion(true)}
                whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(34,211,238,0.5)' }}
                whileTap={{ scale: 0.97 }}
                className="w-full p-6 border-4 border-accent bg-accent/10 hover:bg-accent/20 transition-all group"
                style={{ imageRendering: 'pixelated' }}
              >
                <div className="flex items-center justify-center gap-4">
                  <Gift className="text-accent" size={32} strokeWidth={3} />
                  <div className="text-left flex-1">
                    <p className="text-accent text-base mb-1">You made it this far...</p>
                    <p className="text-sm text-muted-foreground">One more thing before your gift 🎁</p>
                  </div>
                  <motion.div
                    animate={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Lock className="text-accent" size={24} strokeWidth={3} />
                  </motion.div>
                </div>
              </motion.button>
            </motion.div>
          )}

          {/* The question */}
          <AnimatePresence>
            {showQuestion && !showResources && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden border-t-4 border-border pt-6"
              >
                <motion.div
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  className="border-4 border-primary bg-card/50 p-8 space-y-6"
                  style={{ imageRendering: 'pixelated' }}
                >
                  <div className="text-center space-y-4">
                    <p className="text-xl text-foreground/90 leading-relaxed">
                      Okay, real talk before I unlock the vault...
                    </p>
                    <p className="text-lg text-foreground/90 leading-relaxed">
                      You made it this far. You actually READ all that instead of just scrolling past like most people would.
                    </p>
                    <p className="text-base text-foreground/80 leading-relaxed">
                      So here\'s the question: Are you actually going to USE these resources? Or are you just going to bookmark them, save them for later, and forget they exist like the other 47 tabs you have open?
                    </p>
                    <p className="text-lg text-accent font-medium">
                      What\'s it gonna be?
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                    <motion.button
                      onClick={handleUnlockResources}
                      whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(167,139,250,0.5)' }}
                      whileTap={{ scale: 0.95 }}
                      className="p-6 border-4 border-primary bg-primary/10 hover:bg-primary/20 transition-all"
                      style={{ imageRendering: 'pixelated' }}
                    >
                      <p className="text-base text-primary font-medium">
                        I\'m actually going to use them 💪
                      </p>
                    </motion.button>

                    <motion.button
                      onClick={handleUnlockResources}
                      whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(34,211,238,0.5)' }}
                      whileTap={{ scale: 0.95 }}
                      className="p-6 border-4 border-accent bg-accent/10 hover:bg-accent/20 transition-all"
                      style={{ imageRendering: 'pixelated' }}
                    >
                      <p className="text-base text-accent font-medium">
                        Probably gonna bookmark it, but I\'ll TRY ✨
                      </p>
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Resources section (unlocked) */}
        <AnimatePresence>
          {showResources && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden"
            >
              <ResourcesSection />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Floating hearts animation */}
      <AnimatePresence>
        {floatingHearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{ opacity: 0, scale: 0, x: `${heart.x}vw`, y: `${heart.y}vh` }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0, 1.5, 1.5, 0],
              y: [`${heart.y}vh`, `${heart.y - 30}vh`],
            }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 3, ease: 'easeOut' }}
            className="fixed pointer-events-none z-50"
            style={{
              filter: 'drop-shadow(0 0 10px rgba(167,139,250,0.8))',
            }}
          >
            <Heart
              className="text-accent"
              size={40}
              strokeWidth={3}
              fill="currentColor"
              style={{
                filter: 'drop-shadow(0 0 20px currentColor)',
              }}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
