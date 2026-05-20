"use client";

import { useEffect, useState } from "react";

export function useIsNarrowMotion(breakpoint = 1024) {
  const [narrow, setNarrow] = useState(false);

  useEffect(() => {
    const query = `(max-width: ${breakpoint}px)`;
    const mq = window.matchMedia(query);
    const listener = () => setNarrow(mq.matches);

    listener();
    mq.addEventListener("change", listener);
    return () => mq.removeEventListener("change", listener);
  }, [breakpoint]);

  return narrow;
}
