import React from 'react';
import BentoCard from '@/components/BentoCard'; // Assuming BentoCard component path
import {
  Users, Search, Lightbulb,
  MessageSquareText, Handshake, Eye
} from 'lucide-react'; // Assuming lucide-react is installed
import { cn } from '@/lib/utils'; // Assuming cn utility path

// Custom icon container style based on the example
const IconContainer = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={cn("icon-container flex items-center justify-center rounded-lg p-2", className)}>
    {children}
  </div>
);

const StartingAConversation = () => {
  return (
    // Main container with dark background and padding, similar to the example
    <div className="min-h-screen flex flex-col items-center justify-center bg-bento-bg">

      {/* Main Grid Container */}
      <div className="grid gap-4 p-4 md:p-6 w-full max-w-7xl grid-cols-1 md:grid-cols-3 lg:grid-cols-3">

        {/* Title Card: Introduction */}
        <div className="title-card col-span-full animate-pulse-slow"> {/* Using col-span-full for a wide card */}
          <div className="text-center py-10">
            <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight mb-2 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              开始交谈 <span className="block text-2xl md:text-3xl mt-2">Starting a Conversation</span>
            </h1>
            <p className="text-bento-text/70 text-lg md:text-xl mb-3 max-w-2xl mx-auto">
              抓住机会，打破沉默
              <br />
              Seize the Opportunity, Break the Silence
            </p>
            <div className="flex justify-center mt-6">
               {/* Re-using the icon container style from the example */}
              <IconContainer className="bg-gradient-to-br from-purple-500/30 to-indigo-600/30">
                 <MessageSquareText className="h-8 w-8 text-purple-400" /> {/* Using MessageSquareText icon */}
              </IconContainer>
            </div>
          </div>
        </div>

        {/* Card 1: Finding Receptive People */}
        <BentoCard
          title="寻找愿意交谈的人 | Finding Receptive People"
          variant="1" // Use variant 1 color style
          titleClassName="text-pink-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-pink-500/30 to-red-600/30">
              <Users className="h-6 w-6 text-pink-400" /> {/* Icon for people */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-pink-200">
                识别开放信号
                <br />
                Identifying Open Signals
              </h4>
              <p className="text-bento-text/80 text-sm">
                寻找那些可能愿意交谈的人，尤其是独自一人且没有忙碌的人。微笑、眼神交流、开放姿态都是感兴趣的信号。
                <br />
                Look for those likely open to conversation, especially those alone and not busy. Smiling, eye contact, and open postures are signals of interest.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 2: The Importance of Starting */}
        <BentoCard
          title="开始的重要性 | The Importance of Starting"
          variant="2" // Use variant 2 color style
          titleClassName="text-blue-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-blue-500/30 to-indigo-600/30">
              <Handshake className="h-6 w-6 text-blue-400" /> {/* Icon for starting/connection */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-blue-200">
                抓住交流机会
                <br />
                Seizing Communication Opportunities
              </h4>
              <p className="text-bento-text/80 text-sm">
                研究表明，开始说什么并不像抓住机会开口交流本身重要。简单的内容即可，关键在于建立连接。
                <br />
                Research shows that what you say to start is less important than seizing the opportunity to communicate. Simple content is fine; the key is making the connection.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 3: Simple Conversation Topics */}
        <BentoCard
          title="简单的话题 | Simple Conversation Topics"
          variant="3" // Use variant 3 color style
          titleClassName="text-purple-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-purple-500/30 to-violet-600/30">
              <MessageSquareText className="h-6 w-6 text-purple-400" /> {/* Icon for topics */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-purple-200">
                环境、对方或自己
                <br />
                Environment, Other Person, or Yourself
              </h4>
              <p className="text-bento-text/80 text-sm">
                开始交谈基本上只有三种简单话题选择：谈论所处环境、谈论对方、或谈论自己。
                <br />
                There are essentially three simple topic choices to start a conversation: talk about the environment, the other person, or yourself.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 4: Ways to Start */}
        <BentoCard
          title="开始的方式 | Ways to Start"
          variant="4" // Use variant 4 color style
          titleClassName="text-amber-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-amber-500/30 to-orange-600/30">
              <Lightbulb className="h-6 w-6 text-amber-400" /> {/* Icon for ideas/methods */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-amber-200">
                提问、看法或事实
                <br />
                Ask a Question, Offer an Opinion, State a Fact
              </h4>
              <p className="text-bento-text/80 text-sm">
                开始交谈也有三种方式：提问题（最好）、发表看法（也不错）、或陈述事实（最难让对方参与）。
                <br />
                There are also three ways to start: ask a question (best), offer an opinion (also good), or state a fact (hardest to engage the other person).
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 5: Talking About the Environment */}
        <BentoCard
          title="谈论环境 | Talking About the Environment"
          variant="1" // Use variant 1 color style
          titleClassName="text-emerald-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-emerald-500/30 to-green-600/30">
              <Search className="h-6 w-6 text-emerald-400" /> {/* Icon for observing environment */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-emerald-200">
                最容易的切入点
                <br />
                The Easiest Entry Point
              </h4>
              <p className="text-bento-text/80 text-sm">
                通常最好从谈论双方共同所处的环境开始。这不像谈论对方那样敏感，也比谈论自己更容易让对方参与。
                <br />
                It's usually best to start by talking about the shared environment. This is less sensitive than talking about the other person and easier to engage them than talking about yourself.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 6: Talking About the Other Person */}
        <BentoCard
          title="谈论对方 | Talking About the Other Person"
          variant="2" // Use variant 2 color style
          titleClassName="text-sky-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-sky-500/30 to-blue-600/30">
              <Users className="h-6 w-6 text-sky-400" /> {/* Icon for other person */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-sky-200">
                大多数人喜欢的话题
                <br />
                A Topic Most People Like
              </h4>
              <p className="text-bento-text/80 text-sm">
                大多数人喜欢谈论自己。在开口前观察对方，就其穿着、行为、正在做的事等提问或发表看法。
                <br />
                Most people like talking about themselves. Before speaking, observe the other person and ask questions or comment on their attire, behavior, what they're doing, etc.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 7: Talking About Yourself */}
        <BentoCard
          title="谈论自己 | Talking About Yourself"
          variant="3" // Use variant 3 color style
          titleClassName="text-purple-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-purple-500/30 to-violet-600/30">
              <MessageSquareText className="h-6 w-6 text-purple-400" /> {/* Icon for talking about self */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-purple-200">
                最难引起兴趣的方式
                <br />
                The Hardest Way to Arouse Interest
              </h4>
              <p className="text-bento-text/80 text-sm">
                尽管孤独者常见，但谈论自己往往难引起对方兴趣。人们通常更喜欢谈论他们自己。
                <br />
                Although common among lonely people, talking about yourself often struggles to interest others. People generally prefer talking about themselves.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 8: Recognizing Interest Signals (Large Card) */}
        <BentoCard
          title="识别对方兴趣信号 | Recognizing the Other Person's Interest Signals"
          variant="4" // Use variant 4 color style for large card
          isLarge={true} // Make this a large card
          titleClassName="text-amber-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-amber-500/30 to-orange-600/30">
              <Eye className="h-6 w-6 text-amber-400" /> {/* Icon for eye/observation */}
            </IconContainer>
            <div className="ml-3 flex-grow"> {/* Use flex-grow to take available space */}
              <h4 className="font-medium mb-1 text-amber-200">
                非语言的邀请
                <br />
                Non-verbal Invitations
              </h4>
              <p className="text-bento-text/80 text-sm mb-4">
                如果对方对你感兴趣，会表现出非语言信号：微笑、多次看向你、张开双臂或交叉双腿。异性可能通过整理衣物、触摸物品、眼神停留等吸引注意。
                <br />
                If the other person is interested in you, they will show non-verbal signals: smiling, looking at you multiple times, open arms or crossed legs. The opposite sex might attract attention by adjusting clothes, touching objects, lingering eye contact, etc.
              </p>
               {/* Adding some key points as nested list */}
               <div className="mt-4 p-4 border border-amber-800/50 rounded-lg bg-amber-900/20">
                 <h5 className="font-medium text-amber-200 mb-2">
                   常见信号
                   <br />
                   Common Signals
                 </h5>
                 <ul className="list-disc pl-5 text-bento-text/80 text-sm space-y-1">
                   <li>微笑 (Smiling)</li>
                   <li>多次看向你 (Looking at you multiple times)</li>
                   <li>开放姿态 (Open posture)</li>
                   <li>整理衣物/触摸物品 (Adjusting clothes/touching objects - often opposite sex)</li>
                   <li>眼神停留 (Lingering eye contact - often opposite sex)</li>
                 </ul>
               </div>
            </div>
          </div>
        </BentoCard>

      </div>

    </div>
  );
};

export default StartingAConversation;
