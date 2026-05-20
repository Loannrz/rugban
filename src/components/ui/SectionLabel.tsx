import { cn } from "@/lib/utils";

type SectionLabelProps = {
  label: string;
  className?: string;
  muted?: boolean;
};

export function SectionLabel({
  label,
  className,
  muted,
}: SectionLabelProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.2em]",
        muted ? "text-muted" : "text-accent",
        className,
      )}
    >
      <span aria-hidden className="h-[2px] w-12 bg-accent" />
      {label}
    </span>
  );
}
