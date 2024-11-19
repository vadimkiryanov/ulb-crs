import React from "react";

const AboutPage = () => {
	const onClick = async () => {
		// Ленивая загрузка функции testF, которая выводит "HELLO" в консоль
		const { testF } = await import("@/shared/lib/testF");
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
