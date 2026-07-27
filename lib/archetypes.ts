import { AXES, Archetype, VibeVector } from "./types";

export const ARCHETYPES: Archetype[] = [
  {
    name: "The Quiet Wanderer",
    tagline: "Finds the new place, alone, on purpose.",
    description:
      "You'd rather discover a hidden staircase by yourself than have it pointed out by a crowd. Novelty pulls you in, but only if you can move through it at your own volume.",
    vector: { social: -0.6, novelty: 0.6, pace: -0.3, aesthetic: 0.3, planning: -0.3 },
    image: "/images/archetypes/stand_out.svg"
  },
  {
    name: "The Regular",
    tagline: "Knows exactly which booth is theirs.",
    description:
      "Loyalty is your love language. You've found your spots, you know the staff, and the appeal of a new place has to clear a high bar before you'll trade your usual for it.",
    vector: { social: -0.3, novelty: -0.6, pace: -0.3, aesthetic: 0.3, planning: 0.3 },
    image: "/images/archetypes/goodbye.svg"
  },
  // find out for social scout
  {
    name: "The Social Scout",
    tagline: "First to try it, first to bring everyone else.",
    description:
      "You treat a new neighborhood like a rumor worth chasing down, and you'd rather chase it with company. If it's buzzy and unfamiliar, you're already there.",
    vector: { social: 0.6, novelty: 0.6, pace: 0.3, aesthetic: 0, planning: -0.3 },
    image: "/images/archetypes/living.svg"
  },
  {
    name: "The Block Party Mayor",
    tagline: "Knows everyone within a four block radius.",
    description:
      "You're energized by density, not novelty. Familiar faces in a familiar place, as many of them as possible, is the whole point of going out.",
    vector: { social: 0.9, novelty: 0, pace: 0.3, aesthetic: 0, planning: 0.3 },
    image: "/images/archetypes/having_fun.svg"
  },
  {
    name: "The Curator",
    tagline: "Everything on the itinerary earns its place.",
    description:
      "You research before you arrive and you notice things other people walk past. A place has to look and feel a particular way, and you're the one who can tell.",
    vector: { social: -0.3, novelty: 0.3, pace: -0.3, aesthetic: 0.9, planning: 0.6 },
    image: "/images/archetypes/business_man.svg"
  },
  {
    name: "The Drifter",
    tagline: "The plan is that there is no plan.",
    description:
      "You'll end up somewhere good, you always do, and you'd rather find out how than know in advance. Structure is the enemy of the best afternoons you've had.",
    vector: { social: 0, novelty: 0.9, pace: 0, aesthetic: 0, planning: -0.9 },
    image: "/images/archetypes/skateboard.svg"
  },
  {
    name: "The Itinerary Architect",
    tagline: "The spreadsheet has color-coded tabs.",
    description:
      "You get real joy from the planning itself, not just the payoff. A well-charted day, timed and mapped, is its own kind of satisfying.",
    vector: { social: 0, novelty: 0.3, pace: 0.3, aesthetic: 0, planning: 0.9 },
    image: "/images/archetypes/schedule.svg"
  },
  {
    name: "The Comfort Seeker",
    tagline: "Slow, familiar, and in no rush to change that.",
    description:
      "Routine isn't a rut to you, it's a feature. You want the same warm corner, the same order, and time to actually sit in it.",
    vector: { social: -0.3, novelty: -0.9, pace: -0.6, aesthetic: 0.3, planning: 0.3 },
    image: "/images/archetypes/yoga.svg"
  },
  {
    name: "The Rooftop Romantic",
    tagline: "Came for the view, stayed for the light.",
    description:
      "You're drawn to places that look like something, whether or not there's a crowd there to see it with you. Atmosphere matters more than the menu.",
    vector: { social: 0.3, novelty: 0.3, pace: -0.3, aesthetic: 0.9, planning: 0 },
    image: "/images/archetypes/daydream.svg"
  },
  {
    name: "The Fast Mover",
    tagline: "In, sorted, out. On to the next thing.",
    description:
      "You're efficient by nature. Ambience is nice but not the point, and you'd rather get five things done well than linger over one.",
    vector: { social: 0, novelty: 0, pace: 0.9, aesthetic: -0.3, planning: 0.3 },
    image: "/images/archetypes/scooter.svg"
  },
];

function distance(a: VibeVector, b: VibeVector): number {
  return Math.sqrt(AXES.reduce((sum, axis) => sum + (a[axis] - b[axis]) ** 2, 0));
}

export function matchArchetype(vector: VibeVector): Archetype {
  let best = ARCHETYPES[0];
  let bestDist = Infinity;
  for (const archetype of ARCHETYPES) {
    const d = distance(vector, archetype.vector);
    if (d < bestDist) {
      bestDist = d;
      best = archetype;
    }
  }
  return best;
}
