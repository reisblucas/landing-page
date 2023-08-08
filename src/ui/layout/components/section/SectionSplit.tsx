import { Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'

import { gpx, gpySection } from '@/ui/patterns'

export function SectionSplit({ left, right, hasPaddingXOnLeft, hasPaddingXOnRight }: SectionSplit.Props) {
	return (
		<Flex w="full" py={gpySection} flexDirection={{ base: 'column', lg: 'row' }} justifyContent="center">
			<Flex w={{ base: 'full', lg: '50%' }} flexDirection="column" px={hasPaddingXOnLeft ? gpx : 0}>
				{left}
			</Flex>

			<Flex w={{ base: 'full', lg: '50%' }} flexDirection="column" px={hasPaddingXOnRight ? gpx : 0}>
				{right}
			</Flex>
		</Flex>
	)
}

export namespace SectionSplit {
	export interface Props {
		left: ReactNode
		right: ReactNode
		hasPaddingXOnLeft?: boolean
		hasPaddingXOnRight?: boolean
	}
}
