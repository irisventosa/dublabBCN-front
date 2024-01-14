import { ReactNode, createContext, useState } from "react";

interface AudioContextProps {
  children: ReactNode;
}

interface AudioData {
  audio: HTMLAudioElement | null;
  setAudio: (audio: HTMLAudioElement) => void;
}

export const AudioContext = createContext<AudioData | null>(null);

const AudioProvider = ({ children }: AudioContextProps) => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  return (
    <AudioContext.Provider value={{ audio, setAudio }}>
      {children}
    </AudioContext.Provider>
  );
};

export default AudioProvider;
