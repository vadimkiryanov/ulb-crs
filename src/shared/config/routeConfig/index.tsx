import { AboutPageLazy } from "@/pages/AboutPage";
import { MainPageLazy } from "@/pages/MainPage";
import { RouteProps } from "react-router-dom";
// Конфигурация маршрутов приложения

// Перечисление маршрутов приложения
enum AppRoutes {
	MAIN = "main",
	ABOUT = "about",
}
// Объект, сопоставляющий маршруты с их путями
const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: "/",
	[AppRoutes.ABOUT]: "/about",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.MAIN]: {
		path: RoutePath.main,
		element: <MainPageLazy />,
	},
	[AppRoutes.ABOUT]: {
		path: RoutePath.about,
		element: <AboutPageLazy />,
	},
};
