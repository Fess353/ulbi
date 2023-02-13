
import 'app/styles/index.scss';
import { useTheme } from './providers/ThemeProvider/lib/useTheme';
import { cn } from 'shared/libs/classNames';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';


const App = () => {
	const { theme } = useTheme();

	return (
		<section className={cn('app', {}, [theme])}>
			<Suspense fallback=''>
				<header className='header'>
					<Navbar />
				</header>
				<main className='main'>
					<Sidebar />
					<AppRouter />
				</main>
			</Suspense>
		</section>
	);
}

export default App;
