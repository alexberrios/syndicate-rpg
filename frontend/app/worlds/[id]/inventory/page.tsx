const items = [
  { name: 'Kit de reparación', qty: 2 },
  { name: 'Fragmento arcano', qty: 1 },
  { name: 'Raciones', qty: 5 },
];

export default function InventoryPage() {
  return (
    <section className="space-y-6">
      <div className="rounded-lg border border-slate-800 bg-slate-900 p-6">
        <h1 className="text-2xl font-semibold text-emerald-400">Inventario</h1>
        <p className="text-sm text-slate-400">
          Gestiona recursos, botín y objetos clave del mundo.
        </p>
      </div>
      <div className="rounded-lg border border-slate-800 bg-slate-900 p-4">
        <ul className="space-y-2 text-sm text-slate-300">
          {items.map((item) => (
            <li key={item.name} className="flex justify-between">
              <span>{item.name}</span>
              <span className="text-slate-400">x{item.qty}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
