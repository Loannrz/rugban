"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Briefcase,
  Handshake,
  Landmark,
  MapPinned,
  Network,
  UserRound,
  Users,
  type LucideIcon,
} from "lucide-react";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { ViewportReveal } from "@/components/ui/ViewportReveal";
import { siteAudiences } from "@/data/programs";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { useIsNarrowMotion } from "@/lib/useMediaQuery";

const audienceIcons: Record<
  (typeof siteAudiences)[number]["id"],
  LucideIcon
> = {
  jeunesse: Users,
  institutions: Landmark,
  collectivites: MapPinned,
  "france-travail": Briefcase,
  "missions-locales": Network,
  partenaires: Handshake,
  jeunes: UserRound,
};

type Audience = (typeof siteAudiences)[number];

function AudienceCard({
  audience,
  index,
  reducedMotion,
  narrowMotion,
}: {
  audience: Audience;
  index: number;
  reducedMotion: boolean;
  narrowMotion: boolean;
}) {
  const Icon = audienceIcons[audience.id];

  return (
    <motion.li
      variants={fadeUp({ reducedMotion, narrowMotion })}
      className="group relative flex h-full flex-col overflow-hidden border border-white/12 bg-gradient-to-br from-[#1c1c1c] via-[#121212] to-black p-7 transition-colors hover:border-white/22 lg:p-8"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,107,53,0.08),transparent_55%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <div
        aria-hidden
        className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-accent via-lime/60 to-transparent"
      />

      <div className="relative flex items-start justify-between gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-accent/35 bg-black/40 text-accent">
          <Icon aria-hidden className="h-5 w-5" />
        </span>
        <span className="font-display text-3xl leading-none text-white/10 transition-colors group-hover:text-white/20">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <h3 className="relative mt-7 font-display text-[clamp(1rem,2vw,1.25rem)] uppercase leading-tight tracking-[0.02em]">
        {audience.label}
      </h3>
      <p className="relative mt-4 flex-1 text-sm leading-relaxed text-muted lg:text-[15px]">
        {audience.text}
      </p>
    </motion.li>
  );
}

export function NosActionsAudiencesSection() {
  const reducedMotion = useReducedMotion() === true;
  const narrowMotion = useIsNarrowMotion();
  const motionPrefs = { reducedMotion, narrowMotion };

  const institutionalAudiences = siteAudiences.filter(
    (audience) => audience.id !== "jeunes",
  );
  const jeunesAudience = siteAudiences.find(
    (audience) => audience.id === "jeunes",
  );

  return (
    <section className="section-y relative overflow-hidden border-t border-white/10 bg-black text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-accent/8 blur-[100px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 top-1/3 h-48 w-48 rounded-full bg-lime/5 blur-[90px]"
      />

      <div className="container-site relative space-y-12 lg:space-y-16">
        <ViewportReveal staggerChildren>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
            <motion.div
              variants={fadeUp(motionPrefs)}
              className="space-y-5 lg:col-span-5"
            >
              <SectionLabel label="Publics visés" />
              <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] uppercase leading-[0.95]">
                À qui s&apos;adresse le site
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp(motionPrefs)}
              className="space-y-5 lg:col-span-7"
            >
              <p className="max-w-2xl text-base leading-relaxed text-muted lg:text-[15px]">
                Structures jeunesse, institutions, collectivités, France
                Travail, missions locales, partenaires et jeunes de 16 à 25 ans
                pour la Prépa Sport.
              </p>
              <p className="inline-flex border border-white/15 bg-white/[0.03] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/80">
                7 publics · partenaires &amp; jeunes
              </p>
            </motion.div>
          </div>
        </ViewportReveal>

        <ViewportReveal variants={staggerContainer(reducedMotion, 0.08)}>
          <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3 xl:gap-6">
            {institutionalAudiences.map((audience, index) => (
              <AudienceCard
                key={audience.id}
                audience={audience}
                index={index}
                reducedMotion={reducedMotion}
                narrowMotion={narrowMotion}
              />
            ))}
          </ul>
        </ViewportReveal>

        {jeunesAudience ? (
          <ViewportReveal variants={fadeUp(motionPrefs)}>
            <article className="group relative overflow-hidden border border-lime/40 bg-gradient-to-br from-blue-dark via-[#0f2848] to-black p-8 lg:p-10">
              <div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,255,0,0.1),transparent_60%)]"
              />
              <div
                aria-hidden
                className="absolute -right-6 -top-6 h-28 w-28 rounded-full border border-lime/20"
              />
              <div
                aria-hidden
                className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-lime via-lime/50 to-transparent"
              />

              <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex max-w-2xl flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-lime/40 bg-black/40 text-lime">
                    <UserRound aria-hidden className="h-6 w-6" />
                  </span>
                  <div className="space-y-3">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-lime">
                      Public prioritaire
                    </p>
                    <h3 className="font-display text-[clamp(1.5rem,3.5vw,2.25rem)] uppercase leading-[0.95]">
                      {jeunesAudience.label}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted lg:text-base">
                      {jeunesAudience.text}
                    </p>
                  </div>
                </div>

                <Link
                  prefetch={false}
                  href="/prepa-sport"
                  className="group/link inline-flex shrink-0 items-center gap-2 self-start border border-lime/50 bg-lime/10 px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-lime transition-colors hover:border-lime hover:bg-lime hover:text-black lg:self-center"
                >
                  Découvrir la Prépa Sport
                  <ArrowUpRight
                    aria-hidden
                    className="h-4 w-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                  />
                </Link>
              </div>
            </article>
          </ViewportReveal>
        ) : null}
      </div>
    </section>
  );
}
