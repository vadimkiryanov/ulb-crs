import "app/styles/index.scss";
import { Decorator } from "@storybook/react";
import { ThemeEnum } from "@/app/providers/theme";

export const ThemeDecorator: Decorator = (StoryComponent, ctx) => {
	const selectedTheme: keyof typeof ThemeEnum = ctx.globals.theme || ThemeEnum.LIGHT;

	return (
		<div
			className={`app ${selectedTheme}`}
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<StoryComponent />
		</div>
	);
};
