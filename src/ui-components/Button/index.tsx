import React, { HTMLProps, ReactNode } from "react";
import Icon from "../Icon";

type ButtonProps = Omit<HTMLProps<HTMLDivElement>, "size"> & {
  children?: ReactNode;
  onClick?: () => unknown;
  iconProps?: Parameters<typeof Icon>[0] | string;
  disabled?: boolean;
  active?: boolean;
  variant?: (typeof ButtonVariants)[keyof typeof ButtonVariants];
  color?: (typeof ButtonColors)[keyof typeof ButtonColors];
  size?: (typeof ButtonSizes)[keyof typeof ButtonSizes];
};

const ButtonVariants = {
  default: "default",
  tab: "tab",
  nav: "nav",
  light: "light",
  high: "high",
};

const ButtonColors = {
  none: "",
  info: "info",
  warning: "warning",
  success: "success",
  danger: "danger",
  gray: "gray",
};

const ButtonSizes = {
  sm: "sm",
  md: "md",
  lg: "lg",
  xl: "xl",
};

const Button = ({
  children,
  onClick,
  iconProps,
  variant = "default",
  active = false,
  disabled = false,
  className,
  color = "none",
  size = "md",
  ...buttonProps
}: ButtonProps) => {
  let injectedClasses = `${className} ` ?? "";
  const injectedColors = {
    fill: "",
    fillLight: "",
    background: "",
    gradient1: "",
    gradient2: "",
    text: "",
    textLight: "",
    shadow: "",
  };
  const injectedSizes = {
    px2: "",
    px3: "",
    px4: "",
    py3: "",
    p1: "",
    pr1: "",
    pl1: "",
    rounded: "",
    fontSize: "",
    iconSize: 0,
  };

  switch (size) {
    case "sm":
      injectedSizes.px2 = "px-1";
      injectedSizes.px3 = "px-2";
      injectedSizes.px4 = "px-3";
      injectedSizes.py3 = "py-2";
      injectedSizes.p1 = "p-0.5";
      injectedSizes.pr1 = "pr-0.5";
      injectedSizes.pl1 = "pl-0.5";
      injectedSizes.rounded = "rounded-[3px]";
      injectedSizes.fontSize = "text-sm";
      injectedSizes.iconSize = 15;
      break;
    case "md":
      injectedSizes.px2 = "px-2";
      injectedSizes.px3 = "px-3";
      injectedSizes.px4 = "px-4";
      injectedSizes.py3 = "py-3";
      injectedSizes.p1 = "p-1";
      injectedSizes.pr1 = "pr-1";
      injectedSizes.pl1 = "pl-1";
      injectedSizes.rounded = "rounded-[5px]";
      injectedSizes.fontSize = "text-md";
      injectedSizes.iconSize = 20;
      break;
    case "lg":
      injectedSizes.px2 = "px-3";
      injectedSizes.px3 = "px-4";
      injectedSizes.px4 = "px-5";
      injectedSizes.py3 = "py-4";
      injectedSizes.p1 = "p-1.5";
      injectedSizes.pr1 = "pr-1.5";
      injectedSizes.pl1 = "pl-1.5";
      injectedSizes.rounded = "rounded-[6px]";
      injectedSizes.fontSize = "text-lg tracking-wide";
      injectedSizes.iconSize = 30;
      break;
    case "xl":
      injectedSizes.px2 = "px-4";
      injectedSizes.px3 = "px-5";
      injectedSizes.px4 = "px-6";
      injectedSizes.py3 = "py-5";
      injectedSizes.p1 = "p-2";
      injectedSizes.pr1 = "pr-2";
      injectedSizes.pl1 = "pl-2";
      injectedSizes.rounded = "rounded-[8px]";
      injectedSizes.fontSize = "text-xl tracking-wider";
      injectedSizes.iconSize = 40;
      break;
  }

  switch (color) {
    case "success":
      injectedColors.text = "text-emerald-500";
      injectedColors.fill = "fill-emerald-500";
      injectedColors.textLight = "text-emerald-50 active:text-emerald-100";
      injectedColors.fillLight = "fill-emerald-50 active:fill-emerald-100";
      injectedColors.background = "bg-emerald-500";
      injectedColors.gradient1 =
        "bg-gradient-to-r from-emerald-500/[.1] to-emerald-500/[0]";
      injectedColors.gradient2 =
        "bg-gradient-to-r from-emerald-500 to-teal-500 hover:to-teal-600 active:to-teal-500";
      injectedColors.shadow = "shadow-lg  shadow-emerald-500/[.3] ";
      break;
    case "warning":
      injectedColors.text = "text-amber-500";
      injectedColors.fill = "fill-amber-500";
      injectedColors.textLight = "text-amber-50 active:text-amber-100";
      injectedColors.fillLight = "fill-amber-50 active:fill-amber-100";
      injectedColors.background = "bg-amber-500";
      injectedColors.gradient1 =
        "bg-gradient-to-r from-amber-500/[.1] to-amber-500/[0]";
      injectedColors.gradient2 =
        "bg-gradient-to-r from-amber-500 to-orange-500 hover:to-orange-600";
      injectedColors.shadow = "shadow-lg shadow-amber-500/[.3] ";
      break;
    case "info":
      injectedColors.text = "text-sky-500";
      injectedColors.fill = "fill-sky-500";
      injectedColors.textLight = "text-sky-50 active:text-sky-100";
      injectedColors.fillLight = "fill-sky-50 active:fill-sky-100";
      injectedColors.background = "bg-sky-500";
      injectedColors.gradient1 =
        "bg-gradient-to-r from-sky-500/[.1] to-indigo-500/[0]";
      injectedColors.gradient2 =
        "bg-gradient-to-r from-sky-500 to-indigo-500 hover:to-indigo-600";
      injectedColors.shadow = "shadow-lg shadow-sky-500/[.3] ";
      break;
    case "danger":
      injectedColors.text = "text-red-500";
      injectedColors.fill = "fill-red-500";
      injectedColors.textLight = "text-red-50 active:text-red-100";
      injectedColors.fillLight = "fill-red-50 active:fill-red-100";
      injectedColors.background = "bg-red-500";
      injectedColors.gradient1 =
        "bg-gradient-to-r from-red-500/[.1] to-red-500/[0]";
      injectedColors.gradient2 =
        "bg-gradient-to-r from-red-500 to-pink-600 hover:to-pink-700";
      injectedColors.shadow = "shadow-lg shadow-red-500/[.3] ";
      break;
    case "gray":
      injectedColors.text = "text-slate-500";
      injectedColors.fill = "fill-slate-500";
      injectedColors.textLight = "text-slate-50 active:text-slate-100";
      injectedColors.fillLight = "fill-slate-50 active:fill-slate-100";
      injectedColors.background = "bg-slate-500";
      injectedColors.gradient1 =
        "bg-gradient-to-r from-slate-500/[.1] to-slate-500/[0]";
      injectedColors.gradient2 =
        "bg-gradient-to-r from-slate-400 to-slate-500  hover:to-slate-600 active:to-slate-500";
      injectedColors.shadow = "shadow-lg shadow-slate-500/[.3] ";
  }

  switch (variant) {
    case "default":
      injectedClasses += `${injectedColors.text} ${injectedColors.fill} ${injectedColors.background} bg-opacity-25 `;
      if (!disabled)
        injectedClasses += `${injectedSizes.px2} opacity-100 hover:opacity-75 active:opacity-50 `;
      break;
    case "high":
      injectedClasses += `${injectedSizes.px2} text-white fill-white active:scale-[0.97] ${injectedColors.gradient2} ${injectedColors.shadow} ${injectedColors.textLight} ${injectedColors.fillLight} `;
      break;
    case "light":
      injectedClasses += `text-center ${injectedColors.text} ${injectedColors.fill} `;
      if (!disabled)
        injectedClasses += "opacity-75 hover:opacity-100 active:scale-[0.97] ";
      break;
    case "tab":
      injectedClasses += "opacity-75 hover:opacity-100 ";
      if (children) injectedClasses += `${injectedSizes.px3} `;
      if (active)
        injectedClasses += `animate-scaleInSm !opacity-100 ${injectedColors.text} ${injectedColors.fill} ${injectedColors.background} bg-opacity-25 !cursor-default `;
      break;
    case "nav":
      injectedClasses += `opacity-75 hover:opacity-100 px-4 ${injectedSizes.py3} ${injectedSizes.rounded} `;
      if (active)
        injectedClasses += `animate-scaleInSm !cursor-default !opacity-100 ${injectedColors.text} ${injectedColors.fill} ${injectedColors.gradient1} `;
      break;
  }

  if (disabled) {
    injectedClasses += "!opacity-50 !hover:opacity-50 active:opacity-50";
  } else {
    injectedClasses += "cursor-pointer ";
  }

  return (
    <span
      className={`${injectedClasses} flex gap-2 select-none justify-items-center items-center h-fit  ${injectedSizes.p1} ${injectedSizes.rounded} ${injectedSizes.fontSize}`}
      onClick={onClick}
      {...buttonProps}
    >
      {typeof iconProps == "string" && (
        <Icon name={iconProps} size={injectedSizes.iconSize} />
      )}
      {typeof iconProps == "object" && <Icon {...iconProps} />}
      {children && (
        <div
          className={`${injectedSizes.pr1} w-[max-content] ${
            !iconProps && injectedSizes.pl1
          }`}
        >
          {children}
        </div>
      )}
    </span>
  );
};

Button.Variants = ButtonVariants;
Button.Colors = ButtonColors;
Button.Sizes = ButtonSizes;

export default Button;
