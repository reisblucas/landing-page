import { useColorsThemeBased } from '@/helpers'
import { Section } from '@/ui'
import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Heading,
	Text,
} from '@chakra-ui/react'

export function CommonQuestions() {
	const theming = useColorsThemeBased()

	return (
		<Section id="questions" hasPaddingX backgroundColor={theming.bgSection} gap={4}>
			<Heading as="h2" fontFamily="heading" fontSize={{ base: '4xl', md: '6xl' }} fontWeight="light" textAlign="center">
				Perguntas Frequentes
			</Heading>

			<Accordion
				allowMultiple
				backgroundColor={theming.bgHero}
				width="full"
				maxW={{ md: '80vw' }}
				m="0 auto"
				borderRadius="3xl"
			>
				{CommonQuestions.Questions.map((question) => (
					<AccordionItem key={question.title} p={2} border="none">
						<Heading as="h2">
							<AccordionButton>
								<Box as="span" fontWeight="semibold" flex={1} textAlign="left">
									{question.title}
								</Box>
								<AccordionIcon />
							</AccordionButton>

							<AccordionPanel fontWeight="normal" p={4}>
								<Text>{question.description}</Text>
							</AccordionPanel>
						</Heading>
					</AccordionItem>
				))}
			</Accordion>
		</Section>
	)
}

export namespace CommonQuestions {
	export const Questions = [
		{
			title: 'Lorem ipsum?',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		},
		{
			title: 'Dolor sit?',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		},
		{
			title: 'Amet, consectetur?',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		},
		{
			title: 'Adipiscing elit?',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		},
	]
}
