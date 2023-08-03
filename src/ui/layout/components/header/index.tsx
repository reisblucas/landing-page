import { Flex } from '@chakra-ui/react'

import { Logo } from './Logo'
import { Navlinks } from './Navlinks'

export function Header() {
	return (
		<Flex width="full" px={{ base: '10px', md: '30px' }} py={2} justifyContent="space-between" alignItems="center">
			<Logo />
			<Navlinks />
		</Flex>
	)
}