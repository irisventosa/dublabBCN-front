import Image from "next/image";

const Collaborators = () => {
  return (
    <div className="flex flex-row items-center w-fit gap-[15px] pt-[40px] ">
      <span className="text-sm">Colaboren</span>
      <Image
        src={"/assets/dublab-collaboradores/ajuntament.svg"}
        alt="ajuntament bcn logo"
        width={87}
        height={30}
      ></Image>
      <Image
        src={"/assets/dublab-collaboradores/sonar.png"}
        alt="sonar logo"
        width={81}
        height={40}
      ></Image>
      <Image
        src={"/assets/dublab-collaboradores/mahou.png"}
        alt="mahou ipa logo"
        width={64}
        height={40}
      ></Image>
      <Image
        src={"/assets/dublab-collaboradores/discogs.svg"}
        alt="discogs logo"
        width={72}
        height={26}
      ></Image>
    </div>
  );
};

export default Collaborators;
