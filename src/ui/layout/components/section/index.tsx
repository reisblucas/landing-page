import { Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'

import { gpx, gpySection } from '@/ui/patterns'

export function Section({ left, right }: Section.Props) {
	return (
		<Flex w="full" px={gpx} py={gpySection} flexDirection={{ base: 'column', md: 'row' }}>
			<Flex w={{ base: 'full', md: '50%' }} h={{ md: '768px' }} flexDirection="column">
				{left}
			</Flex>

			<Flex w={{ base: 'full', md: '50%' }} h="768px" flexDirection="column">
				{right}
			</Flex>
		</Flex>
	)
}

export namespace Section {
	export interface Props {
		left: ReactNode
		right: ReactNode
	}
}
