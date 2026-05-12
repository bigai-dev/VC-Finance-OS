import { units } from "@/lib/mock-data";

export function UnitEconomics() {
  return (
    <div className="card">
      <div className="unit-grid">
        {units.map((u) => (
          <div key={u.name} className="unit-card" data-status={u.status}>
            <div className="unit-card-head">
              <div className="unit-name">{u.name}</div>
              <div className="unit-status">
                <span className="status-dot" />
                {u.statusLabel}
              </div>
            </div>
            <div className="unit-date">{u.date}</div>
            {u.rows.map((r) => (
              <div key={r.label} className="unit-row">
                <span>{r.label}</span>
                <span>{r.value}</span>
              </div>
            ))}
            <div className="unit-margin">
              <span className="unit-margin-label">{u.marginLabel}</span>
              <span className="unit-margin-value">{u.margin}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
