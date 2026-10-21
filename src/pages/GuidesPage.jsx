import { Link } from "react-router-dom";
import { useTranslation } from "../hooks/useTranslation";
import { guidesContent } from "../data/guidesContent";

export default function GuidesPage() {
  const { t } = useTranslation();
  return (
    <section className="max-w-5xl mx-auto px-4 py-12 space-y-14">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">{t("guidesIntro")}</h1>
      {Object.entries(guidesContent).map(([key, article]) => (
        <article key={key} className="rounded-3xl border border-slate-800/60 bg-slate-900/40 p-6 md:p-8 shadow-xl space-y-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-amber-300">{article.title}</h2>
          <div className="space-y-4 text-slate-300 text-sm md:text-base leading-relaxed">
            {article.sections.map((section, i) => (
              <div key={i}>
                <h3 className="font-bold text-slate-100 mb-1">{section.heading}</h3>
                <p>{section.body}</p>
              </div>
            ))}
          </div>
          <div className="border-t border-slate-800 pt-4 space-y-3">
            <h4 className="font-bold text-slate-200">FAQ</h4>
            {article.faq.map((faq, i) => (
              <div key={i} className="text-sm text-slate-400">
                <strong className="text-amber-300">{t("question")} {faq.q}</strong> {faq.a}
              </div>
            ))}
          </div>
          <div className="flex gap-3 flex-wrap">
            {article.links.map((link) => (
              <Link key={link.to} to={link.to} className="px-3 py-2 rounded-lg bg-amber-500 text-slate-950 text-xs font-bold hover:bg-amber-400 transition">{link.label}</Link>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
}
