export type LegalSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export const legalMeta = {
  lastUpdated: "20 mai 2026",
  siteUrl: "https://www.rugban.fr",
};

export const legalHosting = {
  name: "Gandi SAS",
  address: "63-65 boulevard Masséna, 75013 Paris, France",
  phone: "+33 1 70 37 76 61",
  website: "https://www.gandi.net",
};

export const legalDomain = {
  registrar: "Gandi SAS",
  address: "63-65 boulevard Masséna, 75013 Paris, France",
};

export const legalSections: LegalSection[] = [
  {
    id: "editeur",
    title: "Éditeur du site",
    paragraphs: [
      "Le présent site est édité par l'association Rugby Urban Attitude (RUGBAN), association loi 1901 à but non lucratif, créée en 2006 et active en Île-de-France.",
      "Siège social : 159 rue Armand Silvestre, 92400 Courbevoie, France.",
      "Les références administratives (RNA, SIRET) sont communiquées sur demande des partenaires institutionnels ou des services financeurs.",
    ],
  },
  {
    id: "publication",
    title: "Directeur de publication",
    paragraphs: [
      "Le directeur de la publication est la direction de Rugby Urban Attitude, représentée légalement par le bureau associatif en exercice.",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    paragraphs: [
      "Pour toute question relative au site, à nos programmes ou à un partenariat, vous pouvez joindre l'équipe permanente par téléphone ou par courriel électronique.",
      "Il n'existe pas de formulaire en ligne : les échanges se font directement avec l'association.",
    ],
  },
  {
    id: "hebergement",
    title: "Hébergement et nom de domaine",
    paragraphs: [
      `Le site ${legalMeta.siteUrl} est hébergé par ${legalHosting.name}, ${legalHosting.address}.`,
      `Le nom de domaine rugban.fr est enregistré auprès de ${legalDomain.registrar}, ${legalDomain.address}.`,
    ],
  },
  {
    id: "propriete",
    title: "Propriété intellectuelle",
    paragraphs: [
      "L'ensemble des contenus éditoriaux, textes, visuels, logos partenaires et éléments graphiques propres à Rugby Urban Attitude sont protégés par le droit d'auteur et le droit des marques.",
      "Toute reproduction, représentation, modification ou exploitation, totale ou partielle, sans autorisation écrite préalable de l'association est interdite.",
      "Certains visuels de démonstration peuvent provenir de banques d'images tierces (notamment Unsplash) et restent soumis à leurs licences respectives.",
    ],
  },
  {
    id: "donnees",
    title: "Données personnelles",
    paragraphs: [
      "Le site ne propose pas de formulaire de contact en ligne. Les données que vous transmettez volontairement par téléphone ou courriel (identité, coordonnées, objet de la demande) sont utilisées uniquement pour répondre à votre sollicitation et assurer le suivi de la relation avec l'association.",
      "Ces données ne sont ni vendues ni cédées à des fins commerciales. Elles sont conservées pendant la durée nécessaire au traitement de votre demande, puis archivées ou supprimées conformément aux obligations légales applicables.",
      "Conformément au Règlement général sur la protection des données (RGPD) et à la loi « Informatique et Libertés », vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité de vos données.",
      "Pour exercer vos droits, adressez votre demande à contact@rugban.fr en précisant l'objet de votre requête et une pièce d'identité si nécessaire.",
    ],
  },
  {
    id: "cookies",
    title: "Cookies et traceurs",
    paragraphs: [
      "Le site ne dépose pas de cookies publicitaires ni de cookies de mesure d'audience avancée par défaut.",
      "Des cookies techniques peuvent être utilisés pour assurer le bon fonctionnement du site (navigation, sécurité, préférences d'affichage).",
      "L'intégration de la carte Google Maps sur la page Contact peut entraîner le dépôt de cookies par Google lorsque vous interagissez avec la carte. Consultez la politique de confidentialité de Google pour plus d'informations.",
    ],
  },
  {
    id: "responsabilite",
    title: "Responsabilité",
    paragraphs: [
      "Rugby Urban Attitude s'efforce d'assurer l'exactitude des informations publiées sur le site. Toutefois, l'association ne saurait garantir l'absence d'erreurs ou d'omissions et décline toute responsabilité en cas d'interprétation erronée des contenus.",
      "Les liens hypertextes pointant vers des sites tiers n'engagent pas la responsabilité éditoriale de Rugby Urban Attitude quant à leur contenu.",
    ],
  },
  {
    id: "droit",
    title: "Droit applicable",
    paragraphs: [
      "Le présent site est soumis au droit français. En cas de litige, et à défaut de résolution amiable, les tribunaux français seront seuls compétents.",
    ],
  },
];
