import React from "react";

type SeparatorProps = {
  direction?: (typeof SeparatorDirections)[keyof typeof SeparatorDirections];
};

const SeparatorDirections = {
  x: "x",
  y: "y",
};

const Separator = ({ direction = "x" }: SeparatorProps) => {
  switch (direction) {
    case "x":
      return (
        <div className="w-full px-8 py-2">
          <div className="border-b border-slate-600/[.2] dark:border-slate-300/[.2]" />
        </div>
      );
    case "y":
      return (
        <div className="h-full px-2 py-4 ">
          <div className="h-full border-r border-slate-600/[.2] dark:border-slate-300/[.2]" />
        </div>
      );
  }
};

export default Separator;
