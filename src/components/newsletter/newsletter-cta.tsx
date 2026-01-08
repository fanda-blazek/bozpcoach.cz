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
          Stay Informed
        </Badge>

        {/* Heading */}
        <h4 className="mt-4 text-2xl font-semibold tracking-tight md:text-center md:text-3xl xl:text-4xl">
          Subscribe to our newsletter
        </h4>

        {/* Description */}
        <p className="text-muted-foreground mt-2 text-lg font-medium md:text-center xl:text-xl">
          Get the <span className="text-primary">latest updates</span>,{" "}
          <span className="text-primary">tips</span>, and{" "}
          <span className="text-primary">exclusive</span> offers from AlignUI.
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
            Weekly updates
          </div>
          <div className="flex items-center gap-2 text-sm xl:text-base">
            <CheckCircle className="h-4 w-4 text-green-500" />
            Exclusive content
          </div>
          <div className="flex items-center gap-2 text-sm xl:text-base">
            <CheckCircle className="h-4 w-4 text-green-500" />
            Early access for features
          </div>
        </div>
      </div>
    </div>
  );
}
