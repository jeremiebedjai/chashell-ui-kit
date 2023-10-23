import type { Meta, StoryObj } from "@storybook/react";
import Alert from "./index";

const meta = {
  title: "Chashell UI/Alert",
  component: Alert,

  tags: ["autodocs"],
  argTypes: {
    level: {
      control: "select",
      options: Object.keys(Alert.levels),
    },
  },
  args: {
    children: "Alert message! ",
    level: "danger",
  },
} satisfies Meta<typeof Alert>;
export default meta;
type Story = StoryObj<typeof Alert>;

export const Try_It: Story = {};
