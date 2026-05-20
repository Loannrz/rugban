"use client";

import { motion, useReducedMotion } from "framer-motion";

import { fadeLeft } from "@/lib/animations";
import { useIsNarrowMotion } from "@/lib/useMediaQuery";
import { cn } from "@/lib/utils";

import { CountUpNumber } from "./CountUp";

type StatCardProps = {
  value: number;
  suffix?: string;
  label: string;
  description?: string;
  theme?: "dark" | "light";
};

export function StatCard({
  value,
  suffix,
  label,
  description,
  theme = "dark",
}: StatCardProps) {
  const reducedMotion = useReducedMotion() === true;
  const narrowMotion = useIsNarrowMotion();

  return (
    <motion.div
      variants={fadeLeft({ reducedMotion, narrowMotion })}
      className={cn(
        "relative flex flex-col gap-6 border-white/14 py-12 pr-10",
        theme === "light"
          ? "border border-black/10 text-ink bg-transparent"
          : "border-b border-neutral-900 text-white lg:border lg:border-transparent lg:border-neutral-900",
      )}
    >
      <CountUpNumber
        end={value}
        suffix={suffix}
        className={cn(
          "block font-display text-[clamp(3.25rem,9vw,6.5rem)] leading-[0.88] tracking-[0.02em]",
          theme === "light" ? "text-ink" : "text-white",
        )}
      />
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
          {label}
        </p>
        {description ? (
          <p className="text-base text-muted/90">{description}</p>
        ) : null}
      </div>
    </motion.div>
  );
}
