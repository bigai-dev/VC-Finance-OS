import { Header } from "@/components/Header";
import { SectionLabel } from "@/components/SectionLabel";
import { KpiGrid } from "@/components/KpiGrid";
import { RevenueTrendChart } from "@/components/RevenueTrendChart";
import { Funnel } from "@/components/Funnel";
import { Workshops } from "@/components/Workshops";
import { PaymentStream } from "@/components/PaymentStream";
import { PnlTable } from "@/components/PnlTable";
import { UnitEconomics } from "@/components/UnitEconomics";

export default function Home() {
  return (
    <div className="app">
      <Header />

      <SectionLabel
        label="Month-to-date · May 2026"
        meta="vs. April 2026 · 12 days elapsed · 19 remaining"
      />
      <KpiGrid />

      <SectionLabel label="Revenue Trend" meta="Workshop · corporate · 1:1 coaching · digital" />
      <div className="row row-7-3">
        <RevenueTrendChart />
        <Funnel />
      </div>

      <SectionLabel label="Workshops & Cash Flow" meta="Real-time · last refresh 11:47:02 MYT" />
      <div className="row row-6-4">
        <Workshops />
        <PaymentStream />
      </div>

      <SectionLabel label="Profit & Loss · Monthly" meta="All figures in RM · accrual basis" />
      <div className="row row-1">
        <PnlTable />
      </div>

      <SectionLabel label="Per-Workshop Unit Economics · May 2026" />
      <div className="row row-1">
        <UnitEconomics />
      </div>
    </div>
  );
}
