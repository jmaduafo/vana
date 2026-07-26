import { cn } from '@/lib/utils';
import React from 'react'

function SmallParagraph({
  text,
  className,
}: {
  readonly text: string;
  readonly className?: string;
}) {
  return <p className={cn("text-sm lg:text-base 2xl:text-lg leading-none", className)}>{text}</p>;
}

export default SmallParagraph