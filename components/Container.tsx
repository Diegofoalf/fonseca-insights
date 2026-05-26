export default function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2.5rem" }}
      className={className}
    >
      {children}
    </div>
  );
}
