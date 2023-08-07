import { Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'

import { gpx, gpySection } from '@/ui/patterns'

// @fix
export function Section({ left, right }: Section.Props) {
	return (
		<Flex w="full" px={gpx} py={gpySection} flexDirection={{ base: 'column', lg: 'row' }} justifyContent="center">
			<Flex w={{ base: 'full', lg: '50%' }} h={{ lg: '768px' }} flexDirection="column">
				{left}
			</Flex>

			{/* fix HEIGHT property conflict on smartphone screen when remove it */}
			<Flex w={{ base: 'full', lg: '50%' }} height="768px" flexDirection="column">
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
