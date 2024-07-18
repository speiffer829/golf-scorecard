import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				atkinson: ['Atkinson', 'System-ui', 'sans-serif']
			},
			colors: {
				light: '#EEF0ED',
				dark: '#0d1b2a',
				ball: {
					red: '#EF476F',
					orange: '#ef7547',
					purple: '#9b47ef',
					pink: '#ef47ce',
					gold: '#FFD166',
					green: '#06D6A0',
					blue: '#118AB2'
				},
				green: {
					100: '#CCFF33',
					200: '#9EF01A',
					300: '#70E000',
					400: '#38B000',
					500: '#008000',
					600: '#007200',
					700: '#006400',
					800: '#004B23'
				}
			}
		}
	},

	plugins: []
} as Config;
