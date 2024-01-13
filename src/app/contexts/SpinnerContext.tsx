import React, { ReactNode, createContext, useState } from "react";

interface SpinnerContextType {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SpinnerContext = createContext<SpinnerContextType | undefined>(
  undefined
);

interface SpinnerProviderProps {
  children: ReactNode;
}

export const SpinnerProvider = ({ children }: SpinnerProviderProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <SpinnerContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </SpinnerContext.Provider>
  );
};
