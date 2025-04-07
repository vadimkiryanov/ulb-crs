import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button, ThemeButtonEnum } from "./Button";

const meta = {
	title: "shared/Button",
	component: Button,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
	argTypes: {
		theme: {
			control: "radio",
			options: Object.values(ThemeButtonEnum),
		},
	},
	args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		children: "Primary",
	},
};

export const Clear: Story = {
	args: {
		theme: ThemeButtonEnum.CLEAR,
		children: "Clear",
	},
};

export const Outline: Story = {
	args: {
		theme: ThemeButtonEnum.OUTLINE,
		children: "Outline",
	},
};
