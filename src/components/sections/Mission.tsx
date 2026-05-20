"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";

import { fadeLeft, fadeRight } from "@/lib/animations";
import { useIsNarrowMotion } from "@/lib/useMediaQuery";

import { SectionLabel } from "../ui/SectionLabel";
import { ViewportReveal } from "../ui/ViewportReveal";

const missionImage =
  "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1800&q=80";

export function MissionSection() {
  const reducedMotion = useReducedMotion() === true;
  const narrowMotion = useIsNarrowMotion();

  return (
    <section className="section-y bg-bg-muted">
      <div className="container-site grid gap-14 lg:grid-cols-[7fr_5fr] lg:gap-24">
        <ViewportReveal
          variants={fadeLeft({ reducedMotion, narrowMotion })}
          className="relative min-h-[480px]"
        >
          <div className="relative h-[420px] w-full overflow-hidden border border-muted/70 lg:h-full lg:max-h-none">
            <Image
              src={missionImage}
              alt="Entraîneur saluant des jeunes sur un terrain de rugby"
              fill
              sizes="(min-width: 1024px) 820px, 100vw"
              className="object-cover grayscale-[0.2]"
              quality={82}
              priority={false}
            />
            <div
              aria-hidden
              className="absolute inset-0 rounded-none bg-black/35"
            />
          </div>
          <motion.div
            className="absolute bottom-[-18px] right-[-48px] w-[420px] max-w-[80vw]"
            initial={{
              rotate: reducedMotion ? 0 : 12,
              opacity: reducedMotion ? 1 : 0,
            }}
            animate={{ rotate: reducedMotion ? 0 : -8, opacity: 1 }}
            transition={{ duration: reducedMotion ? 0 : 0.8 }}
          >
            <div className="bg-accent px-12 py-4 text-[12px] font-semibold uppercase tracking-[0.4em] text-ink shadow-[0px_35px_60px_rgba(0,0,0,.6)]">
              Depuis 2006
            </div>
          </motion.div>
        </ViewportReveal>

        <ViewportReveal
          variants={fadeRight({ reducedMotion, narrowMotion })}
          className="flex flex-col justify-center gap-10"
        >
          <SectionLabel label="qui sommes-nous" />
          <h2 className="font-display text-clamp-h2 uppercase text-white">
            Le rugby comme outil d&apos;émancipation
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            L&apos;association utilise le rugby comme média d&apos;insertion sociale auprès des jeunes
            issus des quartiers prioritaires de la politique de la ville d&apos;Île-de-France. Des éducateurs
            socio-sportifs, des interventions gratuites depuis 2006.
          </p>
          <ul className="space-y-6 text-base text-muted">
            {[
              "Interventions 100 % gratuites",
              "6 départements franciliens mobilisés",
              "Jeunes régulièrement éloignés de l'emploi",
            ].map((bullet) => (
              <li key={bullet} className="flex items-start gap-3 text-primary">
                <MapPin aria-hidden className="mt-[3px] h-6 w-6 text-accent" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <Link
            prefetch={false}
            href="/nos-actions"
            className="group inline-flex items-center gap-3 text-accent"
          >
            En savoir plus
            <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-3" aria-hidden />
          </Link>
        </ViewportReveal>
      </div>
    </section>
  );
}
