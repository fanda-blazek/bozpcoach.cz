import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faq: FaqItem[] = [
  {
    id: "faq-1",
    question: "Nahrazují workshopy povinné zákonné školení BOZP?",
    answer:
      "Ne. Je to praktická nadstavba pro firmy, které chtějí víc než jen splnit povinnost. Zákon řeší paragrafy, já řeším lidský faktor a psychologii. Jsem OZO v prevenci rizik, ale učím lidi bezpečnost chápat, ne jen podepisovat.",
  },
  {
    id: "faq-2",
    question: "V čem se lišíte od běžného bezpečnostního technika?",
    answer:
      "Technik hlídá papíry a normy (hard skills). Já jako BOZP Coach měním myšlení a komunikaci lidí (soft skills). Často s interními techniky spolupracuji – pomáhám jim, aby jejich nařízení lidé skutečně respektovali.",
  },
  {
    id: "faq-3",
    question: "Jezdíte za klienty, nebo školíte u sebe?",
    answer:
      "Jezdím za vámi po celé ČR (Praha, Brno, Ostrava). Sídlo mám v Plzni. Trénink přímo ve vašem provozu má největší dopad. Safety Leadership Akademii nabízím i formou online konzultací.",
  },
  {
    id: "faq-4",
    question: "Má to smysl i pro malou firmu?",
    answer:
      "Ano. Principy fungování mozku jsou stejné všude. V menším týmu dokonce změnu firemní kultury BOZP nastartujeme rychleji než v korporátu. Obsah vždy upravuji na míru vašim rizikům.",
  },
];

export function Faq(props: Omit<React.ComponentProps<"div">, "children">) {
  return (
    <div {...props}>
      <Accordion type="single" collapsible>
        {faq.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="font-semibold hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              <div className="prose" dangerouslySetInnerHTML={{ __html: item.answer }} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
