import React, { InputHTMLAttributes, useMemo, useState } from "react";
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
  buttonProps?: Parameters<typeof Button>[0];
} & InputProps;
Input.File = ({ label, error, buttonProps, ...props }: FileProps) => {
  const elementId = useMemo(
    () => (Math.random() + 1).toString(36).substring(7),
    [],
  );
  const [displayValue, setDisplayValue] = useState(props.value);

  return (
    <>
      <input
        {...props}
        type="file"
        id={elementId}
        onChange={(event) => {
          setDisplayValue(event.target.files?.item(0)?.name);
          props.onChange && props.onChange(event);
        }}
        className="w-[0.1px] h-[0.1px] opacity-0 overflow-hidden absolute z-[-1]"
      />
      <label
        className="inline-flex"
        htmlFor={elementId}
        onClick={(event) => {
          const inputElement = document.getElementById(
            elementId,
          ) as HTMLInputElement | null;

          if (inputElement?.value) {
            inputElement.value = "";
            setDisplayValue(undefined);

            if (props.onChange) {
              const event = {
                target: { value: "" } as HTMLInputElement,
              } as React.ChangeEvent<HTMLInputElement>;

              props.onChange(event);
            }

            event.preventDefault();
          }
        }}
      >
        <Button
          iconProps={displayValue ? "close" : "download"}
          color={Button.Colors.gray}
          {...buttonProps}
        >
          {error ?? displayValue ?? label ?? "Choose a file"}
        </Button>
      </label>
    </>
  );
};

export default Input;
