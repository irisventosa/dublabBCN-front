import localfont from "next/font/local";
import AppProvider from "./contexts/providers/Index";
import "./globals.css";
import { Metadata } from "next";

const favorit = localfont({
  src: "./fonts/Favorit_Regular_Mono.ttf",
  variable: "--font-favorit",
});

export const metadata: Metadata = {
  title: { absolute: "", default: "dublab BCN", template: "%s | dublab BCN " },
  description: "Pagina web de la radio comunitaria dublab BCN",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ca">
      <body className={`${favorit.variable} font-favorit antialiased`}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
};

export default RootLayout;
