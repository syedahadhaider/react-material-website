"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, Search, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";

const navigation = [
  { label: "Objects", href: "/objects" },
  { label: "Research", href: "/research" },
  { label: "Stories", href: "/stories" },
  { label: "Contact", href: "/contact" },
] as const;

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(
    () =>
      navigation.filter(({ label }) =>
        label.toLowerCase().includes(query.trim().toLowerCase()),
      ),
    [query],
  );

  useEffect(() => {
    if (!searchOpen && !menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSearchOpen(false);
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", handleKey);
    };
  }, [menuOpen, searchOpen]);

  useEffect(() => {
    if (searchOpen) requestAnimationFrame(() => inputRef.current?.focus());
  }, [searchOpen]);

  function submitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const match = results[0];
    if (!match) return;
    setSearchOpen(false);
    setQuery("");
    router.push(match.href);
  }

  return (
    <>
      <header className="site-header">
        <Link href="/" className="site-brand" aria-label="Material Studies home">
          Material Studies
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="header-tools">
          <button
            type="button"
            className="icon-button"
            aria-label="Search the site"
            onClick={() => setSearchOpen(true)}
          >
            <Search aria-hidden="true" size={24} strokeWidth={1.2} />
          </button>
          <span className="header-divider" aria-hidden="true" />
          <p className="header-motto">A more tangible tomorrow</p>
          <button
            type="button"
            className="icon-button menu-button"
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <Menu aria-hidden="true" size={26} strokeWidth={1.2} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              className="icon-button mobile-menu__close"
              onClick={() => setMenuOpen(false)}
              aria-label="Close navigation menu"
            >
              <X aria-hidden="true" size={28} strokeWidth={1.1} />
            </button>
            <nav aria-label="Mobile navigation">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * index }}
                >
                  <Link href={item.href} onClick={() => setMenuOpen(false)}>
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <p>A more tangible tomorrow</p>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {searchOpen && (
          <motion.div
            className="search-overlay"
            role="dialog"
            aria-modal="true"
            aria-label="Site search"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              className="icon-button search-overlay__close"
              onClick={() => setSearchOpen(false)}
              aria-label="Close search"
            >
              <X aria-hidden="true" size={28} strokeWidth={1.1} />
            </button>
            <form onSubmit={submitSearch}>
              <label htmlFor="site-search">Search the archive</label>
              <div className="search-field">
                <input
                  ref={inputRef}
                  id="site-search"
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Objects, research, stories…"
                />
                <Search aria-hidden="true" size={26} strokeWidth={1.1} />
              </div>
              <div className="search-results" aria-live="polite">
                {results.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setSearchOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                {query && results.length === 0 && <p>No matching section.</p>}
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
