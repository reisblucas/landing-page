import { Button, ButtonProps, Icon } from '@chakra-ui/react'
import { IconType } from 'react-icons'

export function ButtonHero({ icon, description, ...buttonProps }: ButtonHero.Props) {
	return (
		<Button
			borderRadius="full"
			px={8}
			py={4}
			variant="outline"
			colorScheme="green"
			width="fit-content"
			{...buttonProps}
		>
			{description}
			{icon && <Icon as={icon} stroke="background-hero" ml={4} />}
		</Button>
	)
}

export namespace ButtonHero {
	export interface Props extends ButtonProps {
		description: string
		icon?: IconType
	}
}
