"use client";
import Image from "next/image";
import Link from "next/link";
import NavBar from "./NavBar";
import { useSlideOver } from "@/app/contexts/SlideOverContext";

interface HeaderProps {
  backgroundColor: string;
}

const Header = ({ backgroundColor }: HeaderProps): React.ReactElement => {
  const { isOpen } = useSlideOver();

  const variableWidth = isOpen ? "2/4" : "screen";

  return (
    <div className="flex  justify-start bg-black ">
      <header
        className={`flex absolute w-${variableWidth} h-[219px] z-10 p-8 pt-[42px] gap-[32px] bg-${backgroundColor} `}
      >
        <Link href="/">
          <Image
            src="/assets/Logo_dublabBCN2024.png"
            alt="dublab Barcelona logo"
            width={627.259}
            height={138.42}
          />
        </Link>
        <NavBar />
      </header>
    </div>
  );
};

export default Header;
