export interface NavItem {
  name: string;
  link: string;
  options?: { name: string; link: string }[];
}

export const NAV_ITEMS: NavItem[] = [
  { name: "Estudio 1", link: "/" },
  { name: "Características", link: "/" },
  {
    name: "Extras",
    link: "/",
    options: [
      { name: "Alquiler de Material", link: "/" },
      { name: "Producción", link: "/" },
      { name: "Fondos de Fotografía", link: "/" },
    ],
  },
  { name: "Nosotros", link: "/contact" },
  { name: "Contacto", link: "/contact" },
  { name: "Sostenibilidad", link: "/contact" },
];
