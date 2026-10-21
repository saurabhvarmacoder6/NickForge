import { useTranslation } from "../hooks/useTranslation";

export default function ContactPage() {
  const { t } = useTranslation();
  return (
    <section className="max-w-4xl mx-auto px-4 py-12 space-y-8">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Contact & Feedback</h1>
      <div className="prose prose-slate text-slate-300 space-y-6 leading-relaxed">
        <p>NickForge is a free, client-side tool. There is no company office or support team.</p>
        <p>For questions, suggestions, or issues, please review the guides and customization studio first. Most common questions are covered there.</p>
        <h2 className="text-xl font-bold text-slate-100 mt-6">Feedback</h2>
        <p>Feedback is welcome. You can share suggestions through any public platform or repository linked to this project. Please include the page or feature you are referring to.</p>
        <h2 className="text-xl font-bold text-slate-100 mt-6">Issues</h2>
        <p>If you encounter a bug, please describe the input, selected category, browser, and what happened. If possible, provide the exact nickname that caused the issue so it can be reproduced.</p>
        <h2 className="text-xl font-bold text-slate-100 mt-6">No live support</h2>
        <p>Because NickForge is a free, local browser application, there is no customer service line, chat support, or real-time assistance available.</p>
      </div>
    </section>
  );
}
