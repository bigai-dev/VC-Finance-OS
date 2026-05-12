// Mock data for VC Finance OS dashboard.
// Swap this file to a Supabase / API fetcher when wiring real data.

export type Kpi = {
  label: string;
  value: string;
  currency?: string;
  valueSuffix?: string;
  delta: string;
  deltaDirection: "up" | "down" | "neutral";
  bar: number;
  barColor?: "gold" | "orange" | "red";
  gold?: boolean;
  showDot?: boolean;
};

export const kpis: Kpi[] = [
  { label: "MTD Revenue", value: "398,450", currency: "RM", delta: "▲ 13.2% vs Apr", deltaDirection: "up", bar: 99.6, gold: true, showDot: true },
  { label: "New Students MTD", value: "67", delta: "▲ 15.5% vs Apr (58)", deltaDirection: "up", bar: 78 },
  { label: "Active Students", value: "142", delta: "▲ 24 enrolled this month", deltaDirection: "up", bar: 84 },
  { label: "Show-up Rate", value: "78", valueSuffix: "%", delta: "▲ 25 pts post-optimization", deltaDirection: "up", bar: 78 },
  { label: "Outstanding Balance", value: "23,400", currency: "RM", delta: "4 students · 5.8% of AR", deltaDirection: "neutral", bar: 18, barColor: "orange" },
  { label: "Refund + Bad Debt", value: "5,200", currency: "RM", delta: "1 refund · 1 written off · 1.3%", deltaDirection: "neutral", bar: 8, barColor: "red" },
];

// === Revenue trend ===
export type RevenueMonth = {
  label: string;
  total: string;
  isCurrent?: boolean;
  forecast?: string;
  bars: {
    digital: number;
    coaching: number;
    corporate: number;
    workshop: number;
  };
};

// Heights (in SVG px) mirror the original SVG layout (chart canvas 320px tall).
export const revenueMonths: RevenueMonth[] = [
  {
    label: "MAR 26",
    total: "RM285K",
    bars: { digital: 11, coaching: 18, corporate: 36, workshop: 106 },
  },
  {
    label: "APR 26",
    total: "RM352K",
    bars: { digital: 17, coaching: 22, corporate: 43, workshop: 129 },
  },
  {
    label: "MAY 26 · MTD",
    total: "RM428K",
    isCurrent: true,
    forecast: "RM428K",
    bars: { digital: 19, coaching: 25, corporate: 48, workshop: 148 },
  },
];

// === Funnel ===
export type FunnelStage = {
  label: string;
  count: string;
  percent: string;
  bar: number;
  highlight?: boolean;
  delta?: string;
};

export const funnel: FunnelStage[] = [
  { label: "Ad Impressions", count: "184,520", percent: "100%", bar: 100, delta: "▼ CTR 3.8%" },
  { label: "Landing Page", count: "7,012", percent: "3.8%", bar: 72, delta: "▼ Opt-in 41%" },
  { label: "Registered", count: "2,875", percent: "1.56%", bar: 58, delta: "▼ Show-up 78%" },
  { label: "Attended", count: "2,242", percent: "1.21%", bar: 44, delta: "▼ Conversion 2.4%" },
  { label: "Enrolled", count: "54", percent: "2.4%", bar: 14, highlight: true },
];

export const funnelStats = {
  roas: "11.4",
  adSpend: "RM 18,920",
};

// === Workshops ===
export type Workshop = {
  tag: string;
  tagType: "sold" | "corporate" | "upcoming" | "vip";
  name: string;
  date: string;
  seatsFilled: number;
  seatsTotal: number;
  progressPct: number;
  isFull: boolean;
  revenue: string;
  revenueNote: string;
  customSeatLabel?: string;
};

export const workshops: Workshop[] = [
  {
    tag: "SOLD OUT",
    tagType: "sold",
    name: "Vibe Coding Intensive · W3 May",
    date: "Sat–Sun · 17–18 May 2026 · KL HQ · waitlist 3",
    seatsFilled: 12,
    seatsTotal: 12,
    progressPct: 100,
    isFull: true,
    revenue: "RM 48,964",
    revenueNote: "collected",
  },
  {
    tag: "CORPORATE",
    tagType: "corporate",
    name: "Koong Woh Tong · Private Vibe Coding",
    date: "Thu · 15 May 2026 · client site · 1-day",
    seatsFilled: 25,
    seatsTotal: 25,
    progressPct: 100,
    isFull: true,
    revenue: "RM 35,000",
    revenueNote: "50% deposit · paid",
  },
  {
    tag: "CORPORATE",
    tagType: "corporate",
    name: "Confidential FSI Client · 2-day automation",
    date: "Tue–Wed · 20–21 May 2026 · KLCC · Claude Cowork",
    seatsFilled: 0,
    seatsTotal: 0,
    progressPct: 60,
    isFull: false,
    customSeatLabel: "RM 85K",
    revenue: "RM 51,000",
    revenueNote: "60% deposit · paid",
  },
  {
    tag: "FILLING",
    tagType: "upcoming",
    name: "Vibe Coding Intensive · W4 May",
    date: "Sat–Sun · 24–25 May 2026 · KL HQ",
    seatsFilled: 9,
    seatsTotal: 12,
    progressPct: 75,
    isFull: false,
    revenue: "RM 35,973",
    revenueNote: "collected",
  },
  {
    tag: "EARLY BIRD",
    tagType: "upcoming",
    name: "Vibe Coding Intensive · W5 May",
    date: "Sat · 31 May 2026 · KL HQ · 1-day intensive",
    seatsFilled: 6,
    seatsTotal: 12,
    progressPct: 50,
    isFull: false,
    revenue: "RM 17,982",
    revenueNote: "collected",
  },
  {
    tag: "EARLY BIRD",
    tagType: "upcoming",
    name: "Vibe Coding Intensive · W1 June",
    date: "Sat–Sun · 7–8 June 2026 · KL HQ",
    seatsFilled: 4,
    seatsTotal: 12,
    progressPct: 33,
    isFull: false,
    revenue: "RM 11,988",
    revenueNote: "collected",
  },
  {
    tag: "VIP TRACK",
    tagType: "vip",
    name: "1:1 Coaching · May intake",
    date: "Rolling · 8 sessions · custom schedule",
    seatsFilled: 3,
    seatsTotal: 4,
    progressPct: 75,
    isFull: false,
    revenue: "RM 29,991",
    revenueNote: "collected",
  },
];

// === Payments ===
export type Payment = {
  time: string;
  name: string;
  note: string;
  amount: string;
  status: "paid" | "pending" | "refund" | "partial";
};

export const payments: Payment[] = [
  { time: "11:42", name: "Tan Mei Ling 陈美玲", note: "W3 May · standard", amount: "RM 3,997", status: "paid" },
  { time: "10:18", name: "Ahmad Faizal Rahman", note: "VIP W4 May · 1:1 bundle", amount: "RM 7,997", status: "paid" },
  { time: "09:55", name: "Wong Kah Yan 黄家燕", note: "W5 May · early bird", amount: "RM 2,997", status: "paid" },
  { time: "09:14", name: "Priya Devi Subramaniam", note: "W4 May · standard", amount: "RM 3,997", status: "paid" },
  { time: "08:32", name: "Marcus Tan Boon Hwa", note: "W1 June · early bird", amount: "RM 2,997", status: "paid" },
  { time: "Yest", name: "Lim Wei Jian 林伟健", note: "W3 May · standard", amount: "RM 3,997", status: "paid" },
  { time: "Yest", name: "Siti Nurhaliza Abdullah", note: "VIP W3 May · 1:1 bundle", amount: "RM 7,997", status: "paid" },
  { time: "Yest", name: "Vincent Ng Chee Wei", note: "Corporate · FSI client", amount: "RM 34,000", status: "pending" },
  { time: "10 May", name: "Lee Chee Wei 李志伟", note: "W4 May · standard", amount: "RM 3,997", status: "paid" },
  { time: "10 May", name: "Nor Aisha Ibrahim", note: "1:1 Coaching · May intake", amount: "RM 9,997", status: "paid" },
  { time: "10 May", name: "Raj Kumar Selvam", note: "W4 May · installment 1/2", amount: "RM 1,998", status: "partial" },
  { time: "09 May", name: "Zulkifli Mahmud", note: "W3 May · standard", amount: "RM 3,997", status: "refund" },
  { time: "09 May", name: "Khalid Bin Hassan", note: "W2 May · settled", amount: "RM 3,997", status: "paid" },
  { time: "08 May", name: "Jessica Chua Hui Min", note: "VIP W4 May · 1:1 bundle", amount: "RM 7,997", status: "paid" },
];

// === P&L ===
export type PnlRow = {
  type: "header" | "line" | "subtotal" | "total";
  label: string;
  values?: string[];
  pctOfRev?: string;
  pctClass?: "neg" | "pos";
  valuesClass?: ("neg" | "pos" | "")[];
};

export const pnlColumns = ["Mar 2026", "Apr 2026", "May MTD", "May Forecast"];
export const pnlPctHeader = "% of Rev";

export const pnlRows: PnlRow[] = [
  { type: "header", label: "Revenue" },
  { type: "line", label: "Workshop tickets · standard + early bird", values: ["198,400", "241,800", "247,300", "268,900"], pctOfRev: "62.8%" },
  { type: "line", label: "VIP track · workshop + 1:1 bundle",       values: ["32,000", "40,000", "40,000", "48,000"],    pctOfRev: "11.2%" },
  { type: "line", label: "Corporate training engagements",          values: ["35,000", "50,000", "86,000", "86,000"],    pctOfRev: "20.1%" },
  { type: "line", label: "1:1 coaching upgrades",                   values: ["15,000", "15,000", "20,000", "20,000"],    pctOfRev: "4.7%" },
  { type: "line", label: "Digital products · templates, recordings",values: ["4,800", "5,200", "5,150", "5,500"],         pctOfRev: "1.3%" },
  { type: "subtotal", label: "Gross Revenue",                       values: ["285,200", "352,000", "398,450", "428,400"], pctOfRev: "100.0%" },

  { type: "header", label: "Direct Costs · COGS" },
  { type: "line", label: "Venue rental · KL HQ + corporate sites",  values: ["16,000", "20,000", "22,400", "24,000"],     pctOfRev: "5.6%" },
  { type: "line", label: "F&B · coffee, lunch, snack pack",          values: ["4,800", "5,800", "6,400", "6,800"],         pctOfRev: "1.6%" },
  { type: "line", label: "Assistant trainer fees · Jay + co-trainers", values: ["10,500", "13,000", "13,500", "15,000"],  pctOfRev: "3.5%" },
  { type: "line", label: "Workbook printing + welcome kit",          values: ["2,400", "3,200", "3,350", "3,600"],         pctOfRev: "0.8%" },
  { type: "line", label: "Photo / video crew · social proof content", values: ["4,500", "5,500", "6,000", "6,000"],        pctOfRev: "1.4%" },
  { type: "subtotal", label: "Total COGS",                          values: ["38,200", "47,500", "51,650", "55,400"],     pctOfRev: "12.9%" },

  { type: "header", label: "Marketing & Acquisition" },
  { type: "line", label: "Meta + Google ad spend",                   values: ["48,000", "58,000", "62,500", "68,000"],     pctOfRev: "15.9%" },
  { type: "line", label: "Affiliate & partner commissions · 10%",    values: ["18,400", "23,200", "26,800", "28,500"],     pctOfRev: "6.7%" },
  { type: "line", label: "Webinar platform · WebinarX in-house",     values: ["0", "0", "0", "0"],                          pctOfRev: "0.0%" },
  { type: "line", label: "Email + SMS · Resend, Mailgun, WhatsApp",  values: ["850", "950", "980", "1,000"],                pctOfRev: "0.2%" },
  { type: "subtotal", label: "Total Marketing",                      values: ["67,250", "82,150", "90,280", "97,500"],      pctOfRev: "22.8%" },

  { type: "header", label: "Operations & Software" },
  { type: "line", label: "AI stack · Claude Max, Cursor, OpenAI, Replit", values: ["2,800", "3,200", "3,400", "3,500"],   pctOfRev: "0.8%" },
  { type: "line", label: "Infra · Supabase, Vercel, Cloudflare R2, Mux",   values: ["1,200", "1,450", "1,520", "1,600"],   pctOfRev: "0.4%" },
  { type: "line", label: "Payment processing · Stripe 3.0% + RM2",          values: ["8,560", "10,560", "11,950", "12,852"], pctOfRev: "3.0%" },
  { type: "line", label: "Admin · transport, ops staff, contingency",       values: ["4,200", "4,800", "5,100", "5,500"],   pctOfRev: "1.3%" },
  { type: "subtotal", label: "Total OpEx",                                  values: ["16,760", "20,010", "21,970", "23,452"], pctOfRev: "5.5%" },

  { type: "header", label: "Adjustments" },
  { type: "line", label: "Refunds issued",       values: ["−2,997", "−3,997", "−3,997", "−4,000"], valuesClass: ["neg","neg","neg","neg"], pctOfRev: "0.9%" },
  { type: "line", label: "Bad debt written off", values: ["0", "−1,200", "−1,200", "−1,500"],     valuesClass: ["neg","neg","neg","neg"], pctOfRev: "0.4%" },

  { type: "total", label: "Net Profit", values: ["159,993", "197,143", "229,353", "246,548"], pctOfRev: "57.6%", pctClass: "pos" },
];

// === Unit Economics ===
export type Unit = {
  name: string;
  date: string;
  rows: Array<{ label: string; value: string }>;
  marginLabel: string;
  margin: string;
};

export const units: Unit[] = [
  {
    name: "W1 May · completed",
    date: "3–4 May · 12/12 seats",
    rows: [
      { label: "Revenue", value: "49,964" },
      { label: "Venue + F&B", value: "5,200" },
      { label: "Asst trainer", value: "2,500" },
      { label: "Ads (allocated)", value: "15,800" },
      { label: "Other", value: "2,400" },
    ],
    marginLabel: "Margin",
    margin: "48%",
  },
  {
    name: "W2 May · completed",
    date: "10–11 May · 12/12 seats",
    rows: [
      { label: "Revenue", value: "52,420" },
      { label: "Venue + F&B", value: "5,200" },
      { label: "Asst trainer", value: "2,500" },
      { label: "Ads (allocated)", value: "14,200" },
      { label: "Other", value: "2,400" },
    ],
    marginLabel: "Margin",
    margin: "53%",
  },
  {
    name: "W3 May · sold out",
    date: "17–18 May · 12/12 + WL 3",
    rows: [
      { label: "Revenue", value: "48,964" },
      { label: "Venue + F&B", value: "5,400" },
      { label: "Asst trainer", value: "2,500" },
      { label: "Ads (allocated)", value: "11,900" },
      { label: "Other", value: "2,400" },
    ],
    marginLabel: "Margin",
    margin: "54%",
  },
  {
    name: "W4 May · filling",
    date: "24–25 May · 9/12 seats",
    rows: [
      { label: "Revenue (proj)", value: "47,964" },
      { label: "Venue + F&B", value: "5,400" },
      { label: "Asst trainer", value: "2,500" },
      { label: "Ads (allocated)", value: "10,800" },
      { label: "Other", value: "2,400" },
    ],
    marginLabel: "Margin (proj)",
    margin: "56%",
  },
  {
    name: "FSI Corporate · 2-day",
    date: "20–21 May · 25 attendees",
    rows: [
      { label: "Revenue", value: "85,000" },
      { label: "Venue (client)", value: "0" },
      { label: "Asst trainer", value: "5,000" },
      { label: "Travel + ops", value: "3,800" },
      { label: "Materials", value: "1,800" },
    ],
    marginLabel: "Margin",
    margin: "87%",
  },
];

// === Random "live" payment bump amounts (used by KPI revenue ticker) ===
export const liveBumpAmounts = [2997, 3997, 7997, 2997, 9997];
