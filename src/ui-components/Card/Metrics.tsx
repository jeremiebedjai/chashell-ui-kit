import React, { ReactNode } from "react";

type CardMetricsProps = {
  children: ReactNode;
  title: string;
  color?: (typeof MetricsColors)[keyof typeof MetricsColors];
};

const MetricsColors = {
  primary: "primary",
  danger: "danger",
  success: "success",
  default: "default",
};

const CardMetrics = ({
  children,
  title,
  color = MetricsColors.default,
}: CardMetricsProps) => {
  let injectedClasses = "";

  switch (color) {
    case MetricsColors.default:
      injectedClasses += "text-slate-800 dark:text-slate-200 ";
      break;
    case MetricsColors.primary:
      injectedClasses += "text-primary dark:text-primary-dark ";
      break;
    case MetricsColors.danger:
      injectedClasses += "text-red-500 ";
      break;
    case MetricsColors.success:
      injectedClasses += "text-emerald-500 ";
      break;
  }

  return (
    <div className={`p-6 flex flex-col ${injectedClasses}`}>
      <p className="text-sm font-light opacity-50 text-slate-800 dark:text-slate-200">
        {title}
      </p>
      <p className="text-4xl">{children}</p>
    </div>
  );
};

CardMetrics.Colors = MetricsColors;
export default CardMetrics;
