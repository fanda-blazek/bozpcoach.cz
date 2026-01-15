import { Linkedin, Mail, Phone } from "lucide-react";

import { cn } from "@/lib/utils";

import { ContactForm } from "./contact-form";
import { Button } from "../ui/button";

export function ContactBlock(props: React.ComponentProps<"div">) {
  return (
    <div {...props} className={cn("relative", props.className)}>
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-x-0 -top-20 -bottom-20 bg-[radial-gradient(ellipse_35%_15%_at_40%_55%,hsl(var(--accent))_0%,transparent_100%)] lg:bg-[radial-gradient(ellipse_12%_20%_at_60%_45%,hsl(var(--accent))_0%,transparent_100%)]"></div>
      <div className="pointer-events-none absolute inset-x-0 -top-20 -bottom-20 bg-[radial-gradient(ellipse_35%_20%_at_70%_75%,hsl(var(--accent))_0%,transparent_80%)] lg:bg-[radial-gradient(ellipse_15%_30%_at_70%_65%,hsl(var(--accent))_0%,transparent_80%)]"></div>
      {/* Background pattern */}
      <div className="pointer-events-none absolute inset-x-0 -top-20 -bottom-20 bg-[radial-gradient(hsl(var(--accent-foreground)/0.1)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_60%_at_65%_50%,#000_0%,transparent_80%)] [background-size:8px_8px]"></div>
      <div className="container grid w-full grid-cols-1 gap-x-32 overflow-hidden lg:grid-cols-2">
        <div className="w-full pb-10 md:space-y-10 md:pb-0">
          <div className="space-y-4 md:max-w-160">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Kontakt
            </h2>
            <div className="text-muted-foreground md:text-base lg:text-lg lg:leading-7">
              Nečekejte na další úraz. Zavolejte mi nebo napište na nezávaznou konzultaci. Působím
              po celé ČR (osobně i online).
            </div>
          </div>
          <div className="hidden md:block">
            <div className="space-y-16 pb-20 lg:pb-0">
              <div className="space-y-6">
                <div className="space-y-4">
                  <p className="text-sm font-semibold">moje kontakntí údaje</p>
                  <div className="flex items-center space-x-2.5">
                    <Button asChild variant="secondary">
                      <address>
                        <Mail />
                        <a href="mailto:jim@example.com">jim@example.com</a>
                      </address>
                    </Button>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <Button asChild variant="secondary">
                      <address>
                        <Phone />
                        <a href="tel:+14155550132">+1 (415) 555‑0132</a>
                      </address>
                    </Button>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <Button asChild variant="secondary">
                      <address>
                        <Linkedin />
                        <a href="https://cz.linkedin.com/in/nikolahošková">linkedin</a>
                      </address>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center lg:mt-2.5">
          <div className="relative w-full max-w-120 min-w-[20rem] overflow-visible md:min-w-[24rem]">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
