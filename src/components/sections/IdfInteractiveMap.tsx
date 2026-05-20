"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

import { idfTerritories, type IdfTerritory } from "@/data/idfTerritories";
import { cn } from "@/lib/utils";

function MapPin({
  territory,
  isActive,
  onActivate,
  onDeactivate,
  reducedMotion,
}: {
  territory: IdfTerritory;
  isActive: boolean;
  onActivate: () => void;
  onDeactivate: () => void;
  reducedMotion: boolean;
}) {
  return (
    <g
      className="cursor-pointer"
      onMouseEnter={onActivate}
      onMouseLeave={onDeactivate}
      onFocus={onActivate}
      onBlur={onDeactivate}
      onClick={onActivate}
      role="button"
      tabIndex={0}
      aria-label={`${territory.name} — ${territory.city}`}
    >
      {!reducedMotion && isActive ? (
        <motion.circle
          cx={territory.x}
          cy={territory.y}
          r={22}
          className="fill-accent/20"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.6, opacity: 0 }}
        />
      ) : null}

      <motion.circle
        cx={territory.x}
        cy={territory.y}
        r={isActive ? 7 : 5}
        className={cn(
          "stroke-[2px] transition-colors duration-300",
          territory.isHub
            ? isActive
              ? "fill-accent stroke-accent"
              : "fill-accent/80 stroke-accent"
            : isActive
              ? "fill-lime stroke-lime"
              : "fill-white stroke-white/90",
        )}
        animate={reducedMotion ? undefined : { scale: isActive ? 1.15 : 1 }}
        transition={{ type: "spring", stiffness: 420, damping: 24 }}
      />

      <circle
        cx={territory.x}
        cy={territory.y}
        r={isActive ? 12 : 0}
        className="fill-transparent stroke-accent/40 stroke-[1px]"
      />
    </g>
  );
}

export function IdfInteractiveMap() {
  const reducedMotion = useReducedMotion() === true;
  const [activeId, setActiveId] = useState<string>("paris");
  const active =
    idfTerritories.find((territory) => territory.id === activeId) ??
    idfTerritories[0];

  return (
    <div className="relative overflow-hidden border border-white/12 bg-gradient-to-br from-[#161616] via-[#101010] to-black">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_50%_40%,rgba(255,107,53,0.08),transparent_60%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]"
      />

      <div className="relative grid gap-0 lg:grid-cols-[1fr_minmax(0,0.95fr)]">
        <div className="relative min-h-[320px] p-4 sm:p-6 lg:min-h-[420px]">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.32em] text-accent">
            Carte interactive — Île-de-France
          </p>

          <svg
            viewBox="0 0 500 420"
            className="h-full w-full"
            aria-label="Carte stylisée de la France avec zoom sur l'Île-de-France"
          >
            <path
              d="M 72 118 C 48 92, 58 58, 96 44 C 138 28, 178 36, 210 58 C 248 38, 298 42, 328 68 C 362 52, 402 64, 418 98 C 442 118, 448 158, 430 188 C 452 228, 438 272, 402 292 C 408 328, 382 358, 342 368 C 318 398, 268 408, 228 392 C 188 408, 138 398, 108 368 C 72 358, 48 328, 58 292 C 28 268, 32 228, 52 198 C 38 168, 48 138, 72 118 Z"
              className="fill-white/[0.02] stroke-white/10"
              strokeWidth="1.5"
            />

            <path
              d="M 148 248 C 168 198, 218 168, 268 178 C 318 168, 358 198, 368 248 C 378 288, 348 328, 298 338 C 248 348, 198 328, 168 288 C 148 268, 138 268, 148 248 Z"
              className="fill-accent/[0.04] stroke-accent/25"
              strokeWidth="1.25"
              strokeDasharray="6 8"
            />

            <path
              d="M 168 258 C 188 212, 232 188, 278 198 C 324 188, 352 218, 348 258 C 344 298, 308 318, 268 312 C 228 318, 192 298, 178 268 C 168 258, 168 258, 168 258 Z"
              className="fill-white/[0.03] stroke-white/20"
              strokeWidth="1"
            />

            {idfTerritories.map((territory) => (
              <MapPin
                key={territory.id}
                territory={territory}
                isActive={activeId === territory.id}
                reducedMotion={reducedMotion}
                onActivate={() => setActiveId(territory.id)}
                onDeactivate={() => setActiveId("paris")}
              />
            ))}
          </svg>

          <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-muted">
            Survolez un pin pour explorer le territoire
          </p>
        </div>

        <div className="relative border-t border-white/10 p-6 sm:p-8 lg:border-l lg:border-t-0">
          <div
            aria-hidden
            className="absolute left-0 top-0 hidden h-full w-[3px] bg-gradient-to-b from-accent via-lime/70 to-transparent lg:block"
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={reducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reducedMotion ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="flex h-full flex-col justify-center"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-accent">
                {active.isHub ? "Siège & relais" : "Référence locale"}
              </p>
              <h3 className="mt-3 font-display text-[clamp(1.75rem,4vw,2.75rem)] uppercase leading-none text-white">
                {active.name}
              </h3>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-lime">
                {active.city}
              </p>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-muted">
                {active.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {idfTerritories.map((territory) => (
                  <button
                    key={territory.id}
                    type="button"
                    onMouseEnter={() => setActiveId(territory.id)}
                    onFocus={() => setActiveId(territory.id)}
                    onClick={() => setActiveId(territory.id)}
                    className={cn(
                      "border px-2.5 py-1 text-[9px] uppercase tracking-[0.16em] transition-colors",
                      activeId === territory.id
                        ? "border-accent bg-accent/15 text-accent"
                        : "border-white/15 text-muted hover:border-white/30 hover:text-white",
                    )}
                  >
                    {territory.name}
                  </button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
