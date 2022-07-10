/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const formsPlugin = require('@tailwindcss/forms');
const typographyPlugin = require('@tailwindcss/typography');
const lineClampPlugin = require('@tailwindcss/line-clamp');
const aspectRatioPlugin = require('@tailwindcss/aspect-ratio');

module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
				display: ['Lusitana']
			},
			colors: {
				sky: colors.sky
			},
			fontSize: {
				xxs: '12px'
			}
		}
	},
	plugins: [formsPlugin, typographyPlugin, lineClampPlugin, aspectRatioPlugin]
};
