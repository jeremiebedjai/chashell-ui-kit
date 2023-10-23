import React, { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};
const CardFooter = ({ children }: CardProps) => {
  return <div className="p-4 flex justify-end gap-2">{children}</div>;
};

export default CardFooter;
