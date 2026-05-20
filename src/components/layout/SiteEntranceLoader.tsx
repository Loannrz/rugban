"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

import { RugbanLogo } from "@/components/ui/RugbanLogo";

const LOADER_DURATION_MS = 1500;
const REDUCED_MOTION_DURATION_MS = 300;

export function SiteEntranceLoader() {
  const reducedMotion = useReducedMotion() === true;
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const loaderDurationMs = reducedMotion
    ? REDUCED_MOTION_DURATION_MS
    : LOADER_DURATION_MS;

  useEffect(() => {
    const hide = window.setTimeout(() => {
      setVisible(false);
    }, loaderDurationMs);

    return () => window.clearTimeout(hide);
  }, [loaderDurationMs]);

  useEffect(() => {
    if (reducedMotion) {
      setProgress(100);
      return;
    }

    setProgress(0);
    const startedAt = performance.now();

    const tick = (now: number) => {
      const next = Math.min(
        100,
        Math.round(((now - startedAt) / LOADER_DURATION_MS) * 100),
      );
      setProgress(next);
      if (next < 100) {
        requestAnimationFrame(tick);
      }
    };

    const frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [reducedMotion]);

  const transition = reducedMotion ? { duration: 0 } : { duration: 0.6 };

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          key="rugban-entry"
          className="fixed inset-0 z-[400] grid place-items-center bg-black text-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={transition}
        >
          <div className="flex flex-col items-center gap-8 text-center">
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={transition}
            >
              <RugbanLogo height={72} priority />
            </motion.div>

            <div className="flex w-52 max-w-[92vw] flex-col items-center gap-3 sm:w-auto">
              <motion.p
                className="whitespace-nowrap text-[10px] uppercase tracking-[0.28em] text-muted sm:tracking-[0.36em]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: reducedMotion ? 0 : 0.5,
                  delay: reducedMotion ? 0 : 0.4,
                }}
              >
                Rugby Urban Attitude • Chargement
              </motion.p>

              <motion.div
                className="w-full min-w-[13rem] sm:min-w-[16rem]"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: reducedMotion ? 0 : 0.4,
                  delay: reducedMotion ? 0 : 0.55,
                }}
              >
                <div
                  className="h-1 w-full overflow-hidden rounded-full bg-white/10"
                  role="progressbar"
                  aria-valuenow={progress}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label="Chargement du site"
                >
                  <motion.div
                    className="h-full rounded-full bg-accent"
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress}%` }}
                    transition={{
                      duration: reducedMotion ? 0 : 0.12,
                      ease: "linear",
                    }}
                  />
                </div>
                <p className="mt-2 text-[10px] font-semibold tabular-nums tracking-[0.2em] text-accent">
                  {progress}%
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
