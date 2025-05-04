import React from 'react';
import BentoCard from '@/components/BentoCard'; // Assuming BentoCard component path
import {
  MessageSquareX, MessageSquareQuote, CheckCheck, FileText, ThumbsUp, Workflow, Target,
  MessageSquareText // Re-using MessageSquareText for the main title card icon style
} from 'lucide-react'; // Assuming lucide-react is installed
import { cn } from '@/lib/utils'; // Assuming cn utility path

// Custom icon container style based on the example
const IconContainer = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={cn("icon-container flex items-center justify-center rounded-lg p-2", className)}>
    {children}
  </div>
);

const AcceptingCriticism = () => {
  return (
    // Main container with dark background and padding, similar to the example
    <div className="min-h-screen flex flex-col items-center justify-center bg-bento-bg">
      {/* Main Grid Container */}
      <div className="grid gap-4 p-4 md:p-6 w-full max-w-7xl grid-cols-1 md:grid-cols-3 lg:grid-cols-3">

        {/* Title Card: Introduction */}
        <div className="title-card col-span-full animate-pulse-slow"> {/* Using col-span-full for a wide card */}
          <div className="text-center py-10">
            <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight mb-2 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              积极地接受批评 <span className="block text-2xl md:text-3xl mt-2">Actively Accepting Criticism</span>
            </h1>
            <p className="text-bento-text/70 text-lg md:text-xl mb-3 max-w-2xl mx-auto">
              化解矛盾，增进理解
              <br />
              Resolving Conflicts, Enhancing Understanding
            </p>
            <div className="flex justify-center mt-6">
               {/* Re-using the icon container style from the example */}
              <IconContainer className="bg-gradient-to-br from-purple-500/30 to-indigo-600/30">
                 <MessageSquareText className="h-8 w-8 text-purple-400" /> {/* Using MessageSquareText icon */}
              </IconContainer>
            </div>
          </div>
        </div>

        {/* Card 1: Passive Responses */}
        <BentoCard
          title="被动的回应 | Passive Responses"
          variant="1" // Use variant 1 color style
          titleClassName="text-pink-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-pink-500/30 to-red-600/30">
              <MessageSquareX className="h-6 w-6 text-pink-400" /> {/* Icon for negative message */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-pink-200">
                逃避、否认、找借口、回击
                <br />
                Escape, Deny, Excuse, Counterattack
              </h4>
              <p className="text-bento-text/80 text-sm">
                面对批评时，本能的防卫反应包括逃避、否认、找借口或回击。这些方式无法解决问题，只会激化矛盾，损害关系。
                <br />
                Instinctive defensive reactions to criticism include escaping, denying, excusing, or counterattacking. These methods don't solve problems, only escalate conflict and harm relationships.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 2: Active Choice - Step 1: Ask for Specifics */}
        <BentoCard
          title="积极的抉择：询问具体内容 | Active Choice: Ask for Specifics"
          variant="2" // Use variant 2 color style
          titleClassName="text-blue-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-blue-500/30 to-indigo-600/30">
              <MessageSquareQuote className="h-6 w-6 text-blue-400" /> {/* Icon for questioning */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-blue-200">
                理解对方的意图
                <br />
                Understanding the Other Person's Intent
              </h4>
              <p className="text-bento-text/80 text-sm">
                批评常是概括性的。询问具体内容（时间、地点、原因、人物、什么、怎么样）是理解对方意图的工具，而非攻击或防御。
                <br />
                Criticism is often general. Asking for specifics (when, where, why, who, what, how) is a tool for understanding intent, not attack or defense.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 3: Active Choice - Step 2: Agree to the Criticism */}
        <BentoCard
          title="积极的抉择：同意对方的批评 | Active Choice: Agree to the Criticism"
          variant="3" // Use variant 3 color style
          titleClassName="text-purple-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-purple-500/30 to-violet-600/30">
              <CheckCheck className="h-6 w-6 text-purple-400" /> {/* Icon for agreement */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-purple-200">
                两种赞同方式
                <br />
                Two Ways to Agree
              </h4>
              <p className="text-bento-text/80 text-sm">
                在理解对方意图后，下一步是同意其批评。有两种方式：同意对方说的事实，或同意对方有发表意见的权利。
                <br />
                After understanding intent, the next step is to agree to the criticism. There are two ways: agree to the facts stated, or agree to the right to have an opinion.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 4: Agreeing to Facts */}
        <BentoCard
          title="同意对方说的事实 | Agreeing to Facts Stated"
          variant="4" // Use variant 4 color style
          titleClassName="text-amber-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-amber-500/30 to-orange-600/30">
              <FileText className="h-6 w-6 text-amber-400" /> {/* Icon for facts/document */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-amber-200">
                承认准确或可能的事实
                <br />
                Acknowledging Accurate or Possible Facts
              </h4>
              <p className="text-bento-text/80 text-sm">
                如果对方批评的事实准确或可能发生，承认它。这表示你在倾听，且不放弃自己的立场。使用关键词重复或说“没错”来表示同意。
                <br />
                If the facts stated in the criticism are accurate or possible, acknowledge them. This shows you're listening and doesn't mean giving up your position. Use keyword repetition or say "That's right" to agree.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 5: Agreeing to the Right to Opinion */}
        <BentoCard
          title="同意对方有发表意见的权利 | Agreeing to the Right to Opinion"
          variant="1" // Use variant 1 color style
          titleClassName="text-emerald-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-emerald-500/30 to-green-600/30">
              <ThumbsUp className="h-6 w-6 text-emerald-400" /> {/* Icon for opinion/agreement */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-emerald-200">
                尊重主观判断
                <br />
                Respecting Subjective Judgment
              </h4>
              <p className="text-bento-text/80 text-sm">
                当批评是基于预测或主观判断时，同意对方有发表该意见的权利。这让你听取不同意见，同时保持自己立场，双方都不被定义为“错误”。
                <br />
                When criticism is based on predictions or subjective judgment, agree to their right to hold that opinion. This allows listening to different views while maintaining your stance; neither party is defined as "wrong".
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 6: Combining Techniques */}
        <BentoCard
          title="综合运用技巧 | Combining Techniques"
          variant="2" // Use variant 2 color style
          titleClassName="text-sky-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-sky-500/30 to-blue-600/30">
              <Workflow className="h-6 w-6 text-sky-400" /> {/* Icon for workflow/combination */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-sky-200">
                询问与赞同的结合
                <br />
                Combining Asking and Agreeing
              </h4>
              <p className="text-bento-text/80 text-sm">
                积极接受批评通常结合询问具体内容和同意对方。你可以在同意事实或意见后，加入自我透露来解释你的想法或感受。
                <br />
                Actively accepting criticism typically combines asking for specifics and agreeing. After agreeing to facts or opinions, you can add self-disclosure to explain your thoughts or feelings.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 7: Outcome and Vision (Large Card) */}
        <BentoCard
          title="积极接受批评的结果 | Outcomes of Actively Accepting Criticism"
          variant="3" // Use variant 3 color style for large card
          isLarge={true} // Make this a large card
          titleClassName="text-indigo-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-indigo-500/30 to-violet-600/30">
              <Target className="h-6 w-6 text-indigo-400" /> {/* Icon for goal/outcome */}
            </IconContainer>
            <div className="ml-3 flex-grow"> {/* Use flex-grow to take available space */}
              <h4 className="font-medium mb-1 text-indigo-200">
                解决问题，增进关系
                <br />
                Solving Problems, Improving Relationships
              </h4>
              <p className="text-bento-text/80 text-sm mb-4">
                积极接受批评能防止问题积累，避免矛盾激化。它让你洞察对方想法，使批评者平静，并增进互相理解和尊重，实现“我没错—你也没错”的态度。
                <br />
                Actively accepting criticism prevents problems from accumulating and escalating conflicts. It gives insight into the other person's thoughts, calms the critic, and promotes mutual understanding and respect, achieving an "I'm OK - You're OK" attitude.
              </p>

               {/* Adding Jean Monnet's vision as a concluding thought */}
               <div className="mt-4 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 p-4 rounded-lg">
                 <p className="text-bento-text/90 text-center italic text-sm">
                   “希望有一天，国家与国家之间以及人与人之间不再是相互对立地站在两边，而是站在同一边，共同对付处于另一边的问题。”—— 吉恩·莫奈特
                   <br />
                   "The hope is that one day, nations and people will no longer stand on opposite sides, but stand on the same side, jointly tackling the problems on the other side." - Jean Monnet
                 </p>
               </div>
            </div>
          </div>
        </BentoCard>

      </div>

    </div>
  );
};

export default AcceptingCriticism;
