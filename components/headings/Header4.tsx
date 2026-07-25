import { cn } from '@/lib/utils';
import React from 'react'

function Header4({
  text,
  className,
}: {
  readonly text: string;
  readonly className?: string;
}) {
  return <h4 className={cn("text-2xl lg:text-3xl 2xl:text-4xl leading-none", className)}>{text}</h4>;
}

export default Header4