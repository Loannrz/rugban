"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  Building2,
  Cookie,
  Copyright,
  Globe,
  Mail,
  Phone,
  Scale,
  Server,
  Shield,
  UserRound,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { ViewportReveal } from "@/components/ui/ViewportReveal";
import { legalMeta, legalSections } from "@/data/legal";
import { siteConfig } from "@/data/navigation";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { useIsNarrowMotion } from "@/lib/useMediaQuery";

const sectionIcons: Record<string, LucideIcon> = {
  editeur: Building2,
  publication: UserRound,
  contact: Mail,
  hebergement: Server,
  propriete: Copyright,
  donnees: Shield,
  cookies: Cookie,
  responsabilite: Globe,
  droit: Scale,
};

export function MentionsLegalesSection() {
  const reducedMotion = useReducedMotion() === true;
  const narrowMotion = useIsNarrowMotion();
  const motionPrefs = { reducedMotion, narrowMotion };

  return (
    <section className="section-y relative overflow-hidden border-t border-white/10 bg-black text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-accent/10 blur-[100px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-lime/6 blur-[80px]"
      />

      <div className="container-site relative">
        <ViewportReveal staggerChildren className="space-y-10 lg:space-y-12">
          <motion.div variants={fadeUp(motionPrefs)} className="max-w-3xl space-y-4">
            <SectionLabel label="Informations légales" />
            <p className="text-base leading-relaxed text-muted lg:text-lg">
              Transparence éditoriale, hébergement, propriété intellectuelle et
              traitement des données pour le site officiel de Rugby Urban
              Attitude.
            </p>
            <p className="text-xs uppercase tracking-[0.22em] text-white/45">
              Dernière mise à jour : {legalMeta.lastUpdated}
            </p>
          </motion.div>

          <motion.aside
            variants={fadeUp(motionPrefs)}
            className="relative overflow-hidden border border-accent/35 bg-gradient-to-br from-blue-dark via-[#0f2848] to-black p-8 lg:p-10"
          >
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,255,0,0.1),transparent_55%)]"
            />
            <div className="relative grid gap-8 lg:grid-cols-[1.2fr_auto] lg:items-center">
              <div className="space-y-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-lime">
                  Coordonnées éditoriales
                </p>
                <h2 className="font-display text-2xl uppercase leading-tight text-white lg:text-3xl">
                  {siteConfig.fullName}
                </h2>
                <p className="max-w-xl text-sm leading-relaxed text-white/70">
                  {siteConfig.addressLine}, {siteConfig.postcode}{" "}
                  {siteConfig.city}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  prefetch={false}
                  href={siteConfig.phoneHref}
                  className="inline-flex items-center gap-3 border border-white/20 bg-black/30 px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:border-accent hover:text-accent"
                >
                  <Phone aria-hidden className="h-4 w-4 shrink-0" />
                  {siteConfig.phone}
                </Link>
                {siteConfig.emails.map((entry) => (
                  <Link
                    key={entry.address}
                    prefetch={false}
                    href={entry.href}
                    className="inline-flex items-center gap-3 border border-white/20 bg-black/30 px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:border-lime hover:text-lime"
                  >
                    <Mail aria-hidden className="h-4 w-4 shrink-0" />
                    {entry.address}
                  </Link>
                ))}
              </div>
            </div>
          </motion.aside>

          <div className="grid gap-10 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-12 xl:grid-cols-[260px_minmax(0,1fr)]">
            <motion.nav
              variants={fadeUp(motionPrefs)}
              aria-label="Sommaire des mentions légales"
              className="lg:sticky lg:top-28 lg:self-start"
            >
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-accent">
                Sommaire
              </p>
              <ul className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:gap-1 lg:overflow-visible lg:pb-0">
                {legalSections.map((section) => (
                  <li key={section.id} className="shrink-0 lg:shrink">
                    <a
                      href={`#${section.id}`}
                      className="block whitespace-nowrap border border-white/10 bg-white/[0.03] px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/75 transition-colors hover:border-accent/40 hover:text-accent lg:whitespace-normal"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.nav>

            <ViewportReveal variants={staggerContainer(reducedMotion, 0.08)}>
              <div className="space-y-5">
                {legalSections.map((section, index) => {
                  const Icon = sectionIcons[section.id] ?? Building2;

                  return (
                    <motion.article
                      key={section.id}
                      id={section.id}
                      variants={fadeUp(motionPrefs)}
                      className="scroll-mt-28 border border-white/12 bg-gradient-to-br from-[#161616] via-[#101010] to-black p-7 lg:p-8"
                    >
                      <div className="flex items-start gap-4">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-accent/35 bg-black/40 text-accent">
                          <Icon aria-hidden className="h-5 w-5" />
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-accent">
                            {String(index + 1).padStart(2, "0")}
                          </p>
                          <h2 className="mt-2 font-display text-xl uppercase leading-tight text-white lg:text-2xl">
                            {section.title}
                          </h2>
                        </div>
                      </div>

                      <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted lg:text-[15px]">
                        {section.paragraphs.map((paragraph) => (
                          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                        ))}
                        {section.bullets ? (
                          <ul className="list-disc space-y-2 pl-5 marker:text-accent">
                            {section.bullets.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </ViewportReveal>
          </div>
        </ViewportReveal>
      </div>
    </section>
  );
}
