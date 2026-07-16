export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Actions citoyennes", href: "/nos-actions" },
  { label: "Insertion", href: "/insertion" },
  { label: "Prépa sport", href: "/prepa-sport" },
  { label: "Sport santé", href: "/sport-sante" },
  { label: "Formation", href: "/formation" },
  { label: "Rugban 7s", href: "/rugban-7s" },
  { label: "Partenaires", href: "/partenaires" },
  { label: "Contact", href: "/contact" },
];

export const siteConfig = {
  name: "RUGBAN",
  fullName: "Rugby Urban Attitude",
  tagline: "L'insertion par le sport",
  addressLine: "159 rue Armand Silvestre",
  postcode: "92400",
  city: "Courbevoie",
  phone: "06 80 04 40 44",
  phoneHref: "tel:+33680044044",
  email: "asso2s.isa@gmail.com",
  emailHref: "mailto:asso2s.isa@gmail.com",
  emails: [
    {
      address: "asso2s.isa@gmail.com",
      href: "mailto:asso2s.isa@gmail.com",
    },
    {
      address: "stephane@rugban.fr",
      href: "mailto:stephane@rugban.fr",
    },
  ],
  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
  },
};
