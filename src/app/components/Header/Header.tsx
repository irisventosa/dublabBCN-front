"use client";
import Image from "next/image";
import Link from "next/link";
import NavBar from "./NavBar";

interface HeaderProps {
  backgroundColor: string;
}

const Header = ({ backgroundColor }: HeaderProps): React.ReactElement => {
  return (
    <div className="flex justify-center bg-black ">
      <header
        className={`flex absolute w-screen h-[219px] z-10 p-8 pt-[42px] gap-[32px] bg-${backgroundColor} `}
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
