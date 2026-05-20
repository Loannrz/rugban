import type { Metadata } from "next";

import { FinaleJuunesSection } from "@/components/sections/FinaleJuunes";
import { HeroSection } from "@/components/sections/Hero";
import { ImpactNumeriqueSection } from "@/components/sections/ImpactNumerique";
import { InsertionSocialeSection } from "@/components/sections/InsertionSociale";
import { MissionSection } from "@/components/sections/Mission";
import { PartenairesLogosSection } from "@/components/sections/PartenairesLogos";
import { ProgramsRailSection } from "@/components/sections/ProgramsRail";
import { RugbanSevenSection } from "@/components/sections/RugbanSeven";
import { TemoignagesSection } from "@/components/sections/TemoignagesSection";

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
      <ImpactNumeriqueSection />
      <PartenairesLogosSection />
      <TemoignagesSection />
      <FinaleJuunesSection />
    </>
  );
}
