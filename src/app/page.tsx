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
import PortraitImage from "@/assets/images/2025-11-06-nikca-kancl-145-6.jpg";
import { ArrowDownIcon, ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { AboutBlock } from "@/components/home-page/about-block";
import { HowItWorksBlock } from "@/components/home-page/how-it-works-block";
import { HodnoceniRizikCta } from "@/components/home-page/hodnoceni-rizik-cta";
import { ContactBlock } from "@/components/contact/contact-block";
import { FaqBlock } from "@/components/faq/faq-block";

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
            className="pointer-events-none w-full scale-150 opacity-40 select-none sm:scale-100 sm:opacity-85"
          />
        </HeroBackground>
        <HeroContent className="grid gap-16 lg:grid-cols-12">
          <div className="flex-col items-start justify-center lg:col-span-7 2xl:flex">
            <Badge>
              Just released v1.0.0 <ArrowUpRightIcon className="size-4" />
            </Badge>
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
          <div className="aspect-4/5 overflow-hidden rounded-3xl lg:col-span-5">
            <StaticImage
              image={PortraitImage}
              alt="Nikola Hoskova portret"
              className="-translate-y-10 scale-110 object-cover"
            />
          </div>
        </HeroContent>
      </Hero>

      <div className="space-y-16 py-24 md:space-y-32">
        <Container asChild>
          <section id="problem">
            <h2 className="text-lg font-medium sm:text-xl">
              Máte papíry v pořádku, ale úrazy se stále dějí?
            </h2>
            <p className="font-display mt-8 bg-radial-[at_50%_75%] from-orange-900 to-orange-600 bg-clip-text text-2xl leading-snug font-semibold text-transparent sm:text-3xl lg:text-4xl">
              Většina nehod nevzniká neznalostí legislativy, ale selháním lidského faktoru.
              Zaměstnanci ve spěchu a rutině obcházejí pravidla. Mistři fungují jako
              „policajti&quot; a lidé před nimi problémy zatajují. Klasické školení BOZP je pro tým
              jen nutné zlo.
            </p>
            <p className="font-display mt-8 bg-radial-[at_50%_75%] from-orange-900 to-orange-600 bg-clip-text text-2xl leading-snug font-semibold text-transparent sm:text-3xl lg:text-4xl">
              Pokud chcete trvalou změnu, musíte přestat jen nařizovat a začít lidi trénovat.
            </p>
          </section>
        </Container>

        <Container>
          <Separator />
        </Container>

        <Container asChild>
          <section id="sluzby">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Služby
            </h2>
            <p className="max-w-prose pt-8">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam fuga illum obcaecati
              sapiente sint nemo unde blanditiis voluptates nesciunt exercitationem.
            </p>
            <div className="pt-8">
              <ServicesBlock />
            </div>
          </section>
        </Container>

        <Container asChild>
          <section id="sluzby">
            <HowItWorksBlock />
          </section>
        </Container>

        <Container>
          <Separator />
        </Container>

        <Container asChild>
          <section id="o-mne">
            <AboutBlock />
          </section>
        </Container>

        <Container asChild>
          <section id="kontakt">
            <ContactBlock />
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

        <Container>
          <Separator />
        </Container>

        <Container asChild>
          <section>
            <HodnoceniRizikCta />
          </section>
        </Container>

        <Container>
          <Separator />
        </Container>

        <Container asChild>
          <section id="faq">
            <FaqBlock />
          </section>
        </Container>
      </div>
    </div>
  );
}
