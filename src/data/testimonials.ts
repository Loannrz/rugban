export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "jibril",
    quote:
      "Ce dispositif m'a en quelque sorte sauvé dans mon parcours. J'ai retrouvé une dynamique collective, puis intégré un BP JEPS APT.",
    author: "Jibril",
    role: "Diplômé BP JEPS APT",
    initials: "J",
  },
  {
    id: "moussa",
    quote:
      "J'ai retrouvé motivation, régularité et confiance en moi. Le rugby m'a aidé à structurer mes semaines hors du groupe.",
    author: "Moussa",
    role: "Alternant BP JEPS APT",
    initials: "M",
  },
];
