"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [clock, setClock] = useState("Tue, 12 May 2026 · 11:47 MYT");

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const pad = (n: number) => String(n).padStart(2, "0");
      setClock(`Tue, 12 May 2026 · ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())} MYT`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <header className="app-header">
      <div className="brand">
        <div className="brand-logo">
          <Image
            src="/AI-Agency-Logo-notext.png"
            alt="Funnel Duo"
            width={48}
            height={48}
            priority
          />
        </div>
        <div className="brand-text">
          <span className="brand-name">FUNNEL DUO · OPERATIONS</span>
          <span className="brand-title">
            Vibe Coding <em>Finance OS</em>
          </span>
        </div>
      </div>
      <div className="header-meta">
        <span className="live-pill">
          <span className="pulse" />
          LIVE SYNC
        </span>
        <span className="clock">{clock}</span>
        <ThemeToggle />
        <div className="user-chip">
          <div className="user-avatar">N</div>
          <span>Nick Lo</span>
        </div>
      </div>
    </header>
  );
}
