import { Flex, FlexProps } from '@chakra-ui/react'
import { ReactNode } from 'react'

import { gpx, gpySection } from '@/ui/patterns'

export function Section({ children, hasPaddingX, ...flexProps }: Section.Props) {
	return (
		<Flex w="full" py={gpySection} flexDirection={{ base: 'column', lg: 'row' }} justifyContent="center" {...flexProps}>
			<Flex w={{ base: 'full', lg: '50%' }} flexDirection="column" px={hasPaddingX ? gpx : 0}>
				{children}
			</Flex>
		</Flex>
	)
}

export namespace Section {
	export interface Props extends FlexProps {
		children: ReactNode
		hasPaddingX?: boolean
	}
}
