import { RoutePath } from 'app/providers/router';
import { LangSwitcher } from 'features/LangSwitcher';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from 'shared/libs/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import css from './Sidebar.module.scss';
import MainPageIcon from 'shared/assets/icons/house.svg';
import AboutPageIcon from 'shared/assets/icons/document.svg';

interface SidebarProps {
	className?: string;
}

export const Sidebar: React.FC<SidebarProps> = (props) => {
	const { className } = props;
	const [open, setOpen] = useState(false);
	const { t } = useTranslation();

	const onToggle = () => {
		setOpen(prev => !prev)
	}

	return (
		<div
			data-testid='sidebar'
			className={cn(css.sidebar, { [css.sidebar_opened]: open }, [className])}>

			<ul className={css.sidebar__links}>
				<li className={css.sidebar__link}>
					<AppLink
						to={RoutePath.main}
						className={css.sidebar__link}
					>
						<i className={cn(css.sidebar__linkIcon)}>
							<MainPageIcon />
						</i>
						<span className={cn(css.sidebar__linkText, {[css.hidden]:!open})}>
							{t('Главная')}
						</span>
					</AppLink>
				</li>
				<li className={css.sidebar__link}>
					<AppLink
						to={RoutePath.about}
						className={css.sidebar__link}
					>
						<i className={css.sidebar__linkIcon}>
							<AboutPageIcon />
						</i>
						<span className={cn(css.sidebar__linkText, {[css.hidden]:!open})}>
							{t('О нас')}
						</span>
					</AppLink>
				</li>
			</ul>

			<div className={cn(css.sidebar__toggler)}>
				<Button
					variant={ButtonVariant.BCG_INV}
					data-testid='sidebar-toggle'
					onClick={onToggle}
					square
				>
					{open ? '<' : '>'}
				</Button>
			</div>

			<div className={cn(css.sidebar__themeSwitcher)}>
				<ThemeSwitcher />
			</div>

			<div className={cn(css.sidebar__langSwitcher)}>
				<LangSwitcher short={!open} />
			</div>
		</div>
	);
}