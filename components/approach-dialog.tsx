"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { EditorialAction } from "./editorial-button";

export function ApproachDialog() {
  const [open, setOpen] = useState(false);

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

  return (
    <>
      <EditorialAction onClick={() => setOpen(true)}>Read our approach</EditorialAction>
      <AnimatePresence>
        {open && (
          <motion.div
            className="approach-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="approach-dialog-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.article
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 18 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <button className="icon-button" onClick={() => setOpen(false)} aria-label="Close approach">
                <X aria-hidden="true" size={26} strokeWidth={1.1} />
              </button>
              <p className="eyebrow">Research / Method</p>
              <h2 id="approach-dialog-title">Matter is both evidence and possibility.</h2>
              <p>We begin with patient observation, test without erasing a material’s character, and transform only when the result offers a more thoughtful way forward.</p>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
