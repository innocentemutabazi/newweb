import { useState } from "react";
import { ArrowRight, ArrowUpRight, Plus, Minus } from "lucide-react";
import { useNavigate } from "react-router";
import { useTheme } from "../page";
import { getC, SERIF, SANS, MONO, LIME, DARK } from "../components/theme";

const services = [
  {
    num: "01",
    title: "SaaS Product Development",
    description:
      "End-to-end product development from architecture to production. We build multi-tenant platforms with billing, authentication, and analytics capabilities designed to scale from launch to enterprise adoption.",
    capabilities: [
      "Product architecture & technical strategy",
      "Multi-tenant data modeling & isolation",
      "Billing & subscription management",
      "Enterprise auth & RBAC",
      "Analytics & reporting infrastructure",
      "API design & developer platforms",
    ],
  },
  {
    num: "02",
    title: "Web Application Development",
    description:
      "Production-grade web applications built with modern frameworks. From customer-facing platforms to internal enterprise tools — with performance, accessibility, and security baked in.",
    capabilities: [
      "React, Next.js, TypeScript",
      "Component libraries & design systems",
      "Server-side rendering & optimization",
      "Progressive Web Apps",
      "Web performance engineering",
      "Cross-browser compatibility",
    ],
  },
  {
    num: "03",
    title: "Mobile Application Development",
    description:
      "Cross-platform mobile applications using React Native — native-quality experiences on iOS and Android with shared codebases, offline capabilities, and platform-specific optimizations.",
    capabilities: [
      "React Native architecture",
      "Native module integration",
      "Offline-first data sync",
      "Push notifications & deep linking",
      "App Store deployment",
      "Mobile CI/CD & OTA updates",
    ],
  },
  {
    num: "04",
    title: "Backend & API Development",
    description:
      "Scalable backend systems and API platforms designed for reliability. Microservices, event-driven patterns, and data infrastructure for complex business requirements.",
    capabilities: [
      "RESTful & GraphQL APIs",
      "Microservices architecture",
      "Database design & optimization",
      "Message queues & event streaming",
      "Auth & authorization systems",
      "API documentation",
    ],
  },
  {
    num: "05",
    title: "Cloud Infrastructure & DevOps",
    description:
      "Enterprise cloud infrastructure on AWS, GCP, and Azure. Infrastructure-as-code, CI/CD pipelines, and monitoring systems built for reliability and operational excellence.",
    capabilities: [
      "Cloud architecture & migration",
      "Kubernetes & container orchestration",
      "CI/CD pipeline automation",
      "Infrastructure as Code (Terraform)",
      "Monitoring & observability",
      "Security & compliance frameworks",
    ],
  },
  {
    num: "06",
    title: "AI & Machine Learning Integration",
    description:
      "Production AI implementations including LLM integrations, document intelligence, and recommendation systems — with cost controls, observability, and performance monitoring built in.",
    capabilities: [
      "LLM integration & orchestration",
      "RAG systems & vector databases",
      "Document processing pipelines",
      "Semantic search",
      "AI cost optimization & monitoring",
      "Model evaluation & A/B testing",
    ],
  },
];

const caseStudies = [
  {
    id: 1,
    client: "ProAdvert",
    industry: "Marketing Technology",
    year: "2026",
    title: "AI-Powered Social Media Automation Platform",
    description:
      "A social media automation platform that streamlines posting across TikTok, Instagram, X, and Facebook. It provides engagement analytics and includes AI-powered features such as image/video generation, automated comment replies, and DM management, helping users grow their presence effortlessly.",
    metrics: [
      { label: "Supported Platforms", value: "4" },
      { label: "Automation", value: "AI-Driven" },
      { label: "Analytics", value: "Real-time" },
      { label: "Workflow", value: "Automated" },
    ],
    tech: ["Next.js", "NodeJS", "TypeScript", "Tailwind CSS", "Mistral AI", "Kling AI"],
    imageId: "1611162617474-5b21e879e113", // Extracted just the Unsplash ID
  },
  {
    id: 2,
    client: "CurlySync",
    industry: "Beauty & Wellness Technology",
    year: "2026",
    title: "Beauty Service Booking & Business Management",
    description:
      "A two-sided marketplace connecting clients with beauty professionals. It features location-based salon discovery, real-time appointment booking, and secure payments via Mobile Money and cards. The platform also equips businesses with a dedicated dashboard for staff scheduling, service management, and analytics.",
    metrics: [
      { label: "Active Downloads", value: "25K+" },
      { label: "Salons Onboarded", value: "1.2K+" },
      { label: "Platforms", value: "iOS & Android" },
      { label: "Payments", value: "MoMo & Card" },
    ],
    tech: ["Flutter", "Next.js", "NestJS", "Google Maps", "TypeScript"],
    imageId: "1560066984-138dadb4c035", // Extracted just the Unsplash ID
  }
];

const testimonials = [
  {
    quote:
      "Codels Africa helped us think through architecture before writing a single line of code. That upfront planning saved us months of refactoring.",
    name: "Aisha Nwosu",
    title: "CEO, Finova",
  },
  {
    quote:
      "The offline-first sync engine is one of the best pieces of engineering I've seen — designed for our actual constraints, not ideal conditions.",
    name: "Dr. Samuel Osei",
    title: "CTO, MediTrack",
  },
];

// ── Shared primitives ──────────────────────────────────────────────────────────
function SectionLabel({ children, c }: { children: React.ReactNode; c: ReturnType<typeof getC> }) {
  return (
    <p
      style={{
        fontFamily: SANS,
        fontSize: "0.6875rem",
        letterSpacing: "0.2em",
        color: c.muted,
        textTransform: "uppercase",
        marginBottom: "4rem",
      }}
    >
      {children}
    </p>
  );
}

function DisplayHeading({ children, c }: { children: React.ReactNode; c: ReturnType<typeof getC> }) {
  return (
    <h2
      style={{
        fontFamily: SERIF,
        fontSize: "clamp(2.25rem, 4.5vw, 4rem)",
        fontWeight: 700,
        letterSpacing: "-0.025em",
        lineHeight: 1.05,
        color: c.fg,
        margin: 0,
      }}
    >
      {children}
    </h2>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────
function Hero({ c }: { c: ReturnType<typeof getC> }) {
  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }
  const [hoverWork, setHoverWork] = useState(false);
  const [hoverCap, setHoverCap] = useState(false);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "10rem 3rem 6rem",
        background: c.bg,
        transition: "background 0.4s",
      }}
    >
      <p
        style={{
          fontFamily: SANS,
          fontSize: "0.6875rem",
          letterSpacing: "0.22em",
          color: c.muted,
          textTransform: "uppercase",
          marginBottom: "3rem",
        }}
      >
        Software Engineering · Africa · Est. 2018
      </p>

      <h1
        style={{
          fontFamily: SERIF,
          fontSize: "clamp(3.5rem, 9.5vw, 9.5rem)",
          fontWeight: 700,
          lineHeight: 0.93,
          letterSpacing: "-0.03em",
          margin: 0,
          marginBottom: "4rem",
        }}
      >
        <span style={{ display: "block", color: c.fg }}>We build</span>
        <span style={{ display: "block", color: c.fg }}>software</span>
        <span style={{ display: "block", color: c.accentText, fontStyle: "italic" }}>
          that scales.
        </span>
      </h1>

      <div style={{ display: "flex", gap: "4rem", alignItems: "flex-start", flexWrap: "wrap" }}>
        <p
          style={{
            fontFamily: SANS,
            maxWidth: 380,
            color: c.muted,
            fontSize: "1rem",
            lineHeight: 1.75,
            margin: 0,
          }}
        >
          We partner with startups and enterprises across Africa to architect,
          build, and operate production-grade software — SaaS platforms, mobile
          apps, cloud infrastructure, and AI systems.
        </p>

        <div style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap", paddingTop: "0.25rem" }}>
          <button
            onClick={() => scrollTo("work")}
            onMouseEnter={() => setHoverWork(true)}
            onMouseLeave={() => setHoverWork(false)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              background: LIME,
              color: DARK,
              border: "none",
              cursor: "pointer",
              padding: "0.875rem 1.75rem",
              borderRadius: 4,
              fontFamily: SANS,
              fontSize: "0.875rem",
              fontWeight: 600,
              opacity: hoverWork ? 0.88 : 1,
              transition: "opacity 0.2s",
            }}
          >
            View Our Work <ArrowRight size={14} />
          </button>
          <button
            onClick={() => scrollTo("capabilities")}
            onMouseEnter={() => setHoverCap(true)}
            onMouseLeave={() => setHoverCap(false)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "transparent",
              color: hoverCap ? c.fg : c.muted,
              border: `1px solid ${hoverCap ? c.fg : c.border}`,
              cursor: "pointer",
              padding: "0.875rem 1.75rem",
              borderRadius: 4,
              fontFamily: SANS,
              fontSize: "0.875rem",
              transition: "color 0.2s, border-color 0.2s",
            }}
          >
            Capabilities
          </button>
        </div>
      </div>
    </section>
  );
}

// ── Stats — editorial redesign ────────────────────────────────────────────────
function Stats({ c }: { c: ReturnType<typeof getC> }) {
  const stats = [
    { value: "42+", label: "Products delivered" },
    { value: "28", label: "Active partnerships" },
    { value: "7 yrs", label: "In operation" },
    { value: "14", label: "Countries served" },
    { value: "$40M+", label: "Client revenue generated" },
  ];

  return (
    <section
      style={{
        borderTop: `1px solid ${c.border}`,
        borderBottom: `1px solid ${c.border}`,
        background: c.surface,
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        transition: "background 0.4s",
      }}
    >
      {/* Left: editorial statement */}
      <div
        style={{
          padding: "5rem 4rem 5rem 3rem",
          borderRight: `1px solid ${c.border}`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <p
          style={{
            fontFamily: SANS,
            fontSize: "0.6875rem",
            letterSpacing: "0.2em",
            color: c.muted,
            textTransform: "uppercase",
            marginBottom: "2.5rem",
          }}
        >
          By the numbers
        </p>

        <div>
          <p
            style={{
              fontFamily: SERIF,
              fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
              fontWeight: 400,
              fontStyle: "italic",
              lineHeight: 1.35,
              color: c.fg,
              marginBottom: "2rem",
              letterSpacing: "-0.01em",
            }}
          >
            Seven years of building production software for Africa's fastest-growing companies.
          </p>
          <p
            style={{
              fontFamily: SANS,
              fontSize: "0.9375rem",
              color: c.muted,
              lineHeight: 1.75,
              maxWidth: 360,
            }}
          >
            From seed-stage startups to enterprise modernization — every engagement is measured by the systems we leave behind and the outcomes they create.
          </p>
        </div>

        <div
          style={{
            marginTop: "3rem",
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
          }}
        >
          <div style={{ width: 36, height: 1, background: c.accentText }} />
          <span
            style={{
              fontFamily: SANS,
              fontSize: "0.75rem",
              color: c.muted,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Nairobi · Lagos · Accra
          </span>
        </div>
      </div>

      {/* Right: structured stat list */}
      <div style={{ padding: "5rem 3rem" }}>
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              alignItems: "baseline",
              gap: "1rem",
              padding: "1.375rem 0",
              borderBottom: i < stats.length - 1 ? `1px solid ${c.border}` : "none",
            }}
          >
            <span
              style={{
                fontFamily: SANS,
                fontSize: "0.8125rem",
                color: c.muted,
                letterSpacing: "0.03em",
              }}
            >
              {stat.label}
            </span>
            <span
              style={{
                fontFamily: SERIF,
                fontSize: "clamp(1.75rem, 3vw, 2.75rem)",
                fontWeight: 700,
                color: c.fg,
                letterSpacing: "-0.03em",
                lineHeight: 1,
                textAlign: "right",
              }}
            >
              {stat.value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Capabilities ──────────────────────────────────────────────────────────────
function Capabilities({ c }: { c: ReturnType<typeof getC> }) {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section
      id="capabilities"
      style={{ padding: "8rem 3rem", borderTop: `1px solid ${c.border}`, background: c.bg, transition: "background 0.4s" }}
    >
      <SectionLabel c={c}>01 — Capabilities</SectionLabel>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "6rem", marginBottom: "5rem", alignItems: "end" }}>
        <DisplayHeading c={c}>
          What we{" "}
          <em style={{ color: c.accentText, fontStyle: "italic" }}>build</em>
        </DisplayHeading>
        <p style={{ fontFamily: SANS, color: c.muted, fontSize: "1rem", lineHeight: 1.75, maxWidth: 480, marginBottom: "0.25rem" }}>
          Full-stack engineering services across product development, infrastructure, and AI.
          Senior teams, architecture-first thinking, and production-ready delivery.
        </p>
      </div>

      <div style={{ borderTop: `1px solid ${c.border}` }}>
        {services.map((service, i) => (
          <ServiceRow
            key={service.num}
            service={service}
            open={expanded === i}
            onToggle={() => setExpanded(expanded === i ? null : i)}
            c={c}
          />
        ))}
      </div>
    </section>
  );
}

function ServiceRow({
  service, open, onToggle, c,
}: {
  service: (typeof services)[0];
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
          padding: "1.875rem 0", color: c.fg, textAlign: "left",
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", gap: "2.5rem" }}>
          <span style={{ fontFamily: MONO, fontSize: "0.6875rem", color: c.muted, minWidth: 24, letterSpacing: "0.04em" }}>
            {service.num}
          </span>
          <span
            style={{
              fontFamily: SANS,
              fontSize: "clamp(1.0625rem, 2vw, 1.375rem)",
              fontWeight: 400,
              color: open || hover ? c.accentText : c.fg,
              transition: "color 0.25s",
              letterSpacing: "-0.01em",
            }}
          >
            {service.title}
          </span>
        </div>
        <div
          style={{
            width: 30, height: 30, borderRadius: "50%",
            border: `1px solid ${open ? c.accentText : c.border}`,
            display: "flex", alignItems: "center", justifyContent: "center",
            color: open ? c.accentText : c.muted, flexShrink: 0,
            transition: "border-color 0.25s, color 0.25s",
          }}
        >
          {open ? <Minus size={12} /> : <Plus size={12} />}
        </div>
      </button>

      {open && (
        <div style={{ paddingBottom: "2.5rem", paddingLeft: "calc(24px + 2.5rem)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }}>
          <p style={{ fontFamily: SANS, color: c.muted, lineHeight: 1.8, fontSize: "0.9375rem", margin: 0 }}>
            {service.description}
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.625rem 1.5rem", alignContent: "start" }}>
            {service.capabilities.map((cap) => (
              <div key={cap} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem", fontFamily: SANS, fontSize: "0.8125rem", color: c.muted }}>
                <div style={{ width: 4, height: 4, borderRadius: "50%", background: LIME, flexShrink: 0, marginTop: "0.45em" }} />
                {cap}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ── Work ──────────────────────────────────────────────────────────────────────
function Work({ c }: { c: ReturnType<typeof getC> }) {
  return (
    <section
      id="work"
      style={{ padding: "8rem 3rem", borderTop: `1px solid ${c.border}`, background: c.surface, transition: "background 0.4s" }}
    >
      <SectionLabel c={c}>02 — Work</SectionLabel>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "5rem" }}>
        <DisplayHeading c={c}>
          Selected{" "}
          <em style={{ color: c.accentText, fontStyle: "italic" }}>projects</em>
        </DisplayHeading>
        <p style={{ fontFamily: SANS, color: c.muted, fontSize: "0.875rem", maxWidth: 280, lineHeight: 1.7, textAlign: "right" }}>
          Engineering engagements across fintech, healthcare, and logistics — systems serving real users at scale.
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 1, background: c.border }}>
        {caseStudies.map((cs, i) => (
          <CaseStudyRow key={cs.id} cs={cs} flip={i % 2 !== 0} c={c} />
        ))}
      </div>
    </section>
  );
}

function CaseStudyRow({ cs, flip, c }: { cs: (typeof caseStudies)[0]; flip: boolean; c: ReturnType<typeof getC> }) {
  return (
    <div style={{ background: c.bg, display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: 440 }}>
      <div style={{ order: flip ? 1 : 0, overflow: "hidden", position: "relative", background: "#0D0D0D" }}>
        <img
          src={`https://images.unsplash.com/photo-${cs.imageId}?w=800&h=500&fit=crop&auto=format`}
          alt={cs.title}
          style={{
            width: "100%", height: "100%", objectFit: "cover",
            filter: "brightness(0.45) saturate(0.6)",
            transition: "transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94), filter 0.4s",
            display: "block",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; e.currentTarget.style.filter = "brightness(0.6) saturate(0.8)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.filter = "brightness(0.45) saturate(0.6)"; }}
        />
        <div style={{ position: "absolute", bottom: "1.75rem", left: "1.75rem", fontFamily: SANS, fontSize: "0.6875rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(237,235,227,0.5)" }}>
          {cs.industry} · {cs.year}
        </div>
      </div>

      <div style={{ order: flip ? 0 : 1, padding: "3.5rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.75rem" }}>
            <span style={{ fontFamily: SANS, fontSize: "0.875rem", fontWeight: 600, color: c.accentText }}>{cs.client}</span>
            <ArrowUpRight size={16} color={c.muted} />
          </div>
          <h3 style={{ fontFamily: SERIF, fontSize: "clamp(1.25rem, 2.5vw, 1.875rem)", fontWeight: 700, letterSpacing: "-0.015em", lineHeight: 1.15, color: c.fg, marginBottom: "1.25rem" }}>
            {cs.title}
          </h3>
          <p style={{ fontFamily: SANS, color: c.muted, fontSize: "0.875rem", lineHeight: 1.75, marginBottom: "2rem" }}>
            {cs.description}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem", marginBottom: "2.5rem" }}>
            {cs.tech.map((t) => (
              <span key={t} style={{ padding: "0.25rem 0.625rem", border: `1px solid ${c.border}`, fontFamily: MONO, fontSize: "0.625rem", color: c.muted, borderRadius: 2, letterSpacing: "0.04em" }}>
                {t}
              </span>
            ))}
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
          {cs.metrics.map((m) => (
            <div key={m.label}>
              <div style={{ fontFamily: SERIF, fontSize: "2rem", fontWeight: 700, color: c.fg, letterSpacing: "-0.025em", marginBottom: "0.125rem" }}>{m.value}</div>
              <div style={{ fontFamily: SANS, fontSize: "0.6875rem", color: c.muted, letterSpacing: "0.06em", textTransform: "uppercase" }}>{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Philosophy ────────────────────────────────────────────────────────────────
function Philosophy({ c }: { c: ReturnType<typeof getC> }) {
  return (
    <section
      id="philosophy"
      style={{ padding: "8rem 3rem", borderTop: `1px solid ${c.border}`, background: c.bg, transition: "background 0.4s" }}
    >
      <SectionLabel c={c}>03 — Philosophy</SectionLabel>

      <div style={{ borderTop: `1px solid ${c.border}`, borderBottom: `1px solid ${c.border}`, padding: "4rem 0", marginBottom: "6rem" }}>
        <p style={{ fontFamily: SERIF, fontSize: "clamp(1.5rem, 3.5vw, 3rem)", fontWeight: 400, fontStyle: "italic", lineHeight: 1.3, color: c.fg, maxWidth: 820, letterSpacing: "-0.015em" }}>
          "Engineering is a discipline, not a commodity. Before we write code, we understand the problem — its constraints, its growth trajectory, its{" "}
          <span style={{ color: c.accentText }}>failure modes.</span>"
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", marginBottom: "7rem" }}>
        <div>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1, color: c.fg, marginBottom: "2rem" }}>
            Senior engineering<br />teams. Architecture-<br />first thinking.
          </h2>
          <p style={{ fontFamily: SANS, color: c.muted, lineHeight: 1.8, fontSize: "0.9375rem", marginBottom: "1.5rem" }}>
            Our teams have shipped systems serving millions of users across Africa. We apply that experience to every engagement — whether a seed-stage startup or an enterprise modernization project.
          </p>
          <p style={{ fontFamily: SANS, color: c.muted, lineHeight: 1.8, fontSize: "0.9375rem" }}>
            We don't hand off requirements to junior developers. Every engagement is led by engineers who have solved the hard problems before.
          </p>
        </div>
        <div>
          <p style={{ fontFamily: SANS, fontSize: "0.6875rem", letterSpacing: "0.18em", color: c.muted, textTransform: "uppercase", marginBottom: "2rem" }}>
            Engineering Principles
          </p>
          {[
            "Architecture-first approach to every engagement",
            "Production-ready code with comprehensive testing",
            "Performance and scalability designed in from day one",
            "Security and compliance as engineering requirements",
            "Maintainable codebases built for long-term evolution",
            "Transparent communication aligned with business goals",
          ].map((p, i) => (
            <div key={i} style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start", padding: "1.125rem 0", borderBottom: `1px solid ${c.border}` }}>
              <span style={{ fontFamily: MONO, fontSize: "0.625rem", color: c.accentText, marginTop: "0.2em", flexShrink: 0 }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span style={{ fontFamily: SANS, fontSize: "0.9375rem", color: c.fg, lineHeight: 1.6 }}>{p}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div style={{ borderTop: `1px solid ${c.border}`, paddingTop: "5rem" }}>
        <p style={{ fontFamily: SANS, fontSize: "0.6875rem", letterSpacing: "0.18em", color: c.muted, textTransform: "uppercase", marginBottom: "3.5rem" }}>
          Client perspectives
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem" }}>
          {testimonials.map((t) => (
            <div key={t.name}>
              <p style={{ fontFamily: SERIF, fontSize: "clamp(1.0625rem, 1.8vw, 1.375rem)", fontStyle: "italic", lineHeight: 1.6, color: c.fg, marginBottom: "2rem" }}>
                "{t.quote}"
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div style={{ width: 1, height: 36, background: c.accentText }} />
                <div>
                  <p style={{ fontFamily: SANS, fontSize: "0.875rem", fontWeight: 500, color: c.fg, marginBottom: "0.125rem" }}>{t.name}</p>
                  <p style={{ fontFamily: SANS, fontSize: "0.75rem", color: c.muted }}>{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Contact ───────────────────────────────────────────────────────────────────
function Contact({ c }: { c: ReturnType<typeof getC> }) {
  const [hover, setHover] = useState(false);
  return (
    <section
      id="contact"
      style={{ padding: "8rem 3rem 6rem", borderTop: `1px solid ${c.border}`, background: c.surface, transition: "background 0.4s" }}
    >
      <SectionLabel c={c}>04 — Contact</SectionLabel>

      <h2
        style={{ fontFamily: SERIF, fontSize: "clamp(3.5rem, 10vw, 9rem)", fontWeight: 700, letterSpacing: "-0.035em", lineHeight: 0.9, marginBottom: "5rem" }}
      >
        <span style={{ color: c.fg, display: "block" }}>Let's build</span>
        <span style={{ color: c.accentText, fontStyle: "italic", display: "block" }}>something</span>
        <span style={{ color: c.fg, display: "block" }}>great.</span>
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "5rem", alignItems: "end", borderTop: `1px solid ${c.border}`, paddingTop: "4rem" }}>
        <div>
          <p style={{ fontFamily: SANS, color: c.muted, lineHeight: 1.8, marginBottom: "2.5rem", maxWidth: 400, fontSize: "0.9375rem" }}>
            We work with organizations that need serious engineering expertise. Tell us what you're building and we'll schedule a discovery call within 24 hours.
          </p>
          <a
            href="mailto:hello@codelsafrica.com"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              background: LIME, color: DARK,
              padding: "0.9375rem 1.875rem", borderRadius: 4,
              fontFamily: SANS, fontSize: "0.875rem", fontWeight: 600,
              textDecoration: "none", opacity: hover ? 0.88 : 1, transition: "opacity 0.2s",
            }}
          >
            info@codelsafrica.com <ArrowUpRight size={15} />
          </a>
        </div>

        <div>
          <p style={{ fontFamily: SANS, fontSize: "0.6875rem", letterSpacing: "0.15em", color: c.muted, textTransform: "uppercase", marginBottom: "1rem" }}>Offices</p>
          {["Kigali, Rwanda"].map((loc) => (
            <p key={loc} style={{ fontFamily: SANS, fontSize: "0.9375rem", color: c.fg, marginBottom: "0.375rem" }}>{loc}</p>
          ))}
        </div>

        <div>
          <p style={{ fontFamily: SANS, fontSize: "0.6875rem", letterSpacing: "0.15em", color: c.muted, textTransform: "uppercase", marginBottom: "0.75rem" }}>First response</p>
          <div style={{ fontFamily: SERIF, fontSize: "3rem", fontWeight: 700, color: c.accentText, letterSpacing: "-0.025em", lineHeight: 1, marginBottom: "0.375rem" }}>&lt;24h</div>
          <p style={{ fontFamily: SANS, color: c.muted, fontSize: "0.75rem" }}>Guaranteed</p>
        </div>
      </div>
    </section>
  );
}

function Footer({ c }: { c: ReturnType<typeof getC> }) {
  const navigate = useNavigate();
  return (
    <footer style={{ padding: "1.75rem 3rem", borderTop: `1px solid ${c.border}`, background: c.bg, display: "flex", alignItems: "center", justifyContent: "space-between", transition: "background 0.4s" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
        <div style={{ width: 22, height: 22, background: LIME, borderRadius: 3, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ color: DARK, fontSize: "0.65rem", fontWeight: 800, fontFamily: SANS }}>C</span>
        </div>
        <span style={{ fontFamily: SANS, fontSize: "0.8125rem", color: c.muted }}>Codels Africa</span>
      </div>
      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        {[["About", "/about"], ["Careers", "/careers"]].map(([label, path]) => (
          <button
            key={label}
            onClick={() => { navigate(path); window.scrollTo(0, 0); }}
            style={{ background: "none", border: "none", cursor: "pointer", fontFamily: SANS, fontSize: "0.75rem", color: c.muted, padding: 0 }}
          >
            {label}
          </button>
        ))}
        <span style={{ fontFamily: SANS, fontSize: "0.75rem", color: c.border }}>© 2025 Codels Africa</span>
      </div>
    </footer>
  );
}

export function Home() {
  const { isDark } = useTheme();
  const c = getC(isDark);

  return (
    <div style={{ background: c.bg, color: c.fg, transition: "background 0.4s, color 0.4s" }}>
      <Hero c={c} />
      <Stats c={c} />
      <Capabilities c={c} />
      <Work c={c} />
      <Philosophy c={c} />
      <Contact c={c} />
      <Footer c={c} />
    </div>
  );
}
