import React, { ReactNode, createContext, useContext } from "react";
import Button from "../Button";
import Card from "../Card";
import { NavLink } from "react-router-dom";

type SidebarProps = {
  active: string;
  onCallback?: (key: string) => unknown;
  title?: string;
  children: ReactNode;
};

interface ISidebarContext {
  active: string | undefined;
  onCallback?: (key: string) => unknown;
}

const SidebarContext = createContext<ISidebarContext>({
  active: undefined,
  onCallback: () => undefined,
});
const Sidebar = ({ active, onCallback, title, children }: SidebarProps) => {
  return (
    <SidebarContext.Provider value={{ active, onCallback }}>
      <Card className="lg:w-auto">
        <div className="flex flex-col p-4">
          {title && <p className="opacity-50 text-sm px-4 mb-4 hidden lg:block">{title}</p>}
          {children}
        </div>
      </Card>
    </SidebarContext.Provider>
  );
};

type ItemProps = {
  icon: string;
  children: ReactNode;
  name: string;
};

Sidebar.Item = ({ children, icon, name }: ItemProps) => {
  const { active, onCallback } = useContext(SidebarContext);
  const isActive = active === name;
  const ButtonElement = () => (
    <>
      <Button
        className="lg:flex hidden"
        variant={Button.Variants.nav}
        iconProps={icon}
        active={isActive}
        onClick={() => onCallback && onCallback(name)}
      >
        {children}
      </Button>
      <Button
        className="flex lg:hidden mb-4"
        variant={Button.Variants.tab}
        iconProps={icon}
        active={isActive}
        onClick={() => onCallback && onCallback(name)}
      />
    </>
  );

  return isActive ? (
    <ButtonElement />
  ) : (
    <NavLink to={name} className="visited:fill-current">
      <ButtonElement />
    </NavLink>
  );
};
export default Sidebar;
