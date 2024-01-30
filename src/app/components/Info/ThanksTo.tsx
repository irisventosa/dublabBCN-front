import Image from "next/image";

const Collaborators = () => {
  return (
    <div className="flex flex-row items-center w-fit gap-[15px] mt-[32px] pb-[63px] ">
      <span className="text-sm">Agraïments</span>
      <Image
        src={"/assets/agraiments/exp-art.png"}
        alt="experimentem amb l'art logo"
        width={72.8}
        height={26}
      ></Image>
      <Image
        src={"/assets/agraiments/gracia-tsonor.png"}
        alt="gracia territori sonor logo"
        width={48}
        height={48}
      ></Image>
      <Image
        src={"/assets/agraiments/xrcb.svg"}
        alt="xrcb logo"
        width={69}
        height={36}
      ></Image>
    </div>
  );
};

export default Collaborators;
