import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { AppRouterConfig } from "..";

export const AppRouter = () => {
	return (
		<Suspense fallback={<div>Загрузка...</div>}>
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