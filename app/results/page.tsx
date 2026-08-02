"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Archetype, Spot, VibeVector } from "@/lib/types";
import RadarChart from "@/components/pages/archetypes/RadarChart";
import SpotCard from "@/components/cards/SpotCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header1 from "@/components/headings/Header1";
import Paragraph from "@/components/headings/Paragraph";
import AxisLegend from "@/components/pages/results/AxisLegend";
import Header2 from "@/components/headings/Header2";
import { Spinner } from "@/components/ui/spinner";
import Header6 from "@/components/headings/Header6";
import SmallParagraph from "@/components/headings/SmallParagraph";
import Image from "next/image";
import { ArrowLeft, CircleQuestionMark } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface StoredResults {
  vector: VibeVector;
  archetype: Archetype;
  spots: Spot[];
  location: string;
}

export default function ResultsPage() {
  const [results, setResults] = useState<StoredResults | null | "empty">(null);

  useEffect(() => {
    const raw = sessionStorage.getItem("vana-results");
    if (!raw) {
      setResults("empty");
      return;
    }
    try {
      setResults(JSON.parse(raw));
    } catch {
      setResults("empty");
    }
  }, []);

  if (results === null) {
    return (
      <main className="min-h-screen flex items-center justify-center gap-3">
        <Spinner className="size-5" />
        <Header6 text="Loading" />
      </main>
    );
  }

  if (results === "empty") {
    return (
      <main className="min-h-screen bg-paper flex flex-col items-center justify-center px-6 text-center gap-6">
        <p className="font-display text-2xl text-ink">
          No results on file yet.
        </p>
        <p className="text-ink-soft/70 max-w-sm">
          Results aren't saved anywhere, so you'll need to take the quiz first.
        </p>
        <Link
          href="/quiz"
          className="bg-moss text-paper font-mono text-sm tracking-widest uppercase px-7 py-4 rounded-md hover:bg-moss-dark transition-colors"
        >
          <Button>Take the quiz</Button>
        </Link>
      </main>
    );
  }

  const { archetype, vector, spots, location } = results;

  return (
    <div>
      <main className="min-h-screen max-w-4xl 2xl:max-w-7xl mx-auto px-8">
        {/* <Link href={"/"}>
          <Button
            className="px-0 mt-16 sm:mt-20 gap-2 hover:bg-transparent hover:gap-3 duration-300"
            variant={"ghost"}
          >
            <ArrowLeft strokeWidth={1.5} className="size-5" />
            Back to home
          </Button>
        </Link> */}
        <Tooltip>
          <TooltipTrigger
            render={
              <Link href={"/"}>
          <Button
            className="px-0 mt-16 sm:mt-20 gap-2 hover:bg-transparent hover:gap-3 duration-300"
            variant={"ghost"}
          >
            <ArrowLeft strokeWidth={1.5} className="size-5" />
            Back to home
          </Button>
        </Link>
            }
          />
          <TooltipContent>
            <SmallParagraph text="Results are saved and can be returned to later"/>
          </TooltipContent>
        </Tooltip>
        <section className="mt-5">
          {/* Specimen header */}
          <div className="">
            <Badge variant={"outline"}>
              Your Archetype — scouted for{" "}
              <span className="capitalize">{location}</span>
            </Badge>
            <div className="mt-4">
              <Header1 text={archetype.name} />
              <Paragraph className="italic" text={archetype.tagline} />
            </div>

            <div className="grid mt-8 sm:mt-10 sm:grid-cols-2 gap-13 items-center">
              <div>
                {archetype.image && (
                  <div className="w-[80%] mt-8 mx-auto">
                    <Image
                      src={archetype.image}
                      alt={archetype.name}
                      width={1600}
                      height={1600}
                      className="object-cover"
                      loading="eager"
                    />
                  </div>
                )}
                <div className="flex items-start gap-3 mt-4 p-4 border border-foreground/20 rounded-xl">
                  <div className="size-6 rounded-full bg-foreground text-background flex justify-center items-center">
                    <CircleQuestionMark className="size-4" strokeWidth={2} />
                  </div>
                  <SmallParagraph
                    className="flex-1 text-sm 2xl:text-base"
                    text={archetype.description}
                  />
                </div>
              </div>
              <RadarChart vector={vector} />
            </div>
          </div>
        </section>

        {/* Axis legend */}
        <section className="py-16">
          <div className="flex flex-col gap-2 mb-8">
            <Badge variant={"outline"}>Reading the chart</Badge>
            <Header2 text="What each axis means" />
          </div>
          <AxisLegend vector={vector} />
        </section>

        {/* Spots */}
        <section className="py-16">
          <div className="flex flex-col gap-2 mb-8">
            <Badge variant={"outline"}>Field notes</Badge>
            <Header2 text="Spots picked for you" />
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {spots.map((spot, i) => (
              <SpotCard key={spot.name + i} spot={spot} index={i} />
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-8">
            <SmallParagraph
              className=""
              text="Spots are generated to fit your profile and location and may not all
            be exact, currently open, or precisely named — treat this as a
            starting point and confirm details before you head out."
            />

            <div className="">
              <Link href="/quiz">
                <Button>Retake the quiz</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
