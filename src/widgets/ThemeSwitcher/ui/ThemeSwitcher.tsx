import { FC } from "react";
import { classNames } from "@/shared/lib/classNames";
import cls from "./ThemeSwitcher.module.scss";
import { ThemeEnum, useTheme } from "@/app/providers/theme";
import { Button, ThemeButtonEnum } from "@/shared/ui/Button";
import { Icons } from "@/shared/assets/icons";

export const ThemeSwitcher: FC<IThemeSwitcherProps> = ({ className, ...props }) => {
	const { theme, toggleTheme } = useTheme();
	return (
		<Button theme={ThemeButtonEnum.CLEAR} className={classNames(cls.themeSwitcher, {}, [className])} {...props} onClick={toggleTheme}>
			{theme === ThemeEnum.DARK ? <Icons.DarkIcon width={40} /> : <Icons.LightIcon width={40} />}
		</Button>
	);
};

interface IThemeSwitcherProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
}
