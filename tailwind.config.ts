import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        "bg-elev": "var(--bg-elev)",
        "bg-card": "var(--bg-card)",
        "bg-card-hi": "var(--bg-card-hi)",
        border: "var(--border)",
        "border-hi": "var(--border-hi)",
        gold: "var(--gold)",
        "gold-dim": "var(--gold-dim)",
        text: "var(--text)",
        "text-mid": "var(--text-mid)",
        "text-dim": "var(--text-dim)",
        green: "var(--green)",
        orange: "var(--orange)",
        red: "var(--red)",
        blue: "var(--blue)",
      },
      fontFamily: {
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
