import React from "react"

const DiodeColors = {
  primary: "primary",
  danger: "danger",
  success: "success",
  default: "default",
};

type DiodeProps = {
  color: typeof DiodeColors[keyof typeof DiodeColors];
};
const Diode = ({ color = "default" }: DiodeProps) => {
  let injectedClasses = "";

  switch (color) {
    case DiodeColors.default:
      injectedClasses += "border-slate-200/[.5] shadow-slate-500 bg-slate-500 !shadow-none ";
      break;
    case DiodeColors.primary:
      injectedClasses +=
        "border-primary-200/[.5] shadow-primary-500 bg-primary-500 dark:border-primary-dark-200/[.5] dark:shadow-primary-dark-500 dark:bg-primary-dark-500 ";

      break;
    case DiodeColors.danger:
      injectedClasses += "border-red-200/[.5] shadow-red-500 bg-red-500 ";

      break;
    case DiodeColors.success:
      injectedClasses +=
        "border-emerald-200/[.5] shadow-emerald-500 bg-emerald-500 ";
      break;
  }

  return <div className={`${injectedClasses} shadow w-2 h-2 rounded-full border-2 border`} />;
};

Diode.Colors = DiodeColors;

export default Diode;
