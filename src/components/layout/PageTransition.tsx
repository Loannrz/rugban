"use client";

import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

type PageTransitionBridgeProps = {
  children: React.ReactNode;
};

export function PageTransitionBridge({ children }: PageTransitionBridgeProps) {
  const pathname = usePathname();
  const reducedMotion = useReducedMotion() === true;

  const hasMountedRef = useRef(false);
  const translateY = useMotionValue("100%");

  useEffect(() => {
    if (!hasMountedRef.current) {
      hasMountedRef.current = true;
      return;
    }

    if (typeof window === "undefined" || reducedMotion) {
      return;
    }

    const sequence = async () => {
      await animate(translateY, "0%", {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      });

      await animate(translateY, "100%", {
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      });

      translateY.set("100%");
    };

    void sequence();
  }, [pathname, reducedMotion, translateY]);

  if (reducedMotion) {
    return <>{children}</>;
  }

  return (
    <>
      <div className="relative z-10">{children}</div>
      <motion.div
        aria-hidden
        style={{ translateY }}
        className="pointer-events-none fixed inset-x-0 bottom-0 top-0 z-[210] flex items-end bg-black shadow-[0_-25px_60px_rgba(0,0,0,.6)] mix-blend-normal"
      />
    </>
  );
}
