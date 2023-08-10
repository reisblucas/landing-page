import { useColorMode } from '@chakra-ui/react'

export function useColorsThemeBased() {
	const { colorMode: cm } = useColorMode()
	const condition = cm === 'light'

	return {
		bgHero: condition ? 'background-hero' : 'blue.700',
		bgSection: condition ? '#fcf1e0' : 'blue.900',
	}
}
