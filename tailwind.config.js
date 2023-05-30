/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./features/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'primary': '#b8c1ec',
        'secondary': '#fffffe',
        'highlight': '#eebbc3',
        'background': '#d4d8f0',
        'text': '#232946',
    },
  },
  plugins: [],
}

