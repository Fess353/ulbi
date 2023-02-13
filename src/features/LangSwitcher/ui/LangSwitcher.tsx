import { useTranslation } from 'react-i18next';
import { cn } from 'shared/libs/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import css from './LangSwitcher.module.scss';

interface LangSwitcherProps {
	className?: string;
}

export const LangSwitcher: React.FC<LangSwitcherProps> = (props) => {
	const { className } = props;
	const { i18n, t } = useTranslation();
	const toggle = async () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
	}

	return (
		<div className={cn(css.langSwitcher, {}, [className])}>
			<Button
				className={cn(css.langSwitcher, {}, [className])}
				theme={ThemeButton.CLEAR}
				onClick={toggle}
			>
				{t('Перевод')}
			</Button>
		</div>
	);
}