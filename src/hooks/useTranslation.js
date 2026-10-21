import { useState, useEffect } from "react";
import { en, hi } from "../translations/translations";
import { STORAGE_KEYS, getData, setData } from "../utils/storage";

export function useTranslation() {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const saved = getData(STORAGE_KEYS.language);
    if (saved === "hi" || saved === "en") setLang(saved);
  }, []);

  const t = (key) => {
    const dict = lang === "hi" ? hi : en;
    return dict[key] || key;
  };

  const changeLang = (l) => {
    setLang(l);
    setData(STORAGE_KEYS.language, l);
  };

  return { t, lang, changeLang };
}
