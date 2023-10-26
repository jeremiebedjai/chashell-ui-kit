import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { IFileBrowser } from "./models/IFileBrowser";
import FileBrowserContext from "./contexts/FileBrowser.ctx";
import Icon from "../Icon";
import Button from "../Button";
import Loading from "../Loading";
import { Dropdown } from "../../index";

type FileNavigationProps = {
  loadings?: string[];
  loadingMessage?: string;
  fileDropdown?: (file: IFileBrowser) => ReactNode;
  colors?: FileProps["color"];
};
const FileNavigation = ({
  loadings = [],
  loadingMessage,
  fileDropdown,
  colors,
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
    <div className="w-full ">
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
        ) : fileDir?.content && fileDropdown ? (
          fileDir.content
            .filter(({ isDir }) => !isDir)
            .map((file) => (
              <div className="group">
                <Dropdown
                  key={file.absPath}
                  className="rounded-none p-2"
                  dark
                  openOnCursorPos
                  openOnClick
                  buttonElement={
                    <FileNavigation.File
                      color={colors}
                      setActiveFile={setActiveFile}
                      layout={layout}
                      active={activeFile}
                      {...file}
                    />
                  }
                >
                  {fileDropdown(file)}
                </Dropdown>
              </div>
            ))
        ) : null}
      </div>
    </div>
  );
};

const extensionsMapping: Record<string, string> = {
  jpg: "image-2",
  png: "image-2",
  gif: "image-2",
  docx: "file-text",
  pdf: "file-text",
  mp4: "film",
  mkv: "film",
  zip: "archive",
  tar: "archive",
  txt: "file-text",
  // ... add more if necessary
  default: "file",
};

type FileProps = {
  layout: "list" | "grid";
  setActiveFile?: Dispatch<SetStateAction<IFileBrowser | undefined>>;
  active?: IFileBrowser | undefined;
  color?: (typeof FileColors)[keyof typeof FileColors];
} & Omit<IFileBrowser, "isDir">;

const FileColors = {
  info: "info",
  warning: "warning",
  success: "success",
  danger: "danger",
  gray: "gray",
};

FileNavigation.File = ({
  layout = "list",
  active,
  setActiveFile,
  color,
  ...file
}: FileProps) => {
  const ext = file.name.split(".").pop() ?? "default";
  const icon = extensionsMapping[ext in extensionsMapping ? ext : "default"];

  const injectedColors = {
    fill: "",
    background: "",
    text: "",
  };

  switch (color) {
    case "success":
      injectedColors.text = "text-emerald-500";
      injectedColors.fill = "fill-emerald-500";
      injectedColors.background = "bg-emerald-500";
      break;
    case "warning":
      injectedColors.text = "text-amber-500";
      injectedColors.fill = "fill-amber-500";
      injectedColors.background = "bg-amber-500";
      break;
    case "info":
      injectedColors.text = "text-sky-500";
      injectedColors.fill = "fill-sky-500";
      injectedColors.background = "bg-sky-500";
      break;
    case "danger":
      injectedColors.text = "text-red-500";
      injectedColors.fill = "fill-red-500";
      injectedColors.background = "bg-red-500";
      break;
    case "gray":
      injectedColors.text = "text-stone-500";
      injectedColors.fill = "fill-stone-500";
      injectedColors.background = "bg-stone-500";
  }

  return (
    <>
      {layout === "grid" && (
        <div
          className={`flex flex-col gap-2 items-center group cursor-pointer  ${injectedColors.fill} ${injectedColors.text}`}
          onClick={() =>
            setActiveFile && setActiveFile({ ...file, isDir: false })
          }
        >
          <Icon
            name={icon}
            size={30}
            className="opacity-90 group-hover:opacity-100"
          />
          <div
            className={`flex flex-col text-sm text-center ${injectedColors.background} bg-opacity-[0.1] opacity-90 group-hover:opacity-100 px-2 rounded-md`}
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
          onClick={() =>
            setActiveFile && setActiveFile({ ...file, isDir: false })
          }
          className={`justify-between text-sm p-2 rounded-sm flex gap-1 items-center group cursor-pointer py-1 ${injectedColors.fill} ${injectedColors.text}  ${injectedColors.background} bg-opacity-[0.1] group-odd:bg-opacity-[0.05]`}
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

FileNavigation.Colors = FileColors;

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
