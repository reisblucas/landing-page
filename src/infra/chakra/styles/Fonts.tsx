import { Global, css } from '@emotion/react'

export function Fonts() {
	return (
		<Global
			styles={css`
				@font-face {
					font-family: 'Cairo', sans-serif;
					font-style: normal;
					font-weight: 300;
					font-display: swap;
					src: url('/fonts/Cairo-Light.ttf') format('truetype');
				}
				@font-face {
					font-family: 'Cairo', sans-serif;
					font-style: normal;
					font-weight: 400;
					font-display: swap;
					src: url('/fonts/Cairo-Regular.ttf') format('truetype');
				}
				@font-face {
					font-family: 'Cairo', sans-serif;
					font-style: normal;
					font-weight: 500;
					font-display: swap;
					src: url('/fonts/Cairo-Medium.ttf') format('truetype');
				}
				@font-face {
					font-family: 'Cairo', sans-serif;
					font-style: normal;
					font-weight: 700;
					font-display: swap;
					src: url('/fonts/Cairo-Bold.ttf') format('truetype');
				}
			`}
		/>
	)
}
