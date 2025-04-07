// ThemeSwitcher.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { ThemeSwitcher } from "@/widgets/ThemeSwitcher";

const meta = {
  title: "widgets/ThemeSwitcher",
  component: ThemeSwitcher,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    className: "",
  }
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};