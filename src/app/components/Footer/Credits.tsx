import React from "react";
import Image from "next/image";

const Credits = (): React.ReactElement => {
  return (
    <div className="flex items-end flex-row pl-[33px] pt-[163px]">
      <ul className="flex flex-row items-end mr-[54px] ">
        <li>
          <Image
            className=""
            src="/assets/dblogo.svg"
            alt="dublab Barcelona logo"
            width={67}
            height={28}
          />
        </li>
        <li className="ml-[173px]">Credits</li>
        <li className="min-w-fit ml-[143px] ">Ⓒ 2023 Dublab Barcelona</li>
      </ul>
      <span className="text-[1.5rem] font-thin min-w-fit ml-[90px] ">
        dublab barcelona és una ràdio online <br /> comunitària sense ànim de
        lucre.
      </span>
    </div>
  );
};

export default Credits;
