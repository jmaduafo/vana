import { QUIZ_QUESTIONS } from "./quiz-data";
import { AXES, Axis, VibeVector } from "./types";

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

/** Maps a -1..1 vibe vector value to a 0..10 display scale for the radar chart. */
export function toChartScale(value: number): number {
  return (value + 1) * 5;
}
