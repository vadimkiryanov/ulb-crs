import { FC } from "react";
import { classNames } from "@/shared/lib/classNames";
import * as cls from "./ThemeSwitcher.module.scss";
import { ThemeEnum, useTheme } from "@/app/providers/theme";
import LightIcon from "@/shared/assets/icons/light-mode-toggle-icon.svg";
import DarkIcon from "@/shared/assets/icons/dark-mode-toggle-icon.svg";
import { Button, ThemeButtonEnum } from "@/shared/ui/Button";

export const ThemeSwitcher: FC<IThemeSwitcherProps> = ({ className, ...props }) => {
	const { theme, toggleTheme } = useTheme();
	return (
		<Button theme={ThemeButtonEnum.CLEAR} className={classNames(cls.ThemeSwitcher, {}, [className])} {...props} onClick={toggleTheme}>
			{theme === ThemeEnum.DARK ? <DarkIcon width={40} /> : <LightIcon width={40} />}
		</Button>
	);
};

interface IThemeSwitcherProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
}
