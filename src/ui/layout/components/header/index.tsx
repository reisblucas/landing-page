import { Flex } from '@chakra-ui/react'

import { gpx } from '@/ui/patterns'

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
		>
			<Logo />
			<Navlinks />
		</Flex>
	)
}
