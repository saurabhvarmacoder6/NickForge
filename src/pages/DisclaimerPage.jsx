import { useTranslation } from "../hooks/useTranslation";

export default function DisclaimerPage() {
  const { t } = useTranslation();
  return (
    <section className="max-w-4xl mx-auto px-4 py-12 space-y-8">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Disclaimer</h1>
      <div className="prose prose-slate text-slate-300 space-y-6 leading-relaxed">
        <p>NickForge is an independent nickname generator and is not affiliated with any game publisher.</p>
        <h2 className="text-xl font-bold text-slate-100 mt-6">No live availability check</h2>
        <p>NickForge does not check whether any nickname is available, accepted, or permitted in any specific game. Generated names are suggestions only.</p>
        <h2 className="text-xl font-bold text-slate-100 mt-6">Unicode compatibility</h2>
        <p>Decorative symbols, mathematical alphabets, and special characters may render differently or may be unsupported by some games, platforms, or devices. NickForge does not guarantee universal compatibility.</p>
        <h2 className="text-xl font-bold text-slate-100 mt-6">Results not guaranteed</h2>
        <p>Because nickname generation combines templates, text transformations, and symbols, some results may contain characters that are invisible, rejected, or displayed incorrectly in certain contexts. This is not a bug in the generator but a limitation of the target system.</p>
        <h2 className="text-xl font-bold text-slate-100 mt-6">No legal advice</h2>
        <p>The Terms of Use and Privacy Policy pages provide general information only. They do not constitute legal advice or guarantee compliance with any regulation.</p>
      </div>
    </section>
  );
}
