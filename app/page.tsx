"use client";
import Link from "next/link";
import { motion } from "motion/react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import AnimateIn from "@/components/AnimateIn";
import PostCover from "@/components/PostCover";
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
        className="hero-grain flex flex-col"
        style={{ backgroundColor: "#0d0b09", minHeight: "100dvh" }}
      >
        {/* Ambient glow */}
        <motion.div
          aria-hidden="true"
          animate={{ x: [0, 80, 0], y: [0, 50, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            width: "55%",
            height: "55%",
            top: "15%",
            left: "0%",
            background:
              "radial-gradient(ellipse, rgba(139,69,19,0.09) 0%, transparent 70%)",
            pointerEvents: "none",
            filter: "blur(70px)",
            zIndex: 0,
          }}
        />

        <Nav dark />

        {/* Main content */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
            zIndex: 2,
          }}
        >
          <Container className="py-12">
            {/* Label */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
              style={{
                fontFamily: "var(--font-dm-mono)",
                fontSize: "0.65rem",
                letterSpacing: "0.22em",
                color: "#8B4513",
                textTransform: "uppercase",
                marginBottom: "1.75rem",
              }}
            >
              Geopolítica · Economía · Finanzas
            </motion.p>

            {/* Headline — word reveal */}
            <h1
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(4rem, 11vw, 9.5rem)",
                fontWeight: 700,
                lineHeight: 1.0,
                letterSpacing: "-0.02em",
                marginBottom: "2.25rem",
              }}
            >
              <motion.span
                initial={{ y: "30%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.25, ease }}
                style={{ display: "block", color: "#ffffff" }}
              >
                Diego
              </motion.span>
              <motion.span
                initial={{ y: "30%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.42, ease }}
                style={{
                  display: "block",
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "#a8a09a",
                }}
              >
                Fonseca.
              </motion.span>
            </h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.62, ease }}
              style={{
                color: "#a8a09a",
                fontSize: "1.15rem",
                lineHeight: 1.7,
                maxWidth: "460px",
                marginBottom: "2.75rem",
              }}
            >
              Lo que mueve al mundo rara vez aparece en las noticias.
              Eso es lo que escribo.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.78, ease }}
              style={{ display: "flex", alignItems: "center", gap: "1.75rem" }}
            >
              <Link
                href="/blog"
                className="btn-slide"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  backgroundColor: "#8B4513",
                  color: "#ffffff",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  padding: "0.8rem 1.6rem",
                  textDecoration: "none",
                  letterSpacing: "0.01em",
                }}
              >
                Leer ensayos
                <ArrowRight size={15} weight="bold" />
              </Link>
            </motion.div>
          </Container>
        </div>

        {/* Decorative sidebar label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          aria-hidden="true"
          className="hero-sidebar"
          style={{
            position: "absolute",
            right: "2.5rem",
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
            zIndex: 2,
          }}
        >
          <div style={{ width: "1px", height: "72px", backgroundColor: "#2A2520" }} />
          <span
            style={{
              fontFamily: "var(--font-dm-mono)",
              fontSize: "0.58rem",
              color: "#3d3830",
              writingMode: "vertical-rl",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
            }}
          >
            Est. 2026
          </span>
          <div style={{ width: "1px", height: "72px", backgroundColor: "#2A2520" }} />
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          style={{ borderTop: "1px solid #2A2520", position: "relative", zIndex: 2 }}
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
                  fontSize: "0.65rem",
                  color: "#3d3830",
                }}
              >
                Analista e investigador.
              </span>
              <span
                style={{
                  fontFamily: "var(--font-dm-mono)",
                  fontSize: "0.65rem",
                  color: "#3d3830",
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
        <section className="section-featured" style={{ backgroundColor: "#F5F2EC", padding: "6rem 0" }}>
          <Container>
            <AnimateIn>
              <p
                style={{
                  fontFamily: "var(--font-dm-mono)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.22em",
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
                  gap: "3.5rem",
                  alignItems: "start",
                }}
                className="featured-grid"
              >
                {/* Left: cover + meta */}
                <div>
                  <div style={{ overflow: "hidden", marginBottom: "1.5rem" }}>
                    <PostCover post={featured} height={240} showCaption={false} />
                  </div>
                  <span
                    style={{
                      display: "inline-block",
                      fontFamily: "var(--font-dm-mono)",
                      fontSize: "0.65rem",
                      color: "#6B645C",
                      backgroundColor: "#E2DDD5",
                      padding: "0.2rem 0.65rem",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {featured.category}
                  </span>
                  <p style={{ fontSize: "0.875rem", color: "#6B645C", marginBottom: "0.2rem" }}>
                    {featured.date}
                  </p>
                  <p style={{ fontSize: "0.875rem", color: "#6B645C" }}>
                    {featured.readTime} de lectura
                  </p>
                </div>

                {/* Right: title + excerpt + link */}
                <div style={{ paddingTop: "0.25rem" }}>
                  <h2
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                      fontWeight: 700,
                      lineHeight: 1.15,
                      color: "#1A1814",
                      marginBottom: "1.5rem",
                    }}
                  >
                    {featured.title}
                  </h2>
                  <p
                    style={{
                      color: "#6B645C",
                      lineHeight: 1.8,
                      fontSize: "1.05rem",
                      maxWidth: "560px",
                      marginBottom: "2rem",
                    }}
                  >
                    {featured.excerpt}
                  </p>
                  <Link
                    href={`/blog/${featured.slug}`}
                    className="group"
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
                    <span className="transition-transform duration-200 group-hover:translate-x-1 inline-flex">
                      <ArrowRight size={15} weight="bold" />
                    </span>
                  </Link>
                </div>
              </div>
            </AnimateIn>
          </Container>
        </section>
      )}

      {/* ── ABOUT ────────────────────────────────────────────── */}
      <section className="section-about" style={{ backgroundColor: "#1A1814", padding: "7rem 0" }}>
        <Container>
          <AnimateIn delay={0.05}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "6rem",
                alignItems: "center",
              }}
              className="about-grid"
            >
              {/* Left: text */}
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-dm-mono)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.22em",
                    color: "#8B4513",
                    textTransform: "uppercase",
                    marginBottom: "1.5rem",
                  }}
                >
                  Sobre el autor
                </p>
                <h2
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "clamp(2rem, 4vw, 3.2rem)",
                    fontWeight: 700,
                    color: "#ffffff",
                    lineHeight: 1.1,
                    marginBottom: "2.5rem",
                  }}
                >
                  Analizo desde lo que no se deja ver.
                </h2>
                <div style={{ borderTop: "1px solid #2A2520", paddingTop: "2rem" }}>
                  <p
                    style={{
                      color: "#a8a09a",
                      lineHeight: 1.85,
                      fontSize: "1.05rem",
                      marginBottom: "1.25rem",
                    }}
                  >
                    Estudio Negocios Internacionales en la Universidad
                    Iberoamericana Puebla. Me interesa entender los sistemas que
                    mueven la economía global: los incentivos que no aparecen en
                    los informes oficiales y las contradicciones que los
                    analistas ignoran.
                  </p>
                  <p
                    style={{
                      color: "#a8a09a",
                      lineHeight: 1.85,
                      fontSize: "1.05rem",
                      marginBottom: "2.5rem",
                    }}
                  >
                    Estos ensayos son el registro de ese proceso.
                  </p>
                  <div style={{ borderTop: "1px solid #2A2520", paddingTop: "1.25rem" }}>
                    <p
                      style={{
                        fontFamily: "var(--font-dm-mono)",
                        fontSize: "0.7rem",
                        color: "#6B645C",
                      }}
                    >
                      Diego Fonseca Alfonso
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
              </div>

              {/* Right: portrait */}
              <div style={{ position: "relative" }}>
                {/* Offset decorative border */}
                <div
                  aria-hidden="true"
                  className="about-deco-border"
                  style={{
                    position: "absolute",
                    top: "1.25rem",
                    right: "-1.25rem",
                    bottom: "-1.25rem",
                    left: "1.25rem",
                    border: "1px solid #2A2520",
                    zIndex: 0,
                  }}
                />
                <div
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    aspectRatio: "3/4",
                    zIndex: 1,
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/IMG_4998_portrait.jpg"
                    alt="Diego Fonseca Alfonso"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "top center",
                      filter: "grayscale(15%)",
                    }}
                  />
                </div>
              </div>
            </div>
          </AnimateIn>
        </Container>
      </section>

      {/* ── RECENT POSTS ─────────────────────────────────────── */}
      <section className="section-recent" style={{ backgroundColor: "#F5F2EC", padding: "6rem 0" }}>
        <Container>
          <AnimateIn>
            <div
              className="recent-posts-header"
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
                    fontSize: "0.65rem",
                    letterSpacing: "0.22em",
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
                className="group"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  fontSize: "0.875rem",
                  color: "#6B645C",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseOver={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#1A1814")}
                onMouseOut={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#6B645C")}
              >
                Ver todos
                <span className="transition-transform duration-200 group-hover:translate-x-1 inline-flex">
                  <ArrowRight size={13} />
                </span>
              </Link>
            </div>

            <div
              className="recent-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1px",
                backgroundColor: "#E2DDD5",
              }}
            >
              {recent.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block"
                  style={{ textDecoration: "none" }}
                >
                  <article
                    className="transition-colors duration-200 group-hover:bg-[#EDE9E1]"
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
                          fontSize: "0.65rem",
                          color: "#A09890",
                        }}
                      >
                        {post.category}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-dm-mono)",
                          fontSize: "0.65rem",
                          color: "#A09890",
                        }}
                      >
                        {post.readTime}
                      </span>
                    </div>
                    <h3
                      style={{
                        fontFamily: "var(--font-playfair)",
                        fontSize: "1.25rem",
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
                    <div
                      className="flex items-center gap-1.5 mt-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                      style={{
                        color: "#8B4513",
                        fontFamily: "var(--font-dm-mono)",
                        fontSize: "0.7rem",
                        fontWeight: 500,
                      }}
                    >
                      Leer
                      <ArrowRight size={12} weight="bold" />
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </AnimateIn>
        </Container>
      </section>

      <Footer />
    </>
  );
}
