import Header6 from "@/components/headings/Header6";
import { Badge } from "@/components/ui/badge";
import { AXES, AXIS_LABELS, VibeVector } from "@/lib/types";
import AxisBar from "./AxisBar";
import Paragraph from "@/components/headings/Paragraph";

function readingFor(axis: keyof typeof AXIS_LABELS, value: number) {
  const { low, high } = AXIS_LABELS[axis];
  if (Math.abs(value) < 0.15) return "Right in the middle";
  const strength = Math.abs(value) > 0.6 ? "Strongly" : "More";
  const direction = value > 0 ? high : low;

  console.log(value);

  return `${strength} ${direction.toLowerCase()}`;
}

export default function AxisLegend({
  vector,
}: {
  readonly vector: VibeVector;
}) {
  return (
    <div className="grid sm:grid-cols-2 gap-10">
      {AXES.map((axis) => {
        const { name, description } = AXIS_LABELS[axis];
        return (
          <div key={axis}>
            <div className="flex items-baseline justify-between gap-3 mb-1">
              <Header6  text={name} className="font-medium"/>
              <Badge className="text-xs sm:text-sm">
                {readingFor(axis, vector[axis])}
              </Badge>
            </div>
            <Paragraph text={description} />
            <div className="mt-3">
              <AxisBar axis={axis} vector={vector} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
