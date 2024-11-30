import { classNames } from "@/shared/lib/classNames";
import * as cls from "./PageLoader.module.scss";
import { FC } from "react";
import { Loader } from "@/shared/ui/Loader";

export const PageLoader: FC<IPageLoaderProps> = (props) => {
	const { className } = props;

	return (
		<div className={classNames(cls.PageLoader, {}, [className])}>
			<Loader />
		</div>
	);
};

interface IPageLoaderProps {
	className?: string;
}
