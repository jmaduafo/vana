import LandingContainer from "@/components/containers/LandingContainer";
import Paragraph from "@/components/headings/Paragraph";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="bg-accent text-background">
      <LandingContainer className="">
        <div className="flex flex-col items-center gap-5">
          <Paragraph text="No account. No tracking. Nothing saved." />
          <Link href={"/quiz"}>
            <Button variant={"secondary"} size="lg">
              Start the Quiz
            </Button>
          </Link>
        </div>
      </LandingContainer>
    </footer>
  );
}

export default Footer;
