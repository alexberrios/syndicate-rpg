import Link from 'next/link';

export default function HomePage() {
  return (
    <section className="space-y-6">
      <div className="rounded-lg border border-slate-800 bg-slate-900 p-6">
        <h1 className="text-2xl font-semibold text-emerald-400">
          Syndicate RPG Online
        </h1>
        <p className="mt-2 text-slate-300">
          Plataforma RPG persistente con mundos vivos, reputación y corrupción
          dinámica.
        </p>
        <div className="mt-4 flex gap-3">
          <Link
            href="/login"
            className="rounded bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950"
          >
            Iniciar sesión
          </Link>
          <Link
            href="/register"
            className="rounded border border-emerald-500 px-4 py-2 text-sm font-semibold text-emerald-400"
          >
            Registrarse
          </Link>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-lg border border-slate-800 bg-slate-900 p-4">
          <h2 className="text-sm font-semibold text-slate-100">
            Mundo persistente
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Los mundos avanzan en ticks diarios con economía, reputación y
            corrupción en evolución.
          </p>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-900 p-4">
          <h2 className="text-sm font-semibold text-slate-100">
            Contratos dinámicos
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            El motor genera encargos únicos según tus decisiones y el estado del
            mundo.
          </p>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-900 p-4">
          <h2 className="text-sm font-semibold text-slate-100">
            NPCs con memoria
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Los NPCs recuerdan traiciones y favores, y reaccionan en consecuencia.
          </p>
        </div>
      </div>
    </section>
  );
}
