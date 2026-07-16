export type StatItem = {
  id: string;
  value: number;
  suffix?: string;
  label: string;
  shortHint?: string;
};

export const heroStats: StatItem[] = [
  {
    id: "jeunes",
    value: 5000,
    suffix: "+",
    label: "Jeunes touchés / an",
  },
  {
    id: "departements",
    value: 8,
    label: "Départements",
  },
  {
    id: "experience",
    value: 20,
    suffix: "+",
    label: "Ans d'expérience",
  },
  {
    id: "sessions-prepa",
    value: 1,
    label: "Session Prépa Sport / jeune",
  },
];

export const impactStats: StatItem[] = [
  {
    id: "impact-jeunes",
    value: 5000,
    suffix: "+",
    label: "Jeunes accompagnés par an",
    shortHint: "Programmes réguliers en milieu ouvert.",
  },
  {
    id: "impact-deps",
    value: 8,
    label: "Départements d'intervention",
    shortHint: "Maillage francilien coordonné sur le terrain.",
  },
  {
    id: "impact-programmes",
    value: 7,
    label: "Programmes actifs",
    shortHint: "Actions complémentaires, un socle commun.",
  },
  {
    id: "impact-anciensnete",
    value: 20,
    suffix: "+",
    label: "Années d'existence",
    shortHint: "Association loi 1901 depuis 2008.",
  },
];
