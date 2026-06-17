export type PartnerCategory = "institutional" | "private";

export type Partner = {
  id: string;
  name: string;
  initials: string;
  logo?: string;
  logoClassName?: string;
  logoPending?: boolean;
  category: PartnerCategory;
  website?: string;
};

export const partners: Partner[] = [
  {
    id: "ans",
    name: "Agence Nationale du Sport",
    initials: "ANS",
    logo: "/partners/ans.png",
    category: "institutional",
    website: "https://www.agencenationaledusport.fr/",
  },
  {
    id: "region-idf",
    name: "Région Île-de-France",
    initials: "IDF",
    logo: "/partners/region-idf.png",
    category: "institutional",
    website: "https://www.iledefrance.fr/",
  },
  {
    id: "sesame",
    name: "Sésame",
    initials: "DR",
    logo: "/partners/sesame.png",
    category: "institutional",
  },
  {
    id: "courbevoie",
    name: "Ville de Courbevoie",
    initials: "CBV",
    logo: "/partners/courbevoie.png",
    category: "institutional",
    website: "https://www.ville-courbevoie.fr/",
  },
  {
    id: "fipd",
    name: "FIPD",
    initials: "FIPD",
    logoPending: true,
    category: "institutional",
  },
  {
    id: "veolia",
    name: "Veolia",
    initials: "VEO",
    logoPending: true,
    category: "institutional",
  },
  {
    id: "impact-2024",
    name: "Impact 2024",
    initials: "P24",
    logo: "/partners/impact-2024.png",
    logoClassName: "max-h-[92%] max-w-[92%]",
    category: "private",
  },
  {
    id: "suez",
    name: "SUEZ",
    initials: "SZ",
    logo: "/partners/suez.png",
    category: "private",
    website: "https://www.suez.com/",
  },
  {
    id: "terideal",
    name: "TERIDEAL",
    initials: "TR",
    logo: "/partners/terideal.jpg",
    category: "private",
  },
  {
    id: "razelbec",
    name: "RAZEL-BEC",
    initials: "RB",
    logo: "/partners/razelbec.png",
    category: "private",
  },
];
