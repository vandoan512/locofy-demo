
          import type { Meta, StoryObj } from '@storybook/react';
          import TextField from '../../TextField';

          const meta: Meta<typeof TextField> = {
            title: "/TextField",
            component: TextField,
            tags: ['autodocs'],
          };

          export default meta;
          type Story = StoryObj<typeof TextField>;

          export const TextFieldStory: Story = {
            args: {
iconRight: false,
iconLeft: true,
propWidth: "unset",
propAlignSelf: "stretch",
propHeight: "44px",
hintText: "Search",
propTextDecoration: "none",
iconEyeOpen: pending_I3023:16403;9:2792,
propGap: "unset",
propPadding: "0px 2px 0px 0px",
iconArrowDown: pending_I3023:16403;9:2795,},
          };
        