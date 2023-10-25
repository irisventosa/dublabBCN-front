import { ReactElement } from "react";
import Image from "next/image";

const RadioPlayer = (): ReactElement => {
  return (
    <ul className="flex gap-[91px] justify-between items-center py-2 px-8 flex-row bg-black text-white font-Favorit text-sm	 font-s font-light uppercase ">
      <li>BARCELONA 10:11:00</li>
      <li className="flex gap-[9px]">
        <Image
          src={"/assets/Ellipse.svg"}
          alt={"Elipse"}
          width={10}
          height={10}
        />
        En directe:
        <span className="ml-[19px]">The Sinners Inn Show - ARTIST NAME</span>
      </li>
      <li className="">
        PRÒXIM:{" "}
        <span className="ml-[19px]">10:00 Persona (R) - ARTIST NAME</span>{" "}
      </li>
      <li className="w-40">VOLUME</li>
      <li>PAUSE</li>
    </ul>
  );
};

export default RadioPlayer;
