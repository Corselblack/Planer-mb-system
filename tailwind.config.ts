import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dark Planner palette (inspired by the original)
        dp: {
          bg: {
            primary: '#0D1117',    // Main background
            secondary: '#161B22',  // Cards, sidebar
            tertiary: '#1C2333',   // Elevated surfaces
            hover: '#21262D',      // Hover states
          },
          accent: {
            cyan: '#00BCD4',       // Primary accent
            blue: '#2196F3',       // Secondary accent
            green: '#4CAF50',      // Success / published
            yellow: '#FFC107',     // Warning / scheduled
            orange: '#FF9800',     // In production
            red: '#F44336',        // Error / overdue
            purple: '#9C27B0',     // Ready
          },
          text: {
            primary: '#E6EDF3',    // Main text
            secondary: '#8B949E',  // Muted text
            tertiary: '#6E7681',   // Very muted
          },
          border: {
            primary: '#30363D',    // Main borders
            secondary: '#21262D',  // Subtle borders
            accent: '#00BCD4',     // Accent borders
          },
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-12px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
