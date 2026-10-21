import { useState, useEffect } from "react";
import { Copy, Trash2, Trash } from "lucide-react";
import { STORAGE_KEYS, getData, clearHistory, setData } from "../utils/storage";
import { useTranslation } from "../hooks/useTranslation";

export default function HistoryPage() {
  const [items, setItems] = useState([]);
  const [confirmClear, setConfirmClear] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setItems(getData(STORAGE_KEYS.history, []));
  }, []);

  const handleRemoveOne = (nickname) => {
    const list = items.filter((i) => i.nickname !== nickname);
    setItems(list);
    // Update storage: rebuild without this item
    const rest = list.map(({ nickname, category, input, length, savedAt }) => ({ nickname, category, input, length, savedAt }));
    setData(STORAGE_KEYS.history, rest);
  };

  const handleClear = () => {
    clearHistory();
    setItems([]);
    setConfirmClear(false);
  };

  return (
    <section className="max-w-5xl mx-auto px-4 py-12 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">{t("history")}</h1>
        {items.length > 0 && (
          <button onClick={() => confirmClear ? handleClear() : setConfirmClear(true)} className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-sm font-semibold transition flex items-center gap-2">
            <Trash size={16} /> {confirmClear ? t("clearHistory") + "?" : t("clearHistory")}
          </button>
        )}
      </div>
      {items.length === 0 && <p className="text-slate-500">{t("noHistory")}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((i) => (
          <div key={i.nickname + i.savedAt} className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 flex items-center justify-between hover:border-amber-400/30 transition">
            <div className="min-w-0">
              <h3 className="text-xl font-extrabold text-amber-300 truncate">{i.nickname}</h3>
              <div className="text-xs text-slate-500 mt-1 flex gap-2">
                <span className="bg-slate-800 px-2 rounded-full">{i.category}</span>
                <span>{i.length} chars</span>
              </div>
            </div>
            <div className="flex gap-2">
              <button onClick={() => navigator.clipboard.writeText(i.nickname)} className="p-2 rounded-lg bg-slate-800 hover:bg-amber-400 hover:text-slate-950 transition" aria-label="Copy"><Copy size={16} /></button>
              <button onClick={() => handleRemoveOne(i.nickname)} className="p-2 rounded-lg bg-slate-800 hover:bg-rose-500 hover:text-slate-950 transition" aria-label="Remove"><Trash2 size={16} /></button>
            </div>
          </div>
        ))}
      </div>
      {confirmClear && (
        <div className="text-xs text-rose-400">{t("confirmClear")}</div>
      )}
    </section>
  );
}
