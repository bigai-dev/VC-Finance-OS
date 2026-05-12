# VC Finance OS

Vibe Coding Finance OS — the internal workshop finance dashboard for **Funnel Duo**.

Tracks workshop revenue, P&L, unit economics, cash flow, and webinar funnel performance in one operator-style cockpit. The original design lives in `vibe-coding-finance-os.html` (kept as reference); this repo ports it to a Next.js scaffold so it can be wired to live Supabase data later.

## Stack

- Next.js 15 (App Router)
- React 19 + TypeScript
- Tailwind CSS (utility layer, with raw CSS for the dashboard aesthetic)
- Fonts: JetBrains Mono + Instrument Serif via `next/font/google`

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Project structure

```
app/
  layout.tsx        Fonts + global styles
  page.tsx          Dashboard composition
  globals.css       All design tokens + section styles
components/         One component per dashboard section
lib/
  mock-data.ts      All hardcoded numbers (single swap point for Supabase)
vibe-coding-finance-os.html   Original static design reference
```

## Wiring real data later

Every number lives in `lib/mock-data.ts`. Replace each exported constant with a Supabase fetcher (server components can `await` directly) and the UI is unchanged.

Suggested first connections:
- `payments` → Stripe webhooks landing in `payments` table
- `workshops` → `workshops` + `enrollments` tables
- `kpis` → derived view (`v_mtd_revenue`, `v_show_up_rate`, etc.)
- `pnlRows` → monthly close view fed by Google Sheets sync

## Status

v0.1 — design parity port. Live clock + live KPI revenue ticker preserved as client interactivity. No backend yet.
