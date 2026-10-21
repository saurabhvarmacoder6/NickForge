import { useTranslation } from "../hooks/useTranslation";

export default function PrivacyPage() {
  const { t } = useTranslation();
  return (
    <section className="max-w-4xl mx-auto px-4 py-12 space-y-8">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">{t("privacy")}</h1>
      <div className="prose prose-slate text-slate-300 space-y-6 leading-relaxed">
        <p>NickForge is a client-side gaming nickname generator. All nickname generation, filtering, customization, and storage occur entirely within your browser.</p>
        <h2 className="text-xl font-bold text-slate-100 mt-6">No server-side data collection</h2>
        <p>We do not collect your input text, generated nicknames, favorites, or browsing history on any server. There is no backend database, no user account system, and no external analytics service integrated.</p>
        <h2 className="text-xl font-bold text-slate-100 mt-6">Local storage</h2>
        <p>Favorites and recently generated nicknames are saved using your browser's localStorage. This data remains on your device and can be cleared at any time by using the Clear buttons in the Favorites and History sections, or by clearing your browser's site data.</p>
        <h2 className="text-xl font-bold text-slate-100 mt-6">No cookies or tracking</h2>
        <p>The application does not set tracking cookies or use any third-party advertising, analytics, or behavioral tracking services.</p>
        <h2 className="text-xl font-bold text-slate-100 mt-6">Clipboard access</h2>
        <p>The Copy feature uses the browser's Clipboard API to copy generated nicknames. This requires no external service and sends no data over the network.</p>
        <h2 className="text-xl font-bold text-slate-100 mt-6">No AI APIs</h2>
        <p>All nickname generation is performed locally using curated data, Unicode text transformations, and client-side algorithms. No AI model or paid API is used.</p>
      </div>
    </section>
  );
}
