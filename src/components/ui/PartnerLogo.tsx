"use client";

import Link from "next/link";

import type { Partner } from "@/data/partners";
import { cn } from "@/lib/utils";

type PartnerLogoProps = {
  partner: Partner;
  className?: string;
};

export function PartnerLogo({ partner, className }: PartnerLogoProps) {
  const content = (
    <div className="group flex aspect-[16/10] w-full flex-col justify-center border border-muted/70 bg-black/40 px-4 py-8 text-center">
      <div className="mx-auto mb-6 flex h-16 w-full max-w-[200px] items-center justify-center border border-accent/35 bg-black/70 font-display text-3xl uppercase tracking-[0.4em] text-white transition duration-500 group-hover:bg-accent">
        <span className="grayscale transition duration-500 group-hover:grayscale-0">
          {partner.initials.slice(0, 3)}
        </span>
      </div>
      <p className="text-[11px] uppercase tracking-[0.18em] text-muted transition duration-500 group-hover:text-white">
        {partner.name}
      </p>
    </div>
  );

  const wrapperClasses = cn(
    "partner-logo block grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 focus-visible:opacity-100 opacity-75",
    className,
  );

  if (partner.website) {
    return (
      <Link href={partner.website} prefetch={false} className={wrapperClasses}>
        {content}
      </Link>
    );
  }

  return <div className={wrapperClasses}>{content}</div>;
}
