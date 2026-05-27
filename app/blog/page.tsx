import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import AnimateIn from "@/components/AnimateIn";
import { posts } from "@/lib/content";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

export const metadata = {
  title: "Blog — Fonseca Insights",
  description: "Ensayos sobre geopolítica, economía internacional y estrategia de negocios.",
};

export default function BlogPage() {
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <>
      <Nav />
      <main style={{ paddingTop: "4rem" }}>
        {/* Header */}
        <section
          style={{
            backgroundColor: "#F5F2EC",
            borderBottom: "1px solid #E2DDD5",
            padding: "5rem 0",
          }}
        >
          <Container>
            <AnimateIn>
            <p
              style={{
                fontFamily: "var(--font-dm-mono)",
                fontSize: "0.7rem",
                letterSpacing: "0.2em",
                color: "#8B4513",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
              }}
            >
              Blog
            </p>
            <h1
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                fontWeight: 700,
                color: "#1A1814",
                lineHeight: 1.1,
                maxWidth: "700px",
              }}
            >
              Ensayos de relevancia mundial que no aparecen en los titulares.
            </h1>
            </AnimateIn>
          </Container>
        </section>

        {/* Featured */}
        {featured && (
          <section style={{ backgroundColor: "#1A1814", padding: "4rem 0" }}>
            <Container>
              <Link
                href={`/blog/${featured.slug}`}
                style={{ textDecoration: "none", display: "block" }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "2fr 1fr",
                    gap: "2.5rem",
                    alignItems: "end",
                  }}
                >
                  <div>
                    <span
                      style={{
                        fontFamily: "var(--font-dm-mono)",
                        fontSize: "0.7rem",
                        color: "#8B4513",
                        textTransform: "uppercase",
                        letterSpacing: "0.2em",
                      }}
                    >
                      {featured.category}
                    </span>
                    <h2
                      style={{
                        fontFamily: "var(--font-playfair)",
                        fontSize: "clamp(1.8rem, 4vw, 3rem)",
                        fontWeight: 700,
                        color: "#ffffff",
                        lineHeight: 1.15,
                        marginTop: "1rem",
                        marginBottom: "1.5rem",
                      }}
                    >
                      {featured.title}
                    </h2>
                    <p style={{ color: "#a8a09a", lineHeight: 1.75, maxWidth: "580px" }}>
                      {featured.excerpt}
                    </p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "1rem" }}>
                    <div style={{ textAlign: "right" }}>
                      <p
                        style={{
                          fontFamily: "var(--font-dm-mono)",
                          fontSize: "0.8rem",
                          color: "#6B645C",
                        }}
                      >
                        {featured.date}
                      </p>
                      <p
                        style={{
                          fontFamily: "var(--font-dm-mono)",
                          fontSize: "0.8rem",
                          color: "#6B645C",
                          marginTop: "0.25rem",
                        }}
                      >
                        {featured.readTime} de lectura
                      </p>
                    </div>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        color: "#C4845A",
                        fontSize: "0.875rem",
                        fontWeight: 600,
                      }}
                    >
                      Leer ensayo <ArrowRight size={16} weight="bold" />
                    </span>
                  </div>
                </div>
              </Link>
            </Container>
          </section>
        )}

        {/* Post list */}
        <section style={{ backgroundColor: "#F5F2EC", padding: "4rem 0" }}>
          <Container>
            <div style={{ borderTop: "1px solid #E2DDD5" }}>
              {rest.map((post) => (
                <article
                  key={post.slug}
                  style={{
                    padding: "2.5rem 0",
                    borderBottom: "1px solid #E2DDD5",
                  }}
                >
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "140px 1fr 120px",
                      gap: "2rem",
                      alignItems: "start",
                    }}
                  >
                    <div>
                      <span
                        style={{
                          fontFamily: "var(--font-dm-mono)",
                          fontSize: "0.7rem",
                          color: "#A09890",
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                        }}
                      >
                        {post.category}
                      </span>
                    </div>
                    <div>
                      <h2
                        style={{
                          fontFamily: "var(--font-playfair)",
                          fontSize: "1.4rem",
                          fontWeight: 700,
                          color: "#1A1814",
                          lineHeight: 1.3,
                          marginBottom: "0.75rem",
                        }}
                      >
                        {post.title}
                      </h2>
                      <p style={{ color: "#6B645C", lineHeight: 1.75, fontSize: "0.9rem" }}>
                        {post.excerpt}
                      </p>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <p
                        style={{
                          fontFamily: "var(--font-dm-mono)",
                          fontSize: "0.7rem",
                          color: "#A09890",
                        }}
                      >
                        {post.date}
                      </p>
                      <p
                        style={{
                          fontFamily: "var(--font-dm-mono)",
                          fontSize: "0.7rem",
                          color: "#A09890",
                          marginTop: "0.25rem",
                        }}
                      >
                        {post.readTime}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
