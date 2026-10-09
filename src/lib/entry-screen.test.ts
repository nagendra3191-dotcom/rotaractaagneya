import { describe, expect, test } from "bun:test";
import { hasEnteredSite, rememberSiteEntry } from "./entry-screen";

describe("site entry", () => {
  test("a first visit requires entry; page reloads in the same tab do not", () => {
    const values = new Map<string, string>();
    const storage = {
      getItem: (key: string) => values.get(key) ?? null,
      setItem: (key: string, value: string) => { values.set(key, value); },
    };
    expect(hasEnteredSite(storage)).toBe(false);
    rememberSiteEntry(storage);
    expect(hasEnteredSite(storage)).toBe(true);
    expect(hasEnteredSite({ getItem: () => null })).toBe(false);
  });
});