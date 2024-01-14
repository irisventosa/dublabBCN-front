import { useContext } from "react";
import { SpinnerContext } from "./SpinnerContext";
import { SlideOverContext } from "./SlideOverContext";
import { AudioContext } from "./AudioContext";
import { RadioDataContext } from "./RadioDataContext";

export const useSlideOver = () => {
  const context = useContext(SlideOverContext);
  if (!context) {
    throw new Error("useSlideOver must be used within a SlideOverProvider");
  }
  return context;
};

export const useSpinner = () => {
  const context = useContext(SpinnerContext);
  if (!context) {
    throw new Error("useSpinner must be used within a SpinnerProvider");
  }
  return context;
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
};

export const useRadioDataContext = () => {
  const context = useContext(RadioDataContext);
  if (!context) {
    throw new Error(
      "useRadioDataContext must be used within a RadioDataProvider"
    );
  }
  return context;
};
