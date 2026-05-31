export default function Container({
  children,
  className = "",
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{ maxWidth: "1100px", margin: "0 auto", ...style }}
      className={`px-5 md:px-10 ${className}`}
    >
      {children}
    </div>
  );
}
