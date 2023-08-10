import { Center, Divider, Flex, Img, Text } from '@chakra-ui/react'

import { useColorsThemeBased } from '@/helpers'
import { SectionSplit } from '@/ui'

export function WhySection() {
	const theming = useColorsThemeBased()

	return (
		<SectionSplit
			id="socialProof"
			hasPaddingXOnLeft
			heading="Providenciamos A Ajuda Que Você Precisa"
			leftSection={
				<Flex
					flexDirection="column"
					minHeight={{ base: '500px', md: '768px' }}
					justifyContent="space-evenly"
					alignItems="center"
				>
					<Center
						width="full"
						height="full"
						position="relative"
						flexGrow={1}
						overflow={{ base: 'hidden', lg: 'inherit' }}
					>
						<Img
							src="images/landing/how-img1.jpeg"
							width="50%"
							height="50%"
							maxWidth="384px"
							borderRadius="2xl"
							zIndex={2}
							position="absolute"
							bottom={8}
							left={{ base: 10, md: 20 }}
						/>
						<Img
							src="images/landing/how-img2.jpeg"
							width="50%"
							height="70%"
							maxWidth="384px"
							maxHeight="400px"
							borderRadius="2xl"
							border="4px solid"
							borderColor={theming.bgSection}
							position="absolute"
							zIndex={1}
							transform="rotate(15deg)"
							right={{ base: 16, lg: 30 }}
						/>
					</Center>
				</Flex>
			}
			hasPaddingXOnRight
			rightSection={
				<Flex
					flexDirection="column"
					minHeight={{ base: '500px', md: '768px' }}
					justifyContent="space-evenly"
					alignItems="center"
					gap={4}
					py={{ base: 4, lg: 0 }}
				>
					{WhySection.HowRight.map((how, i) => (
						<Flex
							key={i}
							px={12}
							gap={4}
							flexDirection="column"
							opacity={{ base: 1, lg: 0.5 }}
							_hover={{
								lg: {
									transition: 0.5,
									_notFirst: {
										opacity: 1,
									},
									_notLast: {
										opacity: 1,
									},
									opacity: 1,
								},
							}}
						>
							<Text fontFamily="heading" fontSize="4xl">
								{how.title}
							</Text>
							<Text>{how.description}</Text>

							<Divider border="2px solid" borderColor="green.200" borderRadius="full" />
						</Flex>
					))}
				</Flex>
			}
		/>
	)
}

export namespace WhySection {
	export const HowRight = [
		{
			title: 'Sem Comissões Ou Tarifas Escondidas',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, eius id! Nostrum id dolor aliquam veniam aliquid temporibus quia, quasi ullam sequi adipisci!',
		},
		{
			title: 'Melhor Escolha Para Grandes Pagamentos',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, eius id! Nostrum id dolor aliquam veniam aliquid temporibus quia, quasi ullam sequi adipisci!',
		},
		{
			title: 'Plataforma Construída Para Facilitar A Administração',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, eius id! Nostrum id dolor aliquam veniam aliquid temporibus quia, quasi ullam sequi adipisci!',
		},
	]
}
