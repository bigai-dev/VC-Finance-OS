import { funnel, funnelStats } from "@/lib/mock-data";

export function Funnel() {
  return (
    <div className="card">
      <div className="card-head">
        <div className="card-title">
          Webinar Funnel <small>· W1 + W2 May combined</small>
        </div>
        <span className="live-tag">Live</span>
      </div>

      <div className="funnel">
        {funnel.map((stage, i) => {
          const barStyle: React.CSSProperties = { width: `${stage.bar}%` };
          if (stage.highlight) {
            barStyle.background = "linear-gradient(90deg, var(--green), rgba(0,255,157,0.4))";
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
                <div
                  className="funnel-pct"
                  style={stage.highlight ? { color: "var(--green)" } : undefined}
                >
                  {stage.percent}
                </div>
              </div>
              {stage.delta && i < funnel.length - 1 && (
                <div className="funnel-delta">{stage.delta}</div>
              )}
            </div>
          );
        })}

        <div className="funnel-summary">
          <div>
            <div className="funnel-summary-label">Cohort ROAS</div>
            <div className="funnel-summary-value">
              {funnelStats.roas}
              <small>x</small>
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div className="funnel-summary-label">Ad Spend</div>
            <div className="funnel-summary-value plain">{funnelStats.adSpend}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
