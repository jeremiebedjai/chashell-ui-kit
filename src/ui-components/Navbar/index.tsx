import React, { createContext, ReactNode, useContext } from "react";
import { NavLink } from "react-router-dom";
import Button from "../Button";
import Dropdown from "../Dropdown";

type NavbarProps = {
  children?: ReactNode;
  logo?: ReactNode;
  active: string;
  onCallback?: (key: string) => unknown;
  className?: string;
};

interface INavbarContext {
  active: string | undefined;
  onCallback?: (key: string) => unknown;
}

const NavbarContext = createContext<INavbarContext>({
  active: undefined,
  onCallback: () => undefined,
});

const Navbar = ({
  logo,
  children,
  active,
  onCallback,
  className,
}: NavbarProps) => {
  return (
    <NavbarContext.Provider value={{ active, onCallback }}>
      <div
        className={`w-full flex justify-between items-center h-[82px] text-lg ${className}`}
      >
        <div>{logo}</div>
        <div className="hidden lg:flex gap-8 items-center pr-4">{children}</div>
        <div className="flex lg:hidden gap-8 items-center pr-4">
          <Dropdown
            openOnClick
            closeOnLeave={false}
            className="min-w-[400px] pr-[100px]"
            buttonProps={{ iconProps: "menu-outline" }}
          >
            {children}
          </Dropdown>
        </div>
      </div>
    </NavbarContext.Provider>
  );
};

type ItemProps = {
  children: ReactNode;
  name: string;
  className?: string;
};

Navbar.Item = ({ children, name, className }: ItemProps) => {
  const { active, onCallback } = useContext(NavbarContext);
  const isActive = active === name;

  const ButtonElement = () => (
    <Button
      className={className}
      variant={Button.Variants.tab}
      active={active === name}
      onClick={() => onCallback && onCallback(name)}
    >
      {children}
    </Button>
  );

  return isActive ? (
    <ButtonElement />
  ) : (
    <NavLink to={`${name}`} className="visited:fill-current">
      <ButtonElement />
    </NavLink>
  );
};

export default Navbar;
