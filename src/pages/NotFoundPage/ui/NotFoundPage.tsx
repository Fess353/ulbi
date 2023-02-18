import { useTranslation } from "react-i18next";

export const NotFoundPage = () => {
	const {t} = useTranslation();

	return (
		<div className="">
			{t('Страница не найдена')}
		</div>
	);
}