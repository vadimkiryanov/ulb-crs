import { FC } from "react";
import { classNames } from "@/shared/lib/classNames";
import cls from "./Loader.module.scss";

export const Loader: FC<ILoaderProps> = ({ className, ...props }) => {
	return <div className={classNames(cls.loader, {}, [className])} {...props}></div>;
};

interface ILoaderProps {
	className?: string;
}
