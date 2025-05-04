import { cn } from '@/lib/utils';

type ExampleProps = {
  number: number;
  english: string;
  chinese: string;
  className?: string;
};

const Example = ({ number, english, chinese, className }: ExampleProps) => {
  const colors = [
    'bg-bento-accent1', 
    'bg-bento-accent3', 
    'bg-bento-accent2'
  ];
  
  return (
    <div className={cn('mb-4 last:mb-0', className)}>
      <div className="flex items-start">
        <span className={cn('example-number', colors[(number - 1) % 3])}>
          {number}
        </span>
        <div>
          <p className="text-white mb-1">{english}</p>
          <p className="text-white/70 text-sm">{chinese}</p>
        </div>
      </div>
    </div>
  );
};

export default Example;