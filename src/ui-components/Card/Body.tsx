import React, { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};
const CardBody = ({ children }: CardProps) => {
  return <div className="p-4 gap-2">{children}</div>;
};

export default CardBody;
