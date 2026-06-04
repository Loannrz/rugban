"use client";

import type { PropsWithChildren } from "react";

import { SiteEntranceLoader } from "./SiteEntranceLoader";

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <>
      <SiteEntranceLoader />
      {children}
    </>
  );
}
