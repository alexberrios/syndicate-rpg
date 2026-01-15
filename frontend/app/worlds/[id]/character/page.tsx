export default function CharacterSheet() {
  return (
    <section className="space-y-6">
      <div className="rounded-lg border border-slate-800 bg-slate-900 p-6">
        <h1 className="text-2xl font-semibold text-emerald-400">
          Kora Vex · Nivel 7
        </h1>
        <p className="text-sm text-slate-400">Clase: Tecnomante Errante</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-slate-800 bg-slate-900 p-4">
          <h2 className="text-sm font-semibold text-slate-100">Estadísticas</h2>
          <ul className="mt-2 space-y-1 text-sm text-slate-300">
            <li>Resistencia: 12</li>
            <li>Astucia: 17</li>
            <li>Carisma: 9</li>
            <li>Fuerza: 8</li>
          </ul>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-900 p-4">
          <h2 className="text-sm font-semibold text-slate-100">Reputación</h2>
          <ul className="mt-2 space-y-1 text-sm text-slate-300">
            <li>Consorcio Solar: +18</li>
            <li>Casa Feral: -6</li>
            <li>Oráculo Gris: +4</li>
          </ul>
        </div>
      </div>
      <div className="rounded-lg border border-slate-800 bg-slate-900 p-4">
        <h2 className="text-sm font-semibold text-slate-100">Corrupción</h2>
        <p className="mt-2 text-sm text-slate-300">
          Nivel actual: 3 · Fuente: reliquia prohibida
        </p>
      </div>
    </section>
  );
}
