import React, { createContext, useState, useContext, ReactNode } from "react";

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

export const useSlideOver = () => {
  const context = useContext(SlideOverContext);
  if (!context) {
    throw new Error("useSlideOver must be used within a SlideOverProvider");
  }
  return context;
};
