import { describe, it, expect } from "vitest";
import { defaultCollection } from "../src/data/defaultCollection";

describe("default collection", () => {
  it("has at least 100 unique entries", () => {
    const unique = new Set(defaultCollection.map((e) => e.nickname));
    expect(unique.size).toBeGreaterThanOrEqual(100);
  });

  it("contains gaming-style names", () => {
    const names = defaultCollection.map((e) => e.nickname.toLowerCase());
    expect(names.some((n) => n.includes("viper") || n.includes("phantom") || n.includes("shadow"))).toBe(true);
  });

  it("contains decorative frames", () => {
    const frames = defaultCollection.filter((e) => /【|『|❖|✺|★|✿|✧|✦/.test(e.nickname));
    expect(frames.length).toBeGreaterThan(0);
  });

  it("contains minimal names", () => {
    expect(defaultCollection.some((e) => ["viper", "shadow", "phantom", "blaze", "nova"].includes(e.nickname.toLowerCase()))).toBe(true);
  });

  it("contains dark/gothic style", () => {
    expect(defaultCollection.some((e) => e.nickname.includes("『") || e.nickname.includes("⧖"))).toBe(true);
  });

  it("contains clean names", () => {
    expect(defaultCollection.some((e) => /^[A-Za-z]+$/.test(e.nickname) && e.nickname.length < 15)).toBe(true);
  });

  it("contains competitive names", () => {
    expect(defaultCollection.some((e) => e.nickname.includes("PRO_") || e.nickname.includes("ELITE_") || e.nickname.includes("⚡"))).toBe(true);
  });

  it("contains decorated versions", () => {
    expect(defaultCollection.some((e) => /✦|✧|❖|✺|★|✿/.test(e.nickname))).toBe(true);
  });
});
