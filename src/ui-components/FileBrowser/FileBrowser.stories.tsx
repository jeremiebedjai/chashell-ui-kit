import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import FileBrowser from "./index";
import Button from "../Button";

const meta = {
  title: "Chashell UI/File Browser/Navigation",
  component: FileBrowser,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FileBrowser>;
export default meta;
type Story = StoryObj<typeof FileBrowser>;

export const Try_It: Story = {
  render: () => (
    <div className="w-[900px] max-w-[100%] mb-[100px] bg-slate-500/[.1]">
      <FileBrowser title="File browser">
        <FileBrowser.DirectoryNavigation>
          <FileBrowser.DirectoryNavigation.Directory
            name="/"
            absPath="/"
            user={"root"}
          >
            <FileBrowser.DirectoryNavigation.Directory
              name="bin"
              absPath="/bin"
              user={"root"}
              content={[
                {
                  name: "test.txt",
                  absPath: "/bin/text.txt",
                  user: "root",
                  isDir: false,
                },
                {
                  name: "test.png",
                  absPath: "/bin/text.txt",
                  user: "root",
                  isDir: false,
                },
              ]}
            />
            <FileBrowser.DirectoryNavigation.Directory
              name="home"
              absPath="/home"
              user={"root"}
              content={[
                {
                  name: "rome.png",
                  absPath: "/home/rome.png",
                  user: "root",
                  isDir: false,
                },
                {
                  name: "athens.png",
                  absPath: "/home/athens.png",
                  user: "root",
                  isDir: false,
                },
                {
                  name: "athens.png",
                  absPath: "/home/athens2.png",
                  user: "root",
                  isDir: false,
                },
              ]}
            />
          </FileBrowser.DirectoryNavigation.Directory>
        </FileBrowser.DirectoryNavigation>
        <FileBrowser.FileNavigation
          fileDropdown={() => (
            <>
              <Button
                variant={Button.Variants.light}
                iconProps={{ name: "download-outline", size: 13 }}
                className="text-sm"
              >
                Download File
              </Button>
              <Button
                variant={Button.Variants.light}
                iconProps={{ name: "refresh-outline", size: 13 }}
                className="text-sm"
              >
                Refresh Folder
              </Button>
              <Button
                variant={Button.Variants.light}
                iconProps={{ name: "trash-outline", size: 13 }}
                className="text-sm fill-red-500 text-red-500"
              >
                Delete File
              </Button>
            </>
          )}
        />
      </FileBrowser>
    </div>
  ),
};
