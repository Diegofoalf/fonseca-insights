import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import AnimateIn from "@/components/AnimateIn";
import ReadingProgress from "@/components/ReadingProgress";
import PostCover from "@/components/PostCover";
import { posts, getPost } from "@/lib/content";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Fonseca Insights`,
    description: post.excerpt,
  };
}

function renderInline(text: string): React.ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} style={{ fontWeight: 700, color: "#1A1814" }}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

function renderBody(body: string) {
  let pCount = 0;

  return body.split("\n\n").map((block, i) => {
    if (block.startsWith("## ")) {
      return (
        <h2
          key={i}
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(1.5rem, 2.5vw, 1.85rem)",
            fontWeight: 700,
            color: "#1A1814",
            marginTop: "4rem",
            marginBottom: "1.5rem",
            lineHeight: 1.15,
            paddingTop: "1.75rem",
            borderTop: "1px solid #E2DDD5",
          }}
        >
          {renderInline(block.slice(3))}
        </h2>
      );
    }

    if (block.startsWith("[IMAGE:")) {
      const match = block.match(/\[IMAGE:([^:]+):([^\]]+)\]/);
      if (match) {
        const [, src, caption] = match;
        const imgSrc = src.startsWith("/")
          ? src
          : `https://picsum.photos/seed/${src}/1200/560`;
        return (
          <figure key={i} style={{ margin: "3.5rem -2rem" }}>
            <div className="img-zoom" style={{ overflow: "hidden" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imgSrc}
                alt={caption}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  filter: "grayscale(12%) contrast(1.05)",
                }}
              />
            </div>
            <figcaption
              style={{
                fontFamily: "var(--font-dm-mono)",
                marginTop: "0.85rem",
                padding: "0 2rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.4rem",
              }}
            >
              <p
                style={{
                  fontSize: "0.68rem",
                  color: "#A09890",
                  letterSpacing: "0.04em",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {caption}
              </p>
              <p
                style={{
                  fontSize: "0.58rem",
                  color: "#6B645C",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  margin: 0,
                }}
              >
                Imagen generada con Inteligencia Artificial · ChatGPT
              </p>
            </figcaption>
          </figure>
        );
      }
    }

    if (block.startsWith("• ")) {
      const lines = block.split("\n").filter((l) => l.startsWith("• "));
      return (
        <ul key={i} style={{ margin: "1.5rem 0 2rem", padding: 0, listStyle: "none" }}>
          {lines.map((line, j) => (
            <li
              key={j}
              style={{
                fontSize: "1rem",
                color: "#6B645C",
                lineHeight: 1.8,
                marginBottom: "0.65rem",
                paddingLeft: "1.75rem",
                position: "relative",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  color: "#8B4513",
                  fontFamily: "var(--font-dm-mono)",
                }}
              >
                —
              </span>
              {renderInline(line.slice(2))}
            </li>
          ))}
        </ul>
      );
    }

    if (block.trim() === "") return null;

    const isFirst = pCount === 0;
    pCount++;

    return (
      <p
        key={i}
        className={isFirst ? "drop-cap" : ""}
        style={{
          color: "#3A3530",
          lineHeight: 1.9,
          fontSize: "1.15rem",
          marginBottom: "1.75rem",
        }}
      >
        {renderInline(block)}
      </p>
    );
  });
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return <div>Not found</div>;

  const isComing = !post.body;

  return (
    <>
      <ReadingProgress />
      <Nav dark />

      <main style={{ paddingTop: "4rem" }}>
        {/* ── HEADER ───────────────────────────────────────── */}
        <header
          className="hero-grain"
          style={{ backgroundColor: "#141210", padding: "5rem 0 5.5rem" }}
        >
          <Container>
            <AnimateIn>
              {/* Back link */}
              <Link
                href="/blog"
                className="group inline-flex items-center gap-1.5 hover:text-[#a8a09a] transition-colors duration-200"
                style={{
                  fontFamily: "var(--font-dm-mono)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#6B645C",
                  textDecoration: "none",
                  marginBottom: "3rem",
                  display: "inline-flex",
                }}
              >
                <span className="transition-transform duration-200 group-hover:-translate-x-1 inline-flex">
                  <ArrowLeft size={12} weight="bold" />
                </span>
                Ensayos
              </Link>

              {/* Meta row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.85rem",
                  marginBottom: "2rem",
                  flexWrap: "wrap",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-dm-mono)",
                    fontSize: "0.65rem",
                    color: "#8B4513",
                    textTransform: "uppercase",
                    letterSpacing: "0.2em",
                    border: "1px solid #3d2a1a",
                    padding: "0.2rem 0.65rem",
                  }}
                >
                  {post.category}
                </span>
                <span style={{ color: "#2A2520", fontSize: "0.6rem" }}>·</span>
                <span
                  style={{
                    fontFamily: "var(--font-dm-mono)",
                    fontSize: "0.65rem",
                    color: "#4a4440",
                  }}
                >
                  {post.date}
                </span>
                <span style={{ color: "#2A2520", fontSize: "0.6rem" }}>·</span>
                <span
                  style={{
                    fontFamily: "var(--font-dm-mono)",
                    fontSize: "0.65rem",
                    color: "#4a4440",
                  }}
                >
                  {post.readTime} de lectura
                </span>
              </div>

              {/* Title */}
              <h1
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "clamp(2.2rem, 5.5vw, 3.5rem)",
                  fontWeight: 700,
                  color: "#ffffff",
                  lineHeight: 1.08,
                  marginBottom: "1.75rem",
                  maxWidth: "780px",
                }}
              >
                {post.title}
              </h1>

              {/* Excerpt */}
              <p
                style={{
                  color: "#a8a09a",
                  fontSize: "1.15rem",
                  lineHeight: 1.72,
                  maxWidth: "620px",
                  marginBottom: "3rem",
                }}
              >
                {post.excerpt}
              </p>

              {/* Author bar */}
              <div
                style={{
                  paddingTop: "1.75rem",
                  borderTop: "1px solid #2A2520",
                  display: "flex",
                  alignItems: "center",
                  gap: "1.5rem",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    flexShrink: 0,
                    border: "1px solid #2A2520",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/IMG_4998_portrait.jpg"
                    alt="Diego Fonseca"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "top center",
                      filter: "grayscale(20%)",
                    }}
                  />
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-dm-mono)",
                      fontSize: "0.7rem",
                      color: "#a8a09a",
                      fontWeight: 500,
                    }}
                  >
                    Diego Fonseca Alfonso
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-dm-mono)",
                      fontSize: "0.65rem",
                      color: "#4a4440",
                      marginTop: "0.2rem",
                    }}
                  >
                    Negocios Internacionales · IBERO Puebla
                  </p>
                </div>
              </div>
            </AnimateIn>
          </Container>
        </header>

        {/* ── COVER ────────────────────────────────────────── */}
        <PostCover post={post} />

        {/* ── BODY ─────────────────────────────────────────── */}
        <article style={{ backgroundColor: "#F5F2EC", padding: "6rem 0 8rem" }}>
          <Container>
            <AnimateIn delay={0.1}>
              <div style={{ maxWidth: "680px" }}>
                {isComing ? (
                  <div style={{ textAlign: "center", padding: "5rem 0" }}>
                    <p
                      style={{
                        fontFamily: "var(--font-playfair)",
                        fontSize: "1.75rem",
                        fontStyle: "italic",
                        color: "#6B645C",
                        marginBottom: "1rem",
                      }}
                    >
                      Este ensayo está en proceso.
                    </p>
                    <p
                      style={{
                        color: "#A09890",
                        fontSize: "0.9rem",
                        fontFamily: "var(--font-dm-mono)",
                        letterSpacing: "0.04em",
                      }}
                    >
                      Regresa pronto para leer el análisis completo.
                    </p>
                  </div>
                ) : (
                  <>{renderBody(post.body)}</>
                )}
              </div>
            </AnimateIn>
          </Container>
        </article>
      </main>

      <Footer />
    </>
  );
}
