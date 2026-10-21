import { useState, useMemo } from "react";
import { Sparkles, Gamepad2 } from "lucide-react";
import { generateNames } from "../utils/generator";
import { categories } from "../data/categories";
import { addHistory } from "../utils/storage";
import ResultCard from "../components/ResultCard";
import { useTranslation } from "../hooks/useTranslation";
import { defaultCollection } from "../data/defaultCollection";

export default function HomePage() {
  const [input, setInput] = useState("");
  const [category, setCategory] = useState("pro");
  const [results, setResults] = useState([]);
  const [generated, setGenerated] = useState(false);
  const [filterCat, setFilterCat] = useState("all");
  const [visibleBatch, setVisibleBatch] = useState(24);
  const [mode, setMode] = useState("default"); // "default" or "personal"
  const { t } = useTranslation();

  const handleGenerateForCategory = (cat) => {
    const count = 8;
    const names = generateNames({ input, category: cat, count });
    setCategory(cat);
    setResults(names);
    setGenerated(true);
    setFilterCat("all");
    setMode("personal");
    setVisibleBatch(24);
    names.forEach((n) => addHistory(n));
  };

  const handleGenerate = () => {
    handleGenerateForCategory(category);
  };

  // Default collection pagination based on filtered full collection
  const fullFilteredDefault = useMemo(() => {
    if (mode !== "default") return [];
    return filterCat === "all" ? defaultCollection : defaultCollection.filter((entry) => (entry.category || "default") === filterCat);
  }, [mode, filterCat]);

  const displayedDefault = useMemo(() => {
    if (mode !== "default") return [];
    return fullFilteredDefault.slice(0, visibleBatch);
  }, [mode, fullFilteredDefault, visibleBatch]);

  const hasMoreDefault = mode === "default" ? visibleBatch < fullFilteredDefault.length : false;

  const filteredResults = mode === "personal"
    ? (filterCat === "all" ? results : results.filter((r) => r.category === filterCat))
    : (filterCat === "all" ? fullFilteredDefault.slice(0, visibleBatch) : fullFilteredDefault.filter((entry) => (entry.category || "default") === filterCat).slice(0, visibleBatch));
  const hasFilteredEmpty = filterCat !== "all" && filteredResults.length === 0;
  const showDefault = mode === "default" || (mode === "personal" && results.length === 0 && !input);

  return (
    <section className="max-w-5xl mx-auto px-4 py-12 md:py-16 space-y-12">
      {/* Hero */}
      <div className="text-center space-y-6">
        <h1 className="text-5xl md:text-7xl py-4 font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-violet-400 to-cyan-400">
          {t("brand")}
        </h1>
        <p className="text-lg md:text-2xl text-slate-400 max-w-xl mx-auto">{t("tagline")}</p>
        <p className="text-sm text-slate-500">Client-side generation. No AI. No accounts. Works offline after load.</p>
      </div>

      {/* Generator */}
      <div className="rounded-3xl border border-slate-800/60 bg-slate-900/40 backdrop-blur-sm p-6 md:p-8 shadow-xl shadow-slate-950/40 space-y-6">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t("inputPlaceholder")}
            className="w-full md:flex-1 rounded-xl bg-slate-950 border border-slate-700 px-5 py-4 text-lg text-slate-100 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-amber-400/40 transition"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full md:w-48 rounded-xl bg-slate-950 border border-slate-700 px-4 py-3.5 text-sm text-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-400/40"
          >
            {categories.map((c) => (
              <option key={c.id} value={c.id}>{c.label}</option>
            ))}
          </select>
          <button
            onClick={handleGenerate}
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-amber-400 to-rose-500 text-slate-950 font-extrabold text-lg shadow-lg hover:shadow-amber-400/20 transition"
          >
            <Sparkles size={20} /> {t("generate")}
          </button>
        </div>

        {/* Filter toolbar — applies to both default and personalized modes */}
        {(showDefault || (mode === "personal" && results.length > 0)) && (
          <div className="flex flex-wrap gap-2 items-center">
            <button onClick={() => setFilterCat("all")} className={`px-3 py-1 rounded-full text-xs font-semibold border transition ${filterCat === "all" ? "bg-amber-400 text-slate-950 border-amber-400" : "bg-slate-800 text-slate-300 border-slate-700 hover:border-amber-400"}`}>{t("filters")}: All</button>
            {categories.map((c) => (
              <button key={c.id} onClick={() => mode === "default" ? setFilterCat(c.id) : handleGenerateForCategory(c.id)} className={`px-3 py-1 rounded-full text-xs font-semibold border transition ${filterCat === c.id ? "bg-amber-400 text-slate-950 border-amber-400" : "bg-slate-800 text-slate-300 border-slate-700 hover:border-amber-400"}`}>{c.label}</button>
            ))}
            <button onClick={() => setFilterCat("all")} className="px-2 py-1 rounded-full text-xs font-semibold bg-slate-700 text-slate-200 hover:bg-slate-600 transition">Reset</button>
          </div>
        )}

        {!generated && !input && (
          <div className="text-center text-slate-500 text-sm py-4">{t("noResults")}</div>
        )}

        {/* Default collection display */}
        {showDefault && (
          <>
            <div className="flex items-center justify-between">
              <div className="text-xs text-slate-400">Showing {filteredResults.length} of {defaultCollection.length} curated nicknames</div>
              {hasMoreDefault && (
                <button onClick={() => setVisibleBatch((prev) => Math.min(prev + 24, defaultCollection.length))} className="px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-400 to-cyan-500 text-slate-950 text-xs font-extrabold hover:shadow-lg transition">Load More</button>
              )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {filteredResults.map((entry) => (
                <ResultCard key={`default-${entry.nickname}`} item={{ nickname: entry.nickname, category: entry.category || "default", input: entry.input, length: entry.length, id: `default-${entry.nickname}` }} />
              ))}
            </div>
            {hasFilteredEmpty && (
              <div className="text-center text-slate-400 text-sm py-4">
                No nicknames match the selected filter. <button onClick={() => setFilterCat("all")} className="underline text-amber-400 hover:text-amber-300">Show all results</button>.
              </div>
            )}
          </>
        )}

        {/* Personalized results */}
        {mode === "personal" && results.length > 0 && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {filteredResults.map((r) => <ResultCard key={r.id || (`default-${r.nickname}`)} item={r} />)}
            </div>
            {(filterCat !== "all" && filteredResults.length === 0 && mode === "personal") && (
              <div className="text-center text-slate-400 text-sm py-4">
                No nicknames match the selected filter. <button onClick={() => setFilterCat("all")} className="underline text-amber-400 hover:text-amber-300">Show all results</button>.
              </div>
            )}

          </>
        )}
      </div>

      {/* Game cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <a href="/squad-name-generator" className="block rounded-2xl border border-slate-800/60 bg-slate-900/40 p-6 hover:border-violet-400/40 transition hover:-translate-y-1 shadow hover:shadow-violet-500/5">
          <h3 className="font-extrabold text-violet-300 mb-3">Squad Names</h3>
          <p className="text-sm text-slate-400">2–6 players with matching themes, prefixes, and separators.</p>
        </a>
        <a href="/symbols" className="block rounded-2xl border border-slate-800/60 bg-slate-900/40 p-6 hover:border-cyan-400/40 transition hover:-translate-y-1 shadow hover:shadow-cyan-500/5">
          <h3 className="font-extrabold text-cyan-300 mb-3">Symbols</h3>
          <p className="text-sm text-slate-400">Searchable library of decorative and gaming-style Unicode symbols.</p>
        </a>
        <a href="/preview" className="block rounded-2xl border border-slate-800/60 bg-slate-900/40 p-6 hover:border-violet-400/40 transition hover:-translate-y-1 shadow hover:shadow-violet-500/5 md:col-span-1">
          <h3 className="font-extrabold text-violet-300 mb-3">Customization Studio</h3>
          <p className="text-sm text-slate-400">Live preview with prefix, suffix, and style controls.</p>
        </a>
      </div>
    </section>
  );
}
