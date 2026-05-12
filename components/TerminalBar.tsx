export function TerminalBar() {
  return (
    <div className="terminal-bar">
      <span className="prompt">$</span>
      <span>vibe-stats --month=may26 --live --target=400000</span>
      <span className="cursor">▍</span>
    </div>
  );
}
