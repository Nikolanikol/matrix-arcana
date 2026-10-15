import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          base: 'rgb(var(--color-bg-base-rgb) / <alpha-value>)',
          surface: 'var(--color-bg-surface)',
        },
        accent: {
          gold: 'var(--color-accent-gold)',
          violet: 'var(--color-accent-violet)',
        },
        ink: {
          primary: 'var(--color-text-primary)',
          muted: 'var(--color-text-muted)',
        },
        border: {
          DEFAULT: 'var(--color-border)',
        },
      },
      fontFamily: {
        heading: ['var(--font-cormorant)', 'Georgia', 'serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        accent: ['var(--font-cinzel)', 'Georgia', 'serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
}

export default config
