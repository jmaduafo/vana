import LandingContainer from "@/components/containers/LandingContainer";
import Header6 from "@/components/headings/Header6";
import Paragraph from "@/components/headings/Paragraph";
import { Badge } from "@/components/ui/badge";
import { CircleQuestionMark, IdCard, MapPinned } from "lucide-react";
import React from "react";

function HowItWorks() {
  const steps = [
    {
      title: "Answer some questions",
      subtitle:
        "Doors that shouldn't be there, cancelled plans, rainy Sundays. Nothing about your job title.",
      icon: CircleQuestionMark,
    },
    {
      title: "Tell us where you are",
      subtitle:
        "Any city or neighborhood. We match spots to the area you actually give us.",
      icon: MapPinned,
    },
    {
      title: "Get your archetype",
      subtitle:
        "A personality read plus six real local spots picked for that specific profile.",
      icon: IdCard,
    },
  ];
  return (
    <LandingContainer className="bg-foreground text-background dark:bg-foreground dark:text-background">
      <div className="flex flex-col gap-12">
        <Badge className="capitalize" variant={"outlineAlt"}>How it works</Badge>
        <div className="font-light flex flex-col md:flex-row justify-between gap-10">
          {steps.map((step, i) => {
            return (
              <div key={step.title} className="flex flex-col gap-5 max-w-80">
                <Paragraph
                  className="uppercase opacity-60 "
                  text={`step ${(i + 1).toString().padStart(2, "0")}`}
                />
                <div className="size-10 flex justify-center items-center rounded-full bg-background text-foreground">
                  <step.icon className="size-6" strokeWidth={1} />
                </div>
                <div className="flex flex-col gap-2">
                  <Header6 className="font-medium" text={step.title} />
                  <Paragraph className="" text={step.subtitle} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </LandingContainer>
  );
}

export default HowItWorks;
