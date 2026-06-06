"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

import { siteImages } from "@/data/siteImages";
import {
  Activity,
  ArrowUpRight,
  HeartPulse,
  Mail,
  Phone,
  Users,
} from "lucide-react";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { ViewportReveal } from "@/components/ui/ViewportReveal";
import {
  sportSanteActivities,
  sportSanteContact,
  sportSanteHistory,
  sportSanteProject,
  sportSantePublics,
} from "@/data/sportSante";
import { siteConfig } from "@/data/navigation";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { useIsNarrowMotion } from "@/lib/useMediaQuery";

export function SportSanteSection() {
  const reducedMotion = useReducedMotion() === true;
  const narrowMotion = useIsNarrowMotion();
  const motionPrefs = { reducedMotion, narrowMotion };

  return (
    <>
      <section className="section-y relative overflow-hidden bg-black text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-accent/10 blur-[100px]"
        />
        <div className="container-site relative grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="relative min-h-[280px] overflow-hidden border border-white/12 lg:col-span-5 lg:min-h-full">
            <Image
              src={siteImages.sportSanteRacing.src}
              alt={siteImages.sportSanteRacing.alt}
              fill
              sizes="(min-width: 1024px) 420px, 100vw"
              className="object-cover"
              quality={82}
            />
          </div>

          <ViewportReveal staggerChildren className="space-y-6 lg:col-span-7">
            <motion.div variants={fadeUp(motionPrefs)}>
              <SectionLabel label="Historique" />
            </motion.div>
            <motion.h2
              variants={fadeUp(motionPrefs)}
              className="font-display text-[clamp(2rem,5vw,3rem)] uppercase leading-[0.92]"
            >
              {sportSanteHistory.title}
            </motion.h2>
            <div className="space-y-4">
              {sportSanteHistory.paragraphs.map((paragraph) => (
                <motion.p
                  key={paragraph.slice(0, 40)}
                  variants={fadeUp(motionPrefs)}
                  className="text-base leading-relaxed text-muted lg:text-lg"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </ViewportReveal>
        </div>
      </section>

      <section className="section-y relative overflow-hidden border-t border-white/10 bg-black text-white">
        <div className="container-site relative grid gap-10 lg:grid-cols-12 lg:gap-12">
          <ViewportReveal
            variants={fadeUp(motionPrefs)}
            className="lg:col-span-5"
          >
            <div className="relative mb-8 min-h-[220px] overflow-hidden border border-white/12 lg:mb-0 lg:min-h-[300px]">
              <Image
                src={siteImages.courbevoieAnimation.src}
                alt={siteImages.courbevoieAnimation.alt}
                fill
                sizes="(min-width: 1024px) 420px, 100vw"
                className="object-cover"
                quality={82}
              />
            </div>
            <SectionLabel label="Le projet" />
            <h2 className="mt-4 font-display text-[clamp(1.75rem,4vw,2.75rem)] uppercase leading-[0.95]">
              {sportSanteProject.title}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted lg:text-lg">
              {sportSanteProject.text}
            </p>
          </ViewportReveal>

          <ViewportReveal
            variants={staggerContainer(reducedMotion, 0.1)}
            className="grid gap-5 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-1"
          >
            {sportSantePublics.map((publicItem, index) => (
              <motion.article
                key={publicItem.id}
                variants={fadeUp(motionPrefs)}
                className="border border-white/12 bg-gradient-to-br from-[#161616] via-[#101010] to-black p-7"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-accent">
                  Public {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-xl uppercase text-white">
                  {publicItem.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {publicItem.text}
                </p>
              </motion.article>
            ))}
          </ViewportReveal>
        </div>
      </section>

      <section className="section-y relative overflow-hidden border-t border-white/10 bg-black text-white">
        <div className="container-site relative grid gap-10 lg:grid-cols-2 lg:gap-12">
          <ViewportReveal variants={fadeUp(motionPrefs)}>
            <SectionLabel label="Activités" />
            <h2 className="mt-4 font-display text-[clamp(1.75rem,4vw,2.75rem)] uppercase leading-[0.95]">
              Ce que nous proposons
            </h2>
            <ul className="mt-8 space-y-4">
              {sportSanteActivities.map((activity) => (
                <li
                  key={activity}
                  className="flex gap-4 border border-white/10 bg-white/[0.03] p-5"
                >
                  <Activity
                    aria-hidden
                    className="mt-0.5 h-5 w-5 shrink-0 text-lime"
                  />
                  <p className="text-sm leading-relaxed text-muted lg:text-base">
                    {activity}
                  </p>
                </li>
              ))}
            </ul>
          </ViewportReveal>

          <ViewportReveal variants={fadeUp(motionPrefs)}>
            <aside className="relative overflow-hidden border border-accent/40 bg-gradient-to-br from-blue-dark via-[#0f2848] to-black p-8 lg:p-10">
              <div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,255,0,0.1),transparent_55%)]"
              />
              <div className="relative space-y-6">
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center border border-lime/40 bg-black/40 text-lime">
                    <HeartPulse aria-hidden className="h-5 w-5" />
                  </span>
                  <SectionLabel label="Contact" className="text-lime [&>span]:bg-lime" />
                </div>
                <h3 className="font-display text-2xl uppercase leading-tight text-white">
                  Modalités de contact
                </h3>
                <p className="text-sm leading-relaxed text-white/70">
                  {sportSanteContact.intro}
                </p>
                <p className="text-xs leading-relaxed text-white/55">
                  {sportSanteContact.note}
                </p>
                <div className="flex flex-col gap-3 pt-2">
                  <Link
                    prefetch={false}
                    href={siteConfig.phoneHref}
                    className="inline-flex items-center gap-3 border border-white/20 px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:border-accent hover:text-accent"
                  >
                    <Phone aria-hidden className="h-4 w-4" />
                    {siteConfig.phone}
                  </Link>
                  <Link
                    prefetch={false}
                    href={siteConfig.emailHref}
                    className="inline-flex items-center gap-3 border border-white/20 px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:border-lime hover:text-lime"
                  >
                    <Mail aria-hidden className="h-4 w-4" />
                    {siteConfig.email}
                  </Link>
                </div>
                <Link
                  prefetch={false}
                  href="/contact"
                  className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-accent transition-colors hover:text-white"
                >
                  Page contact
                  <ArrowUpRight
                    aria-hidden
                    className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </aside>
          </ViewportReveal>
        </div>
      </section>

      <section className="border-t border-white/10 bg-black py-10 text-white">
        <div className="container-site">
          <div className="flex items-start gap-4 border border-white/10 bg-white/[0.03] p-6">
            <Users aria-hidden className="mt-1 h-5 w-5 shrink-0 text-accent" />
            <p className="text-sm leading-relaxed text-muted">
              L&apos;axe sport citoyen est porté par{" "}
              <Link
                prefetch={false}
                href="/nos-actions"
                className="text-accent underline-offset-4 hover:underline"
              >
                Rugby Urban Attitude
              </Link>
              . Cet espace Sport Santé pourra évoluer pour développer
              davantage l&apos;offre à terme.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
