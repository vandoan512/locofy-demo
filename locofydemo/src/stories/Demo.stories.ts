import type { Meta, StoryObj } from "@storybook/react";
import Demo from "../../Demo";

const meta: Meta<typeof Demo> = {
  title: "/Demo",
  component: Demo,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Demo>;

export const DemoStory: Story = {};
