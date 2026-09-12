import Link from "next/link";

const links = [
  ["Objects", "/objects"],
  ["Research", "/research"],
  ["Stories", "/stories"],
  ["Instagram", "https://instagram.com"],
  ["Privacy", "/privacy"],
] as const;

export function Footer() {
  return (
    <footer className="site-footer">
      <nav aria-label="Footer navigation" className="site-footer__links">
        {links.map(([label, href]) => (
          <Link key={label} href={href as never}>
            {label}
          </Link>
        ))}
      </nav>
      <div className="site-footer__end">
        <span>© Material Studies 2026</span>
        <span className="site-footer__rule" aria-hidden="true" />
        <span>Ideas inform a kinder world.</span>
      </div>
    </footer>
  );
}
