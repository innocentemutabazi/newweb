import { useState } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { useTheme } from "../page";
import { getC, SERIF, SANS, MONO, LIME, DARK } from "../components/theme";

const openRoles = [
  // {
  //   id: 1,
  //   title: "Senior Backend Engineer",
  //   team: "Engineering",
  //   location: "Nairobi · Remote",
  //   type: "Full-time",
  //   description:
  //     "Design and build scalable backend systems for our clients' most complex products. You'll work across microservices, event-driven architectures, and high-throughput data pipelines.",
  //   requirements: [
  //     "5+ years of backend engineering experience",
  //     "Deep expertise in Node.js, Python, or Go",
  //     "Experience with distributed systems and event streaming (Kafka, RabbitMQ)",
  //     "Strong database design skills (PostgreSQL, Redis)",
  //     "Cloud infrastructure experience (AWS, GCP, or Azure)",
  //   ],
  // },
  // {
  //   id: 2,
  //   title: "Staff Frontend Engineer",
  //   team: "Engineering",
  //   location: "Lagos · Remote",
  //   type: "Full-time",
  //   description:
  //     "Lead the frontend architecture on large-scale SaaS products. Define component systems, establish performance standards, and mentor a team of engineers across multiple client engagements.",
  //   requirements: [
  //     "7+ years of frontend engineering experience",
  //     "Deep expertise in React and TypeScript",
  //     "Experience building and maintaining component libraries",
  //     "Track record of frontend performance optimization",
  //     "Strong opinions about accessibility and web standards",
  //   ],
  // },
];

const environment = [
  { label: "Engineering First", detail: "A culture led by builders. No artificial deadlines or status theater, just a commitment to shipping quality systems." },
  { label: "High Autonomy", detail: "We hire experts and get out of their way. You own the architecture, the technical decisions, and the outcomes." },
  { label: "Deep Work", detail: "We protect your calendar. Expect minimal meetings, asynchronous communication, and long stretches of uninterrupted time to build." },
  { label: "Scale & Impact", detail: "The code you write here won't sit on a shelf. It will serve millions of users and power major enterprises across Africa." },
];

const process = [
  { step: "01", title: "Apply", detail: "Send us your CV and a short note on what you've built and why you're interested." },
  { step: "02", title: "Technical screen", detail: "A 45-minute conversation with an engineer about your background and approach to problems." },
  { step: "03", title: "Technical exercise", detail: "A paid, async take-home that reflects actual work — not whiteboard puzzles." },
  { step: "04", title: "Team interviews", detail: "Meet the team you'd be working with. Two conversations, typically across one week." },
  { step: "05", title: "Offer", detail: "We move fast. Offer within 48 hours of final interviews, with clear terms and no ambiguity." },
];

export function Careers() {
  const { isDark } = useTheme();
  const c = getC(isDark);
  const [expanded, setExpanded] = useState<number | null>(null);

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
          Careers at Codels Africa
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
            <span style={{ display: "block", color: c.fg }}>Build the</span>
            <span style={{ display: "block", color: c.accentText, fontStyle: "italic" }}>future</span>
            <span style={{ display: "block", color: c.fg }}>with us.</span>
          </h1>
          <div>
            <p style={{ fontFamily: SANS, color: c.muted, fontSize: "1rem", lineHeight: 1.75, marginBottom: "1.5rem" }}>
              We're a team of engineers who care deeply about the craft. We work on hard problems, ship production systems, and build the kind of codebases we'd want to inherit.
            </p>
            <p style={{ fontFamily: SANS, color: c.muted, fontSize: "1rem", lineHeight: 1.75 }}>
              If you've spent your career building things that actually work — and you want to do more of that — we'd like to talk.
            </p>
          </div>
        </div>
      </section>

      {/* Open roles with Empty State Logic */}
      <section style={{ padding: "8rem 3rem", borderBottom: `1px solid ${c.border}`, background: c.surface }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "4rem" }}>
          <p style={{ fontFamily: SANS, fontSize: "0.6875rem", letterSpacing: "0.2em", color: c.muted, textTransform: "uppercase" }}>
            Open roles
          </p>
          <span style={{ fontFamily: MONO, fontSize: "0.6875rem", color: c.accentText, letterSpacing: "0.04em" }}>
            {openRoles.length} positions
          </span>
        </div>

        {openRoles.length > 0 ? (
          <div style={{ borderTop: `1px solid ${c.border}` }}>
            {openRoles.map((role, i) => (
              <RoleRow
                key={role.id}
                role={role}
                open={expanded === i}
                onToggle={() => setExpanded(expanded === i ? null : i)}
                c={c}
              />
            ))}
          </div>
        ) : (
          <div style={{ borderTop: `1px solid ${c.border}`, paddingTop: "4rem" }}>
            <h3 style={{ fontFamily: SERIF, fontSize: "1.5rem", color: c.fg, marginBottom: "1rem", letterSpacing: "-0.01em" }}>
              No open positions right now.
            </h3>
            <p style={{ fontFamily: SANS, color: c.muted, fontSize: "0.9375rem", lineHeight: 1.7, maxWidth: 600, marginBottom: "2rem" }}>
              We aren't actively hiring at this exact moment, but our team is always evolving. If you build systems that scale and want to be on our radar for future technical roles, we'd still love to hear from you.
            </p>
            <a
              href="mailto:careers@codelsafrica.com"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                background: "transparent", color: c.fg,
                border: `1px solid ${c.border}`, padding: "0.875rem 1.75rem",
                borderRadius: 4, fontFamily: SANS, fontSize: "0.875rem",
                textDecoration: "none", transition: "border-color 0.2s"
              }}
            >
              Send us your CV <ArrowRight size={14} />
            </a>
          </div>
        )}
      </section>

      {/* Environment (Replaced Benefits) */}
      <section style={{ padding: "8rem 3rem", borderBottom: `1px solid ${c.border}`, background: c.bg }}>
        <p style={{ fontFamily: SANS, fontSize: "0.6875rem", letterSpacing: "0.2em", color: c.muted, textTransform: "uppercase", marginBottom: "4rem" }}>
          The Environment
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "start" }}>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1, color: c.fg }}>
            Conditions for doing<br />
            your{" "}
            <em style={{ color: c.accentText, fontStyle: "italic" }}>best work.</em>
          </h2>
          <div>
            {environment.map((env, i) => (
              <div
                key={env.label}
                style={{
                  display: "grid",
                  gridTemplateColumns: "6rem 1fr",
                  gap: "1.5rem",
                  padding: "1.375rem 0",
                  borderBottom: i < environment.length - 1 ? `1px solid ${c.border}` : "none",
                  alignItems: "baseline",
                }}
              >
                <span style={{ fontFamily: MONO, fontSize: "0.6875rem", color: c.accentText, letterSpacing: "0.04em", lineHeight: 1.6 }}>{env.label}</span>
                <span style={{ fontFamily: SANS, fontSize: "0.9375rem", color: c.fg, lineHeight: 1.6 }}>{env.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: "8rem 3rem", borderBottom: `1px solid ${c.border}`, background: c.surface }}>
        <p style={{ fontFamily: SANS, fontSize: "0.6875rem", letterSpacing: "0.2em", color: c.muted, textTransform: "uppercase", marginBottom: "4rem" }}>
          How we hire
        </p>
        <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.05, color: c.fg, marginBottom: "4rem", maxWidth: 480 }}>
          Straightforward.<br />
          <em style={{ color: c.accentText, fontStyle: "italic" }}>No surprises.</em>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 1, background: c.border }}>
          {process.map((p) => (
            <div key={p.step} style={{ background: c.surface, padding: "2.5rem 2rem" }}>
              <span style={{ fontFamily: MONO, fontSize: "0.6875rem", color: c.accentText, letterSpacing: "0.06em", display: "block", marginBottom: "1.5rem" }}>
                {p.step}
              </span>
              <p style={{ fontFamily: SERIF, fontSize: "1.125rem", fontWeight: 700, color: c.fg, marginBottom: "0.875rem", letterSpacing: "-0.01em" }}>
                {p.title}
              </p>
              <p style={{ fontFamily: SANS, fontSize: "0.8125rem", color: c.muted, lineHeight: 1.7 }}>
                {p.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Culture image */}
      <section style={{ borderBottom: `1px solid ${c.border}`, background: "#080808" }}>
        <div style={{ position: "relative", height: 400, overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=500&fit=crop&auto=format"
            alt="Codels Africa team working together"
            style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.4) saturate(0.7)", display: "block" }}
          />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", padding: "0 3rem" }}>
            <p
              style={{
                fontFamily: SERIF,
                fontSize: "clamp(1.5rem, 4vw, 3.5rem)",
                fontStyle: "italic",
                color: "#EDEBE3",
                maxWidth: 700,
                lineHeight: 1.25,
                letterSpacing: "-0.015em",
              }}
            >
              "We hire engineers who care about outcomes, not just output. The quality of the system when we leave is the only metric that matters."
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "7rem 3rem", background: c.bg }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "2rem" }}>
          <div>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 700, letterSpacing: "-0.025em", color: c.fg, lineHeight: 1.1, marginBottom: "0.75rem" }}>
              Don't see the right role?
            </h2>
            <p style={{ fontFamily: SANS, color: c.muted, fontSize: "0.9375rem", lineHeight: 1.7 }}>
              We're always looking for exceptional engineers. Send us your work.
            </p>
          </div>
          <a
            href="mailto:careers@codelsafrica.com"
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              background: LIME, color: DARK,
              padding: "0.9375rem 1.875rem", borderRadius: 4,
              fontFamily: SANS, fontSize: "0.875rem", fontWeight: 600,
              textDecoration: "none", flexShrink: 0,
            }}
          >
            careers@codelsafrica.com <ArrowUpRight size={15} />
          </a>
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

function RoleRow({
  role, open, onToggle, c,
}: {
  role: (typeof openRoles)[0];
  open: boolean;
  onToggle: () => void;
  c: ReturnType<typeof getC>;
}) {
  const [hover, setHover] = useState(false);

  return (
    <div style={{ borderBottom: `1px solid ${c.border}` }}>
      <button
        onClick={onToggle}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          width: "100%", background: "none", border: "none", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "1.875rem 0", textAlign: "left",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
          <span
            style={{
              fontFamily: SANS,
              fontSize: "clamp(1rem, 1.8vw, 1.25rem)",
              fontWeight: 400,
              color: open || hover ? c.accentText : c.fg,
              transition: "color 0.25s",
              letterSpacing: "-0.01em",
            }}
          >
            {role.title}
          </span>
          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <span style={{ fontFamily: MONO, fontSize: "0.625rem", color: c.muted, letterSpacing: "0.06em", textTransform: "uppercase" }}>{role.team}</span>
            <span style={{ width: 3, height: 3, borderRadius: "50%", background: c.border, flexShrink: 0, display: "inline-block" }} />
            <span style={{ fontFamily: MONO, fontSize: "0.625rem", color: c.muted, letterSpacing: "0.06em", textTransform: "uppercase" }}>{role.location}</span>
            <span style={{ width: 3, height: 3, borderRadius: "50%", background: c.border, flexShrink: 0, display: "inline-block" }} />
            <span style={{ fontFamily: MONO, fontSize: "0.625rem", color: c.muted, letterSpacing: "0.06em", textTransform: "uppercase" }}>{role.type}</span>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexShrink: 0 }}>
          {open && (
            <a
              href="mailto:careers@codelsafrica.com"
              onClick={(e) => e.stopPropagation()}
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.375rem",
                background: LIME, color: DARK,
                padding: "0.5rem 1rem", borderRadius: 4,
                fontFamily: SANS, fontSize: "0.75rem", fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Apply <ArrowUpRight size={12} />
            </a>
          )}
          <div
            style={{
              width: 30, height: 30, borderRadius: "50%",
              border: `1px solid ${open ? c.accentText : c.border}`,
              display: "flex", alignItems: "center", justifyContent: "center",
              color: open ? c.accentText : c.muted,
              transition: "border-color 0.25s, color 0.25s",
            }}
          >
            <ArrowRight size={12} style={{ transform: open ? "rotate(90deg)" : "rotate(0deg)", transition: "transform 0.25s" }} />
          </div>
        </div>
      </button>

      {open && (
        <div style={{ paddingBottom: "2.5rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }}>
          <p style={{ fontFamily: SANS, color: c.muted, lineHeight: 1.8, fontSize: "0.9375rem", margin: 0 }}>
            {role.description}
          </p>
          <div>
            <p style={{ fontFamily: SANS, fontSize: "0.6875rem", letterSpacing: "0.15em", color: c.muted, textTransform: "uppercase", marginBottom: "1rem" }}>
              What we're looking for
            </p>
            {role.requirements.map((req) => (
              <div key={req} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem", fontFamily: SANS, fontSize: "0.875rem", color: c.fg, marginBottom: "0.625rem", lineHeight: 1.6 }}>
                <div style={{ width: 4, height: 4, borderRadius: "50%", background: LIME, flexShrink: 0, marginTop: "0.5em" }} />
                {req}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}