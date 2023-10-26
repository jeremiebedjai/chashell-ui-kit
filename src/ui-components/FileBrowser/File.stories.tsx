import type { Meta, StoryObj } from "@storybook/react";
import FileBrowser from "./index";

const meta = {
  title: "Chashell UI/File Browser/Files",
  component: FileBrowser.FileNavigation.File,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    color: {
      control: "select",
      options: Object.keys(FileBrowser.FileNavigation.Colors),
    },
    layout: {
      control: "select",
      options: ["grid", "list"],
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FileBrowser.FileNavigation.File>;
export default meta;
type Story = StoryObj<typeof FileBrowser.FileNavigation.File>;

export const Try_It: Story = {
  args: {
    name: "file.txt",
    absPath: "/file",
    user: "username",
    layout: "grid",
    color: "gray",
  },
};
