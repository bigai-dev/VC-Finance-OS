import { payments } from "@/lib/mock-data";

export function PaymentStream() {
  return (
    <div className="card">
      <div className="card-head">
        <div className="card-title">
          Payment Stream <small>· last 24h</small>
        </div>
        <span className="chip active">● LIVE</span>
      </div>
      <div className="payment-list">
        {payments.map((p, i) => (
          <div key={`${p.time}-${p.name}-${i}`} className="payment">
            <span className="pay-time">{p.time}</span>
            <span className="pay-name">
              {p.name}
              <small>{p.note}</small>
            </span>
            <span className="pay-amount">{p.amount}</span>
            <span className={`pay-status ${p.status}`}>{p.status.toUpperCase()}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
