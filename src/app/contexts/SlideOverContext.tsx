import React, { ReactNode, createContext, useState } from "react";

interface SlideOverContextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SlideOverContext = createContext<SlideOverContextType | undefined>(
  undefined
);

interface SlideOverProviderProps {
  children: ReactNode;
}

export const SlideOverProvider = ({ children }: SlideOverProviderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <SlideOverContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SlideOverContext.Provider>
  );
};
