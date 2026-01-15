import Link from 'next/link';

export default function WorldDashboard() {
  return (
    <section className="space-y-6">
      <div className="rounded-lg border border-slate-800 bg-slate-900 p-6">
        <h1 className="text-2xl font-semibold text-emerald-400">
          Mundo Omega
        </h1>
        <p className="text-sm text-slate-400">
          Día 42 · Clima arcano · Estabilidad 72%
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <Link
          href="/worlds/demo/character"
          className="rounded-lg border border-slate-800 bg-slate-900 p-4"
        >
          Hoja de personaje
        </Link>
        <Link
          href="/worlds/demo/contracts"
          className="rounded-lg border border-slate-800 bg-slate-900 p-4"
        >
          Contratos
        </Link>
        <Link
          href="/worlds/demo/map"
          className="rounded-lg border border-slate-800 bg-slate-900 p-4"
        >
          Mapa textual
        </Link>
        <Link
          href="/worlds/demo/inventory"
          className="rounded-lg border border-slate-800 bg-slate-900 p-4"
        >
          Inventario
        </Link>
        <Link
          href="/worlds/demo/save"
          className="rounded-lg border border-slate-800 bg-slate-900 p-4"
        >
          Gestor de guardado
        </Link>
      </div>
    </section>
  );
}
