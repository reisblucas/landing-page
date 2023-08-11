import { Fragment } from 'react'

import { Banner, CTABottom, CTAMiddle, CommonQuestions, HowSection, PainSection, WhySection } from '@/components'

export function Home() {
	return (
		<Fragment>
			<Banner />
			<PainSection />
			<WhySection />
			<CTAMiddle />
			<HowSection />
			<CTABottom />
			<CommonQuestions />
		</Fragment>
	)
}
