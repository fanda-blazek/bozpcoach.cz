import type { NavigationLink } from "./nav-links";

export const legalLinks = {
  gdpr: { name: "Zásady zpracování osobních údajů", href: "/gdpr" },
  cookies: { name: "Pravidla pro používání cookies", href: "/cookies" },
} as const satisfies Record<string, NavigationLink>;

export const legalLinksArray: NavigationLink[] = Object.values(legalLinks);
