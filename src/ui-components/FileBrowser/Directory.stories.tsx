import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import FileBrowser from "./index";
import DirectoryNavigation from "./Directory";

const meta = {
  title: "Chashell UI/File Browser/Directories",
  component: FileBrowser.DirectoryNavigation.Directory,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: Object.keys(FileBrowser.DirectoryNavigation.Colors),
    },
  },
} satisfies Meta<typeof FileBrowser.DirectoryNavigation.Directory>;
export default meta;
type Story = StoryObj<typeof FileBrowser.DirectoryNavigation.Directory>;

export const Try_It: Story = {
  args: {
    name: "home",
    absPath: "/home",
    user: "username",
  },
};

export const SubFolders: Story = {
  render: () => (
    <DirectoryNavigation.Directory
      name="folder"
      absPath="/folder"
      user="username"
    >
      <DirectoryNavigation.Directory
        name="subfolder"
        absPath="/subfolder"
        user="username"
      />
    </DirectoryNavigation.Directory>
  ),
};

export const Loading: Story = {
  render: () => (
    <DirectoryNavigation.Directory
      name="loading folder"
      absPath="/folder"
      user="username"
      loadingMessage="This will take a while"
      loading
    >
      <DirectoryNavigation.Directory
        name="subfolder"
        absPath="/subfolder"
        user="username"
      />
    </DirectoryNavigation.Directory>
  ),
};
