import { cn } from '@/lib/utils';
import React from 'react'

function Header6({
  text,
  className,
}: {
  readonly text: string;
  readonly className?: string;
}) {
  return <h6 className={cn("text-base lg:text-lg 2xl:text-xl leading-none", className)}>{text}</h6>;
}

export default Header6