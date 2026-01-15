const mapRows = [
  '~~~~~^^^~~~~~',
  '~..S..^..N..~',
  '~..##..^..~.~',
  '~..##..^..C.~',
  '~~~~~^^^~~~~~',
];

export default function WorldMap() {
  return (
    <section className="space-y-6">
      <div className="rounded-lg border border-slate-800 bg-slate-900 p-6">
        <h1 className="text-2xl font-semibold text-emerald-400">Mapa textual</h1>
        <p className="text-sm text-slate-400">
          S: Santuario · N: Nodo arcano · C: Campamento
        </p>
      </div>
      <div className="rounded-lg border border-slate-800 bg-slate-950 p-4 font-mono text-sm text-emerald-300">
        {mapRows.map((row) => (
          <div key={row}>{row}</div>
        ))}
      </div>
    </section>
  );
}
