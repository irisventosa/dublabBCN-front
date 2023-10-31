"use client";
import axios from "axios";
import { ReactElement, useEffect, useState } from "react";
import Image from "next/image";
import Button from "./Button";
import { LiveRadioData } from "@/app/types";

const livePlayerUrl = process.env.NEXT_PUBLIC_LIVE_RADIO_PLAYER;

const getLiveRadioData = async () => {
  const { data: onAirRadio } = await axios.get<LiveRadioData>(livePlayerUrl);

  return onAirRadio;
};

const RadioPlayer = (): ReactElement => {
  const [liveRadio, setLiveRadio] = useState({} as LiveRadioData);

  useEffect(() => {
    (async () => {
      const currentShowLive = await getLiveRadioData();
      setLiveRadio(currentShowLive);
    })();
  }, []);

  return (
    <ul className="h-[42px] min-w-[1100px] flex gap-[91px] justify-between items-center py-2 px-[31px] flex-row bg-black text-white font-Favorit text-sm font-light uppercase ">
      <li>BARCELONA 10:11:00</li>
      <li className="flex gap-[9px]">
        <Image
          src={"/assets/Ellipse.svg"}
          alt={"Elipse"}
          width={10}
          height={10}
        />
        En directe:
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
