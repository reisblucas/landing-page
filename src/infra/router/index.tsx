import pagesData from './pagesData'
import { Routes, Route } from 'react-router-dom'

const Router = () => {
	const pageRoutes = pagesData.map(({ element, path, title }) => {
		return <Route key={title} path={`/${path}`} element={element} />
	})

	return <Routes>{pageRoutes}</Routes>
}

export default Router
