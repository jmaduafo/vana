import { Axis, AXIS_LABELS, VibeVector } from "@/lib/types";
import { toBarPercent } from "@/lib/scoring";
import { Progress } from "@/components/ui/progress";
import SmallParagraph from "@/components/headings/SmallParagraph";

export default function AxisBar({
  axis,
  vector,
}: {
  readonly axis: Axis;
  readonly vector: VibeVector;
}) {
  const { low, high } = AXIS_LABELS[axis];
  const percent = toBarPercent(axis, vector[axis]);

  return (
    <div>
      <Progress value={percent}/>
      <div className="flex justify-between mt-1 text-xs">
        <SmallParagraph text={low}/>
        <SmallParagraph text={high}/>
      </div>
    </div>
  );
}
