import { cn } from "@/lib/utils";
import React from "react";

function LandingContainer({
  children,
  className,
}: {
  readonly children: React.ReactNode;
  readonly className?: string;
}) {
  // px-[8vw] py-[9vh]
  return <section className={cn("px-8 py-[8vh] max-w-5xl 2xl:max-w-7xl mx-auto", className)}>{children}</section>;
}

export default LandingContainer;
