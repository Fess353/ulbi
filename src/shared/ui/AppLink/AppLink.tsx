import { Link, LinkProps } from 'react-router-dom';
import { cn } from 'shared/libs/classNames/classNames';
import css from './AppLink.module.scss';

interface AppLinkProps extends LinkProps {
	className?: string;
}

export const AppLink: React.FC<AppLinkProps> = (props) => {
	const {to, className, children, ...otherProps} = props;

	return (
		<Link
			to={to}
			className={cn(css.appLink, {}, [className])}
			{...otherProps}
		>
			{children}
		</Link>
 );
}