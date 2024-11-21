import { AboutPageLazy } from "@/pages/AboutPage";
import { MainPageLazy } from "@/pages/MainPage";
import { Suspense } from "react";
import { useRoutes } from "react-router-dom";

export const AppRouter = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Routes />
		</Suspense>
	);
};

// Конфигурация маршрутов приложения
export const Routes = () => {
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
