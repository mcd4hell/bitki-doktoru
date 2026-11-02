# Yaprak Doktoru

Ev bitkisi hastalıklarını fotoğraftan teşhis eden Türkçe site. Yaprak fotoğrafı yüklenir, yapay zekâ olası sorunu ve yapılacakları söyler. Her hastalığın SEO için ayrı, statik bir sayfası vardır.

Tasarım: saf siyah OLED zemin, liquid glass paneller, hafif 3D (yalnızca CSS transform).

## Çalıştırma

```bash
npm install
cp .env.example .env.local   # GEMINI_API_KEY değerini yaz
npm run dev
```

Ücretsiz Gemini anahtarı: https://aistudio.google.com/apikey

## Yapı

- `lib/hastaliklar.js`: hastalık içerikleri. Sayfalar buradan üretilir.
- `app/api/teshis/route.js`: fotoğraf teşhisi (Gemini), hız sınırı ve dosya doğrulaması.
- `components/Glass.jsx`: liquid glass yüzey (kırılma katmanı isteğe bağlı, varsayılan kapalı).
- `components/LeafScene.jsx`: 3D yaprak sahnesi.

## Uyarılar

- Teşhis yapay zekâ tahminidir, kesin tanı değildir.
- Hastalık metinleri uzman onayından geçmedi, yayından önce gözden geçir.
- Hız sınırı bellek içidir; birden fazla sunucuda Redis gibi ortak bir depoya taşı.

Liquid glass kırılma kodu, MIT lisanslı liquid-glass-js (Armagan Amcalar) üzerinden uyarlanmıştır; notu `components/Glass.jsx` başında durur.
