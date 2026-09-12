import type { Metadata } from "next";
import Image from "next/image";
import { EditorialButton } from "@/components/editorial-button";
import { Header } from "@/components/header";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";

export const metadata: Metadata = {
  title: "Vessel No. 07",
  description: "A hand-cast recycled glass vessel holding light in imperfect form.",
};

export default function VesselPage() {
  return (
    <main className="material-page vessel-page">
      <Header />
      <div className="vessel-visual">
        <Image
          src="/images/objects/vessel-no-07.png"
          alt="Hand-cast smoked glass vessel in warm sunset light"
          fill
          priority
          sizes="(max-width: 767px) 100vw, 72vw"
        />
      </div>
      <div className="vessel-shade" aria-hidden="true" />
      <Reveal className="vessel-copy">
        <SectionLabel>Object / Smoked glass / 2026</SectionLabel>
        <h1>Vessel No. 07</h1>
        <p className="vessel-lede">Light held in imperfect form.</p>
        <dl>
          <div><dt>Material</dt><dd>Recycled glass</dd></div>
          <div><dt>Process</dt><dd>Hand cast</dd></div>
          <div><dt>Place</dt><dd>Studio 02</dd></div>
        </dl>
        <EditorialButton href="#material-notes">View material notes</EditorialButton>
      </Reveal>
      <section id="material-notes" className="material-notes">
        <Reveal>
          <p className="eyebrow">Material notes / 07</p>
          <h2>Imperfection is where the light gathers.</h2>
          <p>Recycled fragments are heated, folded and hand-cast without forcing a perfectly uniform edge. Each small variation records the pressure, temperature and rhythm of its making.</p>
        </Reveal>
      </section>
    </main>
  );
}
