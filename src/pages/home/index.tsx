import { Fragment } from 'react'

import { Banner, CTABottom, CTAMiddle, HowSection, PainSection, WhySection } from '@/components'

export function Home() {
	return (
		<Fragment>
			<Banner />
			<PainSection />
			<WhySection />
			<CTAMiddle />
			<HowSection />
			<CTABottom />
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
}
