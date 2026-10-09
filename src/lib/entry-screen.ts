const ENTRY_KEY = "aagneya:entered";

export function hasEnteredSite(storage: Pick<Storage, "getItem">): boolean {
  try {
    return storage.getItem(ENTRY_KEY) === "true";
  } catch {
    return false;
  }
}

export function rememberSiteEntry(storage: Pick<Storage, "setItem">): void {
  try {
    storage.setItem(ENTRY_KEY, "true");
  } catch {
    // The entry screen still works when browser storage is unavailable.
  }
}