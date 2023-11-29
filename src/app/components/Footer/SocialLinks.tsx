import Link from "next/link";
import React from "react";

const socials = [
  {
    network: "Instagram",
    link: "https://www.instagram.com/dublab.es/",
  },
  {
    network: "Twitter",
    link: "https://twitter.com/dublabes",
  },
];

const SocialLinks = (): React.ReactElement => {
  return (
    <div>
      <span>Social</span>
      <ul className="mt-[26px]">
        {socials.map((social) => (
          <li className="h-8" key={social.link}>
            <Link href={social.link}>{social.network}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
