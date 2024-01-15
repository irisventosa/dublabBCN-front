"use client";
import Image from "next/image";
import React from "react";
import CreditsSlideOver from "../CreditsSlide";

const Credits = (): React.ReactElement => {
  return (
    <>
      <div className="items-end flex-row pl-[33px] pt-[63px] hidden sm:flex ">
        <ul className="flex flex-row items-end mr-[54px] gap-[1.95rem] ">
          <li>
            <Image
              className=""
              src={"/assets/D-B_vector.svg"}
              alt="dublab Barcelona logo"
              width={67}
              height={28}
            />
          </li>
          <li className="ml-[173px]">
            <CreditsSlideOver />
          </li>
          <li className="min-w-fit ml-[172px] ">Ⓒ 2023 Dublab Barcelona</li>
        </ul>
        <span className="hidden sm:block text-[1.5rem] font-thin min-w-fit ml-[173px] ">
          dublab barcelona és una ràdio online <br /> comunitària sense ànim de
          lucre.
        </span>
      </div>
    </>
  );
};

export default Credits;
