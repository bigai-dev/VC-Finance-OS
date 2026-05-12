"use client";

import { useMemo, useState } from "react";
import { workshops, type Workshop } from "@/lib/mock-data";

type Tab = "upcoming" | "completed";

function Row({ w }: { w: Workshop }) {
  const tagClass =
    `workshop-tag ${w.tagType === "vip" ? "" : w.tagType}`.trim();
  const isCompleted = w.completionStatus === "completed";
  return (
    <div className="workshop" data-completed={isCompleted ? "true" : "false"}>
      <div>
        <div className="workshop-meta">
          <span className={tagClass}>{w.tag}</span>
          <span className="workshop-name">{w.name}</span>
        </div>
        <div className="workshop-date">{w.date}</div>
        <div className="progress-row">
          <div className="progress">
            <div
              className={`progress-fill${w.isFull ? " full" : ""}`}
              style={{ width: `${w.progressPct}%` }}
            />
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
  const [tab, setTab] = useState<Tab>("upcoming");

  const upcomingCount = useMemo(
    () => workshops.filter((w) => w.completionStatus === "upcoming").length,
    []
  );
  const completedCount = useMemo(
    () => workshops.filter((w) => w.completionStatus === "completed").length,
    []
  );

  const visible = useMemo(
    () => workshops.filter((w) => w.completionStatus === tab),
    [tab]
  );

  const subTitle =
    tab === "upcoming"
      ? `· next ${upcomingCount} cohorts`
      : `· last ${completedCount} delivered`;

  return (
    <div className="card">
      <div className="card-head">
        <div className="card-title">
          Class Registrations <small>{subTitle}</small>
        </div>
        <div className="card-actions">
          <button
            type="button"
            className={`chip${tab === "upcoming" ? " active" : ""}`}
            onClick={() => setTab("upcoming")}
          >
            Upcoming
          </button>
          <button
            type="button"
            className={`chip${tab === "completed" ? " active" : ""}`}
            onClick={() => setTab("completed")}
          >
            Completed
          </button>
        </div>
      </div>
      <div className="workshop-list">
        {visible.length === 0 ? (
          <div className="workshop-empty">
            No workshops in this view yet
            <span className="empty-hint">check back later</span>
          </div>
        ) : (
          visible.map((w) => <Row key={`${w.name}-${w.date}`} w={w} />)
        )}
      </div>
    </div>
  );
}
