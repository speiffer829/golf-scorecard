import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	safelist: [
		'bg-ball-red',
		'bg-ball-orange',
		'bg-ball-purple',
		'bg-ball-pink',
		'bg-ball-gold',
		'bg-ball-green',
		'bg-ball-blue',
		'bg-ball-white',
		'bg-ball-black'
	],

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
					blue: '#118AB2',
					white: '#FFFFFF',
					black: '#000000'
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
				},
				red: {
					100: '#FFB3C1',
					200: '#FF8099',
					300: '#FF4D71',
					400: '#FF1A49',
					500: '#EF476F'
				},
				yellow: {
					100: '#FFE5B4',
					200: '#FFD682',
					300: '#FFC750',
					400: '#FFB81E',
					500: '#FFA900',
					600: '#E09000',
					700: '#C07700',
					800: '#A05E00',
					900: '#804500'
				}
			}
		}
	},

	plugins: []
} as Config;
