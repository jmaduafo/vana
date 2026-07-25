import LandingContainer from "@/components/containers/LandingContainer";
import Header1 from "@/components/headings/Header1";
import Paragraph from "@/components/headings/Paragraph";
import { Button } from "@/components/ui/button";
import HeroImage from "@/public/images/hero.svg";
import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <LandingContainer className="lg:h-[90vh]">
      <div className="h-full flex flex-col lg:flex-row gap-6 items-center justify-center">
        <div className="flex-1 flex flex-col gap-4">
          <div>
            <Header1 text="Some places are for you."  className="whitespace-nowrap"/>
            <Header1 text="Most places" spanText="aren't." className="whitespace-nowrap" />
          </div>
          <div>
            <Paragraph
              className="max-w-[20em]"
              text="Take a short quiz that maps out your actual personality — not your Instagram one — and we will hand you a set of local spots built for it."
            />
          </div>
          <div>
            <Button>Take the quiz - 2 mins</Button>
          </div>
        </div>
        <div className="flex-1">
          <div className="size-[70vw] lg:size-[40vw] rounded-full bg-accent flex items-center justify-center">
            <div className="max-w-[70vw] lg:max-w-[40vw]">
              <Image
                src={HeroImage}
                alt="two people on a trip"
                className="object-cover object-bottom"
              />
            </div>
          </div>
        </div>
      </div>
    </LandingContainer>
  );
}

export default Hero;
