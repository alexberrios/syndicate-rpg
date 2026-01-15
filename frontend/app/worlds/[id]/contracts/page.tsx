export default function ContractView() {
  return (
    <section className="space-y-6">
      <div className="rounded-lg border border-slate-800 bg-slate-900 p-6">
        <h1 className="text-2xl font-semibold text-emerald-400">
          Contratos activos
        </h1>
        <p className="text-sm text-slate-400">
          Motor dinámico sincronizado con la reputación y corrupción del mundo.
        </p>
      </div>
      <div className="space-y-4">
        <article className="rounded-lg border border-slate-800 bg-slate-900 p-4">
          <h2 className="text-lg font-semibold text-slate-100">
            Reconocimiento en las Ruinas
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            Investiga señales arcanas y evita activar los sellos antiguos.
          </p>
          <div className="mt-3 text-sm text-slate-400">
            Recompensas: 120 créditos · Botín arcano
          </div>
        </article>
        <article className="rounded-lg border border-slate-800 bg-slate-900 p-4">
          <h2 className="text-lg font-semibold text-slate-100">
            Escolta del convoy
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            Asegura el paso del convoy por la brecha de ceniza.
          </p>
          <div className="mt-3 text-sm text-slate-400">
            Reputación: +8 Consorcio Solar · Corrupción: +1
          </div>
        </article>
      </div>
    </section>
  );
}
