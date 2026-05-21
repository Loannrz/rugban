"use client";

import type { PropsWithChildren } from "react";

import { CustomCursor } from "./CustomCursor";
import { SiteEntranceLoader } from "./SiteEntranceLoader";

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <>
      <SiteEntranceLoader />
      <CustomCursor />
      {children}
    </>
  );
}
