import { AboutPageLazy } from "@/pages/AboutPage";
import { MainPageLazy } from "@/pages/MainPage";
import { useRoutes } from "react-router-dom";

// Перечисление маршрутов приложения
export enum AppRoutes {
	MAIN = "main",
	ABOUT = "about",
}

// Объект, сопоставляющий маршруты с их путями
export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: "/",
	[AppRoutes.ABOUT]: "/about",
};

// Конфигурация маршрутов приложения
export const RoutesConfig = () => {
	const element = useRoutes([
		{
			path: RoutePath.main, // путь для главной страницы
			element: <MainPageLazy />, // ленивое загружаемое компонент главной страницы
		},
		{
			path: RoutePath.about, // путь для страницы "О нас"
			element: <AboutPageLazy />, // ленивое загружаемое компонент страницы "О нас"
		},
	]);

	return element;
};
