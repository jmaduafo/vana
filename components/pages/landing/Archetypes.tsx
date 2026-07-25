import LandingContainer from "@/components/containers/LandingContainer";
import Header2 from "@/components/headings/Header2";
import Header6 from "@/components/headings/Header6";
import Paragraph from "@/components/headings/Paragraph";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ARCHETYPES } from "@/lib/archetypes";
import { ArrowRight } from "lucide-react";
import React from "react";

function Archetypes() {
  return (
    <LandingContainer>
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-2">
          <Badge className="capitalize" variant={"outline"}>
            A few archetypes
          </Badge>
          <Header2 text="You could turn out to be..." />
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {ARCHETYPES.slice(0, 4).map((arch) => {
            return (
              <div
                className="flex flex-col gap-8 p-6 bg-accent/20 hover:bg-accent/40 duration-300 rounded-xl "
                key={arch.name}
              >
                <div className="flex flex-col gap-1">
                  <Header6 className="font-medium" text={arch.name} />
                  <Paragraph className="italic" text={arch.tagline} />
                </div>
                <Paragraph text={arch.description} />
              </div>
            );
          })}
        </div>
        <div className="flex justify-center">
          <Button size="lg" className="capitalize">
            Discover more archetypes <ArrowRight />
          </Button>
        </div>
      </div>
    </LandingContainer>
  );
}

export default Archetypes;
