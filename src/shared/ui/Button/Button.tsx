import { cn } from 'shared/libs/classNames/classNames';
import css from './Button.module.scss';

export enum ThemeButton {
	CLEAR = 'button_clear',
	OUTLINED = 'button_outlined'
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: ThemeButton;
}

export const Button: React.FC<ButtonProps> = (props) => {
	const { className, children, theme, ...otherProps } = props;

	return (
		<button
			className={cn(css.button, {}, [className, css[theme]])}
			{...otherProps}
		>
			{children}
		</button>
 );
}