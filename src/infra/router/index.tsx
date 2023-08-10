import { createBrowserRouter } from 'react-router-dom'
import { Home } from '@/pages/home'
import { Layout } from '@/ui'

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Home />,
				errorElement: <div>404</div>,
			},
		],
	},
	{
		path: '*',
		element: <div>404</div>,
	},
])

export default router
