import { RoutesConfig } from "@/shared/config/routes";
import { Suspense } from "react";

export const RouterProvider = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<RoutesConfig />
		</Suspense>
	);
};
