import { cn } from 'shared/libs/classNames/classNames';
import './Loader.scss';

interface LoaderProps {
	className?: string;
}

export const Loader: React.FC<LoaderProps> = (props) => {
	const { className } = props;

	return (
		<div className={cn('lds-spinner', {}, [className])}>
			<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
		</div>
	);
}