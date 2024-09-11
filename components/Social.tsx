import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FC } from "react";

const socials = [
  { icon: <FaGithub />, path: "" },
  { icon: <FaLinkedin />, path: "" },
  { icon: <FaGithub />, path: "" },
];

interface SocialProps {
  containerStyles?: string;
  iconStyles?: string;
}

const Social: FC<SocialProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link key={index} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
