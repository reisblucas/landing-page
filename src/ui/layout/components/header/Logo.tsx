import { Flex, Text } from '@chakra-ui/react'

export function Logo() {
	return (
		<Flex alignItems="center" gap={2}>
			<Flex
				w={{ base: '30px', md: '50px' }}
				h={{ base: '30px', md: '50px' }}
				backgroundColor="green.500"
				borderRadius="full"
				alignItems="center"
				justifyContent="center"
			>
				Logo
			</Flex>

			<Text fontWeight={800}>business name</Text>
		</Flex>
	)
}
