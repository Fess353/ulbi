
import { Suspense, useContext, useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { Layout } from './components/Layout';
import { AboutPageLazy } from './pages/AboutPage/AboutPage.async';
import { MainPageLazy } from './pages/MainPage/MainPage.async';
import './styles/index.scss';
import { useTheme } from './styles/themes/useTheme';
import {cn} from './helpers/classNames';


const App = () => {
	const  {theme, toggleTheme} = useTheme()

	return (
		<div className={cn('app', {}, [theme])}>
			<button onClick={toggleTheme}>Theme</button>
			<Link to={'/'}>Главная</Link>
			<Link to={'/about'}>О нас</Link>

			<Suspense fallback={<div>Загрузка...</div>}>
				<Routes>
					{/* <Route path='/' element={<Layout />}>
						<Route index element={<MainPageLazy />} />
						<Route path={'about'} element={<AboutPageLazy />} />
					</Route> */}
					<Route path={'/'} element={<MainPageLazy />} />
					<Route path={'/about'} element={<AboutPageLazy />} />

				</Routes>
			</Suspense>
		</div>
	);
}

export default App;
