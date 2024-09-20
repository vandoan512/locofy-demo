
          import type { Meta, StoryObj } from '@storybook/react';
          import ButtonGroupBase from '../../ButtonGroupBase';

          const meta: Meta<typeof ButtonGroupBase> = {
            title: "/ButtonGroupBase",
            component: ButtonGroupBase,
            tags: ['autodocs'],
          };

          export default meta;
          type Story = StoryObj<typeof ButtonGroupBase>;

          export const ButtonGroupBaseStory: Story = {
            args: {
iconRight: false,
iconLeft: true,
propBorderRadius: "10px 0px 0px 10px",
propAlignSelf: "stretch",
propFlex: 1,
propBackgroundColor: "",
propBorder: "",
propBorderTop: "",
propBorderBottom: "",
propMinWidth: "",
propMinHeight: "",
iconEdit: '/iconoverview.svg',
trailing: "Overview",
propMinWidth1: "58px",
propTextDecoration: "none",
propColor: "",
propDisplay: "",
iconLineArrowRight: pending_I3023:16456;581:3326;1071:7166,},
          };
        