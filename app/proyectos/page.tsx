import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import AnimateIn from "@/components/AnimateIn";
import { projects } from "@/lib/content";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

export const metadata = {
  title: "Proyectos — Fonseca Insights",
  description: "Proyectos de análisis e investigación en negocios internacionales, sustentabilidad y geopolítica.",
};

export default function ProyectosPage() {
  const large = projects.filter((p) => p.size === "large");
  const small = projects.filter((p) => p.size === "small");

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
                Proyectos
              </p>
              <h1
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                  fontWeight: 700,
                  color: "#1A1814",
                  lineHeight: 1.05,
                  maxWidth: "560px",
                  marginBottom: "1.5rem",
                }}
              >
                Análisis e investigación.
              </h1>
              <p
                style={{
                  color: "#6B645C",
                  fontSize: "1.1rem",
                  lineHeight: 1.7,
                  maxWidth: "480px",
                }}
              >
                Proyectos de investigación que conectan la teoría con lo que
                ocurre en el mundo real.
              </p>
            </AnimateIn>
          </Container>
        </section>

        {/* Projects */}
        <section style={{ backgroundColor: "#F5F2EC", padding: "4rem 0" }}>
          <Container>
            <AnimateIn stagger staggerDelay={0.1}>
              {/* Large projects */}
              {large.map((project) => {
                const inner = (
                  <div
                    key={project.slug}
                    className="transition-all duration-300 group-hover:bg-[#141210]"
                    style={{
                      backgroundColor: "#1A1814",
                      padding: "3.5rem",
                      position: "relative",
                      overflow: "hidden",
                      cursor: project.link ? "pointer" : "default",
                    }}
                  >
                    {/* Decorative letter */}
                    <div
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        top: "2rem",
                        right: "2.5rem",
                        fontFamily: "var(--font-playfair)",
                        fontSize: "10rem",
                        fontWeight: 700,
                        color: "rgba(255,255,255,0.035)",
                        lineHeight: 1,
                        userSelect: "none",
                      }}
                    >
                      {project.title.charAt(0)}
                    </div>

                    <div
                      style={{
                        position: "relative",
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "3rem",
                        alignItems: "end",
                      }}
                    >
                      <div>
                        <p
                          style={{
                            fontFamily: "var(--font-dm-mono)",
                            fontSize: "0.65rem",
                            color: "#8B4513",
                            letterSpacing: "0.22em",
                            textTransform: "uppercase",
                            marginBottom: "1.5rem",
                          }}
                        >
                          {project.year} · {project.institution}
                        </p>
                        <h2
                          style={{
                            fontFamily: "var(--font-playfair)",
                            fontSize: "clamp(2.5rem, 5vw, 4rem)",
                            fontWeight: 700,
                            color: "#ffffff",
                            lineHeight: 1.05,
                            marginBottom: "0.75rem",
                          }}
                        >
                          {project.title}
                        </h2>
                        <p
                          style={{
                            color: "#C4845A",
                            fontWeight: 500,
                            fontSize: "1.1rem",
                          }}
                        >
                          {project.subtitle}
                        </p>
                      </div>

                      <div>
                        <p
                          style={{
                            color: "#a8a09a",
                            lineHeight: 1.75,
                            marginBottom: "2rem",
                          }}
                        >
                          {project.description}
                        </p>
                        {project.highlight && (
                          <div
                            style={{
                              borderLeft: "2px solid #8B4513",
                              paddingLeft: "1rem",
                              marginBottom: "2rem",
                            }}
                          >
                            <p
                              style={{
                                fontFamily: "var(--font-dm-mono)",
                                fontSize: "0.85rem",
                                color: "#ffffff",
                                fontWeight: 500,
                              }}
                            >
                              {project.highlight}
                            </p>
                          </div>
                        )}
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              style={{
                                fontSize: "0.75rem",
                                color: "#a8a09a",
                                border: "1px solid #2A2520",
                                padding: "0.2rem 0.75rem",
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {project.link && (
                          <div
                            className="inline-flex items-center gap-2 mt-6 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                            style={{
                              color: "#C4845A",
                              fontFamily: "var(--font-dm-mono)",
                              fontSize: "0.75rem",
                              fontWeight: 500,
                            }}
                          >
                            Leer ensayo
                            <ArrowUpRight size={13} weight="bold" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );

                return project.link ? (
                  <Link
                    key={project.slug}
                    href={project.link}
                    className="group block"
                    style={{ textDecoration: "none" }}
                  >
                    {inner}
                  </Link>
                ) : (
                  <div key={project.slug}>{inner}</div>
                );
              })}

              {/* Small projects grid */}
              {small.length > 0 && (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1.5rem",
                  }}
                >
                  {small.map((project) => (
                    <div
                      key={project.slug}
                      className="transition-colors duration-200 hover:border-[#C4845A]"
                      style={{
                        border: "1px solid #E2DDD5",
                        padding: "2rem",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                          marginBottom: "1.5rem",
                        }}
                      >
                        <p
                          style={{
                            fontFamily: "var(--font-dm-mono)",
                            fontSize: "0.65rem",
                            color: "#A09890",
                          }}
                        >
                          {project.year} · {project.institution}
                        </p>
                        <ArrowUpRight size={18} color="#A09890" />
                      </div>
                      <h2
                        style={{
                          fontFamily: "var(--font-playfair)",
                          fontSize: "1.75rem",
                          fontWeight: 700,
                          color: "#1A1814",
                          marginBottom: "0.5rem",
                        }}
                      >
                        {project.title}
                      </h2>
                      <p
                        style={{
                          fontSize: "0.875rem",
                          color: "#8B4513",
                          fontWeight: 600,
                          marginBottom: "1.25rem",
                        }}
                      >
                        {project.subtitle}
                      </p>
                      <p
                        style={{
                          fontSize: "0.875rem",
                          color: "#6B645C",
                          lineHeight: 1.75,
                          marginBottom: "1.5rem",
                        }}
                      >
                        {project.description}
                      </p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            style={{
                              fontSize: "0.75rem",
                              color: "#6B645C",
                              border: "1px solid #E2DDD5",
                              padding: "0.15rem 0.65rem",
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </AnimateIn>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
