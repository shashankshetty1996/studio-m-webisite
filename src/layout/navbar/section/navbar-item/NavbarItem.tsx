import { FC } from "react";
import { NavLink } from "react-router-dom";

interface Props {
  route: string;
  onClick: () => void;
  size?: "small" | "large";
}

const NavbarItem: FC<Props> = (props) => {
  const { children, route, onClick, size = "small" } = props;
  const textSize = size === "small" ? "text-xl" : "text-3xl";
  return (
    <NavLink
      className={`nav-link cursor-pointer px-4 py-2 text-gray-700 ${textSize}`}
      to={route}
      onClick={onClick}
      exact
    >
      {children}
    </NavLink>
  );
};

export default NavbarItem;
