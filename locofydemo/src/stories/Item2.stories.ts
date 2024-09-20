import type { Meta, StoryObj } from "@storybook/react";
import Item2 from "../../Item2";

const meta: Meta<typeof Item2> = {
  title: "/Item2",
  component: Item2,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Item2>;

export const Item2Story: Story = {
  args: {
    propBorderBottom: "1px solid #eaecf0",
    propOverflowX: "auto",
    label: "IT",
    label1: "Marketing",
    label2: "Design",
    label3: "+3",
    propBackgroundColor: "#edfcf2",
    propBackgroundColor1: "#fffaeb",
    propBackgroundColor2: "#eff4ff",
    propBackgroundColor3: "",
    propFlex: "",
    propFlex1: "",
    propFlex2: "",
    propFlex3: "",
    propColor: "#099250",
    propColor1: "#dc6803",
    propColor2: "#155eef",
    propColor3: "",
    propMinWidth: "unset",
    propMinWidth1: "62px",
    propMinWidth2: "44px",
    propMinWidth3: "",
    propFlex11: "",
    propFlex12: 1,
    propFlex13: 1,
    propFlex14: "",
    propDisplay: "unset",
    propDisplay1: "",
    propDisplay2: "",
    propDisplay3: "",
  },
};
