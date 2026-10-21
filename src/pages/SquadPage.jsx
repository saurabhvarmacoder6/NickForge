import { useState } from "react";
import { Sparkles, Copy, Users } from "lucide-react";
import { generateSquad } from "../utils/generator";
import { useTranslation } from "../hooks/useTranslation";
import { categories } from "../data/categories";

export default function SquadPage() {
  const [members, setMembers] = useState(["Shadow", "Viper", "Phoenix"]);
  const [category, setCategory] = useState("pro");
  const [squad, setSquad] = useState([]);
  const { t } = useTranslation();

  const handleGenerate = () => {
    const names = members.map((m) => m.trim() || "Player");
    setSquad(generateSquad({ members: names, theme: category }));
  };

  const updateMember = (i, value) => {
    const next = [...members];
    next[i] = value;
    setMembers(next);
  };

  return (
    <section className="max-w-5xl mx-auto px-4 py-12 space-y-8">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">{t("squadTitle")}</h1>
      <p className="text-slate-400">Create matching nicknames for 2–6 squad members with consistent themes.</p>

      <div className="rounded-3xl border border-slate-800/60 bg-slate-900/40 p-6 md:p-8 shadow-xl space-y-6">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-end">
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-3 w-full">
            {members.map((m, i) => (
              <input key={i} value={m} onChange={(e) => updateMember(i, e.target.value)} placeholder={`Player ${i + 1}`} className="rounded-xl bg-slate-950 border border-slate-700 px-3 py-3 text-sm" />
            ))}
          </div>
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="rounded-xl bg-slate-950 border border-slate-700 px-4 py-3.5 text-sm">
            {categories.map((c) => <option key={c.id} value={c.id}>{c.label}</option>)}
          </select>
          <button onClick={handleGenerate} className="px-6 py-4 rounded-xl bg-gradient-to-r from-violet-400 to-cyan-500 text-slate-950 font-extrabold"><Users size={20} /> {t("squadGenerate")}</button>
        </div>
        {squad.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {squad.map((s) => (
              <div key={s.id} className="rounded-2xl border border-slate-800 bg-slate-950 p-4 flex items-center justify-between">
                <div>
                  <div className="font-extrabold text-lg text-violet-300">{s.name}</div>
                  <div className="text-xs text-slate-500">{s.member}</div>
                </div>
                <button onClick={() => navigator.clipboard.writeText(s.name)} className="p-2 rounded-lg bg-slate-800 hover:bg-violet-500 hover:text-slate-950 transition" aria-label="Copy"><Copy size={16} /></button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
