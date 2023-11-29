import localfont from "next/font/local";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import RadioBar from "./components/RadioBar/RadioBar";
import "./globals.css";

const favorit = localfont({
  src: "./fonts/Favorit_Regular_Mono.ttf",
  variable: "--font-favorit",
});

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${favorit.variable} font-favorit antialiased`}>
        <RadioBar />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
