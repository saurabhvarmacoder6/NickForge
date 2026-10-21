import { unicodeStyles } from "./unicodeStyles";

const baseCategories = [
  { id: "pro", label: "Pro", labelEn: "Pro", labelHi: "प्रो" },
  { id: "stylish", label: "Stylish", labelEn: "Stylish", labelHi: "स्टाइलिश" },
  { id: "minimal", label: "Minimal", labelEn: "Minimal", labelHi: "मिनिमल" },
  { id: "clean", label: "Clean", labelEn: "Clean", labelHi: "साफ" },
  { id: "dark", label: "Dark", labelEn: "Dark", labelHi: "डार्क" },
  { id: "competitive", label: "Competitive", labelEn: "Competitive", labelHi: "प्रतियोगी" },
  { id: "symbol", label: "Symbol", labelEn: "Symbol", labelHi: "प्रतीक" },
  { id: "decorative", label: "Decorative", labelEn: "Decorative", labelHi: "सजावटी" },
];

const unicodeCategoryIds = Object.keys(unicodeStyles);
const unicodeCategories = unicodeCategoryIds.map((key) => ({
  id: key,
  label: unicodeStyles[key].label,
  labelEn: unicodeStyles[key].labelEn,
  labelHi: unicodeStyles[key].labelHi,
}));

export const categories = [...baseCategories, ...unicodeCategories];
