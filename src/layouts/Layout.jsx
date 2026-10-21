import { Link, useLocation } from "react-router-dom";
import { Menu, X, Gamepad2 } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "../hooks/useTranslation";

export default function Layout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t, lang, changeLang } = useTranslation();
  const loc = useLocation();

  const navLinks = [
    { label: t("generate"), to: "/" },
    { label: t("squadTitle"), to: "/squad-name-generator" },
    { label: t("symbolLibrary"), to: "/symbols" },
    { label: t("favorites"), to: "/favorites" },
    { label: t("guides"), to: "/guides" },
    { label: t("history"), to: "/history" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 flex flex-col">
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/60">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-extrabold text-xl tracking-tight text-amber-400">
            <Gamepad2 size={24} />
            {t("brand")}
          </Link>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-300 items-center">
            {navLinks.map((l) => (
              <Link key={l.to} to={l.to} className={`hover:text-amber-400 transition ${loc.pathname === l.to ? "text-amber-400" : ""}`}>
                {l.label}
              </Link>
            ))}
            <div className="flex gap-1 ml-2">
              <button onClick={() => changeLang("en")} className={`text-xs px-2 py-1 rounded-md border transition ${lang === "en" ? "bg-amber-400 text-slate-950 border-amber-400" : "border-slate-600 text-slate-400 hover:text-slate-200"}`}>{t("languageEn")}</button>
              <button onClick={() => changeLang("hi")} className={`text-xs px-2 py-1 rounded-md border transition ${lang === "hi" ? "bg-amber-400 text-slate-950 border-amber-400" : "border-slate-600 text-slate-400 hover:text-slate-200"}`}>{t("languageHi")}</button>
            </div>
          </nav>
          <button className="md:hidden text-slate-200" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {mobileOpen && (
          <nav className="md:hidden px-4 pb-4 space-y-2 border-t border-slate-800/40 bg-slate-950/90">
            {navLinks.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setMobileOpen(false)} className="block py-2 text-sm text-slate-300 hover:text-amber-400">
                {l.label}
              </Link>
            ))}
          </nav>
        )}
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t border-slate-800/40 bg-slate-950/40 mt-12">
        <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-8 text-sm text-slate-400">
          <div>
            <h4 className="font-bold text-slate-100 mb-2">{t("brand")}</h4>
            <p className="text-xs">{t("footerAbout")}</p>
          </div>
          <div>
            <h4 className="font-bold text-slate-100 mb-2">{t("about")}</h4>
            <Link to="/" className="block hover:text-amber-400">{t("generate")}</Link>
            <Link to="/guides" className="block hover:text-amber-400">{t("guides")}</Link>
            <Link to="/about" className="block hover:text-amber-400">About</Link>
          </div>
          <div>
            <h4 className="font-bold text-slate-100 mb-2">{t("guides")}</h4>
            <Link to="/squad-name-generator" className="block hover:text-amber-400">{t("squadTitle")}</Link>
            <Link to="/guides" className="block hover:text-amber-400">{t("guides")}</Link>
          </div>
          <div>
            <h4 className="font-bold text-slate-100 mb-2">{t("contact")}</h4>
            <Link to="/contact" className="block hover:text-amber-400">Contact</Link>
            <Link to="/privacy" className="block hover:text-amber-400">{t("privacy")}</Link>
            <Link to="/terms" className="block hover:text-amber-400">Terms</Link>
            <Link to="/disclaimer" className="block hover:text-amber-400">Disclaimer</Link>
          </div>
        </div>
        <div className="text-center text-xs text-slate-600 py-4">© {new Date().getFullYear()} NickForge. All local.</div>
      </footer>
    </div>
  );
}
