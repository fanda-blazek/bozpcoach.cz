"use client";

import { ArrowRight, BrainIcon, CheckCircle, MegaphoneIcon, RocketIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: <BrainIcon className="h-6 w-6" />,
    title: "Workshop: Bezpečná mysl",
    description:
      "Interaktivní trénink zaměřený na lidský faktor, ne na zákony. Naučím vaše lidi pracovat s pozorností a ukážu jim, jak funguje mozek v rutině. Cíl: Aby bezpečnost dodržovali pro sebe, ne pro firmu.",
    items: [
      "Technika Stop-Check: Nástroj na zapnutí pozornosti.",
      "Pasti mysli: Jak spěch a únava ovlivňují úsudek.",
      "Praxe: Rizika z vašeho provozu.",
    ],
    deliverables: ["Vnitřní motivace", "Nástroje pro soustředění", "Certifikát"],
    duration: "2–4 hodiny (dle dohody)",
    price: "Cena na vyžádání",
    featured: false,
  },
  {
    icon: <MegaphoneIcon className="h-6 w-6" />,
    title: "Trénink: Lídr jako kouč bezpečnosti",
    description:
      "Praktický trénink pro mistry a parťáky. Změňte jejich roli z kontrolorů na respektované lídry. Naučí se, jak vytknout chybu bez konfliktu a jak motivovat lidi k nošení OOPP jinak než křikem.",
    items: [
      "Psychologie vlivu: Jak mluvit, aby lidé naslouchali.",
      "Zpětná vazba: Techniky pro nápravu chování.",
      "Kultura: Jak budovat důvěru místo strachu.",
    ],
    deliverables: ["Koučující přístup", "Respektující autorita", "Certifikát"],
    duration: "3–4 hodiny (max. 8 osob)",
    price: "Cena na vyžádání",
    featured: true,
  },
  {
    icon: <RocketIcon className="h-6 w-6" />,
    title: "Safety leadership akademie",
    description:
      "Intenzivní individuální program pro OZO a manažery. Provedu vás změnou z role kontrolora na partnera managementu. Nastavíme strategii, zvýšíme vaše sebevědomí a natrénujeme řešení krizových situací.",
    items: [
      "Strategie: Audit silných stránek a cíle.",
      "Koučink: Metody pro změnu myšlení lidí (GROW).",
      "Trénink: Zkouška náročných rozhovorů nanečisto.",
    ],
    deliverables: ["Osobní rozvojový plán", "Strategie kultury", "Šablony"],
    duration: "5 setkání (1:1)",
    price: "9 900 Kč",
    featured: false,
  },
];

export function ServicesBlock(props: React.ComponentProps<"div">) {
  return (
    <div {...props}>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className={`group relative overflow-hidden rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
              service.featured
                ? "border-primary/20 bg-background shadow-lg"
                : "border-border bg-background/80 hover:bg-background backdrop-blur-sm"
            }`}
          >
            <div className="p-8">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`rounded-lg p-3 ${
                      service.featured
                        ? "bg-primary/10 text-primary"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold">{service.title}</h3>
                    <div className="text-muted-foreground mt-1 text-sm">{service.duration}</div>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mt-6 leading-relaxed">{service.description}</p>

              <div className="mt-6 space-y-4">
                <div>
                  <h4 className="mb-3 text-sm font-medium">Co je zahrnuto:</h4>
                  <ul className="space-y-2">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-3 text-sm">
                        <CheckCircle className="h-4 w-4 shrink-0 text-green-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-muted/50 rounded-lg p-3">
                  <h4 className="mb-2 text-sm font-medium">Výstupy:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.deliverables.map((deliverable, delivIndex) => (
                      <Badge key={delivIndex} variant="secondary" className="text-xs">
                        {deliverable}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-border mt-8 border-t pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-lg font-semibold">{service.price}</div>
                    <div className="text-muted-foreground text-xs">Nabídka na míru</div>
                  </div>
                  <Button
                    size="sm"
                    variant={service.featured ? "default" : "outline"}
                    className="transition-all group-hover:shadow-md"
                  >
                    Mám zájem
                    <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
