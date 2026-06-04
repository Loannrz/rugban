import type { Metadata } from "next";

import { HeroSection } from "@/components/sections/Hero";
import { InsertionSocialeSection } from "@/components/sections/InsertionSociale";
import { MissionSection } from "@/components/sections/Mission";
import { PartenairesLogosSection } from "@/components/sections/PartenairesLogos";
import { ProgramsRailSection } from "@/components/sections/ProgramsRail";
import { RugbanSevenSection } from "@/components/sections/RugbanSeven";

export const metadata: Metadata = {
  title: "Accueil",
  description:
    "Insertion par le rugby en Île-de-France depuis 2006 : programmes urbains gratuits, Prépa Sport certifiants et équipe nationale à VII.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <ProgramsRailSection />
      <InsertionSocialeSection />
      <RugbanSevenSection />
      <PartenairesLogosSection />
    </>
  );
}
