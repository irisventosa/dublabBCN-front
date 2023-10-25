import Image from "next/image";

const Header = (): React.ReactElement => {
  return (
    <Image
      src="/assets/dublabPNG.svg"
      alt="dublab Barcelona logo"
      width={500}
      height={600}
    />
  );
};

export default Header;
