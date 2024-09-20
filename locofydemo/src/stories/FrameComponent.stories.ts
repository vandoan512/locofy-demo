import type { Meta, StoryObj } from "@storybook/react";
import FrameComponent from "../../FrameComponent";

const meta: Meta<typeof FrameComponent> = {
  title: "/FrameComponent",
  component: FrameComponent,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FrameComponent>;

export const FrameComponentStory: Story = {
  args: {
    propBackgroundColor: "#edfcf2",
    arrowUp21: "/arrowup2-1.svg",
    propColor: "#099250",
    walletMoney1: "/walletmoney-1.svg",
    vND: "+3,734,000 VND",
    iconLineArrowRight: "/iconlinearrowright.svg",
  },
};
