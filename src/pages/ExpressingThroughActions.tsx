import React from 'react';
import BentoCard from '@/components/BentoCard'; // Assuming BentoCard component path
import {
  Maximize, PersonStanding, Handshake, Eye, CheckCheck, Smile, ListChecks,
  MessageSquareX, Users // Using Users for the main title card icon
} from 'lucide-react'; // Assuming lucide-react is installed
import { cn } from '@/lib/utils'; // Assuming cn utility path

// Custom icon container component based on the example
const IconContainer = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={cn("icon-container flex items-center justify-center rounded-lg p-2", className)}>
    {children}
  </div>
);

const ExpressingThroughActions = () => {
  return (
    // Main container with dark background and padding, similar to the example
    <div className="min-h-screen flex flex-col items-center justify-center bg-bento-bg">

      {/* Main Grid Container */}
      <div className="grid gap-4 p-4 md:p-6 w-full max-w-7xl grid-cols-1 md:grid-cols-3 lg:grid-cols-3">

        {/* Title Card: Introduction */}
        <div className="title-card col-span-full animate-pulse-slow"> {/* Using col-span-full for a wide card */}
          <div className="text-center py-10">
            <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight mb-2 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              通过动作表情达意 <span className="block text-2xl md:text-3xl mt-2">Expressing Through Actions</span>
            </h1>
            <p className="text-bento-text/70 text-lg md:text-xl mb-3 max-w-2xl mx-auto">
              交流的无处不在与非语言信号的重要性
              <br />
              The Ubiquity of Communication and the Importance of Non-verbal Signals
            </p>
            <div className="flex justify-center mt-6">
               {/* Using Users icon inside the gradient container for the main card */}
              <IconContainer className="bg-gradient-to-br from-purple-500/30 to-indigo-600/30">
                 <Users className="h-8 w-8 text-purple-400" /> {/* Using Users icon */}
              </IconContainer>
            </div>
          </div>
        </div>

        {/* Card 1: Personal Space */}
        <BentoCard
          title="个人空间 | Personal Space"
          variant="1" // Use variant 1 color style
          titleClassName="text-pink-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-pink-500/30 to-red-600/30">
              <Maximize className="h-6 w-6 text-pink-400" /> {/* Icon for space */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-pink-200">
                距离与关系
                <br />
                Distance and Relationships
              </h4>
              <p className="text-bento-text/80 text-sm">
                空间在人际交往中起着重要的作用，每个人都有一个移动的个人空间，不同距离传达不同意义，且个人空间需求因文化而异。
                <br />
                Space plays an important role in interpersonal communication. Everyone has a mobile personal space, different distances convey different meanings, and personal space needs vary by culture.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 2: Posture */}
        <BentoCard
          title="姿态 | Posture"
          variant="2" // Use variant 2 color style
          titleClassName="text-blue-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-blue-500/30 to-indigo-600/30">
              <PersonStanding className="h-6 w-6 text-blue-400" /> {/* Icon for posture */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-blue-200">
                开放与封闭的信号
                <br />
                Signals of Openness and Closure
              </h4>
              <p className="text-bento-text/80 text-sm">
                你的姿态“告诉”对方你是否愿意交往以及感兴趣程度。开放姿态表示放松和接受，封闭姿态表示紧张或不感兴趣。
                <br />
                Your posture "tells" the other person whether you are willing to interact and your level of interest. Open postures indicate relaxation and acceptance, while closed postures indicate tension or disinterest.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 3: Body Contact */}
        <BentoCard
          title="身体接触 | Body Contact"
          variant="3" // Use variant 3 color style
          titleClassName="text-purple-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-purple-500/30 to-violet-600/30">
              <Handshake className="h-6 w-6 text-purple-400" /> {/* Icon for contact */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-purple-200">
                情感的传递
                <br />
                Conveying Emotion
              </h4>
              <p className="text-bento-text/80 text-sm">
                身体接触是无声地表达“我在乎你”和“我喜欢你”的方式，传达语言无法独自完成的感情，如握手和拥抱。
                <br />
                Physical contact is a silent way to express "I care about you" and "I like you", conveying emotions that language alone cannot, such as handshakes and hugs.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 4: Eye Contact */}
        <BentoCard
          title="眼神交流 | Eye Contact"
          variant="4" // Use variant 4 color style
          titleClassName="text-amber-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-amber-500/30 to-orange-600/30">
              <Eye className="h-6 w-6 text-amber-400" /> {/* Icon for eye contact */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-amber-200">
                心灵的窗口
                <br />
                Window to the Soul
              </h4>
              <p className="text-bento-text/80 text-sm">
                眼神交流是成功社交的先决条件，表示尊敬和关注。瞳孔放大有时也传递喜欢的信息。
                <br />
                Eye contact is a prerequisite for successful social interaction, indicating respect and attention. Pupil dilation can also sometimes convey liking.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 5: Nodding */}
        <BentoCard
          title="点头 | Nodding"
          variant="1" // Use variant 1 color style
          titleClassName="text-emerald-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-emerald-500/30 to-green-600/30">
              <CheckCheck className="h-6 w-6 text-emerald-400" /> {/* Icon for nodding/agreement */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-emerald-200">
                理解与赞同的信号
                <br />
                Signals of Understanding and Agreement
              </h4>
              <p className="text-bento-text/80 text-sm">
                点头在交流中作用重要。轻微慢速点头表示领会，鼓励对方；快速重复点头表示完全明白并赞同，希望插话。
                <br />
                Nodding plays an important role in communication. Slight slow nodding indicates understanding and encourages the speaker; rapid repeated nodding indicates full comprehension and agreement, signaling a desire to interject.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 6: Smiling */}
        <BentoCard
          title="微笑 | Smiling"
          variant="2" // Use variant 2 color style
          titleClassName="text-sky-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-sky-500/30 to-blue-600/30">
              <Smile className="h-6 w-6 text-sky-400" /> {/* Icon for smiling */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-sky-200">
                积极的传递者
                <br />
                The Positive Conveyor
              </h4>
              <p className="text-bento-text/80 text-sm">
                微笑是表达兴趣和喜好的重要方式，传递积极信息，让人感到受欢迎。真诚的微笑能发掘友好和热情。
                <br />
                Smiling is an important way to express interest and liking, conveying positive messages and making people feel welcome. A sincere smile can unlock friendliness and warmth.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 7: Contradictory Signals */}
        <BentoCard
           title="非语言信号的矛盾 | Contradictory Non-verbal Signals"
           variant="3" // Use variant 3 color style
           titleClassName="text-rose-300" // Use a color from the bento palette
         >
           <div className="flex items-start">
             <IconContainer className="bg-gradient-to-br from-rose-500/30 to-red-600/30">
               <MessageSquareX className="h-6 w-6 text-rose-400" /> {/* Icon for conflicting message */}
             </IconContainer>
             <div className="ml-3">
               <h4 className="font-medium mb-1 text-rose-200">
                 身体比语言更诚实
                 <br />
                 Body is More Honest Than Words
               </h4>
               <p className="text-bento-text/80 text-sm">
                 当非语言行为与话语矛盾时，人们几乎总是倾向于相信非语言信息。大多数人无意识地发出矛盾信号。
                 <br />
                 When non-verbal behavior contradicts words, people almost always tend to believe the non-verbal message. Most people unconsciously send contradictory signals.
               </p>
             </div>
           </div>
         </BentoCard>


        {/* Card 8: SOFTEN Method (Large Card) */}
        <BentoCard
          title="SOFTEN 方法 | The SOFTEN Method"
          variant="4" // Use variant 4 color style for the large card
          isLarge={true} // Make this a large card
          titleClassName="text-indigo-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-indigo-500/30 to-violet-600/30">
              <ListChecks className="h-6 w-6 text-indigo-400" /> {/* Icon for a method/list */}
            </IconContainer>
            <div className="ml-3 flex-grow"> {/* Use flex-grow to take available space */}
              <h4 className="font-medium mb-1 text-indigo-200">
                表达喜好的非语言技巧
                <br />
                Non-verbal Techniques for Expressing Liking
              </h4>
              <p className="text-bento-text/80 text-sm mb-4">
                阿瑟·瓦斯默提出的 SOFTEN 方法，通过一系列非语言行为（微笑、开放姿态、身体前倾、身体接触、眼神交流、点头）来表达轻松、舒服和喜好。
                <br />
                Arthur Wassmer's SOFTEN method uses a series of non-verbal behaviors (Smile, Open posture, Forward lean, Touch, Eye contact, Nod) to express ease, comfort, and liking.
              </p>

              {/* Adding some key points as nested list for detail, similar to the example */}
               <div className="mt-4 p-4 border border-indigo-800/50 rounded-lg bg-indigo-900/20">
                 <h5 className="font-medium text-indigo-200 mb-2">
                   SOFTEN 构成
                   <br />
                   SOFTEN Components
                 </h5>
                 <ul className="list-disc pl-5 text-bento-text/80 text-sm space-y-1">
                   <li>微笑 (Smile)</li>
                   <li>开放的姿态 (Open posture)</li>
                   <li>身体前倾 (Forward lean)</li>
                   <li>身体接触 (Touch)</li>
                   <li>眼神交流 (Eye contact)</li>
                   <li>点头 (Nod)</li>
                 </ul>
               </div>

              <div className="mt-4 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 p-4 rounded-lg">
                <p className="text-bento-text/90 text-center italic text-sm">
                  SOFTEN 行为不仅能帮助你表达喜好，在你向外表露感情时，你在内心也会体验到。
                  <br />
                  SOFTEN behaviors not only help you express liking, but you also experience the feelings internally when you outwardly express them.
                </p>
              </div>
            </div>
          </div>
        </BentoCard>

      </div>

    </div>
  );
};

export default ExpressingThroughActions;
