/** @type {import('tailwindcss/defaultTheme')} */
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'accent': {
				'light': '#8093f9',
				DEFAULT: '#5865f2',
				'dark': '#4445e7'
			},
			'black': {
				'light': '#383e41',
				DEFAULT: '#23272a'
			},
			'white': {
				DEFAULT: '#ffffff',
				'dark': '#efefef'
			},
			'error': {
				'light': '#f77274',
				DEFAULT: '#ed4245',
				'dark': '#da282b'
			},
			'success': {
				'light': '#79fca2',
				DEFAULT: '#52f287',
				'dark': '#0fd84e'
			},
			'warning': {
				'light': '#fff289',
				DEFAULT: '#fee75c',
				'dark': '#fbd114'
			}
		},
		extend: {
			fontFamily: {
				'sans': ['"Inter Variable"', ...defaultTheme.fontFamily.sans],
				'mono': ['"Source Code Pro Variable"', ...defaultTheme.fontFamily.mono]
			}
		}
	},
	plugins: [],
}
