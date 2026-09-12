import type { MetadataRoute } from "next";

const routes = [
  "",
  "/objects",
  "/objects/vessel-no-07",
  "/research",
  "/stories",
  "/stories/memory-of-paper",
  "/contact",
  "/privacy",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://materialstudies.example${route}`,
    lastModified: new Date("2026-09-06"),
    changeFrequency: route === "" ? "monthly" : "yearly",
    priority: route === "" ? 1 : 0.7,
  }));
}
