"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Glass from "./Glass";
import { ArrowIcon, CameraIcon } from "./Icons";

const MAX_BYTES = 5 * 1024 * 1024;
const MAX_KENAR = 1568;

// Telefon fotoğrafları büyük olur: yüklemeden önce küçültüp JPEG'e çeviriyoruz.
async function kucult(dosya) {
  const bmp = await createImageBitmap(dosya);
  const oran = Math.min(1, MAX_KENAR / Math.max(bmp.width, bmp.height));
  const w = Math.round(bmp.width * oran);
  const h = Math.round(bmp.height * oran);
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  canvas.getContext("2d").drawImage(bmp, 0, 0, w, h);
  bmp.close?.();
  const blob = await new Promise((res) => canvas.toBlob(res, "image/jpeg", 0.88));
  return blob;
}

const GUVEN = { yuksek: ["chip-ok", "Yüksek ihtimal"], orta: ["chip-mid", "Orta ihtimal"], dusuk: ["chip-low", "Düşük ihtimal"] };

export default function Diagnoser() {
  const [dosya, setDosya] = useState(null);
  const [onizleme, setOnizleme] = useState(null);
  const [durum, setDurum] = useState("bos"); // bos | hazir | yukleniyor | sonuc
  const [sonuc, setSonuc] = useState(null);
  const [hata, setHata] = useState("");
  const [uzerinde, setUzerinde] = useState(false);
  const girdi = useRef(null);
  const sonucRef = useRef(null);

  useEffect(() => () => onizleme && URL.revokeObjectURL(onizleme), [onizleme]);

  useEffect(() => {
    if (durum === "sonuc") sonucRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [durum]);

  function sec(f) {
    if (!f) return;
    setHata("");
    setSonuc(null);
    if (!/^image\/(jpeg|png|webp|heic|heif)$/i.test(f.type) && !f.type.startsWith("image/")) {
      setHata("Lütfen bir fotoğraf seç (JPEG, PNG veya WebP).");
      return;
    }
    setDosya(f);
    setOnizleme(URL.createObjectURL(f));
    setDurum("hazir");
  }

  function sifirla() {
    setDosya(null);
    setOnizleme(null);
    setSonuc(null);
    setHata("");
    setDurum("bos");
    if (girdi.current) girdi.current.value = "";
  }

  async function teshisEt() {
    if (!dosya) return;
    setDurum("yukleniyor");
    setHata("");
    try {
      let gonder = dosya;
      try {
        gonder = await kucult(dosya);
      } catch {
        if (dosya.size > MAX_BYTES) throw new Error("Fotoğraf çok büyük. Daha küçük bir fotoğraf dene.");
      }
      const form = new FormData();
      form.append("foto", gonder, "yaprak.jpg");
      const res = await fetch("/api/teshis", { method: "POST", body: form });
      const veri = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(veri.hata || "Teşhis yapılamadı.");
      setSonuc(veri);
      setDurum("sonuc");
    } catch (e) {
      setHata(e.message || "Bir şeyler ters gitti. Tekrar dene.");
      setDurum("hazir");
    }
  }

  const yukleniyor = durum === "yukleniyor";

  return (
    <Glass tier="panel" className="diag" id="teshis" aria-live="polite">
      {durum === "bos" ? (
        <label
          className="drop"
          data-over={uzerinde}
          onDragOver={(e) => {
            e.preventDefault();
            setUzerinde(true);
          }}
          onDragLeave={() => setUzerinde(false)}
          onDrop={(e) => {
            e.preventDefault();
            setUzerinde(false);
            sec(e.dataTransfer.files?.[0]);
          }}
        >
          <span className="drop-icon">
            <CameraIcon width={30} height={30} />
          </span>
          <span>
            <strong>Yaprak fotoğrafı ekle</strong>
            <span className="sub">Sürükle bırak ya da dokunup seç. Sorunlu kısım net görünsün.</span>
          </span>
          <input
            ref={girdi}
            type="file"
            accept="image/*"
            onChange={(e) => sec(e.target.files?.[0])}
            aria-label="Yaprak fotoğrafı seç"
          />
        </label>
      ) : (
        <>
          <div className="preview">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={onizleme} alt="Yüklediğin bitki fotoğrafı" />
            {yukleniyor && <div className="scan" aria-hidden="true" />}
          </div>
          <div className="actions">
            <button className="btn" onClick={teshisEt} disabled={yukleniyor}>
              {yukleniyor ? "İnceleniyor…" : "Teşhis et"}
            </button>
            <button className="btn btn-ghost" onClick={sifirla} disabled={yukleniyor}>
              Başka fotoğraf
            </button>
          </div>
        </>
      )}

      {hata && (
        <p className="msg-err" role="alert">
          {hata}
        </p>
      )}

      {durum === "sonuc" && sonuc && (
        <div className="result" ref={sonucRef}>
          {!sonuc.bitkiVar ? (
            <div>
              <h2>Bitkiyi göremedim</h2>
              <p className="ozet">{sonuc.ozet || "Fotoğrafta değerlendirebileceğim bir bitki bulamadım."}</p>
              {sonuc.dahaIyiFoto && <p className="ozet">{sonuc.dahaIyiFoto}</p>}
            </div>
          ) : (
            <>
              <div>
                <span className={GUVEN[sonuc.guven][0]}>{GUVEN[sonuc.guven][1]}</span>
                <h2 style={{ marginTop: "0.6rem" }}>
                  {sonuc.saglikli ? "Belirgin bir sorun görünmüyor" : sonuc.sonuclar[0]?.ad || "Olası sorun"}
                </h2>
                {sonuc.bitki && <p className="label" style={{ marginTop: "0.3rem" }}>Tahmin edilen bitki: {sonuc.bitki}</p>}
                <p className="ozet" style={{ marginTop: "0.6rem" }}>{sonuc.ozet}</p>
              </div>

              {sonuc.sonuclar.length > 0 && !sonuc.saglikli && (
                <div className="found">
                  <span className="label">Olası nedenler</span>
                  {sonuc.sonuclar.map((s, i) => {
                    const icerik = (
                      <>
                        <span className="top">
                          <span>{s.ad}</span>
                          {s.slug ? <ArrowIcon width={18} height={18} /> : <span className={GUVEN[s.olasilik][0]}>{GUVEN[s.olasilik][1]}</span>}
                        </span>
                        <span className="why">{s.neden}</span>
                      </>
                    );
                    return s.slug ? (
                      <Link key={i} href={`/hastaliklar/${s.slug}`}>{icerik}</Link>
                    ) : (
                      <div key={i} className="row">{icerik}</div>
                    );
                  })}
                </div>
              )}

              {sonuc.adimlar.length > 0 && (
                <div>
                  <span className="label">Bu hafta yap</span>
                  <ol className="steps" style={{ marginTop: "0.6rem" }}>
                    {sonuc.adimlar.map((a, i) => (
                      <li key={i}>{a}</li>
                    ))}
                  </ol>
                </div>
              )}

              {sonuc.dahaIyiFoto && sonuc.guven !== "yuksek" && (
                <p className="ozet">
                  <strong>Daha iyi sonuç için:</strong> {sonuc.dahaIyiFoto}
                </p>
              )}
            </>
          )}
          <p className="fineprint" style={{ textAlign: "left", marginTop: 0 }}>
            Bu sonuç yapay zekâ tahminidir, kesin tanı değildir. Emin değilsen bir bitki uzmanına danış.
          </p>
        </div>
      )}

      {durum === "bos" && !hata && <p className="fineprint">Fotoğrafın sitemizde saklanmaz; yalnızca teşhis için yapay zekâ servisine gönderilir.</p>}
    </Glass>
  );
}
