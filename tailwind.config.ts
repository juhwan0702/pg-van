import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/containers/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1364FE',
        vermellion: '#FF6155',
        charcoal: '#111111',
        graphite: '#222222',
        blueGray: '#344054',
        steelGray: '#667085',
        slateGray: '#757575',
        mistGray: '#D0D5DD',
      },
      fontFamily: {
        notoSans: ['var(--font-noto-sans)'],
      },
      boxShadow: {
        xs: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
      },
    },
  },
  plugins: [],
};
export default config;
