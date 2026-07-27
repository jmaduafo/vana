import { Spot } from "@/lib/types";
import Header4 from "../headings/Header4";
import SmallParagraph from "../headings/SmallParagraph";
import Paragraph from "../headings/Paragraph";
import { Badge } from "../ui/badge";

export default function SpotCard({
  spot,
  index,
}: {
  readonly spot: Spot;
  readonly index: number;
}) {
  return (
    <div className="relative border border-foreground/10 rounded-md p-6 flex flex-col gap-3">
      <div className="flex items-start justify-between gap-3">
        <Header4 text={spot.name} />
        <Badge variant={"outline"}>{spot.category}</Badge>
      </div>
      {spot.neighborhood ? (
        <SmallParagraph className="-mt-2 text-xs" text={`${spot.neighborhood}`} />
      ) : null}
      <Paragraph text={spot.description} />
      <div className="mt-auto pt-3 border-t border-t-foreground/10">
        <SmallParagraph className="italic" text={spot.whyItFits} />
      </div>
      <div className="absolute -top-2 -left-2 bg-accent/90 rounded-full size-6 flex items-center justify-center">
        <SmallParagraph text={`${index + 1}`} />
      </div>
    </div>
  );
}
