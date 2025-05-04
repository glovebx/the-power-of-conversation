import React from 'react';
import BentoCard from '@/components/BentoCard'; // Assuming BentoCard component path
import {
  BookOpen, Users, Settings, GraduationCap, Globe, Dumbbell, ListChecks,
  MessageSquareText // Re-using MessageSquareText for a general communication icon style
} from 'lucide-react'; // Assuming lucide-react is installed
import { cn } from '@/lib/utils'; // Assuming cn utility path

// Custom icon container component based on the example
const IconContainer = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={cn("icon-container flex items-center justify-center rounded-lg p-2", className)}>
    {children}
  </div>
);

const Index = () => {
  return (
    // Main container with dark background and padding, similar to the example
    <div className="min-h-screen flex flex-col items-center justify-center bg-bento-bg">
      {/* Main Grid Container */}
      <div className="grid gap-4 p-4 md:p-6 w-full max-w-7xl grid-cols-1 md:grid-cols-3 lg:grid-cols-3">

        {/* Title Card: Book Title & Author Preface */}
        <div className="title-card col-span-full animate-pulse-slow"> {/* Using col-span-full for a wide card */}
          <div className="text-center py-10">
            <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight mb-2 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              交谈的力量 <span className="block text-2xl md:text-3xl mt-2">The Power of Conversation</span>
            </h1>
            <div className="flex justify-center mt-6">
               {/* Using BookOpen icon inside the gradient container for the main card */}
              <IconContainer className="bg-gradient-to-br from-purple-500/30 to-indigo-600/30">
                 <BookOpen className="h-8 w-8 text-purple-400" /> {/* Using BookOpen icon */}
              </IconContainer>
            </div>
          </div>
        </div>

        {/* Card 1: Skill vs. Talent */}
        <BentoCard
          title="技巧而非天赋 | Skill Not Talent"
          variant="1" // Use variant 1 color style
          titleClassName="text-pink-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-pink-500/30 to-red-600/30">
              <Users className="h-6 w-6 text-pink-400" /> {/* Icon for people/skill */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-pink-200">
                交谈能力可习得
                <br />
                Talking Ability is Learnable
              </h4>
              <p className="text-bento-text/80 text-sm">
                善于交谈并非天生，而是懂得简单技巧。这些技巧任何人都可以学会。
                <br />
                Being good at talking is not innate; it's about knowing simple techniques that anyone can learn.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 2: Skills as Tools */}
        <BentoCard
          title="技巧如同工具 | Skills as Tools"
          variant="2" // Use variant 2 color style
          titleClassName="text-blue-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-blue-500/30 to-indigo-600/30">
              <Settings className="h-6 w-6 text-blue-400" /> {/* Icon for tools/mechanisms */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-blue-200">
                使用合适的工具
                <br />
                Using the Right Tools
              </h4>
              <p className="text-bento-text/80 text-sm">
                如果使用的技巧不适合，社交会很吃力。有了合适的技巧，社交会变得容易且有效。
                <br />
                If the techniques used are unsuitable, social interaction will be difficult. With the right techniques, social interaction becomes easy and effective.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 3: Research & Learnability */}
        <BentoCard
          title="研究与可学性 | Research and Learnability"
          variant="3" // Use variant 3 color style
          titleClassName="text-purple-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-purple-500/30 to-violet-600/30">
              <GraduationCap className="h-6 w-6 text-purple-400" /> {/* Icon for research/learning */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-purple-200">
                有效技巧已证实
                <br />
                Effective Techniques Proven
              </h4>
              <p className="text-bento-text/80 text-sm">
                研究证实了一些有效的社交技巧，且掌握它们只需较短时间。
                <br />
                Research has confirmed effective social techniques that can be mastered in a relatively short time.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 6: Reading is Not Enough (Practice) */}
        <BentoCard
          title="阅读不足，重在练习 | Reading is Not Enough, Practice is Key"
          variant="2" // Use variant 2 color style
          titleClassName="text-sky-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-sky-500/30 to-blue-600/30">
              <Dumbbell className="h-6 w-6 text-sky-400" /> {/* Icon for practice */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-sky-200">
                实践出真知
                <br />
                Practice Makes Perfect
              </h4>
              <p className="text-bento-text/80 text-sm">
                单纯阅读无法提升社交能力。需要结合阅读与坚持不懈的练习。
                <br />
                Simply reading cannot improve social skills. It requires combining reading with persistent and focused practice. 
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 7: The Plan (Large Card) */}
        <BentoCard
          title="实践计划 | Practice Plan"
          variant="3" // Use variant 3 color style for large card
          isLarge={true} // Make this a large card
          titleClassName="text-indigo-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-indigo-500/30 to-violet-600/30">
              <ListChecks className="h-6 w-6 text-indigo-400" /> {/* Icon for plan/checklist */}
            </IconContainer>
            <div className="ml-3 flex-grow"> {/* Use flex-grow to take available space */}
              <h4 className="font-medium mb-1 text-indigo-200">
                按计划行动，持续改进
                <br />
                Act According to the Plan, Continuously Improve
              </h4>
              <p className="text-bento-text/80 text-sm mb-4">
                按计划进行，将学到的技巧运用到日常生活中，持续练习，提升社交能力。
                <br />
                Follow the plan, apply the learned techniques to daily life, and practice consistently to improve social skills.
              </p>
               {/* Adding a key takeaway */}
               <div className="mt-4 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 p-4 rounded-lg">
                 <p className="text-bento-text/90 text-center italic text-sm">
                   要提高你的社交能力，既需要阅读更需要坚持不懈、专注地练习。
                   <br />
                   To improve your social skills, you need both reading and persistent, focused practice.
                 </p>
               </div>
            </div>
          </div>
        </BentoCard>

      </div>

    </div>
  );
};

export default Index;
