import React, { HTMLProps, ReactNode } from "react";
import Icon from "../Icon";

type ButtonProps = {
  children?: ReactNode;
  onClick?: () => unknown;
  iconProps?: Parameters<typeof Icon>[0] | string;
  disabled?: boolean;
  active?: boolean;
  variant?: (typeof ButtonVariants)[keyof typeof ButtonVariants];
} & HTMLProps<HTMLDivElement>;

const ButtonVariants = {
  default: "default",
  tab: "tab",
  nav: "nav",
  light: "light",
};

const Button = ({
  children,
  onClick,
  iconProps,
  variant = "default",
  active = false,
  disabled = false,
  className,
  ...buttonProps
}: ButtonProps) => {
  let injectedClasses = `${className} ` ?? "";

  switch (variant) {
    case "default":
      injectedClasses += "bg-slate-300 dark:bg-slate-300/[.1] ";
      if (!disabled)
        injectedClasses += "opacity-100 hover:opacity-75 active:opacity-50 ";
      break;
    case "light":
      injectedClasses += "text-center ";
      if (!disabled)
        injectedClasses += "opacity-75 hover:opacity-100 active:opacity-90 ";
      break;
    case "tab":
      injectedClasses += "opacity-75 hover:opacity-100 ";
      if (children) injectedClasses += "px-3 ";
      if (active)
        injectedClasses += "animate-scaleInSm !opacity-100 text-primary fill-primary bg-primary/[.1] dark:text-primary-dark dark:fill-primary-dark dark:bg-primary-dark/[.2] !cursor-default ";
      break;
    case "nav":
      injectedClasses += "opacity-75 hover:opacity-100 px-4 py-3 rounded-md ";
      if (active)
        injectedClasses += "animate-scaleInSm !cursor-default !opacity-100 text-primary fill-primary bg-gradient-to-r from-primary/[.1] to-primary/[0] dark:text-primary-dark dark:fill-primary-dark bg-gradient-to-r dark:from-primary-dark/[.1] dark:to-primary-dark/[0] ";
      break;
  }

  if (disabled) {
    injectedClasses += "!opacity-50 !hover:opacity-50 active:opacity-50";
  } else {
    injectedClasses += "cursor-pointer ";
  }

  return (
    <span
      className={`${injectedClasses} flex gap-2 rounded-[5px] select-none justify-items-center items-center p-1 h-fit`}
      onClick={onClick}
      {...buttonProps}
    >
      {typeof iconProps == "string" && <Icon name={iconProps} />}
      {typeof iconProps == "object" && <Icon {...iconProps} />}
      {children && (
        <div className={`pr-1 w-[max-content] ${!iconProps && "pl-1"}`}>{children}</div>
      )}
    </span>
  );
};

Button.Variants = ButtonVariants;

export default Button;
