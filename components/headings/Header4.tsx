import { cn } from '@/lib/utils';
import React from 'react'

function Header4({
  text,
  className,
}: {
  readonly text: string;
  readonly className?: string;
}) {
  return <h4 className={cn("text-xl lg:text-2xl 2xl:text-3xl leading-none", className)}>{text}</h4>;
}

export default Header4