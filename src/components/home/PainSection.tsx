import { useColorsThemeBased } from '@/helpers'
import { Home } from '@/pages/home'
import { Section } from '@/ui'
import { Heading, Flex, Box, Text } from '@chakra-ui/react'

export function PainSection() {
	const theming = useColorsThemeBased()

	return (
		<Section
			backgroundColor={theming.bgSection}
			gap={8}
			borderTopRadius="3xl"
			borderBottomRadius="3xl"
			hasPaddingX
			id="pain"
		>
			<Heading as="h2" fontSize={{ base: '4xl', md: '6xl' }} fontFamily="heading" fontWeight="light" textAlign="center">
				Some Pain Heading
			</Heading>

			<Flex
				flexDirection={{ base: 'column', md: 'row' }}
				width="full"
				gap={12}
				py={4}
				justifyContent="center"
				alignItems="center"
				wrap="wrap"
			>
				{Home.Pains.map((pain) => (
					<Flex
						key={pain.title}
						flexDirection="column"
						gap={4}
						width="200px"
						minHeight="150px"
						borderRadius={16}
						justifyContent="center"
						alignItems="center"
						p={4}
						backgroundColor={theming.bgHero}
						_hover={{
							boxShadow:
								'rgba(56, 161, 105, 0.4) -5px 5px, rgba(56, 161, 105, 0.3) -10px 10px, rgba(56, 161, 105, 0.2) -15px 15px, rgba(56, 161, 105, 0.1) -20px 20px, rgba(56, 161, 105, 0.05) -25px 25px',
							transition: '0.5s',
							transform: 'translate(25px, -25px)',
							zIndex: 1,
						}}
					>
						<Box width="50px" height="50px" backgroundColor="green.200" borderRadius="full" />
						<Text>{pain.title}</Text>
						<Text fontSize="sm">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, accusantium rem? Repellendus ipsam
						</Text>
					</Flex>
				))}
			</Flex>

			<Text fontSize={{ base: 'xl', md: '2xl' }} textAlign="center">
				Some conclusion text for this section
			</Text>
		</Section>
	)
}
