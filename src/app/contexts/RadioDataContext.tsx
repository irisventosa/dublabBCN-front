import { ReactNode, createContext, useState } from "react";
import { LiveRadioData } from "../types"; // Import your RadioLiveShow type

interface RadioDataContextType {
  liveData: LiveRadioData | null;
  setliveData: (liveData: LiveRadioData | null) => void;
}

export const RadioDataContext = createContext<RadioDataContextType | undefined>(
  undefined
);

interface RadioDataProviderProps {
  children: ReactNode;
}

export const RadioDataProvider = ({ children }: RadioDataProviderProps) => {
  const [liveData, setliveData] = useState<LiveRadioData | null>(null);

  return (
    <RadioDataContext.Provider value={{ liveData, setliveData }}>
      {children}
    </RadioDataContext.Provider>
  );
};
