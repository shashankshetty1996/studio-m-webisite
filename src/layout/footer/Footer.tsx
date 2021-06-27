import { FC } from "react";

import SocialMedia from "./social-media/SocialMedia";

const Footer: FC<{}> = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-white py-4">
      <div className="container mx-auto md:flex text-center items-center justify-between text-gray-700">
        <p className="text-xs">
          &#169;Copyright {year}, Studio M. All Right Reserved.
        </p>
        <div className="flex items-center justify-center md:justify-self-start">
          <p className="text-xs">Get in touch with us: </p>
          <SocialMedia />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
