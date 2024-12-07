import { useTranslation } from "react-i18next";
import cls from "./NotFoundPage.module.scss";
import { classNames } from "@/shared/lib/classNames";

const NotFoundPage = () => {
	const { t } = useTranslation();
	return <div className={classNames(cls.notFoundPage, {}, [])}>{t("stranica-ne-naidena")}</div>;
};

export default NotFoundPage;
