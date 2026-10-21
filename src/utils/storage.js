export const STORAGE_KEYS = {
  favorites: "nickforge_favorites",
  history: "nickforge_history",
  language: "nickforge_lang",
  settings: "nickforge_settings",
};

export function getData(key, fallback = null) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

export function setData(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // ignore
  }
}

export function addFavorite(item) {
  const list = getData(STORAGE_KEYS.favorites, []).filter((i) => i.nickname !== item.nickname);
  list.push({ ...item, savedAt: Date.now() });
  setData(STORAGE_KEYS.favorites, list);
}

export function removeFavorite(nickname) {
  const list = getData(STORAGE_KEYS.favorites, []).filter((i) => i.nickname !== nickname);
  setData(STORAGE_KEYS.favorites, list);
}

export function addHistory(item) {
  const list = getData(STORAGE_KEYS.history, []);
  const filtered = list.filter((i) => i.nickname !== item.nickname);
  filtered.unshift({ ...item, savedAt: Date.now() });
  if (filtered.length > 30) filtered.pop();
  setData(STORAGE_KEYS.history, filtered);
}

export function clearHistory() {
  setData(STORAGE_KEYS.history, []);
}
