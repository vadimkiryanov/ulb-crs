import type { Meta, StoryObj } from "@storybook/react";
import { ErrorInPage } from "./ErrorInPage";

const meta = {
	title: "widgets/ErrorInPage",
	component: ErrorInPage,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof ErrorInPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
