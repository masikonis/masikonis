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
		container: (theme) => ({
			center: true,
			padding: {
				DEFAULT: theme('spacing.4'),
				sm: theme('spacing.8'),
				lg: theme('spacing.12'),
				xl: theme('spacing.16'),
				'2xl': theme('spacing.20'),
			},
		}),
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
