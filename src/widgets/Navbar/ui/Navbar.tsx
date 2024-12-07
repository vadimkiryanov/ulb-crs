import { classNames } from "@/shared/lib/classNames";
import { FC } from "react";
import cls from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "@/shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";

export const Navbar: FC<INavbarProps> = (props) => {
	const { className } = props;
	const { t } = useTranslation();

	return (
		<div className={classNames(cls.navbar, {}, [className])}>
			<div className={cls.links}>
				<AppLink to={"/"} theme={AppLinkTheme.SECONDARY}>
					{t("main")}
				</AppLink>
				<AppLink to={"/about"} theme={AppLinkTheme.SECONDARY}>
					{t("about")}
				</AppLink>
			</div>
		</div>
	);
};

interface INavbarProps {
	className?: string;
}
