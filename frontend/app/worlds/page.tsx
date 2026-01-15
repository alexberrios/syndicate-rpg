import Link from 'next/link';

const demoWorlds = [
  { id: 'demo', name: 'Mundo Omega', day: 42 },
  { id: 'sombra', name: 'Sombra Helada', day: 7 },
];

export default function WorldsPage() {
  return (
    <section className="space-y-6">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-emerald-400">Mundos</h1>
          <p className="text-sm text-slate-400">
            Cada mundo es persistente y evoluciona con ticks diarios.
          </p>
        </div>
        <button className="rounded bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950">
          Crear mundo
        </button>
      </header>
      <div className="grid gap-4 md:grid-cols-2">
        {demoWorlds.map((world) => (
          <Link
            key={world.id}
            href={`/worlds/${world.id}`}
            className="rounded-lg border border-slate-800 bg-slate-900 p-4"
          >
            <h2 className="text-lg font-semibold text-slate-100">
              {world.name}
            </h2>
            <p className="text-sm text-slate-400">Día {world.day}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
