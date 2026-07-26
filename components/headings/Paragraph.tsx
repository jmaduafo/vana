import { cn } from '@/lib/utils';
import React from 'react'

function Paragraph({
  text,
  className,
}: {
  readonly text: string;
  readonly className?: string;
}) {
  return <p className={cn("text-sm lg:text-base 2xl:text-lg leading-snug", className)}>{text}</p>;
}

export default Paragraph