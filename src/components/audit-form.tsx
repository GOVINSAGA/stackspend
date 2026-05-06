export function AuditForm() {
    return (
        <form className="space-y-6">
            <div>
                <label className="mb-2 block text-sm font-medium">
                    Team Size
                </label>

                <input
                    type="number"
                    placeholder="5"
                    className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none"
                />
            </div>

            <div>
                <label className="mb-2 block text-sm font-medium">
                    Primary Use Case
                </label>

                <select className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none">
                    <option value="coding">Coding</option>
                    <option value="writing">Writing</option>
                    <option value="research">Research</option>
                    <option value="data">Data</option>
                    <option value="mixed">Mixed</option>
                </select>
            </div>

            <button
                type="submit"
                className="w-full rounded-xl bg-white px-4 py-3 font-medium text-black transition hover:opacity-90"
            >
                Run Audit
            </button>
        </form>
    );
}