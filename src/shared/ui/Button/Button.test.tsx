import React from "react"; // Add this import

import { render, screen } from "@testing-library/react";
import { Button, ThemeButtonEnum } from "./Button";

describe("Button", () => {
	const testText = "Click Me";

	test("test btn render", () => {
		render(<Button theme={ThemeButtonEnum.CLEAR}>{testText}</Button>);
		const buttonElement = screen.getByText(testText);
		expect(buttonElement).toBeInTheDocument();
	});

	it("test clear theme", () => {
		render(<Button theme={ThemeButtonEnum.CLEAR}>{testText}</Button>);
		const buttonElement = screen.getByText(testText);
		expect(buttonElement).toHaveClass(ThemeButtonEnum.CLEAR);
		screen.debug();
	});
});
