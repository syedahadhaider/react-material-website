export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="section-label">
      <span>{children}</span>
      <span className="section-label__line" aria-hidden="true" />
    </div>
  );
}
