import Image from "next/image";
import NavBar from "../NavBar/NavBar";

const Header = (): React.ReactElement => {
  return (
    <header className="flex absolute z-10 p-8 pt-[42px]">
      <Image
        src="/assets/dublabPNG.svg"
        alt="dublab Barcelona logo"
        width={627.259}
        height={138.42}
      />
      <NavBar />
    </header>
  );
};

export default Header;
