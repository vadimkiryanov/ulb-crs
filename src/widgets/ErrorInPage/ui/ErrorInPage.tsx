import { FC } from "react";
import { classNames } from "@/shared/lib/classNames";
import * as cls from "./ErrorInPage.module.scss";
import { Trans } from "react-i18next";
import { Button, ThemeButtonEnum } from "@/shared/ui/Button";

export const ErrorInPage: FC<IErrorInPageProps> = ({ className, ...props }) => {
	const reloadPage = () => location.reload();

	return (
		<div className={classNames(cls.ErrorInPage, {}, [className])} {...props}>
			<Trans i18nKey="ups-chto-to-poshlo-ne-tak"></Trans>
			<Button onClick={reloadPage} theme={ThemeButtonEnum.SECONDARY}>
				<Trans i18nKey="obnovit-stranicu"></Trans>
			</Button>
		</div>
	);
};

interface IErrorInPageProps extends React.HTMLAttributes<HTMLDivElement> {
	className?: string;
}
