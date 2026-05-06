const STORAGE_KEY = "stackspend-audit";

export function saveAuditData(data: unknown) {
    if (typeof window === "undefined") return;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function loadAuditData() {
    if (typeof window === "undefined") return null;

    const data = localStorage.getItem(STORAGE_KEY);

    if (!data) return null;

    try {
        return JSON.parse(data);
    } catch {
        return null;
    }
}