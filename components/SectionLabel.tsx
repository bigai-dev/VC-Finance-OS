export function SectionLabel({ label, meta }: { label: string; meta?: string }) {
  return (
    <div className="section-label">
      <span className="section-label-text">{label}</span>
      {meta && <span className="section-meta">{meta}</span>}
    </div>
  );
}
