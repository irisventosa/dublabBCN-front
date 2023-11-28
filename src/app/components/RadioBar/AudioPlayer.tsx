"use client";
import { ChangeEvent, ReactNode, Ref, useRef, useState } from "react";
import Button from "../Button";

const streamingSource = "https://dublabbcn.out.airtime.pro/dublabbcn_a";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const volume = +e.target.value;
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  };

  return (
    <div className="min-w-fit flex gap-[200px] group ">
      <audio src={streamingSource} ref={audioRef}></audio>
      <div className="group z-40 relative ml-6 ">
        <span className="visible group-hover:invisible z-40 min-w-[100px] min-h[30px] absolute">
          Volume
        </span>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          onChange={changeVolume}
          className="group-hover:visible invisible z-40 absolute mt-1 mr-10 appearance-none bg-white overflow-hidden"
        />
      </div>
      <Button
        actionOnClick={togglePlay}
        className="uppercase z-20 min-w-[42px]"
      >
        {isPlaying ? "Pause" : "Play"}
      </Button>
    </div>
  );
};

export default AudioPlayer;
