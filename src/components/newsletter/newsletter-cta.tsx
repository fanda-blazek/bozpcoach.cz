import { CheckCircle, MailIcon } from "lucide-react";

import { NewsletterForm } from "./newsletter-form";
import { Badge } from "../ui/badge";

export function NewsletterCta(props: React.ComponentProps<"div">) {
  return (
    <div {...props}>
      <div className="flex flex-col items-start md:items-center">
        {/* Badge */}
        <Badge>
          <MailIcon />
          Zůstaňte informovaný
        </Badge>

        {/* Heading */}
        <h4 className="font-display mt-4 text-2xl font-semibold tracking-tight md:text-center md:text-3xl xl:text-4xl">
          Přihlaste se k odběru našeho newsletteru
        </h4>

        {/* Description */}
        <p className="text-muted-foreground mt-2 text-lg font-medium md:text-center xl:text-xl">
          Získejte <span className="text-primary">nejnovější informace</span> a{" "}
          <span className="text-primary">exkluzivní</span> nabídky BOZP.
        </p>

        {/* Form */}
        <div className="mt-5 w-full xl:mt-8">
          <div className="mx-auto max-w-3xl">
            <NewsletterForm />
          </div>
        </div>

        {/* Features */}
        <div className="mt-5 flex flex-wrap gap-4 md:justify-center xl:mt-8 xl:gap-7">
          <div className="flex items-center gap-2 text-sm xl:text-base">
            <CheckCircle className="h-4 w-4 text-green-500" />
            Novinky každý týden
          </div>
          <div className="flex items-center gap-2 text-sm xl:text-base">
            <CheckCircle className="h-4 w-4 text-green-500" />
            Exkluzivní nabídky na školení
          </div>
          <div className="flex items-center gap-2 text-sm xl:text-base">
            <CheckCircle className="h-4 w-4 text-green-500" />
            Žádný spam, odhlášení kdykoliv
          </div>
        </div>
      </div>
    </div>
  );
}
