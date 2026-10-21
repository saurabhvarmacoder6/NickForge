import { useTranslation } from "../hooks/useTranslation";

export default function AboutPage() {
  const { t } = useTranslation();
  return (
    <section className="max-w-4xl mx-auto px-4 py-12 space-y-8">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">About NickForge</h1>
      <div className="prose prose-slate text-slate-300 space-y-6 leading-relaxed">
        <p>NickForge is an independent, client-side gaming nickname generator. It helps players create unique, stylish, and memorable gaming nicknames without requiring an account or using AI APIs.</p>
        <h2 className="text-xl font-bold text-slate-100 mt-6">How it works</h2>
        <p>All nickname generation occurs locally in your browser using curated templates, Unicode text transformations, decorative frames, and symbol combinations. No data is transmitted to any server.</p>
        <h2 className="text-xl font-bold text-slate-100 mt-6">Features</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Multiple nickname styles: Pro, Stylish, Minimal, Clean, Dark, Competitive, Symbol, Decorative, and Unicode text styles</li>
          <li>Squad name generator for 2-6 players with consistent themes</li>
          <li>Symbol library with 160+ decorative and gaming-style characters</li>
          <li>Customization studio with live preview, prefix, suffix, and separator controls</li>
          <li>Favorites and recent history saved locally</li>
          <li>English and Hindi interface support</li>
        </ul>
        <h2 className="text-xl font-bold text-slate-100 mt-6">Independence</h2>
        <p>NickForge is not affiliated with any game publisher. Generated nicknames are suggestions and may not be accepted by every game's registration or display system.</p>
      </div>
    </section>
  );
}
