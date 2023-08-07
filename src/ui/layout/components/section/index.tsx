import { Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'

import { gpx, gpySection } from '@/ui/patterns'

export function Section({ left, right }: Section.Props) {
	return (
		<Flex w="full" px={gpx} py={gpySection} flexDirection={{ base: 'column', lg: 'row' }} justifyContent="center">
			<Flex w={{ base: 'full', lg: '50%' }} flexDirection="column">
				{left}
			</Flex>

			<Flex w={{ base: 'full', lg: '50%' }} flexDirection="column">
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
