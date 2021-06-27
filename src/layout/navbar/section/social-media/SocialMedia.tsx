import { FC } from "react";

import fbIcon from "../../../../assets/icons/social/facebook.svg";
import InstagramIcon from "../../../../assets/icons/social/instagram.svg";
import linkedInIcon from "../../../../assets/icons/social/linkedin.svg";
import whatsappIcon from "../../../../assets/icons/social/whatsapp.svg";

interface social {
  link: string;
  imageSource: string;
}

const socialMedia: social[] = [
  { link: "#", imageSource: InstagramIcon },
  { link: "#", imageSource: whatsappIcon },
  { link: "#", imageSource: linkedInIcon },
  { link: "#", imageSource: fbIcon },
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
