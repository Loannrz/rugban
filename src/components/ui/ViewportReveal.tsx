"use client";

import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";
import { useInView } from "react-intersection-observer";

import { fadeUp, staggerContainer } from "@/lib/animations";
import { useIsNarrowMotion } from "@/lib/useMediaQuery";
import { cn } from "@/lib/utils";

type ViewportRevealProps = Omit<HTMLMotionProps<"div">, "variants"> & {
  variants?: Variants;
  staggerChildren?: boolean;
  delayChildren?: number;
  threshold?: number | number[];
  immediate?: boolean;
};

export function ViewportReveal({
  className,
  children,
  variants,
  staggerChildren,
  delayChildren = 0.05,
  threshold = 0.15,
  immediate = false,
  ...motionProps
}: ViewportRevealProps) {
  const reducedMotion = useReducedMotion() === true;
  const narrowMotion = useIsNarrowMotion();

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold,
  });

  const shouldShow = immediate || reducedMotion || inView;
  const mergedVariants =
    staggerChildren === true
      ? staggerContainer(reducedMotion, delayChildren)
      : variants ??
        fadeUp({
          reducedMotion,
          narrowMotion,
        });

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial="hidden"
      animate={shouldShow ? "visible" : "hidden"}
      variants={mergedVariants}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}
