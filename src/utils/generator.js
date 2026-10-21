import { categories } from "../data/categories";
import { symbols } from "../data/symbols";
import { decorativeTemplates } from "../data/templates";
import { unicodeStyles } from "../data/unicodeStyles";

function sanitizeUnicode(str) {
  return str.replace(/[\u200B-\u200F\uFEFF]/g, "");
}

function applyUnicodeStyle(text, styleKey) {
  const style = unicodeStyles[styleKey];
  if (!style || !style.map) return text;
  try {
    return style.map(text);
  } catch {
    return text;
  }
}

function generateFromTemplate(base, template) {
  try {
    return template.format(base);
  } catch {
    return base;
  }
}

export function generateNames({ input = "", category = "pro", count = 8, styleOverride = null }) {
  const results = [];
  const baseRaw = input.trim() || "Player";
  const cleanBase = sanitizeUnicode(baseRaw);

  // Get templates for category
  const templates = decorativeTemplates.filter(
    (t) => t.category === category || (category === "decorative" ? (t.category === "ornate" || t.category === "wings" || t.category === "celestial") : true)
  );

  for (let i = 0; i < count; i++) {
    let nickname = cleanBase;
    const template = templates[i % templates.length] || templates[0];

    if (category === "pro") {
      nickname = [`Pro${cleanBase}`, `Elite${cleanBase}`, `${cleanBase}X`, `${cleanBase}_FF`, `Shadow${cleanBase}`][i % 5];
    } else if (category === "stylish") {
      nickname = [`${cleanBase}✦`, `✦${cleanBase}✦`, `✧${cleanBase}✧`, `❖${cleanBase}❖`, `✺${cleanBase}✺`][i % 5];
    } else if (category === "minimal") {
      nickname = [`${cleanBase.toLowerCase()}`, `${cleanBase.slice(0, 2)}`, cleanBase][i % 3];
    } else if (category === "clean") {
      nickname = cleanBase;
    } else if (category === "dark") {
      nickname = [`『${cleanBase}』`, `『${cleanBase}✦』`, `✦『${cleanBase}』`, `⧖${cleanBase}⧗`][i % 4];
    } else if (category === "competitive") {
      nickname = [`${cleanBase}_`, `PRO_${cleanBase}`, `ELITE_${cleanBase}`, `${cleanBase}X`][i % 4];
    } else if (category === "symbol") {
      const sym = symbols[i % symbols.length];
      nickname = `${sym.char}${cleanBase}${sym.char}`;
    } else if (category === "decorative") {
      nickname = generateFromTemplate(cleanBase, template);
    } else if (category === "small-caps" || category === "fullwidth" || category === "math-bold" || category === "math-italic" || category === "math-bold-italic" || category === "double-struck" || category === "monospace" || category === "fraktur") {
      nickname = applyUnicodeStyle(cleanBase, category);
    } else {
      nickname = generateFromTemplate(cleanBase, template);
    }

    // Apply Unicode text style if specified separately in customization studio
    if (styleOverride && unicodeStyles[styleOverride]) {
      nickname = applyUnicodeStyle(nickname, styleOverride);
    }

    results.push({
      id: `${category}-${i}-${cleanBase}-${Date.now()}`,
      nickname,
      category,
      input: cleanBase,
      length: nickname.length,
    });
  }

  // Deduplicate while preserving order
  const seen = new Set();
  const deduped = results.filter((r) => {
    if (seen.has(r.nickname)) return false;
    seen.add(r.nickname);
    return true;
  });

  return deduped;
}

export function generateSquad({ members = ["A", "B", "C"], theme = "pro" }) {
  const names = [];
  for (let i = 0; i < members.length; i++) {
    const base = members[i] || `P${i + 1}`;
    const clean = sanitizeUnicode(base.trim() || `P${i + 1}`);
    const result = generateNames({ input: clean, category: theme, count: 1 })[0]?.nickname || clean;
    names.push({ id: `s-${i}-${clean}`, name: result, member: clean });
  }
  return names;
}
