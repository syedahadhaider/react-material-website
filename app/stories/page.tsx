import type { Metadata } from "next";
import Image from "next/image";
import { EditorialButton } from "@/components/editorial-button";
import { Header } from "@/components/header";
import { NoticeButton } from "@/components/notice-button";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";

export const metadata: Metadata = {
  title: "Stories",
  description: "Essays, field notes, and conversations from the material world.",
};

const entries = [
  {
    date: "Mar 14, 2024",
    type: "Essay",
    title: "The Memory of Paper",
    description: "On texture, time and the enduring intelligence of handmade materials.",
    image: "/images/stories/paper-strip.png",
    href: "/stories/memory-of-paper",
  },
  {
    date: "Feb 28, 2024",
    type: "Field note",
    title: "Colour After Dusk",
    description: "How light, material and place reshape our perception of colour.",
    image: "/images/stories/glass-strip.png",
    href: null,
  },
  {
    date: "Feb 01, 2024",
    type: "Conversation",
    title: "What Glass Remembers",
    description: "A discussion on transparency, material memory and a changing landscape.",
    image: "/images/stories/landscape-strip.png",
    href: null,
  },
] as const;

export default function StoriesPage() {
  return (
    <main className="material-page stories-page">
      <Header />
      <Reveal className="stories-intro">
        <SectionLabel>Stories / Field notes</SectionLabel>
        <h1>Essays on a<br />material world</h1>
        <p>Ideas, people and places at the intersection<br />of nature, technology and culture.</p>
      </Reveal>
      <section className="story-list" aria-label="Journal entries">
        {entries.map((entry, index) => (
          <Reveal className="story-row" key={entry.title} delay={index * 0.05}>
            <article className="story-row__copy">
              <div className="story-meta"><span>{entry.date}</span><i /><span>{entry.type}</span></div>
              <h2>{entry.title}</h2>
              <p>{entry.description}</p>
              {entry.href ? <EditorialButton href={entry.href}>Open the journal</EditorialButton> : <NoticeButton />}
            </article>
            <div className="story-row__image">
              <Image
                src={entry.image}
                alt=""
                fill
                loading={index === 0 ? "eager" : "lazy"}
                sizes="(max-width: 767px) 100vw, 65vw"
              />
            </div>
          </Reveal>
        ))}
      </section>
    </main>
  );
}
