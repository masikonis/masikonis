const colors = require('tailwindcss/colors');

module.exports = {
	mode: 'jit',
	purge: {
		content: [
			'./pages/**/*.{js,ts,jsx,tsx}',
			'./components/**/*.{js,ts,jsx,tsx}'
		],
		safelist: [],
	},
	darkMode: 'media',
	theme: {
		extend: {},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			white: colors.white,
			black: colors.black,
			gray: colors.gray,
			sky: colors.sky,
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
