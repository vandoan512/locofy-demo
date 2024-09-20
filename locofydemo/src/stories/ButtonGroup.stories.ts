import type { Meta, StoryObj } from "@storybook/react";
import ButtonGroup from "../../ButtonGroup";

const meta: Meta<typeof ButtonGroup> = {
  title: "/ButtonGroup",
  component: ButtonGroup,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const ButtonGroupStory: Story = {};
