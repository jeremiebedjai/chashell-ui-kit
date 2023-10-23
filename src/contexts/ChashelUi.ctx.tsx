import React, {
  createContext,
  Dispatch, ReactNode,
  SetStateAction,
  useEffect,
  useState
} from "react";

export interface ChashelUiCtx {
  darkMod: boolean;
  setDarkMod: Dispatch<SetStateAction<boolean>>;
}

const ChashelUiCtx = createContext<ChashelUiCtx>({
  darkMod: true,
  setDarkMod: () => undefined,
});

export default ChashelUiCtx;

type ThemeProps = {
  children: ReactNode
}

const darkModStorageKey = "chashell-ui:darkmod"
const darkModValue = localStorage.getItem(darkModStorageKey) !== "false"
export const Theme = ({ children }: ThemeProps) => {
  const [darkMod, setDarkMod] = useState(darkModValue);

  // Toggle dark theme
  useEffect(() => {
    localStorage.setItem(darkModStorageKey, darkMod.toString());
    document
      .querySelectorAll("html")
      .forEach((element) =>
        darkMod
          ? element.classList.add("dark")
          : element.classList.remove("dark"),
      );
  }, [darkMod]);

  return (
    <ChashelUiCtx.Provider value={{ darkMod, setDarkMod }}>
      {children}
    </ChashelUiCtx.Provider>
  );
};
