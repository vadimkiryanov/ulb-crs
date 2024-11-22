import { Button, ThemeButtonEnum } from "@/shared/ui/Button";
import React from "react";

const AboutPage = () => {
	const onClick = async () => {
		// Ленивая загрузка функции testF, которая выводит "HELLO" в консоль
		const { testF } = await import("@/shared/lib/testF");
		testF();
	};
	return (
		<>
			<Button onClick={onClick} theme={ThemeButtonEnum.CLEAR}>
				hello console
			</Button>
			<div>AboutPage</div>
		</>
	);
};

export default AboutPage;
