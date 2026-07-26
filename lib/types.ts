export type Axis = "social" | "novelty" | "pace" | "aesthetic" | "planning";

export const AXES: Axis[] = ["social", "novelty", "pace", "aesthetic", "planning"];

export type AxisRange = { min: number; max: number };

export const AXIS_LABELS: Record<Axis, { low: string; high: string; name: string; description: string }> = {
  social: {
    low: "Solitary",
    high: "Gregarious",
    name: "Herd Instinct",
    description: "Whether a place recharges you through company or through quiet. Low means you're drawn to spots where you can be alone in public; high means the people are the point.",
  },
  novelty: {
    low: "Loyal",
    high: "Restless",
    name: "Wander Index",
    description: "Whether you'd rather return to a place you already trust or chase down somewhere you've never been. Low favors your regular haunts; high favors the untested spot.",
  },
  pace: {
    low: "Lingering",
    high: "Brisk",
    name: "Tempo",
    description: "How fast you like to move through a place. Low means you want somewhere built for sitting still for hours; high means you're in and out and on to the next thing.",
  },
  aesthetic: {
    low: "Unfussy",
    high: "Curated",
    name: "Eye",
    description: "How much a place's look and atmosphere matter to you. Low means substance over style, a good spot is a good spot; high means the lighting, design, and view carry real weight.",
  },
  planning: {
    low: "Spontaneous",
    high: "Charted",
    name: "Compass",
    description: "Whether you prefer to wing it or map it out. Low means you like discovering a place as you go; high means you're happiest with a plan, a reservation, or a route.",
  },
}

export type AxisDeltas = Partial<Record<Axis, number>>;

export interface QuizOption {
  label: string;
  deltas: AxisDeltas;
}

export interface QuizQuestion {
  id: string;
  prompt: string;
  flavor?: string;
  options: QuizOption[];
}

// Normalized -1..1 per axis
export type VibeVector = Record<Axis, number>;

export interface Archetype {
  name: string;
  tagline: string;
  description: string;
  vector: VibeVector;
}

export interface Spot {
  name: string;
  category: string;
  neighborhood: string;
  description: string;
  whyItFits: string;
}
