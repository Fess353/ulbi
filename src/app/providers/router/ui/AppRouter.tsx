import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { PageLoader } from "widgets/PageLoader";
import { AppRouterConfig } from "..";

export const AppRouter = () => {
	return (
		<Suspense fallback={<PageLoader/>}>
			<Routes>
				{Object.values(AppRouterConfig).map(({path, element}) => (
					<Route
						key={path}
						path={path}
						element={element} />
				)) }
			</Routes>
		</Suspense>
	);
};