import React from "react"

type AvatarProps = {
  src: string;
  size: number;
};
const Avatar = ({ src, size }: AvatarProps) => {
  return (
    <img
      src={src}
      className="object-contain rounded-full "
      style={{ width: size, height: size }}
    />
  );
};

export default Avatar