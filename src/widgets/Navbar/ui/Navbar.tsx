

import { cn } from 'shared/libs/classNames/classNames';
import css from './Navbar.module.scss';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'app/providers/router';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
	className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
	const { t } = useTranslation();

	return (
		<nav className={cn(css.navbar, {}, [className])}>
		</nav>
	);
};



