import React, { ReactNode } from "react";
import Icon from "../Icon";

const AlertLevel = {
  danger: "danger",
  info: "info",
  success: "success",
  warning: "warning",
};

type AlertProps = {
  children: ReactNode;
  level: (typeof AlertLevel)[keyof typeof AlertLevel];
  title?: string;
};
const Alert = ({ children, level, title }: AlertProps) => {
  let levelClassInjection = "";
  let icon = "";
  switch (level) {
    case "danger":
      levelClassInjection = "border-red-500 bg-red-500 fill-red-300";
      icon = "alert-circle";
      break;
    case "info":
      levelClassInjection = "border-cyan-500 bg-cyan-500 fill-cyan-300";
      icon = "info";
      break;
    case "warning":
      levelClassInjection = "border-amber-500 bg-amber-500 fill-amber-300";
      icon = "alert-triangle";
      break;
    case "success":
      levelClassInjection =
        "border-emerald-500 bg-emerald-500 fill-emerald-300";
      icon = "checkmark-circle-2";
      break;
  }

  return (
    <div
      className={`border-l-4 ${levelClassInjection} gap-4 bg-opacity-[0.2] rounded-sm p-2 pl-4 flex-col justify-items-center items-center `}
    >
      <div className="flex justify-items-center items-center gap-2">
        <Icon name={icon} size={30} />
        <span className="font-semibold">{title || children}</span>
      </div>
      {title && (
        <p className="w-full block opacity-75 font-light p-2">{children}</p>
      )}
    </div>
  );
};

Alert.levels = AlertLevel;

export default Alert;
