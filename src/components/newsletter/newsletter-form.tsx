"use client";

import { useForm } from "@tanstack/react-form";
import { z } from "zod";
import { useState, useRef } from "react";
import { Link } from "@/components/ui/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Spinner } from "../ui/spinner";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircleIcon, AlertCircleIcon } from "lucide-react";
import { legalLinks } from "@/config/legal-links";
import { Field, FieldLabel, FieldError, FieldGroup } from "@/components/ui/field";
import { Turnstile, type TurnstileRef } from "@/components/turnstile/turnstile";

import { cn } from "@/lib/utils";

const newsletterFormSchema = z.object({
  "newsletter-email": z.email({
    message: "Prosím zadejte platnou emailovou adresu.",
  }),
  turnstileToken: z.string().min(1, {
    message: "Prosím potvrďte, že nejste robot.",
  }),
});

type NewsletterFormValues = z.infer<typeof newsletterFormSchema>;

export function NewsletterForm({ className, ...props }: React.ComponentProps<"div">) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const turnstileRef = useRef<TurnstileRef>(null);

  const form = useForm({
    defaultValues: {
      "newsletter-email": "",
      turnstileToken: "",
    },
    validators: {
      onSubmit: newsletterFormSchema,
    },
    onSubmit: async ({ value }: { value: NewsletterFormValues }) => {
      setIsSubmitting(true);
      setSubmitStatus({ type: null, message: "" });

      try {
        const response = await fetch("/api/newsletter", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: value["newsletter-email"],
            turnstileToken: value.turnstileToken,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          setSubmitStatus({
            type: "success",
            message: data.message || "Úspěšně jste se přihlásil k odběru newsletteru!",
          });
          form.reset();
          turnstileRef.current?.reset();
        } else {
          setSubmitStatus({
            type: "error",
            message:
              data.error || "Nastala chyba při přihlašování k odběru. Zkuste to prosím později.",
          });
        }
      } catch {
        setSubmitStatus({
          type: "error",
          message: "Nastala chyba při přihlašování k odběru. Zkuste to prosím později.",
        });
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  return (
    <div {...props} className={cn("@container", className)}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
      >
        <FieldGroup>
          <div className="flex items-end gap-3">
            <form.Field name="newsletter-email">
              {(field) => {
                const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid} className="w-full">
                    <FieldLabel htmlFor={field.name}>Emailová adresa *</FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      type="email"
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      placeholder="váš@email.cz"
                    />
                    {isInvalid && <FieldError errors={field.state.meta.errors} />}
                  </Field>
                );
              }}
            </form.Field>

            <Button type="submit" disabled={isSubmitting} className="hidden @sm:inline-flex">
              {isSubmitting && <Spinner />}
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </Button>
          </div>

          <p className="text-muted-foreground text-sm">
            Kliknutím na tlačítko Odebírat souhlasíte se zasíláním našeho newsletteru. Odhlásit se
            můžete kdykoliv. Více informací naleznete v našich zásadách ochrany osobních údajů.{" "}
            <Link
              href={legalLinks.gdpr.href}
              target="_blank"
              className="underline hover:no-underline"
            >
              osobních údajů.
            </Link>{" "}
          </p>

          <form.Field name="turnstileToken">
            {(field) => {
              const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <Turnstile
                    ref={turnstileRef}
                    onSuccess={(token: string) => field.handleChange(token)}
                    onError={() => field.handleChange("")}
                    onExpire={() => field.handleChange("")}
                  />
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          </form.Field>

          <Button type="submit" disabled={isSubmitting} className="w-full @sm:hidden">
            {isSubmitting && <Spinner />}
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </Button>

          {submitStatus.type && (
            <Alert variant={submitStatus.type === "error" ? "destructive" : "default"}>
              {submitStatus.type === "success" ? (
                <CheckCircleIcon aria-hidden="true" className="size-4" />
              ) : (
                <AlertCircleIcon aria-hidden="true" className="size-4" />
              )}
              <AlertTitle>
                {submitStatus.type === "success"
                  ? "Successfully subscribed!"
                  : "Subscription failed"}
              </AlertTitle>
              <AlertDescription>{submitStatus.message}</AlertDescription>
            </Alert>
          )}
        </FieldGroup>
      </form>
    </div>
  );
}
