/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{ts,tsx}', // Added from prompt
  ],
  theme: {
    extend: {
      fontFamily: {
        'organetto': ['Organetto SemiExt', 'sans-serif'],
        'satoshi': ['Satoshi', 'sans-serif'], // Added from prompt
      },
      colors: {
        'primary': '#D3B6FB', // Added from prompt
      },
      animation: {
        scroll: "scroll 40s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',  // IE and Edge
          'scrollbar-width': 'none',     // Firefox
          '&::-webkit-scrollbar': {
            display: 'none',              // Chrome, Safari
          },
        },
      });
    },
  ],
  fontFamily: {
  'satoshi': ['var(--font-satoshi)', 'sans-serif'],
}
}