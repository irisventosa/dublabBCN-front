"use client";
import { useRef, useState } from "react";
import Button from "../Button";

const streamingSource = "https://dublabbcn.out.airtime.pro/dublabbcn_a";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const changeVolume = (e) => {
    const volume = e.target.value;
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  };

  return (
    <div className="min-w-fit flex ">
      <audio src={streamingSource} ref={audioRef}></audio>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        onChange={changeVolume}
        className="z-20 "
      />
      <Button
        actionOnClick={togglePlay}
        className="uppercase z-20 min-w-[17px]"
      >
        {isPlaying ? "Pause" : "Play"}
      </Button>
    </div>
  );
};

export default AudioPlayer;
