import { ReactElement } from "react";
import Image from "next/image";
import Button from "../Button/Button";

const RadioPlayer = (): ReactElement => {
  return (
    <ul className="flex gap-[91px] justify-between items-center py-2 px-8 flex-row bg-black text-white font-Favorit text-sm font-light uppercase ">
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
      <li className="text-white/60">
        PRÒXIM:
        <span className="ml-[19px]">10:00 Persona (R) - ARTIST NAME</span>{" "}
      </li>
      <li>
        <span className="w-40 hover:invisible">VOLUME</span>{" "}
      </li>
      <li>
        <Button>PAUSE</Button>
      </li>
    </ul>
  );
};

export default RadioPlayer;
