import React from 'react';
import { cn } from '@/lib/utils';

type BentoCardProps = {
  title?: string;
  children: React.ReactNode;
  className?: string;
  variant?: '1' | '2' | '3' | '4';
  isLarge?: boolean;
  titleClassName?: string;
  contentClassName?: string;
};

const BentoCard = ({ 
  title, 
  children, 
  className, 
  variant = '1', 
  isLarge = false,
  titleClassName,
  contentClassName
}: BentoCardProps) => {
  return (
    <div className={cn(
      'bento-card', 
      `bento-card-${variant}`,
      isLarge ? 'md:col-span-2 md:row-span-2' : '',
      className
    )}>
      {title && <h3 className={cn("card-title", titleClassName)}>{title}</h3>}
      <div className={cn(contentClassName)}>
        {children}
      </div>
    </div>
  );
};

export default BentoCard;