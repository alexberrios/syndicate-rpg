import Link from 'next/link';

export function TopNav() {
  return (
    <header className="border-b border-slate-800 bg-slate-900">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold text-emerald-400">
          Syndicate RPG Online
        </Link>
        <nav className="flex gap-4 text-sm text-slate-300">
          <Link href="/worlds">Mundos</Link>
          <Link href="/worlds/demo/character">Personaje</Link>
          <Link href="/worlds/demo/contracts">Contratos</Link>
          <Link href="/worlds/demo/map">Mapa</Link>
          <Link href="/worlds/demo/inventory">Inventario</Link>
          <Link href="/worlds/demo/save">Guardado</Link>
        </nav>
      </div>
    </header>
  );
}
