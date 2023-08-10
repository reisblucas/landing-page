import { Flex } from '@chakra-ui/react'

import { ColorModeSwitcher, gpx } from '@/ui/patterns'

import { Logo } from './Logo'
import { Navlinks } from './Navlinks'
import { useColorsThemeBased, useScrollYPosition } from '@/helpers'

export function Header() {
	const theming = useColorsThemeBased()
	const [scrollYPosition] = useScrollYPosition()

	return (
		<Flex
			width="full"
			px={gpx}
			py={2}
			justifyContent="space-between"
			alignItems="center"
			position="sticky"
			top={0}
			backgroundColor={theming.bgHero}
			zIndex="sticky"
			boxShadow={scrollYPosition >= 50 ? theming.shadowHeader : 'unset'}
			transform={scrollYPosition >= 50 ? 'undefined' : 'scale(0.98)'}
			transition="all 0.5s"
		>
			<Logo />

			<Flex gap={4} alignItems="center">
				<ColorModeSwitcher size="xs" />
				<Navlinks />
			</Flex>
		</Flex>
	)
}
