const colors = require('tailwindcss/colors');

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		fontFamily: {
			sans: ['"Noto Sans"', 'sans-serif'],
			serif: ['"Noto Serif"', 'serif'],
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			white: colors.white,
			black: colors.black,
			gray: colors.gray,
			sky: colors.sky,
		},
		container: (theme) => ({
			center: true,
			padding: {
				DEFAULT: '1.5rem',
				'2xl': '13rem',
			},
		}),
		extend: {},
	},
	plugins: [],
}
