"use client";
import localfont from "next/font/local";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import RadioBar from "./components/RadioBar/RadioBar";
import "./globals.css";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const favorit = localfont({
  src: "./fonts/Favorit_Regular_Mono.ttf",
  variable: "--font-favorit",
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [backgroundColor, setBackgroundColor] = useState("white");
  const changeBackgroundPath = "/b-sides";

  useEffect(() => {
    setBackgroundColor(pathname.includes(changeBackgroundPath) ? "black" : "");
  }, [pathname]);

  return (
    <html lang="en">
      <body className={`${favorit.variable} font-favorit antialiased`}>
        <RadioBar />
        {backgroundColor === "black" ? (
          <hr className="border-white w-full" />
        ) : (
          ""
        )}
        <Header backgroundColor={backgroundColor} />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
