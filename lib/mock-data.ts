// Mock data for VC Finance OS dashboard.
// Today is May 12, 2026 (MTD = 12 days elapsed).
// Pricing model (RM, SST 8%):
//   1 pax (solo):  3,880 base + 8% = 4,190.40
//   2 pax (pair):  5,880 base + 8% = 6,350.40
//   3rd pax+:      2,000 each base + 8% = 2,160 each (add-on)
// 20-seat cap per workshop.

// === KPIs ===
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

// May MTD (12 of 31 days, only W1 May has run). Cash collected this month.
export const kpis: Kpi[] = [
  { label: "MTD Revenue",        value: "152,400", currency: "RM", delta: "▲ 8.1% vs Apr MTD pace", deltaDirection: "up",      bar: 38, gold: true, showDot: true },
  { label: "New Students MTD",   value: "31",                       delta: "20 enrolled in W1 May + 11 advance",                deltaDirection: "up",      bar: 46 },
  { label: "Active Students",    value: "142",                      delta: "▲ 24 enrolled YTD",                                 deltaDirection: "up",      bar: 84 },
  { label: "Show-up Rate",       value: "58.7", valueSuffix: "%",   delta: "W1 + W2 webinar cohort",                            deltaDirection: "neutral", bar: 59 },
  { label: "Outstanding Balance",value: "18,800", currency: "RM",   delta: "3 students · 4.6% of AR",                           deltaDirection: "neutral", bar: 14, barColor: "orange" },
  { label: "Refund + Bad Debt",  value: "4,190",  currency: "RM",   delta: "1 W1 May no-show · 1.0%",                           deltaDirection: "neutral", bar: 6,  barColor: "red" },
];

// === Revenue trend ===
export type RevenueMonth = {
  label: string;
  total: string;
  isCurrent?: boolean;
  forecast?: number;       // RM total if this is current month forecast
  totalRm: number;         // total revenue in RM (used for bar height calc)
  bars: {
    digital: number;
    coaching: number;
    corporate: number;
    workshop: number;
  };
};

// Full year through May 2026. Used by chart toggle: 3M/90D show last 3, YTD shows all.
export const revenueAllMonths: RevenueMonth[] = [
  { label: "JAN 26", total: "RM198K", totalRm: 198400, bars: { digital: 5400,  coaching: 28000, corporate: 35000, workshop: 130000 } },
  { label: "FEB 26", total: "RM246K", totalRm: 245800, bars: { digital: 5800,  coaching: 25000, corporate: 53000, workshop: 162000 } },
  { label: "MAR 26", total: "RM285K", totalRm: 285200, bars: { digital: 4800,  coaching: 15000, corporate: 35000, workshop: 230400 } },
  { label: "APR 26", total: "RM352K", totalRm: 352000, bars: { digital: 5200,  coaching: 15000, corporate: 50000, workshop: 281800 } },
  {
    label: "MAY 26 · MTD",
    total: "RM152K",
    isCurrent: true,
    forecast: 422800,
    totalRm: 152400,
    bars: { digital: 2000, coaching: 8000, corporate: 0, workshop: 142400 },
    // workshop = 71,626 (W1 May earned) + 70,774 (deposits for W2/W3/W4/W1June recognized as cash) ≈ 142,400
  },
];

export const targetMonthlyRm = 400000;

// === Webinar Funnel (W1 + W2 May combined) ===
export type FunnelStage = {
  label: string;
  count: string;
  percent: string;
  bar: number;
  highlight?: boolean;
  delta?: string;
};

// User-provided: LP views W1 7,273 + W2 5,166 = 12,439. Registered 648+736 = 1,384. Show-up 58.7%.
// Attended = round(1,384 × 0.587) = 813. Enrolled = 20 (W1 sold out) + 15 (W2 currently) = 35.
export const funnel: FunnelStage[] = [
  { label: "Ad Impressions", count: "412,500", percent: "100%",  bar: 100, delta: "▼ CTR 3.0%" },
  { label: "Landing Page",   count: "12,439",  percent: "3.01%", bar: 68,  delta: "▼ Opt-in 11.1%" },
  { label: "Registered",     count: "1,384",   percent: "0.34%", bar: 48,  delta: "▼ Show-up 58.7%" },
  { label: "Attended",       count: "813",     percent: "0.20%", bar: 32,  delta: "▼ Conversion 4.3%" },
  { label: "Enrolled",       count: "35",      percent: "4.3%",  bar: 14,  highlight: true },
];

export const funnelStats = {
  // Revenue W1 (sold out 20/20): 71,626 + W2 (15/20 collected): 54,734 = 126,360
  // Combined ad spend across W1 & W2 campaigns: 18,400
  roas: "6.9",
  adSpend: "RM 18,400",
};

// === Workshops (Class Registrations · next 8 cohorts) ===
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
    tag: "CORPORATE",
    tagType: "corporate",
    name: "KWT · Vibe Coding Corporate Training",
    date: "Fri · 15 May 2026 · client site · 1-day",
    seatsFilled: 25,
    seatsTotal: 25,
    progressPct: 100,
    isFull: true,
    revenue: "RM 35,000",
    revenueNote: "50% deposit · paid",
  },
  {
    tag: "SELLING OUT FAST",
    tagType: "sold",
    name: "Vibe Coding Intensive · W2 May",
    date: "Sat–Sun · 16–17 May 2026 · KL HQ",
    seatsFilled: 15,
    seatsTotal: 20,
    progressPct: 75,
    isFull: false,
    revenue: "RM 54,734",
    revenueNote: "collected",
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
    tag: "AVAILABLE",
    tagType: "upcoming",
    name: "Vibe Coding Intensive · W3 May",
    date: "Sat–Sun · 23–24 May 2026 · KL HQ",
    seatsFilled: 9,
    seatsTotal: 20,
    progressPct: 45,
    isFull: false,
    revenue: "RM 33,650",
    revenueNote: "collected",
  },
  {
    tag: "SELLING OUT FAST",
    tagType: "sold",
    name: "Vibe Coding Intensive · W4 May",
    date: "Sat–Sun · 27–28 May 2026 · KL HQ",
    seatsFilled: 16,
    seatsTotal: 20,
    progressPct: 80,
    isFull: false,
    revenue: "RM 56,894",
    revenueNote: "collected",
  },
  {
    tag: "EARLY BIRD",
    tagType: "upcoming",
    name: "Vibe Coding Intensive · W1 June",
    date: "Sat–Sun · 7–8 June 2026 · KL HQ",
    seatsFilled: 4,
    seatsTotal: 20,
    progressPct: 20,
    isFull: false,
    revenue: "RM 14,730",
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
    revenue: "RM 30,000",
    revenueNote: "collected",
  },
];

// === Payments (May 11–12, plus past days) ===
export type Payment = {
  time: string;
  name: string;
  note: string;
  amount: string;
  status: "paid" | "pending" | "refund" | "partial";
};

export const payments: Payment[] = [
  { time: "11:42", name: "Tan Mei Ling 陈美玲",        note: "W3 May · solo",                    amount: "RM 4,190", status: "paid" },
  { time: "10:18", name: "Ahmad Faizal Rahman",         note: "W2 May · pair (2 pax)",            amount: "RM 6,350", status: "paid" },
  { time: "09:55", name: "Wong Kah Yan 黄家燕",         note: "W4 May · solo · early bird",       amount: "RM 4,190", status: "paid" },
  { time: "09:14", name: "Priya Devi Subramaniam",      note: "W2 May · pair (2 pax)",            amount: "RM 6,350", status: "paid" },
  { time: "08:32", name: "Marcus Tan Boon Hwa",         note: "W4 May · solo · early bird",       amount: "RM 4,190", status: "paid" },
  { time: "Yest",  name: "Lim Wei Jian 林伟健",         note: "W2 May · solo",                    amount: "RM 4,190", status: "paid" },
  { time: "Yest",  name: "Siti Nurhaliza Abdullah",     note: "W2 May · solo + 1:1 add-on",       amount: "RM 8,200", status: "paid" },
  { time: "Yest",  name: "Vincent Ng Chee Wei",         note: "Corporate · FSI 40% balance",      amount: "RM 34,000",status: "pending" },
  { time: "10 May",name: "Lee Chee Wei 李志伟",         note: "W3 May · solo",                    amount: "RM 4,190", status: "paid" },
  { time: "10 May",name: "Nor Aisha Ibrahim",           note: "1:1 Coaching · May intake",        amount: "RM 10,000",status: "paid" },
  { time: "10 May",name: "Raj Kumar Selvam",            note: "W3 May · pair · installment 1/2",  amount: "RM 3,175", status: "partial" },
  { time: "09 May",name: "Zulkifli Mahmud",             note: "W1 May · no-show · refund",        amount: "RM 4,190", status: "refund" },
  { time: "09 May",name: "Khalid Bin Hassan",           note: "W1 May · settled",                 amount: "RM 4,190", status: "paid" },
  { time: "08 May",name: "Jessica Chua Hui Min",        note: "W2 May · solo + 1:1 add-on",       amount: "RM 8,200", status: "paid" },
];

// === P&L (accrual basis) ===
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

// May MTD accrual: only W1 May delivered (71,626). Other "collected" amounts are deferred revenue (unearned).
// May Forecast: all 4 workshops + KWT + FSI delivered + coaching + digital = 422,800.
export const pnlRows: PnlRow[] = [
  { type: "header", label: "Revenue" },
  { type: "line", label: "Workshop tickets · standard + early bird", values: ["198,400", "241,800", "71,626", "265,700"], pctOfRev: "62.8%" },
  { type: "line", label: "VIP track · workshop + 1:1 bundle",        values: ["32,000",  "40,000",  "8,200",  "32,200"],  pctOfRev: "7.6%" },
  { type: "line", label: "Corporate training engagements",           values: ["35,000",  "50,000",  "0",      "120,000"], pctOfRev: "28.4%" },
  { type: "line", label: "1:1 coaching upgrades",                    values: ["15,000",  "15,000",  "8,000",  "27,500"],  pctOfRev: "6.5%" },
  { type: "line", label: "Digital products · templates, recordings", values: ["4,800",   "5,200",   "2,000",  "5,400"],   pctOfRev: "1.3%" },
  { type: "subtotal", label: "Gross Revenue",                        values: ["285,200", "352,000", "89,826", "422,800"], pctOfRev: "100.0%" },

  { type: "header", label: "Direct Costs · COGS" },
  { type: "line", label: "Venue rental · KL HQ + corporate sites",   values: ["16,000",  "20,000",  "5,400",  "23,200"], pctOfRev: "5.5%" },
  { type: "line", label: "F&B · coffee, lunch, snack pack",          values: ["4,800",   "5,800",   "1,800",  "7,200"],  pctOfRev: "1.7%" },
  { type: "line", label: "Assistant trainer fees · Jay + co-trainers", values: ["10,500", "13,000", "3,000",  "14,500"], pctOfRev: "3.4%" },
  { type: "line", label: "Workbook printing + welcome kit",          values: ["2,400",   "3,200",   "850",    "3,600"],  pctOfRev: "0.9%" },
  { type: "line", label: "Photo / video crew · social proof content",values: ["4,500",   "5,500",   "1,500",  "6,000"],  pctOfRev: "1.4%" },
  { type: "subtotal", label: "Total COGS",                           values: ["38,200",  "47,500",  "12,550", "54,500"], pctOfRev: "12.9%" },

  { type: "header", label: "Marketing & Acquisition" },
  { type: "line", label: "Meta + Google ad spend",                   values: ["48,000",  "58,000",  "18,400", "67,000"], pctOfRev: "15.8%" },
  { type: "line", label: "Affiliate & partner commissions · 10%",    values: ["18,400",  "23,200",  "8,983",  "28,200"], pctOfRev: "6.7%" },
  { type: "line", label: "Webinar platform · WebinarX in-house",     values: ["0",       "0",       "0",      "0"],      pctOfRev: "0.0%" },
  { type: "line", label: "Email + SMS · Resend, Mailgun, WhatsApp",  values: ["850",     "950",     "320",    "1,050"],  pctOfRev: "0.2%" },
  { type: "subtotal", label: "Total Marketing",                      values: ["67,250",  "82,150",  "27,703", "96,250"], pctOfRev: "22.8%" },

  { type: "header", label: "Operations & Software" },
  { type: "line", label: "AI stack · Claude Max, Cursor, OpenAI, Replit", values: ["2,800", "3,200", "1,200",  "3,500"], pctOfRev: "0.8%" },
  { type: "line", label: "Infra · Supabase, Vercel, Cloudflare R2, Mux",  values: ["1,200", "1,450", "580",    "1,600"], pctOfRev: "0.4%" },
  { type: "line", label: "Payment processing · Stripe 3.0% + RM2",        values: ["8,560", "10,560","2,720",  "12,706"],pctOfRev: "3.0%" },
  { type: "line", label: "Admin · transport, ops staff, contingency",     values: ["4,200", "4,800", "1,950",  "5,500"], pctOfRev: "1.3%" },
  { type: "subtotal", label: "Total OpEx",                                values: ["16,760","20,010","6,450",  "23,306"],pctOfRev: "5.5%" },

  { type: "header", label: "Adjustments" },
  { type: "line", label: "Refunds issued",       values: ["−2,997", "−3,997", "−4,190", "−4,200"], valuesClass: ["neg","neg","neg","neg"], pctOfRev: "1.0%" },
  { type: "line", label: "Bad debt written off", values: ["0",      "−1,200", "0",      "−1,500"], valuesClass: ["neg","neg","neg","neg"], pctOfRev: "0.4%" },

  { type: "total", label: "Net Profit", values: ["159,993", "197,143", "38,933", "243,044"], pctOfRev: "57.5%", pctClass: "pos" },
];

// === Per-workshop Unit Economics ===
// Status types: "full" (greyed), "urgent" (red glow), "available" (green)
export type UnitStatus = "full" | "urgent" | "available";

export type Unit = {
  name: string;
  date: string;
  seatsFilled: number;
  seatsTotal: number;
  status: UnitStatus;
  statusLabel: string;
  rows: Array<{ label: string; value: string }>;
  marginLabel: string;
  margin: string;
};

// Per-workshop economics. Costs roughly stable per workshop regardless of seats sold.
// Revenue shown at current seat count.
export const units: Unit[] = [
  {
    name: "W1 May · completed",
    date: "9–10 May · 20/20 seats",
    seatsFilled: 20,
    seatsTotal: 20,
    status: "full",
    statusLabel: "FULL",
    rows: [
      { label: "Revenue (actual)", value: "71,626" },
      { label: "Venue + F&B",      value: "5,400" },
      { label: "Asst trainer",     value: "3,000" },
      { label: "Ads (allocated)",  value: "14,000" },
      { label: "Other",            value: "2,800" },
    ],
    marginLabel: "Margin",
    margin: "65%",
  },
  {
    name: "W2 May · selling out",
    date: "16–17 May · 15/20 seats",
    seatsFilled: 15,
    seatsTotal: 20,
    status: "urgent",
    statusLabel: "SELLING OUT FAST",
    rows: [
      { label: "Revenue (current)", value: "54,734" },
      { label: "Venue + F&B",       value: "5,400" },
      { label: "Asst trainer",      value: "3,000" },
      { label: "Ads (allocated)",   value: "13,200" },
      { label: "Other",             value: "2,800" },
    ],
    marginLabel: "Margin (proj 20/20)",
    margin: "65%",
  },
  {
    name: "W3 May · available",
    date: "23–24 May · 9/20 seats",
    seatsFilled: 9,
    seatsTotal: 20,
    status: "available",
    statusLabel: "AVAILABLE",
    rows: [
      { label: "Revenue (current)", value: "33,650" },
      { label: "Venue + F&B",       value: "5,400" },
      { label: "Asst trainer",      value: "3,000" },
      { label: "Ads (allocated)",   value: "11,800" },
      { label: "Other",             value: "2,800" },
    ],
    marginLabel: "Margin (proj 20/20)",
    margin: "65%",
  },
  {
    name: "W4 May · selling out",
    date: "27–28 May · 16/20 seats",
    seatsFilled: 16,
    seatsTotal: 20,
    status: "urgent",
    statusLabel: "SELLING OUT FAST",
    rows: [
      { label: "Revenue (current)", value: "56,894" },
      { label: "Venue + F&B",       value: "5,400" },
      { label: "Asst trainer",      value: "3,000" },
      { label: "Ads (allocated)",   value: "12,400" },
      { label: "Other",             value: "2,800" },
    ],
    marginLabel: "Margin (proj 20/20)",
    margin: "66%",
  },
];

// === Live revenue ticker bump amounts (per real pricing tiers) ===
export const liveBumpAmounts = [4190, 6350, 4190, 8200, 2160];
