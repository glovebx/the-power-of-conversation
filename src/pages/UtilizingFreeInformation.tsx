import React from 'react';
import BentoCard from '@/components/BentoCard'; // Assuming BentoCard component path
import {
  MessageSquare, Lightbulb, Search, Info, Eye, Smile,
  MessageSquareText // Re-using MessageSquareText for the main title card icon style
} from 'lucide-react'; // Assuming lucide-react is installed
import { cn } from '@/lib/utils'; // Assuming cn utility path

// Custom icon container style based on the example
const IconContainer = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={cn("icon-container flex items-center justify-center rounded-lg p-2", className)}>
    {children}
  </div>
);

const UtilizingFreeInformation = () => {
  return (
    // Main container with dark background and padding, similar to the example
    <div className="min-h-screen flex flex-col items-center justify-center bg-bento-bg">

      {/* Main Grid Container */}
      <div className="grid gap-4 p-4 md:p-6 w-full max-w-7xl grid-cols-1 md:grid-cols-3 lg:grid-cols-3">

        {/* Title Card: Introduction */}
        <div className="title-card col-span-full animate-pulse-slow"> {/* Using col-span-full for a wide card */}
          <div className="text-center py-10">
            <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight mb-2 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              利用自由信息 <span className="block text-2xl md:text-3xl mt-2">Utilizing Free Information</span>
            </h1>
            <p className="text-bento-text/70 text-lg md:text-xl mb-3 max-w-2xl mx-auto">
              让交谈持续且富有生趣
              <br />
              Keeping Conversations Going and Engaging
            </p>
            <div className="flex justify-center mt-6">
               {/* Re-using the icon container style from the example */}
              <IconContainer className="bg-gradient-to-br from-purple-500/30 to-indigo-600/30">
                 <MessageSquareText className="h-8 w-8 text-purple-400" /> {/* Using MessageSquareText icon */}
              </IconContainer>
            </div>
          </div>
        </div>

        {/* Card 1: What is Free Information? */}
        <BentoCard
          title="什么是自由信息 | What is Free Information?"
          variant="1" // Use variant 1 color style
          titleClassName="text-pink-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-pink-500/30 to-red-600/30">
              <Lightbulb className="h-6 w-6 text-pink-400" /> {/* Icon for idea/information */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-pink-200">
                意外但有用的信息
                <br />
                Unexpected but Useful Information
              </h4>
              <p className="text-bento-text/80 text-sm">
                自由信息是对方在交流中无意中给出、你没有主动要求或预料到的信息。
                <br />
                Free information is information the other person gives unintentionally during conversation, which you didn't ask for or expect.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 2: The Problem of Running Out of Things to Say */}
        <BentoCard
          title="无话可说的困境 | The Dilemma of Running Out of Things to Say"
          variant="2" // Use variant 2 color style
          titleClassName="text-blue-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-blue-500/30 to-indigo-600/30">
              <MessageSquare className="h-6 w-6 text-blue-400" /> {/* Icon for message */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-blue-200">
              交谈中断的常见原因
                <br />
                Common Reason for Conversation Stalling
              </h4>
              <p className="text-bento-text/80 text-sm">
                许多人经历过交谈陷入僵局、无话可说的尴尬时刻。这通常是因为没有注意到并利用对方提供的自由信息。
                <br />
                Many people experience awkward moments where conversations stall and they run out of things to say. This is often due to not noticing and utilizing the free information provided by the other person.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 3: How to Utilize Free Information */}
        <BentoCard
          title="如何利用自由信息 | How to Utilize Free Information"
          variant="3" // Use variant 3 color style
          titleClassName="text-purple-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-purple-500/30 to-violet-600/30">
              <Search className="h-6 w-6 text-purple-400" /> {/* Icon for searching/finding */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-purple-200">
                评论或提问
                <br />
                Comment or Ask a Question
              </h4>
              <p className="text-bento-text/80 text-sm">
                注意对方给出的细小自由信息，并立即就此作一番评论或提一个相关问题（开放式问题最佳）。
                <br />
                Pay attention to the small pieces of free information given, and immediately make a comment or ask a related question about it (open-ended questions are best).
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 4: Types of Free Information */}
        <BentoCard
          title="自由信息的类型 | Types of Free Information"
          variant="4" // Use variant 4 color style
          titleClassName="text-amber-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-amber-500/30 to-orange-600/30">
              <Info className="h-6 w-6 text-amber-400" /> {/* Icon for info */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-amber-200">
                言语、外表与行为
                <br />
                Verbal, Appearance, and Behavior
              </h4>
              <p className="text-bento-text/80 text-sm">
                自由信息包括对方言语中无意透露的内容、他们的衣着、行为、身体特征以及所处位置等。
                <br />
                Free information includes things unintentionally revealed in their speech, their attire, behavior, physical characteristics, and location, etc.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 5: Utilizing General Impressions */}
        <BentoCard
          title="利用总体印象 | Utilizing General Impressions"
          variant="1" // Use variant 1 color style
          
          titleClassName="text-emerald-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-emerald-500/30 to-green-600/30">
              <Eye className="h-6 w-6 text-emerald-400" /> {/* Icon for eye/observation */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-emerald-200">
                基于观察的提问
                <br />
                Questions Based on Observation
              </h4>
              <p className="text-bento-text/80 text-sm">
                有时候自由信息是基于你对对方的总体印象。你可以就这些印象提问，例如关于他们的专业知识、情绪状态或兴趣爱好。
                <br />
                Sometimes free information is based on your general impression of the other person. You can ask questions based on these impressions, such as about their expertise, emotional state, or hobbies.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 6: Keeping Conversation Engaging (Large Card) */}
        <BentoCard
          title="保持交谈生趣 | Keeping Conversation Engaging"
          variant="2" // Use variant 2 color style for large card
          isLarge={true} // Make this a large card
          titleClassName="text-sky-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-sky-500/30 to-blue-600/30">
              <Smile className="h-6 w-6 text-sky-400" /> {/* Icon for engagement/smile */}
            </IconContainer>
            <div className="ml-3 flex-grow"> {/* Use flex-grow to take available space */}
              <h4 className="font-medium mb-1 text-sky-200">
                轻松转移话题，深入交流
                <br />
                Effortlessly Shifting Topics, Deepening Interaction
              </h4>
              <p className="text-bento-text/80 text-sm mb-4">
                利用自由信息不仅能打开新话题，而且是社交惯例，无需担心回不到原话题。这让交谈自然流畅，避免尴尬。
                <br />
                Utilizing free information not only opens new topics but is also a social convention, allowing effortless topic shifts without worrying about returning to the original subject. This keeps conversations flowing naturally and avoids awkwardness.
              </p>

               {/* Adding a concluding thought similar to the example */}
               <div className="mt-4 bg-gradient-to-r from-sky-500/10 to-blue-500/10 p-4 rounded-lg">
                 <p className="text-bento-text/90 text-center italic text-sm">
                   只要用心去注意，你会发现交谈的对方经常都在给出很多细小的自由信息；如果你觉得这些自由信息比较有用，能够进一步打开话题，那就立即加以采用。
                   <br />
                   As long as you pay attention, you will find that the other person in the conversation often gives a lot of small pieces of free information; if you find this free information useful and can open up the topic further, use it immediately.
                 </p>
               </div>
            </div>
          </div>
        </BentoCard>

      </div>

    </div>
  );
};

export default UtilizingFreeInformation;
