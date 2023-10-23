import React, { ReactNode } from "react";
import Head from "./Head";
import Footer from "./Footer";
import Body from "./Body";
import Metrics from "./Metrics";

type CardProps = {
  children: ReactNode;
  header?: ReactNode;
  scaleIn?: boolean;
  shadow?: boolean;
  className?: string;
  dark?: boolean;
};

const Card = ({
  children,
  className,
  scaleIn = true,
  dark = false,
  shadow = false,
}: CardProps) => {
  return (
    <div
      className={`bg-light1 dark:bg-dark1 basis-1/4 rounded-card 
      ${className}
      ${shadow && "shadow-xl shadow-light2[.1]"}
      ${scaleIn && "animate-scaleInSm"} 
      ${dark ? "bg-light2 dark:bg-dark2" : "bg-light1 dark:bg-dark1"}`}
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
