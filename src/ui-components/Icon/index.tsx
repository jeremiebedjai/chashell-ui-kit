import * as eva from "eva-icons";
import React, { HTMLAttributes, useEffect } from "react";

type IconProps = HTMLAttributes<HTMLSpanElement> & {
  name: string;
  size?: number;
  color?: string;
  className?: string;
};

const Icon = ({ name, size = 20, color, className, ...spanProps }: IconProps) => {
  useEffect(eva.replace, [name, size]);

  return (
    <span
      {...spanProps}
      key={[name, size, color].join("-")}
      className={`inline-block ${className}`}
    >
      <i
        data-eva={name}
        data-eva-height={size}
        data-eva-width={size}
        data-eva-fill={color}
      />
    </span>
  );
};

export default Icon;
