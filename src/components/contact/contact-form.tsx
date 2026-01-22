"use client";

import { useForm } from "@tanstack/react-form";
import { z } from "zod";
import { useState, useRef } from "react";
import { Link } from "@/components/ui/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircleIcon, AlertCircleIcon } from "lucide-react";
import { legalLinks } from "@/config/legal-links";
import { Field, FieldLabel, FieldDescription, FieldError, FieldGroup } from "@/components/ui/field";
import { Turnstile, type TurnstileRef } from "@/components/turnstile/turnstile";
import { Spinner } from "../ui/spinner";

import { cn } from "@/lib/utils";

const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Jméno musí obsahovat alespoň 2 znaky.",
    })
    .max(50, {
      message: "Jméno nesmí být delší než 50 znaků.",
    }),
  surname: z
    .string()
    .min(2, {
      message: "Příjmení musí obsahovat alespoň 2 znaky.",
    })
    .max(50, {
      message: "Příjmení nesmí být delší než 50 znaků.",
    }),
  email: z.email({
    message: "Prosím zadejte platnou emailovou adresu.",
  }),
  phone: z
    .string()
    .min(9, {
      message: "Telefonní číslo musí obsahovat alespoň 9 znaků.",
    })
    .regex(/^[+]?[0-9\s\-()]+$/, {
      message: "Prosím zadejte platné telefonní číslo.",
    }),
  message: z
    .string()
    .min(10, {
      message: "Zpráva musí obsahovat alespoň 10 znaků.",
    })
    .max(1000, {
      message: "Zpráva nesmí být delší než 1000 znaků.",
    }),
  gdprConsent: z.boolean().refine((value) => value === true, {
    message: "musíte souhlasit se zpracováním osobních údajů.",
  }),
  turnstileToken: z.string().min(1, {
    message: "Prosím potvrďte, že nejste robot.",
  }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactForm({ className, ...props }: React.ComponentProps<"div">) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const turnstileRef = useRef<TurnstileRef>(null);

  const form = useForm({
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      phone: "",
      message: "",
      gdprConsent: false,
      turnstileToken: "",
    },
    validators: {
      onSubmit: contactFormSchema,
    },
    onSubmit: async ({ value }: { value: ContactFormValues }) => {
      setIsSubmitting(true);
      setSubmitStatus({ type: null, message: "" });

      try {
        const response = await fetch("/api/contact-form", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(value),
        });

        const data = await response.json();

        if (response.ok) {
          setSubmitStatus({
            type: "success",
            message: data.message || "Zpráva úspěšně odeslána",
          });
          form.reset();
          turnstileRef.current?.reset();
        } else {
          setSubmitStatus({
            type: "error",
            message: data.error || "Nastala chyb při odesílní",
          });
        }
      } catch {
        setSubmitStatus({
          type: "error",
          message: "Nastala chyb při odesílání, zkuste to prosím později",
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
          <div className="grid grid-cols-1 gap-4 @lg:grid-cols-2">
            <form.Field name="name">
              {(field) => {
                const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={`contact-${field.name}`}>Name *</FieldLabel>
                    <Input
                      id={`contact-${field.name}`}
                      name={`contact-${field.name}`}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      placeholder="Vaše jméno"
                    />
                    {isInvalid && <FieldError errors={field.state.meta.errors} />}
                  </Field>
                );
              }}
            </form.Field>

            <form.Field name="surname">
              {(field) => {
                const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={`contact-${field.name}`}>Surname *</FieldLabel>
                    <Input
                      id={`contact-${field.name}`}
                      name={`contact-${field.name}`}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      placeholder="Vaše příjmení"
                    />
                    {isInvalid && <FieldError errors={field.state.meta.errors} />}
                  </Field>
                );
              }}
            </form.Field>
          </div>

          <form.Field name="email">
            {(field) => {
              const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={`contact-${field.name}`}>Email Address *</FieldLabel>
                  <Input
                    id={`contact-${field.name}`}
                    name={`contact-${field.name}`}
                    type="email"
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    aria-invalid={isInvalid}
                    placeholder="váš@email.com"
                  />
                  <FieldDescription>Pošleme vám naši odpověd na tento email </FieldDescription>
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          </form.Field>

          <form.Field name="phone">
            {(field) => {
              const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={`contact-${field.name}`}>Phone Number *</FieldLabel>
                  <Input
                    id={`contact-${field.name}`}
                    name={`contact-${field.name}`}
                    type="tel"
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    aria-invalid={isInvalid}
                    placeholder="+420 123 456 789"
                  />
                  <FieldDescription>Telefon pro případné upřesnění vašeho dotazu.</FieldDescription>
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          </form.Field>

          <form.Field name="message">
            {(field) => {
              const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={`contact-${field.name}`}>Message *</FieldLabel>
                  <Textarea
                    id={`contact-${field.name}`}
                    name={`contact-${field.name}`}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    aria-invalid={isInvalid}
                    placeholder="Zde napište svou zpávu"
                    rows={4}
                  />
                  <FieldDescription>Popište nám jak vám můžeme pomoc</FieldDescription>
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          </form.Field>

          <form.Field name="gdprConsent">
            {(field) => {
              const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field orientation="horizontal" data-invalid={isInvalid}>
                  <Checkbox
                    id={`contact-${field.name}`}
                    name={`contact-${field.name}`}
                    checked={field.state.value}
                    onCheckedChange={(checked) => field.handleChange(checked === true)}
                    aria-invalid={isInvalid}
                  />
                  <div className="space-y-1 leading-none">
                    <FieldLabel htmlFor={`contact-${field.name}`}>
                      <span>
                        I agree to the{" "}
                        <Link href={legalLinks.gdpr.href} className="underline hover:no-underline">
                          processing of personal data
                        </Link>{" "}
                        *
                      </span>
                    </FieldLabel>
                    {isInvalid && <FieldError errors={field.state.meta.errors} />}
                  </div>
                </Field>
              );
            }}
          </form.Field>

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

          <Button type="submit" disabled={isSubmitting} size="lg" className="w-full">
            {isSubmitting && <Spinner />}
            {isSubmitting ? "Sending..." : "Submit"}
          </Button>

          {submitStatus.type && (
            <Alert variant={submitStatus.type === "error" ? "destructive" : "default"}>
              {submitStatus.type === "success" ? (
                <CheckCircleIcon aria-hidden="true" className="size-4" />
              ) : (
                <AlertCircleIcon aria-hidden="true" className="size-4" />
              )}
              <AlertTitle>
                {submitStatus.type === "success" ? "Formulář odeslán úspěšně" : "Odeslání selhalo"}
              </AlertTitle>
              <AlertDescription>{submitStatus.message}</AlertDescription>
            </Alert>
          )}
        </FieldGroup>
      </form>
    </div>
  );
}
