import { Flex } from '@chakra-ui/react'

import { ColorModeSwitcher, gpx } from '@/ui/patterns'

import { Logo } from './Logo'
import { Navlinks } from './Navlinks'

export function Header() {
	return (
		<Flex
			width="full"
			px={gpx}
			py={2}
			justifyContent="space-between"
			alignItems="center"
			position="sticky"
			top={0}
			backgroundColor="background-hero"
			zIndex="sticky"
		>
			<Logo />

			<Flex gap={2} alignItems="center">
				<ColorModeSwitcher size="xs" />
				<Navlinks />
			</Flex>
		</Flex>
	)
}
