export default function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      style={{ maxWidth: "1100px", margin: "0 auto" }}
      className={`px-5 md:px-10 ${className}`}
    >
      {children}
    </div>
  );
}
