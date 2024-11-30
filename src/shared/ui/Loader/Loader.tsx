import { FC } from "react";
import { classNames } from "@/shared/lib/classNames";
import * as cls from "./Loader.module.scss";

export const Loader: FC<ILoaderProps> = ({ className, ...props }) => {
	return <div className={classNames(cls.Loader, {}, [className])} {...props}></div>;
};

interface ILoaderProps {
	className?: string;
}
