"use client";

import Link from "next/link";

import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";
import {
  motion,
  useReducedMotion,
} from "framer-motion";
import { ChevronRight } from "lucide-react";

type Crumb = { label: string; href?: string };

type PageHeroProps = {
  title: string;
  eyebrow?: string;
  breadcrumbs?: Crumb[];
};

export function PageHero({ title, breadcrumbs, eyebrow }: PageHeroProps) {
  const reducedMotion = useReducedMotion() === true;

  return (
    <section className="relative flex min-h-[32vh] items-center bg-black pb-16 pt-32">
      <div className="container-site">
        {breadcrumbs && breadcrumbs.length ? (
          <motion.nav
            aria-label="Fil d'Ariane"
            variants={fadeUp({
              reducedMotion,
              narrowMotion: true,
            })}
            initial="hidden"
            animate="visible"
            className="mb-12 flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.42em] text-muted"
          >
            {breadcrumbs.map((crumb, index) => (
              <span key={`${crumb.label}-${index}`} className="flex items-center gap-3">
                {crumb.href ? (
                  <Link
                    prefetch={false}
                    href={crumb.href}
                    className="text-accent hover:text-white transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span>{crumb.label}</span>
                )}
                {index < breadcrumbs.length - 1 ? (
                  <ChevronRight className="h-4 w-4 text-accent" aria-hidden />
                ) : null}
              </span>
            ))}
          </motion.nav>
        ) : null}

        {eyebrow ? (
          <p className="mb-8 text-[11px] font-semibold uppercase tracking-[0.36em] text-accent">
            {eyebrow}
          </p>
        ) : null}

        <motion.h1
          variants={fadeUp({
            reducedMotion,
            narrowMotion: true,
          })}
          initial="hidden"
          animate="visible"
          className={cn(
            "text-clamp-h2 font-display uppercase leading-none text-white",
          )}
        >
          {title}
        </motion.h1>
      </div>
    </section>
  );
}
