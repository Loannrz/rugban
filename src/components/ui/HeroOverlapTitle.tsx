"use client";

import { cn } from "@/lib/utils";

import { HeroStyledTitle } from "./HeroStyledTitle";

type HeroOverlapTitleProps = {
  className?: string;
};

export function HeroOverlapTitle({ className }: HeroOverlapTitleProps) {
  return (
    <HeroStyledTitle
      primary="L'insertion"
      baselinePrefix="par le"
      accent="rugby"
      srOnly="L'insertion par le rugby"
      className={cn(className)}
    />
  );
}
