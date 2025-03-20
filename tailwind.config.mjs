/** @type {import('tailwindcss').Config} */
import { createFluidValue } from "./src/styles/createFluidValue.ts";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx}"],
  safelist: [
    {
      pattern: /(bg|text)-(primary)-(blue|red|yellow)-[1-4]/,
    },
  ],
  theme: {
    screens: {
      xs: "375px",
      sm: "639px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1535px",
      tablet: "640px",
      laptop: "1024px",      desktop: "1280px",
    },
    spacing: {
      0: "0",
      1: createFluidValue(8, 10),
      2: createFluidValue(16, 20),
      3: createFluidValue(24, 30),
      4: createFluidValue(32, 40),
      5: createFluidValue(40, 50),
      7: createFluidValue(56, 75),
      8: createFluidValue(50, 100),
      9: createFluidValue(75, 150),
      10: createFluidValue(125, 175),
      11: createFluidValue(125, 200),
    },
    extend: {
      borderRadius: {
        "2xl": "calc(var(--radius) + 4px)",
        xl: "calc(var(--radius) + 2px)",
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
        "primary-blue-1": "var(--primary-blue-1)",
        "primary-blue-2": "var(--primary-blue-2)",
        "primary-blue-3": "var(--primary-blue-3)",
        "primary-blue-4": "var(--primary-blue-4)",
        "primary-red-1": "var(--primary-red-1)",
        "primary-red-2": "var(--primary-red-2)",
        "primary-red-3": "var(--primary-red-3)",
        "primary-red-4": "var(--primary-red-4)",
        "primary-yellow-1": "var(--primary-yellow-1)",
        "primary-yellow-2": "var(--primary-yellow-2)",
        "primary-yellow-3": "var(--primary-yellow-3)",
        "primary-yellow-4": "var(--primary-yellow-4)",
        "secondary-green-1": "var(--secondary-green-1)",
        "secondary-green-2": "var(--secondary-green-2)",
        "secondary-green-3": "var(--secondary-green-3)",
        "secondary-green-4": "var(--secondary-green-4)",
        "tertiary-purple-1": "var(--tertiary-purple-1)",
        "tertiary-purple-2": "var(--tertiary-purple-2)",
        "tertiary-purple-3": "var(--tertiary-purple-3)",
        "tertiary-purple-4": "var(--tertiary-purple-4)",
        "tertiary-black-1": "var(--tertiary-black-1)",
        "tertiary-black-2": "var(--tertiary-black-2)",
        "tertiary-black-3": "var(--tertiary-black-3)",
        "tertiary-black-4": "var(--tertiary-black-4)",
        "tertiary-white-1": "var(--tertiary-white-1)",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        heading: "var(--font-heading)",
        body: "var(--font-body)",
        "donate-form": "var(--font-donate-form)",
      },
      fontSize: {
        base: "var(--font-size-sm)",
        sm: "var(--font-size-sm)",
        md: "var(--font-size-md)",
        lg: "var(--font-size-lg)",
        xl: "var(--font-size-xl)",
        "2xl": "var(--font-size-2xl)",
        "3xl": "var(--font-size-3xl)",
        "4xl": "var(--font-size-4xl)",
      },
      aspectRatio: {
        mobile: "16 / 9",
        desktop: "1920 / 1080",
      },
      keyframes: {
        enter: {
          from: {
            scale: "1",
          },
          to: {
            scale: "1",
          },
        },
        exit: {
          from: {
            scale: "1.2",
          },
          to: {
            scale: "0.1",
          },
        },
        accordionDown: {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        accordionUp: {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        fadeIn: {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
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
        "slide-right": {
          "0%": { transform: "translateX(-100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "slide-right": "slide-right 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
