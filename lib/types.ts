export type Axis = "social" | "novelty" | "pace" | "aesthetic" | "planning";

export const AXES: Axis[] = ["social", "novelty", "pace", "aesthetic", "planning"];

export const AXIS_LABELS: Record<Axis, { low: string; high: string; name: string }> = {
  social: { low: "Solitary", high: "Gregarious", name: "Herd Instinct" },
  novelty: { low: "Loyal", high: "Restless", name: "Wander Index" },
  pace: { low: "Lingering", high: "Brisk", name: "Tempo" },
  aesthetic: { low: "Unfussy", high: "Curated", name: "Eye" },
  planning: { low: "Spontaneous", high: "Charted", name: "Compass" },
};

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
