import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // adjust color to match brand color here
      colors: {
        //read more: https://tailwindcss.com/docs/customizing-colors
        primary: {
          '50': 'rgb(var(--color-primary-50) / <alpha-value>)',
          '100': 'rgb(var(--color-primary-100) / <alpha-value>)',
          '200': 'rgb(var(--color-primary-200) / <alpha-value>)',
          '300': 'rgb(var(--color-primary-300) / <alpha-value>)',
          '400': 'rgb(var(--color-primary-400) / <alpha-value>)',
          '500': 'rgb(var(--color-primary-500) / <alpha-value>)',
          '600': 'rgb(var(--color-primary-600) / <alpha-value>)',
          '700': 'rgb(var(--color-primary-700) / <alpha-value>)',
          '800': 'rgb(var(--color-primary-800) / <alpha-value>)',
          '900': 'rgb(var(--color-primary-900) / <alpha-value>)',
          '950': 'rgb(var(--color-primary-950) / <alpha-value>)',
        },
        secondary: colors.orange,
        success: colors.emerald,
        danger: colors.red,
        info: colors.blue,
        warning: colors.yellow,
        gray: colors.gray, // choose your shade of grey (slate, gray, zinc, neutral, stone)
      },

      // add custom animation
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('@tailwindcss/forms')({
      strategy: 'class'
    }),
  ],
} satisfies Config
