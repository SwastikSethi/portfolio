import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FC } from "react";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/SwastikSethi" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/swastiksethi/" },
  { icon: <SiLeetcode  />, path: "https://leetcode.com/u/swastiksethi7/" },
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
