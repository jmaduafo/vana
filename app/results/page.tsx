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
      <main className="min-h-screen bg-paper flex items-center justify-center gap-3">
       <Spinner className="size-5"/>
       <Header6 text="Loading"/>
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
    <main className="min-h-screen">
      {/* Specimen header */}
      <section className="bg-ink text-paper bg-grain-texture-dark">
        <div className="max-w-4xl mx-auto px-6 py-16 sm:py-20">
          <Badge variant={"outline"}>
            Your Archetype — scouted for {location}
          </Badge>
          <div className="mt-4">
            <Header1 text={archetype.name} />
            <Paragraph className="italic" text={archetype.tagline} />
          </div>

          <div className="grid mt-8 sm:mt-0 sm:grid-cols-[1fr_auto] gap-10 items-center">
            <Paragraph text={archetype.description} />
            <RadarChart vector={vector} />
          </div>
        </div>
      </section>

      {/* Axis legend */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-b border-ink-soft/10">
        <div className="flex flex-col gap-2 mb-8">
          <Badge variant={"outline"}>Reading the chart</Badge>
          <Header2 text="What each axis means" />
        </div>
        <AxisLegend vector={vector} />
      </section>

      {/* Spots */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <p className="font-mono text-[11px] tracking-widest uppercase text-brass mb-2">
          Field Notes
        </p>
        <h2 className="font-display text-3xl text-ink mb-10">
          Spots picked for you
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {spots.map((spot, i) => (
            <SpotCard key={spot.name + i} spot={spot} index={i} />
          ))}
        </div>

        <p className="mt-10 text-[13px] text-ink-soft/50 leading-relaxed max-w-xl">
          Spots are generated to fit your profile and location and may not all
          be exact, currently open, or precisely named — treat this as a
          starting point and confirm details before you head out.
        </p>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            href="/quiz"
            className="font-mono text-xs tracking-widest uppercase border border-ink-soft/25 text-ink-soft px-6 py-3 rounded-md hover:border-moss hover:text-moss transition-colors"
          >
            Retake the quiz
          </Link>
        </div>
      </section>
    </main>
  );
}
