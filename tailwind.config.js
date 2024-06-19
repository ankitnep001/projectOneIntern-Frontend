/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'split-gradient': 'linear-gradient(to right, #CCE4FF 50%, #5959C1 50%)',
      },
      screens: {
        custom: '820px',
      },
    },
  },
  plugins: [],
}
