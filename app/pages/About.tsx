import { useNavigate } from "react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useTheme } from "../page";
import { getC, SERIF, SANS, MONO, LIME, DARK } from "../components/theme";

// Replaced individual people with core team disciplines
const leadership = [
  {
    name: "Executive Leadership",
    title: "Strategy & Operations",
    bio: "Guiding product vision and technical strategy. Decades of combined experience scaling technology businesses and distributed systems across African markets.",
    imageId: "1522071820081-009f0129c71c", // Team collaboration / office
  },
  {
    name: "Core Engineering",
    title: "Architecture & Cloud",
    bio: "Senior systems architects and SREs specializing in cloud-native infrastructure, high-availability platforms, and secure data modeling.",
    imageId: "1551434678-e076c223a692", // Code / abstract tech
  },
  {
    name: "Product Development",
    title: "Web & Mobile Platforms",
    bio: "Specialists in crafting performant, offline-first applications and intuitive user interfaces tailored for varied device capabilities and networks.",
    imageId: "1531482615713-2afd69097998", // Laptop / focused work
  },
];

const processSteps = [
  { 
    phase: "01", 
    title: "Discovery & Architecture", 
    desc: "We align on business goals, map out technical constraints, and define a scalable system architecture before writing any code." 
  },
  { 
    phase: "02", 
    title: "Prototyping & Validation", 
    desc: "Rapid iterations to test core assumptions, refine user flows, and validate the most complex technical decisions early." 
  },
  { 
    phase: "03", 
    title: "Core Engineering", 
    desc: "Sprint-based development focusing on clean codebases, comprehensive test coverage, and robust CI/CD pipelines." 
  },
  { 
    phase: "04", 
    title: "Security & QA", 
    desc: "Rigorous testing across varied networks and devices, ensuring data protection and local compliance standards are met." 
  },
  { 
    phase: "05", 
    title: "Deployment & Scaling", 
    desc: "Production rollouts engineered for zero downtime, backed by continuous monitoring, observability, and support." 
  },
];

const values = [
  {
    title: "Architecture before code",
    description:
      "We invest in understanding the problem deeply before touching a keyboard. The best engineering decisions are made in the design phase.",
  },
  {
    title: "Radical transparency",
    description:
      "No hidden blockers, no status theater. We communicate clearly and early — especially when things are hard.",
  },
  {
    title: "Built to last",
    description:
      "We measure success by how well our systems perform years after we've shipped them, not just at launch.",
  },
  {
    title: "Africa's context, global standards",
    description:
      "We understand unreliable networks, varied device capabilities, and local regulation — and build systems that thrive in these conditions.",
  },
];

export function About() {
  const { isDark } = useTheme();
  const c = getC(isDark);
  const navigate = useNavigate();

  return (
    <div style={{ background: c.bg, color: c.fg, transition: "background 0.4s, color 0.4s" }}>
      {/* Hero */}
      <section
        style={{
          minHeight: "65vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "10rem 3rem 6rem",
          background: c.bg,
          borderBottom: `1px solid ${c.border}`,
        }}
      >
        <p style={{ fontFamily: SANS, fontSize: "0.6875rem", letterSpacing: "0.22em", color: c.muted, textTransform: "uppercase", marginBottom: "2.5rem" }}>
          About Codels Africa
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "end" }}>
          <h1
            style={{
              fontFamily: SERIF,
              fontSize: "clamp(3rem, 7vw, 6.5rem)",
              fontWeight: 700,
              lineHeight: 0.93,
              letterSpacing: "-0.03em",
              margin: 0,
            }}
          >
            <span style={{ display: "block", color: c.fg }}>Built in</span>
            <span style={{ display: "block", color: c.accentText, fontStyle: "italic" }}>Africa,</span>
            <span style={{ display: "block", color: c.fg }}>for the world.</span>
          </h1>
          <div>
            <p style={{ fontFamily: SANS, color: c.muted, fontSize: "1rem", lineHeight: 1.75, marginBottom: "2rem" }}>
              We're a software engineering consultancy founded in Nairobi in 2018. We build production-grade software systems for startups and enterprises across Africa and beyond — with a team that understands the continent's unique technical and business context.
            </p>
            <p style={{ fontFamily: SANS, color: c.muted, fontSize: "1rem", lineHeight: 1.75 }}>
              Every engineer on our team has shipped systems serving real users at scale. We don't have junior developers learning on client projects.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: "8rem 3rem", borderBottom: `1px solid ${c.border}`, background: c.surface }}>
        <p style={{ fontFamily: SANS, fontSize: "0.6875rem", letterSpacing: "0.2em", color: c.muted, textTransform: "uppercase", marginBottom: "4rem" }}>
          What we believe
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: c.border }}>
          {values.map((v, i) => (
            <div
              key={v.title}
              style={{
                background: c.surface,
                padding: "3.5rem",
                borderBottom: i < 2 ? `1px solid ${c.border}` : "none",
              }}
            >
              <span style={{ fontFamily: MONO, fontSize: "0.625rem", color: c.accentText, letterSpacing: "0.08em", display: "block", marginBottom: "1.5rem" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 style={{ fontFamily: SERIF, fontSize: "clamp(1.25rem, 2vw, 1.625rem)", fontWeight: 700, letterSpacing: "-0.015em", color: c.fg, marginBottom: "1rem", lineHeight: 1.2 }}>
                {v.title}
              </h3>
              <p style={{ fontFamily: SANS, color: c.muted, fontSize: "0.9375rem", lineHeight: 1.75 }}>
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Expertise (Replaced Leadership) */}
      <section style={{ padding: "8rem 3rem", borderBottom: `1px solid ${c.border}`, background: c.bg }}>
        <p style={{ fontFamily: SANS, fontSize: "0.6875rem", letterSpacing: "0.2em", color: c.muted, textTransform: "uppercase", marginBottom: "4rem" }}>
          The Team
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" }}>
          {leadership.map((person) => (
            <div key={person.name}>
              <div
                style={{
                  aspectRatio: "3/4",
                  overflow: "hidden",
                  marginBottom: "1.5rem",
                  background: c.surface,
                }}
              >
                <img
                  src={`https://images.unsplash.com/photo-${person.imageId}?w=600&h=800&fit=crop&auto=format`}
                  alt={person.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "grayscale(20%)",
                    transition: "transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94), filter 0.3s",
                    display: "block",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.04)"; e.currentTarget.style.filter = "grayscale(0%)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.filter = "grayscale(20%)"; }}
                />
              </div>
              <p style={{ fontFamily: SERIF, fontSize: "1.25rem", fontWeight: 700, color: c.fg, marginBottom: "0.25rem", letterSpacing: "-0.01em" }}>
                {person.name}
              </p>
              <p style={{ fontFamily: MONO, fontSize: "0.625rem", color: c.accentText, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.875rem" }}>
                {person.title}
              </p>
              <p style={{ fontFamily: SANS, color: c.muted, fontSize: "0.875rem", lineHeight: 1.65 }}>
                {person.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

     {/* Process (Replaced Timeline) */}
      <section style={{ padding: "8rem 3rem", borderBottom: `1px solid ${c.border}`, background: c.surface }}>
        <p style={{ fontFamily: SANS, fontSize: "0.6875rem", letterSpacing: "0.2em", color: c.muted, textTransform: "uppercase", marginBottom: "4rem" }}>
          How we work
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "start" }}>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.05, color: c.fg }}>
            From concept<br />
            <em style={{ color: c.accentText, fontStyle: "italic" }}>to production</em><br />
            scale.
          </h2>

          <div>
            {processSteps.map((step, i) => (
              <div
                key={step.phase}
                style={{
                  display: "grid",
                  gridTemplateColumns: "3rem 1fr",
                  gap: "1.5rem",
                  padding: "1.5rem 0",
                  borderBottom: i < processSteps.length - 1 ? `1px solid ${c.border}` : "none",
                  alignItems: "start",
                }}
              >
                <span style={{ fontFamily: MONO, fontSize: "0.6875rem", color: c.accentText, letterSpacing: "0.05em", marginTop: "0.25rem" }}>
                  {step.phase}
                </span>
                <div>
                  <h4 style={{ fontFamily: SANS, fontSize: "0.9375rem", fontWeight: 600, color: c.fg, marginBottom: "0.375rem" }}>
                    {step.title}
                  </h4>
                  <p style={{ fontFamily: SANS, fontSize: "0.875rem", color: c.muted, lineHeight: 1.6 }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "7rem 3rem", background: c.bg }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "2rem" }}>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 700, letterSpacing: "-0.025em", color: c.fg, lineHeight: 1.1 }}>
            Ready to work<br />
            <em style={{ color: c.accentText, fontStyle: "italic" }}>together?</em>
          </h2>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <button
              onClick={() => { navigate("/careers"); window.scrollTo(0, 0); }}
              style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "transparent", color: c.fg, border: `1px solid ${c.border}`, cursor: "pointer", padding: "0.875rem 1.75rem", borderRadius: 4, fontFamily: SANS, fontSize: "0.875rem" }}
            >
              View Open Roles <ArrowRight size={14} />
            </button>
            <a
              href="mailto:info@codelsafrica.com"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: LIME, color: DARK, padding: "0.875rem 1.75rem", borderRadius: 4, fontFamily: SANS, fontSize: "0.875rem", fontWeight: 600, textDecoration: "none" }}
            >
              Start a conversation <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: "1.75rem 3rem", borderTop: `1px solid ${c.border}`, background: c.bg, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
          <div style={{ width: 22, height: 22, background: LIME, borderRadius: 3, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: DARK, fontSize: "0.65rem", fontWeight: 800, fontFamily: SANS }}>C</span>
          </div>
          <span style={{ fontFamily: SANS, fontSize: "0.8125rem", color: c.muted }}>Codels Africa</span>
        </div>
        <span style={{ fontFamily: SANS, fontSize: "0.75rem", color: c.border }}>© 2025 Codels Africa</span>
      </footer>
    </div>
  );
}