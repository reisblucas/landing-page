import { Flex, FlexProps, Heading } from '@chakra-ui/react'
import { ReactNode } from 'react'

import { gpx, gpySection } from '@/ui/patterns'

export function SectionSplit({
	leftSection,
	rightSection,
	hasPaddingXOnLeft,
	hasPaddingXOnRight,
	heading,
	...flexProps
}: SectionSplit.Props) {
	return (
		<Flex w="full" py={gpySection} flexDirection="column" justifyContent="center" {...flexProps}>
			{heading && (
				<Heading
					as="h2"
					fontFamily="heading"
					fontSize={{ base: '4xl', md: '6xl' }}
					fontWeight="light"
					w="full"
					textAlign="center"
					py={4}
				>
					{heading}
				</Heading>
			)}

			<Flex flexDirection={{ base: 'column', lg: 'row' }}>
				<Flex w={{ base: 'full', lg: '50%' }} flexDirection="column" px={hasPaddingXOnLeft ? gpx : 0}>
					{leftSection}
				</Flex>

				<Flex w={{ base: 'full', lg: '50%' }} flexDirection="column" px={hasPaddingXOnRight ? gpx : 0}>
					{rightSection}
				</Flex>
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
		heading?: string
	}
}
