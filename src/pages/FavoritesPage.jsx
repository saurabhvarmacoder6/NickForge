import { useState, useEffect } from "react";
import { Trash2, Copy } from "lucide-react";
import { STORAGE_KEYS, getData, removeFavorite } from "../utils/storage";
import { useTranslation } from "../hooks/useTranslation";

export default function FavoritesPage() {
  const [items, setItems] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    setItems(getData(STORAGE_KEYS.favorites, []));
  }, []);

  const handleRemove = (nickname) => {
    removeFavorite(nickname);
    setItems((prev) => prev.filter((i) => i.nickname !== nickname));
  };

  return (
    <section className="max-w-5xl mx-auto px-4 py-12 space-y-8">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">{t("favorites")}</h1>
      {items.length === 0 && <p className="text-slate-500">{t("noFavorites")}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((i) => (
          <div key={i.nickname} className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 flex items-center justify-between hover:border-amber-400/30 transition">
            <div className="min-w-0">
              <h3 className="text-xl font-extrabold text-amber-300 truncate">{i.nickname}</h3>
              <span className="text-xs text-slate-500">{i.category}</span>
            </div>
            <div className="flex gap-2">
              <button onClick={() => navigator.clipboard.writeText(i.nickname)} className="p-2 rounded-lg bg-slate-800 hover:bg-amber-400 hover:text-slate-950 transition" aria-label="Copy"><Copy size={16} /></button>
              <button onClick={() => handleRemove(i.nickname)} className="p-2 rounded-lg bg-slate-800 hover:bg-rose-500 hover:text-slate-950 transition" aria-label="Remove"><Trash2 size={16} /></button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
