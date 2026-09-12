import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/header";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";

export const metadata: Metadata = {
  title: "The Memory of Paper",
  description: "An essay on fiber, touch, and the traces left by making.",
  openGraph: {
    title: "The Memory of Paper — Material Studies",
    description: "An essay on fiber, touch, and the traces left by making.",
    type: "article",
  },
};

export default function MemoryOfPaperPage() {
  return (
    <main className="material-page article-page">
      <Header />
      <section className="article-hero">
        <div className="article-hero__image">
          <Image
            src="/images/stories/memory-of-paper-hero.png"
            alt="Handmade paper draped over a dark block in warm studio light"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="article-hero__shade" aria-hidden="true" />
        <Reveal className="article-title">
          <SectionLabel>Essay / Material culture</SectionLabel>
          <h1>The memory<br />of paper</h1>
          <p>On fiber, touch and the traces left by making.</p>
        </Reveal>
        <p className="article-caption">Studio notes / September 2026</p>
      </section>
      <section className="article-body">
        <Reveal className="article-column article-column--lead">
          <p><span className="drop-cap">P</span>aper carries time. In its fibers are the landscapes it came from, the hands that shaped it, and the small, inevitable accidents that make it real. To work with paper is to work with memory — not as something fixed, but as something that continues to change, absorbing, recording, and revealing the passage of time.</p>
        </Reveal>
        <Reveal className="article-column" delay={0.08}>
          <p>Each sheet is a meeting of place and process: plant, water, hand, tool, air. The resulting surface holds a topography of traces — impressions, variations, interruptions — that speak of human presence. In a digital age of seamlessness, paper remains resolutely honest, its imperfections a reminder that value often lies in what cannot be replicated.</p>
        </Reveal>
        <Reveal className="article-quote" delay={0.16}>
          <blockquote>“Paper does not erase time;<br />it holds it.”</blockquote>
          <i aria-hidden="true" />
        </Reveal>
      </section>
    </main>
  );
}
