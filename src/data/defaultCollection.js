import { decorativeTemplates } from "./templates";
import { symbols } from "./symbols";
import { unicodeStyles } from "./unicodeStyles";

function sanitize(str) {
  return str.replace(/[\u200B-\u200F\uFEFF]/g, "");
}

function buildDefaultCollection() {
  const entries = [];
  const push = (nickname, category) => {
    entries.push({ nickname, category, input: nickname.includes(" ") ? nickname.split(" ")[0] : nickname, length: nickname.length });
  };

  // Plain gaming names (pro/clean)
  const gamingNames = ["Viper", "Hyper", "Phantom", "Shadow", "Blaze", "Nova", "Venom", "Frost", "Rogue", "Ghost", "Storm", "Tony", "Ace", "Reaper", "Onyx", "Titan", "Raven", "Zero", "Apex", "Fury", "Chaos", "Inferno", "Specter", "Wraith", "Nemesis", "Eclipse", "Void", "Nebula", "Cosmos", "Orbit", "Striker", "Hunter"];
  gamingNames.forEach((n) => push(n, "clean"));

  // Minimal
  push("viper", "minimal");
  push("shadow", "minimal");
  push("phantom", "minimal");
  push("blaze", "minimal");
  push("nova", "minimal");

  // Dark/gothic (dark)
  push("⧖Phantom⧗", "dark");
  push("『Shadow』", "dark");
  push("✦Devil✦", "dark");
  push("⧖Reaper⧗", "dark");
  push("『Venom』", "dark");

  // Stylish/symbol (stylish)
  push("✺Viper✺", "stylish");
  push("✦Shadow✦", "stylish");
  push("❖Phantom❖", "stylish");
  push("✧Blaze✧", "stylish");
  push("✶Nova✶", "stylish");

  // Fullwidth (fullwidth) - simulated as real unicode
  push("Ｓｈａｄｏｗ", "fullwidth");
  push("Ｐｈａｎｔｏｍ", "fullwidth");
  push("Ｂｌａｚｅ", "fullwidth");
  push("Ｖｉｐｅｒ", "fullwidth");

  // Small caps (small-caps)
  push("ꜱᴀᴜʀᴀʙʜ", "small-caps");
  push("ᴅᴇᴠɪʟ", "small-caps");
  push("ꜱʜᴀᴅᴏᴡ", "small-caps");
  push("ᴠɪᴘᴇʀ", "small-caps");

  // Math bold (math-bold)
  push("𝐒𝐡𝐚𝐝𝐨𝐰", "math-bold");
  push("𝐃𝐞𝐯𝐢𝐥", "math-bold");
  push("𝐕𝐢𝐩𝐞𝐫", "math-bold");

  // Math italic (math-italic)
  push("𝑆ℎ𝑎𝑑𝑜𝑤", "math-italic");
  push("𝐷𝑒𝑣𝑖𝑙", "math-italic");
  push("𝑉𝑖𝑝𝑒𝑟", "math-italic");

  // Math bold italic (math-bold-italic)
  push("𝑺𝒉𝒂𝒅𝒐𝒘", "math-bold-italic");
  push("𝑫𝒆𝒗𝒊𝒍", "math-bold-italic");
  push("𝑽𝒊𝒑𝒆𝒓", "math-bold-italic");

  // Double-struck (double-struck)
  push("𝕊𝕙𝕒𝕕𝕠𝕨", "double-struck");
  push("𝔻𝕖𝕧𝕚𝕝", "double-struck");
  push("𝕍𝕚𝕡𝕖𝕣", "double-struck");

  // Monospace (monospace)
  push("𝙎𝙝𝙖𝙙𝙤𝙬", "monospace");
  push("𝙳𝙚𝙫𝙞𝙡", "monospace");
  push("𝙑𝙞𝙥𝙚𝙧", "monospace");

  // Fraktur (fraktur)
  push("𝔖𝔥𝔞𝔡𝔬𝔴", "fraktur");
  push("𝔇𝔢𝔳𝔦𝔩", "fraktur");
  push("𝔙𝔦𝔭𝔢𝔯", "fraktur");

  // Crowns / ornate frames (ornate / crown)
  push("♔Viper✦♚", "ornate");
  push("⚜Phantom✦⚜", "ornate");
  push("❖Shadow❖", "ornate");
  push("✧Blaze✧", "ornate");

  // Stars / celestial (celestial / star-related via decorative)
  push("★Venom★", "decorative");
  push("✦Nova✦", "decorative");
  push("✶Storm✶", "decorative");
  push("✯Titan✯", "decorative");

  // Wings (wings category via decorative template mapping)
  push("✿Ghost✿", "decorative");
  push("✾Rogue✾", "decorative");
  push("❦Shadow❦", "decorative");
  push("❀Frost❀", "decorative");

  // Brackets (brackets category via decorative templates)
  push("【Viper☆】", "decorative");
  push("『Phantom✦』", "decorative");
  push("⟦Shadow✧⟧", "decorative");
  push("⟨Blaze◈⟩", "decorative");

  // Competitive gaming (competitive)
  push("⚡Viper⚡", "competitive");
  push("⚡Shadow⚡", "competitive");
  push("✦Fury✦", "competitive");
  push("✧Chaos✧", "competitive");
  push("PRO_RDX", "competitive");
  push("ELITE_Devil", "competitive");

  // Minimal separators (minimal / clean)
  push("Viper · X", "minimal");
  push("Shadow — Pro", "minimal");
  push("Blaze · Storm", "minimal");

  // Aesthetic decorations (aesthetic / decorative)
  push("❥Phantom❥", "decorative");
  push("✽Shadow✽", "decorative");
  push("❀Venom❀", "decorative");
  push("✾Frost✾", "decorative");

  // Dark frames (dark)
  push("『Phantom✦』", "dark");
  push("『Venom✧』", "dark");
  push("✦『Shadow』", "dark");

  // Clean (clean)
  push("Shadow", "clean");
  push("Phantom", "clean");
  push("Blaze", "clean");
  push("Nova", "clean");

  // Symbol-heavy decorative (symbol / decorative mix)
  push("✦✧Viper✧✦", "decorative");
  push("★✦Shadow✦★", "decorative");
  push("❖✧Phantom✧❖", "decorative");

  // Template decorative (using all 100 templates mapped to base names)
  decorativeTemplates.forEach((tpl, idx) => {
    const baseNames = ["Viper", "Shadow", "Phantom", "Devil", "Storm", "Blaze", "Nova", "Rogue", "Ghost", "Frost"];
    const base = baseNames[idx % baseNames.length];
    if (tpl.format) {
      push(tpl.format(base), "decorative");
    }
  });

  // Deduplicate by nickname string only (not by object identity)
  const seen = new Set();
  const unique = entries.filter((e) => {
    if (seen.has(e.nickname)) return false;
    seen.add(e.nickname);
    return true;
  });
  return unique;
}

export const defaultCollection = buildDefaultCollection();
