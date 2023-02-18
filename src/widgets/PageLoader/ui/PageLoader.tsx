import { cn } from 'shared/libs/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import css from './PageLoader.module.scss';

interface PageLoaderProps {
	className?: string;
}

export const PageLoader: React.FC<PageLoaderProps> = (props) => {
	const { className } = props;

	return (
		<div className={cn(css.pageLoader, {}, [className])}>
			<Loader />
		</div>
 );
}