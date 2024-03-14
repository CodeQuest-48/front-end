/** @type {import('tailwindcss').Config} */
import formsPlugin from '@tailwindcss/forms';

export default {
	content: ['./index.html', './src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#26184a',
				secondary: '#130C25',
				tertiary: '#E8D2FF',
			},
			fontFamily: {
				sans: ['Raleway', 'sans-serif'],
			},
		},
		container: {
			center: true,
		},
	},

	plugins: [formsPlugin],
};
