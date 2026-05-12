import { workshops, type Workshop } from "@/lib/mock-data";

function Row({ w }: { w: Workshop }) {
  const tagClass = `workshop-tag ${w.tagType === "vip" ? "" : w.tagType}`.trim();
  return (
    <div className="workshop">
      <div>
        <div className="workshop-meta">
          <span className={tagClass}>{w.tag}</span>
          <span className="workshop-name">{w.name}</span>
        </div>
        <div className="workshop-date">{w.date}</div>
        <div className="progress-row">
          <div className="progress">
            <div className={`progress-fill${w.isFull ? " full" : ""}`} style={{ width: `${w.progressPct}%` }} />
          </div>
          <div className="seat-count">
            {w.customSeatLabel ?? `${w.seatsFilled} / ${w.seatsTotal}`}
          </div>
        </div>
      </div>
      <div className="workshop-revenue">
        {w.revenue}
        <small>{w.revenueNote}</small>
      </div>
    </div>
  );
}

export function Workshops() {
  return (
    <div className="card">
      <div className="card-head">
        <div className="card-title">
          Class Registrations <small>· next 8 cohorts</small>
        </div>
        <div className="card-actions">
          <span className="chip active">UPCOMING</span>
          <span className="chip">COMPLETED</span>
        </div>
      </div>
      <div className="workshop-list">
        {workshops.map((w) => (
          <Row key={w.name} w={w} />
        ))}
      </div>
    </div>
  );
}
