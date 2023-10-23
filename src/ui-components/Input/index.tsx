import React, { InputHTMLAttributes } from "react";

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
        name="agentName"
        className="rounded px-4 p-1 bg-light2/[.5] border focus:bg-light2/[.3] hover:bg-light2/[.3] border-light2 dark:bg-dark2/[.5] border focus:dark:bg-dark2/[.4] hover:dark:bg-dark2/[.4] dark:border-dark2 outline-none border-box"
      />
      <span className="px-3 font-light opacity-75 italic text-sm">{error}</span>
    </div>
  );
};

export default Input;
