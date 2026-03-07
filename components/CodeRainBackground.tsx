export default function CodeRainBackground() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 z-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(34,211,238,0.14),transparent_44%),radial-gradient(circle_at_85%_10%,rgba(139,92,246,0.14),transparent_40%),linear-gradient(180deg,rgba(15,23,42,0.5),rgba(2,6,23,0.88))]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:48px_48px] opacity-40" />
      <div className="absolute inset-0 animate-pulse bg-cyan-300/5 [animation-duration:8s]" />
    </div>
  );
}
