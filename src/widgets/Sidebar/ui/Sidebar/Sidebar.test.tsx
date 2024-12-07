import { fireEvent, screen } from "@testing-library/react";
import { Sidebar } from "./Sidebar";
import { renderWithTranslation } from "@/shared/lib/tests/renderWithTranslation/renderWithTranslation";

describe("Sidebar", () => {
	test("test Sidebar render", () => {
		renderWithTranslation(<Sidebar />);
		expect(screen.getByTestId("sidebar")).toBeInTheDocument();
	});

	test("test sidebar-toggle", () => {
		renderWithTranslation(<Sidebar />);
		expect(screen.getByTestId("sidebar")).toBeInTheDocument();

		fireEvent.click(screen.getByTestId("sidebar-toggle"));
		expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");

		fireEvent.click(screen.getByTestId("sidebar-toggle"));
		expect(screen.getByTestId("sidebar")).not.toHaveClass("collapsed");
	});
});
