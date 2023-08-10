import { Box, Center, Flex, Heading, Text, VStack } from '@chakra-ui/react'
import { Fragment } from 'react'

import { ButtonHero, DoctorGradient, Section, SectionSplit } from '@/ui'
import { useColorsThemeBased } from '@/helpers'
import { Banner, CTAMiddle, PainSection, WhySection } from '@/components'

export function Home() {
	const theming = useColorsThemeBased()

	return (
		<Fragment>
			<Banner />
			<PainSection />
			<WhySection />
			<CTAMiddle />

			{/* How section */}
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
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, eligendi, exercitationem ea eum tempora
						odit est quos nostrum pariatur ipsam molestiae maxime dolor quia officiis rem praesentium accusamus vero
						non?
					</Text>
				</Flex>
			</Section>

			{/* Another Call to Action */}
			<SectionSplit
				hasPaddingXOnRight
				hasPaddingXOnLeft
				backgroundColor={theming.bgSection}
				heading="Pronto Para Começar?"
				id="start"
				ctaButton={<ButtonHero description="Começar Agora" variant="solid" />}
				leftSection={
					<VStack flexDirection="column" alignItems="stretch" gap={8} maxWidth="1024px">
						<VStack flexDirection="column" gap={8} overflow="hidden" position="relative">
							{Home.BottomCTA.map((cta) => (
								<VStack
									key={cta.description}
									width={{ base: '200px', md: '200px' }}
									height={{ base: '200px', md: '200px' }}
									borderRadius="3xl"
									padding={8}
									alignSelf={cta.alignSelf}
									justifyContent="center"
									alignItems="center"
									marginRight={!!cta.marginRight ? cta.marginRight : undefined}
									backgroundColor={theming.bgHero}
									zIndex={2}
								>
									<Box border="2px solid" borderColor={cta.color} px={4} py={2} borderRadius="3xl">
										<Text fontSize="4xl" fontFamily="heading" color={cta.color}>
											{cta.step}
										</Text>
									</Box>
									<Text textAlign="center" fontSize="md">
										{cta.description}
									</Text>
								</VStack>
							))}

							<Box
								width="50%"
								height="80%"
								position="absolute"
								zIndex={1}
								borderTop="3px solid"
								borderRight="3px solid"
								borderBottom="3px solid"
								borderStyle="dashed"
								borderColor="green.300"
								borderRightRadius="full"
								transform="rotate(-15deg) translate(15%)"
							/>
						</VStack>
					</VStack>
				}
				rightSection={
					<>
						{/* refactor this section */}
						<Center
							width="full"
							height="full"
							position="relative"
							flexGrow={1}
							overflow={{ base: 'hidden', lg: 'inherit' }}
						>
							<DoctorGradient />
						</Center>
					</>
				}
			/>
		</Fragment>
	)
}

export namespace Home {
	export const GraphColorPattern = {
		first: 'red.500',
		second: 'green.400',
	}

	export const Pains = [
		{ title: 'Lorem', icon: '', description: '...' },
		{ title: 'Ipsum', icon: '', description: '...' },
		{ title: 'Dolor', icon: '', description: '...' },
		{ title: 'Sit', icon: '', description: '...' },
	]

	export const BottomCTA = [
		{ step: '01', description: 'Cadastre-se em poucos minutos', color: 'blue.200', alignSelf: 'flex-start' },
		{
			step: '02',
			description: 'Iremos verificar os seus dados',
			color: 'red.200',
			alignSelf: 'flex-end',
		},
		{
			step: '03',
			description: 'Comece a economizar dinheiro!',
			color: 'purple.200',
			alignSelf: 'center',
			marginRight: '100px',
		},
	]
}
