import { HASTALIKLAR } from "@/lib/hastaliklar";
import { SITE } from "@/lib/site";

export default function sitemap() {
  // Sabit tarih: içerik değiştikçe elle güncelle.
  const simdi = new Date("2026-11-02");
  return [
    { url: SITE.url, lastModified: simdi, priority: 1 },
    { url: `${SITE.url}/hastaliklar`, lastModified: simdi, priority: 0.8 },
    ...HASTALIKLAR.map((h) => ({
      url: `${SITE.url}/hastaliklar/${h.slug}`,
      lastModified: simdi,
      priority: 0.7,
    })),
  ];
}
