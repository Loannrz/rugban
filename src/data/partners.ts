export type PartnerCategory = "institutional" | "private";

export type Partner = {
  id: string;
  name: string;
  initials: string;
  category: PartnerCategory;
  website?: string;
};

export const partners: Partner[] = [
  {
    id: "ans",
    name: "Agence Nationale du Sport",
    initials: "ANS",
    category: "institutional",
    website: "https://www.agencenationaledusport.fr/",
  },
  {
    id: "region-idf",
    name: "Région Île-de-France",
    initials: "IDF",
    category: "institutional",
    website: "https://www.iledefrance.fr/",
  },
  {
    id: "drajes",
    name: "DRAJES",
    initials: "DR",
    category: "institutional",
  },
  {
    id: "courbevoie",
    name: "Ville de Courbevoie",
    initials: "CBV",
    category: "institutional",
    website: "https://www.ville-courbevoie.fr/",
  },
  {
    id: "paris2024",
    name: "Paris 2024",
    initials: "P24",
    category: "private",
    website: "https://www.paris2024.org/",
  },
  {
    id: "suez",
    name: "SUEZ",
    initials: "SZ",
    category: "private",
    website: "https://www.suez.com/",
  },
  {
    id: "terideal",
    name: "TERIDEAL",
    initials: "TR",
    category: "private",
  },
  {
    id: "razelbec",
    name: "RAZEL-BEC",
    initials: "RB",
    category: "private",
  },
];
