import React, { InputHTMLAttributes, useState } from "react";
import Button from "../Button";

type InputProps = {
  label?: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;
const Input = ({ label, error, ...props }: InputProps) => {
  return (
    <div
      className={`flex flex-col gap-1 ${error && "text-red-500 fill-red-500"}`}
    >
      {label && <span className="px-3 font-semibold opacity-75">{label}</span>}
      <input
        {...props}
        className="rounded px-4 p-1 bg-light2/[.5] border focus:bg-light2/[.3] hover:bg-light2/[.3] border-light2 dark:bg-dark2/[.5] border focus:dark:bg-dark2/[.4] hover:dark:bg-dark2/[.4] dark:border-dark2 outline-none border-box"
      />
      <span className="px-3 font-light opacity-75 italic text-sm">{error}</span>
    </div>
  );
};


type FileProps = {
  buttonProps?: Parameters<typeof Button>[0]
} & InputProps
Input.File = ({ label, error, buttonProps, ...props }: FileProps) => {
  const [displayValue, setDisplayValue] = useState(props.value);

  if (props.type === "file") {
    return (
      <>
        <input
          {...props}
          id={props.name}
          onChange={(event) => {
            setDisplayValue(event.target.files?.item(0)?.name);
            props.onChange && props.onChange(event)
          }}
          className="w-[0.1px] h-[0.1px] opacity-0 overflow-hidden absolute z-[-1]"
        />
        <label className="inline-flex" htmlFor={props.name}>
          <Button iconProps="download" color={Button.Colors.gray} {...buttonProps}>
            {displayValue ?? label ?? "Choose a file"}
          </Button>
        </label>
      </>
    );
  }
}

export default Input;