export interface IFileBrowser {
  name: string;
  absPath: string;
  isDir: boolean;
  user: string;
  content?: IFileBrowser[];
}
