
import BentoCard from '@/components/BentoCard';
import { 
  MessageSquareText, CheckCircle, XCircle, BookOpen, Settings, 
  Info, Search, Lightbulb, MessageSquareQuote, Calendar
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Custom icon component for the bento grid
const QuestionIcon = ({ className }: { className?: string }) => (
  <div className={cn("icon-container bg-gradient-to-br from-purple-500/30 to-indigo-600/30", className)}>
    <MessageSquareText className="h-8 w-8 text-purple-400" />
  </div>
);

const ArtOfQuestioning = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#1A1E2E]">
      <div className="grid gap-4 p-4 md:p-6 w-full max-w-7xl grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
        {/* Title Card */}
        <div className="title-card col-span-full animate-pulse-slow">
          <div className="text-center py-10">
            <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight mb-2 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              提问的艺术 <span className="block text-2xl md:text-3xl mt-2">The Art of Questioning</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl mb-3 max-w-2xl mx-auto">
              如何通过提问促进交谈 | How to Promote Conversation Through Questioning
            </p>
            <div className="flex justify-center mt-6">
              <QuestionIcon />
            </div>
          </div>
        </div>
        
        {/* Card 1: 封闭式问题 */}
        <BentoCard 
          title="封闭式问题 | Closed Questions" 
          variant="1"
          titleClassName="text-pink-300"
        >
          <div className="flex items-start">
            <div className="icon-container bg-gradient-to-br from-pink-500/30 to-red-600/30">
              <div className="flex space-x-1">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <XCircle className="h-5 w-5 text-red-400" />
              </div>
            </div>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-pink-200">简洁但有限制 | Concise but Limited</h4>
              <p className="text-white/80">
                封闭式问题类似于是非题或选择题，回答通常只需要一两个词。它们可以提供基本信息，但可能导致交谈枯燥和尴尬。
              </p>
              <p className="text-white/70 text-sm mt-2 italic">
                Closed questions are similar to yes/no or multiple-choice questions, and usually require only one or two words to answer.
              </p>
            </div>
          </div>
        </BentoCard>
        
        {/* Card 2: 开放式问题 */}
        <BentoCard 
          title="开放式问题 | Open-ended Questions" 
          variant="2"
          titleClassName="text-blue-300"
        >
          <div className="flex items-start">
            <div className="icon-container bg-gradient-to-br from-blue-500/30 to-indigo-600/30">
              <BookOpen className="h-6 w-6 text-blue-400" />
            </div>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-blue-200">深入且富有启发性 | In-depth and Inspiring</h4>
              <p className="text-white/80">
                开放式问题需要更详细的回答，能够引导对方深入讨论，增加交谈的趣味性和深度。
              </p>
              <p className="text-white/70 text-sm mt-2 italic">
                Open-ended questions require more detailed answers, can guide the other person to discuss in depth, and increase the fun and depth of conversation.
              </p>
            </div>
          </div>
        </BentoCard>
        
        {/* Card 3: 提问增强控制能力 */}
        <BentoCard 
          title="提问增强控制能力 | Questioning Enhances Control" 
          variant="3"
          titleClassName="text-purple-300"
        >
          <div className="flex items-start">
            <div className="icon-container bg-gradient-to-br from-purple-500/30 to-violet-600/30">
              <Settings className="h-6 w-6 text-purple-400" />
            </div>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-purple-200">掌握话题的选择权 | Taking Control of Topics</h4>
              <p className="text-white/80">
                通过提问，你可以引导交谈的方向，选择自己感兴趣的话题，从而避免无聊的对话。
              </p>
              <p className="text-white/70 text-sm mt-2 italic">
                By asking questions, you can guide the direction of the conversation and choose topics that interest you.
              </p>
            </div>
          </div>
        </BentoCard>
        
        {/* Card 4: 提问时的注意事项 */}
        <BentoCard 
          title="提问时的注意事项 | Precautions When Questioning" 
          variant="4"
          titleClassName="text-amber-300"
        >
          <div className="flex items-start">
            <div className="icon-container bg-gradient-to-br from-amber-500/30 to-orange-600/30">
              <Info className="h-6 w-6 text-amber-400" />
            </div>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-amber-200">避免常见错误 | Avoid Common Mistakes</h4>
              <p className="text-white/80">
                提问时要注意避免过于宽泛、过于困难或引导性的问题，以免让对方感到不适或难以回答。
              </p>
              <p className="text-white/70 text-sm mt-2 italic">
                When asking questions, avoid ones that are too broad, too difficult, or leading, to prevent discomfort.
              </p>
            </div>
          </div>
        </BentoCard>
        
        {/* Card 5: 避免过于宽泛的问题 */}
        <BentoCard 
          title="避免过于宽泛的问题 | Avoid Overly Broad Questions" 
          variant="1"
          titleClassName="text-emerald-300"
        >
          <div className="flex items-start">
            <div className="icon-container bg-gradient-to-br from-emerald-500/30 to-green-600/30">
              <Search className="h-6 w-6 text-emerald-400" />
            </div>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-emerald-200">具体问题带来更好回应 | Specific Questions Bring Better Responses</h4>
              <p className="text-white/80">
                过于宽泛的问题往往得不到详细的回答，而具体的问题能够引发更有意义的讨论。
              </p>
              <p className="text-white/70 text-sm mt-2 italic">
                Overly broad questions often don't get detailed answers, while specific ones lead to meaningful discussions.
              </p>
            </div>
          </div>
        </BentoCard>
        
        {/* Card 6: 避免提问过于困难 */}
        <BentoCard 
          title="避免提问过于困难 | Avoid Asking Questions That Are Too Difficult" 
          variant="2"
          titleClassName="text-sky-300"
        >
          <div className="flex items-start">
            <div className="icon-container bg-gradient-to-br from-sky-500/30 to-blue-600/30">
              <Lightbulb className="h-6 w-6 text-sky-400" />
            </div>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-sky-200">从简单问题开始 | Start with Simple Questions</h4>
              <p className="text-white/80">
                开始时提出简单的问题可以帮助对方放松，逐渐引导到更深入的话题。
              </p>
              <p className="text-white/70 text-sm mt-2 italic">
                Starting with simple questions helps the other person relax and gradually leads to deeper topics.
              </p>
            </div>
          </div>
        </BentoCard>
        
        {/* Card 7: 避免引导性问题 */}
        <BentoCard 
          title="避免引导性问题 | Avoid Leading Questions" 
          variant="3"
          titleClassName="text-rose-300"
        >
          <div className="flex items-start">
            <div className="icon-container bg-gradient-to-br from-rose-500/30 to-red-600/30">
              <MessageSquareQuote className="h-6 w-6 text-rose-400" />
            </div>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-rose-200">开放性讨论优于预设答案 | Open Discussion vs. Preset Answers</h4>
              <p className="text-white/80">
                引导性问题通常只需要对方同意，不利于开放性讨论。应避免此类问题，以促进更自然的交流。
              </p>
              <p className="text-white/70 text-sm mt-2 italic">
                Leading questions usually only require agreement, hindering open discussion. Avoid them for natural communication.
              </p>
            </div>
          </div>
        </BentoCard>
        
        {/* Card 8: 提问前的准备 - Large Card */}
        <BentoCard 
          title="提问前的准备 | Preparation Before Questioning" 
          variant="4"
          isLarge={true}
          titleClassName="text-indigo-300"
        >
          <div className="flex items-start">
            <div className="icon-container bg-gradient-to-br from-indigo-500/30 to-violet-600/30">
              <Calendar className="h-6 w-6 text-indigo-400" />
            </div>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-indigo-200">提前准备，避免尴尬 | Prepare in Advance, Avoid Embarrassment</h4>
              <p className="text-white/80 mb-4">
                提前准备一些问题可以避免在交谈中出现尴尬的沉默，帮助你更好地引导对话。
              </p>
              <p className="text-white/70 text-sm mb-4 italic">
                Preparing questions in advance can avoid awkward silences and help you guide the conversation better.
              </p>
              
              <div className="mt-4 p-4 border border-indigo-800/50 rounded-lg bg-indigo-900/20">
                <h5 className="font-medium text-indigo-200 mb-2">实用问题准备技巧 | Practical Question Preparation Tips</h5>
                <ul className="list-disc pl-5 text-white/80 space-y-2">
                  <li>研究对方的背景和兴趣 | Research the person's background and interests</li>
                  <li>准备3-5个开放式问题 | Prepare 3-5 open-ended questions</li>
                  <li>从轻松话题逐渐过渡到深入话题 | Gradually transition from light to deeper topics</li>
                  <li>准备一些延伸问题 | Prepare some follow-up questions</li>
                </ul>
              </div>
              
              <div className="mt-6 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 p-4 rounded-lg">
                <p className="text-white/90 text-center italic">
                  "好的问题能够开启伟大的对话，而伟大的对话能够建立牢固的关系。"
                </p>
                <p className="text-white/70 text-center text-sm mt-1">
                  "Good questions start great conversations, and great conversations build strong relationships."
                </p>
              </div>
            </div>
          </div>
        </BentoCard>
      </div>
      
    </div>
  );
};

export default ArtOfQuestioning;
