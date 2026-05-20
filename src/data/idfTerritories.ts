export type IdfTerritory = {
  id: string;
  name: string;
  code: string;
  city: string;
  x: number;
  y: number;
  labelX: number;
  labelY: number;
  isHub?: boolean;
  description: string;
};

/** Positions espacées en étoile autour de Paris - cohérence N/S/E/O. */
export const idfTerritories: IdfTerritory[] = [
  {
    id: "paris",
    name: "Paris",
    code: "75",
    city: "Paris intra-muros",
    x: 280,
    y: 228,
    labelX: 280,
    labelY: 256,
    isHub: true,
    description:
      "Siège associatif, lab pédagogiques et relais vers l'ensemble du réseau francilien.",
  },
  {
    id: "val-doise",
    name: "Val-d'Oise",
    code: "95",
    city: "Cergy · Argenteuil",
    x: 280,
    y: 78,
    labelX: 280,
    labelY: 52,
    description:
      "Maillage nord francilien, relais Mission Locale et sessions en territoires périurbains.",
  },
  {
    id: "seine-saint-denis",
    name: "Seine-Saint-Denis",
    code: "93",
    city: "Bobigny · Saint-Denis",
    x: 372,
    y: 112,
    labelX: 402,
    labelY: 102,
    description:
      "Coupe des quartiers, Rugban Underground et relais vers les EPT du nord-est.",
  },
  {
    id: "seine-et-marne",
    name: "Seine-et-Marne",
    code: "77",
    city: "Meaux · Melun",
    x: 472,
    y: 228,
    labelX: 508,
    labelY: 228,
    description:
      "Mobilisations intercommunes, finales régionales et chantiers événementiels grande couronne est.",
  },
  {
    id: "val-de-marne",
    name: "Val-de-Marne",
    code: "94",
    city: "Créteil · Vitry",
    x: 372,
    y: 344,
    labelX: 402,
    labelY: 354,
    description:
      "Festivals de quartiers, Ovalie Girls et tournois scolaires sud-est francilien.",
  },
  {
    id: "essonne",
    name: "Essonne",
    code: "91",
    city: "Évry · Massy",
    x: 280,
    y: 392,
    labelX: 280,
    labelY: 418,
    description:
      "Programmes collégiens, Prépa Sport et actions de proximité dans la grande couronne sud.",
  },
  {
    id: "hauts-de-seine",
    name: "Hauts-de-Seine",
    code: "92",
    city: "Courbevoie · Nanterre",
    x: 188,
    y: 268,
    labelX: 152,
    labelY: 278,
    description:
      "Rugby Collège Citoyen, classes suivies et interventions en milieu ouvert ouest parisien.",
  },
  {
    id: "yvelines",
    name: "Yvelines",
    code: "78",
    city: "Versailles · Saint-Quentin",
    x: 118,
    y: 328,
    labelX: 82,
    labelY: 338,
    description:
      "Coupe des collèges, clubs partenaires et interventions vers l'axe ouest francilien.",
  },
];
