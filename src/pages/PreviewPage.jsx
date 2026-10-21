import { useState, useEffect, useMemo } from "react";
import { Copy, Sparkles, AlertTriangle } from "lucide-react";
import { generateNames } from "../utils/generator";
import { categories } from "../data/categories";
import { decorativeTemplates } from "../data/templates";
import { unicodeStyles } from "../data/unicodeStyles";
import { useTranslation } from "../hooks/useTranslation";

export default function PreviewPage() {
  const [name, setName] = useState("Shadow");
  const [category, setCategory] = useState("pro");
  const [unicodeStyle, setUnicodeStyle] = useState("");
  const [leftDeco, setLeftDeco] = useState("");
  const [rightDeco, setRightDeco] = useState("");
  const [separator, setSeparator] = useState("");
  const [prefix, setPrefix] = useState("");
  const [suffix, setSuffix] = useState("");
  const [targetLength, setTargetLength] = useState(20);
  const [result, setResult] = useState("");
  const { t } = useTranslation();

  const allDecorations = decorativeTemplates.map((tpl) => ({
    id: tpl.id,
    label: tpl.label,
    left: tpl.format("").split(" ").filter(Boolean)[0] || tpl.left,
    right: tpl.format("").split(" ").filter(Boolean)[2] || tpl.right,
    separator: tpl.separator,
    format: tpl.format,
  }));

  const uniqueDecorations = useMemo(() => {
    const seen = new Set();
    return allDecorations.filter((d) => {
      const key = d.id;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }, []);

  useEffect(() => {
    const base = name || "Player";
    let out = generateNames({ input: base, category, count: 1 })[0]?.nickname || base;

    if (unicodeStyle && unicodeStyles[unicodeStyle]) {
      out = unicodeStyles[unicodeStyle].map(out);
    }

    const deco = uniqueDecorations.find((d) => d.id === leftDeco || d.id === rightDeco);
    if (deco) {
      out = deco.format(out);
    } else {
      if (leftDeco) out = leftDeco + out;
      if (rightDeco) out = out + rightDeco;
    }

    if (separator) {
      out = out.replace(/✦/g, separator).replace(/✧/g, separator).replace(/·/g, separator);
    }

    if (prefix) out = prefix + out;
    if (suffix) out = out + suffix;
    setResult(out);
  }, [name, category, unicodeStyle, leftDeco, rightDeco, separator, prefix, suffix, uniqueDecorations]);

  const resultLength = result?.length || 0;
  const exceedsTarget = resultLength > targetLength;

  return (
    <section className="max-w-5xl mx-auto px-4 py-12 space-y-8">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">{t("previewTitle")}</h1>
      <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 md:p-8 space-y-6 shadow-xl">
        <div className="grid md:grid-cols-3 gap-4">
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder={t("inputPlaceholder")} className="rounded-xl bg-slate-950 border border-slate-700 px-4 py-3 text-sm" />
          <input value={prefix} onChange={(e) => setPrefix(e.target.value)} placeholder={t("previewPrefix")} className="rounded-xl bg-slate-950 border border-slate-700 px-4 py-3 text-sm" />
          <input value={suffix} onChange={(e) => setSuffix(e.target.value)} placeholder={t("previewSuffix")} className="rounded-xl bg-slate-950 border border-slate-700 px-4 py-3 text-sm" />
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="rounded-xl bg-slate-950 border border-slate-700 px-3 py-3 text-xs">
            {categories.map((c) => <option key={c.id} value={c.id}>{c.label}</option>)}
          </select>
          <select value={unicodeStyle} onChange={(e) => setUnicodeStyle(e.target.value)} className="rounded-xl bg-slate-950 border border-slate-700 px-3 py-3 text-xs">
            <option value="">No Unicode Style</option>
            {Object.entries(unicodeStyles).map(([key, s]) => <option key={key} value={key}>{s.labelEn}</option>)}
          </select>
          <select value={leftDeco} onChange={(e) => setLeftDeco(e.target.value)} className="rounded-xl bg-slate-950 border border-slate-700 px-3 py-3 text-xs">
            <option value="">No left deco</option>
            {uniqueDecorations.map((d) => <option key={d.id + "-l"} value={d.id}>{d.label}</option>)}
          </select>
          <select value={separator} onChange={(e) => setSeparator(e.target.value)} className="rounded-xl bg-slate-950 border border-slate-700 px-3 py-3 text-xs">
            <option value="">No separator</option>
            <option value="✦">✦</option>
            <option value="✧">✧</option>
            <option value="·">·</option>
            <option value="—">—</option>
            <option value="|">|</option>
          </select>
        </div>

        <div className="flex gap-3 items-center">
          <label className="text-xs text-slate-400">Target length:</label>
          <input type="number" value={targetLength} onChange={(e) => setTargetLength(Number(e.target.value) || 20)} className="w-16 rounded-lg bg-slate-950 border border-slate-700 px-2 py-1 text-xs" />
          <button onClick={() => { setName("Shadow"); setPrefix(""); setSuffix(""); setCategory("pro"); setUnicodeStyle(""); setLeftDeco(""); setRightDeco(""); setSeparator(""); }} className="px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs hover:bg-slate-800 transition">Reset</button>
        </div>

        <div className="rounded-2xl border border-amber-400/30 bg-gradient-to-r from-amber-500/10 to-rose-500/10 p-8 text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold text-amber-300 tracking-tight break-all">{result || name}</h2>
          <div className="mt-3 flex justify-center gap-4 text-sm">
            <span className={`font-semibold ${exceedsTarget ? "text-rose-400" : "text-slate-400"}`}>
              {resultLength} chars (counted by code points)
              {exceedsTarget ? ` — exceeds target ${targetLength}` : ""}
            </span>
          </div>
        </div>

        {true && (
          <div className="flex items-start gap-2 text-xs text-amber-300 bg-amber-500/10 border border-amber-500/20 rounded-xl p-3">
            <AlertTriangle size={16} className="shrink-0" />
            <p>Decorative Unicode characters may appear differently or be invisible/rejected in some games. Compatibility depends on device and game font support. This tool does not claim live in-game name availability.</p>
          </div>
        )}

        <div className="flex gap-3">
          <button onClick={() => navigator.clipboard.writeText(result || name)} className="px-5 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-rose-500 text-slate-950 font-extrabold"><Copy size={18} /> Copy Final Nickname</button>
        </div>
      </div>
    </section>
  );
}
