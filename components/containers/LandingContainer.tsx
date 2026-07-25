import { cn } from "@/lib/utils";
import React from "react";

function LandingContainer({
  children,
  className,
}: {
  readonly children: React.ReactNode;
  readonly className?: string;
}) {
  return <section className={cn("px-[8vw] py-10", className)}>{children}</section>;
}

export default LandingContainer;
