import { AboutPage } from "pages/AboutPage"
import { MainPage } from "pages/MainPage"
import { RouteObject } from "react-router-dom"


export enum AppRoutes {
	MAIN = 'main',
	ABOUT = 'about',
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.ABOUT]: '/about',
	[AppRoutes.MAIN]: '/',
}

export const AppRouterConfig: Record<AppRoutes, RouteObject> = {
	[AppRoutes.MAIN]: {
		path: RoutePath[AppRoutes.MAIN],
		element: <MainPage />,
	},
	[AppRoutes.ABOUT]: {
		path: RoutePath[AppRoutes.ABOUT],
		element: <AboutPage />,
	},
}