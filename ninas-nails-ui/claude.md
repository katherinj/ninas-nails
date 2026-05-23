# Nina's Nails — Claude Code Guide

## Stack

- React 18 + TypeScript + Vite
- Atomic design: atoms → molecules → organisms
- Theme via React context in src/context/ThemeContext.tsx

## Rules

- Always use the useTheme() hook for colors, never hardcode hex values
- Components go in the correct atomic layer (atoms/molecules/organisms)
- Use DM Sans for body, Bodoni Moda for display/headings
- All props must be typed with TypeScript interfaces
- No inline styles except for dynamic theme values
