# VC Finance OS

An operator-style finance dashboard that puts a workshop business's revenue, profit, and cash flow into a single live cockpit.

VC Finance OS (Vibe Coding Finance OS) is the internal finance dashboard for **Funnel Duo**. It tracks month-to-date revenue, KPIs, the webinar-to-enrollment funnel, per-workshop unit economics, profit and loss, and a real-time payment stream — all in one screen built for operators who need to read the state of the business at a glance.

## Features

- **Live header bar** with a ticking clock, a "Live Sync" status pill, and branding for the operations cockpit.
- **Dark / light theme toggle** that remembers your choice and applies it before the page paints (no flash on load).
- **Month-to-date KPI grid** — MTD revenue, new and active students, show-up rate, outstanding balance, and refund/bad-debt, each with deltas and progress bars.
- **Revenue trend chart** rendered as a hand-built SVG, with 30D / 90D / YTD range toggles and a breakdown across workshop, corporate, coaching, and digital revenue.
- **Webinar funnel** view showing the path from sign-up to enrollment.
- **Workshops and cash-flow panel** plus a **real-time payment stream** of incoming payments.
- **Monthly profit & loss table** in RM on an accrual basis.
- **Per-workshop unit economics** breakdown for the current month.
- All figures are driven from a single mock-data file, designed as one clean swap point for connecting live data later.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **UI library:** React 19
- **Styling:** Tailwind CSS 3 with custom CSS design tokens for the dashboard aesthetic
- **Fonts:** JetBrains Mono and Inter via `next/font/google`
- **Charts:** Hand-authored inline SVG (no charting dependency)

## Getting Started

### Prerequisites

- Node.js 20 or later
- npm

### Installation

```bash
npm install
```

### Running Locally

```bash
npm run dev
```

Then open http://localhost:3000 in your browser.

To create and run a production build:

```bash
npm run build
npm run start
```

## Project Structure

- **`app/`** — App Router entry: `layout.tsx` (fonts, theme boot script, metadata), `page.tsx` (dashboard composition), and `globals.css` (all design tokens and section styles).
- **`components/`** — One component per dashboard section: `Header`, `KpiGrid`, `RevenueTrendChart`, `Funnel`, `Workshops`, `PaymentStream`, `PnlTable`, `UnitEconomics`, plus `ThemeToggle` and `SectionLabel`.
- **`lib/`** — `mock-data.ts`, holding every number the dashboard displays in one place.
- **`public/`** — Logo and favicon assets.
- **`vibe-coding-finance-os.html`** — The original static design, kept as a reference for the Next.js port.

## Notes

This project was built as a demo for the Vibe Coding workshop. It is currently a design-parity port with no backend wired in — every displayed value lives in `lib/mock-data.ts`, which is intentionally structured so each constant can later be swapped for a live data source without touching the UI.
