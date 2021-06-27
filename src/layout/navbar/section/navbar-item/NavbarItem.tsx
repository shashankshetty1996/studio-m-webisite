import { FC } from "react";
import { NavLink } from "react-router-dom";

interface Props {
  route: string;
  onClick: () => void;
}

const NavbarItem: FC<Props> = (props) => {
  const { children, route, onClick } = props;
  return (
    <NavLink
      className="cursor-pointer list-none px-4 py-2 text-gray-700 text-3xl"
      to={route}
      onClick={onClick}
      exact
    >
      {children}
    </NavLink>
  );
};

export default NavbarItem;
