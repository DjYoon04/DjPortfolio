/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-peach': '#FAD4C0',
        'dark-purple': '#2E144B',
        'plum': '#8338EC',
        'mauve': '#E0BBE4',
        'royal-purple': '#7209B7',
        'soft-pink': '#FFC8DD',
      },
    },
  },
  plugins: [],
}
