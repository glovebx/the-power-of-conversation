import React from 'react';
import BentoCard from '@/components/BentoCard'; // Assuming BentoCard component path
import {
  EarOff, Repeat1, ShieldCheck, MessageSquareQuestion, FileText, Users, Workflow, ShieldAlert,
  MessageSquareText // Re-using MessageSquareText for the main title card icon style
} from 'lucide-react'; // Assuming lucide-react is installed
import { cn } from '@/lib/utils'; // Assuming cn utility path

// Custom icon container style based on the example
const IconContainer = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={cn("icon-container flex items-center justify-center rounded-lg p-2", className)}>
    {children}
  </div>
);

const RefusingManipulation = () => {
  return (
    // Main container with dark background and padding, similar to the example
    <div className="min-h-screen flex flex-col items-center justify-center bg-bento-bg">

      {/* Main Grid Container */}
      <div className="grid gap-4 p-4 md:p-6 w-full max-w-7xl grid-cols-1 md:grid-cols-3 lg:grid-cols-3">

        {/* Title Card: Introduction */}
        <div className="title-card col-span-full animate-pulse-slow"> {/* Using col-span-full for a wide card */}
          <div className="text-center py-10">
            <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight mb-2 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              拒绝别人的操纵 <span className="block text-2xl md:text-3xl mt-2">Refusing Manipulation</span>
            </h1>
            <p className="text-bento-text/70 text-lg md:text-xl mb-3 max-w-2xl mx-auto">
              应对不情愿要求的技巧
              <br />
              Techniques for Handling Unwanted Requests
            </p>
            <div className="flex justify-center mt-6">
               {/* Re-using the icon container style from the example */}
              <IconContainer className="bg-gradient-to-br from-purple-500/30 to-indigo-600/30">
                 <EarOff className="h-8 w-8 text-purple-400" /> {/* Using HandStop icon */}
              </IconContainer>
            </div>
          </div>
        </div>

        {/* Card 1: The Problem of Manipulation */}
        <BentoCard
          title="操纵的困扰 | The Problem of Manipulation"
          variant="1" // Use variant 1 color style
          titleClassName="text-pink-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-pink-500/30 to-red-600/30">
              <Users className="h-6 w-6 text-pink-400" /> {/* Icon for people/interaction */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-pink-200">
                不情愿的要求与后果
                <br />
                Unwanted Requests and Consequences
              </h4>
              <p className="text-bento-text/80 text-sm">
                亲人、朋友甚至陌生人有时会重复提出你不愿做的要求。屈从会导致愤怒和自我厌恶。
                <br />
                Relatives, friends, or even strangers sometimes repeatedly make requests you don't want to do. Giving in can lead to anger and self-loathing.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 2: The Broken Record Technique (Large Card) */}
        <BentoCard
          title="破唱片技巧 | The Broken Record Technique"
          variant="2" // Use variant 2 color style for large card
          isLarge={true} // Make this a large card
          titleClassName="text-blue-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-blue-500/30 to-indigo-600/30">
              <Repeat1 className="h-6 w-6 text-blue-400" /> {/* Icon for repetition */}
            </IconContainer>
            <div className="ml-3 flex-grow"> {/* Use flex-grow to take available space */}
              <h4 className="font-medium mb-1 text-blue-200">
                重复拒绝，从容应对
                <br />
                Repeating Refusal, Handling Calmly
              </h4>
              <p className="text-bento-text/80 text-sm mb-4">
                热夫·旺德拉博士创制的技巧，让你像破唱片一样一遍遍重复同样的话来拒绝，应对再难缠的要求。
                <br />
                A technique created by Dr. Zev Wanderer that allows you to calmly handle even the most persistent requests by repeating the same refusal like a broken record.
              </p>

              {/* Adding steps/components of the technique as nested list */}
               <div className="mt-4 p-4 border border-blue-800/50 rounded-lg bg-blue-900/20">
                 <h5 className="font-medium text-blue-200 mb-2">
                   使用步骤
                   <br />
                   Steps to Use
                 </h5>
                 <ul className="list-disc pl-5 text-bento-text/80 text-sm space-y-1">
                   <li>询问具体内容 (Ask for specifics)</li>
                   <li>同意对方 (Agree to the other person - facts or opinion right)</li>
                   <li>自我透露并拒绝 (Self-disclose and refuse)</li>
                   <li>重复拒绝 (Repeat the refusal - Broken Record)</li>
                 </ul>
               </div>
            </div>
          </div>
        </BentoCard>

        {/* Card 3: Teaching Children to Resist Temptation */}
        <BentoCard
          title="教孩子抵制诱惑 | Teaching Children to Resist Temptation"
          variant="3" // Use variant 3 color style
          titleClassName="text-purple-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-purple-500/30 to-violet-600/30">
              <ShieldAlert className="h-6 w-6 text-purple-400" /> {/* Icon for child */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-purple-200">
                明确说“不”与重复
                <br />
                Saying "No" Clearly and Repeating
              </h4>
              <p className="text-bento-text/80 text-sm">
                教孩子明确、肯定地说“不”，站直、眼神交流、声音清晰。然后教他们重复“不”或“不要，谢谢”，必要时走开。
                <br />
                Teach children to say "no" clearly and assertively: stand tall, make eye contact, speak clearly and firmly. Then teach them to repeat "no" or "no, thank you," and walk away if necessary.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 4: Combining with Other Techniques */}
        <BentoCard
          title="结合其他技巧 | Combining with Other Techniques"
          variant="4" // Use variant 4 color style
          titleClassName="text-amber-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-amber-500/30 to-orange-600/30">
              <Workflow className="h-6 w-6 text-amber-400" /> {/* Icon for workflow/combination */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-amber-200">
                询问、同意与自我透露
                <br />
                Asking, Agreeing, and Self-Disclosure
              </h4>
              <p className="text-bento-text/80 text-sm">
                使用破唱片技巧前，可先运用应对批评的三招：询问具体内容、同意对方说的事实或意见、通过自我透露表明拒绝并说明理由。
                <br />
                Before using the Broken Record technique, you can first apply the three steps for handling criticism: ask for specifics, agree to the facts or opinion right, and self-disclose to state your refusal and reasons.
              </p>
            </div>
          </div>
        </BentoCard>

         {/* Card 5: The Power of Persistence */}
         <BentoCard
           title="坚持的力量 | The Power of Persistence"
           variant="1" // Use variant 1 color style
           isLarge={true} // Make this a large card
           titleClassName="text-emerald-300" // Use a color from the bento palette
         >
           <div className="flex items-start">
             <IconContainer className="bg-gradient-to-br from-emerald-500/30 to-green-600/30">
               <ShieldCheck className="h-6 w-6 text-emerald-400" /> {/* Icon for shield/protection */}
             </IconContainer>
             <div className="ml-3">
               <h4 className="font-medium mb-1 text-emerald-200">
                 不放弃立场
                 <br />
                 Not Giving Up Your Position
               </h4>
               <p className="text-bento-text/80 text-sm">
                 使用破唱片技巧时，不管对方如何坚持或提出新理由，始终重复你的拒绝。没有人能与破唱片争论，最终对方会放弃。
                 <br />
                 When using the Broken Record technique, no matter how persistent the other person is or what new reasons they offer, keep repeating your refusal. No one can argue with a broken record, and eventually, they will give up.
               </p>
             </div>
           </div>
         </BentoCard>


      </div>

    </div>
  );
};

export default RefusingManipulation;
