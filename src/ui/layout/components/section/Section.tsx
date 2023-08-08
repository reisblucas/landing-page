import { Flex, FlexProps } from '@chakra-ui/react'
import { ReactNode } from 'react'

import { gpx, gpySection } from '@/ui/patterns'

export function Section({ children, hasPaddingX, ...flexProps }: Section.Props) {
	return (
		<Flex
			w="full"
			py={gpySection}
			flexDirection="column"
			px={hasPaddingX ? gpx : 0}
			justifyContent="center"
			{...flexProps}
		>
			{children}
		</Flex>
	)
}

export namespace Section {
	export interface Props extends FlexProps {
		children: ReactNode
		hasPaddingX?: boolean
	}
}
