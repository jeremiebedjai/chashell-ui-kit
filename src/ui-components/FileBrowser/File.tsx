import { IFileBrowser } from "./models/IFileBrowser";
import React, { Dispatch, SetStateAction, useContext, useState } from "react";
import FileBrowserContext from "./contexts/FileBrowser.ctx";
import Icon from "../Icon";
import Button from "../Button";
import Loading from "../Loading";
import Dropdown from "../Dropdown";

type FileNavigationProps = {
  loadings?: string[];
  loadingMessage?: string;
};
const FileNavigation = ({
  loadings = [],
  loadingMessage,
}: FileNavigationProps) => {
  const { active: fileDir } = useContext(FileBrowserContext);
  const [layout, setLayout] = useState<"list" | "grid">("list");
  const [activeFile, setActiveFile] = useState<IFileBrowser>();

  const loading = fileDir?.absPath && loadings?.includes(fileDir?.absPath);

  let injectedClasses = "";
  switch (layout) {
    case "list":
      injectedClasses += "flex-col py-2";
      break;
    case "grid":
      injectedClasses += "gap-6 p-4";
      break;
  }

  return (
    <div>
      <div className="flex opacity-75">
        <Button
          active={layout === "grid"}
          variant={Button.Variants.tab}
          iconProps={{ name: "grid", size: 16 }}
          onClick={() => setLayout("grid")}
        />
        <Button
          active={layout === "list"}
          variant={Button.Variants.tab}
          iconProps={{ name: "list", size: 16 }}
          onClick={() => setLayout("list")}
        />
      </div>
      <div className={`flex ${injectedClasses}`}>
        {loading ? (
          <FileNavigation.Loading loadingMessage={loadingMessage} />
        ) : fileDir?.content ? (
          fileDir.content
            .filter(({ isDir }) => !isDir)
            .map((file) => (
              <Dropdown
                key={file.absPath}
                className="rounded-none p-2"
                dark
                openOnCursorPos
                openOnClick
                buttonElement={
                  <FileNavigation.File
                    setActiveFile={setActiveFile}
                    layout={layout}
                    active={activeFile}
                    {...file}
                  />
                }
              >
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
              </Dropdown>
            ))
        ) : null}
      </div>
    </div>
  );
};

type FileIconMapping = {
  icon: string;
  color: string;
};

const extensionsMapping: Record<string, FileIconMapping> = {
  jpg: {
    icon: "image-2",
    color: "fill-rose-500 text-rose-500 dark:fill-rose-500 dark:text-rose-500",
  },
  png: {
    icon: "image-2",
    color: "fill-rose-500 text-rose-500 dark:fill-rose-500 dark:text-rose-500",
  },
  gif: {
    icon: "image-2",
    color: "fill-rose-500 text-rose-500 dark:fill-rose-500 dark:text-rose-500",
  },
  docx: {
    icon: "file-text",
    color: "fill-rose-500 text-rose-500 dark:fill-rose-500 dark:text-rose-500",
  },
  pdf: {
    icon: "file-text",
    color: "fill-rose-500 text-rose-500 dark:fill-rose-500 dark:text-rose-500",
  },
  mp4: {
    icon: "film",
    color: "fill-rose-500 text-rose-500 dark:fill-rose-500 dark:text-rose-500",
  },
  mkv: {
    icon: "film",
    color: "fill-rose-500 text-rose-500 dark:fill-rose-500 dark:text-rose-500",
  },
  zip: {
    icon: "archive",
    color: "fill-rose-500 text-rose-500 dark:fill-rose-500 dark:text-rose-500",
  },
  tar: {
    icon: "archive",
    color: "fill-rose-500 text-rose-500 dark:fill-rose-500 dark:text-rose-500",
  },
  txt: {
    icon: "file-text",
    color:
      "fill-slate-600 text-slate-600 dark:fill-slate-400 dark:text-slate-400",
  },
  // ... add more if necessary
  default: {
    icon: "file",
    color:
      "fill-slate-600 text-slate-600 dark:fill-slate-400 dark:text-slate-400",
  },
};

type FileProps = {
  layout: "list" | "grid";
  setActiveFile: Dispatch<SetStateAction<IFileBrowser | undefined>>;
  active: IFileBrowser | undefined;
} & IFileBrowser;

FileNavigation.File = ({
  layout = "list",
  active,
  setActiveFile,
  ...file
}: FileProps) => {
  const ext = file.name.split(".").pop() ?? "default";
  const { icon, color } =
    extensionsMapping[ext in extensionsMapping ? ext : "default"];

  let injectedClasses = "  box-border ";
  if (active?.absPath === file.absPath) {
    injectedClasses +=
      "border border-primary/[.7] dark:border-primary-dark/[.7] ";
  }

  return (
    <>
      {layout === "grid" && (
        <div
          className={`${color} flex flex-col gap-2 items-center group cursor-pointer`}
          onClick={() => setActiveFile(file)}
        >
          <Icon
            name={icon}
            size={30}
            className="opacity-90 group-hover:opacity-100"
          />
          <div
            className={`flex flex-col ${injectedClasses} text-sm text-center bg-light2 dark:bg-dark2 opacity-90 group-hover:opacity-100 px-2 rounded-md`}
          >
            {file.name}
            <span className="opacity-50 group-hover:opacity-75 text-xs">
              {file.user}
            </span>
          </div>
        </div>
      )}
      {layout === "list" && (
        <div
          onClick={() => setActiveFile(file)}
          className={` ${color} ${injectedClasses} justify-between text-sm p-2 rounded-sm flex gap-1 items-center group cursor-pointer py-1 odd:bg-light2 dark:odd:bg-dark2`}
        >
          <div className="flex">
            <Icon
              name={icon}
              size={20}
              className="opacity-90 group-hover:opacity-100"
            />
            <div className="opacity-90 group-hover:opacity-100 px-2 rounded-md">
              {file.name}
            </div>
          </div>
          <div className="flex gap-2 opacity-50 group-hover:opacity-75">
            <div>{file.user}</div>
          </div>
        </div>
      )}
    </>
  );
};

FileNavigation.Loading = ({
  loadingMessage = "Syncing...",
}: Pick<FileNavigationProps, "loadingMessage">) => {
  return (
    <div className="flex items-center animate-pulse text-slate-400 dark:text-slate-600 text-sm pl-4">
      <Loading.Spin className="w-4 h-4" /> {loadingMessage}
    </div>
  );
};

export default FileNavigation;
