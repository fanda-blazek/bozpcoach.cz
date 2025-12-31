import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import {
  Hero,
  HeroActions,
  HeroBackground,
  HeroContent,
  HeroDescription,
  HeroTitle,
} from "@/components/ui/hero";
import type { Metadata } from "next";
import { site } from "@/config/site";
import { ServicesBlock } from "@/components/home-page/services-block";
import { NewsletterCta } from "@/components/newsletter/newsletter-cta";
import { Separator } from "@/components/ui/separator";
import { StaticImage } from "@/components/ui/static-image";
import HeroBgImage from "@/assets/images/hero-bg.webp";
import PortraitImage from "@/assets/images/portrait-original.jpg";
import { ArrowDownIcon } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: site.defaultTitle,
  description: site.defaultDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: site.defaultTitle,
    description: site.defaultDescription,
    url: site.url,
  },
  twitter: {
    title: site.defaultTitle,
    description: site.defaultDescription,
  },
};

export default function Page() {
  return (
    <div>
      <Hero>
        <HeroBackground className="mask-b-from-80% mask-b-to-100%">
          <StaticImage
            image={HeroBgImage}
            alt="obrazek oranzove vlny"
            className="pointer-events-none scale-150 opacity-40 select-none sm:scale-100 sm:opacity-85"
          />
        </HeroBackground>
        <HeroContent className="grid gap-16 lg:grid-cols-12">
          <div className="flex-col items-start justify-center lg:col-span-7 2xl:flex">
            <HeroTitle className="text-left xl:text-6xl/[110%]">
              BOZP JINAK: Bezpečnost začíná v hlavě, ne v šanonu.
            </HeroTitle>
            <HeroDescription className="text-foreground mx-0 text-left">
              Jsem Nikola Hošková, váš BOZP Coach. Spojuji roli OZO v prevenci rizik s psychologií
              práce. Pomáhám firmám předcházet úrazům tam, kde směrnice nestačí – změnou myšlení a
              firemní kultury.
            </HeroDescription>
            <HeroActions className="sm:justify-start">
              <Button size="lg" asChild className="bg-foreground hover:bg-foreground/80">
                <Link href="/#problem">
                  <ArrowDownIcon aria-hidden="true" />
                  Zjistit více
                </Link>
              </Button>
            </HeroActions>
          </div>
          <div className="aspect-3/4 overflow-hidden rounded-3xl lg:col-span-5">
            <StaticImage
              image={PortraitImage}
              alt="Nikola Hoskova portret"
              className="-translate-y-10 scale-110 object-cover"
            />
          </div>
        </HeroContent>
      </Hero>

      <div className="space-y-12 pb-24 md:space-y-20">
        <Container asChild>
          <section id="problem">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">Problém</h2>
            <p className="max-w-prose pt-8">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam fuga illum obcaecati
              sapiente sint nemo unde blanditiis voluptates nesciunt exercitationem.
            </p>
          </section>
        </Container>

        <Container>
          <Separator />
        </Container>

        <Container asChild>
          <section id="sluzby">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">Služby</h2>
            <p className="max-w-prose pt-8">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam fuga illum obcaecati
              sapiente sint nemo unde blanditiis voluptates nesciunt exercitationem.
            </p>
            <div className="pt-8">
              <ServicesBlock />
            </div>
          </section>
        </Container>

        <Container>
          <Separator />
        </Container>

        <Container asChild>
          <section id="o-mne" className="py-16 sm:py-24">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">O mně</h2>
            <p className="max-w-prose pt-8">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam fuga illum obcaecati
              sapiente sint nemo unde blanditiis voluptates nesciunt exercitationem.
            </p>
          </section>
        </Container>

        <Container>
          <Separator />
        </Container>

        <Container asChild>
          <section>
            <NewsletterCta />
          </section>
        </Container>
      </div>
    </div>
  );
}
