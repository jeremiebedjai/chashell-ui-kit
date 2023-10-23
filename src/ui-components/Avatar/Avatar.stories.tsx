import type { Meta, StoryObj } from "@storybook/react";
import Avatar from "./index";

const meta = {
  title: "Chashell UI/Avatar",
  component: Avatar,

  tags: ["autodocs"],
  argTypes: {},
  args: {
    src: "https://thispersondoesnotexist.com/",
    size: 40,
  },
} satisfies Meta<typeof Avatar>;
export default meta;
type Story = StoryObj<typeof Avatar>;

export const Try_It: Story = {};
