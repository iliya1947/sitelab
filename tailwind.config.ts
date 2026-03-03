import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
    './styles/**/*.{css}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef7ff',
          100: '#d9ecff',
          500: '#0a84ff',
          700: '#0765c1',
          900: '#00305e'
        }
      },
      boxShadow: {
        card: '0 15px 30px -15px rgba(0, 0, 0, 0.3)'
      }
    }
  },
  plugins: []
};

export default config;
