import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      screens: {
        xs: "400px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      fontSize: {
        "heading-h1": [
          "clamp(2.65rem, 4vw, 4.25rem)",
          {
            lineHeight: "clamp(2.75rem, 4vw, 4.5rem)",
            letterSpacing: "-0.14rem",
            fontWeight: "500",
          },
        ],
        "heading-h2": [
          "clamp(2.5rem, 3.7vw, 3.7rem)",
          {
            lineHeight: "clamp(2.75rem, 3.5vw, 4rem)",
            letterSpacing: "-0.14rem",
            fontWeight: "500",
          },
        ],
        "heading-h3": [
          "clamp(2.25rem, 3.5vw, 3.5rem)",
          {
            lineHeight: "clamp(2.5rem, 3.5vw, 4rem)",
            letterSpacing: "-0.14rem",
            fontWeight: "500",
          },
        ],
        "heading-h4": [
          "clamp(2.2rem, 3.1vw, 3.1rem)",
          {
            lineHeight: "clamp(2.5rem, 3.2vw, 3.2rem)",
            letterSpacing: "-0.12rem",
            fontWeight: "400",
          },
        ],
        "heading-h5": [
          "clamp(2rem, 2.6vw, 2.6rem)",
          {
            lineHeight: "clamp(2.5rem, 3vw, 3rem)",
            letterSpacing: "-0.08rem",
            fontWeight: "400",
          },
        ],
        "heading-h6": [
          "clamp(1.5rem, 2vw, 2rem)",
          {
            lineHeight: "clamp(2rem, 2.2vw, 2.2rem)",
            letterSpacing: "-0.06rem",
            fontWeight: "400",
          },
        ],
        "heading-h7": [
          "clamp(1.1rem, 1.4vw, 1.5rem)",
          {
            lineHeight: "clamp(1.6rem, 1.7vw, 1.8rem)",
            letterSpacing: "-0.04rem",
            fontWeight: "400",
          },
        ],
        paragraph: [
          "clamp(1.1rem, 1.14vw, 1.2rem)",
          {
            lineHeight: "clamp(1.7rem, 1.7vw, 1.7rem)",
            letterSpacing: "-0.014rem",
            fontWeight: "400",
          },
        ],
        "paragraph-sm": ["clamp(0.8 rem, 0.8vw, 0.8rem)", {}],
        "paragraph-section": [
          "clamp(1.1rem, 1.35vw, 1.25rem)",
          {
            lineHeight: "clamp(1.5rem, 2vw, 1.75rem)",
            letterSpacing: "0rem",
            fontWeight: "400",
          },
        ],
      },
      padding: {
        "content-sm": "clamp(1.2rem, 2vw, 4rem)",
        content: "clamp(1.5rem,3vw,4rem)",
        "content-lg": "clamp(4rem, 7vw, 9rem)",
      },
      margin: {
        "content-sm": "clamp(2rem, 5vw, 8rem)",
        content: "clamp(2.5rem, 6vw, 8rem)",
        "content-lg": "clamp(4rem, 7vw, 9rem)",
        "content-xl": "clamp(5rem, 8vw, 10rem)",
      },
      maxWidth: {
        max: "1440px",
        container: "1300px",
        "sub-container": "1200px",
        "para-xs": "20rem",
        "para-sm": "35rem",
        para: "40rem",
        "para-lg": "50rem",
        "para-xl": "60rem",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
