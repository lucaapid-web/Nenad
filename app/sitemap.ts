import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/contact";

const routes = [
  "",
  "/haus",
  "/anreise",
  "/kontakt",
  "/umgebung",
  "/umgebung/restaurants",
  "/umgebung/aktivitaeten",
  "/umgebung/straende",
  "/umgebung/nightlife",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
