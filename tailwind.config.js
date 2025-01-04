/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', // додай HTML файл
    './src/**/*.{js,jsx,ts,tsx}', // додай всі файли в папці src, які використовують Tailwind класи
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
