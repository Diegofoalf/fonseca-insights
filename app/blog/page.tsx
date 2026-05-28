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
                  fontSize: "0.65rem",
                  letterSpacing: "0.22em",
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
                  lineHeight: 1.05,
                  maxWidth: "680px",
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
                className="group block"
                style={{ textDecoration: "none" }}
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
                        fontSize: "0.65rem",
                        color: "#8B4513",
                        textTransform: "uppercase",
                        letterSpacing: "0.22em",
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
                        lineHeight: 1.1,
                        marginTop: "1rem",
                        marginBottom: "1.5rem",
                        transition: "color 0.2s",
                      }}
                      className="group-hover:text-[#F5F2EC]"
                    >
                      {featured.title}
                    </h2>
                    <p style={{ color: "#a8a09a", lineHeight: 1.75, maxWidth: "580px" }}>
                      {featured.excerpt}
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      gap: "1rem",
                    }}
                  >
                    <div style={{ textAlign: "right" }}>
                      <p
                        style={{
                          fontFamily: "var(--font-dm-mono)",
                          fontSize: "0.75rem",
                          color: "#6B645C",
                        }}
                      >
                        {featured.date}
                      </p>
                      <p
                        style={{
                          fontFamily: "var(--font-dm-mono)",
                          fontSize: "0.75rem",
                          color: "#6B645C",
                          marginTop: "0.25rem",
                        }}
                      >
                        {featured.readTime} de lectura
                      </p>
                    </div>
                    <span
                      className="inline-flex items-center gap-2"
                      style={{
                        color: "#C4845A",
                        fontSize: "0.875rem",
                        fontWeight: 600,
                      }}
                    >
                      Leer ensayo
                      <span className="transition-transform duration-200 group-hover:translate-x-1 inline-flex">
                        <ArrowRight size={16} weight="bold" />
                      </span>
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
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block"
                  style={{ textDecoration: "none" }}
                >
                  <article
                    className="transition-colors duration-200 group-hover:bg-[#EDE9E1]"
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
                        alignItems: "center",
                      }}
                    >
                      <div>
                        <span
                          style={{
                            fontFamily: "var(--font-dm-mono)",
                            fontSize: "0.65rem",
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
                            fontSize: "1.35rem",
                            fontWeight: 700,
                            color: "#1A1814",
                            lineHeight: 1.3,
                            marginBottom: "0.5rem",
                          }}
                        >
                          {post.title}
                        </h2>
                        <p style={{ color: "#6B645C", lineHeight: 1.7, fontSize: "0.875rem" }}>
                          {post.excerpt}
                        </p>
                        <div
                          className="inline-flex items-center gap-1.5 mt-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                          style={{
                            color: "#8B4513",
                            fontFamily: "var(--font-dm-mono)",
                            fontSize: "0.7rem",
                            fontWeight: 500,
                          }}
                        >
                          Leer ensayo
                          <ArrowRight size={12} weight="bold" />
                        </div>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <p
                          style={{
                            fontFamily: "var(--font-dm-mono)",
                            fontSize: "0.65rem",
                            color: "#A09890",
                          }}
                        >
                          {post.date}
                        </p>
                        <p
                          style={{
                            fontFamily: "var(--font-dm-mono)",
                            fontSize: "0.65rem",
                            color: "#A09890",
                            marginTop: "0.25rem",
                          }}
                        >
                          {post.readTime}
                        </p>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
