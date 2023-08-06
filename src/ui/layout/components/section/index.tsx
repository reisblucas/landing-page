import { Box, Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'

import { gpx, gpySection } from '@/ui/patterns'

export function Section({ left, right }: Section.Props) {
	return (
		<Flex w="full" px={gpx} py={gpySection}>
			<Flex w="50%" h="768px" flexDirection="column">
				{left}
			</Flex>

			<Box>{right}</Box>
		</Flex>
	)
}

export namespace Section {
	export interface Props {
		left: ReactNode
		right: ReactNode
	}
}
