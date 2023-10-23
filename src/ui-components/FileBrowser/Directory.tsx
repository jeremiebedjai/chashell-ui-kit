import Icon from "../Icon";
import React, { ReactNode, useContext, useState } from "react";
import FileBrowserContext from "./contexts/FileBrowser.ctx";
import { IFileBrowser } from "./models/IFileBrowser";
import Loading from "../Loading";

type DirectoryProps = {
  children?: ReactNode;
  active?: boolean;
  onClick?: (key: string) => unknown;
  onOpen?: (key: string) => unknown;
  open?: boolean;
  loadingMessage?: string;
  loading?: boolean;
} & IFileBrowser;

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
  ...filBrowser
}: DirectoryProps) => {
  const [isOpen, setOpen] = useState(open);
  const { active, setActive } = useContext(FileBrowserContext);

  const isActive = active?.absPath === filBrowser.absPath;

  return (
    <div className="pl-2 select-none">
      <div
        className={`py-1 flex items-center
          ${
            isActive &&
            "fill-primary text-primary dark:fill-primary-dark dark:text-primary-dark"
          }`}
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
            className={`flex items-center gap-1 hover:opacity-75 cursor-pointer w-[max-content]
            ${isActive ? "!opacity-100" : "opacity-50"}`}
            onClick={() => {
              if (setActive) setActive(filBrowser);
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
            <div className="flex items-center animate-pulse text-slate-400 dark:text-slate-600 text-sm pl-4">
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

export default DirectoryNavigation;
