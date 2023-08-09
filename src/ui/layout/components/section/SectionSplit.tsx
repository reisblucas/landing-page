import { Flex, FlexProps } from '@chakra-ui/react'
import { ReactNode } from 'react'

import { gpx, gpySection } from '@/ui/patterns'

export function SectionSplit({
	leftSection,
	rightSection,
	hasPaddingXOnLeft,
	hasPaddingXOnRight,
	...flexProps
}: SectionSplit.Props) {
	return (
		<Flex w="full" py={gpySection} flexDirection={{ base: 'column', lg: 'row' }} justifyContent="center" {...flexProps}>
			<Flex w={{ base: 'full', lg: '50%' }} flexDirection="column" px={hasPaddingXOnLeft ? gpx : 0}>
				{leftSection}
			</Flex>

			<Flex w={{ base: 'full', lg: '50%' }} flexDirection="column" px={hasPaddingXOnRight ? gpx : 0}>
				{rightSection}
			</Flex>
		</Flex>
	)
}

export namespace SectionSplit {
	export interface Props extends FlexProps {
		leftSection: ReactNode
		rightSection: ReactNode
		hasPaddingXOnLeft?: boolean
		hasPaddingXOnRight?: boolean
	}
}
