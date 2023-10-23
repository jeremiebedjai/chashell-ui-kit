import React, { ReactNode } from "react";

const BadgeColor = {
  danger: "danger",
  primary: "primary",
  info: "info",
  success: "success",
  warning: "warning",
  default: "default",
};

type BadgeProps = {
  color?: (typeof BadgeColor)[keyof typeof BadgeColor];
  children: ReactNode;
};
const Badge = ({ color = BadgeColor.default, children }: BadgeProps) => {
  let injectedClasses = "";

  switch (color) {
    case BadgeColor.default:
      injectedClasses += "bg-slate-500/[.3] ";
      break;
    case BadgeColor.primary:
      injectedClasses += "bg-primary-500/[.3] text-primary-500 ";
      break;
    case BadgeColor.danger:
      injectedClasses += "bg-red-500/[.3] text-red-500 ";

      break;
    case BadgeColor.success:
      injectedClasses += "bg-emerald-500/[.3] text-emerald-500 ";
      break;
  }

  return (
    <div className={`${injectedClasses} py-1 px-2 text-sm rounded-sm flex gap-2 items-center`}>
      {children}
    </div>
  );
};

Badge.Colors = BadgeColor;

export default Badge;
