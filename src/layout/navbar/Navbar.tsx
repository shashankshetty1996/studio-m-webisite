import { FC, useState } from "react";

import { NavbarItem, SocialMedia } from "./section";
import { Drawer } from "../../components";

import router from "../../router";

import { ReactComponent as MenuIcon } from "../../assets/icons/menu.svg";
import { ReactComponent as CrossIcon } from "../../assets/icons/cross.svg";

import LogoIcon from "../../assets/icons/logo.png";

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
    <img className="w-32 h-12" src={LogoIcon} alt="Studio M" />
  );
  const MenuComponent = showMenu ? CrossIcon : MenuIcon;

  return (
    <header className="fixed inset-0 z-20 w-screen h-16 shadow-md bg-white">
      <div className="relative container mx-auto py-2 px-4 md:px-0 flex items-center justify-between">
        {LogoComponent}
        {/* Menu */}
        <MenuComponent
          className="cursor-pointer md:hidden"
          onClick={toggleMenu}
        />
      </div>
      {/* side drawer */}
      <Drawer show={showMenu}>
        <div className="flex flex-col justify-between h-full pb-4">
          <div className="flex flex-col w-full">
            <div className="m-2">{LogoComponent}</div>
            {menuListWithHome.map((menu, index) => (
              <NavbarItem key={index} route={menu.route} onClick={toggleMenu}>
                {menu.label}
              </NavbarItem>
            ))}
          </div>
          {/* social section */}
          <div className="flex items-center px-2">
            <h1 className="text-xl mb-2">Follow us:</h1>
            <SocialMedia />
          </div>
        </div>
      </Drawer>
    </header>
  );
};

export default Navbar;
