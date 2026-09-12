import type { Metadata } from "next";
import Image from "next/image";
import { ContactDialog } from "@/components/contact-dialog";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";

export const metadata: Metadata = {
  title: "Contact",
  description: "Begin a conversation with Material Studies.",
};

export default function ContactPage() {
  return (
    <main className="material-page contact-page">
      <Header />
      <div className="contact-visual">
        <Image
          src="/images/contact/studio-objects.png"
          alt="Material studies arranged in a sunset-lit studio"
          fill
          priority
          sizes="(max-width: 767px) 100vw, 78vw"
        />
      </div>
      <div className="contact-shade" aria-hidden="true" />
      <Reveal className="contact-copy">
        <SectionLabel>Contact / Begin a conversation</SectionLabel>
        <h1>Let us make<br />something<br />that lasts</h1>
        <ContactDialog />
        <a className="contact-email" href="mailto:studio@materialstudies.co">studio@materialstudies.co</a>
      </Reveal>
      <Footer />
    </main>
  );
}
