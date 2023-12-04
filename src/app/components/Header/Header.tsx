import Image from "next/image";
import NavBar from "./NavBar";

const Header = (): React.ReactElement => {
  return (
    <div className="flex justify-center">
      <header className="flex absolute w-fit z-10 p-8 pt-[42px] gap-[32px] ">
        <Image
          src="/assets/dublabPNG.svg"
          alt="dublab Barcelona logo"
          width={627.259}
          height={138.42}
        />
        <NavBar />
      </header>
    </div>
  );
};

export default Header;
