import { Button } from "@/shared/ui/Button";
import { FC, useEffect, useState } from "react";
import { Trans } from "react-i18next";

export const BugButton: FC<IBugButtonProps> = ({ ...props }) => {
	const [isError, setIsError] = useState(false);
	const onThrowError = () => {
		setIsError(true);
	};

	useEffect(() => {
		if (isError) {
			throw new Error();
		}
	}, [isError]);

	return (
		<Button onClick={onThrowError} {...props}>
			<Trans i18nKey="vklyuchit-oshibku"></Trans>
		</Button>
	);
};

interface IBugButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
}
