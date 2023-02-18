

import { cn } from 'shared/libs/classNames/classNames';
import css from './Navbar.module.scss';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import {  RoutePath } from 'app/providers/router';

interface NavbarProps {
	className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
	return (
		<nav className={cn(css.navbar, {}, [className])}>
			<ul className={css.navbar__links}>
				<li className={css.navbar__link}>
					<AppLink to={RoutePath.main} className={css.navbar__link}>Главная</AppLink>
				</li>
				<li className={css.navbar__link}>
					<AppLink to={RoutePath.about} className={css.navbar__link}>О нас</AppLink>
				</li>
			</ul>
		</nav>
	);
};



