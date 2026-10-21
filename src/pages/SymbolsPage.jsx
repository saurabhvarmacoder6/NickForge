import { useState } from "react";
import { Copy, Search } from "lucide-react";
import { symbols } from "../data/symbols";
import { useTranslation } from "../hooks/useTranslation";

export default function SymbolsPage() {
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(36);
  const { t } = useTranslation();
  const filtered = symbols.filter((s) => s.group.includes(query.toLowerCase()) || s.char.includes(query));
  const visible = filtered.slice(0, visibleCount);

  return (
    <section className="max-w-5xl mx-auto px-4 py-12 space-y-8">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">{t("symbolLibrary")}</h1>
      <div className="flex gap-4 items-center justify-between">
        <div className="flex gap-2 items-center flex-1">
          <Search size={18} className="text-slate-500" />
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search symbols..." className="w-full rounded-xl bg-slate-950 border border-slate-700 px-4 py-3 text-sm" />
        </div>
        <span className="text-xs text-slate-500 whitespace-nowrap">{filtered.length} of {symbols.length} unique symbols</span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {visible.map((s) => (
          <button key={s.id} onClick={() => navigator.clipboard.writeText(s.char)} className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-center hover:border-amber-400 transition hover:-translate-y-0.5 shadow hover:shadow-amber-500/10" aria-label={`Copy ${s.char}`}>
            <div className="text-3xl mb-2">{s.char}</div>
            <div className="text-xs text-slate-500">{s.group}</div>
          </button>
        ))}
      </div>
      {visibleCount < filtered.length && (
        <div className="text-center">
          <button onClick={() => setVisibleCount((prev) => prev + 36)} className="px-6 py-3 rounded-xl bg-gradient-to-r from-violet-400 to-cyan-500 text-slate-950 font-extrabold text-sm hover:shadow-lg transition">Load More Symbols</button>
        </div>
      )}
      {filtered.length === 0 && (
        <div className="text-center text-slate-500 py-6">No symbols match your search.</div>
      )}
    </section>
  );
}
