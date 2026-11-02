import Link from "next/link";
import Glass from "@/components/Glass";
import Diagnoser from "@/components/Diagnoser";
import LeafScene from "@/components/LeafScene";
import { ArrowIcon } from "@/components/Icons";
import { HASTALIKLAR, TUR_ETIKETI } from "@/lib/hastaliklar";
import { SITE } from "@/lib/site";

export const metadata = {
  title: { absolute: `${SITE.ad} | Bitki hastalığını fotoğraftan teşhis et` },
  description:
    "Ev bitkinin yaprağının fotoğrafını yükle: sararma, leke, unlu bit, kök çürümesi ve daha fazlası için olası nedeni ve çözümü Türkçe öğren.",
};

export default function Home() {
  return (
    <>
      <section className="wrap hero">
        <div>
          <h1 className="enter" style={{ "--i": 0 }}>
            Yaprağın <em>ne diyor?</em>
          </h1>
          <p className="lede enter" style={{ "--i": 1 }}>
            Bitkinin yaprağını fotoğrafla, yükle. Neyin yanlış gittiğini ve bu hafta ne yapman gerektiğini
            Türkçe söyleyelim.
          </p>
          <div className="hero-cta enter" style={{ "--i": 2 }}>
            <a className="btn" href="#teshis">Fotoğraf yükle</a>
            <Link className="btn btn-ghost" href="/hastaliklar">Sorunlara göz at</Link>
          </div>
          <div className="hero-points enter" style={{ "--i": 3 }}>
            <Glass tier="chip">Sararma ve leke</Glass>
            <Glass tier="chip">Zararlılar</Glass>
            <Glass tier="chip">Kök sorunları</Glass>
          </div>
        </div>
        <div className="enter" style={{ "--i": 2 }}>
          <LeafScene />
        </div>
      </section>

      <section className="wrap teshis-section reveal">
        <Diagnoser />
      </section>

      <section className="wrap section">
        <div className="section-head reveal">
          <h2>En sık görülen sorunlar</h2>
          <p>
            Fotoğraf yüklemek istemezsen belirtilerden ara. Her sayfada nedenler, adım adım çözüm ve önleme
            yolları var.
          </p>
        </div>
        <Glass tier="panel" className="list reveal">
          {HASTALIKLAR.map((h) => (
            <Link key={h.slug} href={`/hastaliklar/${h.slug}`}>
              <span className="t">
                {h.ad}
                <span className={`tur tur-${h.tur}`}>{TUR_ETIKETI[h.tur]}</span>
              </span>
              <span className="d">{h.ozet}</span>
              <span className="go">
                <ArrowIcon width={20} height={20} />
              </span>
            </Link>
          ))}
        </Glass>
      </section>

      <section className="wrap section">
        <div className="section-head">
          <h2>Ne kadar güvenebilirsin?</h2>
          <p>
            Teşhis bir yapay zekâ tahminidir. Fotoğraf net ve yaprak yakınsa iyi sonuç verir; emin olamadığında
            bunu açıkça söyler ve daha iyi bir fotoğraf ister. Ciddi kayıp riski olan bitkilerde bir bitki
            uzmanına da danış.
          </p>
        </div>
      </section>
    </>
  );
}
