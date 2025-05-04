import React from 'react';
import BentoCard from '@/components/BentoCard'; // Assuming BentoCard component path
import {
  Users, MessageSquareHeart, Lock, Unlock, Layers, MessageCircleQuestion,
  ShieldCheck, AlertTriangle, Smile, Workflow // Re-using MessageSquareText for the main title card icon style
} from 'lucide-react'; // Assuming lucide-react is installed
import { cn } from '@/lib/utils'; // Assuming cn utility path

// Custom icon container style based on the example
const IconContainer = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={cn("icon-container flex items-center justify-center rounded-lg p-2", className)}>
    {children}
  </div>
);

const LettingOthersKnowYou = () => {
  return (
    // Main container with dark background and padding, similar to the example
    <div className="min-h-screen flex flex-col items-center justify-center bg-bento-bg">

      {/* Main Grid Container */}
      <div className="grid gap-4 p-4 md:p-6 w-full max-w-7xl grid-cols-1 md:grid-cols-3 lg:grid-cols-3">

        {/* Title Card: Introduction */}
        <div className="title-card col-span-full animate-pulse-slow"> {/* Using col-span-full for a wide card */}
          <div className="text-center py-10">
            <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight mb-2 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              让别人知道你 <span className="block text-2xl md:text-3xl mt-2">Letting Others Know You</span>
            </h1>
            <p className="text-bento-text/70 text-lg md:text-xl mb-3 max-w-2xl mx-auto">
              自我透露：建立亲密关系的关键
              <br />
              Self-Disclosure: Key to Building Intimacy
            </p>
            <div className="flex justify-center mt-6">
               {/* Re-using the icon container style from the example */}
              <IconContainer className="bg-gradient-to-br from-purple-500/30 to-indigo-600/30">
                 <Users className="h-8 w-8 text-purple-400" /> {/* Using Users icon for connection */}
              </IconContainer>
            </div>
          </div>
        </div>

        {/* Card 1: The Need for Self-Disclosure */}
        <BentoCard
          title="自我透露的必要性 | The Need for Self-Disclosure"
          variant="1" // Use variant 1 color style
          titleClassName="text-pink-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-pink-500/30 to-red-600/30">
              <MessageSquareHeart className="h-6 w-6 text-pink-400" /> {/* Icon for sharing/heart */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-pink-200">
                让别人走进你的世界
                <br />
                Letting Others Into Your World
              </h4>
              <p className="text-bento-text/80 text-sm">
                别人想了解你的情况。你透露的信息让他们评估关系可能性。缺乏自我透露可能导致关系无疾而终或引起对方不满。
                <br />
                Others want to know about you. The information you reveal allows them to assess relationship possibilities. Lack of self-disclosure can lead to relationships ending prematurely or causing resentment.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 2: The Process of Self-Disclosure */}
        <BentoCard
          title="自我透露的过程 | The Process of Self-Disclosure"
          variant="2" // Use variant 2 color style
          titleClassName="text-blue-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-blue-500/30 to-indigo-600/30">
              <Workflow className="h-6 w-6 text-blue-400" /> {/* Icon for process/flow */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-blue-200">
                对称性与逐步深入
                <br />
                Symmetry and Gradual Depth
              </h4>
              <p className="text-bento-text/80 text-sm">
                自我透露是互相敞开的过程，通常是对称的。通过提问、表示兴趣、联系自身经历来促进对称性。
                <br />
                Self-disclosure is a mutual opening-up process, usually symmetrical. Promote symmetry by asking questions, showing interest, and relating to your own experiences.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 3: Setting the Stage for Responses */}
        <BentoCard
          title="设定对方回答 | Setting the Stage for Responses"
          variant="3" // Use variant 3 color style
          titleClassName="text-purple-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-purple-500/30 to-violet-600/30">
              <MessageCircleQuestion className="h-6 w-6 text-purple-400" /> {/* Icon for question/prompt */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-purple-200">
                先透露，再询问
                <br />
                Disclose First, Then Ask
              </h4>
              <p className="text-bento-text/80 text-sm">
                通过自己先公开信息（如名字、住址、意见），设定对方回答的模式，让对方清楚你希望得到的信息，并更容易透露。
                <br />
                By disclosing information about yourself first (like name, address, opinions), you set the pattern for the other person's response, making it clear what information you expect and easier for them to disclose.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 4: Stages of Communication Depth (Large Card) */}
        <BentoCard
          title="交流的四个阶段 | The Four Stages of Communication"
          variant="4" // Use variant 4 color style for large card
          isLarge={true} // Make this a large card
          titleClassName="text-amber-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-amber-500/30 to-orange-600/30">
              <Layers className="h-6 w-6 text-amber-400" /> {/* Icon for layers/stages */}
            </IconContainer>
            <div className="ml-3 flex-grow"> {/* Use flex-grow to take available space */}
              <h4 className="font-medium mb-1 text-amber-200">
                从客套到感受
                <br />
                From Clichés to Feelings
              </h4>
              <p className="text-bento-text/80 text-sm mb-4">
                相互交流通常经历四个阶段：客套话（认可存在）、事实（基本情况/近况）、意见（对事物的看法）、感受（情感反应）。
                <br />
                Interactions typically go through four stages: Clichés (acknowledging presence), Facts (basic info/recent status), Opinions (views on things), Feelings (emotional reactions).
              </p>
              {/* Adding key points as nested list */}
               <div className="mt-4 p-4 border border-amber-800/50 rounded-lg bg-amber-900/20">
                 <h5 className="font-medium text-amber-200 mb-2">
                   阶段详情
                   <br />
                   Stage Details
                 </h5>
                 <ul className="list-disc pl-5 text-bento-text/80 text-sm space-y-1">
                   <li>客套话 (Clichés)</li>
                   <li>事实 (Facts)</li>
                   <li>意见 (Opinions)</li>
                   <li>感受 (Feelings) - 最深刻的洞察 | Deepest Insight</li>
                 </ul>
               </div>
            </div>
          </div>
        </BentoCard>

        {/* Card 5: Making Self-Disclosure Interesting */}
        <BentoCard
          title="让自我透露引人入胜 | Making Self-Disclosure Interesting"
          variant="1" // Use variant 1 color style
          titleClassName="text-emerald-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-emerald-500/30 to-green-600/30">
              <Smile className="h-6 w-6 text-emerald-400" /> {/* Icon for engaging/smile */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-emerald-200">
                连接事实与自身
                <br />
                Connecting Facts to Yourself
              </h4>
              <p className="text-bento-text/80 text-sm">
                仅仅列出事实不够，要让别人感兴趣，需告诉他们这些事实与你的联系，描述你在情境中的感受和经历。
                <br />
                Listing facts isn't enough; to engage others, connect facts to yourself, describing your feelings and experiences in the situation.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 6: Common Problems with Self-Disclosure */}
        <BentoCard
          title="自我透露常见问题 | Common Problems with Self-Disclosure"
          variant="2" // Use variant 2 color style
          titleClassName="text-sky-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-sky-500/30 to-blue-600/30">
              <AlertTriangle className="h-6 w-6 text-sky-400" /> {/* Icon for warning/problem */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-sky-200">
                错误印象与不被相信
                <br />
                False Impressions and Distrust
              </h4>
              <p className="text-bento-text/80 text-sm">
                夸大优点、隐瞒缺点或迎合对方会给人错误印象，无法体验被真实接受，且需持续伪装。不具体的内容也难被相信。
                <br />
                Exaggerating strengths, hiding weaknesses, or conforming gives false impressions, prevents true acceptance, and requires constant pretense. Vague content is also hard to believe.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 7: Making Self-Disclosure Believable */}
        <BentoCard
          title="使自我透露令人相信 | Making Self-Disclosure Believable"
          variant="3" // Use variant 3 color style
          titleClassName="text-purple-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-purple-500/30 to-violet-600/30">
              <ShieldCheck className="h-6 w-6 text-purple-400" /> {/* Icon for believable/trust */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-purple-200">
                具体、展示反面与真诚
                <br />
                Be Specific, Show Counterpoints, Be Sincere
              </h4>
              <p className="text-bento-text/80 text-sm">
                通过具体细节（名字、日期、地点）、描绘感受、展示优点同时提及问题，以及真诚的态度，增强自我透露的可信度。
                <br />
                Enhance credibility with specific details (names, dates, places), describing feelings, showing strengths alongside challenges, and being sincere.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 8: Unclear Opinions */}
        <BentoCard
          title="观点不明确 | Unclear Opinions"
          variant="4" // Use variant 4 color style
          titleClassName="text-rose-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-rose-500/30 to-red-600/30">
              <Lock className="h-6 w-6 text-rose-400" /> {/* Icon for unclear/locked */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-rose-200">
                避免掩饰与问句
                <br />
                Avoid Hiding and Questions
              </h4>
              <p className="text-bento-text/80 text-sm">
                不要用“你”来掩饰自己的观点，也不要用问句来表达意见或感情。直接使用第一人称“我”陈述观点，才能被认真对待。
                <br />
                Don't use "you" to hide your opinions, nor use questions to express opinions or feelings. State your views directly using "I" to be taken seriously.
              </p>
            </div>
          </div>
        </BentoCard>

         {/* Card 9: Fear of Annoying Others */}
         <BentoCard
           title="害怕对方生厌而退缩 | Fear of Annoying and Withdrawing"
           variant="1" // Use variant 1 color style
           titleClassName="text-emerald-300" // Use a color from the bento palette
         >
           <div className="flex items-start">
             <IconContainer className="bg-gradient-to-br from-emerald-500/30 to-green-600/30">
               <Unlock className="h-6 w-6 text-emerald-400" /> {/* Icon for opening up/unlocking */}
             </IconContainer>
             <div className="ml-3">
               <h4 className="font-medium mb-1 text-emerald-200">
                 提供人际交往才能
                 <br />
                 Offering Interpersonal Skills
               </h4>
               <p className="text-bento-text/80 text-sm">
                 现代人普遍缺乏亲密朋友。你提供的是比娱乐更珍贵的人际交往才能。坦诚建立一对一关系会受欢迎。
                 <br />
                 Lack of close friends is common today. You offer valuable interpersonal skills, more precious than entertainment. Building sincere one-on-one relationships is welcomed.
               </p>
             </div>
           </div>
         </BentoCard>

      </div>

    </div>
  );
};

export default LettingOthersKnowYou;
