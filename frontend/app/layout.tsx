import type { ReactNode } from 'react';
import './globals.css';
import { TopNav } from '../components/TopNav';

export const metadata = {
  title: 'Syndicate RPG Online',
  description: 'Plataforma RPG persistente en línea.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen">
        <TopNav />
        <main className="mx-auto w-full max-w-6xl px-6 py-8">{children}</main>
      </body>
    </html>
  );
}
