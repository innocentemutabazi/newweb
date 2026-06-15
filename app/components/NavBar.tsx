import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../page";
import { getC, SANS, LIME, DARK } from "./theme";

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function NavBar() {
  const { isDark, toggle } = useTheme();
  const c = getC(isDark);
  const [solid, setSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => setMenuOpen(false), [location.pathname]);

  const handleSectionLink = (id: string) => {
    if (location.pathname === "/") {
      scrollToSection(id);
    } else {
      navigate("/");
      setTimeout(() => scrollToSection(id), 300);
    }
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1.25rem 3rem",
          borderBottom: `1px solid ${solid || menuOpen ? c.border : "transparent"}`,
          background: solid || menuOpen ? c.navBg : "transparent",
          backdropFilter: solid || menuOpen ? "blur(16px)" : "none",
          transition: "background 0.4s, border-color 0.4s",
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.625rem",
            textDecoration: "none",
          }}
        >
          <div
            style={{
              width: 28,
              height: 28,
              background: LIME,
              borderRadius: 4,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ color: DARK, fontSize: "0.75rem", fontWeight: 800, fontFamily: SANS }}>C</span>
          </div>
          <span style={{ fontFamily: SANS, fontSize: "0.875rem", fontWeight: 600, color: c.fg }}>
            Codels Africa
          </span>
        </Link>

        {/* Desktop nav */}
        <div style={{ display: "flex", gap: "0.25rem", alignItems: "center" }}>
          <NavItem label="Work" onClick={() => handleSectionLink("work")} c={c} />
          <NavItem label="Capabilities" onClick={() => handleSectionLink("capabilities")} c={c} />
          <NavPageItem label="About" to="/about" c={c} current={location.pathname} />
          <NavPageItem label="Careers" to="/careers" c={c} current={location.pathname} />

          {/* Divider */}
          <div style={{ width: 1, height: 20, background: c.border, margin: "0 0.75rem" }} />

          {/* Theme toggle */}
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            style={{
              background: "none",
              border: `1px solid ${c.border}`,
              cursor: "pointer",
              width: 34,
              height: 34,
              borderRadius: 4,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: c.muted,
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = c.fg;
              e.currentTarget.style.color = c.fg;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = c.border;
              e.currentTarget.style.color = c.muted;
            }}
          >
            {isDark ? <Sun size={14} /> : <Moon size={14} />}
          </button>

          {/* CTA */}
          <button
            onClick={() => handleSectionLink("contact")}
            style={{
              background: LIME,
              color: DARK,
              border: "none",
              cursor: "pointer",
              padding: "0.5rem 1.25rem",
              borderRadius: 4,
              fontFamily: SANS,
              fontSize: "0.8125rem",
              fontWeight: 600,
              marginLeft: "0.5rem",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Contact Us
          </button>
        </div>
      </nav>
    </>
  );
}

function NavItem({
  label,
  onClick,
  c,
}: {
  label: string;
  onClick: () => void;
  c: ReturnType<typeof getC>;
}) {
  const [hover, setHover] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        fontFamily: SANS,
        fontSize: "0.8125rem",
        color: hover ? c.fg : c.muted,
        padding: "0.375rem 0.75rem",
        borderRadius: 4,
        transition: "color 0.2s",
      }}
    >
      {label}
    </button>
  );
}

function NavPageItem({
  label,
  to,
  c,
  current,
}: {
  label: string;
  to: string;
  c: ReturnType<typeof getC>;
  current: string;
}) {
  const [hover, setHover] = useState(false);
  const active = current === to;
  return (
    <Link
      to={to}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        fontFamily: SANS,
        fontSize: "0.8125rem",
        color: active ? c.fg : hover ? c.fg : c.muted,
        padding: "0.375rem 0.75rem",
        borderRadius: 4,
        textDecoration: "none",
        transition: "color 0.2s",
        borderBottom: active ? `1px solid ${c.accentText}` : "1px solid transparent",
      }}
    >
      {label}
    </Link>
  );
}
