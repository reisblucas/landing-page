import { Flex, Img, Text } from '@chakra-ui/react'

export function Logo({ color }: Logo.Props) {
	return (
		<Flex alignItems="center" gap={2}>
			<Img src="images/landing/lorem-logo.png" w={{ base: '30px', md: '45px' }} h={{ base: '35px', md: '50px' }} />

			<Text fontWeight={800} fontSize="xl" color={color}>
				Lorem
			</Text>
		</Flex>
	)
}

export namespace Logo {
	export interface Props {
		color?: string
	}
}
