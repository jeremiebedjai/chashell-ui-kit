import { createContext, Dispatch, SetStateAction } from "react";
import { IFileBrowser } from "../models/IFileBrowser";

interface IFileBrowserContext {
  active: IFileBrowser | undefined;
  setActive?: Dispatch<SetStateAction<IFileBrowser | undefined>>;
}

const FileBrowserContext = createContext<IFileBrowserContext>({
  active: undefined,
});

export default FileBrowserContext;
