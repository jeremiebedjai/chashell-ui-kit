import React, { ReactNode } from "react";
import Head from "./Head";
import Footer from "./Footer";
import Body from "./Body";
import Metrics from "./Metrics";

type CardProps = {
  children: ReactNode;
  scaleIn?: boolean;
  shadow?: boolean;
  className?: string;
};

const Card = ({
  children,
  className,
  scaleIn = true,
  shadow = false,
}: CardProps) => {
  return (
    <div
      className={`bg-light1 dark:bg-dark1 basis-1/4 rounded-card 
      ${className}
      ${shadow && "shadow-xl shadow-light2[.1]"}
      ${scaleIn && "animate-scaleInSm"}`}
    >
      {children}
    </div>
  );
};

Card.Header = Head;
Card.Footer = Footer;
Card.Body = Body;
Card.Metrics = Metrics;

export default Card;
