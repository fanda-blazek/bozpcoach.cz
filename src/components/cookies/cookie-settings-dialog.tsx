"use client";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../ui/alert-dialog";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { useCookieContext } from "./cookie-context";
import { Button } from "../ui/button";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
import { Link } from "../ui/link";
import { legalLinks } from "@/config/legal-links";

export function CookieSettingsDialog() {
  const { consent, updateConsent, saveConsent, isSettingsOpen, closeSettingsDialog } =
    useCookieContext();

  function handleDeny() {
    saveConsent({
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false,
    });
    closeSettingsDialog();
  }

  function handleAcceptAll() {
    saveConsent({
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
    });
    closeSettingsDialog();
  }

  function handleSave() {
    saveConsent();
    closeSettingsDialog();
  }

  return (
    <AlertDialog open={isSettingsOpen} onOpenChange={closeSettingsDialog}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Nastavení cookies</AlertDialogTitle>
          <AlertDialogDescription>
            Spravujte své předvolby souborů cookies. Zablokování některých cookies může ovlivnit váš
            uživatelský zážitek.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div>
          <div className="border-border divide-border mt-4 divide-y rounded-lg border">
            <div className="flex flex-col gap-2 p-3">
              <div className="flex items-center justify-between gap-2">
                <Label htmlFor="necessary" className="cursor-not-allowed opacity-70">
                  Nezbytné
                </Label>
                <Switch
                  id="necessary"
                  checked={consent.necessary}
                  disabled
                  aria-label="Necessary cookies (always enabled)"
                />
              </div>
              <p className="text-muted-foreground text-sm opacity-70">
                „Nezbytné pro fungování webových stránek. Umožňují základní funkce, jako je navigace
                na stránce a přístup k zabezpečeným sekcím.
              </p>
            </div>

            <div className="flex flex-col gap-2 p-3">
              <div className="flex items-center justify-between gap-2">
                <Label htmlFor="functional" className="cursor-pointer">
                  Funkční
                </Label>
                <Switch
                  id="functional"
                  checked={consent.functional}
                  onCheckedChange={(checked) => updateConsent("functional", checked as boolean)}
                  aria-label="Functional cookies"
                />
              </div>
              <p className="text-muted-foreground text-sm">
                Zajišťují lepší funkčnost a přizpůsobení webu, například si pamatují vaše zvolené
                nastavení nebo jazykové preference.
              </p>
            </div>

            <div className="flex flex-col gap-2 p-3">
              <div className="flex items-center justify-between gap-2">
                <Label htmlFor="analytics" className="cursor-pointer">
                  Analytyka
                </Label>
                <Switch
                  id="analytics"
                  checked={consent.analytics}
                  onCheckedChange={(checked) => updateConsent("analytics", checked as boolean)}
                  aria-label="Analytics cookies"
                />
              </div>
              <p className="text-muted-foreground text-sm">
                Díky nim lépe rozumíme tomu, jak lidé náš web používají. To nám pomáhá zlepšovat
                obsah i to, jak se vám se stránkami pracuje.
              </p>
            </div>

            <div className="flex flex-col gap-2 p-3">
              <div className="flex items-center justify-between gap-2">
                <Label htmlFor="marketing" className="cursor-pointer">
                  Marketing
                </Label>
                <Switch
                  id="marketing"
                  checked={consent.marketing}
                  onCheckedChange={(checked) => updateConsent("marketing", checked as boolean)}
                  aria-label="Marketing cookies"
                />
              </div>
              <p className="text-muted-foreground text-sm">
                Pomáhají nám zobrazovat reklamy, které vás zajímají, a vyhodnocovat úspěšnost našich
                marketingových aktivit.
              </p>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-muted-foreground text-sm">
              Vícš informací o tom jak používáme cookies naleznete zde{" "}
              <Link
                href={legalLinks.cookies.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline"
              >
                Pravidla cookies
              </Link>
            </p>
          </div>
        </div>
        <AlertDialogFooter className="mt-4">
          <AlertDialogPrimitive.Action asChild>
            <Button variant="secondary" onClick={handleDeny}>
              Odmítnout
            </Button>
          </AlertDialogPrimitive.Action>
          <AlertDialogPrimitive.Action asChild>
            <Button variant="secondary" onClick={handleAcceptAll}>
              Přijmout vše
            </Button>
          </AlertDialogPrimitive.Action>
          <AlertDialogPrimitive.Action asChild>
            <Button onClick={handleSave}>Uložit</Button>
          </AlertDialogPrimitive.Action>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
