import i18nForTests from "@/shared/config/i18n/i18nForTests";
import { render } from "@testing-library/react";
import React, { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";

/**
 * Renders a React component with i18n translation support for testing purposes.
 *
 * @param Component - The React component to be rendered.
 * @returns The rendered component wrapped with an I18nextProvider using test-specific i18n configuration.
 */
export function renderWithTranslation(Component: ReactNode) {
	return render(<I18nextProvider i18n={i18nForTests}>{Component}</I18nextProvider>);
}
