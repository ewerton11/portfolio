import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // colors: {
    //     dark: '#00101e',
    //   },
    // },
    extend: {
      colors: {
        primary: {
          light: '#6C63FF',
          DEFAULT: '#4A47A3',
          dark: '#00101e',
        },
        mode: {
          dark: '#d4d4d4',
        },
        offWhite: '#e3dbdb',
      },
      fontFamily: {
        robotoMono: ['var(--font-roboto_mono)'],
        robotoMonoItalic: ['var(--font-roboto_mono_light_italic)'],
        roboto: ['var(--font-roboto)'],
        architectsDaughter: ['var(--font-architects_daughter)'],
      },
    },
  },
  plugins: [],
}
export default config
