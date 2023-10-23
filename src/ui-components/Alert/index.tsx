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
      levelClassInjection = " bg-red-500 fill-red-500 text-red-500";
      icon = "alert-circle-outline";
      break;
    case "info":
      levelClassInjection = " bg-sky-500 fill-sky-500 text-sky-500";
      icon = "info-outline";
      break;
    case "warning":
      levelClassInjection = " bg-amber-500 fill-amber-500 text-amber-500";
      icon = "alert-triangle-outline";
      break;
    case "success":
      levelClassInjection = " bg-emerald-500 fill-emerald-500 text-emerald-500";
      icon = "checkmark-circle-2-outline";
      break;
  }

  return (
    <div
      className={` ${levelClassInjection} bg-opacity-[0.2] rounded-sm p-2 pl-3 flex-col justify-items-center items-center `}
    >
      <div className="flex justify-items-center items-center gap-2">
        <Icon name={icon} size={25} />
        <span className="font-light">{title || children}</span>
      </div>
      {title && (
        <p className="w-full block opacity-75 font-light p-2">{children}</p>
      )}
    </div>
  );
};

Alert.levels = AlertLevel;

export default Alert;
