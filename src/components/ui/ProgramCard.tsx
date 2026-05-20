"use client";

import { motion, useReducedMotion } from "framer-motion";

import type { Program } from "@/data/programs";
import { programIcons } from "@/data/programs";
import { fadeUp } from "@/lib/animations";
import { useIsNarrowMotion } from "@/lib/useMediaQuery";
import { cn } from "@/lib/utils";

type ProgramCardProps = {
  program: Program;
  className?: string;
  featured?: boolean;
};

export function ProgramCard({
  program,
  className,
  featured,
}: ProgramCardProps) {
  const reducedMotion = useReducedMotion() === true;
  const narrowMotion = useIsNarrowMotion();

  const Icon = programIcons[program.icon];

  return (
    <motion.article
      variants={fadeUp({ reducedMotion, narrowMotion })}
      className={cn(
        "group relative isolate flex h-[360px] min-h-[360px] w-full flex-col justify-between gap-8 overflow-hidden border-[0.5px] border-white/14 bg-[#1a1a1a] p-8 pb-10 transition-colors duration-300 hover:-translate-y-1 hover:border-accent",
        featured && "ring-2 ring-accent",
        className,
      )}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute right-10 top-4 font-display text-[80px] font-bold leading-none text-white/[0.08]"
      >
        {String(program.number).padStart(2, "0")}
      </span>
      <div className="flex items-start gap-6">
        <div className="flex h-12 w-12 items-center justify-center border border-accent/40 bg-black/70 text-accent">
          <Icon className="h-7 w-7" aria-hidden />
        </div>
        <div className="space-y-3">
          <h3 className="font-display text-[28px] uppercase leading-none text-white">
            {program.name}
          </h3>
          <div className="flex flex-wrap gap-2 pt-4">
            {program.tags.map((tag) => (
              <span
                key={`${program.id}-${tag}`}
                className="rounded-[4px] border border-muted px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <p className="line-clamp-4 text-base leading-relaxed text-muted">
        {program.description}
      </p>
    </motion.article>
  );
}
