import { extendTheme } from '@chakra-ui/react'
import { Text } from './components'

export const theme = extendTheme({
	components: {
		Text,
	},
	fonts: {
		heading: `'Baskerville', 'Times', sans-serif`, // serif fonts options that transmit authority: Times New Roman, Baskerville, Garamond and Georgia
		body: `'Cairo', sans-serif`,
	},
	colors: {
		'background-hero': '#FCF7F0',
	},
	config: {
		cssVarPrefix: 'landing-page',
	},
})
