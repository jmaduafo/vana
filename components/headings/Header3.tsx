import { cn } from '@/lib/utils';
import React from 'react'

function Header3({
  text,
  className,
}: {
  readonly text: string;
  readonly className?: string;
}) {
  return <h3 className={cn("text-2xl lg:text-3xl 2xl:text-4xl leading-none", className)}>{text}</h3>;
}

export default Header3