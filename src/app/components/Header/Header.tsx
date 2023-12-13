"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";

const Header = (): React.ReactElement => {
  const pathname = usePathname();
  const [headerBackground, setHeaderBackground] = useState("white");
  const changeBackgroundPath = "/b-sides";

  useEffect(() => {
    setHeaderBackground(pathname === changeBackgroundPath ? "black" : "");
  }, [pathname]);

  return (
    <div className="flex justify-center bg-black ">
      <header
        className={`flex absolute w-screen h-[2019] z-10 p-8 pt-[42px] gap-[32px] bg-${headerBackground} `}
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
