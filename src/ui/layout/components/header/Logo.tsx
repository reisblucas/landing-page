import { Flex, Img, Text } from '@chakra-ui/react'
import { HashLink } from 'react-router-hash-link'

export function Logo({ color }: Logo.Props) {
	return (
		<HashLink smooth to="/#banner">
			<Flex alignItems="center" gap={2}>
				<Img src="images/landing/lorem-logo.png" w={{ base: '30px', md: '45px' }} h={{ base: '35px', md: '50px' }} />

				<Text fontWeight={800} fontSize="xl" color={color}>
					Lorem
				</Text>
			</Flex>
		</HashLink>
	)
}

export namespace Logo {
	export interface Props {
		color?: string
	}
}
