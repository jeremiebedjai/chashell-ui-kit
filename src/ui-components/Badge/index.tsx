import React, { ReactNode } from "react";

const BadgeColor = {
  danger: "danger",
  info: "info",
  success: "success",
  warning: "warning",
  default: "default",
};

type BadgeProps = {
  color?: (typeof BadgeColor)[keyof typeof BadgeColor];
  rounded?: boolean;
  children: ReactNode;
};
const Badge = ({
  color = BadgeColor.default,
  children,
  rounded = false,
}: BadgeProps) => {
  let injectedClasses = "";

  switch (color) {
    case BadgeColor.default:
      injectedClasses += "bg-slate-500/[.3] ";
      break;
    case BadgeColor.danger:
      injectedClasses += "bg-red-500/[.3] text-red-500 ";
      break;
    case BadgeColor.success:
      injectedClasses += "bg-emerald-500/[.3] text-emerald-500 ";
      break;
    case BadgeColor.warning:
      injectedClasses += "bg-amber-500/[.3] text-amber-500 ";
      break;
    case BadgeColor.info:
      injectedClasses += "bg-sky-500/[.3] text-sky-500 ";
      break;
  }

  return (
    <div
      className={`${injectedClasses} ${
        rounded ? "rounded-full" : "rounded-sm"
      } py-1 px-2 text-sm inline-flex gap-2 items-center`}
    >
      {children}
    </div>
  );
};

Badge.Colors = BadgeColor;

export default Badge;
