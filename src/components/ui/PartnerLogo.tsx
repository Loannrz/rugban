"use client";

import Image from "next/image";
import Link from "next/link";

import type { Partner } from "@/data/partners";
import { cn } from "@/lib/utils";

type PartnerLogoProps = {
  partner: Partner;
  className?: string;
};

export function PartnerLogo({ partner, className }: PartnerLogoProps) {
  const content = (
    <div className="relative">
      <div
        className={cn(
          "relative z-10 overflow-hidden rounded-xl",
          "border border-white/15 bg-white",
          "shadow-[0_10px_28px_rgba(0,0,0,0.22)]",
          "transition-all duration-300 ease-out",
          "group-hover:-translate-y-0.5 group-hover:translate-x-1.5 group-hover:scale-[1.035]",
          "group-hover:border-accent/45 group-hover:shadow-[0_18px_36px_rgba(0,0,0,0.32)]",
          "group-focus-visible:-translate-y-0.5 group-focus-visible:translate-x-1.5 group-focus-visible:scale-[1.035]",
          "group-focus-visible:border-accent/45 group-focus-visible:shadow-[0_18px_36px_rgba(0,0,0,0.32)]",
        )}
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" />

        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center p-5">
            {partner.logoPending || !partner.logo ? (
              <span className="font-display text-2xl uppercase tracking-[0.12em] text-ink/55">
                {partner.initials}
              </span>
            ) : (
              <Image
                src={partner.logo}
                alt={partner.name}
                width={220}
                height={80}
                className={cn(
                  "max-h-full max-w-[88%] w-auto object-contain",
                  partner.logoClassName,
                )}
              />
            )}
          </div>
        </div>
      </div>

      <p
        className={cn(
          "pointer-events-none absolute inset-x-0 top-full z-20 mt-3",
          "text-center text-[11px] uppercase tracking-[0.2em] text-white",
          "translate-y-[-120%] opacity-0",
          "transition-all duration-300 ease-out",
          "group-hover:translate-y-0 group-hover:opacity-100",
          "group-focus-visible:translate-y-0 group-focus-visible:opacity-100",
        )}
      >
        <span className="inline-block rounded-full border border-white/15 bg-[#242424]/95 px-3 py-1.5 shadow-lg backdrop-blur-sm">
          {partner.name}
        </span>
      </p>
    </div>
  );

  const wrapperClasses = cn("partner-logo group relative block", className);

  if (partner.website) {
    return (
      <Link href={partner.website} prefetch={false} className={wrapperClasses}>
        {content}
      </Link>
    );
  }

  return <div className={wrapperClasses}>{content}</div>;
}
