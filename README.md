# Syndicate RPG Online

Backend y frontend para un RPG persistente single-player con mundos vivos, reputación, corrupción, economía y memoria de NPCs.

## Arquitectura

- Backend: NestJS + PostgreSQL + Redis + OpenAI API
- Frontend: Next.js (App Router) + Tailwind
- Hosting: Railway

## Backend (NestJS)

### Requisitos

- Node.js 20+
- PostgreSQL
- Redis

### Setup

```bash
cd backend
npm install
cp env.example .env
npm run prisma:generate
npm run prisma:migrate
npm run start:dev
```

### Endpoints REST

- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/world/create`
- `GET /api/world/:id`
- `POST /api/contract/next`
- `POST /api/action/resolve`
- `GET /api/save/export?worldId=...`
- `POST /api/save/import`

## Frontend (Next.js)

### Setup

```bash
cd frontend
npm install
cp env.example .env
npm run dev
```

## Railway

Configuración incluida por servicio:

- Backend: `backend/railway.toml`
- Frontend: `frontend/railway.toml`

En Railway, crea dos servicios (backend y frontend) y apunta cada uno al directorio correspondiente.

## Notas MVP

- El sistema de narración usa OpenAI con respuesta JSON estructurada.
- Los ticks diarios se ejecutan con `@nestjs/schedule`.
- Los módulos de motor (economía, reputación, corrupción) están listos para extenderse.
