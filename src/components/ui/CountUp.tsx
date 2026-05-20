"use client";

import { useInView } from "react-intersection-observer";

import { useCountUp } from "@/lib/useCountUp";
import { cn } from "@/lib/utils";

type CountUpProps = {
  end: number;
  suffix?: string;
  ariaLabel?: string;
  className?: string;
};

export function CountUpNumber({
  end,
  suffix = "",
  ariaLabel,
  className,
}: CountUpProps) {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  const value = useCountUp({
    startWhen: inView,
    end,
    duration: 1600,
  });

  return (
    <span
      ref={ref}
      aria-label={ariaLabel}
      className={cn(className)}
      suppressHydrationWarning
    >
      {value}
      {suffix}
    </span>
  );
}
