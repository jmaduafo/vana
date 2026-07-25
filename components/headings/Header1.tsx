import React from "react";
import { cn } from "@/lib/utils";

function Header1({
  text,
  className,
  spanText
}: {
  readonly text: string;
  readonly spanText?: string;
  readonly className?: string;
}) {
  return <h1 className={cn("font-serif text-5xl lg:text-6xl 2xl:text-7xl leading-none", className)}>{text} <span className="font-serif-italic">{spanText}</span></h1>
}

export default Header1;
