import { Spot } from "@/lib/types";

export default function SpotCard({ spot, index }: { readonly spot: Spot; readonly index: number }) {
  return (
    <div className="relative border border-ink-soft/20 bg-paper rounded-md p-6 flex flex-col gap-3">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-xl leading-tight text-ink">{spot.name}</h3>
        <span className="shrink-0 font-mono text-[10px] tracking-widest uppercase text-brass border border-brass/40 rounded-full px-2 py-1">
          {spot.category}
        </span>
      </div>
      {spot.neighborhood ? (
        <p className="font-mono text-[11px] tracking-widest uppercase text-ink-soft/50">{spot.neighborhood}</p>
      ) : null}
      <p className="text-[15px] leading-relaxed text-ink-soft">{spot.description}</p>
      <div className="mt-auto pt-3 border-t border-ink-soft/10">
        <p className="text-[13px] leading-relaxed text-moss-dark italic">{spot.whyItFits}</p>
      </div>
      <span className="absolute -top-2 -left-2 font-mono text-[10px] text-paper bg-ink-soft/70 rounded-full w-5 h-5 flex items-center justify-center">
        {index + 1}
      </span>
    </div>
  );
}
