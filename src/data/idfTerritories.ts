export type IdfTerritory = {
  id: string;
  name: string;
  city: string;
  x: number;
  y: number;
  isHub?: boolean;
  description: string;
};

export const idfTerritories: IdfTerritory[] = [
  {
    id: "paris",
    name: "Paris",
    city: "Paris intra-muros",
    x: 248,
    y: 238,
    isHub: true,
    description:
      "Siège associatif, lab pédagogiques et relais vers l'ensemble du réseau francilien.",
  },
  {
    id: "hauts-de-seine",
    name: "Hauts-de-Seine",
    city: "Courbevoie · Nanterre",
    x: 198,
    y: 228,
    description:
      "Rugby Collège Citoyen, classes suivies et interventions en milieu ouvert ouest parisien.",
  },
  {
    id: "seine-saint-denis",
    name: "Seine-Saint-Denis",
    city: "Bobigny · Saint-Denis",
    x: 278,
    y: 208,
    description:
      "Coupe des quartiers, Rugban Underground et relais vers les EPT du nord-est.",
  },
  {
    id: "val-de-marne",
    name: "Val-de-Marne",
    city: "Créteil · Vitry",
    x: 288,
    y: 268,
    description:
      "Festivals de quartiers, Ovalie Girls et tournois scolaires sud-est francilien.",
  },
  {
    id: "seine-et-marne",
    name: "Seine-et-Marne",
    city: "Meaux · Melun",
    x: 338,
    y: 248,
    description:
      "Mobilisations intercommunes, finales régionales et chantiers événementiels grande couronne est.",
  },
  {
    id: "val-doise",
    name: "Val-d'Oise",
    city: "Cergy · Argenteuil",
    x: 228,
    y: 178,
    description:
      "Maillage nord francilien, relais Mission Locale et sessions en territoires périurbains.",
  },
  {
    id: "essonne",
    name: "Essonne",
    city: "Évry · Massy",
    x: 238,
    y: 298,
    description:
      "Programmes collégiens, Prépa Sport et actions de proximité dans la grande couronne sud.",
  },
  {
    id: "yvelines",
    name: "Yvelines",
    city: "Versailles · Saint-Quentin",
    x: 168,
    y: 258,
    description:
      "Coupe des collèges, clubs partenaires et interventions vers l'axe ouest francilien.",
  },
];
