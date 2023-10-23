import React from "react"
import Button from "../Button";


type CardProps = {
  title: string;
  onClose?: Parameters<typeof Button>[0]["onClick"];
};
const CardHead = ({ title, onClose }: CardProps) => {
  return (
    <div className="border-b border-[#5555] flex justify-between p-4">
      <div className="gap-2">
        <h1 className="text-lg font-semibold">{title}</h1>
      </div>
      {onClose && (
        <div className="text-center content-center flex">
          <Button onClick={onClose} iconProps={{ name: "close", size: 15 }} />
        </div>
      )}
    </div>
  );
};

export default CardHead;
