import { Faq } from "./faq";

export function FaqBlock() {
  return (
    <div className="relative gap-8 sm:grid sm:grid-cols-3 sm:items-start">
      <div className="top-18 self-start pt-6 sm:sticky">
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Často kladené otázky (FAQ)
        </h2>
      </div>
      <div className="sm:col-span-2">
        <Faq />
      </div>
    </div>
  );
}
