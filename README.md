# Aetheria AI

> Luxury AI Sites Studio — premium, AI-generated websites for ambitious brands.

A Next.js 16 / Prisma 7 / Neon PostgreSQL stack, deployed via Docker on a VPS through Dokploy + Traefik.

---

## Stack

| Layer    | Tech                                                                 |
| -------- | -------------------------------------------------------------------- |
| Frontend | Next.js 16 (App Router) · Tailwind v4 · Framer Motion · lucide-react |
| Backend  | Next.js API Routes · Prisma 7 (driver-adapter) · `@prisma/adapter-pg`|
| Database | Neon.tech (Serverless PostgreSQL)                                    |
| Deploy   | Ubuntu 24.04 LTS · Docker · Dokploy · Traefik                        |
| Fonts    | System font stack (UI sans + SF Mono)                                |

The original "Bible" called for Next.js 14 + Tailwind 3, but `create-next-app@latest` was used so the project starts on a longer-lived baseline. Adapting to Next 14 later is a `create-next-app` rerun.

---

## Local development

```bash
# 1. Install
nvm use 20        # Node 20 LTS
npm install

# 2. Configure DB
cp .env.example .env   # or edit the .env that's already in the repo
# DATABASE_URL="postgresql://USER:PASS@HOST.neon.tech/DB?sslmode=require"

# 3. Push schema + seed catalogue
npm run db:push
npm run db:seed

# 4. Dev server
npm run dev       # http://localhost:3000
```

`npm run dev` uses Turbopack. To switch to Webpack (e.g. when debugging a Turbopack-specific issue) use `npx next dev --webpack`.

### Useful scripts

| Script             | What it does                                 |
| ------------------ | -------------------------------------------- |
| `npm run dev`      | Dev server with HMR                          |
| `npm run build`    | Production build (`next build`)              |
| `npm run start`    | Production server on `0.0.0.0:3000`          |
| `npm run db:push`  | Apply Prisma schema to the database          |
| `npm run db:seed`  | Populate the catalogue (6 demo products)     |
| `npm run db:studio`| Open Prisma Studio                           |
| `npm run lint`     | ESLint                                       |

---

## API

| Method | Path             | Body                              | Response                                  |
| ------ | ---------------- | --------------------------------- | ----------------------------------------- |
| GET    | `/api/products`  | —                                 | `[{ id, title, price, description, … }]` |
| POST   | `/api/orders`    | `{ productId, email?, name? }`    | `{ ok, orderId, status }` or `{ error }`  |

If `email` is provided, the order is attached to a real user (created on the fly). If not, a single `guest@aetheria.local` demo user is used so the buy flow is testable without auth.

---

## Design system

Aetheria follows a "Luxurious Futuristic AI Studio" aesthetic — see `src/app/globals.css` for tokens.

| Token        | Value      | Use                              |
| ------------ | ---------- | -------------------------------- |
| `--color-bg` | `#050505`  | App background                   |
| `--color-cyan` | `#00f0ff`| AI indicators, micro-interactions |
| `--color-gold` | `#d4af37`| CTA buttons                      |
| `--color-fg` | `#ffffff`  | Primary text                     |

Reusable utilities:

- `.glass` — frosted-glass card surface (blur 12px + 1px translucent border)
- `.gradient-border` — 1px gradient border via mask-composite
- `.glow-cyan` / `.glow-gold` — text-shadow glow
- `.text-gradient-aurora` — animated cyan → white → gold text
- `.btn-gold` / `.btn-glass` — primary / secondary CTA buttons

---

## Deployment (Dokploy + Traefik)

1. Buy a VPS (Ubuntu 24.04 LTS, 2 vCPU / 2 GB RAM minimum).
2. Install Dokploy on the VPS: `curl -sSL https://dokploy.com/install.sh | sh`.
3. In the Dokploy UI, create a new **Application** → **Service** → **Docker Compose**.
4. Point it at this repo. Dokploy will:
   - Build the image from `Dockerfile`
   - Start the container with `docker-compose.yml`
   - Attach the public domain via Traefik
   - Request a Let's Encrypt certificate automatically
5. Add the `DATABASE_URL` env var in the Dokploy UI (or via the `Environment` tab).
6. Hit **Deploy**.

`next start` is bound to `0.0.0.0:3000` (see the `start` script in `package.json`), so Traefik can reach it on the internal Docker network.

---

## Project layout

```
.
├── prisma/
│   ├── schema.prisma          # User / Product / Order + OrderStatus
│   └── seed.ts                # 6 demo products
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── products/route.ts
│   │   │   └── orders/route.ts
│   │   ├── globals.css        # design system tokens
│   │   ├── layout.tsx         # root layout
│   │   └── page.tsx           # landing page
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── ProductCard.tsx
│   │   ├── ProductGrid.tsx
│   │   ├── OrderButton.tsx
│   │   └── Footer.tsx
│   ├── lib/
│   │   ├── prisma.ts          # Prisma client singleton (with pg adapter)
│   │   └── products.ts        # product data accessors
│   └── generated/prisma       # generated Prisma client (gitignored)
├── next.config.ts
├── prisma7.config.ts
├── Dockerfile
├── docker-compose.yml
└── README.md
```

---

## License

UNLICENSED · private project.
