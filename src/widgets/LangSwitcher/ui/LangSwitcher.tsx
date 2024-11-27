import { FC } from "react";
import { classNames } from "@/shared/lib/classNames";
import * as cls from "./LangSwitcher.module.scss";
import { Button, ThemeButtonEnum } from "@/shared/ui/Button";
import { useTranslation } from "react-i18next";

export const LangSwitcher: FC<ILangSwitcherProps> = ({ className, ...props }) => {
	const { t, i18n } = useTranslation();

	const toggleLang = () => {
		i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
	};
	return (
		<Button theme={ThemeButtonEnum.CLEAR} className={classNames(cls.LangSwitcher, {}, [className])} {...props} onClick={toggleLang}>
			{t("Язык")}
		</Button>
	);
};

interface ILangSwitcherProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
}
