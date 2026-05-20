"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import { idfTerritories, type IdfTerritory } from "@/data/idfTerritories";
import {
  FRANCE_LOCATOR_VIEWBOX,
  IDF_MAP_VIEWBOX,
  franceLocatorOutline,
  idfDepartmentGuides,
  idfPetiteCouronne,
  idfRegionOutline,
  idfSeineRiver,
} from "@/data/idfMapPaths";
import { cn } from "@/lib/utils";

function MapPin({
  territory,
  isActive,
  onActivate,
  reducedMotion,
}: {
  territory: IdfTerritory;
  isActive: boolean;
  onActivate: () => void;
  reducedMotion: boolean;
}) {
  return (
    <g
      className="cursor-pointer"
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
      role="button"
      tabIndex={0}
      aria-label={`${territory.name} (${territory.code}) - ${territory.city}`}
      aria-pressed={isActive}
    >
      <motion.circle
        cx={territory.x}
        cy={territory.y}
        r={4.5}
        className={cn(
          "fill-white stroke-white/90",
          territory.isHub && isActive && "fill-accent stroke-accent",
        )}
        strokeWidth="1.5"
        animate={
          reducedMotion
            ? undefined
            : { r: isActive ? 6.5 : 4.5 }
        }
        transition={{ type: "spring", stiffness: 380, damping: 22 }}
      />

      <text
        x={territory.x}
        y={territory.y + 18}
        textAnchor="middle"
        className={cn(
          "pointer-events-none select-none text-[9px] font-semibold tracking-[0.1em]",
          isActive ? "fill-accent" : "fill-white/40",
        )}
      >
        {territory.code}
      </text>
    </g>
  );
}

function FranceLocator() {
  return (
    <svg
      viewBox={FRANCE_LOCATOR_VIEWBOX}
      className="h-[88px] w-[76px] shrink-0 opacity-90"
      aria-hidden
    >
      <path
        d={franceLocatorOutline}
        className="fill-white/[0.03] stroke-white/20"
        strokeWidth="1.2"
      />
      <rect
        x={59.8}
        y={32.5}
        width={16.5}
        height={17}
        className="fill-accent/25 stroke-accent"
        strokeWidth="1.2"
        rx="0.5"
      />
      <text
        x={68}
        y={44}
        textAnchor="middle"
        className="fill-accent text-[5px] font-semibold uppercase tracking-[0.08em]"
      >
        IDF
      </text>
    </svg>
  );
}

function useConnectorPath(
  activeTerritory: IdfTerritory,
  containerRef: React.RefObject<HTMLDivElement | null>,
  mapSvgRef: React.RefObject<SVGSVGElement | null>,
  titleRef: React.RefObject<HTMLHeadingElement | null>,
  enabled: boolean,
) {
  const [connector, setConnector] = useState<{
    path: string;
    endX: number;
    endY: number;
  } | null>(null);

  const updatePath = useCallback(() => {
    if (
      !enabled ||
      !containerRef.current ||
      !mapSvgRef.current ||
      !titleRef.current
    ) {
      setConnector(null);
      return;
    }

    const containerRect = containerRef.current.getBoundingClientRect();
    const ctm = mapSvgRef.current.getScreenCTM();

    if (!ctm) {
      setConnector(null);
      return;
    }

    const pinPoint = mapSvgRef.current.createSVGPoint();
    pinPoint.x = activeTerritory.x;
    pinPoint.y = activeTerritory.y;
    const pinScreen = pinPoint.matrixTransform(ctm);
    const pinX = pinScreen.x - containerRect.left;
    const pinY = pinScreen.y - containerRect.top;

    const titleRect = titleRef.current.getBoundingClientRect();
    const titleX = titleRect.left - containerRect.left - 6;
    const titleY = titleRect.top + titleRect.height / 2 - containerRect.top;

    const elbowY = Math.min(pinY, titleY) - 36;

    setConnector({
      path: `M ${pinX} ${pinY} L ${pinX} ${elbowY} L ${titleX} ${elbowY} L ${titleX} ${titleY}`,
      endX: titleX,
      endY: titleY,
    });
  }, [activeTerritory, containerRef, enabled, mapSvgRef, titleRef]);

  useLayoutEffect(() => {
    updatePath();

    const frame = requestAnimationFrame(updatePath);
    window.addEventListener("resize", updatePath);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", updatePath);
    };
  }, [updatePath, activeTerritory.id]);

  return connector;
}

export function IdfInteractiveMap() {
  const reducedMotion = useReducedMotion() === true;
  const [activeId, setActiveId] = useState<string>("paris");
  const [connectorEnabled, setConnectorEnabled] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const mapSvgRef = useRef<SVGSVGElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const active =
    idfTerritories.find((territory) => territory.id === activeId) ??
    idfTerritories[0];

  const connector = useConnectorPath(
    active,
    containerRef,
    mapSvgRef,
    titleRef,
    connectorEnabled && !reducedMotion,
  );

  useLayoutEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const sync = () => setConnectorEnabled(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  return (
    <div className="relative overflow-hidden border border-white/12 bg-gradient-to-br from-[#161616] via-[#101010] to-black">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_50%_42%,rgba(255,107,53,0.1),transparent_62%)]"
      />

      <div ref={containerRef} className="relative grid gap-0 lg:grid-cols-[1.15fr_minmax(0,0.85fr)]">
        {connector ? (
          <svg
            aria-hidden
            className="pointer-events-none absolute inset-0 z-20 hidden h-full w-full lg:block"
          >
            <motion.path
              key={active.id}
              d={connector.path}
              fill="none"
              stroke="var(--accent-orange)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0.45 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.65, ease: "easeInOut" }}
            />
            <motion.circle
              key={`${active.id}-dot`}
              cx={connector.endX}
              cy={connector.endY}
              r={3}
              className="fill-accent"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.55, duration: 0.25 }}
            />
          </svg>
        ) : null}

        <div
          className="relative flex min-h-[360px] flex-col p-4 sm:p-6 lg:min-h-[480px]"
          onMouseLeave={() => setActiveId("paris")}
        >
          <div className="mb-3 flex shrink-0 items-start justify-between gap-4">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-accent">
                Carte interactive
              </p>
              <p className="mt-1 font-display text-xl uppercase tracking-[0.04em] text-white sm:text-2xl">
                Île-de-France
              </p>
            </div>
            <div className="hidden rounded-sm border border-white/10 bg-black/40 p-2 sm:block">
              <FranceLocator />
            </div>
          </div>

          <div className="relative flex flex-1 items-center justify-center">
            <svg
              ref={mapSvgRef}
              viewBox={IDF_MAP_VIEWBOX}
              preserveAspectRatio="xMidYMid meet"
              className="aspect-[560/460] h-auto max-h-full w-full max-w-full"
              aria-label="Carte de l'Île-de-France avec pins par département"
            >
            <defs>
              <linearGradient id="idf-fill" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(255,107,53,0.12)" />
                <stop offset="100%" stopColor="rgba(212,255,0,0.06)" />
              </linearGradient>
              <filter id="idf-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <path
              d={idfRegionOutline}
              className="fill-[url(#idf-fill)] stroke-accent/55"
              strokeWidth="2"
              filter="url(#idf-glow)"
            />

            {idfDepartmentGuides.map((guide) => (
              <path
                key={guide}
                d={guide}
                className="stroke-white/[0.07]"
                strokeWidth="1"
                strokeDasharray="3 6"
              />
            ))}

            <path
              d={idfPetiteCouronne}
              className="fill-none stroke-white/15"
              strokeWidth="1"
              strokeDasharray="5 7"
            />

            <path
              d={idfSeineRiver}
              className="fill-none stroke-sky-300/35"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            <text
              x="280"
              y="28"
              textAnchor="middle"
              className="fill-white/35 text-[11px] font-semibold uppercase tracking-[0.38em]"
            >
              Île-de-France
            </text>

            {idfTerritories.map((territory) => (
              <MapPin
                key={territory.id}
                territory={territory}
                isActive={activeId === territory.id}
                reducedMotion={reducedMotion}
                onActivate={() => setActiveId(territory.id)}
              />
            ))}
            </svg>
          </div>

          <p className="mt-2 shrink-0 text-[10px] uppercase tracking-[0.22em] text-muted">
            Survolez un département · codes 75 · 92 · 93 · 94 · 77 · 95 · 91 · 78
          </p>
        </div>

        <div className="relative border-t border-white/10 p-6 sm:p-8 lg:border-l lg:border-t-0">
          <div
            aria-hidden
            className="absolute left-0 top-0 hidden h-full w-[3px] bg-gradient-to-b from-accent via-lime/70 to-transparent lg:block"
          />

          <div className="flex h-full flex-col justify-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-accent">
              {active.isHub ? "Siège & relais" : "Référence locale"} ·{" "}
              {active.code}
            </p>
            <h3
              ref={titleRef}
              className="mt-3 font-display text-[clamp(1.75rem,4vw,2.75rem)] uppercase leading-none text-white"
            >
              {active.name}
            </h3>

            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={reducedMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reducedMotion ? undefined : { opacity: 0, y: -6 }}
                transition={{ duration: 0.22 }}
              >
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
                      {territory.code} · {territory.name}
                    </button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
