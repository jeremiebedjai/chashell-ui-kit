import React, { useContext } from "react";
import ChashelUiCtx from "../../contexts/ChashelUi.ctx";
import Icon from "../Icon";

const DarkModButton = () => {
  const { darkMod, setDarkMod } = useContext(ChashelUiCtx);

  return (
    <div
      className="select-none mr-4 cursor-pointer relative bg-light2 dark:bg-dark2 h-5 rounded-full w-[50px] flex items-center transition-all"
      onClick={() => setDarkMod(!darkMod)}
    >
      <div
        className="absolute rounded-full h-6 w-6 bg-light1 dark:bg-dark1 shadow border border-[3px] box-content border-slate-900/[.2]
         dark:border-slate-400/[.2] flex items-center justify-center transition-all left-0 dark:left-[30px]"
      >
        <Icon
          key={darkMod ? "moon" : "sun"}
          name={darkMod ? "moon" : "sun"}
          color={darkMod ? "#d3c49f" : "#ffbe18"}
          size={20}
        />
      </div>
    </div>
  );
};
export default DarkModButton;
