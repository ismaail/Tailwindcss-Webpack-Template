const colors = require('tailwindcss/colors')

module.exports = {
	content: ['./index.html'],
	darkMode: 'class', // or 'media' or 'class'
	// prefix: '',
  // purge: [],
  theme: {
    extend: {
			/* colors: {
				primary: colors.red['600'],
				secondary: colors.cyan['500'],
				grey: colors.gray['50'],
				'blue-100-accent': '#82b1ff',
				'blue-200-accent': '#448aff',
				'blue-400-accent': '#2979ff',
				'blue-700-accent': '#2962ff',
			}, */
			/* fontFamily: {
				poppins: ['poppins', 'sans-serif']
			} */
		},
  },
  variants: {
		extend: {},
	},
  plugins: [],
}
