import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import AnimateIn from "@/components/AnimateIn";
import { posts, getPost } from "@/lib/content";

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

function renderBody(body: string) {
  return body.split("\n\n").map((block, i) => {
    if (block.startsWith("## ")) {
      return (
        <h2
          key={i}
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(1.4rem, 2.5vw, 1.75rem)",
            fontWeight: 700,
            color: "#1A1814",
            marginTop: "3.5rem",
            marginBottom: "1.25rem",
            lineHeight: 1.2,
          }}
        >
          {block.replace("## ", "")}
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
        const isAI = src.startsWith("/essay-");
        return (
          <figure key={i} style={{ margin: "3rem -2rem" }}>
            <img
              src={imgSrc}
              alt={caption}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                filter: "grayscale(20%) contrast(1.05)",
              }}
            />
            <figcaption
              style={{
                fontFamily: "var(--font-dm-mono)",
                marginTop: "0.75rem",
                padding: "0 2rem",
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
              {isAI && (
                <p
                  style={{
                    fontSize: "0.6rem",
                    color: "#B8B0A8",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    marginTop: "0.4rem",
                    textAlign: "right",
                    margin: "0.4rem 0 0",
                  }}
                >
                  Generada con Inteligencia Artificial
                </p>
              )}
            </figcaption>
          </figure>
        );
      }
    }

    if (block.startsWith("• ")) {
      const lines = block.split("\n").filter((l) => l.startsWith("• "));
      return (
        <ul key={i} style={{ margin: "1rem 0 1.5rem", padding: 0, listStyle: "none" }}>
          {lines.map((line, j) => (
            <li
              key={j}
              style={{
                fontSize: "0.875rem",
                color: "#6B645C",
                lineHeight: 1.75,
                marginBottom: "0.6rem",
                paddingLeft: "1.5rem",
                position: "relative",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  color: "#A09890",
                  fontFamily: "var(--font-dm-mono)",
                }}
              >
                —
              </span>
              {line.replace("• ", "")}
            </li>
          ))}
        </ul>
      );
    }

    if (block.trim() === "") return null;

    return (
      <p
        key={i}
        style={{
          color: "#3A3530",
          lineHeight: 1.85,
          fontSize: "1.1rem",
          marginBottom: "1.5rem",
        }}
      >
        {block}
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
  if (!post) notFound();

  const isComing = !post.body;

  return (
    <>
      <Nav />
      <main style={{ paddingTop: "4rem" }}>
        {/* Header */}
        <header style={{ backgroundColor: "#141210", padding: "7rem 0 6rem" }}>
          <Container>
            <AnimateIn>
              <div style={{ maxWidth: "700px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    marginBottom: "2rem",
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-dm-mono)",
                      fontSize: "0.7rem",
                      color: "#8B4513",
                      textTransform: "uppercase",
                      letterSpacing: "0.2em",
                    }}
                  >
                    {post.category}
                  </span>
                  <span style={{ color: "#4a4440", fontSize: "0.75rem" }}>·</span>
                  <span
                    style={{
                      fontFamily: "var(--font-dm-mono)",
                      fontSize: "0.7rem",
                      color: "#6B645C",
                    }}
                  >
                    {post.date}
                  </span>
                  <span style={{ color: "#4a4440", fontSize: "0.75rem" }}>·</span>
                  <span
                    style={{
                      fontFamily: "var(--font-dm-mono)",
                      fontSize: "0.7rem",
                      color: "#6B645C",
                    }}
                  >
                    {post.readTime} de lectura
                  </span>
                </div>

                <h1
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "clamp(2rem, 5vw, 3.25rem)",
                    fontWeight: 700,
                    color: "#ffffff",
                    lineHeight: 1.1,
                    marginBottom: "1.5rem",
                  }}
                >
                  {post.title}
                </h1>

                <p
                  style={{
                    color: "#a8a09a",
                    fontSize: "1.15rem",
                    lineHeight: 1.7,
                  }}
                >
                  {post.excerpt}
                </p>

                <div
                  style={{
                    marginTop: "2.5rem",
                    paddingTop: "2rem",
                    borderTop: "1px solid #2A2520",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-dm-mono)",
                      fontSize: "0.7rem",
                      color: "#6B645C",
                    }}
                  >
                    Por Diego Fonseca Alfonso
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-dm-mono)",
                      fontSize: "0.7rem",
                      color: "#4a4440",
                      marginTop: "0.25rem",
                    }}
                  >
                    Negocios Internacionales · Universidad Iberoamericana Puebla
                  </p>
                </div>
              </div>
            </AnimateIn>
          </Container>
        </header>

        {/* Body */}
        <article style={{ backgroundColor: "#F5F2EC", padding: "6rem 0 7rem" }}>
          <Container>
            <AnimateIn delay={0.1}>
              <div style={{ maxWidth: "700px" }}>
                {isComing ? (
                  <div style={{ textAlign: "center", padding: "4rem 0" }}>
                    <p
                      style={{
                        fontFamily: "var(--font-playfair)",
                        fontSize: "1.5rem",
                        fontStyle: "italic",
                        color: "#6B645C",
                      }}
                    >
                      Este ensayo está en proceso.
                    </p>
                    <p
                      style={{
                        color: "#A09890",
                        marginTop: "1rem",
                        fontSize: "0.875rem",
                      }}
                    >
                      Regresa pronto para leer el análisis completo.
                    </p>
                  </div>
                ) : (
                  <div>{renderBody(post.body)}</div>
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
