import { cn } from '@/lib/utils';
import React from 'react'

function Header5({
  text,
  className,
}: {
  readonly text: string;
  readonly className?: string;
}) {
  return <h5 className={cn("text-xl lg:text-2xl 2xl:text-3xl leading-none", className)}>{text}</h5>;
}

export default Header5