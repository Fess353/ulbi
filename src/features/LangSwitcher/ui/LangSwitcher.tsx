import { useTranslation } from 'react-i18next';
import { cn } from 'shared/libs/classNames/classNames';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import css from './LangSwitcher.module.scss';

interface LangSwitcherProps {
	className?: string;
	short?: boolean;
}

export const LangSwitcher: React.FC<LangSwitcherProps> = (props) => {
	const { className, short } = props;
	const { i18n, t } = useTranslation();
	const toggle = async () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
	}

	return (
		<div className={cn(css.langSwitcher, {}, [className])}>
			<Button
				className={cn(css.langSwitcher, {}, [className])}
				variant={ButtonVariant.CLEAR}
				onClick={toggle}
			>
				{t(short ? 'Язык кратко' : 'Язык полностью' )}
			</Button>
		</div>
	);
}