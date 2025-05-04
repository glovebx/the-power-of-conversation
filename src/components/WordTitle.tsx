import { cn } from '@/lib/utils';

type WordTitleProps = {
  word: string;
  phonetic?: string;
  partOfSpeech?: string;
  className?: string;
  wordClassName?: string;
  phoneticClassName?: string;
};

const WordTitle = ({ 
  word, 
  phonetic, 
  partOfSpeech, 
  className,
  wordClassName,
  phoneticClassName
}: WordTitleProps) => {
  return (
    <div className={cn('text-center', className)}>
      <h1 className={cn("word-title", wordClassName)}>{word}</h1>
      {phonetic && <p className={cn("phonetic", phoneticClassName)}>{phonetic}</p>}
      {partOfSpeech && (
        <div className="inline-block bg-bento-accent3/30 px-4 py-1 rounded-full text-bento-accent3 font-medium">
          {partOfSpeech}
        </div>
      )}
    </div>
  );
};

export default WordTitle;