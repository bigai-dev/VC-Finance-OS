import { funnel, funnelStats } from "@/lib/mock-data";

export function Funnel() {
  return (
    <div className="card">
      <div className="card-head">
        <div className="card-title">
          Webinar Funnel <small>· W3 May cohort</small>
        </div>
        <span className="chip active">LIVE</span>
      </div>

      <div className="funnel">
        {funnel.map((stage, i) => {
          const barStyle: React.CSSProperties = { width: `${stage.bar}%` };
          if (stage.highlight) {
            barStyle.background = "linear-gradient(90deg, #00ff9d, rgba(0,255,157,0.4))";
            barStyle.color = "#000";
          }
          return (
            <div key={stage.label}>
              <div className="funnel-row">
                <div className="funnel-label">{stage.label}</div>
                <div className="funnel-bar-wrap">
                  <div className="funnel-bar" style={barStyle}>
                    {stage.count}
                  </div>
                </div>
                <div className="funnel-pct" style={stage.highlight ? { color: "var(--green)" } : undefined}>
                  {stage.percent}
                </div>
              </div>
              {stage.delta && i < funnel.length - 1 && (
                <div className="funnel-delta">{stage.delta}</div>
              )}
            </div>
          );
        })}

        <div
          style={{
            marginTop: 16,
            paddingTop: 14,
            borderTop: "1px solid var(--border)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "11.5px",
                color: "var(--text-mid)",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              Cohort ROAS
            </div>
            <div
              style={{
                fontFamily: "var(--font-serif), Georgia, serif",
                fontSize: 34,
                color: "var(--gold)",
                letterSpacing: "-0.5px",
              }}
            >
              {funnelStats.roas}
              <span style={{ fontSize: 17, color: "var(--text-mid)" }}>x</span>
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div
              style={{
                fontSize: "11.5px",
                color: "var(--text-mid)",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              Ad Spend
            </div>
            <div
              style={{
                fontFamily: "var(--font-serif), Georgia, serif",
                fontSize: 24,
                color: "var(--text)",
                letterSpacing: "-0.3px",
              }}
            >
              {funnelStats.adSpend}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
