import * as eva from "eva-icons";
import React, { useEffect } from "react";

type IconProps = {
  name: string;
  size?: number;
  color?: string;
  className?: string;
};

const Icon = ({ name, size = 20, color, className }: IconProps) => {
  useEffect(eva.replace, [name]);

  return (
    <span key={[name, size, color].join("-")} className={`inline-block ${className}`}>
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
