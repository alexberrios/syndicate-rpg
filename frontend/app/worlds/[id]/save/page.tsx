export default function SaveManager() {
  return (
    <section className="space-y-6">
      <div className="rounded-lg border border-slate-800 bg-slate-900 p-6">
        <h1 className="text-2xl font-semibold text-emerald-400">
          Gestor de guardado
        </h1>
        <p className="text-sm text-slate-400">
          Exporta o importa el estado completo del mundo como JSON.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-slate-800 bg-slate-900 p-4">
          <h2 className="text-sm font-semibold text-slate-100">Exportar</h2>
          <p className="mt-2 text-sm text-slate-400">
            Genera un snapshot para respaldos o migraciones.
          </p>
          <button className="mt-4 rounded bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950">
            Exportar JSON
          </button>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-900 p-4">
          <h2 className="text-sm font-semibold text-slate-100">Importar</h2>
          <textarea
            className="mt-2 h-32 w-full rounded border border-slate-700 bg-slate-950 p-2 text-xs text-slate-200"
            placeholder='{"world": {...}}'
          />
          <button className="mt-3 rounded border border-emerald-500 px-4 py-2 text-sm font-semibold text-emerald-400">
            Importar JSON
          </button>
        </div>
      </div>
    </section>
  );
}
