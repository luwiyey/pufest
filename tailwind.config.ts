import type {Config} from 'tailwindcss';
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        body: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-bebas-neue)', 'sans-serif'],
        mono: ['var(--font-fira-mono)', 'monospace'],
        headline: ['Inter', 'sans-serif'],
        code: ['monospace'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "enter-from-right": {
          "0%": { opacity: "0", transform: "translateX(200px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "enter-from-left": {
          "0%": { opacity: "0", transform: "translateX(-200px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "exit-to-right": {
          "0%": { opacity: "1", transform: "translateX(0)" },
          "100%": { opacity: "0", transform: "translateX(200px)" },
        },
        "exit-to-left": {
          "0%": { opacity: "1", transform: "translateX(0)" },
          "100%": { opacity: "0", transform: "translateX(-200px)" },
        },
        "spotlight": {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        "typing": {
          "from": { "width": "0" },
          "to": { "width": "100%" }
        },
        "equalizer": {
            "0%, 100%": { "height": "5%" },
            "50%": { "height": "100%" }
        },
        'glitch-anim-1': {
          '0%': { clipPath: 'polygon(0 0, 100% 0, 100% 5%, 0 5%)', opacity: 1 },
          '10%': { clipPath: 'polygon(0 15%, 100% 15%, 100% 20%, 0 20%)' },
          '20%': { clipPath: 'polygon(0 10%, 100% 10%, 100% 20%, 0 20%)' },
          '30%': { clipPath: 'polygon(0 30%, 100% 30%, 100% 35%, 0 35%)' },
          '40%': { clipPath: 'polygon(0 50%, 100% 50%, 100% 55%, 0 55%)' },
          '50%': { clipPath: 'polygon(0 70%, 100% 70%, 100% 75%, 0 75%)' },
          '60%': { clipPath: 'polygon(0 60%, 100% 60%, 100% 70%, 0 70%)' },
          '70%': { clipPath: 'polygon(0 85%, 100% 85%, 100% 90%, 0 90%)' },
          '80%': { clipPath: 'polygon(0 40%, 100% 40%, 100% 45%, 0 45%)' },
          '90%': { clipPath: 'polygon(0 50%, 100% 50%, 100% 55%, 0 55%)' },
          '100%': { clipPath: 'polygon(0 10%, 100% 10%, 100% 15%, 0 15%)', opacity: 1 },
        },
        'glitch-anim-2': {
          '0%': { clipPath: 'polygon(0 95%, 100% 95%, 100% 100%, 0 100%)', opacity: 1 },
          '10%': { clipPath: 'polygon(0 75%, 100% 75%, 100% 80%, 0 80%)' },
          '20%': { clipPath: 'polygon(0 80%, 100% 80%, 100% 90%, 0 90%)' },
          '30%': { clipPath: 'polygon(0 60%, 100% 60%, 100% 65%, 0 65%)' },
          '40%': { clipPath: 'polygon(0 40%, 100% 40%, 100% 45%, 0 45%)' },
          '50%': { clipPath: 'polygon(0 20%, 100% 20%, 100% 25%, 0 25%)' },
          '60%': { clipPath: 'polygon(0 30%, 100% 30%, 100% 40%, 0 40%)' },
          '70%': { clipPath: 'polygon(0 5%, 100% 5%, 100% 10%, 0 10%)' },
          '80%': { clipPath: 'polygon(0 50%, 100% 50%, 100% 55%, 0 55%)' },
          '90%': { clipPath: 'polygon(0 40%, 100% 40%, 100% 45%, 0 45%)' },
          '100%': { clipPath: 'polygon(0 85%, 100% 85%, 100% 90%, 0 90%)', opacity: 1 },
        },
        'spotlight-pan': {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '200% 200%' },
        },
        'plexus-glow': {
          '0%, 100%': { backgroundPosition: '100% 100%, 0% 0%' },
          '50%': { backgroundPosition: '0% 100%, 100% 0%' },
        },
        'particle-drift': {
          '0%': { backgroundPosition: '0 0, 50px 50px' },
          '100%': { backgroundPosition: '50px 0, 0px 50px' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8%)' },
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        "fade-in": "fade-in 0.5s ease-out forwards",
        "fade-in-up": "fade-in-up 0.5s ease-out forwards",
        "spotlight": "spotlight 2s ease .75s 1 forwards",
        "enter-from-left": "enter-from-left 0.5s ease-out forwards",
        "enter-from-right": "enter-from-right 0.5s ease-out forwards",
        "exit-to-left": "exit-to-left 0.5s ease-in forwards",
        "exit-to-right": "exit-to-right 0.5s ease-in forwards",
        "typing": "typing 2s steps(40, end), fade-in 0.5s",
        "equalizer": "equalizer 1.5s ease-in-out infinite",
        'glitch-1': 'glitch-anim-1 1.5s infinite linear alternate-reverse',
        'glitch-2': 'glitch-anim-2 2s infinite linear alternate-reverse',
        'spotlight-pan': 'spotlight-pan 10s linear infinite',
        'plexus-glow': 'plexus-glow 8s ease-in-out infinite',
        'particle-drift': 'particle-drift 30s linear infinite',
        'float': 'float 4s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), addVariablesForColors],
} satisfies Config;
