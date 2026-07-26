import { cn } from '@/lib/utils';
import React from 'react'

function SmallParagraph({
  text,
  className,
}: {
  readonly text: string;
  readonly className?: string;
}) {
  return <p className={cn("text-xs lg:text-sm 2xl:text-base leading-snug", className)}>{text}</p>;
}

export default SmallParagraph