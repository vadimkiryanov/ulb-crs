import { classNames } from "@/shared/lib/classNames";
import cls from "./PageLoader.module.scss";
import { FC } from "react";
import { Loader } from "@/shared/ui/Loader";

export const PageLoader: FC<IPageLoaderProps> = (props) => {
	const { className } = props;

	return (
		<div className={classNames(cls.pageLoader, {}, [className])}>
			<Loader />
		</div>
	);
};

interface IPageLoaderProps {
	className?: string;
}
