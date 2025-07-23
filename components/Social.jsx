import Link from "next/link";

import {FaGithub, FaLinkedin, FaYoutube, FaTwitter, FaInstagram} from 'react-icons/fa';

const socials = [
    {icon: <FaGithub />, path: "https://github.com/AriefDR"},
    {icon: <FaLinkedin />, path: "https://www.linkedin.com/in/arief-dwi-rachmadian"},
    {icon: <FaInstagram />, path: "https://www.instagram.com/brxle0"}

]

const Social = ({containerStyle, iconStyle}) => {
  return (
    <div className={containerStyle}>
        {socials.map((social, index) => {
            return <Link key={index} href={social.path} className={iconStyle} target="_blank" rel="noopener noreferrer">{social.icon}</Link>
        })}
    </div>
  )
};

export default Social;