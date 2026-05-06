const STORAGE_KEY = "stackspend-audit";

export function saveAuditData(data: unknown) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function loadAuditData() {
    const data = localStorage.getItem(STORAGE_KEY);

    if (!data) return null;

    return JSON.parse(data);
}