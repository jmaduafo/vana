import { cn } from '@/lib/utils';
import React from 'react'

function Header2({
  text,
  className,
}: {
  readonly text: string;
  readonly className?: string;
}) {
  return <h2 className={cn("text-4xl lg:text-5xl 2xl:text-6xl leading-none", className)}>{text}</h2>;
}

export default Header2