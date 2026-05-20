"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

import { RugbanLogo } from "@/components/ui/RugbanLogo";

const STORAGE_KEY = "rugban-loader-session";

export function SiteEntranceLoader() {
  const reducedMotion = useReducedMotion() === true;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (sessionStorage.getItem(STORAGE_KEY)) {
      setVisible(false);
      return;
    }

    setVisible(true);
    const hide = window.setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem(STORAGE_KEY, "1");
    }, reducedMotion ? 300 : 1500);

    return () => window.clearTimeout(hide);
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
            <motion.p
              className="text-[10px] uppercase tracking-[0.4em] text-muted"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: reducedMotion ? 0 : 0.5, delay: reducedMotion ? 0 : 0.4 }}
            >
              Rugby Urban Attitude • Chargement
            </motion.p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
