
import { cn } from '@/lib/utils';

type WordTitleProps = {
  word: string;
  phonetic?: string;
  partOfSpeech?: string;
  className?: string;
};

const WordTitle = ({ 
  word, 
  phonetic, 
  partOfSpeech, 
  className 
}: WordTitleProps) => {
  return (
    <div className={cn('text-center', className)}>
      <h1 className="word-title">{word}</h1>
      {phonetic && <p className="phonetic">{phonetic}</p>}
      {partOfSpeech && (
        <div className="inline-block bg-bento-accent3/30 px-4 py-1 rounded-full text-bento-accent3 font-medium">
          {partOfSpeech}
        </div>
      )}
    </div>
  );
};

export default WordTitle;