import React from 'react';
import BentoCard from '@/components/BentoCard'; // Assuming BentoCard component path
import {
  MessageSquarePlus, Unlock, Users, CalendarCheck, Coffee, Smile, MessageSquareX, Repeat,
  MessageSquareText // Re-using MessageSquareText for the main title card icon style
} from 'lucide-react'; // Assuming lucide-react is installed
import { cn } from '@/lib/utils'; // Assuming cn utility path

// Custom icon container style based on the example
const IconContainer = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={cn("icon-container flex items-center justify-center rounded-lg p-2", className)}>
    {children}
  </div>
);

const IssuingInvitations = () => {
  return (
    // Main container with dark background and padding, similar to the example
    <div className="min-h-screen flex flex-col items-center justify-center bg-bento-bg">

      {/* Main Grid Container */}
      <div className="grid gap-4 p-4 md:p-6 w-full max-w-7xl grid-cols-1 md:grid-cols-3 lg:grid-cols-3">

        {/* Title Card: Introduction */}
        <div className="title-card col-span-full animate-pulse-slow"> {/* Using col-span-full for a wide card */}
          <div className="text-center py-10">
            <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight mb-2 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              发出可能被接受的邀请 <span className="block text-2xl md:text-3xl mt-2">Issuing Invitations</span>
            </h1>
            <p className="text-bento-text/70 text-lg md:text-xl mb-3 max-w-2xl mx-auto">
              积极地将别人拉入你的生活
              <br />
              Actively Bringing Others Into Your Life
            </p>
            <div className="flex justify-center mt-6">
               {/* Re-using the icon container style from the example */}
              <IconContainer className="bg-gradient-to-br from-purple-500/30 to-indigo-600/30">
                 <MessageSquarePlus className="h-8 w-8 text-purple-400" /> {/* Using MessageSquarePlus icon for invitation */}
              </IconContainer>
            </div>
          </div>
        </div>

        {/* Card 1: Passive Waiting vs. Active Invitation */}
        <BentoCard
          title="被动等待 vs. 主动邀请 | Passive Waiting vs. Active Invitation"
          variant="1" // Use variant 1 color style
          titleClassName="text-pink-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-pink-500/30 to-red-600/30">
              <Unlock className="h-6 w-6 text-pink-400" /> {/* Icon for unlocking potential */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-pink-200">
                打破僵局，采取行动
                <br />
                Breaking Stalemates, Taking Action
              </h4>
              <p className="text-bento-text/80 text-sm">
                多数人被动等待，导致双方失落。社会交往成功者积极主动，通过交谈和邀请将别人拉入生活。
                <br />
                Most people wait passively, leading to mutual disappointment. Socially successful individuals are proactive, bringing others into their lives through conversation and invitations.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 2: Dual Perspective */}
        <BentoCard
          title="双重视角 | Dual Perspective"
          variant="2" // Use variant 2 color style
          titleClassName="text-blue-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-blue-500/30 to-indigo-600/30">
              <Users className="h-6 w-6 text-blue-400" /> {/* Icon for considering others */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-blue-200">
                兼顾你我喜好
                <br />
                Considering Both Your and Their Preferences
              </h4>
              <p className="text-bento-text/80 text-sm">
                邀请被接受的关键在于同时考虑自己和对方的兴趣。询问对方喜欢什么活动，然后选择双方都喜欢的。
                <br />
                Key to accepted invitations is considering both your and their interests. Ask what activities they like, then choose one you both enjoy.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 3: Be Direct */}
        <BentoCard
          title="态度直接 | Be Direct"
          variant="3" // Use variant 3 color style
          titleClassName="text-purple-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-purple-500/30 to-violet-600/30">
              <CalendarCheck className="h-6 w-6 text-purple-400" /> {/* Icon for scheduling/checking */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-purple-200">
                明确活动、时间、地点
                <br />
                Specify Activity, Time, Location
              </h4>
              <p className="text-bento-text/80 text-sm">
                在第一次会面结束前明确发出邀请，包括活动、日期、时间、地点。避免模糊的问题，直接询问对方是否感兴趣。
                <br />
                Issue the invitation clearly before the first meeting ends, including activity, date, time, and location. Avoid vague questions and directly ask if they are interested.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 4: Start Small */}
        <BentoCard
          title="小处着手 | Start Small"
          variant="4" // Use variant 4 color style
          titleClassName="text-amber-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-amber-500/30 to-orange-600/30">
              <Coffee className="h-6 w-6 text-amber-400" /> {/* Icon for coffee/small meeting */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-amber-200">
                降低门槛，提高接受率
                <br />
                Lowering the Barrier, Increasing Acceptance
              </h4>
              <p className="text-bento-text/80 text-sm">
                要求的越少，得到的可能性越大。对刚认识的人，邀请喝咖啡比吃大餐更容易被接受。从小活动开始建立联系。
                <br />
                The less you ask for, the more likely you are to get it. For someone you just met, inviting for coffee is more likely to be accepted than a large meal. Start with small activities to build connection.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 5: Be Casual */}
        <BentoCard
          title="随意一些 | Be Casual"
          variant="1" // Use variant 1 color style
          titleClassName="text-emerald-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-emerald-500/30 to-green-600/30">
              <Smile className="h-6 w-6 text-emerald-400" /> {/* Icon for casual/relaxed */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-emerald-200">
                轻松的语气更受欢迎
                <br />
                A Relaxed Tone is More Welcomed
              </h4>
              <p className="text-bento-text/80 text-sm">
                你的邀请语气会影响对方回应。听上去轻松愉快的邀请比严肃重大的更容易被接受。
                <br />
                The tone of your invitation affects the response. An invitation that sounds relaxed and enjoyable is more likely to be accepted than one that sounds serious or significant.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 6: If Rejected */}
        <BentoCard
          title="如果遭到拒绝 | If Rejected"
          variant="2" // Use variant 2 color style
          titleClassName="text-sky-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-sky-500/30 to-blue-600/30">
              <MessageSquareX className="h-6 w-6 text-sky-400" /> {/* Icon for message rejected */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-sky-200">
                理解原因，礼貌应对
                <br />
                Understand the Reason, Respond Politely
              </h4>
              <p className="text-bento-text/80 text-sm">
                拒绝不一定排斥你，可能是活动不合意或已有约。若无解释，可提议换时间/活动。若仍拒绝无解释，则对方可能不感兴趣，礼貌离开即可。
                <br />
                Rejection doesn't necessarily mean rejection of you; it might be the activity or a prior engagement. If no explanation is given, suggest another time/activity. If still rejected without explanation, they might not be interested; a polite departure is sufficient.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 7: Persistence (Large Card) */}
        <BentoCard
          title="坚持不懈 | Persistence"
          variant="3" // Use variant 3 color style for large card
          isLarge={true} // Make this a large card
          titleClassName="text-indigo-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-indigo-500/30 to-violet-600/30">
              <Repeat className="h-6 w-6 text-indigo-400" /> {/* Icon for repeat/persistence */}
            </IconContainer>
            <div className="ml-3 flex-grow"> {/* Use flex-grow to take available space */}
              <h4 className="font-medium mb-1 text-indigo-200">
                多次尝试，可能成功
                <br />
                Multiple Attempts, Possible Success
              </h4>
              <p className="text-bento-text/80 text-sm mb-4">
                如果认为对方值得进一步了解，即使初次被拒，也可以选择坚持。多次尝试后，对方可能最终接受邀请，建立友谊。
                <br />
                If you believe the other person is worth getting to know better, you can choose to persist even after initial rejection. After multiple attempts, they might eventually accept the invitation and build a friendship.
              </p>

               {/* Adding a concluding thought similar to the example */}
               <div className="mt-4 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 p-4 rounded-lg">
                 <p className="text-bento-text/90 text-center italic text-sm">
                   大多数社会交往上很成功的人都积极地把别人拉入到自己的生活中。他们经常采用的最重要的两种方式就是：主动与希望认识的人交谈；向希望作进一步了解的人主动发出邀请。
                   <br />
                   Most socially successful people actively draw others into their lives. The two most important ways they often do this are: initiating conversations with people they want to get to know; and proactively inviting people they want to get to know better.
                 </p>
               </div>
            </div>
          </div>
        </BentoCard>

      </div>

    </div>
  );
};

export default IssuingInvitations;
