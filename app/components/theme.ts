export const SERIF = "'Fraunces', Georgia, serif";
export const SANS = "'DM Sans', system-ui, sans-serif";
export const MONO = "'DM Mono', monospace";

export const LIME = "#C8FF47";
export const DARK = "#0A0A0A";

export interface Colors {
  bg: string;
  surface: string;
  fg: string;
  muted: string;
  border: string;
  lime: string;
  // accent for text/icons — lime on dark, forest green on light
  accentText: string;
  navBg: string;
}

export function getC(isDark: boolean): Colors {
  return isDark
    ? {
        bg: "#0A0A0A",
        surface: "#0E0E0E",
        fg: "#EDEBE3",
        muted: "#6A6A64",
        border: "#1E1E1E",
        lime: LIME,
        accentText: LIME,
        navBg: "rgba(10,10,10,0.95)",
      }
    : {
        bg: "#F7F4EC",
        surface: "#EDE9DC",
        fg: "#0C0C0C",
        muted: "#7A7A74",
        border: "#D8D4C7",
        lime: LIME,
        accentText: "#2D5F00",
        navBg: "rgba(247,244,236,0.95)",
      };
}
