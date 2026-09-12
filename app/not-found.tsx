import Link from "next/link";
import { Header } from "@/components/header";

export default function NotFound() {
  return (
    <main className="material-page prose-page">
      <Header />
      <article>
        <p className="eyebrow">404 / Archive</p>
        <h1>Nothing rests here.</h1>
        <p>The material you’re looking for may have moved.</p>
        <Link className="text-link" href="/">Return home</Link>
      </article>
    </main>
  );
}
