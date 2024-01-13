"use client";
import useAirtimeApi from "@/app/lib/hooks/useAirtimeApi";
import { RadioLiveShow } from "@/app/types";
import Image from "next/image";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import AudioPlayer from "./AudioPlayer";
import DigitalClock from "./DigitalClock";

const RadioBar = () => {
  const { getLiveRadioData } = useAirtimeApi();
  const [liveShow, setLiveShow] = useState<RadioLiveShow>({} as RadioLiveShow);
  const [{ name, url: hostedBy, starts }, setNextLiveShow] =
    useState<RadioLiveShow>({} as RadioLiveShow);

  const fetchData = async () => {
    const { currentShow, nextShow } = await getLiveRadioData();

    if (currentShow && currentShow[0]) {
      setLiveShow(currentShow[0]);

      if (nextShow && nextShow[0]) {
        setNextLiveShow(nextShow[0]);
      }
    }
  };

  fetchData();

  return (
    <ul className="h-[42px] min-w-full sticky z-50 top-0 flex sm:gap-[91px] justify-between items-center py-2  sm:px-8 px-4 flex-row bg-black text-white font-Favorit text-sm font-light uppercase ">
      <li className="hidden sm:block">
        <DigitalClock />
      </li>
      <li className="flex gap-[9px]">
        <Image
          className="animate-pulse animate-infinite animate-duration-[2000ms] animate-ease-in-out animate-normal mb-[5px]"
          src={"/assets/Ellipse.svg"}
          alt={"Elipse"}
          width={10}
          height={10}
        />
        <span className="min-w-fit"></span>
        {liveShow.name ? (
          <Marquee className="max-w-[200px]">
            En directe:&nbsp; {liveShow.name}&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Marquee>
        ) : (
          <span>Carregant...</span>
        )}
      </li>
      <li className="text-white/60 z-20 hidden sm:flex ">
        PRÒXIM:
        {starts ? (
          <div>
            <span className="ml-[19px]">{starts.slice(11, 16)}</span>
            <span className="ml-[19px]">{name}</span>
            <span className="ml-[19px]">- {hostedBy}</span>
          </div>
        ) : (
          <span>Carregant...</span>
        )}
      </li>
      <li>
        <AudioPlayer />
      </li>
    </ul>
  );
};

export default RadioBar;
