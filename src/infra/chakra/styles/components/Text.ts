import { ComponentStyleConfig, StyleFunctionProps } from '@chakra-ui/react'

export const Text: ComponentStyleConfig = {
	baseStyle: (props: StyleFunctionProps) => ({
		color: props.colorMode === 'dark' ? props.colorScheme : 'blackAlpha.700',
		fontSize: 'sm',
	}),
}
