export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Actions", href: "/nos-actions" },
  { label: "Insertion", href: "/insertion" },
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
  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
  },
};
