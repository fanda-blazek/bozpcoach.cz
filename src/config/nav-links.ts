import type { Route } from "next";

export type NavigationLink<T extends string = string> = {
  name: string;
  href: Route<T>;
};

export type NavigationDropdown = {
  name: string;
  items: NavigationLink[];
};

export type NavigationItem = NavigationLink | NavigationDropdown;

export const navLinks = {
  home: {
    name: "Hlavní strana",
    href: "/",
  },
  services: {
    name: "Služby",
    href: "/#sluzby",
  },
  about: {
    name: "O mně",
    href: "/#o-mne",
  },
  contact: {
    name: "Kontakt",
    href: "/kontakt",
  },
} as const satisfies Record<string, NavigationItem>;

export const navLinksArray: NavigationItem[] = Object.values(navLinks);
