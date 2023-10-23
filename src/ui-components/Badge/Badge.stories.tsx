import type { Meta, StoryObj } from "@storybook/react";
import Badge from "./index";

const meta = {
  title: "Chashell UI/Badge",
  component: Badge,

  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: Object.keys(Badge.Colors),
    },
    rounded: {
      control: "boolean",
    },
  },
  args: {
    children: "Badge",
  },
} satisfies Meta<typeof Badge>;
export default meta;
type Story = StoryObj<typeof Badge>;

export const Try_It: Story = {};
