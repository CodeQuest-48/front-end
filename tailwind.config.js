/** @type {import('tailwindcss').Config} */
import formsPlugin from '@tailwindcss/forms';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#26184a',
        secondary: '#e8d2ff',
        tertiary: '#0f0a1e',
      },
    },
  },
  plugins: [formsPlugin],
};
