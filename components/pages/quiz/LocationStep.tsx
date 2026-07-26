import Header5 from "@/components/headings/Header5";
import Paragraph from "@/components/headings/Paragraph";
import { Input } from "@/components/ui/input";

export default function LocationStep({
  value,
  onChange,
}: {
  readonly value: string;
  readonly onChange: (v: string) => void;
}) {
  return (
    <div>
      <p className="text-[13px] uppercase mb-3">09 — Last Thing</p>
      <Header5 text="Where should we go scouting?" />
      <Paragraph
        className="mb-8"
        text="A city and neighborhood works, or just a city. We'll find the spots."
      />
      <Input
        autoFocus
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="e.g. London, UK or Wicker Park, Chicago"
        className="w-full py-5 px-4"
      />
    </div>
  );
}
