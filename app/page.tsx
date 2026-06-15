"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router";
import { NavBar } from "./components/NavBar";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Careers } from "./pages/Careers";

// ── Theme context ─────────────────────────────────────────────────────────────
interface ThemeCtx {
  isDark: boolean;
  toggle: () => void;
}

export const ThemeContext = createContext<ThemeCtx>({ isDark: true, toggle: () => {} });
export const useTheme = () => useContext(ThemeContext);

export default function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("codels-theme");
    if (saved) setIsDark(saved === "dark");
  }, []);

  const toggle = () => {
    setIsDark((d) => {
      localStorage.setItem("codels-theme", !d ? "dark" : "light");
      return !d;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggle }}>
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
      </HashRouter>
    </ThemeContext.Provider>
  );
}
