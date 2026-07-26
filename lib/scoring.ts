import { QUIZ_QUESTIONS } from "./quiz-data";
import { AXES, Axis, AxisRange, VibeVector } from "./types";

/**
 * For each axis, the best-case magnitude a fully-committed answer set could
 * produce. Used to normalize raw scores into a -1..1 range regardless of how
 * many questions happen to touch a given axis.
 */
function maxAxisMagnitudes(): Record<Axis, number> {
  const max: Record<Axis, number> = { social: 0, novelty: 0, pace: 0, aesthetic: 0, planning: 0 };
  for (const question of QUIZ_QUESTIONS) {
    for (const axis of AXES) {
      const best = Math.max(...question.options.map((o) => Math.abs(o.deltas[axis] ?? 0)));
      max[axis] += best;
    }
  }
  return max;
}

/**
 * answers[i] is the selected option index for QUIZ_QUESTIONS[i].
 */
export function computeVibeVector(answers: number[]): VibeVector {
  const raw: Record<Axis, number> = { social: 0, novelty: 0, pace: 0, aesthetic: 0, planning: 0 };

  QUIZ_QUESTIONS.forEach((question, i) => {
    const choiceIndex = answers[i];
    const option = question.options[choiceIndex];
    if (!option) return;
    for (const axis of AXES) {
      raw[axis] += option.deltas[axis] ?? 0;
    }
  });

  const max = maxAxisMagnitudes();
  const normalized: VibeVector = { social: 0, novelty: 0, pace: 0, aesthetic: 0, planning: 0 };
  for (const axis of AXES) {
    normalized[axis] = max[axis] === 0 ? 0 : clamp(raw[axis] / max[axis], -1, 1);
  }
  return normalized;
}

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

/**
 * The actual achievable normalized range per axis, given the current quiz
 * data. Not every axis can reach a full -1 or 1 — the option deltas aren't
 * perfectly symmetric, so e.g. the "loyal" end of Wander Index tops out well
 * short of -1 while the "restless" end can hit a full 1. Progress bars use
 * this range instead of a flat -1..1 assumption, otherwise a maxed-out
 * answer on a skewed axis would visually stop short of the end of the bar.
 */
export function axisRanges(): Record<Axis, AxisRange> {
  const magnitudes = maxAxisMagnitudes();
  const ranges = {} as Record<Axis, AxisRange>;

  for (const axis of AXES) {
    let rawMax = 0;
    let rawMin = 0;
    for (const question of QUIZ_QUESTIONS) {
      const deltas = question.options.map((o) => o.deltas[axis] ?? 0);
      rawMax += Math.max(...deltas);
      rawMin += Math.min(...deltas);
    }
    const magnitude = magnitudes[axis];
    ranges[axis] = {
      min: magnitude === 0 ? 0 : rawMin / magnitude,
      max: magnitude === 0 ? 0 : rawMax / magnitude,
    };
  }

  return ranges;
}

// Computed once at module load — the quiz data is static.
export const AXIS_RANGES = axisRanges();

/**
 * Maps a vibe vector value to a 0..100 position on a progress bar, scaled to
 * that specific axis's real achievable range rather than a flat -1..1.
 */
export function toBarPercent(axis: Axis, value: number): number {
  const { min, max } = AXIS_RANGES[axis];
  if (max === min) return 50;
  return clamp(((value - min) / (max - min)) * 100, 0, 100);
}

/** Maps a -1..1 vibe vector value to a 0..10 display scale for the radar chart. */
export function toChartScale(value: number): number {
  return (value + 1) * 5;
}
