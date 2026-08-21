import type { Config } from "tailwindcss";

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
        'tight': '1.6',
        'snug': '1.375',
        'normal': '1.5',
        'loose': '1.75',
        'relaxed': '1.625',
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
        // ConstantSEO brand colors (SEO Sherpa style)
        ink: "#101414",
        paper: "#F4F1E8",
        acid: "#D9FF4A",
        signal: "#37D5C8",
        ember: "#FF6542",
        purple: {
          50: '#f5f0ff',
          100: '#ede5ff',
          200: '#d4bfff',
          300: '#b794f6',
          400: '#9f67f8',
          500: '#7143E0',
          600: '#5a2dcc',
          700: '#4a22b0',
          800: '#2B124C',
          900: '#1a0a30',
        },
        gold: {
          50: '#fffdf0',
          100: '#fff8d6',
          200: '#fff0a8',
          300: '#ffe66e',
          400: '#FECD4D',
          500: '#e5b030',
          600: '#c49020',
          700: '#9a7018',
          800: '#6e5010',
          900: '#4a3608',
        },
        mint: {
          50: '#f0fdf7',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#64DEA3',
          400: '#34d399',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 1px)",
        sm: "calc(var(--radius) - 2px)",
      },
      fontFamily: {
        sans: ['Inter Tight', 'system-ui', 'sans-serif'],
        heading: ['Anton', 'Impact', 'sans-serif'],
        serif: ['Instrument Serif', 'Georgia', 'serif'],
        arabic: ['Noto Kufi Arabic', 'sans-serif'],
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
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
