"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";

import { CTAButton } from "@/components/ui/CTAButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ViewportReveal } from "@/components/ui/ViewportReveal";

type Profil = "jeune" | "structure" | "entreprise";

const PROFIL_OPTIONS = [
  { key: "jeune" satisfies Profil, label: "Je suis un jeune" },
  { key: "structure" satisfies Profil, label: "Je représente une structure" },
  { key: "entreprise" satisfies Profil, label: "Je suis une entreprise" },
] as const;

const FORM_ENDPOINT =
  process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT ??
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

export function ContactProfilesForm() {
  const [profil, setProfil] = useState<Profil>("jeune");

  const [status, setStatus] = useState<"idle" | "pending" | "done" | "error">(
    "idle",
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("profil", profil);

    setStatus("pending");

    try {
      if (FORM_ENDPOINT) {
        const res = await fetch(FORM_ENDPOINT, {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        });
        if (!res.ok) {
          throw new Error("formulaire inaccessible");
        }
      } else {
        const corps = `
Profil : ${profil}
Nom : ${String(formData.get("nom"))}
Courriel : ${String(formData.get("_replyto"))}
Message :
${String(formData.get("message"))}
`;

        window.location.href = `mailto:contact@rugban.fr?subject=${encodeURIComponent("Contact depuis rugban.site")}&body=${encodeURIComponent(corps.trim())}`;
      }

      setStatus("done");
    } catch {
      setStatus("error");
    }

    window.setTimeout(() => setStatus("idle"), 2200);
  }

  const champsAdditionnels = useMemo(() => {
    if (profil === "jeune") {
      return (
        <>
          <div className="grid gap-2">
            <Label htmlFor="age">Âge</Label>
            <Input id="age" name="age" type="number" min={10} required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="situation">Situation actuelle</Label>
            <Input id="situation" name="situation" placeholder="Formation, recherche emploi…" required />
          </div>
        </>
      );
    }

    if (profil === "structure") {
      return (
        <>
          <div className="grid gap-2">
            <Label htmlFor="nom-structure">Nom structure</Label>
            <Input id="nom-structure" name="nom_structure" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="structure-ville">Ville</Label>
            <Input id="structure-ville" name="structure_ville" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="type-structure">Type de structure</Label>
            <Input id="type-structure" name="type_structure" required />
          </div>
        </>
      );
    }

    return (
      <>
        <div className="grid gap-2">
          <Label htmlFor="societe">Nom société</Label>
          <Input id="societe" name="entreprise_nom" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="fonction">Poste</Label>
          <Input id="fonction" name="entreprise_role" required />
        </div>
      </>
    );
  }, [profil]);

  return (
    <ViewportReveal>
      <form
        className="space-y-8 border border-white/15 bg-black/65 p-8 shadow-[30px_-30px_0px_rgba(255,107,53,0.2)]"
        onSubmit={(event) => void handleSubmit(event)}
      >
        <fieldset className="space-y-4">
          <legend className="text-xs uppercase tracking-[0.42em] text-muted">
            Vous vous présentez comme…
          </legend>
          <div className="flex flex-wrap gap-3">
            {PROFIL_OPTIONS.map(({ key, label }) => (
              <button
                key={key}
                type="button"
                aria-pressed={profil === key}
                className={`border px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.25em] ${
                  profil === key ? "border-accent bg-accent text-ink" : "border-muted text-muted"
                }`}
                onClick={() => setProfil(key)}
              >
                {label}
              </button>
            ))}
          </div>
        </fieldset>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="nom">Nom</Label>
            <Input id="nom" name="nom" autoComplete="name" required />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="replyto">Email</Label>
            <Input id="replyto" name="_replyto" type="email" autoComplete="email" required />
          </div>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={profil}
              layout
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="col-span-full grid gap-6 md:grid-cols-2"
            >
              {champsAdditionnels}
            </motion.div>
          </AnimatePresence>

          <div className="col-span-full grid gap-2">
            <Label htmlFor="message">Message</Label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full resize-y border border-muted bg-transparent px-4 py-4 text-white outline-none focus-visible:border-accent"
              required
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <CTAButton type="submit" uppercase={false} disabled={status === "pending"}>
            <span className="flex items-center gap-2">
              {status === "pending" ? (
                <Loader2 aria-hidden className="h-5 w-5 animate-spin text-ink" />
              ) : null}
              Envoyer
            </span>
          </CTAButton>
          <p aria-live="polite" className="text-xs uppercase tracking-[0.32em] text-muted">
            {status === "done"
              ? "Transmission prise en compte."
              : status === "error"
                ? "Problème d'envoi : mail direct à contact@rugban.fr conseillé."
                : FORM_ENDPOINT ? null : "Mode mail ouvert par défaut depuis ce navigateur."}
          </p>
        </div>
      </form>
    </ViewportReveal>
  );
}
