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
			<Button onClick={onClick} theme={ThemeButtonEnum.CLEAR} style={{ boxShadow: "0px 0px 4px 1px" }}>
				alert btn
			</Button>
			<div>AboutPage</div>
		</>
	);
};

export default AboutPage;
