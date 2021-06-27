import { FC, useState } from "react";
import { Link } from "react-router-dom";

import { NavbarItem } from "./section";
import { Drawer } from "../../components";

import router from "../../router";

import { ReactComponent as MenuIcon } from "../../assets/icons/menu.svg";
import { ReactComponent as CrossIcon } from "../../assets/icons/cross.svg";

import "./Navbar.css";

interface Menu {
  label: string;
  route: string;
}

const menuList: Menu[] = [
  { label: "Studio", route: router.studio.main },
  { label: "Projects", route: router.projects.main },
  { label: "Contact Us", route: router.contact.main },
];

const homeMenu: Menu = { label: "Home", route: router.dashboard.main };
const menuListWithHome = [homeMenu, ...menuList];

const Navbar: FC<{}> = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const toggleMenu = () => setShowMenu((c) => !c);

  const LogoComponent = (
    <Link to="/">
      {/* <img className="w-32 h-12" src={LogoIcon} alt="Studio M" /> */}
      <p className="logo font-black uppercase text-2xl">Studio M</p>
    </Link>
  );
  const MenuComponent = showMenu ? CrossIcon : MenuIcon;

  return (
    <header className="fixed inset-0 z-20 w-screen h-16 bg-white">
      <div className="relative container mx-auto px-4 md:px-0 h-full flex items-center justify-between">
        {LogoComponent}
        {/* Menu icon, only for mobile view */}
        <MenuComponent
          className="cursor-pointer md:hidden"
          onClick={toggleMenu}
        />
        {/* Menu item for desktop only */}
        <div className="hidden md:flex items-center h-full">
          {menuList.map((menu, index) => (
            <NavbarItem key={index} route={menu.route} onClick={toggleMenu}>
              {menu.label}
            </NavbarItem>
          ))}
          {/* <SocialMedia /> */}
        </div>
      </div>
      {/* side drawer */}
      <Drawer className="md:hidden" show={showMenu}>
        {/* <div className="flex flex-col justify-between h-full"> */}
        <div className="flex flex-col w-full h-full">
          <div className="m-2">{LogoComponent}</div>
          {menuListWithHome.map((menu, index) => (
            <NavbarItem key={index} route={menu.route} onClick={toggleMenu}>
              {menu.label}
            </NavbarItem>
          ))}
        </div>
        {/* </div> */}
      </Drawer>
    </header>
  );
};

export default Navbar;
