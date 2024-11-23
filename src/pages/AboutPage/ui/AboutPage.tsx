import { Button, ThemeButtonEnum } from "@/shared/ui/Button";
import React from "react";
import { useTranslation } from "react-i18next";

const AboutPage = () => {
	const { t } = useTranslation("about");
	
  
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
			<div>{t("О странице")}</div>
		</>
	);
};

export default AboutPage;
