//'use client';
import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

const socials = [
    { icon: <FaGithub />, path: 'https://github.com/k-i-b-i-wott' },
    { icon: <FaYoutube />, path: 'https://www.youtube.com/@tanuicreme8056' },
    { icon: <FaLinkedin />, path: 'https://www.linkedin.com/in/brian-kibiwott-601959280/' },
    { icon: <FaTwitter />, path: '#' },
    { icon: <FaInstagram />, path: '#' },
    { icon: <FaFacebook />, path: '#' }
];

const Social = ({ containerStyles, iconStyles }) => {    
  return (
    <div className={containerStyles}>
       {socials.map((item, index) => (
          <Link key={index} href={item.path} className={iconStyles} target="_blank">
            {item.icon}
          </Link>
       ))}
    </div>
  );
};

export default Social;
