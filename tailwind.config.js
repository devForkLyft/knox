module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-mona-sans)', 'sans-serif'],
        bebas: ['var(--font-bebas-neue)', 'cursive'],
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none', // IE and Edge
          'scrollbar-width': 'none', // Firefox
        },
        '.scrollbar-hide::-webkit-scrollbar': {
          display: 'none', // Safari and Chrome
        },
      });
    }
  ]
};
