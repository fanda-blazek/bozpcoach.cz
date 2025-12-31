"use client";

import { BriefcaseIcon, RocketIcon, UsersIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
// import { Link } from "../ui/link";

const services = [
  {
    icon: <UsersIcon className="size-6" />,
    title: "PRO ZAMĚSTNANCE",
    subtitle: "Interaktivní trénink pro výrobu a sklady",
    description:
      'Žádné nudné slajdy a předčítání zákonů. Naučím vaše lidi techniku "Stop-Check" a jak odhalit 4 pasti mysli: spěch, únavu, frustraci a rutinu. Lidé pochopí, proč to dělají pro sebe, ne pro firmu.',
    items: ["Workshop: Bezpečná mysl"],
    buttonText: "Poptat firemní workshop",
    buttonHref: "#kontakt",
  },
  {
    icon: <BriefcaseIcon className="size-6" />,
    title: "PRO VEDENÍ",
    subtitle: "Rozvojové školení pro mistry a teamleadery",
    description:
      "Změňte roli mistrů z drába na respektovaného lídra. Trénujeme, jak vést vytýkací rozhovor bez obviňování, jak budovat psychologické bezpečí a jak motivovat tým k dodržování OOPP jinak než křikem.",
    items: ["Trénink: Lídr jako kouč bezpečnosti"],
    buttonText: "Poptat trénink pro lídry",
    buttonHref: "#kontakt",
  },
];

const featuredService = {
  icon: <RocketIcon className="size-6" />,
  title: "SAFETY LEADERSHIP AKADEMIE (1:1)",
  subtitle: "Trénink vlivu a psychologie pro OZO a manažery",
  description:
    'Nebudeme si jen povídat. Budeme trénovat. Tento program vás provede kompletní změnou přístupu – od "policajta" k respektovanému lídrovi, kterého lidé poslouchají.',
  items: [
    "Nultá hodina – nastavíme strategii, cíle a plán na míru",
    "Představení metod – konkrétní nástroje z psychologie a koučinku (GROW, zpětná vazba)",
    "Praktický trénink – zkoušíme metody na situacích z vašeho provozu",
  ],
  target: "Pro bezpečáky (OZO), mistry a vedoucí výroby",
  scope: "5 setkání včetně materiálů",
  price: "9 900 Kč",
  priceNote: "Možnost jednorázové konzultace za 2 500 Kč",
  buttonText: "Chci začít nultou hodinou",
  buttonHref: "#kontakt",
};

export function ServicesBlock({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-8", className)}>
      {/* First two cards in a row */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {services.map((service, index) => (
          <Card
            key={index}
            className="border-border flex flex-col space-y-6 rounded-lg border p-8 transition-shadow"
          >
            <div className="flex items-center gap-4">
              <div className="bg-muted rounded-full p-3">{service.icon}</div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
            </div>

            <p className="text-foreground -mt-2 text-sm font-medium">{service.subtitle}</p>

            <p className="text-muted-foreground leading-relaxed">{service.description}</p>

            <div className="grow space-y-3">
              {service.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex gap-3">
                  <div className="bg-foreground mt-2 h-1.5 w-1.5 shrink-0 rounded-full" />
                  <span className="text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <Button asChild className="w-full" variant="outline">
              {service.buttonText}
            </Button>
          </Card>
        ))}
      </div>

      {/* Featured card - full width with horizontal layout */}
      <Card className="border-primary ring-primary rounded-lg border-2 p-8 ring-2">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
          {/* Left side - Main info */}
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 rounded-full p-3">{featuredService.icon}</div>
              <div>
                <h3 className="text-2xl font-bold">{featuredService.title}</h3>
                <p className="text-foreground mt-1 text-sm font-medium">
                  {featuredService.subtitle}
                </p>
              </div>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">
              {featuredService.description}
            </p>

            <div className="space-y-3">
              <p className="text-foreground text-sm font-semibold">Jak spolupráce probíhá:</p>
              {featuredService.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex gap-3">
                  <div className="bg-primary mt-2 h-1.5 w-1.5 shrink-0 rounded-full" />
                  <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Details & CTA */}
          <div className="flex flex-col gap-6 lg:w-80">
            <div className="border-border bg-muted/50 space-y-4 rounded-lg border p-6">
              <div>
                <p className="text-muted-foreground mb-2 text-xs font-medium tracking-wide uppercase">
                  Pro koho
                </p>
                <p className="text-foreground text-sm font-medium">{featuredService.target}</p>
              </div>

              <div>
                <p className="text-muted-foreground mb-2 text-xs font-medium tracking-wide uppercase">
                  Rozsah
                </p>
                <p className="text-foreground text-sm font-medium">{featuredService.scope}</p>
              </div>

              <div className="border-border border-t pt-4">
                <p className="text-foreground mb-1 text-3xl font-bold">{featuredService.price}</p>
                <p className="text-muted-foreground text-xs">{featuredService.priceNote}</p>
              </div>
            </div>

            <Button asChild size="lg" className="w-full">
              {featuredService.buttonText}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
