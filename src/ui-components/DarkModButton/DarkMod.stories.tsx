import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import DarkModButton from "./index";
import { Theme } from "../../contexts/ChashelUi.ctx";

const meta = {
  title: "Chashell UI/Dark Mod",
  component: DarkModButton,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["toggle", "icon"],
    },
  },
  args: {
    variant: "toggle",
    size: 30,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DarkModButton>;
export default meta;
type Story = StoryObj<typeof DarkModButton>;

export const Try_It: Story = {
  render: (props) => (
    <Theme>
      <DarkModButton {...props} />
    </Theme>
  ),
};
