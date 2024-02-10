import type { Meta, StoryObj } from "@storybook/react";
import Input from "./index";

const meta = {
  title: "Chashell UI/Input/File",
  component: Input.File,

  tags: ["autodocs"],
  args: {
    type: "file",
    name: "import"
  },
} satisfies Meta<typeof Input.File>;
export default meta;
type Story = StoryObj<typeof Input.File>;

export const Try_It: Story = {};
