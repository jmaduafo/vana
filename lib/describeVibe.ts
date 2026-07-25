import { AXES, AXIS_LABELS, VibeVector } from "./types";

/**
 * Converts the numeric vibe vector into a short list of plain-language
 * descriptors, e.g. "strongly solitary", "mildly restless". Used to brief
 * the OpenAI model without leaking our internal axis names as jargon.
 */
export function describeVibe(vector: VibeVector): string[] {
  return AXES.filter((axis) => Math.abs(vector[axis]) > 0.15).map((axis) => {
    const { low, high } = AXIS_LABELS[axis];
    const strength = Math.abs(vector[axis]) > 0.6 ? "strongly" : "somewhat";
    const direction = vector[axis] > 0 ? high : low;
    return `${strength} ${direction.toLowerCase()}`;
  });
}
