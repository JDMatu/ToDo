/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'fondo': '#091254',
				
			},
			backgroundImage: {
				'login': "url('/login.avif')",
				'clean': "url()",
				
			},
		},
	},
	plugins: [],
}
