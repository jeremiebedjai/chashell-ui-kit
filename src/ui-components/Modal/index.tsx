import React, { useMemo, ReactNode } from "react";

type ModalProps = {
  children: ReactNode;
  open: boolean;
  onClose: () => unknown;
};
const Modal = ({ open, children, onClose }: ModalProps) => {
  const key = useMemo(() => `modal-${String(Date.now())}`, []);

  return open ? (
    <div
      className={`${key} z-[999] absolute w-full h-full left-0 top-0 cursor-pointer bg-[#0008] backdrop-blur-sm flex justify-items-center items-center`}
      onClick={({ target }) =>
        (target as Element)?.classList.contains(key) && onClose()
      }
    >
      <div className="m-auto cursor-auto mt-[150px]">{children}</div>
    </div>
  ) : null;
};

export default Modal;
