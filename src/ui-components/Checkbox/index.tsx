import React from "react";
import Icon from "../Icon";

type CheckboxProps = {
  checked: boolean;
  onCheck: (checked?: boolean) => unknown;
};
const Checkbox = ({ onCheck, checked }: CheckboxProps) => {
  return (
    <div
      onClick={() => onCheck(!checked)}
      className="flex items-center place-self-stretch cursor-pointer opacity-75 hover:opacity-100"
    >
      <Icon
        key={checked ? "checkmark-square-2" : "square"}
        name={checked ? "checkmark-square-2" : "square"}
        className="animate-scaleInSm fill-slate-600 dark:fill-slate-400"
        size={20}
      />
    </div>
  );
};

export default Checkbox;
