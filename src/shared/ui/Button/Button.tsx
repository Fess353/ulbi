import { cn } from 'shared/libs/classNames/classNames';
import css from './Button.module.scss';

export enum ButtonVariant {
	CLEAR = 'button_clear',
	OUTLINED = 'button_outlined',
	BCG = 'button_bcg',
	BCG_INV = 'button_bcgInverted'
}

export enum ButtonSize {
	S = 'button_small',
	M = 'button_middle',
	L = 'button_large',
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	variant?: ButtonVariant;
	square?: boolean;
	size?: ButtonSize;
}

export const Button: React.FC<ButtonProps> = (props) => {
	const { className, children, variant, square, size, ...otherProps } = props;

	const mods: Record<string, boolean> = {
		[css.button_square]: square
	}

	return (
		<button
			className={cn(css.button, mods, [className, css[size], css[variant]])}
			{...otherProps}
		>
			{children}
		</button>
	);
}