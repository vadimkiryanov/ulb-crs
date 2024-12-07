import { classNames } from "@/shared/lib/classNames";
import React, { FC, PropsWithChildren } from "react";
import { Link, LinkProps } from "react-router-dom";
import cls from "./AppLink.module.scss";

export const AppLink: FC<IAppLinkProps & PropsWithChildren> = (props) => {
	const { className, children, theme = AppLinkTheme.PRIMARY, ...otherProps } = props;

	return (
		<Link className={classNames(cls.appLink, {}, [className, cls[theme]])} {...otherProps}>
			{children}
		</Link>
	);
};

interface IAppLinkProps extends LinkProps {
	className?: string;
	theme?: AppLinkTheme;
}
export enum AppLinkTheme {
	PRIMARY = "primary",
	SECONDARY = "secondary",
}
