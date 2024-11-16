import React from "react";
import { testF } from "./testF";

const AboutPage = () => {
	const onClick = async () => {
		// Ленивая загрузка функции testF, которая выводит "HELLO" в консоль
		const { testF } = await import("./testF");
		testF();
	};
	return (
		<>
			<button onClick={onClick}>hello console</button>
			<div>AboutPage</div>
		</>
	);
};

export default AboutPage;
