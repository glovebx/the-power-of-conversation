import React from 'react';
import BentoCard from '@/components/BentoCard'; // Assuming BentoCard component path
import {
  Target, Goal, AlertTriangle, CheckCircle, ListChecks, Layers, Brain, Award, Smile, Frown, Workflow
   // Re-using MessageSquareText for a general communication icon
} from 'lucide-react'; // Assuming lucide-react is installed
import { cn } from '@/lib/utils'; // Assuming cn utility path

// Custom icon container component based on the example
const IconContainer = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={cn("icon-container flex items-center justify-center rounded-lg p-2", className)}>
    {children}
  </div>
);

const EffortWithAPlanComponent = () => {
  return (
    // Main container with dark background and padding, similar to the example
    <div className="min-h-screen flex flex-col items-center justify-center bg-bento-bg">

      {/* Main Grid Container */}
      <div className="grid gap-4 p-4 md:p-6 w-full max-w-7xl grid-cols-1 md:grid-cols-3 lg:grid-cols-3">

        {/* Title Card: Introduction */}
        <div className="title-card col-span-full animate-pulse-slow"> {/* Using col-span-full for a wide card */}
          <div className="text-center py-10">
            <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight mb-2 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              有计划地去努力 <span className="block text-2xl md:text-3xl mt-2">Effort With A Plan</span>
            </h1>
            <p className="text-bento-text/70 text-lg md:text-xl mb-3 max-w-2xl mx-auto">
              设定明确目标，实现理想生活
              <br />
              Setting Clear Goals to Achieve an Ideal Life
            </p>
            <div className="flex justify-center mt-6">
               {/* Using Target icon for goals/effort */}
              <IconContainer className="bg-gradient-to-br from-purple-500/30 to-indigo-600/30">
                 <Target className="h-8 w-8 text-purple-400" /> {/* Using Target icon */}
              </IconContainer>
            </div>
          </div>
        </div>

        {/* Card 1: Vague Goals Problem */}
        <BentoCard
          title="模糊目标的困境 | The Problem with Vague Goals"
          variant="1" // Use variant 1 color style
          titleClassName="text-pink-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-pink-500/30 to-red-600/30">
              <AlertTriangle className="h-6 w-6 text-pink-400" /> {/* Icon for warning/problem */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-pink-200">
                难以行动与衡量
                <br />
                Difficult to Act and Measure
              </h4>
              <p className="text-bento-text/80 text-sm">
                目标模糊时，难知如何行动、衡量进展或及时纠偏，易耗时于预测，停滞不前。
                <br />
                When goals are vague, it's hard to know how to act, measure progress, or correct course in time, easily wasting time predicting outcomes and staying stagnant.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 2: IFD Syndrome */}
        <BentoCard
          title="IFD 症候群 | IFD Syndrome"
          variant="2" // Use variant 2 color style
          isLarge={true} // Make this a large card
          titleClassName="text-blue-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-blue-500/30 to-indigo-600/30">
              <Frown className="h-6 w-6 text-blue-400" /> {/* Icon for frustration/demoralization */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-blue-200">
                理想化、挫折、意志消沉
                <br />
                Idealization, Frustration, Demoralization
              </h4>
              <p className="text-bento-text/80 text-sm">
                追求理想目标失败后，会经历挫折，最终意志消沉，彻底放弃。这是“IFD症”的循环。
                <br />
                After failing to achieve ideal goals, one experiences frustration, eventually leading to demoralization and giving up entirely. This is the cycle of "IFD Syndrome."
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 3: Setting Specific Goals (Large Card) */}
        <BentoCard
          title="设定明确目标 | Setting Specific Goals"
          variant="3" // Use variant 3 color style for large card
          isLarge={true} // Make this a large card
          titleClassName="text-purple-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-purple-500/30 to-violet-600/30">
              <CheckCircle className="h-6 w-6 text-purple-400" /> {/* Icon for check/specific */}
            </IconContainer>
            <div className="ml-3 flex-grow"> {/* Use flex-grow to take available space */}
              <h4 className="font-medium mb-1 text-purple-200">
                明确、可证实、肯定、可计量、取决于行动
                <br />
                Specific, Verifiable, Affirmative, Measurable, Action-Dependent
              </h4>
              <p className="text-bento-text/80 text-sm mb-4">
                明确目标是描述一项明确成果的表述。它应具备以下特征，以便有效分配时间精力并衡量进展。
                <br />
                A specific goal is a statement describing a definite outcome. It should have the following characteristics to effectively allocate time/energy and measure progress.
              </p>
               {/* Adding characteristics as nested list */}
               <div className="mt-4 p-4 border border-purple-800/50 rounded-lg bg-purple-900/20">
                 <h5 className="font-medium text-purple-200 mb-2">
                   明确目标特征
                   <br />
                   Specific Goal Characteristics
                 </h5>
                 <ul className="list-disc pl-5 text-bento-text/80 text-sm space-y-1">
                   <li>明确 (Specific)</li>
                   <li>可证实 (Verifiable)</li>
                   <li>肯定 (Affirmative)</li>
                   <li>可计量 (Measurable)</li>
                   <li>完全取决于你的行动 (Completely dependent on your action)</li>
                 </ul>
               </div>
            </div>
          </div>
        </BentoCard>

        {/* Card 4: Weekly Goals */}
        <BentoCard
          title="每周目标 | Weekly Goals"
          variant="4" // Use variant 4 color style
          titleClassName="text-amber-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-amber-500/30 to-orange-600/30">
              <ListChecks className="h-6 w-6 text-amber-400" /> {/* Icon for list/weekly */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-amber-200">
                设定小目标，标示日历
                <br />
                Set Small Goals, Mark Calendar
              </h4>
              <p className="text-bento-text/80 text-sm">
                每周至少给自己设定一个明确目标，规定具体完成时间并在日历上标出，表明认真态度。
                <br />
                Set at least one specific goal for yourself each week, specify a completion time, and mark it on the calendar to show seriousness.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 5: Ranking Goals */}
        <BentoCard
          title="划分目标等级 | Ranking Goals"
          variant="1" // Use variant 1 color style
          titleClassName="text-pink-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-pink-500/30 to-red-600/30">
              <Layers className="h-6 w-6 text-pink-400" /> {/* Icon for layers/ranking */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-pink-200">
                从简单开始，逐步升级
                <br />
                Start Simple, Gradually Escalate
              </h4>
              <p className="text-bento-text/80 text-sm">
                若有多个目标或感担心，按难度划分等级，从最简单开始，每周完成一个，像爬梯子一样逐步实现。
                <br />
                If you have multiple goals or feel anxious, rank them by difficulty, start with the simplest, complete one each week, achieving them step-by-step like climbing a ladder.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 6: Adding Steps */}
        <BentoCard
          title="增加步骤 | Adding Steps"
          variant="2" // Use variant 2 color style
          titleClassName="text-blue-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-blue-500/30 to-indigo-600/30">
              <Workflow className="h-6 w-6 text-blue-400" /> {/* Icon for workflow/steps */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-blue-200">
                细分困难目标
                <br />
                Break Down Difficult Goals
              </h4>
              <p className="text-bento-text/80 text-sm">
                如果目标难度太大或引焦虑，将其细分成次级目标，一步步完成，降低心理负担。
                <br />
                If a goal is too difficult or causes anxiety, break it down into smaller sub-goals, completing them step-by-step to reduce psychological burden.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 7: Rehearsal */}
        <BentoCard
          title="预先演练 | Rehearsal"
          variant="3" // Use variant 3 color style
          titleClassName="text-purple-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-purple-500/30 to-violet-600/30">
              <Brain className="h-6 w-6 text-purple-400" /> {/* Icon for brain/mental practice */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-purple-200">
                心理预演新技巧
                <br />
                Mentally Practice New Techniques
              </h4>
              <p className="text-bento-text/80 text-sm">
                在实际使用新技巧前，在心里演练，形象化积极结果。每天练习几分钟，有助于放松和熟练。
                <br />
                Before using new techniques in reality, mentally rehearse them, visualizing positive outcomes. Practicing a few minutes daily helps relax and become proficient.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 8: Rewarding Yourself */}
        <BentoCard
          title="奖励自己 | Rewarding Yourself"
          variant="4" // Use variant 4 color style
          titleClassName="text-amber-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-amber-500/30 to-orange-600/30">
              <Award className="h-6 w-6 text-amber-400" /> {/* Icon for award/reward */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-amber-200">
                设定奖励，激励行动
                <br />
                Set Rewards, Motivate Action
              </h4>
              <p className="text-bento-text/80 text-sm">
                在追求新目标前，确定成功后的奖励。奖励必须是你真正想要的东西，并在达成目标后立即且大方地给予。
                <br />
                Before pursuing a new goal, determine the reward after success. The reward must be something you truly want, and give it immediately and generously after achieving the goal.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 9: Praising Yourself */}
        <BentoCard
          title="表扬自己 | Praising Yourself"
          variant="1" // Use variant 1 color style
          titleClassName="text-pink-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-pink-500/30 to-red-600/30">
              <Smile className="h-6 w-6 text-pink-400" /> {/* Icon for smile/praise */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-pink-200">
                积极自我肯定
                <br />
                Positive Self-Affirmation
              </h4>
              <p className="text-bento-text/80 text-sm">
                实现目标后，表扬自己。性格开朗者常自我表扬，内向者常给自己泄气。关注成功，而非失败。
                <br />
                After achieving a goal, praise yourself. Outgoing people often praise themselves, while introverts often discourage themselves. Focus on success, not failure.
              </p>
            </div>
          </div>
        </BentoCard>

         {/* Card 10: New Beginning (Large Card) */}
         <BentoCard
           title="新的开端 | New Beginning"
           variant="2" // Use variant 2 color style for large card
           isLarge={true} // Make this a large card
           titleClassName="text-sky-300" // Use a color from the bento palette
         >
           <div className="flex items-start">
             <IconContainer className="bg-gradient-to-br from-sky-500/30 to-blue-600/30">
               <Goal className="h-6 w-6 text-sky-400" /> {/* Icon for goal/start */}
             </IconContainer>
             <div className="ml-3 flex-grow"> {/* Use flex-grow to take available space */}
               <h4 className="font-medium mb-1 text-sky-200">
                 立即开始，克服惯性
                 <br />
                 Start Immediately, Overcome Inertia
               </h4>
               <p className="text-bento-text/80 text-sm mb-4">
                 知道技巧不够，关键在于行动。立即开始，克服惯性。像学习读写开车一样，练习才能进步，最终熟练受益终生。
                 <br />
                 Knowing techniques is not enough; action is key. Start immediately and overcome inertia. Like learning to read, write, or drive, practice leads to progress and eventual proficiency, benefiting you for life.
               </p>
                {/* Adding a concluding thought */}
                <div className="mt-4 bg-gradient-to-r from-sky-500/10 to-blue-500/10 p-4 rounded-lg">
                  <p className="text-bento-text/90 text-center italic text-sm">
                    “万事开头难。”克服惯性是做任何事最困难的部分。
                    <br />
                    "The first step is the hardest." Overcoming inertia is the most difficult part of doing anything.
                  </p>
                </div>
             </div>
           </div>
         </BentoCard>

      </div>

    </div>
  );
};

export default EffortWithAPlanComponent;
