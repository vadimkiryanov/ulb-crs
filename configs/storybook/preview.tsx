import { ThemeEnum } from "@/app/providers/theme";
import { StyleDecorator } from "@/shared/config/storybook/StyleDecorator/StyleDecorator";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { RouterDecorator } from "@/shared/config/storybook/RouterDecorator/RouterDecorator";

import type { Preview } from "@storybook/react";
import { TranslationDecorator } from "@/shared/config/storybook/TranslationDecorator/TranslationDecorator";

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	globalTypes: {
		theme: {
			name: "Тема",
			description: "Глобальная тема для компонентов",
			defaultValue: ThemeEnum.LIGHT,
			toolbar: {
				icon: "circlehollow",
				items: [ThemeEnum.DARK, ThemeEnum.LIGHT],
				showName: true,
				dynamicTitle: true,
			},
		},
	},
	initialGlobals: {
		theme: ThemeEnum.DARK,
	},

	decorators: [StyleDecorator, ThemeDecorator, RouterDecorator, TranslationDecorator],
};

export default preview;
