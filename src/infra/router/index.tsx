import { createBrowserRouter } from 'react-router-dom'
import { Home } from '@/pages/home'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		errorElement: <div>404</div>,
	},
])

export default router
