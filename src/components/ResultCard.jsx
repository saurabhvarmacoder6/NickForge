import { useState } from "react";
import { Copy, Heart, RefreshCw, Sparkles } from "lucide-react";
import { generateNames } from "../utils/generator";
import { addFavorite, removeFavorite, getData, STORAGE_KEYS, addHistory } from "../utils/storage";
import { useTranslation } from "../hooks/useTranslation";
import { categories } from "../data/categories";

export default function ResultCard({ item }) {
  const { t } = useTranslation();
  const favorites = getData(STORAGE_KEYS.favorites, []);
  const [fav, setFav] = useState(favorites.some((f) => f.nickname === item.nickname));
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(item.nickname);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      setCopied(false);
    }
  };

  const handleFavorite = () => {
    if (fav) removeFavorite(item.nickname); else addFavorite(item);
    setFav(!fav);
  };

  return (
    <div className="group relative rounded-2xl border border-slate-800/60 bg-slate-900/60 p-5 hover:border-amber-400/40 hover:bg-slate-800/40 transition shadow hover:shadow-amber-500/5">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <h3 className="text-xl font-extrabold text-amber-300 tracking-tight break-all">{item.nickname}</h3>
          <div className="mt-2 flex items-center gap-3 text-xs text-slate-500">
            <span className="px-2 text-xs py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">{item.category}</span>
            <span>{item.length} chars</span>
            
          </div>
        </div>
      </div>
      <div className="mt-4 flex gap-2">
        <button onClick={handleCopy} className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-sm font-semibold transition" aria-label="Copy">
          <Copy size={14} /> {copied ? t("copied") : t("copy")}
        </button>
        <button onClick={handleFavorite} className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition ${fav ? "bg-rose-500/20 text-rose-400 border border-rose-500/40" : "bg-slate-800 hover:bg-slate-700 text-slate-300"}`} aria-label="Favorite">
          <Heart size={14} /> {fav ? t("unfavorite") : t("favorite")}
        </button>
      </div>
    </div>
  );
}
