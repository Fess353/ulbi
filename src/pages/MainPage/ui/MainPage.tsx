import { useTranslation } from "react-i18next";

export const MainPage = () => {
	const {t} = useTranslation('main');
	return (
		<div className="">
			123
			{t('Главная страница')}
		</div>
	);
}