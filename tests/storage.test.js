import { describe, it, expect, beforeEach, afterEach, beforeAll } from "vitest";
import { STORAGE_KEYS, getData, setData, addFavorite, removeFavorite, addHistory, clearHistory } from "../src/utils/storage";

function mockLocalStorage() {
  let store = {};
  return {
    getItem(key) { return store[key] || null; },
    setItem(key, value) { store[key] = String(value); },
    removeItem(key) { delete store[key]; },
    clear() { store = {}; },
  };
}

beforeAll(() => {
  global.localStorage = mockLocalStorage();
});

describe("storage", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it("stores and retrieves data", () => {
    setData(STORAGE_KEYS.settings, { theme: "dark" });
    expect(getData(STORAGE_KEYS.settings)).toEqual({ theme: "dark" });
  });

  it("handles malformed storage safely", () => {
    localStorage.setItem(STORAGE_KEYS.favorites, "not-json");
    expect(getData(STORAGE_KEYS.favorites, [])).toEqual([]);
  });

  it("adds and removes favorites", () => {
    addFavorite({ nickname: "Test", category: "pro", input: "Test", length: 4 });
    const list = getData(STORAGE_KEYS.favorites, []);
    expect(list.length).toBe(1);
    removeFavorite("Test");
    expect(getData(STORAGE_KEYS.favorites, [])).toHaveLength(0);
  });

  it("limits history to 30", () => {
    for (let i = 0; i < 35; i++) {
      addHistory({ nickname: `Name${i}`, category: "pro", input: `Name${i}`, length: 5 });
    }
    const hist = getData(STORAGE_KEYS.history, []);
    expect(hist.length).toBeLessThanOrEqual(30);
  });

  it("clears history", () => {
    addHistory({ nickname: "A", category: "pro" });
    clearHistory();
    expect(getData(STORAGE_KEYS.history, [])).toHaveLength(0);
  });
});
