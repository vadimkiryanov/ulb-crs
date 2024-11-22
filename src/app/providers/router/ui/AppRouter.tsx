import { routeConfig } from "@/shared/config/routeConfig";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

export const AppRouter = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				{Object.values(routeConfig).map((config) => (
					<Route key={config.path} path={config.path} element={<div className="page-wrapper">{config.element}</div>} />
				))}
			</Routes>
		</Suspense>
	);
};
