import type { Metadata } from "next";
import { Header } from "@/components/header";

export const metadata: Metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return (
    <main className="material-page prose-page">
      <Header />
      <article>
        <p className="eyebrow">Studio / Privacy</p>
        <h1>Privacy</h1>
        <p>Project inquiries are used only to respond to the sender. This demonstration does not transmit or store form submissions.</p>
      </article>
    </main>
  );
}
