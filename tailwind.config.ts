import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontSize: {
        '7xl': ['4.5rem', { lineHeight: '1.3' }],
        '6xl': ['3.75rem', { lineHeight: '1.3' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '4xl': ['2.25rem', { lineHeight: '1.3' }],
        '3xl': ['1.875rem', { lineHeight: '2.9rem' }],
      },
      lineHeight: {
        'tight': '0.92',
        'snug': '1.05',
        'normal': '1.5',
        'loose': '1.75',
        'relaxed': '1.5',
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        /*
          Warm amber palette. Grounds are warmed with the accent — a warm accent on a
          green-tinted near-black reads muddy. Mirrors the HSL tokens in index.css.
          `lime` is kept as an alias because ~40 files reference it; its value is amber.
        */
        void: "#020101",
        ground: "#020101",
        ink: "#0F0A05",
        raised: "#0F0A05",
        paper: "#EDE8DC",
        muted: "#988B7A",
        line: "#33291B",
        lime: "#FFB35C",
        signal: "#FFB35C",
        /** Dimmed accent, for dither field ink. Never for type. */
        "signal-dim": "#A8702B",
        "evidence-blue": "#4285F4",
        "evidence-violet": "#673AB7",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 1px)",
        sm: "calc(var(--radius) - 2px)",
      },
      fontFamily: {
        /*
          Matched to constantlabs-showcase. Anton for display (one weight — hierarchy
          comes from size, never weight), Rajdhani for body/UI, Share Tech Mono for
          every label, Changa for Arabic.
        */
        sans: ['Rajdhani', 'Changa', 'system-ui', 'sans-serif'],
        rajdhani: ['Rajdhani', 'Changa', 'sans-serif'],
        heading: ['Anton', 'Impact', 'Arial Narrow', 'sans-serif'],
        display: ['Anton', 'Impact', 'Arial Narrow', 'sans-serif'],
        tech: ['Share Tech Mono', 'ui-monospace', 'monospace'],
        mono: ['Share Tech Mono', 'ui-monospace', 'monospace'],
        compacta: ['AC Compacta', 'Anton', 'Impact', 'sans-serif'],
        serif: ['Instrument Serif', 'Georgia', 'serif'],
        arabic: ['Changa', 'sans-serif'],
      },
      maxWidth: {
        page: "78rem",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
