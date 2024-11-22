import { classNames } from "@/shared/lib/classNames";
import { FC } from "react";
import * as cls from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "@/shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "@/widgets/ThemeSwitcher";

export const Navbar: FC<INavbarProps> = (props) => {
	const { className } = props;

	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<ThemeSwitcher />
			<div className={cls.links}>
				<AppLink to={"/"} theme={AppLinkTheme.SECONDARY}>
					Main
				</AppLink>
				<AppLink to={"/about"} theme={AppLinkTheme.SECONDARY}>
					About
				</AppLink>
			</div>
		</div>
	);
};

interface INavbarProps {
	className?: string;
}
