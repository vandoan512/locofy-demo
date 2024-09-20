
          import type { Meta, StoryObj } from '@storybook/react';
          import Item from '../../Item';

          const meta: Meta<typeof Item> = {
            title: "/Item",
            component: Item,
            tags: ['autodocs'],
          };

          export default meta;
          type Story = StoryObj<typeof Item>;

          export const ItemStory: Story = {
            args: {
propBorderBottom: "1px solid #eaecf0",
subtract: pending_I3023:16544;726:1789,
img: '/img@2x.png',
tranBaoAnh: "Tran Bao Anh",
propAlignSelf: "stretch",
propWidth: "",
propDisplay: "",
propOverflow: "",
propTextOverflow: "",},
          };
        