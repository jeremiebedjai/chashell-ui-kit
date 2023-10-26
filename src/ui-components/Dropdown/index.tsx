import React, {
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Button from "../Button";
import Card from "../Card";

type DropdownProps = {
  children: ReactNode;
  buttonElement?: ReactNode;
  buttonProps?: Parameters<typeof Button>[0];
  disabled?: boolean;
  openOnClick?: boolean;
  closeOnLeave?: boolean;
  openOnCursorPos?: boolean;
} & Parameters<typeof Card>[0];
const Dropdown = ({
  buttonProps,
  children,
  disabled,
  buttonElement,
  closeOnLeave = true,
  openOnClick = false,
  openOnCursorPos = false,
  ...cardProps
}: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState(0);
  const [[_cursorY, cursorX], setCursor] = useState([0, 0]);
  const key = useMemo(() => `dropdown-${String(Date.now())}`, [open]);
  const ref = useRef(null);
  const parentRef = useRef(null);

  useEffect(() => {
    if (ref.current) {
      const { width } = (ref.current as Element).getBoundingClientRect();
      if (size !== width) setSize(width);
    }
  }, [ref.current, parentRef.current, size, open, cursorX]);

  const setOpenCallback = useCallback(
    ({ clientY, clientX }: React.MouseEvent, open: boolean) => {
      if (open) {
        setCursor([clientY, clientX]);
      }

      setOpen(open);
    },
    [open, setCursor, setOpen, size, ref.current],
  );

  let offset = 0;
  if (parentRef.current && openOnCursorPos) {
    const { x } = (parentRef.current as Element).getBoundingClientRect();
    offset = openOnCursorPos ? cursorX - x : offset;
  }

  const cardStyle = " border border-slate-900/[.1] dark:border-slate-200/[.1] ";
  cardProps.className = cardStyle + (cardProps.className ?? "");

  return (
    <div
      ref={parentRef}
      className={"relative inline-flex"}
      onMouseLeave={(e) => closeOnLeave && setOpenCallback(e, false)}
    >
      {buttonElement ? (
        <div
          onMouseEnter={(e) => !openOnClick && setOpenCallback(e, true)}
          onClick={(e) => openOnClick && setOpenCallback(e, !open)}
        >
          {buttonElement}
        </div>
      ) : buttonProps ? (
        <Button
          {...buttonProps}
          disabled={disabled}
          onMouseEnter={() => !openOnClick && setOpen(true)}
          onClick={() => openOnClick && setOpen(!open)}
        />
      ) : null}
      {open && !disabled && (
        <div
          ref={ref}
          className={`${key} absolute top-[100%] z-[999] pt-1`}
          style={{
            left: openOnCursorPos ? offset : `calc(50% - (${size}px / 2)`,
          }}
        >
          <Card shadow {...cardProps}>
            <div>{children}</div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
