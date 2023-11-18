import React from "react";
import Image from "next/image";
import Link from "next/link";

const ScheduledShow = (): React.ReactElement => {
  return (
    <div className="flex flex-row h-[212px] w-full bg-amber-600 text-white ">
      <Image
        src={"/assets/test2.png"}
        alt={""}
        width={263}
        height={150}
        className="py-[31px] pl-8"
      />
      <ul className="flex flex-col pl-[101px]">
        <li className="text-[32px] h-[47px] mt-[21px] ">SHOW NAME</li>
        <li className="text-[22px]">HOSTED BY SURNAME</li>
        <li className="pt-[63px]">
          <ul className="flex flex-row gap-[10px] text-[11px]">
            <li className="border rounded-md pt-[5px] px-2 ">POP CULTURE</li>
            <li className="border rounded-md pt-[5px]  px-2  ">
              MISCELLANEOUS
            </li>
            <li className="border rounded-md pt-[5px] px-2  ">THEMATIC</li>
          </ul>
        </li>
      </ul>
      <ul className="flex flex-col gap-[117px] items-end absolute right-0 p-[30px] ">
        <li>
          <Image
            className="animate-pulse animate-infinite animate-duration-[2000ms] animate-ease-in-out animate-normal mb-[5px]"
            src={"/assets/Ellipse.svg"}
            alt={"Elipse"}
            width={18}
            height={18}
          />
        </li>
        <li>
          <Link className="underline underline-offset-2  " href={""}>
            View show
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ScheduledShow;
