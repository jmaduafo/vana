import LandingContainer from "@/components/containers/LandingContainer";
import Paragraph from "@/components/headings/Paragraph";
import { Button } from "@/components/ui/button";
import React from "react";

function Footer() {
  return (
    <footer>
      <LandingContainer className="bg-accent text-background">
        <div className="flex flex-col items-center gap-5">
          <Paragraph text="No account. No tracking. Nothing saved." />
          <Button variant={"secondary"} size="lg">Start the Quiz</Button>
        </div>
      </LandingContainer>
    </footer>
  );
}

export default Footer;
