import type { Meta, StoryObj } from "@storybook/react";
import Badge from "../../Badge";

const meta: Meta<typeof Badge> = {
  title: "/Badge",
  component: Badge,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const BadgeStory: Story = {
  args: {
    propBackgroundColor: "#eff4ff",
    propFlex: "",
    label: "100 user",
    propColor: "#155eef",
    propMinWidth: "55px",
    propFlex1: 1,
    propDisplay: "",
  },
};
