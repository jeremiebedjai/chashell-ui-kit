import Icon from "../Icon";
import DirectoryNavigation from "./Directory";
import React, { ReactNode, useState } from "react";
import FileBrowserCtx from "./contexts/FileBrowser.ctx";
import { IFileBrowser } from "./models/IFileBrowser";
import FileNavigation from "./File";

type FileBrowserProps = {
  title?: string;
  children?: ReactNode;
};

const FileBrowser = ({ title, children }: FileBrowserProps) => {
  const [active, setActive] = useState<IFileBrowser>();

  return (
    <FileBrowserCtx.Provider value={{ active, setActive }}>
      <div className="p-3 flex gap-2 items-center font-semibold opacity-75">
        <Icon name="monitor" size={22} /> {title}
      </div>
      <div className="grid grid-cols-12 flex-1">
        <div className="flex col-span-12 ">
          {children}
        </div>
      </div>
    </FileBrowserCtx.Provider>
  );
};



FileBrowser.DirectoryNavigation = DirectoryNavigation
FileBrowser.FileNavigation = FileNavigation

export default FileBrowser;
