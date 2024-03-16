/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#29a587',
					secondary: '#d926a9',
					accent: '#37cdbe',
					neutral: '#3d4451',
					'base-100': '#f1ede7',
					'base-200': '#ffffff',
				},
				darkMode: {
					primary: '#29a587',
					secondary: '#d926a9',
					accent: '#37cdbe',
					neutral: '#3d4451',
					'base-100': '#252931',
					'base-200': '#1e2229',
				},
			},
		],
	},
	plugins: [require('daisyui')],
};
