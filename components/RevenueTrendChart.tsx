"use client";

import { useState, useMemo } from "react";
import { revenueAllMonths, targetMonthlyRm, type RevenueMonth } from "@/lib/mock-data";

type Range = "3M" | "90D" | "YTD";

// SVG layout constants
const SVG_W = 900;
const SVG_H = 360;
const CHART_TOP = 40;       // y of 500K mark
const CHART_BOTTOM = 320;   // y of 0 baseline
const CHART_LEFT = 60;
const CHART_RIGHT = 880;
const MAX_RM = 500_000;     // top of scale

// rm -> y
function yFor(rm: number): number {
  const range = CHART_BOTTOM - CHART_TOP;
  return CHART_BOTTOM - (rm / MAX_RM) * range;
}

const GRID_TICKS = [100_000, 200_000, 300_000, 400_000, 500_000];

export function RevenueTrendChart() {
  const [range, setRange] = useState<Range>("90D");

  const months = useMemo<RevenueMonth[]>(() => {
    if (range === "YTD") return revenueAllMonths;
    return revenueAllMonths.slice(-3);
  }, [range]);

  // Lay out groups evenly across the chart area.
  const groupCount = months.length;
  const chartInnerW = CHART_RIGHT - CHART_LEFT;
  const spacing = chartInnerW / (groupCount + 0.5);
  const barW = Math.min(110, spacing * 0.65);
  const positions = months.map((_, i) => CHART_LEFT + spacing * (i + 0.75));

  const targetY = yFor(targetMonthlyRm);

  return (
    <div className="card">
      <div className="card-head">
        <div className="card-title">
          Monthly Revenue <small>· by stream</small>
        </div>
        <div className="card-actions">
          {(["3M", "90D", "YTD"] as Range[]).map((r) => (
            <button
              key={r}
              type="button"
              className={`chip${range === r ? " active" : ""}`}
              onClick={() => setRange(r)}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      <div className="chart-legend">
        <span className="legend-item">
          <span className="legend-swatch" style={{ background: "var(--gold)" }} />
          Workshop Tickets
        </span>
        <span className="legend-item">
          <span className="legend-swatch" style={{ background: "var(--navy-bright)" }} />
          Corporate Training
        </span>
        <span className="legend-item">
          <span className="legend-swatch" style={{ background: "var(--blue)" }} />
          1:1 Coaching
        </span>
        <span className="legend-item">
          <span className="legend-swatch" style={{ background: "#888" }} />
          Digital Products
        </span>
        <span className="legend-item" style={{ marginLeft: "auto", color: "var(--text-dim)" }}>
          <span
            className="legend-swatch"
            style={{ background: "transparent", border: "1px dashed var(--gold)" }}
          />
          Target RM 400K
        </span>
      </div>

      <div className="chart-wrap">
        <svg
          viewBox={`0 0 ${SVG_W} ${SVG_H}`}
          width="100%"
          preserveAspectRatio="none"
          style={{ display: "block" }}
        >
          {/* horizontal grid */}
          <g stroke="var(--border)" strokeWidth="1">
            {GRID_TICKS.map((rm) => (
              <line key={rm} x1={CHART_LEFT} y1={yFor(rm)} x2={CHART_RIGHT} y2={yFor(rm)} />
            ))}
          </g>

          {/* y axis labels */}
          <g
            fill="var(--text-dim)"
            fontFamily="var(--font-mono), JetBrains Mono, monospace"
            fontSize="10"
            textAnchor="end"
            fontWeight="600"
          >
            {GRID_TICKS.map((rm) => (
              <text key={rm} x={CHART_LEFT - 8} y={yFor(rm) + 4}>
                {Math.round(rm / 1000)}K
              </text>
            ))}
          </g>

          {/* target line at RM 400K */}
          <line
            x1={CHART_LEFT}
            y1={targetY}
            x2={CHART_RIGHT}
            y2={targetY}
            stroke="var(--gold)"
            strokeWidth="1.2"
            strokeDasharray="5,4"
            opacity="0.7"
          />
          <text
            x={CHART_RIGHT - 6}
            y={targetY - 6}
            fill="var(--gold)"
            fontFamily="var(--font-mono), JetBrains Mono, monospace"
            fontSize="10"
            textAnchor="end"
            opacity="0.85"
            fontWeight="700"
          >
            TARGET 400K
          </text>

          {months.map((m, i) => {
            const x = positions[i];
            const halfW = barW / 2;
            const { digital, coaching, corporate, workshop } = m.bars;
            const baseline = CHART_BOTTOM;

            const yDigitalTop  = baseline - digital / (MAX_RM / (CHART_BOTTOM - CHART_TOP));
            const yCoachingTop = yDigitalTop - coaching / (MAX_RM / (CHART_BOTTOM - CHART_TOP));
            const yCorpTop     = yCoachingTop - corporate / (MAX_RM / (CHART_BOTTOM - CHART_TOP));
            const yWorkshopTop = yCorpTop - workshop / (MAX_RM / (CHART_BOTTOM - CHART_TOP));

            const hDigital  = baseline - yDigitalTop;
            const hCoaching = yDigitalTop - yCoachingTop;
            const hCorp     = yCoachingTop - yCorpTop;
            const hWorkshop = yCorpTop - yWorkshopTop;

            const isMtd = m.isCurrent === true;
            const forecastY = isMtd && m.forecast ? yFor(m.forecast) : null;
            const totalLabelY = yWorkshopTop - 8;

            return (
              <g key={m.label}>
                {/* digital */}
                <rect x={x - halfW} y={yDigitalTop} width={barW} height={hDigital} fill="#888" />
                {/* coaching */}
                <rect x={x - halfW} y={yCoachingTop} width={barW} height={hCoaching} fill="var(--blue)" />
                {/* corporate */}
                <rect x={x - halfW} y={yCorpTop} width={barW} height={hCorp} fill="var(--navy-bright)" />
                {/* workshop */}
                <rect x={x - halfW} y={yWorkshopTop} width={barW} height={hWorkshop} fill="var(--gold)" />

                {/* forecast ghost */}
                {forecastY !== null && (
                  <rect
                    x={x - halfW}
                    y={forecastY}
                    width={barW}
                    height={yWorkshopTop - forecastY}
                    fill="var(--gold)"
                    opacity="0.22"
                    stroke="var(--gold)"
                    strokeDasharray="3,3"
                    strokeWidth="1"
                  />
                )}

                {/* total label */}
                <text
                  x={x}
                  y={isMtd && forecastY !== null ? forecastY - 8 : totalLabelY}
                  fill={isMtd ? "var(--gold)" : "var(--text)"}
                  fontFamily="var(--font-sans), Inter, system-ui, sans-serif"
                  fontSize="18"
                  fontWeight="700"
                  textAnchor="middle"
                  letterSpacing="-0.3"
                >
                  {m.total}
                </text>

                {/* forecast label inline */}
                {isMtd && m.forecast !== undefined && (
                  <text
                    x={x}
                    y={totalLabelY}
                    fill="var(--text-mid)"
                    fontFamily="var(--font-mono), JetBrains Mono, monospace"
                    fontSize="10"
                    textAnchor="middle"
                    letterSpacing="1"
                    fontWeight="600"
                  >
                    fcst {Math.round(m.forecast / 1000)}K
                  </text>
                )}

                {/* x axis label */}
                <text
                  x={x}
                  y={CHART_BOTTOM + 28}
                  fill={isMtd ? "var(--gold)" : "var(--text-mid)"}
                  fontFamily="var(--font-mono), JetBrains Mono, monospace"
                  fontSize="11"
                  textAnchor="middle"
                  letterSpacing="1.5"
                  fontWeight="700"
                >
                  {m.label}
                </text>
              </g>
            );
          })}

          {months.some((m) => m.isCurrent) && (
            <text
              x={CHART_RIGHT - 6}
              y={CHART_TOP - 8}
              fill="var(--gold)"
              fontFamily="var(--font-mono), JetBrains Mono, monospace"
              fontSize="10"
              textAnchor="end"
              opacity="0.75"
              fontWeight="700"
            >
              FORECAST →
            </text>
          )}
        </svg>
      </div>
    </div>
  );
}
