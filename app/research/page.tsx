import type { Metadata } from "next";
import Image from "next/image";
import { ApproachDialog } from "@/components/approach-dialog";
import { Header } from "@/components/header";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";

export const metadata: Metadata = {
  title: "Research",
  description: "How Material Studies observes, tests, and transforms matter.",
};

const steps = [
  ["01", "Observe", "Look closely. Understand context, origin and impact."],
  ["02", "Test", "Experiment with materials, processes and scales."],
  ["03", "Transform", "Turn insight into objects, ideas and real change."],
] as const;

export default function ResearchPage() {
  return (
    <main className="material-page research-page" id="approach">
      <Header />
      <div className="research-visual">
        <Image
          src="/images/about/material-practice.png"
          alt="Hands testing the flexibility of a handmade fiber sheet"
          fill
          priority
          sizes="(max-width: 767px) 100vw, 68vw"
        />
      </div>
      <div className="research-shade" aria-hidden="true" />

      <Reveal className="research-copy">
        <SectionLabel>Research / Our practice</SectionLabel>
        <h1>Material is a<br />way of thinking</h1>
        <p className="research-lede">We study how matter carries time, touch and memory.</p>
        <p className="research-body">
          Our research sits at the intersection of nature, technology and culture, exploring how materials shape more human futures. We work with makers, scientists and communities to understand the stories held in matter, and to imagine new possibilities through it.
        </p>
        <div className="process-grid">
          {steps.map(([number, title, text]) => (
            <article key={number}>
              <span>{number}</span>
              <i aria-hidden="true" />
              <h2>{title}</h2>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <ApproachDialog />
      </Reveal>
    </main>
  );
}
