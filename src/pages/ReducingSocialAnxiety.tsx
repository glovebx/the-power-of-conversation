import React from 'react';
import BentoCard from '@/components/BentoCard'; // Assuming BentoCard component path
import {
  Shield, ZapOff, Brain, AlertTriangle, Frown, Target, CheckCheck,
  Users // Re-using Users for a general communication/self icon
} from 'lucide-react'; // Assuming lucide-react is installed
import { cn } from '@/lib/utils'; // Assuming cn utility path

// Custom icon container component based on the example
const IconContainer = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={cn("icon-container flex items-center justify-center rounded-lg p-2", className)}>
    {children}
  </div>
);

const ReducingSocialAnxiety = () => {
  return (
    // Main container with dark background and padding, similar to the example
    <div className="min-h-screen flex flex-col items-center justify-center bg-bento-bg">

      {/* Main Grid Container */}
      <div className="grid gap-4 p-4 md:p-6 w-full max-w-7xl grid-cols-1 md:grid-cols-3 lg:grid-cols-3">

        {/* Title Card: Introduction */}
        <div className="title-card col-span-full animate-pulse-slow"> {/* Using col-span-full for a wide card */}
          <div className="text-center py-10">
            <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight mb-2 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              减少社交场合中的紧张心理 <span className="block text-2xl md:text-3xl mt-2">Reducing Social Anxiety</span>
            </h1>
            <p className="text-bento-text/70 text-lg md:text-xl mb-3 max-w-2xl mx-auto">
              克服紧张，抓住机会，提升成功可能性
              <br />
              Overcoming Tension, Seizing Opportunities, Increasing Success Probability
            </p>
            <div className="flex justify-center mt-6">
               {/* Using Shield icon for protection/reducing anxiety */}
              <IconContainer className="bg-gradient-to-br from-purple-500/30 to-indigo-600/30">
                 <Shield className="h-8 w-8 text-purple-400" /> {/* Using Shield icon */}
              </IconContainer>
            </div>
          </div>
        </div>

        {/* Card 1: Risk, Opportunity, and Success */}
        <BentoCard
          title="风险、机会与成功 | Risk, Opportunity, and Success"
          variant="1" // Use variant 1 color style
          titleClassName="text-pink-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-pink-500/30 to-red-600/30">
              <Target className="h-6 w-6 text-pink-400" /> {/* Icon for target/opportunity */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-pink-200">
                冒险越大，机会越多
                <br />
                Greater Risk, More Opportunities
              </h4>
              <p className="text-bento-text/80 text-sm">
                只要不被紧张所累，你冒的风险越大，机会就越多，成功的可能性就越大。克服紧张后，能随意做想做的事。
                <br />
                As long as you are not burdened by tension, the greater the risk you take, the more opportunities you will have, and the greater the possibility of success. Once tension is overcome, people can freely do many things they want.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 2: Events vs. Beliefs */}
        <BentoCard
          title="事件 vs. 信念 | Events vs. Beliefs"
          variant="2" // Use variant 2 color style
          isLarge={true} // Make this a large card
          titleClassName="text-blue-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-blue-500/30 to-indigo-600/30">
              <Brain className="h-6 w-6 text-blue-400" /> {/* Icon for brain/beliefs */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-blue-200">
                情绪源于信念
                <br />
                Emotions Stem from Beliefs
              </h4>
              <p className="text-bento-text/80 text-sm">
                事件本身不引起情绪反应，而是你对事件的信念在起作用。不同信念导致对同一事件的不同情绪反应。
                <br />
                Events themselves do not cause emotional reactions; it is your beliefs about these events that are at play. Different beliefs lead to different emotional responses to the same event.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 3: Four Categories of Irrational Beliefs (Large Card) */}
        <BentoCard
          title="非理性信念的四类 | Four Categories of Irrational Beliefs"
          variant="3" // Use variant 3 color style for large card
          isLarge={true} // Make this a large card
          titleClassName="text-purple-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-purple-500/30 to-violet-600/30">
              <AlertTriangle className="h-6 w-6 text-purple-400" /> {/* Icon for warning/irrational */}
            </IconContainer>
            <div className="ml-3 flex-grow"> {/* Use flex-grow to take available space */}
              <h4 className="font-medium mb-1 text-purple-200">
                导致紧张的错误想法
                <br />
                Mistaken Thoughts Leading to Tension
              </h4>
              <p className="text-bento-text/80 text-sm mb-4">
                引起紧张的非理性信念主要分四类：逃避、恐惧、以偏概全、要求过高。这些信念不理性、不符合逻辑、无法证明。
                <br />
                Irrational beliefs that cause tension are mainly divided into four categories: Escape, Fear, Overgeneralization, and Demandingness. These beliefs are irrational, illogical, and unprovable.
              </p>

               {/* Adding key categories as nested list */}
               <div className="mt-4 p-4 border border-purple-800/50 rounded-lg bg-purple-900/20">
                 <h5 className="font-medium text-purple-200 mb-2">
                   主要类别
                   <br />
                   Main Categories
                 </h5>
                 <ul className="list-disc pl-5 text-bento-text/80 text-sm space-y-1">
                   <li>逃避 (Escape)</li>
                   <li>恐惧 (Fear)</li>
                   <li>以偏概全 (Overgeneralization)</li>
                   <li>要求过高 (Demandingness)</li>
                 </ul>
               </div>
            </div>
          </div>
        </BentoCard>

        {/* Card 4: Challenging Escape */}
        <BentoCard
          title="挑战逃避意识 | Challenging Escape"
          variant="4" // Use variant 4 color style
          titleClassName="text-amber-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-amber-500/30 to-orange-600/30">
              <ZapOff className="h-6 w-6 text-amber-400" /> {/* Icon for turning off/escaping */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-amber-200">
                紧张源于信念，非事件
                <br />
                Tension Stems from Beliefs, Not Events
              </h4>
              <p className="text-bento-text/80 text-sm">
                逃避是将感情不快归咎外界事物。挑战它，认识到紧张是由你对事物的信念造成，而非事件本身。
                <br />
                Escape is blaming emotional discomfort on external things. Challenge it by recognizing tension is caused by your beliefs about things, not the events themselves.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 5: Challenging Fear */}
        <BentoCard
          title="挑战恐惧心理 | Challenging Fear"
          variant="1" // Use variant 1 color style
          titleClassName="text-emerald-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-emerald-500/30 to-green-600/30">
              <Frown className="h-6 w-6 text-emerald-400" /> {/* Icon for fear/unhappiness */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-emerald-200">
                评估最坏结果与语言
                <br />
                Evaluate Worst Outcome and Language
              </h4>
              <p className="text-bento-text/80 text-sm">
                问自己可怕事情发生可能性。若失败，最坏结果是什么？用“倒霉”、“不便”代替“恐怖”、“可怕”。
                <br />
                Ask yourself the likelihood of terrible things happening. If you fail, what is the actual worst outcome? Replace words like "terrible," "horrible," "awful" with "unfortunate," "inconvenient."
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 6: Challenging Overgeneralization */}
        <BentoCard
          title="挑战以偏概全 | Challenging Overgeneralization"
          variant="2" // Use variant 2 color style
          titleClassName="text-sky-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-sky-500/30 to-blue-600/30">
              <Users className="h-6 w-6 text-sky-400" /> {/* Icon for people/generalization */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-sky-200">
                质疑标签与寻找反例
                <br />
                Question Labels and Find Counterexamples
              </h4>
              <p className="text-bento-text/80 text-sm">
                挑战对自己或别人的“标签”（如“害羞”、“失败者”）。这些标签不准确。寻找过去成功的经历来反驳。
                <br />
                Challenge "labels" you put on yourself or others (like "shy," "loser"). These labels are inaccurate. Look for past successful experiences to counter them.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 7: Challenging Demandingness (Large Card) */}
        <BentoCard
          title="挑战要求过高 | Challenging Demandingness"
          variant="3" // Use variant 3 color style for large card
          isLarge={true} // Make this a large card
          titleClassName="text-indigo-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-indigo-500/30 to-violet-600/30">
              <CheckCheck className="h-6 w-6 text-indigo-400" /> {/* Icon for checking/standards */}
            </IconContainer>
            <div className="ml-3 flex-grow"> {/* Use flex-grow to take available space */}
              <h4 className="font-medium mb-1 text-indigo-200">
                质疑“应该”与“必须”
                <br />
                Questioning "Shoulds" and "Musts"
              </h4>
              <p className="text-bento-text/80 text-sm mb-4">
                质疑自己或别人必须遵循的、不合理的“应该”和“不应该”准则（包括完美主义）。这些准则限制行动，导致失败。
                <br />
                Question unreasonable "shoulds" and "musts" that you or others must follow (including perfectionism). These rules limit action and lead to failure.
              </p>
               {/* Adding key types of demandingness as nested list */}
               <div className="mt-4 p-4 border border-indigo-800/50 rounded-lg bg-indigo-900/20">
                 <h5 className="font-medium text-indigo-200 mb-2">
                   主要类型
                   <br />
                   Main Types
                 </h5>
                 <ul className="list-disc pl-5 text-bento-text/80 text-sm space-y-1">
                   <li>要求自己遵循不利准则 (Demanding Self Follow Detrimental Rules)</li>
                   <li>要求完美 (Demanding Perfection)</li>
                   <li>要求别人遵循你的准则 (Demanding Others Follow Your Rules)</li>
                 </ul>
               </div>
            </div>
          </div>
        </BentoCard>

      </div>

    </div>
  );
};

export default ReducingSocialAnxiety;
