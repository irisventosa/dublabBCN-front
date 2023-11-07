import Link from "next/link";
import React from "react";
import SocialLinks from "./SocialLinks";
import Contact from "./Contact";
import LegalLinks from "./LegalLinks";
import Newsletter from "./NewsleterSub";
import Credits from "./Credits";

const Footer = (): React.ReactElement => {
  return (
    <footer className="h-[484px] w-full bg-black text-white ">
      <ul className="flex flex-row place-content-evenly px-[33px] pt-[57px] text-sm font-normal gap-[74px]  ">
        <li className="w-[197px]">
          <SocialLinks />
        </li>
        <li className="w-[197px]">
          <Contact />
        </li>
        <li className="w-[197px]">
          <LegalLinks />
        </li>
        <li className=" ml-[92px]">
          <Newsletter />
        </li>
      </ul>
      <Credits />
    </footer>
  );
};

export default Footer;

// position top1964px
