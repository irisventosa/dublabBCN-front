"use client";
import { useSlideOver } from "@/app/contexts/useContexts";
import Image from "next/image";
import Link from "next/link";
import SlideOverMenu from "../SlideOverMenu";
import NavBar from "./NavBar";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Header = (): React.ReactElement => {
  const { isOpen, setIsOpen } = useSlideOver();
  const variableWidth = isOpen ? "2/4" : "full";
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const pathname = usePathname();
  const [backgroundColor, setBackgroundColor] = useState("white");
  const changeBackgroundPath = "/b-sides";

  useEffect(() => {
    setBackgroundColor(
      pathname.includes(changeBackgroundPath) ? "black" : "transparent"
    );
  }, [pathname]);

  return (
    <div className="flex justify-start bg-black ">
      <header
        className={`  w-fit flex justify-start sm:p-8 absolute w-${variableWidth} h-[219px] z-10 p-4 pt-[42px] gap-8 2xl:gap-[300px] bg-${backgroundColor} `}
      >
        <Link onClick={handleLinkClick} href="/">
          <Image
            src="/assets/Logo_dublabBCN2024.png"
            alt="dublab Barcelona logo"
            width={627.259}
            height={138.42}
            className="relative left-2; z-50 sm:max-h-[138px] min-w-[150px] w-auto h-auto "
          />
        </Link>
        <NavBar />
        <SlideOverMenu />
      </header>
    </div>
  );
};

export default Header;
