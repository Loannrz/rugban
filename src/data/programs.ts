import type { LucideIcon } from "lucide-react";
import {
  Brush,
  Flag,
  PartyPopper,
  Trophy,
  School,
  Users,
  Venus,
} from "lucide-react";

export type ProgramIconKey =
  | "brush"
  | "flag"
  | "party"
  | "trophy"
  | "school"
  | "users"
  | "venus";

export const programIcons: Record<ProgramIconKey, LucideIcon> = {
  brush: Brush,
  flag: Flag,
  party: PartyPopper,
  trophy: Trophy,
  school: School,
  users: Users,
  venus: Venus,
};

export type Program = {
  id: string;
  number: number;
  name: string;
  description: string;
  tags: string[];
  icon: ProgramIconKey;
  detail: string;
};

export const programs: Program[] = [
  {
    id: "rugban-underground",
    number: 1,
    name: "Rugban Underground",
    description:
      "Culture urbaine et rugby : art, danse, graffiti et pratique sportive pour ouvrir le champ des possibles.",
    tags: ["Collégiens", "Mixte"],
    icon: "brush",
    detail:
      "Un programme hybride qui relie les codes de la rue à ceux du terrain : ateliers créatifs, initiations et transmission par des éducateurs présents sur le long terme.",
  },
  {
    id: "coupe-des-quartiers",
    number: 2,
    name: "Coupe des quartiers",
    description:
      "Tournoi inter-départemental massif, structuré sur 8 départements d'Île-de-France.",
    tags: ["Tous publics", "Compétition"],
    icon: "flag",
    detail:
      "Une compétition fédératrice qui met en valeur les talents locaux et crée du lien entre territoires, clubs et quartiers.",
  },
  {
    id: "festival-des-quartiers",
    number: 3,
    name: "Festival des quartiers",
    description:
      "12 EPT franciliennes mobilisées, finale régionale en juin, ambiance festive et sportive.",
    tags: ["Réseau IDF", "Finale régionale"],
    icon: "party",
    detail:
      "Une dynamique événementielle qui amplifie la visibilité des actions terrain et permet des rencontres entre jeunes issus de contextes variés.",
  },
  {
    id: "reve-en melee",
    number: 4,
    name: "Rêve en mêlée",
    description:
      "Journée immersion dans un club professionnel avec entraînement encadré aux côtés de joueurs pros.",
    tags: ["Inspiration", "Découverte des métiers"],
    icon: "trophy",
    detail:
      "Une porte ouverte spectaculaire sur l'excellence sportive pour nourrir ambition, projet et régularité à l'école comme sur le terrain.",
  },
  {
    id: "coupe-des-colleges",
    number: 5,
    name: "Coupe des collèges",
    description:
      "Tournoi collègien à Colombes, filles et garçons mobilisés autour du fair-play et du collectif.",
    tags: ["Collégiens", "Filles + garçons"],
    icon: "school",
    detail:
      "Un format scolaire clair, accessible et encadré, favorable à la mixité et à la cohésion de classe hors des murs habituels.",
  },
  {
    id: "rugby-college-citoyen",
    number: 6,
    name: "Rugby Collège Citoyen",
    description:
      "26 classes suivies à Courbevoie, avec plus de 800 collégiens touchés chaque saison.",
    tags: ["Courbevoie", "800+"],
    icon: "users",
    detail:
      "Une présence pérenne en milieu scolaire : séances ludiques, règles du jeu, valeurs du rugby et passerelles vers nos parcours d'insertion.",
  },
  {
    id: "ovalie-girls",
    number: 7,
    name: "Ovalie Girls",
    description:
      "Événement 100 % féminin autour du rugby avec sensibilisation aux métiers de l'animation et du sport.",
    tags: ["Filles", "APS"],
    icon: "venus",
    detail:
      "Un espace pensé pour déconstruire les freins, renforcer confiance corporelle et ouvrir des perspectives d'orientation concrètes.",
  },
];
