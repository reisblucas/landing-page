import { gpx, gpySection } from '@/ui/patterns'
import { Box, HStack, VStack } from '@chakra-ui/react'

export function Footer() {
	return (
		<Box width="full" px={gpx}>
			<Box backgroundColor="blue.800" borderTopRadius="3xl">
				<HStack px={16} py={gpySection} justifyContent="space-between">
					<VStack>
						<Box>lucas</Box>
					</VStack>
					<HStack>
						<VStack></VStack>
						<VStack></VStack>
						<VStack></VStack>
					</HStack>
				</HStack>
			</Box>
		</Box>
	)
}
