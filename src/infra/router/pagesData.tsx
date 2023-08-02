import { Home } from '@/pages/home'
import { routerType } from './types'

const pagesData: routerType[] = [
	{
		path: '/',
		element: <Home />,
		title: 'Home',
	},
]

export default pagesData
