import React from "react";
import Image from "next/image";

const Credits = (): React.ReactElement => {
  return (
    <div className="flex-row flex items-end gap-[138px] pl-[33px] pt-[206px]">
      <ul className="flex flex-row gap-[196px] ">
        <li>
          <Image
            src="/assets/dblogo.svg"
            alt="dublab Barcelona logo"
            width={67}
            height={28}
          />
        </li>
        <li>Creditos</li>
        <li className="min-w-fit">Ⓒ 2023 Dublab Barcelona</li>
      </ul>
      <span className="text-2xl font-thin">
        dublab barcelona és una ràdio online <br /> comunitària sense ànim de
        lucre.
      </span>
    </div>
  );
};

export default Credits;
