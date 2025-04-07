// Loader.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Loader } from "./Loader";

const meta = {
  title: "shared/Loader",
  component: Loader,
  parameters: {
    layout: "fullscreen"
  },
  tags: ["autodocs"]
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};