import { AXES, AXIS_LABELS, VibeVector } from "@/lib/types";
import { toChartScale } from "@/lib/scoring";

const SIZE = 380;
const CENTER = SIZE / 2;
const RADIUS = 118;
const RINGS = [0.2, 0.4, 0.6, 0.8, 1];

function pointFor(index: number, magnitude: number) {
  // Start at top (-90deg), go clockwise, 5 axes evenly spaced.
  const angle = -Math.PI / 2 + (index * 2 * Math.PI) / AXES.length;
  const r = magnitude * RADIUS;
  return {
    x: CENTER + r * Math.cos(angle),
    y: CENTER + r * Math.sin(angle),
  };
}

export default function RadarChart({ vector }: { readonly vector: VibeVector }) {
  const values = AXES.map((axis) => toChartScale(vector[axis]) / 10); // 0..1

  const dataPoints = values.map((v, i) => pointFor(i, v));
  const dataPath = dataPoints.map((p) => `${p.x},${p.y}`).join(" ");

  return (
    <svg viewBox={`0 0 ${SIZE} ${SIZE + 40}`} className="w-full max-w-sm mx-auto" role="img" aria-label="Personality vibe diagram">
      <g transform="translate(0, 10)">
        {/* Concentric rings */}
        {RINGS.map((r) => {
          const ringPoints = AXES.map((_, i) => pointFor(i, r));
          const path = ringPoints.map((p) => `${p.x},${p.y}`).join(" ");
          return (
            <polygon
              key={r}
              points={path}
              fill="none"
              stroke="#987DB9"
              strokeOpacity={0.25}
              strokeWidth={1}
            />
          );
        })}
  
        {/* Axis spokes + labels */}
        {AXES.map((axis, i) => {
          const outer = pointFor(i, 1.18);
          const labelPoint = pointFor(i, 1.34);
          const { name } = AXIS_LABELS[axis];
          return (
            <g key={axis}>
              <line
                x1={CENTER}
                y1={CENTER}
                x2={outer.x}
                y2={outer.y}
                stroke="#987DB9"
                strokeOpacity={0.35}
                strokeWidth={1}
              />
              <text
                x={labelPoint.x}
                y={labelPoint.y}
                textAnchor="middle"
                dominantBaseline="middle"
                className="fill-ink-soft font-mono"
                style={{ fontSize: 10, letterSpacing: "0.06em", textTransform: "uppercase" }}
              >
                {name}
              </text>
            </g>
          );
        })}

        {/* Data polygon */}
        <polygon
          points={dataPath}
          fill="#987DB9"
          fillOpacity={0.35}
          stroke="#987DB9"
          strokeWidth={2}
          strokeLinejoin="round"
        />
        {dataPoints.map((p, i) => (
          <circle key={i + 1} cx={p.x} cy={p.y} r={3.5} fill="#987DB9" stroke="#987DB9" strokeWidth={1} />
        ))}

        {/* Center mark */}
        <circle cx={CENTER} cy={CENTER} r={2} fill="#987DB9" />
      </g>
    </svg>
  );
}
