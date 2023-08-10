import { Flex, Heading, Text } from '@chakra-ui/react'

import { useColorsThemeBased } from '@/helpers'
import { Section } from '@/ui'

export function HowSection() {
	const theming = useColorsThemeBased()

	return (
		<Section hasPaddingX justifyContent="center" backgroundColor={theming.bgSection} borderTopRadius="3xl" id="how">
			<Flex width={{ base: '80%', md: '50%' }} justifyContent="center" m="0 auto" flexDirection="column" gap={4}>
				<Heading as="h2" fontSize={{ base: '4xl', lg: '6xl' }} fontWeight="light" textAlign="center">
					Gerencie Facilmente
					<br />A Sua{' '}
					<Text fontSize="inherit" as="span" borderRadius="full" backgroundColor="green.200" px={4}>
						Vida
					</Text>
					,
					<Text fontSize="inherit" as="span" borderRadius="full" backgroundColor="blue.200" px={4}>
						Trabalho
					</Text>{' '}
					&{' '}
					<Text fontSize="inherit" as="span" borderRadius="full" backgroundColor="red.200" px={4}>
						Família
					</Text>
				</Heading>

				<Text fontSize={{ base: 'inherit', md: 'sm' }}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, eligendi, exercitationem ea eum tempora odit
					est quos nostrum pariatur ipsam molestiae maxime dolor quia officiis rem praesentium accusamus vero non?
				</Text>
			</Flex>
		</Section>
	)
}
