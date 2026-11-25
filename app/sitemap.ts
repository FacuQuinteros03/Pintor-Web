import type { MetadataRoute } from "next";
import { SITIO_URL } from "@/lib/datos";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: SITIO_URL, changeFrequency: "monthly", priority: 1 }];
}
