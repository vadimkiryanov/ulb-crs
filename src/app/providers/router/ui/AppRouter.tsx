import { routeConfig } from "@/shared/config/routeConfig";
import { PageLoader } from "@/widgets/PageLoader";
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

export const AppRouter = () => {
	return (
		<Routes>
			{Object.values(routeConfig).map((config) => (
				<Route
					key={config.path}
					path={config.path}
					element={
						<Suspense fallback={<PageLoader />}>
							<div className="page-wrapper">{config.element}</div>
						</Suspense>
					}
				/>
			))}
		</Routes>
	);
};
