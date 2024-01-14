"use client";
import { LiveRadioData } from "@/app/types";
import Image from "next/image";
import Marquee from "react-fast-marquee";

interface CurrentAndNextShowProps {
  liveData: LiveRadioData;
}

const CurrentAndNextShow = ({ liveData }: CurrentAndNextShowProps) => {
  return (
    <>
      <li className="flex gap-[9px]">
        <Image
          className="animate-pulse animate-infinite animate-duration-[2000ms] animate-ease-in-out animate-normal mb-[5px]"
          src={"/assets/Ellipse.svg"}
          alt={"Elipse"}
          width={10}
          height={10}
        />
        <span className="min-w-fit"></span>
        {liveData?.currentShow[0].name ? (
          <Marquee className="max-w-[200px]">
            En directe:&nbsp; {liveData?.currentShow[0].name}&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Marquee>
        ) : (
          <span>Carregant...</span>
        )}
      </li>
      <li className="text-white/60 z-20 hidden sm:flex ">
        PRÒXIM:
        {liveData?.nextShow[0].starts ? (
          <div>
            <span className="ml-[19px]">
              {liveData?.nextShow[0].starts.slice(11, 16)}
            </span>
            <span className="ml-[19px]">{liveData?.nextShow[0].name}</span>
            {liveData?.nextShow[0].url && (
              <span className="ml-[19px]">
                -&nbsp; {liveData?.nextShow[0].url}
              </span>
            )}
          </div>
        ) : (
          <span>Carregant...</span>
        )}
      </li>
    </>
  );
};

export default CurrentAndNextShow;
