import { useTranslation } from "../hooks/useTranslation";

export default function TermsPage() {
  const { t } = useTranslation();
  return (
    <section className="max-w-4xl mx-auto px-4 py-12 space-y-8">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Terms of Use</h1>
      <div className="prose prose-slate text-slate-300 space-y-6 leading-relaxed">
        <p>By using NickForge, you agree to these simple terms.</p>
        <h2 className="text-xl font-bold text-slate-100 mt-6">What NickForge does</h2>
        <p>NickForge is an independent client-side gaming nickname generator. It creates nickname variations using curated templates, Unicode text styles, symbol combinations, and decorative frames. It does not check live in-game name availability, claim official affiliation with any game publisher, or provide guaranteed results.</p>
        <h2 className="text-xl font-bold text-slate-100 mt-6">No official affiliation</h2>
        <p>NickForge is not affiliated with Garena, Free Fire, PUBG Mobile, Call of Duty Mobile, Fortnite, Epic Games, or any other game publisher or developer. Generated nicknames are suggestions only and may not be accepted by any particular game's registration or display systems.</p>
        <h2 className="text-xl font-bold text-slate-100 mt-6">User responsibility</h2>
        <p>You are responsible for ensuring any nickname you choose complies with the rules, terms, and community guidelines of the game or platform where you use it. NickForge does not verify whether a name is available, acceptable, or permitted.</p>
        <h2 className="text-xl font-bold text-slate-100 mt-6">Generated content</h2>
        <p>Names and combinations are generated deterministically from curated data. Some decorative Unicode characters may render differently on different devices or may not be supported by certain games. This is a limitation of the game or device, not a failure of NickForge.</p>
        <h2 className="text-xl font-bold text-slate-100 mt-6">Local data</h2>
        <p>All favorites, history, and customization settings are stored locally in your browser. Clearing browser data for this site will remove them. NickForge does not back up or recover this data.</p>
      </div>
    </section>
  );
}
