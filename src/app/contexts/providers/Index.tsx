"use client";

import RadioBar from "@/app/components/RadioBar/RadioBar";
import AudioProvider from "../AudioContext";
import { RadioDataProvider } from "../RadioDataContext";
import { SpinnerProvider } from "../SpinnerContext";
import { SlideOverProvider } from "../SlideOverContext";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";

interface AppProviderprops {
  children: React.ReactNode;
}

const AppProvider = ({ children }: AppProviderprops) => {
  return (
    <AudioProvider>
      <SpinnerProvider>
        <RadioDataProvider>
          <RadioBar />
          <SlideOverProvider>
            <Header />
            {children}
            <Footer />
          </SlideOverProvider>
        </RadioDataProvider>
      </SpinnerProvider>
    </AudioProvider>
  );
};

export default AppProvider;
