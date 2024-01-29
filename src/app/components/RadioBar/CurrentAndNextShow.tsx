"use client";
import { LiveRadioData } from "@/app/types";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import he from "he";

interface CurrentAndNextShowProps {
  liveData: LiveRadioData;
}

const CurrentAndNextShow = ({ liveData }: CurrentAndNextShowProps) => {
  const currentShowName = liveData?.currentShow[0]?.name || null;
  const nextShowStarts = liveData?.nextShow[0]?.starts || null;
  const nextShowName = liveData?.nextShow[0]?.name || null;
  const nextShowHost = liveData?.nextShow[0]?.url || null;

  const decodedCurrentShow = currentShowName
    ? he.decode(currentShowName)
    : null;

  return (
    <>
      <li className="flex gap-[9px]">
        <Image
          className="animate-pulse animate-infinite animate-duration-[2000ms] animate-ease-in-out animate-normal mb-[5px]"
          src={"/assets/Ellipse.svg"}
          alt={"Elipse"}
          width={"10"}
          height={"10"}
        />
        <span className="min-w-fit"></span>
        {currentShowName ? (
          <Marquee className="max-w-[200px]">
            En directe:&nbsp; {decodedCurrentShow}&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Marquee>
        ) : (
          <Marquee className="max-w-[200px]">
            Informació no disponible
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Marquee>
        )}
      </li>
      <li className="text-white/60 z-20 hidden sm:flex ">
        PRÒXIM:
        {nextShowStarts ? (
          <div>
            <span className="ml-[19px]">{nextShowStarts.slice(11, 16)}</span>
            <span className="ml-[19px]">
              {he.decode(nextShowName as string)}
            </span>
            {nextShowHost && (
              <span>&nbsp;-&nbsp;{he.decode(nextShowHost as string)}</span>
            )}
          </div>
        ) : (
          <span>Informació no disponible...</span>
        )}
      </li>
    </>
  );
};

export default CurrentAndNextShow;
