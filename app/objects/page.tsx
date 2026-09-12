import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";

export const metadata: Metadata = {
  title: "Objects",
  description: "An archive of matter: paper, glass, surface, and metal studies.",
};

const objects = [
  { label: "Paper / Form", image: "/images/objects/paper-form.png", href: "/stories/memory-of-paper" },
  { label: "Glass / Light", image: "/images/objects/glass-light.png", href: "/objects/vessel-no-07" },
  { label: "Surface / Memory", image: "/images/objects/surface-memory.png", href: "/research" },
  { label: "Metal / Time", image: "/images/objects/metal-time.png", href: "/stories" },
] as const;

export default function ObjectsPage() {
  return (
    <main className="material-page objects-page">
      <Header />
      <div className="objects-backdrop" aria-hidden="true">
        <Image src="/images/home/edition-04.png" alt="" fill priority sizes="100vw" />
      </div>
      <div className="objects-shade" aria-hidden="true" />
      <Reveal className="objects-content">
        <SectionLabel>Objects / Selected materials</SectionLabel>
        <h1>An archive<br />of matter</h1>
        <div className="object-grid">
          {objects.map((item, index) => (
            <Link href={item.href} key={item.label} className="object-card">
              <span className="object-card__image">
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  loading={index < 2 ? "eager" : "lazy"}
                  sizes="(max-width: 767px) 90vw, 25vw"
                />
              </span>
              <span className="object-card__label">{item.label}</span>
            </Link>
          ))}
        </div>
        <Link className="text-link" href="/objects/vessel-no-07">View all objects</Link>
      </Reveal>
    </main>
  );
}
