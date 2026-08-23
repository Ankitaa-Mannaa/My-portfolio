export default function NeonGridBackground() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 2,
        opacity: 0.42,
        backgroundImage:
          "repeating-linear-gradient(90deg, rgba(76, 29, 149, 0.7) 0px, rgba(245, 234, 117, 0.55) 1px, rgba(30, 58, 138, 0.68) 2px, transparent 2px, transparent 68px), repeating-linear-gradient(0deg, rgba(76, 29, 149, 0.62) 0px, rgba(245, 234, 117, 0.48) 1px, rgba(30, 58, 138, 0.56) 2px, transparent 2px, transparent 68px)",
        backgroundPosition: "0 0, 0 0",
      }}
    />
  );
}
