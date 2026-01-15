"use client";

import { useState } from 'react';
import { apiFetch } from '../../../lib/api';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setMessage('');
    try {
      const response = await apiFetch<{ token: string }>('/auth/register', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      });
      setMessage(`Cuenta creada. Token: ${response.token.slice(0, 16)}...`);
    } catch (error) {
      setMessage((error as Error).message);
    }
  };

  return (
    <div className="mx-auto max-w-md space-y-4 rounded-lg border border-slate-800 bg-slate-900 p-6">
      <h1 className="text-xl font-semibold text-emerald-400">Registrarse</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <label className="block text-sm text-slate-300">
          Correo
          <input
            className="mt-1 w-full rounded border border-slate-700 bg-slate-950 p-2 text-sm"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </label>
        <label className="block text-sm text-slate-300">
          Contraseña
          <input
            className="mt-1 w-full rounded border border-slate-700 bg-slate-950 p-2 text-sm"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </label>
        <button className="w-full rounded bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950">
          Crear cuenta
        </button>
      </form>
      {message ? <p className="text-xs text-slate-400">{message}</p> : null}
    </div>
  );
}
