/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/public/steam_240x300-min_3.jpg')",
        'hero-pattern2': "url('/public/steam2.jpg')",
        'hero-pattern3': "url('/public/banner2.jpg')",
      }
    },
  },
  plugins: [],
}

