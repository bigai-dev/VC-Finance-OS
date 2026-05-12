"use client";

import { useEffect, useState } from "react";
import { kpis, liveBumpAmounts, type Kpi } from "@/lib/mock-data";

function formatRm(n: number) {
  return n.toLocaleString("en-MY");
}

function KpiCell({ kpi, liveValue }: { kpi: Kpi; liveValue?: string }) {
  const barStyle: React.CSSProperties = { width: `${kpi.bar}%` };
  if (kpi.barColor === "orange") barStyle.background = "var(--orange)";
  if (kpi.barColor === "red") barStyle.background = "var(--red)";

  const displayValue = liveValue ?? kpi.value;

  return (
    <div className="kpi">
      <div className="kpi-label">
        {kpi.label}
        {kpi.showDot && <span className="kpi-dot" />}
      </div>
      <div className={`kpi-value${kpi.gold ? " gold" : ""}`}>
        {kpi.currency && <em className="currency">{kpi.currency}</em>}
        {displayValue}
        {kpi.valueSuffix && (
          <span style={{ fontSize: 18, color: "var(--text-mid)" }}>{kpi.valueSuffix}</span>
        )}
      </div>
      <div className="kpi-delta">
        {kpi.deltaDirection === "up" && (
          <span className="up">{kpi.delta.split(" ").slice(0, 2).join(" ")}</span>
        )}
        {kpi.deltaDirection === "down" && (
          <span className="down">{kpi.delta.split(" ").slice(0, 2).join(" ")}</span>
        )}
        {kpi.deltaDirection === "neutral" ? (
          <span>{kpi.delta}</span>
        ) : (
          <span>{kpi.delta.split(" ").slice(2).join(" ")}</span>
        )}
      </div>
      <div className="kpi-bar">
        <div className="kpi-bar-fill" style={barStyle} />
      </div>
    </div>
  );
}

export function KpiGrid() {
  const [revenue, setRevenue] = useState<number>(398450);

  useEffect(() => {
    const id = setInterval(() => {
      if (Math.random() > 0.7) {
        const bump = liveBumpAmounts[Math.floor(Math.random() * liveBumpAmounts.length)];
        setRevenue((r) => r + bump);
      }
    }, 7000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="kpi-grid">
      {kpis.map((k, i) => (
        <KpiCell key={k.label} kpi={k} liveValue={i === 0 ? formatRm(revenue) : undefined} />
      ))}
    </div>
  );
}
