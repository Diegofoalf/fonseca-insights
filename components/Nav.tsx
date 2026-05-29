"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/blog", label: "Blog" },
];

export default function Nav({ dark = false }: { dark?: boolean }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

  const isTransparent = dark && !scrolled;

  return (
    <motion.header
      initial={
        dark
          ? { backgroundColor: "rgba(20,18,16,0)", borderBottomColor: "rgba(255,255,255,0)" }
          : { backgroundColor: "rgba(245,242,236,0.92)", borderBottomColor: "rgba(226,221,213,1)" }
      }
      animate={
        dark
          ? scrolled
            ? { backgroundColor: "rgba(20,18,16,0.95)", borderBottomColor: "rgba(255,255,255,0.07)" }
            : { backgroundColor: "rgba(20,18,16,0)", borderBottomColor: "rgba(255,255,255,0)" }
          : { backgroundColor: "rgba(245,242,236,0.92)", borderBottomColor: "rgba(226,221,213,1)" }
      }
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="px-5 md:px-10"
      style={{
        backdropFilter: "blur(14px)",
        borderBottomWidth: "1px",
        borderBottomStyle: "solid",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: "4rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Link
        href="/"
        style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "1.1rem",
          fontWeight: 600,
          letterSpacing: "-0.01em",
          textDecoration: "none",
          color: isTransparent ? "#ffffff" : "#1A1814",
          transition: "opacity 0.2s",
        }}
        onMouseOver={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.55")}
        onMouseOut={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
      >
        Fonseca Insights
      </Link>

      <nav style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              style={{
                position: "relative",
                fontSize: "0.875rem",
                fontWeight: isActive ? 600 : 400,
                textDecoration: "none",
                color: isActive
                  ? isTransparent ? "#ffffff" : "#1A1814"
                  : isTransparent ? "rgba(168,160,154,1)" : "#6B645C",
                transition: "color 0.25s",
                paddingBottom: "3px",
              }}
              onMouseOver={(e) => {
                if (!isActive)
                  (e.currentTarget as HTMLAnchorElement).style.color = isTransparent ? "#ffffff" : "#1A1814";
              }}
              onMouseOut={(e) => {
                if (!isActive)
                  (e.currentTarget as HTMLAnchorElement).style.color = isTransparent ? "rgba(168,160,154,1)" : "#6B645C";
              }}
            >
              {link.label}
              {isActive && (
                <motion.span
                  layoutId="nav-underline"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "1px",
                    backgroundColor: isTransparent ? "#ffffff" : "#8B4513",
                  }}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          );
        })}
      </nav>
    </motion.header>
  );
}
