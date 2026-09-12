import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { EditorialButton } from "@/components/editorial-button";
import { Header } from "@/components/header";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";

export const metadata: Metadata = {
  title: "A Quieter Kind of Future",
  description: "Issue No. 04 from Material Studies: material research for a more human tomorrow.",
};

const editions = [
  ["01", "Materials Matter"],
  ["02", "A More Human Tech"],
  ["03", "Fields of Tomorrow"],
  ["04", "The Quieter Future"],
] as const;

export default function HomePage() {
  return (
    <main className="material-page home-page">
      <Header />
      <div className="home-visual" aria-hidden="true">
        <Image
          src="/images/home/edition-04.png"
          alt=""
          fill
          priority
          sizes="(max-width: 767px) 100vw, 78vw"
        />
      </div>
      <div className="cinematic-shade" aria-hidden="true" />

      <Reveal className="home-copy">
        <SectionLabel>Issue No. 04</SectionLabel>
        <h1>A quieter<br />kind of future</h1>
        <p>Material research for a more human tomorrow.<br />Objects, ideas and processes at the intersection<br className="desktop-only" /> of nature, technology and culture.</p>
        <EditorialButton href="/objects">Explore the edition</EditorialButton>
      </Reveal>

      <nav className="edition-nav" aria-label="Editions">
        {editions.map(([number, label]) => (
          <Link key={number} href={(number === "04" ? "/" : `/stories#issue-${number}`) as never} className={number === "04" ? "active" : ""}>
            <span>{number}</span>
            <span>{label}</span>
          </Link>
        ))}
      </nav>

      <div className="scroll-cue" aria-hidden="true">
        <span>Scroll</span>
        <i />
      </div>
      <p className="vertical-motto">Ideas inform a kinder world</p>
    </main>
  );
}
