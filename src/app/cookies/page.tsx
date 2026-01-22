import { CookiePolicy } from "@/components/cookies/cookie-policy";
import { Container } from "@/components/ui/container";
import { Hero, HeroContent, HeroDescription, HeroTitle } from "@/components/ui/hero";
import type { Metadata } from "next";
import { legal } from "@/config/legal";
import { cookies } from "@/config/cookies";
import { site } from "@/config/site";

const title = "Pravidla pro používání cookies";
const description =
  "Informace o tom, jakým způsobem využíváme soubory cookies, o jejich typech a o možnostech nastavení vašich předvoleb.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/cookies",
  },
  openGraph: {
    title: `${title} | ${site.name}`,
    description,
    url: `${site.url}/cookies`,
  },
  twitter: {
    title: `${title} | ${site.name}`,
    description,
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function Page() {
  return (
    <>
      <Hero>
        <HeroContent>
          <HeroTitle>{title}</HeroTitle>
          <HeroDescription>{description}</HeroDescription>
        </HeroContent>
      </Hero>

      <Container size="sm" className="prose pb-24">
        <CookiePolicy
          company={{
            name: legal.legalName,
            address: legal.address,
            id: legal.id,
            domain: legal.domain,
          }}
          contact={{
            email: legal.contact.email,
            phone: legal.contact.phone,
          }}
          cookies={cookies}
          effectiveDate="1. January 2025"
          locale={site.locale === "cs" ? "cs" : "en"}
        />
      </Container>
    </>
  );
}
