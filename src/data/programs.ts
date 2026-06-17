import type { LucideIcon } from "lucide-react";
import { Building2, Flag, Landmark, School, Users, Venus } from "lucide-react";

export type ProgramIconKey =
  | "flag"
  | "school"
  | "users"
  | "venus"
  | "landmark"
  | "building";

export const programIcons: Record<ProgramIconKey, LucideIcon> = {
  flag: Flag,
  school: School,
  users: Users,
  venus: Venus,
  landmark: Landmark,
  building: Building2,
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

/** Actions citoyennes — alignées sur la structuration demandée par l'association. */
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
      "Événement fédérateur au niveau des 12 EPT du territoire, avec les secteurs 75, 92, 93 et 94 de la petite couronne représentés.",
    tags: ["12 EPT", "Petite couronne"],
    icon: "landmark",
    detail:
      "Un rendez-vous annuel qui rassemble les territoires autour du sport, de la culture et du vivre-ensemble, avec une représentation équilibrée des EPT franciliens de la petite couronne.",
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
      "Une présence pérenne en milieu scolaire : séances ludiques, règles du jeu, valeurs du rugby et passerelles vers nos parcours d'insertion.",
  },
  {
    id: "coupe-des-colleges",
    number: 5,
    name: "Coupe des collèges",
    description:
      "Tournoi collégien à Colombes, filles et garçons mobilisés autour du fair-play et du collectif.",
    tags: ["Collégiens", "Filles + garçons"],
    icon: "school",
    detail:
      "Un format scolaire clair, accessible et encadré, favorable à la mixité et à la cohésion de classe hors des murs habituels.",
  },
  {
    id: "ovalie-girls",
    number: 6,
    name: "Ovalie Girls",
    description:
      "Événement 100 % féminin autour du rugby avec sensibilisation aux métiers de l'animation et du sport.",
    tags: ["Filles", "APS"],
    icon: "venus",
    detail:
      "Un espace pensé pour déconstruire les freins, renforcer confiance corporelle et ouvrir des perspectives d'orientation concrètes.",
  },
  {
    id: "clj-centres-penitentiaires",
    number: 7,
    name: "CLJ & centres pénitentiaires",
    description:
      "Interventions auprès des 6 centres de loisirs jeunesse (CLJ) d'Île-de-France et des établissements pénitentiaires pour mineurs.",
    tags: ["CLJ IDF", "Mineurs"],
    icon: "building",
    detail:
      "Un volet d'action citoyenne en milieu fermé et en centre de loisirs : sport, éducation et remobilisation auprès de publics éloignés des dispositifs classiques.",
  },
];

export const siteAudiences = [
  {
    id: "jeunesse",
    label: "Structures jeunesse",
    text: "Missions locales, centres sociaux, associations de quartier : co-construire des parcours et des événements adaptés.",
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
    text: "Orientation, suivi et co-accompagnement des jeunes vers la Prépa Sport et les passerelles pro.",
  },
  {
    id: "missions-locales",
    label: "Missions locales",
    text: "Montage de dossiers, candidatures Prépa Sport et relais de proximité avec l'équipe permanente.",
  },
  {
    id: "partenaires",
    label: "Futurs partenaires",
    text: "Entreprises, fondations et mécènes : taxe d'apprentissage, mécénat et engagement citoyen.",
  },
  {
    id: "jeunes",
    label: "Jeunes 16–25 ans",
    text: "Prépa Sport gratuite, certifications BAFA / PSC1 et trajectoire vers l'emploi dans le sport et l'animation.",
  },
] as const;
