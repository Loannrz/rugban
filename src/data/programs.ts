import type { LucideIcon } from "lucide-react";
import {
  Building2,
  Flag,
  Landmark,
  Route,
  School,
  Users,
  Venus,
} from "lucide-react";

export type ProgramIconKey =
  | "flag"
  | "school"
  | "users"
  | "venus"
  | "landmark"
  | "building"
  | "route";

export const programIcons: Record<ProgramIconKey, LucideIcon> = {
  flag: Flag,
  school: School,
  users: Users,
  venus: Venus,
  landmark: Landmark,
  building: Building2,
  route: Route,
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

/** Actions citoyennes - alignées sur la structuration demandée par l'association. */
export const programs: Program[] = [
  {
    id: "rugban-underground",
    number: 1,
    name: "Rugban Underground",
    description:
      "Un format qui mêle la culture du rugby et la culture urbaine : initiations, créativité et énergie de quartier au service du collectif.",
    tags: ["Quartiers", "Culture urbaine"],
    icon: "users",
    detail:
      "Ce volet regroupe nos interventions de terrain dans les quartiers prioritaires et les formats inter-quartiers : ateliers créatifs, séances sportives encadrées et événements fédérateurs entre territoires, à la croisée du rugby et des codes urbains.",
  },
  {
    id: "festival-des-quartiers",
    number: 2,
    name: "Festival des quartiers",
    description:
      "Événement fédérateur au niveau des 12 EPT Métropole du Grand Paris, avec les départements 75, 92, 93 et 94.",
    tags: ["12 EPT", "75 · 92 · 93 · 94"],
    icon: "landmark",
    detail:
      "Un rendez-vous annuel qui rassemble les territoires autour du sport, de la culture et du vivre-ensemble sur l'ensemble de la Métropole du Grand Paris.",
  },
  {
    id: "coupe-des-quartiers",
    number: 3,
    name: "Coupe des quartiers",
    description:
      "Tournoi inter-départemental massif, structuré sur 8 départements d'Île-de-France.",
    tags: ["Tous publics", "Compétition"],
    icon: "flag",
    detail:
      "Une compétition fédératrice qui met en valeur les talents locaux et crée du lien entre territoires, clubs et quartiers.",
  },
  {
    id: "rugby-college-citoyen",
    number: 4,
    name: "Rugby Collège Citoyen",
    description:
      "26 classes suivies à Courbevoie et Colombes, avec plus de 5 000 collégiens touchés chaque saison.",
    tags: ["Courbevoie", "Colombes", "5000+"],
    icon: "school",
    detail:
      "Une présence pérenne en milieu scolaire : séances ludiques, règles du jeu et valeurs du rugby au service de la cohésion de classe.",
  },
  {
    id: "ovalie-girls",
    number: 5,
    name: "Ovalie Girls",
    description:
      "Événement 100 % féminin autour du rugby avec sensibilisation aux métiers de l'animation et du sport.",
    tags: ["Filles", "APS"],
    icon: "venus",
    detail:
      "Un espace pensé pour déconstruire les freins, renforcer confiance corporelle et ouvrir des perspectives autour du sport.",
  },
  {
    id: "csj-centres-penitentiaires",
    number: 6,
    name: "CSJ & centres pénitentiaires",
    description:
      "Interventions auprès des 6 centres de service jeunesse (CSJ) de la Police nationale en région parisienne et des établissements pénitentiaires pour mineurs.",
    tags: ["CSJ IDF", "Mineurs"],
    icon: "building",
    detail:
      "Un volet d'action citoyenne en milieu fermé et en centre de service jeunesse : sport, éducation et remobilisation auprès de publics éloignés des dispositifs classiques.",
  },
  {
    id: "prepa-sport",
    number: 7,
    name: "Prépa Sport",
    description:
      "Parcours multi-sport de janvier à juin : 1 session par saison, 12 à 20 jeunes diplômés.",
    tags: ["Janv. – Juin", "12–20 jeunes", "Multi-sport"],
    icon: "route",
    detail:
      "Un dispositif d'insertion gratuit qui accompagne les jeunes de 16 à 25 ans vers l'emploi dans le sport et l'animation, avec une session unique par saison.",
  },
];

export const siteAudiences = [
  {
    id: "jeunesse",
    label: "Centres sociaux & maisons de quartier",
    text: "Structures de proximité : co-construire des animations, des événements et des temps forts autour des valeurs du rugby.",
  },
  {
    id: "institutions",
    label: "Institutions publiques",
    text: "Éducation nationale, services déconcentrés, opérateurs publics : des dispositifs encadrés et mesurables.",
  },
  {
    id: "collectivites",
    label: "Collectivités",
    text: "Communes, intercommunalités et EPT : ancrage territorial, visibilité locale et cohérence politique publique.",
  },
  {
    id: "france-travail",
    label: "France Travail",
    text: "Partenariats possibles pour la mobilisation de publics en quartiers prioritaires.",
  },
  {
    id: "missions-locales",
    label: "Missions locales",
    text: "Relais de proximité avec l'équipe permanente pour nos actions sur le terrain.",
  },
  {
    id: "partenaires",
    label: "Futurs partenaires",
    text: "Entreprises, fondations et mécènes : taxe d'apprentissage, mécénat et engagement citoyen.",
  },
  {
    id: "jeunes",
    label: "Jeunes des quartiers",
    text: "Collégiens, lycéens et jeunes de 16 à 25 ans : découvrir le rugby et ses valeurs à travers nos actions citoyennes gratuites.",
  },
] as const;
