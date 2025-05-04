import React from 'react';
import BentoCard from '@/components/BentoCard'; // Assuming BentoCard component path
import {
  AlertTriangle, Users, MessageSquareWarning, FileText, Frown, EqualApproximately, Timer,
  MessageSquareMore, Repeat, CheckCircle2,
  MessageSquareText // Re-using MessageSquareText for the main title card icon style
} from 'lucide-react'; // Assuming lucide-react is installed
import { cn } from '@/lib/utils'; // Assuming cn utility path

// Custom icon container style based on the example
const IconContainer = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={cn("icon-container flex items-center justify-center rounded-lg p-2", className)}>
    {children}
  </div>
);

const RequestingChange = () => {
  return (
    // Main container with dark background and padding, similar to the example
    <div className="min-h-screen flex flex-col items-center justify-center bg-bento-bg">

      {/* Main Grid Container */}
      <div className="grid gap-4 p-4 md:p-6 w-full max-w-7xl grid-cols-1 md:grid-cols-3 lg:grid-cols-3">

        {/* Title Card: Introduction */}
        <div className="title-card col-span-full animate-pulse-slow"> {/* Using col-span-full for a wide card */}
          <div className="text-center py-10">
            <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight mb-2 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              要求改变 <span className="block text-2xl md:text-3xl mt-2">Requesting Change</span>
            </h1>
            <p className="text-bento-text/70 text-lg md:text-xl mb-3 max-w-2xl mx-auto">
              当你的需要未被满足时，如何有效沟通
              <br />
              How to Communicate Effectively When Your Needs Are Not Met
            </p>
            <div className="flex justify-center mt-6">
               {/* Re-using the icon container style from the example */}
              <IconContainer className="bg-gradient-to-br from-purple-500/30 to-indigo-600/30">
                 <MessageSquareText className="h-8 w-8 text-purple-400" /> {/* Using MessageSquareText icon */}
              </IconContainer>
            </div>
          </div>
        </div>

        {/* Card 1: Determining Who Has the Problem */}
        <BentoCard
          title="确定谁有烦恼 | Determining Who Has the Problem"
          variant="1" // Use variant 1 color style
          titleClassName="text-pink-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-pink-500/30 to-red-600/30">
              <AlertTriangle className="h-6 w-6 text-pink-400" /> {/* Icon for problem/warning */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-pink-200">
                需求未满足者有烦恼
                <br />
                The Person Whose Needs Are Not Met Has the Problem
              </h4>
              <p className="text-bento-text/80 text-sm">
                当你的需要未被满足或权利受侵犯时，你有烦恼。清楚说明“我有烦恼”能减少对方抵触，利于解决问题。
                <br />
                When your needs are not met or rights are violated, you have the problem. Clearly stating "I have a problem" reduces resistance and helps resolve the issue.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 2: Stating the Problematic Behavior */}
        <BentoCard
          title="说明有问题的行为 | Stating the Problematic Behavior"
          variant="2" // Use variant 2 color style
          titleClassName="text-blue-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-blue-500/30 to-indigo-600/30">
              <MessageSquareWarning className="h-6 w-6 text-blue-400" /> {/* Icon for warning message */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-blue-200">
                客观、具体地描述
                <br />
                Describe Objectively and Specifically
              </h4>
              <p className="text-bento-text/80 text-sm">
                简要、客观、具体地说明让你烦恼的行为。避免含糊、笼统的描述（如“总是”、“从不”），只提近期事例。
                <br />
                Briefly, objectively, and specifically describe the behavior causing you trouble. Avoid vague or general descriptions (like "always", "never"), only mention recent instances.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 3: Avoiding Assumptions About Intent */}
        <BentoCard
          title="避免揣测对方意图 | Avoiding Assumptions About Intent"
          variant="3" // Use variant 3 color style
          titleClassName="text-purple-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-purple-500/30 to-violet-600/30">
              <Users className="h-6 w-6 text-purple-400" /> {/* Icon for people/mind reading */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-purple-200">
                推论削弱说服力
                <br />
                Inferences Weaken Persuasiveness
              </h4>
              <p className="text-bento-text/80 text-sm">
                不要推断对方行为背后的意图，这超越了观察且常是错误的。加入个人推论会削弱你要求改变的说服力。
                <br />
                Do not infer the intent behind the other person's behavior; this goes beyond observation and is often wrong. Adding personal inferences weakens the persuasiveness of your request for change.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 4: Stating the Consequences */}
        <BentoCard
          title="陈述后果 | Stating the Consequences"
          variant="4" // Use variant 4 color style
          titleClassName="text-amber-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-amber-500/30 to-orange-600/30">
              <FileText className="h-6 w-6 text-amber-400" /> {/* Icon for consequences/report */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-amber-200">
                说明行为导致的结果
                <br />
                Explain the Results of the Behavior
              </h4>
              <p className="text-bento-text/80 text-sm">
                指出对方的行为已经导致或可能导致的后果。可能的话，用积极的方式说明后果。
                <br />
                Point out the consequences that the other person's behavior has already caused or might cause. If possible, state the consequences positively.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 5: Stating Your Feelings */}
        <BentoCard
          title="说明你的感受 | Stating Your Feelings"
          variant="1" // Use variant 1 color style
          titleClassName="text-emerald-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-emerald-500/30 to-green-600/30">
              <Frown className="h-6 w-6 text-emerald-400" /> {/* Icon for feelings */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-emerald-200">
                简要、真诚地表达
                <br />
                Express Briefly and Sincerely
              </h4>
              <p className="text-bento-text/80 text-sm">
                告诉对方你对其行为及后果的感受。简要表达，避免粗俗语言、评价性格或将想法误作感受。
                <br />
                Tell the other person how you feel about their behavior and its consequences. Express briefly, avoid vulgar language, character judgments, or mistaking thoughts for feelings.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 6: The Formula */}
        <BentoCard
          title="公式小结 | The Formula Summary"
          variant="2" // Use variant 2 color style
          titleClassName="text-sky-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-sky-500/30 to-blue-600/30">
              <EqualApproximately className="h-6 w-6 text-sky-400" /> {/* Icon for formula */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-sky-200">
                我有烦恼公式
                <br />
                The "I Have a Problem" Formula
              </h4>
              <p className="text-bento-text/80 text-sm">
                记住公式：“我很不满意。你[说明其行为]，[指出后果]，所以我觉得[描述你的感受]。”
                <br />
                Remember the formula: "I am unhappy. When you [describe behavior], [state consequences], I feel [describe your feelings]."
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 7: Pause */}
        <BentoCard
          title="暂停 | Pause"
          variant="3" // Use variant 3 color style
          titleClassName="text-purple-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-purple-500/30 to-violet-600/30">
              <Timer className="h-6 w-6 text-purple-400" /> {/* Icon for timer/pause */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-purple-200">
                给对方思考和回应时间
                <br />
                Give the Other Person Time to Think and Respond
              </h4>
              <p className="text-bento-text/80 text-sm">
                在陈述完公式后，保持沉默，暂停一下。给对方时间回想，并提出双方都能接受的解决办法。
                <br />
                After stating the formula, remain silent and pause. Give the other person time to reflect and propose a mutually acceptable solution.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 8: Direct Request */}
        <BentoCard
          title="直接要求 | Direct Request"
          variant="4" // Use variant 4 color style
          titleClassName="text-amber-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-amber-500/30 to-orange-600/30">
              <MessageSquareMore className="h-6 w-6 text-amber-400" /> {/* Icon for check message */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-amber-200">
                具体、非问题形式
                <br />
                Specific, Not a Question
              </h4>
              <p className="text-bento-text/80 text-sm">
                如果暂停后对方未提出方案，你需要更具体地表明需求。直接要求应具体、要求改变某个做法，而非态度，不用问题形式。
                <br />
                If the other person doesn't propose a solution after the pause, you need to state your need more specifically. A direct request should be specific, ask for a change in behavior, not attitude, and not be in the form of a question.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 9: Repeating Request */}
        <BentoCard
          title="重复要求 | Repeating Request"
          variant="1" // Use variant 1 color style
          titleClassName="text-emerald-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-emerald-500/30 to-green-600/30">
              <Repeat className="h-6 w-6 text-emerald-400" /> {/* Icon for repeat */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-emerald-200">
                坚持主要观点
                <br />
                Persist with the Main Point
              </h4>
              <p className="text-bento-text/80 text-sm">
                即使提出直接要求后对方仍未明白或改变话题，需要重复。关键是坚持主要观点，措辞可变。
                <br />
                Even after making a direct request, if the other person still doesn't understand or changes the topic, you need to repeat. The key is to stick to the main point, though wording can vary.
              </p>
            </div>
          </div>
        </BentoCard>

         {/* Card 10: Finding a Solution */}
         <BentoCard
           title="找到解决办法 | Finding a Solution"
           variant="2" // Use variant 2 color style
           titleClassName="text-sky-300" // Use a color from the bento palette
         >
           <div className="flex items-start">
             <IconContainer className="bg-gradient-to-br from-sky-500/30 to-blue-600/30">
               <CheckCircle2 className="h-6 w-6 text-sky-400" /> {/* Icon for solution */}
             </IconContainer>
             <div className="ml-3">
               <h4 className="font-medium mb-1 text-sky-200">
                 达成一致与检查
                 <br />
                 Reaching Agreement and Checking
               </h4>
               <p className="text-bento-text/80 text-sm">
                 商谈解决办法时，牢记最初目的。达成一致后，通过积极倾听确认，并设定具体时间检查方案执行情况。
                 <br />
                 When negotiating a solution, remember your initial goal. After reaching agreement, confirm through active listening and set a specific time to check the solution's implementation.
               </p>
             </div>
           </div>
         </BentoCard>


      </div>

    </div>
  );
};

export default RequestingChange;
