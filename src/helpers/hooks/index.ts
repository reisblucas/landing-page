import { useColorMode } from '@chakra-ui/react'
import { useCallback, useEffect, useState } from 'react'

export function useColorsThemeBased() {
	const { colorMode: cm } = useColorMode()
	const condition = cm === 'light'

	return {
		bgHero: condition ? 'background-hero' : 'blue.700',
		bgSection: condition ? '#fcf1e0' : 'blue.900',
		shadowHeader: condition
			? 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;'
			: 'rgba(206, 220, 223, 0.25) 0px 4px 8px -2px, rgba(206, 220, 223, 0.25) 0px 0px 0px 1px;',
		hamburgerIcon: condition ? 'blackAlpha.800' : 'white',
	} as const
}

export function useScrollYPosition() {
	const [scroll, setScroll] = useState(window.scrollY || 0)

	const handleScroll = useCallback(() => {
		if (scroll !== window.scrollY) {
			setScroll(window.scrollY)
		}
	}, [scroll])

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)

		return () => window.removeEventListener('scroll', handleScroll)
	}, [handleScroll])

	return [scroll] as const
}
