import LandingContainer from "@/components/containers/LandingContainer";
import Header1 from "@/components/headings/Header1";
import Paragraph from "@/components/headings/Paragraph";
import { Button } from "@/components/ui/button";
import HeroImage from "@/public/images/hero.svg";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <LandingContainer className="lg:h-[95vh]">
      <div className="h-full flex flex-col lg:flex-row gap-12 lg:gap-6 items-center justify-center">
        <div className="flex-1 flex flex-col gap-4">
          <div>
            <Header1
              text="Some places are for you."
              className="text-center lg:text-left whitespace-nowrap"
            />
            <Header1
              text="Most places"
              spanText="aren't."
              className="text-center lg:text-left whitespace-nowrap"
            />
          </div>
          <div className="flex justify-center lg:justify-start">
            <Paragraph
              className="text-center lg:text-left max-w-[20em]"
              text="Take a short quiz that maps out your actual personality — not your Instagram one — and we will hand you a set of local spots built for it."
            />
          </div>
          <div className="flex justify-center lg:justify-start">
            <Link href="/quiz">
              <Button size={"lg"}>Take the quiz - 2 mins</Button>
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <div className="size-[70vw] lg:size-[35vw] rounded-full bg-accent flex items-center justify-center">
            <div className="max-w-[70vw] lg:max-w-[35vw]">
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
