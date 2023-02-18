import { LangSwitcher } from 'features/LangSwitcher';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { useState } from 'react';
import { cn } from 'shared/libs/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import css from './Sidebar.module.scss';

interface SidebarProps {
	className?: string;
}

export const Sidebar: React.FC<SidebarProps> = (props) => {
	const { className } = props;

	const [open, setOpen] = useState(false);

	const onToggle = () => {
		setOpen(prev => !prev)
	}

	return (
		<div
			data-testid='sidebar'
			className={cn(css.sidebar, { [css.sidebar_opened]: open }, [className])}>
			<div className="sidebar__toggler">
				<Button
					data-testid='sidebar-toggle'
					onClick={onToggle}
				// eslint-disable-next-line i18next/no-literal-string
				>
					Toggle
				</Button>
			</div>
			<div className="sidebar__swticher">
				<ThemeSwitcher />
			</div>
			<div className="sidebar__swticher">
				<LangSwitcher />
			</div>
		</div>
	);
}