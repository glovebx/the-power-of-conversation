import React from 'react';
import BentoCard from '@/components/BentoCard'; // Assuming BentoCard component path
import {
  Ear, Workflow, HelpCircle, MessageSquareHeart, Mic, HeartHandshake, MessageSquareMore,
  AlertTriangle, Eye
} from 'lucide-react'; // Assuming lucide-react is installed
import { cn } from '@/lib/utils'; // Assuming cn utility path

// Custom icon container style based on the example
const IconContainer = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={cn("icon-container flex items-center justify-center rounded-lg p-2", className)}>
    {children}
  </div>
);

const ActiveListening = () => {
  return (
    // Main container with dark background and padding, similar to the example
    <div className="min-h-screen flex flex-col items-center justify-center bg-bento-bg">

      {/* Main Grid Container */}
      <div className="grid gap-4 p-4 md:p-6 w-full max-w-7xl grid-cols-1 md:grid-cols-3 lg:grid-cols-3">

        {/* Title Card: Introduction */}
        <div className="title-card col-span-full animate-pulse-slow"> {/* Using col-span-full for a wide card */}
          <div className="text-center py-10">
            <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight mb-2 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              倾听别人的话语 <span className="block text-2xl md:text-3xl mt-2">Listening to Others</span>
            </h1>
            <p className="text-bento-text/70 text-lg md:text-xl mb-3 max-w-2xl mx-auto">
              积极倾听：理解与回应的关键
              <br />
              Active Listening: Key to Understanding and Responding
            </p>
            <div className="flex justify-center mt-6">
               {/* Re-using the icon container style from the example */}
              <IconContainer className="bg-gradient-to-br from-purple-500/30 to-indigo-600/30">
                 <Ear className="h-8 w-8 text-purple-400" /> {/* Using Ear icon */}
              </IconContainer>
            </div>
          </div>
        </div>

        {/* Card 1: The Communication Process */}
        <BentoCard
          title="交流过程 | The Communication Process"
          variant="1" // Use variant 1 color style
          titleClassName="text-pink-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-pink-500/30 to-red-600/30">
              <Workflow className="h-6 w-6 text-pink-400" /> {/* Icon for process */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-pink-200">
                编码、渠道与解码
                <br />
                Encoding, Channel, and Decoding
              </h4>
              <p className="text-bento-text/80 text-sm">
                交流始于内心想法转为语言/非语言代码（编码），通过渠道传播，再由对方赋予意义（解码）。此过程易受干扰和歪曲。
                <br />
                Communication starts with inner thoughts converting to verbal/non-verbal codes (encoding), transmitted through channels, and given meaning by the receiver (decoding). This process is prone to interference and distortion.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 2: Why Active Listening is Important */}
        <BentoCard
          title="为何积极倾听重要 | Why Active Listening is Important"
          variant="2" // Use variant 2 color style
          titleClassName="text-blue-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-blue-500/30 to-indigo-600/30">
              <HelpCircle className="h-6 w-6 text-blue-400" /> {/* Icon for help/understanding */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-blue-200">
                避免误解
                <br />
                Avoiding Misunderstandings
              </h4>
              <p className="text-bento-text/80 text-sm">
                你的印象常与对方意图不符，信息易被错误解码。积极倾听是保证准确理解对方真正意图的关键技巧。
                <br />
                Your impression often doesn't match the speaker's intent, and messages are easily decoded incorrectly. Active listening is the key technique to ensure accurate understanding of the speaker's true intentions.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 3: What Active Listening Is */}
        <BentoCard
          title="什么是积极倾听 | What Active Listening Is"
          variant="3" // Use variant 3 color style
          titleClassName="text-purple-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-purple-500/30 to-violet-600/30">
              <MessageSquareHeart className="h-6 w-6 text-purple-400" /> {/* Icon for checking message */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-purple-200">
                确认你的理解
                <br />
                Confirming Your Understanding
              </h4>
              <p className="text-bento-text/80 text-sm">
                积极倾听是向对方反馈你对其信息的理解，让发送者知你在用心听，并有机会证实或澄清，避免误解。
                <br />
                Active listening is about feeding back your understanding of the speaker's message, letting them know you're listening attentively and giving them a chance to confirm or clarify, avoiding misunderstandings.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 4: When and How to Use Active Listening */}
        <BentoCard
          title="何时何用积极倾听 | When and How to Use Active Listening"
          variant="4" // Use variant 4 color style
          titleClassName="text-amber-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-amber-500/30 to-orange-600/30">
              <Mic className="h-6 w-6 text-amber-400" /> {/* Icon for speaking/listening */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-amber-200">
                关键时刻与技巧
                <br />
                Key Moments and Techniques
              </h4>
              <p className="text-bento-text/80 text-sm">
                尤其在不确定或信息重要/情感化时使用。集中揣摩对方感情和内容，用“你”开头，结尾加“是吗”试探性回应。
                <br />
                Especially useful when unsure or when information is important/emotional. Focus on discerning feelings and content, start with "You...", and end with "right?" for tentative responses.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 5: Active Listening Shows Acceptance */}
        <BentoCard
          title="积极倾听表示接受 | Active Listening Shows Acceptance"
          variant="1" // Use variant 1 color style
          titleClassName="text-emerald-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-emerald-500/30 to-green-600/30">
              <HeartHandshake className="h-6 w-6 text-emerald-400" /> {/* Icon for acceptance/connection */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-emerald-200">
                建立信任与亲密
                <br />
                Building Trust and Intimacy
              </h4>
              <p className="text-bento-text/80 text-sm">
                不评判、耐心倾听、理解和接受对方，能让对方感到平静放松，信任你解决问题的能力，并更愿意与你交往。
                <br />
                Listening without judgment, with patience, understanding, and acceptance, makes the speaker feel calm and relaxed, trusts your ability to solve problems, and is more willing to interact with you.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 6: Active Listening Keeps Conversation Going */}
        <BentoCard
          title="让交谈进行下去 | Keeping the Conversation Going"
          variant="2" // Use variant 2 color style
          titleClassName="text-sky-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-sky-500/30 to-blue-600/30">
              <MessageSquareMore className="h-6 w-6 text-sky-400" /> {/* Icon for more messages */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-sky-200">
                鼓励倾诉与专注
                <br />
                Encouraging Sharing and Focus
              </h4>
              <p className="text-bento-text/80 text-sm">
                积极倾听能有效鼓励对方倾诉，让你专注于对方，而非担心自己表现，从而更容易找到话题并深入交流。
                <br />
                Active listening effectively encourages the speaker to share, helps you focus on them instead of worrying about your own performance, making it easier to find topics and deepen communication.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 7: Common Mistakes (Large Card) */}
        <BentoCard
          title="常犯错误 | Common Mistakes"
          variant="3" // Use variant 3 color style for the large card
          isLarge={true} // Make this a large card
          titleClassName="text-indigo-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-indigo-500/30 to-violet-600/30">
              <AlertTriangle className="h-6 w-6 text-indigo-400" /> {/* Icon for warning/mistake */}
            </IconContainer>
            <div className="ml-3 flex-grow"> {/* Use flex-grow to take available space */}
              <h4 className="font-medium mb-1 text-indigo-200">
                避免表面理解与忽视感受
                <br />
                Avoiding Superficial Understanding and Ignoring Feelings
              </h4>
              <p className="text-bento-text/80 text-sm mb-4">
                初学者常犯错误是只重复对方话语表面内容。真正的积极倾听需理解话语背后隐含意义。忽视或轻视对方感情会使感情更强烈。
                <br />
                Beginners often repeat only the surface content. True active listening requires understanding the underlying meaning. Ignoring or minimizing feelings intensifies them.
              </p>

              {/* Adding key mistakes as nested list */}
               <div className="mt-4 p-4 border border-indigo-800/50 rounded-lg bg-indigo-900/20">
                 <h5 className="font-medium text-indigo-200 mb-2">
                   主要错误类型
                   <br />
                   Main Types of Mistakes
                 </h5>
                 <ul className="list-disc pl-5 text-bento-text/80 text-sm space-y-1">
                   <li>人云亦云 (Repeating Verbatim)</li>
                   <li>忽视或轻视对方的感受 (Ignoring or Minimizing Feelings)</li>
                 </ul>
               </div>
            </div>
          </div>
        </BentoCard>

        {/* Card 8: Active Listening to Non-Verbal & Ensuring Understanding */}
        <BentoCard
          title="倾听非语言与确保理解 | Listening to Non-Verbal & Ensuring Understanding"
          variant="4" // Use variant 4 color style
          titleClassName="text-rose-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-rose-500/30 to-red-600/30">
              <Eye className="h-6 w-6 text-rose-400" /> {/* Icon for eye/observation */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-rose-200">
                观察、验证与确认
                <br />
                Observe, Verify, and Confirm
              </h4>
              <p className="text-bento-text/80 text-sm">
                非语言信息难理解，需三步验证：陈述观察、试探性理解、询问是否正确。确保对方理解你的信息，可请对方复述。
                <br />
                Non-verbal messages are hard to interpret; verify in three steps: state observation, tentative understanding, ask for confirmation. To ensure your message is understood, ask the listener to repeat it.
              </p>
            </div>
          </div>
        </BentoCard>

      </div>

    </div>
  );
};

export default ActiveListening;
