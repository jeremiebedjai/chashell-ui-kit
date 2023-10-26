import Icon from "../Icon";
import React, { ReactNode, useContext, useState } from "react";
import FileBrowserContext from "./contexts/FileBrowser.ctx";
import { IFileBrowser } from "./models/IFileBrowser";
import Loading from "../Loading";

const DirectoryColors = {
  info: "info",
  warning: "warning",
  success: "success",
  danger: "danger",
  gray: "gray",
};

type DirectoryProps = {
  children?: ReactNode;
  active?: boolean;
  onClick?: (key: string) => unknown;
  onOpen?: (key: string) => unknown;
  open?: boolean;
  loadingMessage?: string;
  activeClassName?: string;
  className?: string;
  loading?: boolean;
  color?: (typeof DirectoryColors)[keyof typeof DirectoryColors];
} & Omit<IFileBrowser, "isDir">;

type NavigationProps = {
  children?: ReactNode;
};

const DirectoryNavigation = ({ children }: NavigationProps) => {
  return <div className="p-4 w-[200px] flex flex-col">{children}</div>;
};

DirectoryNavigation.Directory = ({
  children,
  open,
  onClick,
  onOpen,
  loading = false,
  loadingMessage = "Syncing...",
  activeClassName = "",
  className = "",
  color = "gray",
  ...filBrowser
}: DirectoryProps) => {
  const [isOpen, setOpen] = useState(open);
  const { active, setActive } = useContext(FileBrowserContext);

  const isActive = active?.absPath === filBrowser.absPath;

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
      break;
    case "danger":
      injectedColors.text = "text-red-500";
      injectedColors.fill = "fill-red-500";
      break;
    case "gray":
      injectedColors.text = "text-stone-500";
      injectedColors.fill = "fill-stone-500";
  }

  return (
    <div className="pl-2 select-none">
      <div
        className={`py-1 flex items-center ${injectedColors.text} ${
          injectedColors.fill
        } ${className}
          ${isActive && `underline ${activeClassName}`}`}
      >
        <div className="flex gap-1 cursor-pointer">
          {/* Arrow Icon */}
          <span
            className="flex items-center opacity-75 hover:opacity-100"
            onClick={() => {
              setOpen(!isOpen);
              if (onOpen) onOpen(filBrowser.absPath);
            }}
          >
            {isOpen ? (
              <Icon name="chevron-down" size={17} />
            ) : (
              <Icon name="chevron-right" size={17} />
            )}
          </span>
          {/* Folder Icon */}
          <span
            className={`flex items-center gap-1 hover:opacity-80 active:opacity-75 cursor-pointer w-[max-content]`}
            onClick={() => {
              if (setActive) setActive({ ...filBrowser, isDir: true });
              if (isActive) setOpen(!isOpen);
              if (onClick) onClick(filBrowser.absPath);
            }}
          >
            <Icon name="folder" size={17} />
            {filBrowser.name}
          </span>
        </div>
      </div>
      {/* Children */}
      {isOpen && (
        <>
          {loading ? (
            <div className="flex items-center animate-pulse text-stone-400 dark:text-stone-600 text-sm pl-4">
              <Loading.Spin className="w-4 h-4" /> {loadingMessage}
            </div>
          ) : children ? (
            React.Children.map(children, (item) => (
              <div className="flex">
                <Icon
                  className="opacity-25 py-2 relative left-1"
                  name="corner-down-right"
                  size={15}
                />
                {item}
              </div>
            ))
          ) : (
            <div className="italic opacity-50 text-xs ml-8">empty</div>
          )}
        </>
      )}
    </div>
  );
};
DirectoryNavigation.Colors = DirectoryColors;
export default DirectoryNavigation;
