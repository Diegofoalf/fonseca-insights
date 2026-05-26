"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/blog", label: "Blog" },
  { href: "/proyectos", label: "Proyectos" },
];

export default function Nav({ dark = false }: { dark?: boolean }) {
  const pathname = usePathname();

  const base = dark
    ? "text-stone-300 hover:text-white"
    : "text-[#6B645C] hover:text-[#1A1814]";
  const active = dark ? "text-white" : "text-[#1A1814]";
  const logo = dark ? "text-white" : "text-[#1A1814]";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 h-16 flex items-center justify-between ${
        dark ? "bg-transparent" : "bg-[#F5F2EC]/90 backdrop-blur-sm border-b border-[#E2DDD5]"
      }`}
    >
      <Link
        href="/"
        className={`font-[family-name:var(--font-playfair)] text-lg font-semibold tracking-tight transition-opacity hover:opacity-70 ${logo}`}
      >
        Fonseca Insights
      </Link>

      <nav className="flex items-center gap-8">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors ${
                isActive ? active : base
              } ${isActive ? "font-semibold" : ""}`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
