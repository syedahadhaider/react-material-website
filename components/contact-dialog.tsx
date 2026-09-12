"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import { EditorialAction } from "./editorial-button";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

export function ContactDialog({ triggerLabel = "Start a project" }: { triggerLabel?: string }) {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const close = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", close);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", close);
    };
  }, [open]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const nextErrors: Errors = {};
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    if (name.length < 2) nextErrors.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(email)) nextErrors.email = "Please enter a valid email.";
    if (message.length < 20) nextErrors.message = "Tell us a little more (at least 20 characters).";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      // Replace this local success state with the studio's form endpoint when available.
      setSent(true);
    }
  }

  return (
    <>
      <EditorialAction onClick={() => setOpen(true)}>{triggerLabel}</EditorialAction>
      <AnimatePresence>
        {open && (
          <motion.div
            className="contact-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="contact-dialog__panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                type="button"
                className="icon-button contact-dialog__close"
                onClick={() => setOpen(false)}
                aria-label="Close project form"
              >
                <X aria-hidden="true" size={28} strokeWidth={1.1} />
              </button>
              {sent ? (
                <div className="form-success" aria-live="polite">
                  <Check aria-hidden="true" size={34} strokeWidth={1} />
                  <p className="eyebrow">Message received</p>
                  <h2 id="contact-title">Thank you.</h2>
                  <p>We’ll read your note and respond at the email you provided.</p>
                  <EditorialAction onClick={() => setOpen(false)}>Close</EditorialAction>
                </div>
              ) : (
                <form onSubmit={submit} noValidate>
                  <p className="eyebrow">Begin a conversation</p>
                  <h2 id="contact-title">Tell us what you are making.</h2>
                  <label>
                    Name
                    <input name="name" autoComplete="name" aria-describedby="name-error" />
                    {errors.name && <span id="name-error">{errors.name}</span>}
                  </label>
                  <label>
                    Email
                    <input name="email" type="email" autoComplete="email" aria-describedby="email-error" />
                    {errors.email && <span id="email-error">{errors.email}</span>}
                  </label>
                  <label>
                    Area of interest
                    <select name="interest" defaultValue="Material research">
                      <option>Material research</option>
                      <option>Object collaboration</option>
                      <option>Editorial commission</option>
                      <option>Other</option>
                    </select>
                  </label>
                  <label>
                    Project note
                    <textarea name="message" rows={5} aria-describedby="message-error" />
                    {errors.message && <span id="message-error">{errors.message}</span>}
                  </label>
                  <EditorialAction type="submit">Send inquiry</EditorialAction>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
