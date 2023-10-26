import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Dropdown from "./index";

const meta = {
  title: "Chashell UI/Dropdown",
  component: Dropdown,

  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "hidden"
    },
    buttonProps: {
      control: "hidden"
    },
    buttonElement: {
      control: "hidden"
    }
  },
  args: {
    buttonProps: {
      className: "inline-flex",
      children: "hover Me",
      color: "gray"
    },
    children: <div className="p-2">Booo</div>,
  },
} satisfies Meta<typeof Dropdown>;
export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Try_It: Story = {};
