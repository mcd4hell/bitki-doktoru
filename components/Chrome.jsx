import Link from "next/link";
import Glass from "./Glass";
import { LeafIcon } from "./Icons";
import { SITE } from "@/lib/site";

export function Topbar() {
  return (
    <header className="topbar wrap">
      <Glass as="div" className="topbar-inner" style={{ borderRadius: 9999 }}>
        <Link href="/" className="brand">
          <LeafIcon width={22} height={22} />
          {SITE.ad}
        </Link>
        <nav className="nav" aria-label="Ana menü">
          <Link href="/hastaliklar">Hastalıklar</Link>
          <Link href="/#teshis" className="keep">Teşhis et</Link>
        </nav>
      </Glass>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap row">
        <p>{SITE.ad}. Teşhisler yapay zekâ tahminidir, uzman görüşü yerine geçmez.</p>
        <nav aria-label="Alt menü">
          <Link href="/hastaliklar">Tüm hastalıklar</Link>
        </nav>
      </div>
    </footer>
  );
}
