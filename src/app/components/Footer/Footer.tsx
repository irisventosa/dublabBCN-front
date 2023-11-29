import React from "react";
import Contact from "./Contact";
import Credits from "./Credits";
import LegalLinks from "./LegalLinks";
import Newsletter from "./NewsleterSub";
import SocialLinks from "./SocialLinks";

const Footer = (): React.ReactElement => {
  return (
    <footer className="h-[484px] w-full bg-black text-white border-t-2 border-white ">
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
