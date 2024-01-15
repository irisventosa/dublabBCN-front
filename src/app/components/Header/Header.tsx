"use client";
import { useSlideOver } from "@/app/contexts/useContexts";
import Image from "next/image";
import Link from "next/link";
import SlideOverMenu from "../SlideOverMenu";
import NavBar from "./NavBar";

interface HeaderProps {
  backgroundColor: string;
}

const Header = ({ backgroundColor }: HeaderProps): React.ReactElement => {
  const { isOpen, setIsOpen } = useSlideOver();

  const variableWidth = isOpen ? "2/4" : "full";

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex justify-start bg-black ">
      <header
        className={`flex justify-between sm:p-8 absolute w-${variableWidth} max-w-[100vw] h-[219px] z-10 p-4 pt-[42px] gap-[32px] bg-${backgroundColor} `}
      >
        <Link onClick={handleLinkClick} href="/">
          <Image
            src="/assets/Logo_dublabBCN2024.png"
            alt="dublab Barcelona logo"
            width={627.259}
            height={138.42}
            className="relative z-50 w-[244px] h-[80px] "
          />
        </Link>
        <NavBar />
        <SlideOverMenu />
      </header>
    </div>
  );
};

export default Header;
