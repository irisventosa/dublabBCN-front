"use client";
import localfont from "next/font/local";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import RadioBar from "./components/RadioBar/RadioBar";
import AudioProvider from "./contexts/AudioContext";
import { RadioDataProvider } from "./contexts/RadioDataContext";
import { SlideOverProvider } from "./contexts/SlideOverContext";
import { SpinnerProvider } from "./contexts/SpinnerContext";
import "./globals.css";

const favorit = localfont({
  src: "./fonts/Favorit_Regular_Mono.ttf",
  variable: "--font-favorit",
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [backgroundColor, setBackgroundColor] = useState("white");
  const changeBackgroundPath = "/b-sides";

  useEffect(() => {
    setBackgroundColor(
      pathname.includes(changeBackgroundPath) ? "black" : "transparent"
    );
  }, [pathname]);

  return (
    <html lang="en">
      <AudioProvider>
        <SpinnerProvider>
          <RadioDataProvider>
            <body className={`${favorit.variable} font-favorit antialiased`}>
              <RadioBar />

              <SlideOverProvider>
                <Header backgroundColor={backgroundColor} />
                {children}
                <Footer />
              </SlideOverProvider>
            </body>
          </RadioDataProvider>
        </SpinnerProvider>
      </AudioProvider>
    </html>
  );
};

export default RootLayout;
