import { cn } from '@/lib/utils';
import React from 'react'

function Header2({
  text,
  className,
}: {
  readonly text: string;
  readonly className?: string;
}) {
  return <h2 className={cn("font-serif text-3xl lg:text-4xl 2xl:text-5xl leading-none", className)}>{text}</h2>;
}

export default Header2