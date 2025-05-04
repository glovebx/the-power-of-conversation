import { cn } from '@/lib/utils';

type WordFormProps = {
  form: string;
  description: string;
  className?: string;
  formClassName?: string;
  descriptionClassName?: string;
};

const WordForm = ({ 
  form, 
  description, 
  className,
  formClassName,
  descriptionClassName 
}: WordFormProps) => {
  return (
    <div className={cn('mb-2 last:mb-0', className)}>
      <span className={cn("word-form", formClassName)}>{form}</span>
      <span className={cn("text-sm text-white/80", descriptionClassName)}>{description}</span>
    </div>
  );
};

export default WordForm;