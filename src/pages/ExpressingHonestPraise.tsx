import React from 'react';
import BentoCard from '@/components/BentoCard'; // Assuming BentoCard component path
import {
  Repeat, Award, ThumbsUp, MessageSquarePlus, MessageSquareQuote,
  RefreshCcw, ShieldCheck, Users, ThumbsUpIcon // Re-using Body for the main title card icon style
} from 'lucide-react'; // Assuming lucide-react is installed
import { cn } from '@/lib/utils'; // Assuming cn utility path

// Custom icon container style based on the example
const IconContainer = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={cn("icon-container flex items-center justify-center rounded-lg p-2", className)}>
    {children}
  </div>
);

const ExpressingHonestPraise = () => {
  return (
    // Main container with dark background and padding, similar to the example
    <div className="min-h-screen flex flex-col items-center justify-center bg-bento-bg">

      {/* Main Grid Container */}
      <div className="grid gap-4 p-4 md:p-6 w-full max-w-7xl grid-cols-1 md:grid-cols-3 lg:grid-cols-3">

        {/* Title Card: Introduction */}
        <div className="title-card col-span-full animate-pulse-slow"> {/* Using col-span-full for a wide card */}
          <div className="text-center py-10">
            <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight mb-2 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              表达诚实的称赞 <span className="block text-2xl md:text-3xl mt-2">Expressing Honest Praise</span>
            </h1>
            <p className="text-bento-text/70 text-lg md:text-xl mb-3 max-w-2xl mx-auto">
              给予积极回应的力量
              <br />
              The Power of Giving Positive Responses
            </p>
            <div className="flex justify-center mt-6">
               {/* Re-using the icon container style from the example */}
              <IconContainer className="bg-gradient-to-br from-purple-500/30 to-indigo-600/30">
                 <ThumbsUpIcon className="h-8 w-8 text-purple-400" /> {/* Using Body icon */}
              </IconContainer>
            </div>
          </div>
        </div>

        {/* Card 1: Behavioral Theory */}
        <BentoCard
          title="行为认知理论 | Behavioral Cognitive Theory"
          variant="1" // Use variant 1 color style
          titleClassName="text-pink-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-pink-500/30 to-red-600/30">
              <Repeat className="h-6 w-6 text-pink-400" /> {/* Icon for repeat/cycle */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-pink-200">
                鼓励与行为频率
                <br />
                Encouragement and Behavior Frequency
              </h4>
              <p className="text-bento-text/80 text-sm">
                受鼓励的行为会增加，被忽视的减少，被惩罚的可能减少或为引起注意而增加。
                <br />
                Encouraged behaviors increase, neglected ones decrease, and punished ones may decrease or increase to seek attention.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 2: Desire to Be Appreciated */}
        <BentoCard
          title="被欣赏的渴望 | The Desire to Be Appreciated"
          variant="2" // Use variant 2 color style
          titleClassName="text-blue-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-blue-500/30 to-indigo-600/30">
              <Award className="h-6 w-6 text-blue-400" /> {/* Icon for award/recognition */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-blue-200">
                人性中最深刻的本能
                <br />
                Humanity's Deepest Instinct
              </h4>
              <p className="text-bento-text/80 text-sm">
                心理学家威廉姆·詹姆斯认为，被欣赏是人性最深刻的本能。满足这种渴望能建立牢固关系，并让你被珍视。
                <br />
                Psychologist William James believed the desire to be appreciated is humanity's deepest instinct. Satisfying this desire builds strong relationships and makes you cherished.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 3: Negative Strategies Harmful */}
        <BentoCard
          title="消极策略的危害 | Harm of Negative Strategies"
          variant="3" // Use variant 3 color style
          titleClassName="text-purple-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-purple-500/30 to-violet-600/30">
              <ThumbsUp className="h-6 w-6 text-purple-400" /> {/* Icon for positive outcome */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-purple-200">
                批评不如鼓励有效
                <br />
                Criticism is Less Effective Than Encouragement
              </h4>
              <p className="text-bento-text/80 text-sm">
                持续批评会使人小心、自我意识强、感觉能力不足，甚至放弃。积极回应有助于成长。
                <br />
                Constant criticism makes people cautious, self-conscious, and feel inadequate, even leading to giving up. Positive responses help growth.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 4: Effective Direct Praise */}
        <BentoCard
          title="有效的直接称赞 | Effective Direct Praise"
          variant="4" // Use variant 4 color style
          titleClassName="text-amber-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-amber-500/30 to-orange-600/30">
              <MessageSquarePlus className="h-6 w-6 text-amber-400" /> {/* Icon for adding message */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-amber-200">
                具体化与使用名字
                <br />
                Be Specific and Use Names
              </h4>
              <p className="text-bento-text/80 text-sm">
                直接称赞需具体指出欣赏的方面（行为、外表、衣着），并称呼对方名字，使其更真诚有力。
                <br />
                Direct praise should specifically point out aspects you appreciate (behavior, appearance, attire) and use the person's name to make it more sincere and powerful.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 5: Helping Others Accept Praise */}
        <BentoCard
          title="帮助他人接受称赞 | Helping Others Accept Praise"
          variant="1" // Use variant 1 color style
          titleClassName="text-emerald-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-emerald-500/30 to-green-600/30">
              <MessageSquareQuote className="h-6 w-6 text-emerald-400" /> {/* Icon for message/question */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-emerald-200">
                赞扬后加问题
                <br />
                Add a Question After Praise
              </h4>
              <p className="text-bento-text/80 text-sm">
                很多人难以接受直接赞扬。在赞扬后加上一个问题（最好是开放式问题），能让对方更容易回应，只需感谢并回答问题。
                <br />
                Many find it hard to accept direct praise. Adding a question (preferably open-ended) after praise makes it easier for them to respond; they just thank you and answer the question.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 6: Converting Negative */}
        <BentoCard
          title="将否定转为称赞 | Converting Negative to Praise"
          variant="2" // Use variant 2 color style
          titleClassName="text-sky-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-sky-500/30 to-blue-600/30">
              <RefreshCcw className="h-6 w-6 text-sky-400" /> {/* Icon for refresh/convert */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-sky-200">
                关注进步与勇气
                <br />
                Focus on Progress and Courage
              </h4>
              <p className="text-bento-text/80 text-sm">
                用心可以将消极批评转为积极赞扬。赞扬对方的进步、尝试的勇气，或关注他们做得好的方面，忽视不喜欢的。
                <br />
                With intention, negative criticism can be turned into positive praise. Praise progress, courage in trying, or focus on what they did well, ignoring what you don't like.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 7: Making Praise Convincing (Large Card) */}
        <BentoCard
          title="使称赞令人信服 | Making Praise Convincing"
          variant="3" // Use variant 3 color style for the large card
          isLarge={true} // Make this a large card
          titleClassName="text-indigo-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-indigo-500/30 to-violet-600/30">
              <ShieldCheck className="h-6 w-6 text-indigo-400" /> {/* Icon for convincing/trust */}
            </IconContainer>
            <div className="ml-3 flex-grow"> {/* Use flex-grow to take available space */}
              <h4 className="font-medium mb-1 text-indigo-200">
                诚实与技巧
                <br />
                Honesty and Techniques
              </h4>
              <p className="text-bento-text/80 text-sm mb-4">
                称赞需诚实、真诚，并让对方相信。微笑、称呼名字、逐步增加频率、措词谨慎、无索取、偶尔提小意见、避免回赞、善意比较等技巧能增强可信度。
                <br />
                Praise needs to be honest, sincere, and believable. Techniques like smiling, using names, gradual frequency, careful wording, no ulterior motives, mixing with minor critique, avoiding reciprocal praise, and favorable comparison enhance credibility.
              </p>

              {/* Adding some key points as nested list for detail, similar to the example */}
               <div className="mt-4 p-4 border border-indigo-800/50 rounded-lg bg-indigo-900/20">
                 <h5 className="font-medium text-indigo-200 mb-2">
                   关键技巧
                   <br />
                   Key Techniques
                 </h5>
                 <ul className="list-disc pl-5 text-bento-text/80 text-sm space-y-1">
                   <li>诚实真诚 | Be Honest and Sincere</li>
                   <li>具体指出 | Be Specific</li>
                   <li>使用名字 | Use Their Name</li>
                   <li>逐步增加频率 | Increase Frequency Gradually</li>
                   <li>措词谨慎 | Be Careful with Wording</li>
                   <li>无索取 | Have No Ulterior Motives</li>
                   <li>避免回赞 | Avoid Reciprocal Praise</li>
                   <li>善意比较 | Compare Favorably (Carefully)</li>
                 </ul>
               </div>

            </div>
          </div>
        </BentoCard>

        {/* Card 8: Other Praise Methods */}
        <BentoCard
          title="其他称赞方式 | Other Praise Methods"
          variant="4" // Use variant 4 color style
          titleClassName="text-rose-300" // Use a color from the bento palette
        >
          <div className="flex items-start">
            <IconContainer className="bg-gradient-to-br from-rose-500/30 to-red-600/30">
              <Users className="h-6 w-6 text-rose-400" /> {/* Icon for multiple people */}
            </IconContainer>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-rose-200">
                第三方与间接称赞
                <br />
                Third-Person and Indirect Praise
              </h4>
              <p className="text-bento-text/80 text-sm">
                包括第三方称赞（告诉别人或通过他人转达）和间接称赞（通过行为如征求意见、询问名字等表达重视）。
                <br />
                Includes third-person praise (telling others or having someone relay it) and indirect praise (expressing value through actions like asking for opinions or names).
              </p>
            </div>
          </div>
        </BentoCard>

         {/* Card 9: Accepting Praise */}
         <BentoCard
           title="积极接受称赞 | Actively Accepting Praise"
           variant="1" // Use variant 1 color style
           titleClassName="text-emerald-300" // Use a color from the bento palette
         >
           <div className="flex items-start">
             <IconContainer className="bg-gradient-to-br from-emerald-500/30 to-green-600/30">
               <Repeat className="h-6 w-6 text-emerald-400" /> {/* Icon for receiving/handshake */}
             </IconContainer>
             <div className="ml-3">
               <h4 className="font-medium mb-1 text-emerald-200">
                 让给予者感到自在
                 <br />
                 Making the Giver Feel Comfortable
               </h4>
               <p className="text-bento-text/80 text-sm">
                 积极接受称赞（眼神交流、微笑、感谢、回应问题）能鼓励对方继续给予积极交流。
                 <br />
                 Actively accepting praise (eye contact, smiling, thanking, responding to questions) encourages the giver to continue positive communication.
               </p>
             </div>
           </div>
         </BentoCard>


      </div>

    </div>
  );
};

export default ExpressingHonestPraise;
