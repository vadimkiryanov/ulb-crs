import { FC } from "react";
import { classNames } from "@/shared/lib/classNames";
import cls from "./Button.module.scss";

export const Button: FC<IButtonProps> = ({ className, children, theme, ...props }) => {
	return (
		<button className={classNames(cls.button, {}, [className, cls[theme]])} {...props}>
			{children}
		</button>
	);
};

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: ThemeButtonEnum;
}

export enum ThemeButtonEnum {
	CLEAR = "clear",
	SECONDARY = "secondary",
	OUTLINE = "outline",
}
