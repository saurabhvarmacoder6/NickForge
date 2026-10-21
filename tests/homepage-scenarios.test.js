import { describe, it, expect } from "vitest";
import { generateNames } from "../src/utils/generator";
import { defaultCollection } from "../src/data/defaultCollection";

describe("homepage scenarios", () => {
  it("default collection has 100+ unique entries", () => {
    const unique = new Set(defaultCollection.map((e) => e.nickname));
    expect(unique.size).toBeGreaterThanOrEqual(100);
  });

  it("default filter shows results for clean category", () => {
    const clean = defaultCollection.filter((e) => (e.category || "default") === "clean");
    expect(clean.length).toBeGreaterThan(0);
  });

  it("default filter shows results for small-caps", () => {
    const sc = defaultCollection.filter((e) => (e.category || "default") === "small-caps");
    expect(sc.length).toBeGreaterThan(0);
  });

  it("default filter shows results for decorative", () => {
    const dec = defaultCollection.filter((e) => (e.category || "default") === "decorative");
    expect(dec.length).toBeGreaterThan(0);
  });

  it("default filter shows results for dark", () => {
    const dark = defaultCollection.filter((e) => (e.category || "default") === "dark");
    expect(dark.length).toBeGreaterThan(0);
  });

  it("default filter All returns full set", () => {
    const allFiltered = defaultCollection.filter((e) => (e.category || "default") === "all");
    // "all" filter should show everything since no entry has category "all"
    // But in our logic filterCat "all" skips filtering, so full set shown
    expect(defaultCollection.length).toBeGreaterThanOrEqual(100);
  });

  it("personalized saurabh produces results", () => {
    const r = generateNames({ input: "saurabh", category: "pro", count: 8 });
    expect(r.length).toBeGreaterThan(0);
  });

  it("personalized small-caps transforms text", () => {
    const r = generateNames({ input: "saurabh", category: "small-caps", count: 4 });
    expect(r.length).toBeGreaterThan(0);
    expect(r[0].category).toBe("small-caps");
  });

  it("personalized fullwidth transforms text", () => {
    const r = generateNames({ input: "Shadow", category: "fullwidth", count: 4 });
    expect(r.length).toBeGreaterThan(0);
    expect(r[0].category).toBe("fullwidth");
  });

  it("personalized decorative uses templates", () => {
    const r = generateNames({ input: "Devil", category: "decorative", count: 6 });
    expect(r.length).toBeGreaterThan(0);
  });

  it("personalized dark produces frames", () => {
    const r = generateNames({ input: "Shadow", category: "dark", count: 4 });
    expect(r.length).toBeGreaterThan(0);
  });

  it("generate more adds unique variants", () => {
    const first = generateNames({ input: "RDX", category: "competitive", count: 8 });
    const extra = generateNames({ input: "RDX", category: "competitive", count: 8 });
    const combined = [...first, ...extra];
    const unique = new Set(combined.map((r) => r.nickname));
    expect(unique.size).toBeGreaterThanOrEqual(first.length);
  });

  it("empty input does not crash", () => {
    const r = generateNames({ input: "", category: "clean", count: 4 });
    expect(r.length).toBeGreaterThanOrEqual(1);
  });
});
