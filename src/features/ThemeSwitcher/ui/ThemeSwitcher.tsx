import { useTheme } from 'app/providers/ThemeProvider';
import { cn } from 'shared/libs/classNames/classNames';
import css from './ThemeSwitcher.module.scss';
import DayIcon from 'shared/assets/icons/sun.svg';
import NightIcon from 'shared/assets/icons/moon.svg';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { Button } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
	className?: string;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = (props) => {
	const { className } = props;
	const  {theme, toggleTheme} = useTheme();

	return (
		<Button
			className={cn(css.themeSwitcher, {}, [className, css[theme]])}
			onClick={toggleTheme}
		>
			{theme === Theme.DARK ? <NightIcon /> : <DayIcon />}
		</Button>
 );
}