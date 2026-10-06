// The one arrow used on every call to action, drawn to match the 1.6px icon stroke.
export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`arrow shrink-0 ${className}`}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      aria-hidden="true"
    >
      <path d="M2 8h11M9 3.5 13.5 8 9 12.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
