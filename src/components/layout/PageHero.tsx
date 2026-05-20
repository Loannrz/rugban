"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { fadeUp } from "@/lib/animations";
import {
  HeroStyledTitle,
  splitHeroTitle,
} from "@/components/ui/HeroStyledTitle";

type Crumb = { label: string; href?: string };

type PageHeroProps = {
  title: string;
  eyebrow?: string;
  breadcrumbs?: Crumb[];
};

export function PageHero({ title, breadcrumbs, eyebrow }: PageHeroProps) {
  const reducedMotion = useReducedMotion() === true;
  const { primary, accent } = splitHeroTitle(title);

  return (
    <section className="relative isolate flex min-h-[100dvh] min-h-screen flex-col overflow-x-clip bg-black text-white">
      <div className="container-site relative flex min-h-[100dvh] min-h-screen flex-col pt-[4.75rem] lg:pt-[5.25rem]">
        <div className="relative z-20 shrink-0 space-y-4 lg:pl-8 xl:pl-10">
          {breadcrumbs && breadcrumbs.length ? (
            <motion.nav
              aria-label="Fil d'Ariane"
              variants={fadeUp({
                reducedMotion,
                narrowMotion: true,
              })}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-muted sm:text-[11px]"
            >
              {breadcrumbs.map((crumb, index) => (
                <span key={`${crumb.label}-${index}`} className="flex items-center gap-2">
                  {crumb.href ? (
                    <Link
                      prefetch={false}
                      href={crumb.href}
                      className="text-accent transition-colors hover:text-white"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span>{crumb.label}</span>
                  )}
                  {index < breadcrumbs.length - 1 ? (
                    <ChevronRight className="h-3.5 w-3.5 text-accent" aria-hidden />
                  ) : null}
                </span>
              ))}
            </motion.nav>
          ) : null}

          {eyebrow ? (
            <motion.p
              variants={fadeUp({
                reducedMotion,
                narrowMotion: true,
              })}
              initial="hidden"
              animate="visible"
              className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent sm:text-[11px]"
            >
              {eyebrow}
            </motion.p>
          ) : null}
        </div>

        <div className="relative z-10 flex min-h-0 flex-1 flex-col items-center justify-center overflow-visible px-1 py-8 lg:px-0 lg:py-0">
          <HeroStyledTitle
            primary={primary}
            accent={accent ?? undefined}
            srOnly={title}
            className="pointer-events-auto w-full max-w-full"
          />
        </div>
      </div>
    </section>
  );
}
