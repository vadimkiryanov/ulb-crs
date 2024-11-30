import { useTranslation } from "react-i18next";
import * as cls from "./NotFoundPage.module.scss";
import { classNames } from "@/shared/lib/classNames";

const NotFoundPage = () => {
	const { t } = useTranslation();
	return <div className={classNames(cls.NotFoundPage, {}, [])}>{t("stranica-ne-naidena")}</div>;
};

export default NotFoundPage;
