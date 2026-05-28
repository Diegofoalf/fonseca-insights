import type { Post } from "@/lib/content";

interface Theme {
  bg: string;
  accent: string;
  dim: string;
  label: string;
  coords: string;
}

const themes: Record<string, Theme> = {
  "Medio Oriente": {
    bg: "#0d0804",
    accent: "#C4845A",
    dim: "#3d2210",
    label: "Medio Oriente · Análisis geopolítico",
    coords: "24°42′N  46°41′E · Riad, Arabia Saudita",
  },
  "Geopolítica": {
    bg: "#04080d",
    accent: "#5A8AC4",
    dim: "#102240",
    label: "Geopolítica · Análisis internacional",
    coords: "0°00′N  0°00′E · Global",
  },
  "Finanzas": {
    bg: "#040d06",
    accent: "#5AC47A",
    dim: "#103020",
    label: "Finanzas · Análisis de mercados",
    coords: "40°42′N  74°00′O · Nueva York",
  },
};

const fallbackTheme: Theme = {
  bg: "#0d0804",
  accent: "#C4845A",
  dim: "#3d2210",
  label: "Análisis",
  coords: "",
};

export default function PostCover({ post, height = 460, showCaption = true }: { post: Post; height?: number; showCaption?: boolean }) {
  if (post.coverImage) {
    return (
      <figure style={{ margin: 0 }}>
        <div
          style={{
            backgroundColor: "#0e0c0a",
            overflow: "hidden",
            maxHeight: "520px",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.coverImage}
            alt={post.title}
            style={{
              width: "100%",
              height: "520px",
              objectFit: "cover",
              objectPosition: "center 40%",
              display: "block",
              filter: "grayscale(8%) contrast(1.06) brightness(0.88)",
            }}
          />
        </div>
        {showCaption && (
          <figcaption
            style={{
              fontFamily: "var(--font-dm-mono)",
              padding: "0.6rem 2.75rem",
              backgroundColor: "#0e0c0a",
              display: "flex",
              flexDirection: "column",
              gap: "0.35rem",
            }}
          >
            {post.coverCaption && (
              <p
                style={{
                  fontSize: "0.65rem",
                  color: "#6B645C",
                  letterSpacing: "0.04em",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {post.coverCaption}
              </p>
            )}
            <p
              style={{
                fontSize: "0.58rem",
                color: "#4a4440",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              Imagen generada con Inteligencia Artificial · ChatGPT
            </p>
          </figcaption>
        )}
      </figure>
    );
  }

  const theme = themes[post.category] ?? fallbackTheme;

  /* SVG grid parameters */
  const W = 1200;
  const H = 460;
  const cols = 8;
  const rows = 6;
  const colStep = W / cols;
  const rowStep = H / rows;

  const hLines = Array.from({ length: rows - 1 }, (_, i) => (i + 1) * rowStep);
  const vLines = Array.from({ length: cols - 1 }, (_, i) => (i + 1) * colStep);

  return (
    <div
      className="hero-grain"
      style={{
        height: `${height}px`,
        backgroundColor: theme.bg,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* SVG coordinate grid + arc */}
      <svg
        viewBox={`0 0 ${W} ${H}`}
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
        }}
      >
        {/* Grid lines */}
        <g opacity="0.09">
          {hLines.map((y) => (
            <line
              key={`h${y}`}
              x1={0}
              y1={y}
              x2={W}
              y2={y}
              stroke={theme.accent}
              strokeWidth="0.6"
            />
          ))}
          {vLines.map((x) => (
            <line
              key={`v${x}`}
              x1={x}
              y1={0}
              x2={x}
              y2={H}
              stroke={theme.accent}
              strokeWidth="0.6"
            />
          ))}
        </g>

        {/* Concentric arcs — compass / globe element */}
        <g opacity="0.12" fill="none" stroke={theme.accent}>
          <circle cx={W * 0.72} cy={H * 1.1} r={320} strokeWidth="0.8" />
          <circle cx={W * 0.72} cy={H * 1.1} r={220} strokeWidth="0.5" />
          <circle cx={W * 0.72} cy={H * 1.1} r={500} strokeWidth="0.4" />
        </g>

        {/* Crosshair at arc center intersection */}
        <g opacity="0.18" stroke={theme.accent} strokeWidth="0.6">
          <line x1={W * 0.72 - 14} y1={H * 1.1} x2={W * 0.72 + 14} y2={H * 1.1} />
          <line x1={W * 0.72} y1={H * 1.1 - 14} x2={W * 0.72} y2={H * 1.1 + 14} />
        </g>

        {/* Small tick marks along bottom edge */}
        <g opacity="0.15" stroke={theme.accent} strokeWidth="0.6">
          {Array.from({ length: 25 }, (_, i) => (
            <line
              key={`tick${i}`}
              x1={i * 50}
              y1={H - 1}
              x2={i * 50}
              y2={H - (i % 5 === 0 ? 10 : 5)}
            />
          ))}
        </g>

        {/* Diagonal accent line — upper right */}
        <line
          x1={W * 0.62}
          y1={0}
          x2={W}
          y2={H * 0.55}
          stroke={theme.accent}
          strokeWidth="0.4"
          opacity="0.08"
        />
      </svg>

      {/* Radial glow — bottom right */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          right: 0,
          bottom: 0,
          width: "55%",
          height: "75%",
          background: `radial-gradient(ellipse at bottom right, ${theme.accent}20 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      {/* Category + coordinates label — bottom left */}
      <div
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "2.75rem",
          zIndex: 2,
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-dm-mono)",
            fontSize: "0.6rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: theme.accent,
            marginBottom: "0.4rem",
          }}
        >
          {theme.label}
        </p>
        {theme.coords && (
          <p
            style={{
              fontFamily: "var(--font-dm-mono)",
              fontSize: "0.55rem",
              letterSpacing: "0.12em",
              color: theme.dim,
            }}
          >
            {theme.coords}
          </p>
        )}
      </div>

      {/* Top-right index number */}
      <div
        style={{
          position: "absolute",
          top: "2rem",
          right: "2.75rem",
          zIndex: 2,
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-dm-mono)",
            fontSize: "0.55rem",
            letterSpacing: "0.18em",
            color: theme.dim,
            textTransform: "uppercase",
          }}
        >
          Fonseca Insights · {post.date}
        </p>
      </div>
    </div>
  );
}
