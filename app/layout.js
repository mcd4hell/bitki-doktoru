import { Manrope } from "next/font/google";
import "./globals.css";
import { Topbar, Footer } from "@/components/Chrome";
import { SITE } from "@/lib/site";

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.ad} | Bitki hastalığını fotoğraftan teşhis et`,
    template: `%s | ${SITE.ad}`,
  },
  description: SITE.aciklama,
  openGraph: {
    siteName: SITE.ad,
    locale: "tr_TR",
    type: "website",
  },
  alternates: { canonical: "/" },
};

export const viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={manrope.variable}>
      <body className="oled-backdrop">
        <Topbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
