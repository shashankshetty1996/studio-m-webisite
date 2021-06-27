import { FC } from "react";

import InstagramIcon from "../../../assets/icons/instagram.svg";

interface social {
  link: string;
  imageSource: string;
}

const socialMedia: social[] = [
  {
    link: "https://www.instagram.com/studio_m_india/",
    imageSource: InstagramIcon,
  },
];

const SocialMedia: FC<{}> = () => {
  return (
    <div className="flex items-center justify-center">
      {socialMedia.map((social, index) => (
        <a
          className="mx-2 transform hover:scale-150"
          key={index}
          href={social.link}
          target="_blank"
          rel="noreferrer"
        >
          <img className="w-6 h-6" src={social.imageSource} alt={social.link} />
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
