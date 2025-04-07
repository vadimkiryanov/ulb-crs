import { I18nextProvider } from "react-i18next";
import { Decorator } from "@storybook/react";
import i18n from "@/shared/config/i18n/i18nForTests";

export const TranslationDecorator: Decorator = (Story) => {
	return (
		<I18nextProvider i18n={i18n}>
			<Story />
		</I18nextProvider>
	);
};