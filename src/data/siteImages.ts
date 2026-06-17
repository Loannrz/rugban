export type SiteImage = {
  src: string;
  alt: string;
};

export const siteImages = {
  mission: {
    src: "/images/mission/entrainement-rugby-courbevoie.jpg",
    alt: "Jeunes en séance de rugby avec éducateurs sur un terrain de Courbevoie",
  },
  rugban7s: {
    src: "/images/rugban-7s/action-feminine.jpg",
    alt: "Joueuse de rugby en action lors de la Coupe des Quartiers",
  },
  rugban7sTerrain: {
    src: "/images/rugban-7s/terrain-rugban.jpg",
    alt: "Terrain de rugby avec le logo Rugban lors d'un événement urbain",
  },
  prepaSportSession: {
    src: "/images/prepa-sport/seance-collective.jpg",
    alt: "Groupe de jeunes en séance collective Prépa Sport",
  },
  prepaSportTournoi: {
    src: "/images/prepa-sport/tournoi-solidaire.jpg",
    alt: "Tournoi solidaire Prépa Sport",
  },
  passeD: {
    src: "/images/insertion/passe-d-groupe.jpg",
    alt: "Groupe de collégiens lors d'une journée immersion Passe D",
  },
  passeDStade: {
    src: "/images/insertion/passe-d-stade-francais.jpg",
    alt: "Accueil des jeunes au Stade Français Paris pour la Passe D",
  },
  actionsJeunes: {
    src: "/images/actions/rugby-jeunes-filles.jpg",
    alt: "Jeunes filles en activité rugby lors d'une animation Rugban",
  },
  actionsQuartiers: {
    src: "/images/actions/coupe-quartiers-entrainement.jpg",
    alt: "Entraînement de flag rugby lors de la Coupe des Quartiers",
  },
  actionsColleges: {
    src: "/images/actions/coupe-colleges.jpg",
    alt: "Action rugby lors du Trophée des Collèges",
  },
  actionsMandela: {
    src: "/images/actions/mandela-cup-coaching.jpg",
    alt: "Coach Rugban avec des enfants lors de la Mandela Cup",
  },
  partenaireSuez: {
    src: "/images/partenaires/suez-entrainement.jpg",
    alt: "Jeune en exercice de plaquage lors d'une action SUEZ x Rugban",
  },
  partenaireRazel: {
    src: "/images/partenaires/razel-nanterre.jpg",
    alt: "Animation rugby avec les équipes Razel-BEC à Nanterre",
  },
  sportSanteRacing: {
    src: "/images/sport-sante/seance-seniors-1.jpg",
    alt: "Participants adultes et seniors lors d'une séance Sport Santé encadrée",
  },
  sportSanteActivite: {
    src: "/images/sport-sante/seance-seniors-2.jpg",
    alt: "Groupe de seniors en activité physique adaptée Sport Santé",
  },
  courbevoieAnimation: {
    src: "/images/courbevoie/animation-jeunes.jpg",
    alt: "Animation rugby avec des jeunes à Courbevoie",
  },
} as const satisfies Record<string, SiteImage>;
