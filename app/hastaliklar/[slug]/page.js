import Link from "next/link";
import { notFound } from "next/navigation";
import Glass from "@/components/Glass";
import { HASTALIKLAR, hastalikBul, TUR_ETIKETI } from "@/lib/hastaliklar";
import { SITE } from "@/lib/site";

export function generateStaticParams() {
  return HASTALIKLAR.map((h) => ({ slug: h.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const h = hastalikBul(slug);
  if (!h) return {};
  const baslik = `${h.ad}: belirtiler, nedenler ve çözüm`;
  return {
    title: baslik,
    description: h.ozet,
    alternates: { canonical: `/hastaliklar/${h.slug}` },
    openGraph: { title: baslik, description: h.ozet, type: "article", locale: "tr_TR" },
  };
}

export default async function Sayfa({ params }) {
  const { slug } = await params;
  const h = hastalikBul(slug);
  if (!h) notFound();

  const ilgili = HASTALIKLAR.filter((x) => x.slug !== h.slug && x.tur === h.tur).slice(0, 3);
  const url = `${SITE.url}/hastaliklar/${h.slug}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: `${h.ad}: belirtiler, nedenler ve çözüm`,
      description: h.ozet,
      inLanguage: "tr",
      mainEntityOfPage: url,
      publisher: { "@type": "Organization", name: SITE.ad },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: h.sss.map((q) => ({
        "@type": "Question",
        name: q.s,
        acceptedAnswer: { "@type": "Answer", text: q.c },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ana sayfa", item: SITE.url },
        { "@type": "ListItem", position: 2, name: "Hastalıklar", item: `${SITE.url}/hastaliklar` },
        { "@type": "ListItem", position: 3, name: h.ad, item: url },
      ],
    },
  ];

  return (
    <div className="wrap">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="crumbs" aria-label="Sayfa yolu">
        <Link href="/">Ana sayfa</Link> / <Link href="/hastaliklar">Hastalıklar</Link> / {h.ad}
      </nav>

      <header className="article-head">
        <span className={`tur tur-${h.tur}`}>{TUR_ETIKETI[h.tur]}</span>
        <h1>{h.ad}</h1>
        <p className="lede">{h.ozet}</p>
      </header>

      <div className="article-grid">
        <article className="prose">
          <section>
            <h2>Belirtiler</h2>
            <ul>{h.belirtiler.map((b) => <li key={b}>{b}</li>)}</ul>
          </section>
          <section>
            <h2>Nedenleri</h2>
            <ul>{h.nedenler.map((n) => <li key={n}>{n}</li>)}</ul>
          </section>
          <section>
            <h2>Nasıl çözülür?</h2>
            <ol>{h.cozum.map((c) => <li key={c}>{c}</li>)}</ol>
          </section>
          <section>
            <h2>Tekrar etmesin diye</h2>
            <ul>{h.onleme.map((o) => <li key={o}>{o}</li>)}</ul>
          </section>
          <section>
            <h2>Sık sorulanlar</h2>
            {h.sss.map((q) => (
              <details key={q.s}>
                <summary>{q.s}</summary>
                <p>{q.c}</p>
              </details>
            ))}
          </section>
          <p className="disclaimer">
            Bu sayfa genel bilgi içindir. Kimyasal ürün kullanacaksan ambalajdaki talimata uy, evcil hayvan ve
            çocuklardan uzak tut. Emin olamadığın durumlarda bir bitki uzmanına danış.
          </p>
        </article>

        <aside className="aside">
          <Glass tier="panel">
            <h3>Bitkinde bunu mu görüyorsun?</h3>
            <p>Fotoğrafını yükle, yapay zekâ olası nedeni ve yapılacakları söylesin.</p>
            <Link className="btn" href="/#teshis">Fotoğrafla teşhis et</Link>
          </Glass>
          <Glass tier="panel">
            <h3>Sık görüldüğü bitkiler</h3>
            <div className="plants" style={{ marginTop: "0.7rem" }}>
              {h.etkilenen.map((p) => (
                <Glass key={p} tier="chip">{p}</Glass>
              ))}
            </div>
          </Glass>
          {ilgili.length > 0 && (
            <Glass tier="panel">
              <h3>İlgili sayfalar</h3>
              <ul style={{ marginTop: "0.6rem", display: "grid", gap: "0.5rem" }}>
                {ilgili.map((r) => (
                  <li key={r.slug}>
                    <Link href={`/hastaliklar/${r.slug}`}>{r.ad}</Link>
                  </li>
                ))}
              </ul>
            </Glass>
          )}
        </aside>
      </div>
    </div>
  );
}
