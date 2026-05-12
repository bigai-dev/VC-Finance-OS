import { revenueMonths } from "@/lib/mock-data";

// SVG faithfully ports the original chart - 3 monthly stacked bar groups
// at x=180, 450, 720 within a 900x320 viewBox.
export function RevenueTrendChart() {
  const groups = [180, 450, 720];
  // Heights stack from y=280 (baseline) upward.
  // Stack order (bottom to top): digital, coaching, corporate, workshop.

  return (
    <div className="card">
      <div className="card-head">
        <div className="card-title">
          Monthly Revenue <small>· by stream</small>
        </div>
        <div className="card-actions">
          <span className="chip">3M</span>
          <span className="chip active">90D</span>
          <span className="chip">YTD</span>
        </div>
      </div>

      <div className="chart-legend">
        <span className="legend-item">
          <span className="legend-swatch" style={{ background: "var(--gold)" }} />
          Workshop Tickets
        </span>
        <span className="legend-item">
          <span className="legend-swatch" style={{ background: "#4A66A8" }} />
          Corporate Training
        </span>
        <span className="legend-item">
          <span className="legend-swatch" style={{ background: "var(--blue)" }} />
          1:1 Coaching
        </span>
        <span className="legend-item">
          <span className="legend-swatch" style={{ background: "#666" }} />
          Digital Products
        </span>
        <span className="legend-item" style={{ marginLeft: "auto", color: "var(--text-dim)" }}>
          <span
            className="legend-swatch"
            style={{ background: "transparent", border: "1px dashed var(--gold)" }}
          />
          Target RM400K
        </span>
      </div>

      <div className="chart-wrap">
        <svg viewBox="0 0 900 320" width="100%" preserveAspectRatio="none" style={{ display: "block" }}>
          {/* horizontal grid */}
          <g stroke="#1a1a1a" strokeWidth="1">
            <line x1="60" y1="40" x2="880" y2="40" />
            <line x1="60" y1="100" x2="880" y2="100" />
            <line x1="60" y1="160" x2="880" y2="160" />
            <line x1="60" y1="220" x2="880" y2="220" />
            <line x1="60" y1="280" x2="880" y2="280" />
          </g>
          {/* y axis labels */}
          <g fill="#555" fontFamily="JetBrains Mono" fontSize="10" textAnchor="end">
            <text x="50" y="44">500K</text>
            <text x="50" y="104">400K</text>
            <text x="50" y="164">300K</text>
            <text x="50" y="224">200K</text>
            <text x="50" y="284">100K</text>
          </g>
          {/* target line at 400K (y=100) */}
          <line x1="60" y1="100" x2="880" y2="100" stroke="#EAB308" strokeWidth="1" strokeDasharray="4,4" opacity="0.5" />
          <text x="870" y="92" fill="#EAB308" fontFamily="JetBrains Mono" fontSize="9" textAnchor="end" opacity="0.8">
            TARGET 400K
          </text>

          {revenueMonths.map((m, idx) => {
            const x = groups[idx];
            const { digital, coaching, corporate, workshop } = m.bars;
            // Heights from data; baseline y=280.
            const yDigital = 280 - digital;
            const yCoaching = yDigital - coaching;
            const yCorporate = yCoaching - corporate;
            const yWorkshop = yCorporate - workshop;
            const totalY = yWorkshop - 11;
            const isMtd = m.isCurrent === true;

            return (
              <g key={m.label} transform={`translate(${x}, 0)`}>
                <rect x="-50" y={yDigital} width="100" height={digital} fill="#666" />
                <rect x="-50" y={yCoaching} width="100" height={coaching} fill="#4dd0ff" />
                <rect x="-50" y={yCorporate} width="100" height={corporate} fill="#4A66A8" />
                <rect x="-50" y={yWorkshop} width="100" height={workshop} fill="#EAB308" />

                {isMtd && (
                  <rect
                    x="-50"
                    y={yWorkshop - 20}
                    width="100"
                    height="20"
                    fill="#EAB308"
                    opacity="0.25"
                    stroke="#EAB308"
                    strokeDasharray="3,3"
                    strokeWidth="1"
                  />
                )}

                <text
                  x="0"
                  y={isMtd ? totalY - 3 : totalY}
                  fill={isMtd ? "#EAB308" : "#fff"}
                  fontFamily="Instrument Serif"
                  fontSize={isMtd ? 20 : 18}
                  textAnchor="middle"
                  fontStyle={isMtd ? "italic" : "normal"}
                >
                  {m.total}
                </text>
                <text
                  x="0"
                  y="305"
                  fill={isMtd ? "#EAB308" : "#9a9a9a"}
                  fontFamily="JetBrains Mono"
                  fontSize="10"
                  textAnchor="middle"
                  letterSpacing="2"
                >
                  {m.label}
                </text>
              </g>
            );
          })}

          <g opacity="0.7">
            <text x="820" y="32" fill="#EAB308" fontFamily="JetBrains Mono" fontSize="9" textAnchor="end">
              FORECAST →
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
}
