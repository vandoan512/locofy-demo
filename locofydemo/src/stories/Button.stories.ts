import type { Meta, StoryObj } from "@storybook/react";
import Button from "../../Button";

const meta: Meta<typeof Button> = {
  title: "/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const ButtonStory: Story = {
  args: {
    iconLeft: true,
    iconRight: true,
    propBackground: "unset",
    propMinWidth: "110px",
    propBackgroundColor: "#fff",
    propBorder: "1px solid #d0d5dd",
    propMinHeight: "44px",
    iconCart: "/iconcalendar.svg",
    buttonCTA: "Monthly",
    propColor: "#344154",
    propMinWidth1: "70px",
    iconCart1: "/iconarrowdown-1.svg",
  },
};
