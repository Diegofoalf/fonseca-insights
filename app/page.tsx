"use client";
import Link from "next/link";
import { motion } from "motion/react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import AnimateIn from "@/components/AnimateIn";
import { posts, projects } from "@/lib/content";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

const ease = [0.22, 0.61, 0.36, 1] as const;

export default function Home() {
  const featured = posts.find((p) => p.featured);
  const recent = posts.filter((p) => !p.featured).slice(0, 2);

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        style={{ backgroundColor: "#141210", minHeight: "100dvh" }}
        className="flex flex-col"
      >
        <Nav dark />

        {/* main content — vertically centered */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <Container className="py-12">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15, ease }}
              style={{
                fontFamily: "var(--font-dm-mono)",
                fontSize: "0.7rem",
                letterSpacing: "0.2em",
                color: "#8B4513",
                textTransform: "uppercase",
                marginBottom: "1.5rem",
              }}
            >
              Análisis · Negocios Internacionales · Geopolítica
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.3, ease }}
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(4rem, 11vw, 9rem)",
                fontWeight: 700,
                lineHeight: 0.88,
                letterSpacing: "-0.02em",
                color: "#ffffff",
                marginBottom: "2rem",
              }}
            >
              Diego
              <br />
              <span style={{ fontStyle: "italic", fontWeight: 400, color: "#a8a09a" }}>
                Fonseca.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.5, ease }}
              style={{
                color: "#a8a09a",
                fontSize: "1.15rem",
                lineHeight: 1.7,
                maxWidth: "480px",
                marginBottom: "2.5rem",
              }}
            >
              Ensayos sobre los sistemas que mueven la economía global.
              Escritos desde Puebla, México.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65, ease }}
              style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}
            >
              <Link
                href="/blog"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  backgroundColor: "#8B4513",
                  color: "#ffffff",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  padding: "0.75rem 1.5rem",
                  textDecoration: "none",
                  transition: "background-color 0.2s",
                }}
                onMouseOver={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#C4845A")
                }
                onMouseOut={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#8B4513")
                }
              >
                Leer ensayos
                <ArrowRight size={15} weight="bold" />
              </Link>
              <Link
                href="/proyectos"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  color: "#a8a09a",
                  fontSize: "0.875rem",
                  textDecoration: "none",
                }}
              >
                Ver proyectos <ArrowRight size={13} />
              </Link>
            </motion.div>
          </Container>
        </div>

        {/* bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9, ease }}
          style={{ borderTop: "1px solid #2A2520" }}
        >
          <Container>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "1.25rem 0",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-dm-mono)",
                  fontSize: "0.7rem",
                  color: "#4a4440",
                }}
              >
                Universidad Iberoamericana Puebla
              </span>
              <span
                style={{
                  fontFamily: "var(--font-dm-mono)",
                  fontSize: "0.7rem",
                  color: "#4a4440",
                }}
              >
                fonsecainsights.com
              </span>
            </div>
          </Container>
        </motion.div>
      </section>

      {/* ── FEATURED ESSAY ───────────────────────────────────── */}
      {featured && (
        <section style={{ backgroundColor: "#F5F2EC", padding: "6rem 0" }}>
          <Container>
            <AnimateIn>
              <p
                style={{
                  fontFamily: "var(--font-dm-mono)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.2em",
                  color: "#8B4513",
                  textTransform: "uppercase",
                  marginBottom: "2.5rem",
                }}
              >
                Ensayo destacado
              </p>

              <div
                style={{
                  borderTop: "1px solid #E2DDD5",
                  paddingTop: "2.5rem",
                  display: "grid",
                  gridTemplateColumns: "1fr 2fr",
                  gap: "3rem",
                  alignItems: "start",
                }}
              >
                <div>
                  <span
                    style={{
                      display: "inline-block",
                      fontFamily: "var(--font-dm-mono)",
                      fontSize: "0.7rem",
                      color: "#6B645C",
                      backgroundColor: "#E2DDD5",
                      padding: "0.2rem 0.6rem",
                      marginBottom: "1rem",
                    }}
                  >
                    {featured.category}
                  </span>
                  <p style={{ fontSize: "0.875rem", color: "#6B645C", marginBottom: "0.25rem" }}>
                    {featured.date}
                  </p>
                  <p style={{ fontSize: "0.875rem", color: "#6B645C" }}>
                    {featured.readTime} de lectura
                  </p>
                </div>

                <div>
                  <h2
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                      fontWeight: 700,
                      lineHeight: 1.2,
                      color: "#1A1814",
                      marginBottom: "1.25rem",
                    }}
                  >
                    {featured.title}
                  </h2>
                  <p
                    style={{
                      color: "#6B645C",
                      lineHeight: 1.75,
                      fontSize: "1.05rem",
                      maxWidth: "600px",
                      marginBottom: "1.75rem",
                    }}
                  >
                    {featured.excerpt}
                  </p>
                  <Link
                    href={`/blog/${featured.slug}`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      color: "#8B4513",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
                    Leer ensayo completo
                    <ArrowRight size={15} weight="bold" />
                  </Link>
                </div>
              </div>
            </AnimateIn>
          </Container>
        </section>
      )}

      {/* ── ABOUT ────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#1A1814", padding: "6rem 0" }}>
        <Container>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "4rem",
              alignItems: "center",
            }}
          >
            <AnimateIn delay={0.05}>
              <p
                style={{
                  fontFamily: "var(--font-dm-mono)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.2em",
                  color: "#8B4513",
                  textTransform: "uppercase",
                  marginBottom: "2rem",
                }}
              >
                Sobre el autor
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  fontWeight: 700,
                  color: "#ffffff",
                  lineHeight: 1.2,
                  marginBottom: "1.5rem",
                }}
              >
                Analizo desde lo que no se deja ver.
              </h2>
              <p
                style={{
                  color: "#a8a09a",
                  lineHeight: 1.75,
                  marginBottom: "1rem",
                }}
              >
                Estudio Negocios Internacionales en la Universidad Iberoamericana
                Puebla. Me interesa entender los sistemas que mueven la economía
                global: los incentivos que no aparecen en los informes oficiales y
                las contradicciones que los analistas ignoran.
              </p>
              <p style={{ color: "#a8a09a", lineHeight: 1.75 }}>
                Estos ensayos son el registro de ese proceso.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.2}>
              <div
                style={{
                  position: "relative",
                  aspectRatio: "3/4",
                  maxWidth: "320px",
                  marginLeft: "auto",
                  overflow: "hidden",
                }}
              >
                <img
                  src="/IMG_4998_portrait.jpg"
                  alt="Diego Fonseca Alfonso"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "grayscale(100%)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(26,24,20,0.5) 0%, transparent 60%)",
                  }}
                />
                <div style={{ position: "absolute", bottom: "1rem", left: "1rem" }}>
                  <p
                    style={{
                      fontFamily: "var(--font-dm-mono)",
                      fontSize: "0.65rem",
                      color: "#a8a09a",
                    }}
                  >
                    Diego Fonseca Alfonso
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-dm-mono)",
                      fontSize: "0.65rem",
                      color: "#6B645C",
                    }}
                  >
                    Iberoamericana Puebla
                  </p>
                </div>
              </div>
            </AnimateIn>
          </div>
        </Container>
      </section>

      {/* ── RECENT POSTS ─────────────────────────────────────── */}
      <section style={{ backgroundColor: "#F5F2EC", padding: "6rem 0" }}>
        <Container>
          <AnimateIn>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                marginBottom: "3rem",
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-dm-mono)",
                    fontSize: "0.7rem",
                    letterSpacing: "0.2em",
                    color: "#8B4513",
                    textTransform: "uppercase",
                    marginBottom: "0.75rem",
                  }}
                >
                  También en el blog
                </p>
                <h2
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "#1A1814",
                  }}
                >
                  Próximos ensayos
                </h2>
              </div>
              <Link
                href="/blog"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.3rem",
                  fontSize: "0.875rem",
                  color: "#6B645C",
                  textDecoration: "none",
                }}
              >
                Ver todos <ArrowRight size={13} />
              </Link>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1px",
                backgroundColor: "#E2DDD5",
              }}
            >
              {recent.map((post) => (
                <article
                  key={post.slug}
                  style={{ backgroundColor: "#F5F2EC", padding: "2.5rem" }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "1.25rem",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-dm-mono)",
                        fontSize: "0.7rem",
                        color: "#A09890",
                      }}
                    >
                      {post.category}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-dm-mono)",
                        fontSize: "0.7rem",
                        color: "#A09890",
                      }}
                    >
                      {post.readTime}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      color: "#1A1814",
                      lineHeight: 1.35,
                      marginBottom: "0.75rem",
                    }}
                  >
                    {post.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "#6B645C",
                      lineHeight: 1.7,
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {post.excerpt}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-dm-mono)",
                      fontSize: "0.7rem",
                      color: "#A09890",
                      marginTop: "1.5rem",
                    }}
                  >
                    {post.date}
                  </p>
                </article>
              ))}
            </div>
          </AnimateIn>
        </Container>
      </section>

      {/* ── PROJECT PREVIEW ──────────────────────────────────── */}
      <section
        style={{
          backgroundColor: "#F5F2EC",
          borderTop: "1px solid #E2DDD5",
          padding: "6rem 0",
        }}
      >
        <Container>
          <AnimateIn>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                marginBottom: "3rem",
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-dm-mono)",
                    fontSize: "0.7rem",
                    letterSpacing: "0.2em",
                    color: "#8B4513",
                    textTransform: "uppercase",
                    marginBottom: "0.75rem",
                  }}
                >
                  Trabajo académico
                </p>
                <h2
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "#1A1814",
                  }}
                >
                  Proyectos
                </h2>
              </div>
              <Link
                href="/proyectos"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.3rem",
                  fontSize: "0.875rem",
                  color: "#6B645C",
                  textDecoration: "none",
                }}
              >
                Ver todos <ArrowRight size={13} />
              </Link>
            </div>

            {projects.map((project) => (
              <div
                key={project.slug}
                style={{
                  border: "1px solid #E2DDD5",
                  padding: "2.5rem",
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
                  <span
                    style={{
                      fontFamily: "var(--font-dm-mono)",
                      fontSize: "0.7rem",
                      color: "#A09890",
                    }}
                  >
                    {project.year} · {project.institution}
                  </span>
                  <ArrowUpRight size={16} color="#A09890" />
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "2rem",
                    fontWeight: 700,
                    color: "#1A1814",
                    marginBottom: "0.25rem",
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "#8B4513",
                    fontWeight: 600,
                    marginBottom: "1rem",
                  }}
                >
                  {project.subtitle}
                </p>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#6B645C",
                    lineHeight: 1.75,
                    maxWidth: "600px",
                  }}
                >
                  {project.description}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "1.5rem" }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: "0.75rem",
                        color: "#6B645C",
                        border: "1px solid #E2DDD5",
                        padding: "0.15rem 0.6rem",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </AnimateIn>
        </Container>
      </section>

      <Footer />
    </>
  );
}
