import Link from "next/link";
import Glass from "@/components/Glass";
import { ArrowIcon } from "@/components/Icons";
import { HASTALIKLAR, TUR_ETIKETI } from "@/lib/hastaliklar";

export const metadata = {
  title: "Ev bitkisi hastalıkları, zararlıları ve bakım sorunları",
  description:
    "Yaprak sararması, unlu bit, kök çürümesi, külleme ve daha fazlası: belirtiler, nedenler ve adım adım çözümler.",
  alternates: { canonical: "/hastaliklar" },
};

export default function Index() {
  const gruplar = [
    ["hastalik", "Hastalıklar"],
    ["zararli", "Zararlılar"],
    ["bakim", "Bakım sorunları"],
  ];
  return (
    <div className="wrap">
      <div className="article-head" style={{ paddingTop: "3rem" }}>
        <h1>Bitki sorunları rehberi</h1>
        <p className="lede">
          Belirtiye göre ara: yaprağında ne görüyorsan o sayfayı aç. Kesin emin değilsen fotoğrafını yükleyip
          teşhis ettirebilirsin.
        </p>
      </div>
      {gruplar.map(([tur, baslik]) => (
        <section key={tur} className="section" style={{ paddingTop: 0 }}>
          <h2 style={{ fontSize: "1.4rem", marginBottom: "1rem" }}>{baslik}</h2>
          <Glass tier="panel" className="list">
            {HASTALIKLAR.filter((h) => h.tur === tur).map((h) => (
              <Link key={h.slug} href={`/hastaliklar/${h.slug}`}>
                <span className="t">{h.ad}</span>
                <span className="d">{h.ozet}</span>
                <span className="go">
                  <ArrowIcon width={20} height={20} />
                </span>
              </Link>
            ))}
          </Glass>
        </section>
      ))}
    </div>
  );
}
