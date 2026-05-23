export interface ThemeColors {
  // Backgrounds
  bg: string;
  surface: string;

  // Borders
  border: string;
  borderMid: string;

  // Text
  ink: string;
  mid: string;
  muted: string;

  // Pastel fills (used for nail art, card backgrounds, gallery swatches)
  pastelLav: string;
  pastelPink: string;
  pastelBlue: string;
  pastelMint: string;
  pastelGold: string;

  // Deep accents (used for icons, tags, CTAs, headings)
  accentLav: string;
  accentPink: string;
  accentBlue: string;
  accentMint: string;
}

export interface ThemeFonts {
  display: string;
  body: string;
}

export interface ThemeSpacing {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
}

export interface ThemeBorderRadius {
  sm: string;
  md: string;
  lg: string;
  pill: string;
}

export interface Theme {
  name: string;
  colors: ThemeColors;
  fonts: ThemeFonts;
  spacing: ThemeSpacing;
  borderRadius: ThemeBorderRadius;
}

// ─── Default theme (pastel on white) ────────────────────────────────────────

export const defaultTheme: Theme = {
  name: "default",
  colors: {
    bg: "#FFFFFF",
    surface: "#F9F8FC",
    border: "#E8E4EF",
    borderMid: "#D0CBE4",
    ink: "#111018",
    mid: "#6B6580",
    muted: "#A8A4B8",
    pastelLav: "#CEC6F4",
    pastelPink: "#F2C4D8",
    pastelBlue: "#B8D4F8",
    pastelMint: "#B8E8DA",
    pastelGold: "#EDD9C0",
    accentLav: "#9B8FD4",
    accentPink: "#C96FA0",
    accentBlue: "#6094D4",
    accentMint: "#4AADA0",
  },
  fonts: {
    display: "'Bodoni Moda', serif",
    body: "'DM Sans', sans-serif",
  },
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "3rem",
    xxl: "5rem",
  },
  borderRadius: {
    sm: "2px",
    md: "8px",
    lg: "12px",
    pill: "100px",
  },
};

// ─── Warm rose theme ─────────────────────────────────────────────────────────

export const warmTheme: Theme = {
  name: "warm",
  colors: {
    bg: "#FFFCFA",
    surface: "#FDF5F0",
    border: "#EFE4DC",
    borderMid: "#DDC8BC",
    ink: "#18100C",
    mid: "#7A5C50",
    muted: "#B89C94",
    pastelLav: "#F5D8C8",
    pastelPink: "#F5C0C0",
    pastelBlue: "#C8DDD8",
    pastelMint: "#C8E8D8",
    pastelGold: "#EDD9C0",
    accentLav: "#C9856A",
    accentPink: "#C06070",
    accentBlue: "#5A9490",
    accentMint: "#4A9E80",
  },
  fonts: {
    display: "'Bodoni Moda', serif",
    body: "'DM Sans', sans-serif",
  },
  spacing: defaultTheme.spacing,
  borderRadius: defaultTheme.borderRadius,
};

// ─── Midnight dark theme ─────────────────────────────────────────────────────

export const midnightTheme: Theme = {
  name: "midnight",
  colors: {
    bg: "#0F0E11",
    surface: "#161519",
    border: "#2A2830",
    borderMid: "#3A3848",
    ink: "#F5F3F8",
    mid: "#9A96A8",
    muted: "#5C5868",
    pastelLav: "#CEC6F4",
    pastelPink: "#F2C4D8",
    pastelBlue: "#B8D4F8",
    pastelMint: "#B8E8DA",
    pastelGold: "#D4B896",
    accentLav: "#B0A8E8",
    accentPink: "#E090B8",
    accentBlue: "#80B0EC",
    accentMint: "#6AC8B8",
  },
  fonts: {
    display: "'Bodoni Moda', serif",
    body: "'DM Sans', sans-serif",
  },
  spacing: defaultTheme.spacing,
  borderRadius: defaultTheme.borderRadius,
};

// ─── All themes (useful for a theme picker UI) ───────────────────────────────

export const themes: Theme[] = [defaultTheme, warmTheme, midnightTheme];
